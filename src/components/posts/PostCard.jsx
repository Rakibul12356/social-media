import React from 'react';
import PostHeader from './PostHeader';

const PostCard = ({post}) => {
    console.log(post)
    return (
        <article className="card mt-6 lg:mt-8">
            <PostHeader post={post} />

        </article>
    );
};

export default PostCard;