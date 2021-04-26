<template>
    <div class="Blog-toc-container">
        <h2>目录</h2>
        <RightList :list="tocWithSelected" @clickdown="handleBlogClick"/>
    </div>
</template>

<script>
import RightList from './RightList'
import debounce from '@/utils/debounce'
export default {
    components:{
        RightList
    },
    props:{
        toc:{
            type:Array,
            require:true
        }
    },
    data(){
        return {
            activeAnchor:''
        }
    },
    computed:{
        tocWithSelected(){
            const getToc = (toc = []) => {
                return toc.map((it)=>({
                    ...it,
                    selected:this.activeAnchor === it.anchor,
                    children:getToc(it.children)
                }))
            }
            return  getToc(this.toc)
        },
        doms(){
            let dom = [];
            const getDom = (toc) => {
                for(const i of toc){
                   dom.push(document.getElementById(i.anchor));
                //    console.log(document.getElementById(i.anchor),toc,i.anchor)
                   if(i.children){
                       getDom(i.children)
                   }
                }
            }
            getDom(this.toc);
            return dom
        },
    },
    created(){
        this.setSelectDebounce = debounce(this.setSelect,50)
        this.$bus.$on('mainScroll',this.setSelectDebounce);
    },
    destroyed() {
        this.$bus.$off("mainScroll", this.setSelectDebounce);
    },
    methods:{
        handleBlogClick(item){
            location.hash = item.anchor;
        },
        setSelect(){
            this.activeAnchor = ""
            for (const dom of this.doms) {
                
                if(!dom){
                    return 
                }
                const top = dom.getBoundingClientRect().top;
                if(top < 200 && top > 0){
                    this.activeAnchor = dom.id
                }else if(top >= 200){
                    return
                }else{
                    this.activeAnchor = dom.id
                }
            }
        }
    },
}
</script>

<style>

</style>