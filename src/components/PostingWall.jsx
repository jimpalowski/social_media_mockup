import React from 'react'
import Post from './Post'

var masterPostingWall = [
  {   
    user: 'Lorem Ipsum',
    userimg: 'aw',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {   
    user: 'Lorem O',
    userimg: 'sd',
    description: 'perferendis quo aliquid vitae..',
  }
]


function PostingWall(){
  return (
    <div>
      <style jsx>
        {`
      h1{
        color:black;
      }
      .search{
        border: 15px solid lightblue;
        background-color: lightblue;
      }
      `}</style>
      <hr/>
      <div className="search">
      <input placeholder="Whats Happening" />
      </div>
      {masterPostingWall.map((post, index) =>
        <Post user={post.user}
          userimg={post.userimg}
          description={post.description}
          key={index} />
      )}
    </div>    
  )
}

export default PostingWall