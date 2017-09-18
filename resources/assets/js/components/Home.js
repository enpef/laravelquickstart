import React, { Component } from 'react';
import home from '../containers/Home'
import { Link } from 'react-router-dom'

export default class Showhome extends Component {
	render() {
		return (
			<div className="container">
			    <div className="row">
			        <div className="col-md-8 col-md-offset-2">
			            <div className="panel panel-default">
			                <div className="panel-heading">Dashboard</div>

			                <div className="panel-body">
			                    <div id="example"></div>
			                    
			                    <div className="text-xs-right">
			                    	<Link className="btn btn-info" to="/tasks">
			                    		Tasks
			                    	</Link>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>


			</div>
		)
	}
}