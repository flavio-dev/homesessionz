import React from 'react'

import VideoWrapper from 'components/VideoWrapper'

import './About.css'

import smallHomeVid from './aboutMobile.mp4'
import mediumHomeVid from './aboutTablet.mp4'
import largeHomeVid from './aboutDesktop.mp4'

export const About = () => (
  <VideoWrapper
    smallVid={smallHomeVid}
    mediumVid={mediumHomeVid}
    largeVid={largeHomeVid}
    title='abøut'
  >
    <section className='last'>
      <div className='about'>
        <h2 className='title-margin'>høme sessiønz...</h2>
        <p>
          ... is a serie of events designed to make a connection between a music selector & a small audience.
          <br />
          no booth, no phones, no physical barrieres.<br />
          h/s aims to rebuild the bond between interaction & communication, music & people.
        </p>
        <p>
          no live streams, no requests. just freedom.<br />
          freedom for the selector to play whatever they feel like, for however long they want - no pressure.<br />
          let the music tell the story.
        </p>
      </div>
    </section>
  </VideoWrapper>
)

export default About
