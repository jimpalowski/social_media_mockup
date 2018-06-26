import React from 'react'
import Wall from './Wall'

var masterPostingWall = [
  {   
    user: 'Lorem Ipsum',
    userimg: '',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {   
    user: 'Lorem Ipsum',
    userimg: '',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  }
]


function PostingWall(){
  return (
    <div>
      <hr/>
      {masterPostingWall.map((post, index) =>
        <Wall user={post.user}
          userimg={post.userimg}
          description={post.description}
          key={index} />
      )}
    </div>    
  )
}

export default PostingWall