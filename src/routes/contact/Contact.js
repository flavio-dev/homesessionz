import React from 'react'

import VideoWrapper from 'components/VideoWrapper'

import './Contact.css'

import smallHomeVid from './contactMobile.mp4'
import mediumHomeVid from './contactTablet.mp4'
import largeHomeVid from './contactDesktop.mp4'

export const Contact = () => (
  <div className='page'>
    <VideoWrapper
      smallVid={smallHomeVid}
      mediumVid={mediumHomeVid}
      largeVid={largeHomeVid}
      title='cøntact'
    >
      <section className='last'>
        <div className='contact font--medium'>
          <form method='POST' action='https://formspree.io/myshoestravel@gmail.com'>
            <div className='contact__form'>
              <div className='contact__form__email-name'>
                <input type='name' name='name' placeholder='name' />
                <input type='email' name='email' placeholder='email*' />
              </div>
              <textarea name='message' placeholder='message' rows='4' />
              <button type='submit'>send</button>
            </div>
          </form>
        </div>
      </section>
    </VideoWrapper>
  </div>
)

export default Contact
