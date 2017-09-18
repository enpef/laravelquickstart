import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Task from './task';
import { connect } from 'react-redux';
import { AddTask } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { fetchPosts } from '../actions'
// import { reduxForm } from 'redux-form'


class Addtask extends Component {

	constructor(props) {

	    super(props);
	    this.state = {
	    	msg: '',
	    };

	}

	componentDidMount() {
		this.props.fetchPosts();
	}

	updateInputValue(evt) {

	    this.setState({
	      msg: evt.target.value,
	    });
	}

	setup(){
		this.setState({
			msg: ''
		})

	}


	
    render() {
        return (
        	<div>
            <div className="panel panel-default">
		        <div className="panel-heading">
		                New Tasks 
		        </div>
		        <div className="panel-body">		            
		  
		            <form className="form-horizontal">		                

		                
		                <div className="form-group">
		                    <label for="task-name" className="col-sm-3 control-label">Task</label>

		                    <div className="col-sm-6">
		                        <input type="text" name="name" id="name" value={this.state.msg} onChange={(evt) => this.updateInputValue(evt)} className="form-control"/>
		                    </div>
		                </div>

		                
		                <div className="form-group">
		                    <div className="col-sm-offset-3 col-sm-6">
		                        <button type="button" className="btn btn-default" onClick={(evt) => this.props.AddTask(this.state.msg , this.setup(), this.props.fetchPosts())}>
		                            <i className="fa fa-plus"></i> Add Task
		                        </button>
		                    </div>
		                </div>
		            </form>
		            <div className="text-xs-right">
		            	<Link className="btn btn-primary" to="home">
		            		Go to home
		            	</Link>
		            </div>
		        </div>
		    </div>


		    <div className="panel panel-default">
	            <div className="panel-heading">
	                Current Tasks
	            </div>

	            <div className="panel-body">
	                <table className="table table-striped task-table">

	                    
	                    <thead>
	                        <th>Task</th>
	                        <th>&nbsp;</th>
	                    </thead>

	                    
	                    
	                        <Task />
	                          
	                    
	                        
	                        
	                </table>
	            </div>
        	</div>
        	</div>
        );
    }




}

function mapStateToProps(state){
	return {
		task: state.task
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({AddTask: AddTask, fetchPosts: fetchPosts}, dispatch)
}

// export default connect(mapStateToProps, mapDispatchToProps)(Addtask);

export default (connect(mapStateToProps, mapDispatchToProps)(Addtask));

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console 