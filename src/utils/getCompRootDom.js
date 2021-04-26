
/**
 * @description: 得到一个组件的的根元素DOM
 * @param {string} component
 * @param {object} props
 * @return {*}
 */
import Vue from 'vue';

export default function (component,props){
    const vm = new Vue({
        render: h => h(component,{props})
    })
    vm.$mount();
    return vm.$el;
}