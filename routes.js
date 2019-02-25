const nextRoutes = require('next-routes');
const routes = (module.exports = nextRoutes());

const APP_ROUTES = [
    {
        page: 'index',
        pattern: '/'
    },
    {
        page: 'leaderboard',
        pattern: '/leaderboard'
    },
    { page: 'profile', pattern: '/profile/:username' }
];

APP_ROUTES.forEach(route => routes.add(route));
