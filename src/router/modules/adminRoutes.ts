//homeRoutes: Routes to administrate main routes et al
import { RouteRecordRaw } from 'vue-router';
const AdminPage1 = () => import('@/components/layout/AdminPage.vue');

export const adminRoutes: RouteRecordRaw[] = [
  {
    path: '/admin',
    alias: '/admin1',
    name: 'AdminPage',
    component: AdminPage1,
  },
];
