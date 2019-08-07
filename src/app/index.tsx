import { h, render } from 'preact';
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
  		<span>Hello world!</span>
  		<button onClick={ e => alert("hi!") }>Click Me</button>
  	</div>
  ), root);
}
