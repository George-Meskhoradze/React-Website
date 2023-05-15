import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Hero.tsx'
import Section from './Section.tsx'
import SectionTwo from './SectionTwo.tsx'
import Sectionthree from './Sectionthree.tsx'
import EventSchedule from './EventSchedule.tsx'
import Packet from './Packet.tsx'
import Sponsor from './Sponsor.tsx'
import Slider from './Slider.tsx'
import SliderSecond from './SliderSecond.tsx'
import Footer from './Footer.tsx'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Section />
    <SectionTwo />
    <Sectionthree />
    <EventSchedule />
    <Packet />
    <Sponsor />
    <Slider />
    <SliderSecond />
    <Footer />
  </React.StrictMode>,
)
