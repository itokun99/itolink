import { lazy } from 'react';

const Homepage = lazy(() => import('./Homepage'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));
const Project = lazy(() => import('./Project'));
const NotFound404 = lazy(() => import('./NotFound404'));

export { Homepage, About, Contact, Project, NotFound404 };
