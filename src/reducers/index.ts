import {combineReducers} from 'redux';
import filter from './filterReducer';
import modal from './modalReducer';
import notes from './notesReducer';

export default combineReducers({filter, modal, notes});
