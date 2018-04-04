import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //||\\
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //||\\

  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
});
