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
    path: '/',
    name: 'loginUser',
    component: () => import('pages/LoginPageMorador.vue'),
  },
  {
    path: '/cadastroUsuario',
    name: 'Cadastro de Usuario',
    component: () => import('pages/cadastroUsuario.vue'),
  },
  {
    path: '/encomendas',
    name: 'encomendas',
    component: () => import('pages/encomendasRecebidas.vue'),
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: () => import('pages/TelaEscolha.vue'),
  },
  {
    path: '/historico',
    name: 'Histórico de Encomendas',
    component: () => import('pages/HistoricoEncomendas.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound,
  },
];

export default routes;
