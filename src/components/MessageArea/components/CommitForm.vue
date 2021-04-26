<template>
    <form ref="form" @submit.prevent="handleSubmit" action="" class="Commmit-form-container">
        <div class="form-item">
            <div class="nickname-box">
                <input 
                    type="text" 
                    v-model="formData.nickname" 
                    maxlength="10"
                    placeholder="用户昵称"
                >
                <span class="aside">{{formData.nickname.length}}/10</span>
            </div>
            <div class="error">{{error.nickname}}</div>
        </div>
        <div class="form-item">
            <div class="content-box">
                <textarea 
                    cols="30" 
                    rows="10" 
                    placeholder="输入内容"
                    maxlength="300"
                    v-model="formData.content"
                ></textarea>
                <span class="aside">{{formData.content.length}}/300</span>
            </div>
            <div class="error">{{error.content}}</div>
        </div>
        <div class="btn-box">   
            <button :disabled="isSubmiting">{{isSubmiting ? '提交中' : '提交'}}</button>
        </div>
        </form>
</template>

<script>
export default {
    data(){
        return {
            formData:{
                nickname: "",
                content: "",
            },
            error:{
                nickname: "",
                content: "",
            },
            isSubmiting:false
        }
    },
    methods:{
        handleSubmit(){
            this.error.nickname = this.formData.nickname ? "" : "请填写昵称";
            this.error.content = this.formData.content ? "" : "请填写内容";
            if (this.error.nickname || this.error.content) {
                // 有错误
                return;
            }
            this.isSubmiting = true;
            this.$emit("submit",this.formData,(successInfo)=>{
                this.$message({
                    content:successInfo,
                    type:'success',
                    duration:1000,
                    container:this.$refs.form,
                    callback:()=>{
                        this.isSubmiting = false;
                        this.formData.nickname = '';
                        this.formData.content = '';
                    }
                })
            })
        }
    }
}
</script>

<style lang="less" scoped> 
@import "~@/styles/var.less";
    .Commmit-form-container{
        width: 100%;
        height: 100%;
        margin-bottom: 20px;
        .form-item{
            margin-bottom: 8px;
        }
        .nickname-box{
            width: 50%;
            position:relative;
            
            input {
                padding: 0 15px;
                height: 40px;
                // line-height: 40px;
            }
            
        }
        .content-box{
            position: relative;
            textarea{
                resize: none;
                padding: 8px 15px;
                height: 120px;
            }
        }
        input,textarea{
            display: block;
            width: 100%;
            box-sizing: border-box;
            border: 1px dashed @gray;
            outline: none;
            color: @words;
            font-size: 14px;
            border-radius: 4px;
            &:focus{
                border-color: @primary;
            }
        }
        .aside{
            position: absolute;
            right: 5px;
            bottom: 5px;
            color: #b4b8bc;
            font-size: 12px;
        }
        button{
            width: 100px;
            height: 34px;
            border-radius: 4px;
            background-color:@primary;
            outline: none;
            border:none;
            color:#fff;
            cursor: pointer;
            &:hover {
                background: darken(@primary, 10%);
            }
            &:disabled {
                background: lighten(@primary, 20%);
                cursor: not-allowed;
            }
        }
        .error{
            margin-top: 6px;
            color: @danger;
            font-size: 14px;
            height: 20px;
            line-height: 20px;
        }
}
</style>