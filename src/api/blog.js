
import request from './request'

//获取博客分类
export async function getBlogType(){
    return await request.get('/api/blogtype');
}

//获取博客列表
export async function getBlog(page = 1, limit = 10, categoryid = -1){
    return await request.get('/api/blog',{
        params:{
            page,
            limit,
            categoryid
        }
    });
}

//获取单个博客
export async function getOneBlog(id){
    return await request.get(`/api/blog/${id}`)
}

//获取评论
export async function getCommit(page = 1, limit = 10, blogid = -1){
    return await request.get('/api/comment',{
        params:{
            page,
            limit,
            blogid
        }
    })
}


//发表评论
export async function postCommit(commitInfo){
    return await request.post('/api/comment',commitInfo)
}