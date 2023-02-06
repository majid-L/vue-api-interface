import { createRouter, createWebHistory } from "vue-router";
import PatternsByUsername from '../views/PatternsByUsername';
import Home from '../views/Home';
import Patterns from '../views/Patterns';
import Users from '../views/Users';
import NotFound from '../views/NotFound';
import NewPattern from '../views/NewPattern';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/patterns', name: 'patterns', component: Patterns},
    {path: '/users', name: 'users', component: Users},
    {path: '/users/:username/patterns', name: 'userPatterns', component: PatternsByUsername, props: true},
    {path: '/patterns/new', name: 'new pattern', component: NewPattern},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
});

export default router;