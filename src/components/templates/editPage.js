import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Signup from './signup';
import { editUSER, updateUSER } from '../redux/actions/actioncrud';

class EditPage extends Component {
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
componentDidMount(){
  const {user, match} = this.props;
  console.log(match.params.userId);
 this.props.editUSER(match.params.userId);
  
}

componentWillReceiveProps(nextProps) {
  console.log(nextProps.user)
  if (nextProps.user) {
    this.setState({
      username: nextProps.user.username,
      email: nextProps.user.email,
      dob: new Date(nextProps.user.dob).toISOString().split('T')[0]
    });
  }
 }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleDayChange (value) {
    this.setState({
    
      dob: value?new Date(value).toISOString().split('T')[0]:''
  });
  }

  handleSubmit(event) {
    event.preventDefault();
    const userData = {
      username: this.state.username,
      email: this.state.email,
      dob: this.state.dob
    }
    this.props.updateUSER(this.props.match.params.userId, userData).then(res=>{
      alert("Updated Sucessfully");
      this.props.history.push('/userlist');
    },err=>{
      console.log(err);
    });
    
  }

  render() {
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

EditPage.propTypes = {
  editUSER:PropTypes.func.isRequired,
  updateUSER:PropTypes.func.isRequired
}

const mapStateToProps = state=>{
  console.log(state);
  return {
    user: state.userlists.user
  }
};

const mapDispatchToProps = dispatch =>{
  return {
    editUSER: (value)=> dispatch(editUSER(value)),
    updateUSER: (value1, value2)=> dispatch(updateUSER(value1, value2))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage) ;
