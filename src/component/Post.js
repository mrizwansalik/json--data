import React, { Component } from 'react';
import Axios from 'axios';

class Posts extends Component {
    state = {
        post: null,
        comments: [],
    }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        Axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({ post: res.data })
            })

        Axios.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
            .then(res => {

                this.setState({ comments: res.data })
            })

    }

    handleDelete = (commentId) => {
        if (!this.props.isLoggedIn) return alert('Un Authorized User');
        const comments = this.state.comments.filter(c => c.id !== commentId);
        console.log("filtered comments :", comments);
        this.setState({ comments });
    }
    render() {
        console.log(this.props)
        const post = this.state.post ? (
            <div>
                <h4 className='text-center'>{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>

            </div>

        ) : (<div className='text-center'> Loading Posts.......</div>)

        const { comments } = this.state;
        const commentsList = comments.length ? (
            comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <h4 className='text-center'>{comment.name}</h4>
                        <p className=''>{comment.email}</p>
                        <p>{comment.body}</p>
                        <button type="button" onClick={() => this.handleDelete(comment.id)}>
                            D
                        </button>
                    </div>
                )
            })


        ) : (<div className='text-center'> Loading Comments.......</div>)
        return (
            <div className='bg-success m-2 p-2 rounded'>
                <div className='container'>
                    {post}
                    <h5 className='text-center'> Comments Of This Post</h5>
                    {commentsList}
                </div>

            </div>
        );
    }
}

export default Posts;