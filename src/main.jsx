import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css';
import configureStore from './manager/store/configureStore';
import { getBlogsFromDatabase } from './manager/action/blogAction';
import { Provider } from 'react-redux';

const mystore = configureStore();

mystore.subscribe(() => {
  console.log(mystore.getState());
});


const result = (
  <Provider store={mystore}>
      <App />
  </Provider>
)



ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

mystore.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})