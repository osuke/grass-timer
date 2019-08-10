import { h, render } from 'preact';
import style from './style.css';

export interface Props {
  name: string;
}

const defaultProps: Partial<Props> = {
  name: 'header',
};

const Header = ({ name }: Props) => (
  <div className={style.container}>
    <h1 class="name">{name}</h1>
  </div>
);

Header.defaultProps = defaultProps;

export { Header };
