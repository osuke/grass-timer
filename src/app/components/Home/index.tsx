import { h } from 'preact';
import { Header } from '../Header';
import { Timer } from '../Timer';

interface Props {
  path: string;
}

const Home = (props: Props): h.JSX.Element => (
  <div>
    <Header name="Grass Timer" />
    <Timer />
  </div>
);

export { Home };
