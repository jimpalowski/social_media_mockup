import React from 'react'
import Post from './Post'
import spacedebris from '../assets/images/spacedebris.jpg';
import knights from '../assets/images/knights.jpg';
import skeleton from '../assets/images/skeleton.jpg';
import ninja from '../assets/images/ninja.jpg';
import penguin from '../assets/images/penguin.png';

var masterPostingWall = [
  {   
    user: 'Lorem Ipsum',
    userimg: <img src={spacedebris}/>,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {   
    user: 'Enim veritus ',
    userimg: <img src={knights}/>,
    description: 'perferendis quo aliquid vitae..',
  },
  {   
    user: 'Random',
    userimg: <img src={skeleton}/>,
    description: 'Vis legimus legendos deserunt et',
  },
  {   
    user: 'Ninja',
    userimg: <img src={ninja}/>,
    description: 'Cu nominavi phaedrum praesent sea.',
  },
  {   
    user: 'penguinzz',
    userimg: <img src={penguin}/>,
    description: 'Zril quando nemore mei in, qui id meis graece.',
  },
  
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

      div{
        border: 2px solid grey;
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