import {getSetting} from '@/api/setting.js'
import titleController from '@/utils/getTitle.js'
export default {
    namespaced:true,
    state:{
        loading:false,
        data:[]
    },
    mutations:{
        setLoading(state,payload){
            state.loading = payload
        },
        setData(state,payload){
            state.data = payload
        }
    },
    actions:{
        async fetchSettingDate(context,payload){
            if(context.state.data.length > 0){
                return 
            }
            context.commit('setLoading',true)
            const resp = await getSetting();
            context.commit('setData',resp)
            context.commit('setLoading',false)
            if (resp.favicon) {
                // <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico">
                let link = document.querySelector("link[ref='shortcut icon']");
                if (link) {
                    return;
                }
                link = document.createElement("link");
                link.rel = "shortcut icon";
                link.type = "images/x-icon";
                link.href = resp.favicon;
                document.querySelector("head").appendChild(link);
            }
            if(resp){
                titleController.setSiteTitle(resp.siteTitle);
            }
        }
    }
}
