import React, {useState} from 'react'




/**
* @author
* @function CommentSection
**/

//not completed yet

const CommentSection = (props) => {


const [comment, setComment] = useState(data);
const user = JSON.parse(localStorage.getItem('profile'));
   const userId = user?.result._id;
   const avatarUrl = `https://ui-avatars.com/api/name=${user?.result.name}&background=random`
   const name = user?.result.name;
   const signinUrl = "/signin"
   const signupUrl = "/signup"
   let count = 0
   comment.map(i => {count+=1; i.replies && i.replies.map(i=> count+=1)} )

   return <div className="commentSection">
 <div className="header">{count} Comments</div>

 <
     </div>
 }
 


  

export default CommentSection