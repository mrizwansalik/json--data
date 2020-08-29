import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import AddPost from './AddPost';
import Update from './update';


class Home extends Component {
    state = {
        posts: [],
        isModalOpen: false,
        singlePost: {
            id: 0,
            body: "",
            title: "",
        },
        postIndex: null,
    }
    handleDelete = (postId) => {
        if (!this.props.isLoggedIn) return alert('Un Authorized User');
        const posts = this.state.posts.filter(c => c.id !== postId)
        this.setState({ posts })
    }

    addPost = (post) => {
        if (!this.props.isLoggedIn) return alert('Un Authorized User');
        post.id = Math.random();
        const posts = [...this.state.posts, post]
        this.setState({ posts })
    }

    handleToggleModal = (post, index) => {
        if (post) {
            if (!this.props.isLoggedIn) return alert('Un Authorized User');
            let singlePost = this.state.posts.find(p => p.id === post.id);
            this.setState(prevState => ({ ...prevState, isModalOpen: !this.state.isModalOpen, singlePost, postIndex: index }));
        } else {
            this.setState(prevState => ({ ...prevState, isModalOpen: !this.state.isModalOpen }));
        }
        // console.log("filterPost :", filterPost);
    }

    handleUpdate = () => {
        if (!this.props.isLoggedIn) return alert('Un Authorized User');
        // console.log('asdklj');
        let posts = this.state.posts
        Axios.put(`https://jsonplaceholder.typicode.com/posts/${this.state.singlePost.id}`, { title: this.state.singlePost.title, body: this.state.singlePost.body })
            .then(res => {
                // console.log(res)
                posts[this.state.postIndex] = res.data;
                this.setState({ posts, isModalOpen: !this.state.isModalOpen });
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({ posts: res.data })
            })
    };

    onChangePost = e => {
        let key = e.target.id;
        let value = e.target.value;
        // console.log(key);
        // console.log(value);
        this.setState(prevState => ({
            ...prevState, singlePost: {
                ...prevState.singlePost,
                [key]: value
            }
        }))
    };
    render() {
        console.log(this.props)
        const { posts, isModalOpen } = this.state
        const postsList = posts.length ? (
            posts.map((post, index) => {
                return (
                    <div className='container bg-light rounded' key={post.id}>
                        <Link to={'/' + post.id}>
                            <h4 className='text-center text-danger'>{post.title}</h4>

                            <p className='text-justify'>{post.body}</p></Link>
                        <button className='btn btn-danger btn-sm m-2 p-2' onClick={() => this.handleDelete(post.id)}>Delete Post</button>
                        <button className='btn btn-danger btn-sm m-2 p-2' onClick={() => this.handleToggleModal(post, index)}>Edit Post</button>
                        {
                            isModalOpen &&
                            <Update onChangePost={this.onChangePost} handleUpdate={this.handleUpdate} parentState={this.state} isModalOpen={isModalOpen} handleToggleModal={this.handleToggleModal} />
                        }
                    </div >)
            })
        ) : (<p className='text-center text-capitalize bg-secondary text-light'>you have no posts</p>)
        return (
            <div className='container bg-warning rounded'>
                <AddPost addPost={this.addPost} {...this.props} />
                {postsList}
            </div>
        );
    }
}

export default Home;