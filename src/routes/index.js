import React from 'react';

const FrameOne = React.lazy(() => import('../views/frameOne'));

var indexRoutes = [
    { path: "*", name: "FrameOne", component: FrameOne },
];

export default indexRoutes;
