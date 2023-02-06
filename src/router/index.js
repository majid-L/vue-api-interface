import { createRouter, createWebHistory } from "vue-router";
import PatternsByUsername from '../views/PatternsByUsername';
import Home from '../views/Home';
import Patterns from '../views/Patterns';
import Users from '../views/Users';
import NotFound from '../views/NotFound';
import NewPattern from '../views/NewPattern';
import NewUser from '../views/NewUser';
import DeleteConfirmation from '../views/DeleteConfirmation';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/patterns', name: 'patterns', component: Patterns},
    {path: '/users', name: 'users', component: Users},
    {path: '/users/:_id', name: 'single user', component: NewUser, props: true},
    {path: '/users/:username/patterns', name: 'userPatterns', component: PatternsByUsername, props: true},
    {path: '/patterns/new', name: 'new pattern', component: NewPattern},
    {path: '/users/new', name: 'new user', component: NewUser},
    {path: '/deleted', name: 'deleted', component: DeleteConfirmation},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
});

export default router;