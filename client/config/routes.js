// Routes
import Home from '../routes/Home';
import NotFound from '../routes/NotFound';

// Route config
const routes = [
    {
        path: '/',
        name: 'Home',
        exact: true,
        component: Home
    },
    {
        name: 'NotFound',
        component: NotFound
    }
];

export default routes;
