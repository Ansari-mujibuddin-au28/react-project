import React from 'react'
import Helmet from 'react-helmet';
import Header from '../Header'

const Home = props => {
  return (
    <>
    <Helmet>
        <title>
            Galary
        </title>
    </Helmet>
    <Header />
        <div>Home</div>
    </>
    
  )
}

Home.propTypes = {}

export default Home