import {createRouter, createWebHistory} from "vue-router";
import MajorPage from '@/pages/MajorPage.vue'
import PostPage from '@/pages/PostPage.vue';
import AboutPage from '@/pages/AboutPage.vue'

const routes = [
    {
        path: '/',
        component: MajorPage,
    },
    {
        path: '/users',
        component: PostPage,
    },
    {
        path: '/about',
        component: AboutPage,
    }
]

const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL),
    }
)

export default router;