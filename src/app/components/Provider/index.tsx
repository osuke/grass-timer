import { h, createContext } from 'preact';
import { useReducer } from 'preact/hooks';
import { initialState, ReducerState, reducer } from '../../reducer';
import { Action } from '../../action';

interface Props {
  children: preact.ComponentChildren;
}

type Dispatch = (action: Action) => void;

export const GlobalStateContext = createContext<{state: ReducerState, dispatch: Dispatch}>({
  state: initialState,
  dispatch: () => undefined,
});

export const Provider = ({ children }: Props) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
