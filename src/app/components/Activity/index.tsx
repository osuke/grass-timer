import { h } from 'preact';
import { Header } from '../Header';
import { Calendar } from '../Calendar';

interface Props {
  path: string;
}

const Activity = (props: Props) => (
  <div>
    <Header name="Activity" />
    <Calendar />
  </div>
);

export { Activity };
