import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import AddPost from './AddPost';

import Update from './update';


class Home extends Component {
    
    state = {
        posts :[ ],
        show : false,
    }
    
    handleDelete =(postId)=>{
        const posts = this.state.posts.filter(c=>c.id!==postId)
        this.setState({posts})
    }
    
    addPost = (post) =>{
        post.id = Math.random();
        const posts = [...this.state.posts, post]
        this.setState({posts})    
    }


   
   handleUpdate(id, index){
       let posts = this.state.posts
       Axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{title:'xyz', body : "new body defie"})
   .then(res => {
       posts[index] = res.data;
       this.setState({posts})
   })
   .catch(err => console.log(err))
}
   componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res=>{
          this.setState({posts : res.data})
      })
    }
      
    render() { 
        const {posts} = this.state
        const postsList = posts.length ?(
            posts.map((post,index)=>{return(
                <div className='container bg-light rounded'  key={post.id}>
                    <Link to={'/' + post.id}>
                    <h4 className='text-center text-danger'>{post.title}</h4>
                    
                    <p className='text-justify'>{post.body}</p></Link>
                    <button className='btn btn-danger btn-sm m-2 p-2' onClick={()=>this.handleDelete(post.id)}>Delete Post</button>
                    <Update onUpdate={()=>{this.handleUpdate(post.id, index)}} />
                </div>) 
            })
        ):(<p className='text-center text-capitalize bg-secondary text-light'>you have no posts</p>)
        return ( 
            <div className='container bg-warning rounded'>
                
             <AddPost addPost={this.addPost} />
             {postsList}
           
       
    
            </div>  
         );
    }
}
 
export default Home;