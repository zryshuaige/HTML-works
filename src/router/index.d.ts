import { RouteRecordRaw } from 'vue-router';

declare module '*.js' {
  const routes: RouteRecordRaw[];
  export default routes;
}
