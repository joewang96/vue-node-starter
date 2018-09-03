import Home from './components/Home.vue';
import NotFound from './components/NotFound.vue';

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '*', component: NotFound },
];

export default routes;
