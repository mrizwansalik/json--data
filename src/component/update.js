import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class Update extends Component {
    state = { show : false }
    handleChang =(e)=>{
        e.persist();
        this.setState({...this.state.posts, [e.target.name]:e.target.value})
    }
 
    handleSubmit =(e)=>{
        e.preventDefault();
 
        this.handleEdit(this.state)
        
    }
    
   showModal =()=>{
    this.setState({show : true})
}
hideModal =()=>{
    this.setState({show:false})
}
    render() { 
        return ( <div>
              <Modal show={this.state.show} >
               <div>
                   <form  className='form-group'>
                       {/* <input type='text' name='userid' userid={this.state.posts.id} onChange={this.handleChang} className='form-control' /> */}
                       <input type='text' name='title'  onChange={this.handleChang} className='form-control'/>
                       <input type='text' name='body'  onChange={this.handleChang} className='form-control' />
                          <button onClick={this.hideModal} onSubmit={this.handleSubmit}>close</button>
                   </form>
                   </div>
             </Modal>
             <button className='btn btn-info btn-sm m-2 p-2'  onClick={()=>this.props.onUpdate()} >Edit Post
                    
                    </button>

        </div> );
    }
}
 
export default Update;