import React from 'react'

import VideoWrapper from 'components/VideoWrapper'

import './About.css'

import smallHomeVid from './aboutMobile.mp4'
import mediumHomeVid from './aboutTablet.mp4'
import largeHomeVid from './aboutDesktop.mp4'

export const About = () => (
  <div className='page'>
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
            ... are a series of events designed to make a connection between a music selector,
            a visual artist & a small audience.
            <br />
            no booth, no phones, no physical barriers.<br />
            h/s aims to rebuild the bond between interaction & communication, music & people, art & accessibility.
          </p>
          <p>
            no live streams, no requests, no pressure. just freedom & mind openers.<br />
            freedom for the selector to play whatever they feel like, for however long they want.<br />
            opportunity for the artist to share his/her art expression directly with the audience.<br />
            this results in a unique journey, between impromptu cross art form collaborations & free flow,
            in the intimacy of a private location.
          </p>
        </div>
      </section>
    </VideoWrapper>
  </div>
)

export default About
