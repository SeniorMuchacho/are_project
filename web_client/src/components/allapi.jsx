import React from 'react';
import "./cssComponents/allapi.css";
import API from '../api/connection';
import APIS from '../api/selectapi';

let i= 0;
class Allapi extends React.Component {
	constructor(props) {
		super(props);
	 if (API.isAuth() === false) {
				window.location = "/login"
		}
		this.state = {
				tab : []
		};
		this.getapi();
}

getapi()
{
	APIS.getCurrentapi(API.whoiam()).then(function(response) {
		this.setState({ tab: response.data.tab});
	}.bind(this));
}
erase(i)
{
	console.log("salut");
	APIS.erase(this.state.tab[i].nameApi, API.whoiam())
}
print_api()
{
	if (this.state.tab[i] != null && this.state.tab[i].status) {
		return (
		<tr>
			<td><div>Activated</div></td>
			<td><div>{this.state.tab[i++].nameApi}</div></td>
			<td>
			<button type="button" className="btn btn-danger" onClick={()=>this.erase(i -1)}>Remove</button>
			</td>
		</tr>
	)}
	else if (this.state.tab[i] != null && !this.state.tab[i].status) {
		return (
		<tr>
			<td><div>There is no API activated</div></td>
			<td><div>{this.state.tab[i++].nameApi}</div></td>
			<td>
			</td>
		</tr>
	)}
}

    render() {
    return (
<div className="span7">   
<div className="widget stacked widget-table action-table">
    				
				<div className="widget-header">
					<i className="icon-th-list"></i>
					<h3>Table</h3>
				</div>
				
				<div className="widget-content">
					
					<table className="table table-striped table-bordered">
						<thead>
							<tr>
								<th>Status</th>
								<th>API</th>
								<th className="td-actions"></th>
							</tr>
						</thead>
						<tbody>
						{this.print_api()}
						{this.print_api()}
						{this.print_api()}
						{this.print_api()}
							</tbody>
						</table>
					
				</div>
			
			</div>
            </div>
    )
    }
}

export default Allapi;