import imgUrl from '@/assets/loading.svg'
import imgStyles from './loading.module.less'
function getLoadingImg(el){
    return el.querySelector("img[data-role=loading]");
}

//创建一个img
function createImg(){
    var img = document.createElement('img');
    img.src = imgUrl;
    img.dataset.role = 'loading';
    img.className = imgStyles.loading;
    return img
    
}

export default function(el,binding){
    const curImg = getLoadingImg(el);
    if (binding.value) {
        if (!curImg) {
            const img = createImg();
            el.appendChild(img);
        }
    } else {
        if (curImg) {
            curImg.remove();
        }
    }
}