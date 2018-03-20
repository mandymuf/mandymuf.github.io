import React, { Component } from 'react';
import './App.css';
import Editable from 'react-x-editable';
import ReactTable from 'react-table';

import './Form.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'
import { faEdit } from '@fortawesome/fontawesome-free-solid'




class App extends Component {
	constructor(props){
		super(props);
		this.state = {input:'Add new',name:'',email:'',phone:'', users:[
		{
      id: 1,
      email: 'john.doe@gmail.com',
      phone: '0405899562',
      name: 'John Doe'
    }, {
      id: 2,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 3,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 4,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 5,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 6,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 7,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 8,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 9,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 10,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 11,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 12,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 13,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 14,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 15,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 16,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 17,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 18,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 19,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }, {
      id: 20,
      email: 'george.clooney@hollywood.com',
      phone: '0502644598',
      name: 'George Clooney'
    }]};
	}
	
	handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };
  
  
	onSubmit(e){
		e.preventDefault();
		
		const obj = {name:this.state.name,phone:this.state.phone,email:this.state.email};
		this.setState({users:[...this.state.users,obj],name:'',email:'',phone:''});
		
	}
	


	
render(){
	 return(
<div className="container">
  <div id="topBar"><img id="nord" alt="logo" src="nord.png"/>Nord Software</div>
	<div id="back">
	<div id="title">List of Participants</div>
	<div className="whiteBack">
		<form  role="form" onSubmit={this.onSubmit.bind(this)}>
				
				<div className="row">
					<div className="name">
						<input id="name" required type="text" ref={(ref) => this.inputName = ref} onChange={event => this.setState({ name: event.target.value})}  value={this.state.name} className="col-md-2 formc" placeholder="Full name" arial-describedby="basic-addon1"/>
					</div>
					<div className="email">
						<input id="email" required type="email" ref={(ref) => this.inputEmail = ref} onChange={event => this.setState({ email: event.target.value})} value={this.state.email} className="col-md-3 formc" placeholder="E-mail address" aria-describedby="basic-addon1" />
					</div>
					<div className="phone">
						<input id="phone" required type="text" ref={(ref) => this.inputPhone = ref} onChange={event => this.setState({ phone: event.target.value})} value={this.state.phone} className="col-md-2 formc"  placeholder="Phone number" arial-describedby="basic-addon1"/>
					</div>
						<input type="submit"  value={this.state.input} className="col-md-1"/>
								
				</div>
			</form>
		</div>	
			<div className="whiteBack"  id="table">	
				<table className="table">
					
					<tbody>
						<tr id="head">
							<td scope="col">Full name</td>
							<td scope="col">E-mail address</td>
							<td scope="col">Phone number</td>
							<td scope="col"></td>
						</tr>
						
						{this.state.users.map((data,idx) => {
							<tr id="addr0" key={idx}>
                      
                      <td><input
                          type="text"
                          name="name"
                          value={this.state.users[idx].name}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                        
                      </td>
                      <td>
                        <input
                          type="email"
                          name="email"
                          value={this.state.users[idx].email}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
								<td>
                       <input
                           type="text"
                          name="phone"
                          value={this.state.users[idx].phonee}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                     </tr>
								
return  <Row users = {this.state.users}   data = {data} key={idx} row={idx} /> 
						})}
													
							
					</tbody>
				</table>
			</div>
		</div>
	</div>
	
	);	
}
}
class Row extends Component{
	 constructor(props){
		super(props);
		
	}
	
	
	render(){
		return (

			<tr className="body">
				<td><Editable 
				validate={(value) => {
      if(!value){
        return 'Required';
      }
    }} display={(value) => {
    return (<strong>{value}</strong>);
  }} type="text" name="name" value={this.props.data.name} /></td>
				
				<td><Editable 
				validate={(value) => {
      if(!value){
        return 'Required';
      }
    }}
display={(value) => {
    return (<strong>{value}</strong>);
  }}type="email" name="email" value={this.props.data.email} /></td>
				
				<td><Editable 
				validate={(value) => {
      if(!value){
        return 'Required';
      }
    }}
	display={(value) => {
    return (<strong>{value}</strong>);
  }}type="text" name="phone"value={this.props.data.phone} /></td>
				
				<td><FontAwesomeIcon icon={faEdit} /></td>
				
				<td className="del-cell"><FontAwesomeIcon icon={faTrash}/></td>
				</tr>
			
		);
		 
	}
}


		

export default App;