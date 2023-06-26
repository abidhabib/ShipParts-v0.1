import React from 'react'
import Nav from '../Navbar/Nav'
import '../Home/Home.css'
import Counter from '../Counter'
import Header from '../Helpform'
import Company from '../Companies'
import Faq from '../FAQs'
import { Content } from '../Content'
import { Footer } from '../Footer/Footer'
const Home = () => {
  return (
<>
    <Nav/>
<Header/>
<Company/>
<Faq/>
<Content/>
<Footer/>
 
</>  )
}

export default Home