import { h } from 'preact';
import * as style from './style.css';
import { Timer } from '../Timer';
import { Calendar } from '../Calendar';
import { Header } from '../Header';

const Home = (props: {}): h.JSX.Element => (
  <div className={style.container}>
    <Header />
    <Timer />
    <Calendar />
  </div>
);

export { Home };
