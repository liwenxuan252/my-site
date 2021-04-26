export default function (refValue){
    return {
        mounted(){
            this.$refs[refValue].addEventListener("scroll",this.handleScroll);
            this.$bus.$on("setScrollTop",this.toTop)
        },
        beforeDestroy(){
            this.$bus.$emit("mainScroll",undefined);
            this.$bus.$off("setScrollTop",this.toTop)
            this.$refs[refValue].removeEventListener("scroll", this.handleScroll);
        },
        methods:{
            handleScroll(){
                this.$bus.$emit("mainScroll", this.$refs[refValue]);
            },
            toTop(scrollTop){
                this.$refs[refValue].scrollTop = scrollTop;
            }
        }
    }
}