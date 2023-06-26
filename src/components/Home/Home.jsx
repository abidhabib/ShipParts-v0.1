import React from 'react'
import Nav from '../Navbar/Nav'
import '../Home/Home.css'
import Counter from '../Counter'
import Header from '../Helpform'
import Company from '../Companies'
const Home = () => {
  return (
<>
<div className="home-container" 
  style={{
    width: "100%",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
    <div className="home-center"
    style={
      {
        width: "90%",
      }
    }>
    <Nav/>
<Header/>
<Company/>
    </div>
</div>
</>  )
}

export default Home