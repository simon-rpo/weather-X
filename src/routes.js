import asyncComponent from './components/AsyncComponent';
import Weather from './pages/Weather';
import { nextNumber } from './utils/general';

const nextRouteIndex = nextNumber();

const createRoute = (url, component, exact = false) => ({
  index: nextRouteIndex(),
  path: url,
  component,
  exact,
});

export default [
  createRoute('/', Weather, true),
  createRoute(
    '/home',
    asyncComponent(() =>
      import('./pages/Weather.js').then(module => module.default),
    ),
  ),
];
