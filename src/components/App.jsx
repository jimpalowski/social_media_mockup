import React from 'react'
import PostingWall from './PostingWall'
import NavBar from './NavBar'

function App() {
  return (
  
    <div>
          <NavBar/>
      <style global jsx >{`
        body {
          font-family: Helvetica;
        }
        .box {
          border: none;
          display: block;
          border-bottom: 2px solid #fff;
          margin-bottom: 10px;
        }
        .box:hover {
          border-bottom: 2px solid #ccc;
          outline: 0;
        }
        a {
          color: #888;
          text-decoration: none;
        }
      `}</style>
      
      <div style={{margin: '19px auto 0', width: 142}}>
        <a href="https://medium.com/" target="_blank">
          <div className="box">
            <PostingWall/>
          </div>
        </a>
      </div>
    </div>
  )
}

export default App