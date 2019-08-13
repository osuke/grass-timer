import { h } from 'preact';
import { Header } from '../Header';

interface Props {
  path: string;
}

const Activity = (props: Props) => (
  <div>
    <Header name="Activity" />
    <div>Activity</div>
  </div>
);

export { Activity };
