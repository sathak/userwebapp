import React from 'react';
import PropTypes from 'prop-types';
import {deleteUSER} from '../redux/actions/actioncrud';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

function Userdetails(props) {
  return(
      <tr>
        <td>{props.user.username}</td>
        <td>{props.user.email}</td>
        <td>{new Date(props.user.dob).toLocaleDateString()}</td>
        <td><Link to={`edit/${props.user.userId}`}><button type="button" className="btn btn-info">Edit</button></Link></td>
        <td><button type="button" className="btn btn-danger" onClick={()=> deleteConfirmation(props)}>Delete</button></td>
      </tr>
  )
};
function deleteConfirmation(props){
  var result = window.confirm("Want to delete?");
  if (result) {
    props.deleteUSER(props.user.userId).then(res=>{
      alert("Deleted Sucessfully");
    });
  } else {
   return false;
  }
}


Userdetails.propTypes ={
  user: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch)=>{
return {
  deleteUSER:  (_id) => dispatch(deleteUSER(_id)),
 }
}

export default connect(null, mapDispatchToProps)(Userdetails);
