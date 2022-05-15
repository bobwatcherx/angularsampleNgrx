import {tambah,kurang,reset} from './banana.actions';
import {createReducer,on} from '@ngrx/store';


const initialState = 0 ;

export const bananaReducer = createReducer(
	initialState,
	on(tambah,(state)=>state + 1),
	on(kurang,(state)=>state - 1 ),	
	on(reset,(state)=>state = 0),	

	)