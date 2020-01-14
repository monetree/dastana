import React from 'react';

const FrameOne = React.lazy(() => import('../views/frameOne'));
const FrameTwo = React.lazy(() => import('../views/frameTwo'));
const Home = React.lazy(() => import('../views/home'))

var indexRoutes = [
    { path: "/standards/", name: "FrameTwo", component: FrameTwo },
    { path: "/inventories/", name: "FrameOne", component: FrameOne },
    { path: "/", name: "Home", component: Home },
];

export default indexRoutes;
