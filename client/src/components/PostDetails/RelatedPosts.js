import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {getPosts} from '../../actions/posts.js'
import './postDetails.css'
/**
* @author Mohamed Hagi
* @function RelatedPosts
**/

const RelatedPosts = ({category}) => {

const dispatch = useDispatch();
 


  useEffect(() => {
    
    dispatch(getPosts());


  },[dispatch]);
  

       const posts= useSelector((state) => state.posts.posts);
       const latestPosts = posts.slice().reverse();

    useEffect(() => {
  document.body.className = 'create';
  return () => { document.body.className = 'dark'; }
  

},);
  return(

   <div className="row">
                <div className="col-lg-9 mx-auto">
                    <section className="related-posts">
                        <h2 className="section-title mb-4">Related Posts</h2>
                        <div className="row">
                        {latestPosts.map((relatedPost) => {
         return(  
             (category == relatedPost.category  &&       

                                <div className="col-md-6" key={relatedPost._id}>
                                       <Link to={`/blogpost/${relatedPost._id}`}>
                                            <img src={relatedPost.selectedFile} alt="related post" className="post-thumbnail"/> </Link>
                                            <Link to={`/category/${relatedPost.category}`} className="post-category">{relatedPost.category.toUpperCase()}</Link>
                                        <Link to={`/blogpost/${relatedPost._id}`}>
                              <h5 className="post-title">{relatedPost.title}</h5>
                              </Link>
                            
                         
                              
                                                         <hr style={{borderTop: "1px solid black", width: "100%", margin: " 10px auto"}}/>
                            </div>

             )
            
         );
        })}
    
                            
                        </div>
                    </section>
 
     </div>

    
    </div>
     


   )

 }

export default RelatedPosts