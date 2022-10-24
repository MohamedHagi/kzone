import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getPosts} from '../../../actions/posts.js'
import {Link} from 'react-router-dom'
import './style.css'

/**
* @author
* @function WhatsNew
**/

const WhatsNew = (props) => {

   const dispatch = useDispatch();





const posts = useSelector((state) => state.posts.posts);

const latestOrder = posts.slice().reverse();

const latestPosts = latestOrder.slice(1,5);



  return(
  <div className= "category-container">
    <div className="category-title">What's New ?</div>
    <hr style= {{ borderTop:"1px solid black", width: "75%", margin: "5px auto"}}/>

 



        {latestPosts.map((post, id) => {
       id = post._id;
         return(
              <div key={id}>
            <Link to={`/category/${post.category}`} className="category-post">{post.category.toUpperCase()}</Link>
                                        <Link to={`/blogpost/${id}`}>
                                         <h5 className="category-post-title">{post.title}</h5>
                                             <hr style= {{ borderTop:"1px solid lightgrey", width: "100%"}}/>
                              </Link>
               </div>
         );
        })}

    
     

    </div>
   )

 }

export default WhatsNew