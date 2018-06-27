import React from 'react'
import PostingWall from './PostingWall'
import NavBar from './NavBar'
import SearchBox from './SearchBox';


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

        .video-container {
          position: relative;
        }
        video {
          height: auto;
          vertical-align: middle;
          width: 100%;
        }
        .overlay-desc {
          background: rgba(0,0,0,0);
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          align-items: center;
          justify-content: center;
          margin-top:250px;
        }
        h1 {
          color: white;
          font-family: 'Nobile', sans-serif;
          font-size: 9vw;
          text-align: center;
        }
      `}</style>
      <div className="video-container">
        <video autoPlay loop>
          <source src="http://www.icutpeople.com/wp-content/themes/icutpeople/assets/video/waynesworld.mp4" type="video/mp4" />

        </video>
        <div className="overlay-desc">
          <SearchBox/>
        </div>

      </div>
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
