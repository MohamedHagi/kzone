import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getPostsBySearch, getPosts} from '../../actions/posts.js';
import { CircularProgress } from '@material-ui/core';
import Post from '../HomePage/Post/Post.js';
import '../HomePage/Posts/style.scss'


/**
* @author
* @function SearchResult
**/

const SearchResult = ({match}) => {

const dispatch = useDispatch();

const search = match.params.searchQuery;

useEffect(() => {

   dispatch(getPostsBySearch({search}));
        


}, [dispatch]);

     const {isLoading, posts} = useSelector(state => state.posts);
   
if (!posts.length && !isLoading) return  (<div style={{marginTop:"100px"}}>
    <h6> No posts found</h6>
    </div>);
    
  return(

 isLoading ? <div style={{marginTop:"100px"}}><CircularProgress /></div> : (
    <div style={{marginTop:"100px"}}>
    <h3> SEARCH RESULTS: </h3>
   <div className="band">
    {posts.map((post, itemID) => {
 itemID+=1;
return(
<Post post={post} itemID={itemID}/>
);

})}

    </div> 
    </div>
 )
   )
  
 }

export default SearchResult