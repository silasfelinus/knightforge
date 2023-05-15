import { RouteRecordRaw } from 'vue-router';
const AppForge = () => import('@/compostables/HomePage.vue');
const AccordionNav = () => import('@/compostables/AccordionNav.vue');
const AnimationTester = () => import('@/compostables/AnimationTester.vue');
const ButterflySanctuary = () =>
  import('@/compostables/ButterflySanctuary.vue');
const ProjectManager = () => import('@/compostables/ProjectManager.vue');
const ChatManager = () => import('@/compostables/ChatManager.vue');
const LoginComponent = () => import('@/compostables/LoginComponent.vue');
const RegisterComponent = () => import('@/compostables/RegisterComponent.vue');
const LiveChat = () => import('@/compostables/LiveChat.vue');

export const appRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AppForge',
    component: AppForge,
  },
  {
    path: '/accordion',
    name: 'AccordionNav',
    component: AccordionNav,
  },
  {
    path: '/sanctuary',
    name: 'ButterflySanctuary',
    component: ButterflySanctuary,
  },
  {
    path: '/animator',
    name: 'AnimationTester',
    component: AnimationTester,
  },
  {
    path: '/manager',
    name: 'ProjectManager',
    component: ProjectManager,
  },
  {
    path: '/chat',
    name: 'ChatManager',
    component: ChatManager,
  },
  {
    path: '/login',
    name: 'LoginComponent',
    component: LoginComponent,
  },
  {
    path: '/register',
    name: 'RegisterComponent',
    component: RegisterComponent,
  },
  {
    path: '/livechat',
    name: 'LiveChat',
    component: LiveChat,
  },
  // Add more routes as needed
];
