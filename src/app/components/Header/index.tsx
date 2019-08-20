import { h } from 'preact';
import { Link } from 'preact-router';
import style from './style.css';

const Header = (props: {}): h.JSX.Element => (
  <div className={style.container}>Logo</div>
);

export { Header };
