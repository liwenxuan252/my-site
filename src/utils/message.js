import getCompRootDom from '@/utils/getCompRootDom'
import styles from '@/utils/message.module.less'
import Icon from '@/components/Icon'
/**
 * @description: 弹出一个消息窗
 * @param {String} content 消息内容
 * @param {String} type  消息类型  error warn success info
 * @param {Number} duration 消息弹窗维持时间
 * @param {String} container 消息弹窗容器
 * @return {*}
 */
export default function (options = {}){
    var content = options.content || '感谢您的评论';
    var type = options.type || 'info';
    var duration = options.duration || 2000;
    var container = options.container || document.body;
    var icon = getCompRootDom(Icon,{
        type
    })
    var div = document.createElement('div');
    var typeClass = styles[`message-${type}`];
    div.innerHTML = `${icon.outerHTML}<span>${content}</span>`;
    div.className = `${styles.message} ${typeClass}`;
    if(container !== document.body){
        if(getComputedStyle(container).position === 'static'){
            container.style.position = 'relative'
        }
    }
    container.appendChild(div);

    //浏览器强行渲染
    div.clientHeight;


    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;

    


    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = 'translate(-50%,-50%) translateY(-20px)';
        div.addEventListener('transitionend',function(){
            div.remove();
            options.callback && options.callback();
        },{once:true})
    }, duration);
}