import { h } from 'preact';
import style from './style.css';

interface Props {
  children: preact.ComponentChildren;
}

const Col = ({ children }: Props): h.JSX.Element => {
  return (
    <div className={style.row}>{children}</div>
  );
};

export { Col };
