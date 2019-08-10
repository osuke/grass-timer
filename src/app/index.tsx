import { h, render } from 'preact';
import 'reset-css';
import { Header } from './components/Header';
import { Timer } from './components/Timer';

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

if (root) {
  render((
    <div id="foo">
      <Header name="Grass Timer" />
      <Timer />
    </div>
  ), root);
}
