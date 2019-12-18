import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchUSER} from '../redux/actions/actioncrud';
import UserGrid from './usergrid';
import ViewInfo from './viewInfo';

class Userlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
     };
     this.showModal = this.showModal.bind(this);
     this.closeModal = this.closeModal.bind(this);
  }
  
  componentDidMount(){
    this.props.fetchUSER()
  }
  
  showModal() {
   
    var _users=this.props.users;
    var filtered = _users.filter(a=>a.active==undefined||a.active==0);
    if(filtered.length>0){
      var obj_keys = Object.keys(filtered);
      var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
      filtered[ran_key].active=1;
      this.setState({
        show: filtered.length>0?true:false,
          user: filtered[ran_key]
        });
    }
   else{
    this.setState({
      show: false,
        user: []
      });
   }
   
   
  };
  closeModal(){
    this.setState({
      show: false
    });
  }
  render() {
    const {users} = this.props;
    return (
      <div className="container-fluid">
       <h2>Userlist</h2>
       {users.length>0?<p> <button type="button" className="btn btn-sm btn-info" onClick={this.showModal}>View User</button><br/></p>:<br></br>}
      
       <UserGrid users={users} />
       <ViewInfo show={this.state.show} closeModal={this.closeModal} user={this.state.user} />
      </div>
    );
  }

}


Userlist.propTypes={
  users:PropTypes.array.isRequired,
  fetchUSER:PropTypes.func.isRequired
}

const mapStateToProps = state=>{
  console.log(state);
  return {
    users: state.userlists.users
  }
};

export default connect(mapStateToProps,{fetchUSER})(Userlist);
