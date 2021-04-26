import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import banner from './banner'
import setting from './setting'
import about from './about'
import project from './project'

const store = new Vuex.Store({
    modules:{
        banner,
        setting,
        about,
        project,
    },
    strict:true
})

export default store;