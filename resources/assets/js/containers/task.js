import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { DEL } from '../actions/index';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions'
import _ from 'lodash'
// import Addtask from './task';

class Task extends Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	del(items){
		return (this.props.delete(items));
	}

	renderList(){
		// console.log("list "+this.props.load)
		return this.props.task.map((task) => {
			if (task.text == '') {
				return <div></div>
			}
			else{
				return (
						<tr key={task.text}>
									<td className="table-text">
				                    	<div>{task.text}</div>       
				                    </td>

				                    <td>
				                    <form>
				                                        
					                    <button type="button" className="btn btn-danger" onClick={(e) => {this.props.DEL(task.id)}}>
					                        <i className="fa fa-btn fa-trash"></i>Delete
					                    </button>
				                    </form>
				                    </td>
			                    </tr>
					)
				
			}
		})	
	}

	renderPost(){
		// console.log("POST :"+this.props.load)
		return _.map(this.props.load, load => {
			return (
								<tr key={load.name}>
									<td className="table-text">
				                    	<div>{load.name}</div>       
				                    </td>

				                    <td>
				                    <form>
				                                        
					                    <button type="button" className="btn btn-danger" onClick={(e) => {this.props.DEL(load.id, this.props.fetchPosts())}}>
					                        <i className="fa fa-btn fa-trash"></i>Delete
					                    </button>
				                    </form>
				                    </td>
			                    </tr>
			)
		})
	}

	render() {

		return (	

	                <tbody>
	                    
	                    {this.renderPost()}
	                </tbody>            
	               
	                
		);
	}
}

function mapStateToProps(state){
	return {
		task: state.task,
		load: state.load
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({DEL: DEL, fetchPosts: fetchPosts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);

