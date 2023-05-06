import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Hero.tsx'
import Section from './Section.tsx'
import SectionTwo from './SectionTwo.tsx'
import Sectionthree from './Sectionthree.tsx'
import EventSchedule from './EventSchedule.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Section />
    <SectionTwo />
    <Sectionthree />
    <EventSchedule />
  </React.StrictMode>,
)
