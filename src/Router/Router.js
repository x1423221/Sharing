import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'root', component: () => import("../components/HomeComponents.vue") },
    { path: '/home', name: 'home', component: () => import("../components/HomeComponents.vue") },
    { path: '/group', name: 'group', component: () => import("../components/GroupComponents.vue") },
    { path: '/history', name: 'history', component: () => import("../components/HistoryComponents.vue") },
];

const router = createRouter({
    history: createWebHistory("/Sharing"),
    routes
})

export default router

