import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import AddTask from './addtask';

class Current extends Component {
	render() {
		return (
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

	                    
	                    <tbody id="crt">
	                        
	                          
	                    </tbody>
	                        
	                </table>
	            </div>
        	</div>

		);
	}
}

export default Current;

ReactDOM.render(<Current />, document.getElementById('current'));