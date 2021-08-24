import { createRouter, createWebHistory } from 'vue-router';
import FinancialStatementsView from '@/views/documents/FinancialStatementsView.vue';
import DonateView from '@/views/donate/DonateView.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/donate',
    name: 'DonateView',
    component: DonateView,
  },
  {
    path: '/documents/financial-statements',
    name: 'FinancialStatementsView',
    component: FinancialStatementsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
