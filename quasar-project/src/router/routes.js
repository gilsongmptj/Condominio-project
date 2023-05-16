import ErrorNotFound from 'pages/ErrorNotFound.vue';
import MainLayout from 'layouts/MainLayout.vue';
import IndexPage from '../pages/IndexPage.vue';

const routes = [
  {
    path: '/menu',
    component: MainLayout,
    children: ({
      path: 'menu',
      component: IndexPage,
    }),
  },
  {
    path: '/cadastroUsuario',
    name: 'Cadastro de Usuario',
    component: () => import('pager/cadastroUsuario.vue'),
  },
  {
    path: '/encomendas',
    name: 'encomendas',
    component: () => import('pages/encomendasRecebidas.vue'),
  },
  {
    path: '/loginUser',
    name: 'list-user',
    component: () => import('pages/LonginPageMorador.vue'),
  },
  {
    path: '/newOrders',
    name: 'new-Orders',
    component: () => import('components/newOrder.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound,
  },
];

export default routes;
