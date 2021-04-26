
import axios from 'axios';
import $message from '@/utils/message'

const continu =  axios.create();

continu.interceptors.response.use(function(resp){
    if(resp.data.code !== 0){
        $message({
            content:resp.data.msg,
            type:"error",
            duration:2000,
        })
        return null;
    }
    return resp.data.data;
})


export default continu;