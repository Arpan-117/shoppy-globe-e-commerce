import React from 'react'
import { Link } from 'react-router'

function NotFound() {

  return (
    <div>
      <img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExemg5cnVuazV5cnkwNWhvNWtmeWlhMG9kZjRxamkyaGttaGs2eHljaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UoeaPqYrimha6rdTFV/giphy.gif' alt='404-error' className='mx-auto' />
      <p>The page you are looking for doesn't exist.</p>
      <Link to='/'>
        <p>Go to homepage {'>>'} </p>
      </Link>

    </div>
  )
}

export default NotFound