import React from 'react';
import './PostItem.css';
import styled from 'styled-components';

const paraStyle = {
    fontSize: '20px',
    backgroundColor: 'yellow'
}

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const PostItem = ({ post }) => {
    return (
        <div className="container">
            <Title>ID: {post.id}</Title>
            <h3 style={{ fontSize: '24px', color: 'blue' }}>{post.title}</h3>
            <p style={paraStyle}>{post.body}</p>
            <Button>Edit</Button>
            <Button primary>Delete</Button>
        </div>
    )
};

export default PostItem;
