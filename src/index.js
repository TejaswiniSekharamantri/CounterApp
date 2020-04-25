import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Table from "./reactTable";
import registerServiceWorker from './registerServiceWorker';
import store from "./store";

const render = () => ReactDOM.render(<Table />, document.getElementById('root'));

render();
store.subscribe(render);

registerServiceWorker();
