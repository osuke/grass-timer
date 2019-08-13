import { h } from 'preact';
import { Link } from 'preact-router';
import style from './style.css';

export interface Props {
  name: string;
}

const defaultProps: Partial<Props> = {
  name: 'header',
};

const Header = ({ name }: Props) => (
  <div className={style.container}>
    <nav>
      <div className={style.tab}><Link href="/" >Home</Link></div>
      <div className={style.tab}><Link href="/activity">Activity</Link></div>
    </nav>
  </div>
);

Header.defaultProps = defaultProps;

export { Header };
