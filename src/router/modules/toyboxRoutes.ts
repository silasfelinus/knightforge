//toyboxRoutes: toys for playspace
import { RouteRecordRaw } from 'vue-router';
const ButterflyHorde = () =>
  import('@/components/gamescreens/ButterflyHorde.vue');
const ButterflySingle = () =>
  import('@/components/gamescreens/ButterflySimple.vue');
const DraggableComponent = () =>
  import('@/components/wonderlab/DraggableComponent.vue');
const ButterflyChest = () =>
  import('@/components/butterfly/ButterflyChest.vue');
const WonderMessage = () => import('@/components/wonderlab/WonderMessage.vue');
const WonderBubble = () => import('@/components/wonderlab/BubbleMessage.vue');
const VoiceControl = () => import('@/components/wonderlab/VoiceControl.vue');
const MagicBox = () => import('@/components/butterfly/MagicBox.vue');
const MagicWindow = () => import('@/components/wonderlab/MagicWindow.vue');
const SerendipityVoice = () =>
  import('@/components/wonderlab/SerendipityVoice.vue');
const SerendipityPage = () =>
  import('@/components/wonderlab/SerendipityPage.vue');
const RealWorld = () => import('@/components/wonderlab/RealWorld.vue');

export const toyboxRoutes: RouteRecordRaw[] = [
  {
    path: '/butterflies',
    alias: '/horde',
    name: 'Butterflies',
    component: ButterflyHorde,
  },
  {
    path: '/butterfly',
    name: 'Butterfly',
    component: ButterflySingle,
  },
  {
    path: '/magicbox',
    name: 'DraggableComponent',
    component: DraggableComponent,
  },
  {
    path: '/window',
    name: 'MagicWindow',
    component: MagicWindow,
  },
  {
    path: '/butterflychest',
    name: 'ButterflyChest',
    component: ButterflyChest,
  },
  {
    path: '/wondermessage',
    name: 'WonderMessage',
    component: WonderMessage,
  },
  {
    path: '/wonderbubble',
    name: 'WonderBubble',
    component: WonderBubble,
  },
  {
    path: '/voicecontrol',
    name: 'VoiceControl',
    component: VoiceControl,
  },
  {
    path: '/magicbox',
    name: 'MagicBox',
    component: MagicBox,
  },
  {
    path: '/realworld',
    name: 'RealWorld',
    component: RealWorld,
  },
  {
    path: '/serendipityvoice',
    name: 'SerendipityVoice',
    component: SerendipityVoice,
  },
  {
    path: '/serendipity',
    name: 'SerendipityPage',
    component: SerendipityPage,
  },
];
