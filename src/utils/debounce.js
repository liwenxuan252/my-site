//防抖

export default function(fn,duration = 1000){
    let timer = null;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, duration);
    };
}