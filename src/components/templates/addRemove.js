import React, { Component } from 'react';

const data =[
  {id:1, name:'Sharif', age:30},
  {id:2, name:'arif', age:32},
  {id:3, name:'sarowar', age:3},
  {id:4, name:'cat', age:3}
];

class AddRemove extends Component {

  constructor(props){
    super(props);
    this.state ={data:data}
    this.RemoveItem =this.RemoveItem.bind(this)
  }

  RemoveItem(id){
  var  updateItems= this.state.data.filter((item)=>item.id !==id);
    this.setState({data:updateItems});
    console.log(updateItems);
  }

  render() {
    
     var result =this.state.data.map((i)=>
     <div className="col-md-4" key={i.id}>
       <button
         className="btn btn-primary"
         onClick={()=>this.RemoveItem(i.id)}
       >
       Remove {i.name}
       </button>
     </div>
   )
    return (
      <div>{result}</div>
    );
  }

}

export default AddRemove;
