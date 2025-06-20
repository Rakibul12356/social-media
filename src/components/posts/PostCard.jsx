import React from 'react';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostAction from './PostAction';
import PostComments from './PostComments';
import PostCommentList from './PostCommentList';

const PostCard = ({post}) => {
    console.log(post)
    return (
        <article className="card mt-6 lg:mt-8">
            <PostHeader post={post} />
            <PostBody poster={post?.image} content={post?.content}/>
            <PostAction  post={post} commentCount={post?.comments?.length}/>
            <PostComments post={post}/>
            <PostCommentList/>

        </article>
    );
};

export default PostCard;