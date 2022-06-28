import React from 'react'
import Banner from '../components/Home/Banner'
import Client from '../components/Home/Client'
import Features from '../components/Home/Features'
import Footer from '../components/Home/Footer'
import Header from '../components/Home/Header'
import Location from '../components/Home/Location'
import Section from '../components/Home/Section'

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Section/>
      <Features/>
      <Client/>
      <Location/>
      <Footer/>
    </div>
  )
}
