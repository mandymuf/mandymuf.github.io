import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
	constructor(props) {
    super(props);
    this.state = {
				  name: '',
				  email: '',
				  phone: ''
	};

}


 validateForm() {
    return (
	  this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.phone.length > 0 
     
    );
  }
  
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
	handleSubmit = event => {
	alert (this.state.name + ' has been added')
	
    event.preventDefault();
  }
  
  
  
  	
 render () {
   return (
   
   
  <div className="container">
  <div id="topBar"><img id="nord" alt="logo" src="nord.png"/>Nord Software</div>
  <div id="back">
	<div id="title">List of participants</div>
	<div overflow="hidden" id="wrapper">
	<div className="whiteBack form">
		<form onSubmit={this.handleSubmit}>
			
			<div className="form-row">
   
				<input type="text" className="form-control col-2" id="name" placeholder="Full name"
				 value={this.state.name} onChange = {this.handleChange}/>
    
   
				<input type="email" className="form-control col-4" id="email" placeholder="E-mail address"
				 value={this.state.email} onChange = {this.handleChange}/>
  
    
				<input type="text" className="form-control col-2" id="phone" placeholder="Phone number"
				 value={this.state.phone} onChange = {this.handleChange}/>
     
				<button className="col-mb2" type="submit"
				disabled={!this.validateForm()}>Add new</button>
			</div>
  
		</form>
	</div>
	
	/<div className="whiteBack table-responsive" id="table">
		<table className="table">
			<tbody>
				<tr id="head">
				  <td scope="col">Name</td>
				  <td scope="col">E-mail address</td>
				  <td scope="col">Phone number</td>
				  <td scope="col"></td>
				</tr>
				<tr className="body">
				  <td scope="row">John Doe</td>
				  <td>john.doe@gmail.com</td>
				  <td>0409734553</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
				<tr className="body">
				  <td scope="row">George Clooney</td>
				  <td>george.clooney@hollywood.com</td>
				  <td>0504629898</td>
				  <td><a href="" onClick={(e) => this.deleteRow('id', e)}>delete</a></td>
				</tr>
			  </tbody>
</table>
</div>
</div>
</div>
</div>

	  
     
   )
 }
}
export default Form;