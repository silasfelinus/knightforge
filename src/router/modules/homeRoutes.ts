//homeRoutes: components for website homepage structures
import { RouteRecordRaw } from 'vue-router';
const HeaderBar = () => import('@/components/layout/NewHeader.vue');
const FooterBar = () => import('@/components/layout/BottomFooter.vue');
const LeftSidebar = () => import('@/components/layout/MagicLeftDrawer.vue');
const RightSidebar = () => import('@/components/layout/RightSidebar.vue');
const MainScreen = () => import('@/components/layout/Mainscreen.vue');

export const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/header',
    name: 'HeaderBar',
    component: HeaderBar,
  },
  {
    path: '/footer',
    name: 'FooterBar',
    component: FooterBar,
  },
  {
    path: '/leftsidebar',
    name: 'LeftSidebar',
    component: LeftSidebar,
  },
  {
    path: '/rightsidebar',
    name: 'RightSidebar',
    component: RightSidebar,
  },
  {
    path: '/mainscreen',
    name: 'MainScreen',
    component: MainScreen,
  },
];
