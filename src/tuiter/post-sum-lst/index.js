import React, {}  from 'react';
import itemsArray from './posts-item.json';
import PostItem from "./post-sum-item";

const PostItemList = () => {
 return(
   <ul className="list-group">
     {
       itemsArray.map(post =>
         <PostItem
           key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default PostItemList;