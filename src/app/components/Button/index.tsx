import { h } from 'preact';
import style from './style.css';

export interface Props {
  children: preact.ComponentChildren;
  callback: (e: Event) => void;
}

const defaultProps: Partial<Props> = {
  children: 'button',
};

const Button = ({ children, callback }: Props) => (
  <button className={style.button} onClick={callback}>{children}</button>
);

Button.defaultProps = defaultProps;

export { Button };
