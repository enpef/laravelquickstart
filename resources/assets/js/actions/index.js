import axios from 'axios'


export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = window.location.origin+'/api';
const API_KEY = '?api_token='+window.Laravel.apiToken;

export function fetchPosts() {

	const request = axios.get(ROOT_URL+'/tasks'+API_KEY);
		return{
			type: FETCH_POSTS,
			payload: request
		}
	
	
}

// setTimeout(fetchPosts, 1000)

export function AddTask(text) {

	if (text == "") {
		alert("Please ")
	}
	else{
		const request = fetch(ROOT_URL+'/task'+API_KEY, {
						  method: 'POST',
						  headers: {
						    'Accept': 'application/json',
						    'Content-Type': 'application/json',
						  },
						  body: JSON.stringify({
						    name: text
						  })
						})
					    .then( res => res.json())
					    .then( json => json)

		const request_load = fetch(ROOT_URL+'/tasks'+API_KEY, {
						  method: 'GET'
						  
						})
					    .then( res => res.json())
					    .then( json => json)

	   return{
	   		type: 'ADD_TODO',
	   		payload: request
	   }
	}
	
	
  

}

export function DEL(id){
	const request_del = axios.post(ROOT_URL+'/task/'+id+'/delete'+API_KEY);

	const request = fetch(ROOT_URL+'/tasks'+API_KEY, {
					  method: 'GET'
					  
					})
				    .then( res => res.json())
				    .then( json => json)

	return {
		type: 'DELETE_TODO',
		payload: request_del
	}
}




