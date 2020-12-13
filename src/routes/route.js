import { Homepage, About, Contact, NotFound404, Project } from 'pages';

const appRoute = [
  {
    name: 'Project',
    title: 'Projekan saya',
    path: '/project',
    exact: true,
    component: Project
  },
  {
    name: 'Contact',
    title: 'Hubungi saya',
    path: '/contact',
    exact: true,
    component: Contact
  },
  {
    name: 'About',
    title: 'Tentang saya',
    path: '/about',
    exact: true,
    component: About
  },
  {
    name: 'Homepage',
    title: 'Selamat datang di website itolink',
    path: '/',
    exact: true,
    component: Homepage
  },
  {
    name: 'NotFound404',
    title: 'Halaman tidak ditemukan',
    path: '*',
    exact: true,
    component: NotFound404
  }
];

export { appRoute };
