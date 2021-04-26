
import Vue from 'vue';
import VueRouter from 'vue-router'
import titleController from '@/utils/getTitle.js'

Vue.use(VueRouter);

import About from '@/views/About';
import Blog from '@/views/Blog';
import Home from '@/views/Home';
import Message from '@/views/Message';
import Project from '@/views/Project';
import BlogDetail from '@/views/Blog/BlogDetail'

const router = new VueRouter({
  routes: [
    {
      name: "Home",
      path: '/',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      name: "Blog", path: '/article', component: Blog, meta: {
        title: "文章"
      }
    },
    {
      name: "CategoryBlog", path: '/article/cate/:categoryId', component: Blog, meta: {
        title: '文章分类'
      }
    },
    {
      name: "BlogDetail", path: "/article/:id", component: BlogDetail, meta: {
        title: "文章细节"
      }
    },
    {
      name: "About", path: '/about', component: About, meta: {
        title: '关于我'
      }
    },
    {
      name: "Project", path: '/project', component: Project, meta: {
        title: "项目&效果"
      }
    },
    {
      name: "Message", path: '/message', component: Message, meta: {
        title: "留言板"
      }
    }
  ],
  mode: "history"
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title);
  }
});
export default router;