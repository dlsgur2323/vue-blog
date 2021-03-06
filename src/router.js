import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "index",
        component: () => import('@/views/index.vue'),
        children : [
            {
                path : '/',
                name : 'home',
                component : () => import( '@/views/home.vue'),
            },
            {
                path: "/@:id",
                name: "blog",
                component: () => import( '@/views/blog.vue'),
                children : [
                    {
                        path : 'post',
                        redirect : { name : 'blog'},
                    },
                    {
                        path : 'post/:post',
                        component : () => import('@/views/post.vue'),
                    },
                ]
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;