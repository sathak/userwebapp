import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Signup from './signup';
import {addUSER} from '../redux/actions/actioncrud';

class SignupPage extends Component {
  constructor(props){
    super(props);

    this.state = {
    username: '',
    email: '',
    dob: ''
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleDayChange = this.handleDayChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addUSER(this.state).then(res=>{
      alert("Added Sucessfully");
      this.props.history.push('/userlist');
    },err=>{
      console.log(err);
    })
     
  }
  handleDayChange (value) {
    this.setState({
      dob: value?new Date(value).toISOString().split('T')[0]:''
  });
  }

  render() {
    const { addUSER} = this.props;

    return (
      <div>
          <Signup{...this.props} {...this.state} 
            handleChange = {this.handleChange}
            handleDayChange = {this.handleDayChange}
            handleSubmit = {this.handleSubmit}
           />
      </div>
    );
  }

}

SignupPage.propTypes = {
  addUSER:PropTypes.func.isRequired
}

export default connect(null, {addUSER})(SignupPage) ;
