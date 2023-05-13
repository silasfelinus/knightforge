//toyboxRoutes: toys for playspace
import { RouteRecordRaw } from 'vue-router';
const ButterflyHorde = () =>
  import('@/components/gamescreens/ButterflyHorde.vue');
const ButterflyPage = () => import('@/sanctuary/ButterflyPage.vue');
const ButterflyGroup = () => import('@/sanctuary/ButterflyGroup.vue');
const ButterflySingle = () => import('@/sanctuary/ButterflySingle.vue');
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
const OutsideGenerator = () =>
  import('@/components/serendipity/OutsideGenerator.vue');
const WonderLab = () => import('@/components/serendipity/WonderLab.vue');
const ArtGenerator = () => import('@/components/serendipity/ArtGenerator.vue');

export const toyboxRoutes: RouteRecordRaw[] = [
  {
    path: '/butterflies',
    alias: '/horde',
    name: 'Butterflies',
    component: ButterflyHorde,
  },
  {
    path: '/butterfly2',
    name: 'Butterfly2',
    component: ButterflyGroup,
  },
  {
    path: '/butterfly3',
    name: 'Butterfly3',
    component: ButterflySingle,
  },
  {
    path: '/butterfly',
    name: 'Butterfly',
    component: ButterflyPage,
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
    path: '/outside',
    name: 'Outside',
    component: OutsideGenerator,
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
  {
    path: '/wonder',
    name: 'WonderLab',
    component: WonderLab,
  },
  {
    path: '/makeart',
    name: 'ArtGenerator',
    component: ArtGenerator,
  },
];
