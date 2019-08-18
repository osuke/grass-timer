import { h, render } from 'preact';
import Router from 'preact-router';
import 'reset-css';
import { Provider } from './components/Provider';
import { Home } from './components/Home';
import { Activity } from './components/Activity';



const root = document.querySelector('#app');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      // tslint:disable-next-line
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      // tslint:disable-next-line
      console.log('SW registration failed: ', registrationError);
    });
  });
}

const Root = (): h.JSX.Element => (
  <Provider>
    <Router>
      <Home path="/" />
      <Activity path="/activity" />
    </Router>
  </Provider>
);

if (root) {
  render(<Root />, root);
}
