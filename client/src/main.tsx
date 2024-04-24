import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App'; 

const Main = () => {
  const container = document.getElementById('root');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    container
  );
  
  return null;
}

export default Main;
