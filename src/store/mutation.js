
import {
	HIDE_LOADING,
	SHOE_LOADING
}from './type'

const state={
	loading:false
}

const mutations ={
	[HIDE_LOADING](state){
		state.loading = false;
	},
	[SHOE_LOADING](state){
		state.loading = true;
	},
}

const getters ={
	loading(state){
		return state.loading;
	}
}

export default{
	state,
	mutations,
	getters
}