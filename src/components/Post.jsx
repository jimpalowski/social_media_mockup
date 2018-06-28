import React from 'react'
import PropTypes from 'prop-types'
function Post(props){
  return (
    <div>
      <style global jsx>{`
            div {
                background-color: white;
            `}</style>
      <h3>{props.user}</h3>
      <p><em>{props.userimg} || {props.description}</em></p> 
      <hr/>
    </div>     
  )
}


Post.propTypes = {
  user: PropTypes.string,
  userimg: PropTypes.string,
  description: PropTypes.string
}

export default Post