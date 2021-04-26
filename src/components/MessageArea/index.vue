<template>
    <div class="LeaveMessage-container">
        <div class="commit-from">
            <CommitForm v-on="$listeners"/>
        </div>
        <h3>
            {{ title }}
            <span>{{ subTitle }}</span>
        </h3>
        <div class="commit-list">
            <CommitList :list="list"/>
        </div>
        <div class="loading" v-loading="isListLoading"></div>
    </div>
</template>

<script>
import CommitForm from './components/CommitForm'
import CommitList from './components/CommitList'
export default {
    props: {
        title: {
            type: String,
            default: "",
        },
        subTitle: {
            type: String,
            default: "",
        },
        list: {
            type: Array,
            default: () => [],
        },
        isListLoading: {
            type: Boolean,
            default: false,
        },
    },
    components:{
        CommitForm,
        CommitList
    },
}
</script>

<style lang="less" scoped>
.loading {
  position: relative;
  height: 100px;
}
</style>