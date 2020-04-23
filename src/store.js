import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    days: 11,
    hours: 31,
    minutes: 27,
    seconds: 11,
    activeSession: "days"
};
const store = createStore(reducer, initialState);
export default store;