import React from 'react'
import PropTypes from 'prop-types'

import './TurntableIcon.css'

export const TurntableIcon = ({ playPauseTrigger }) => (
  <div className='turntable-icon'>
    <svg className='turntable-icon__svg' viewBox='0 0 502 414'>
      <path d='M21.5 1C12.8 3.2 6 8.8 2.4 16.5l-2.4 5V207c0 178.2.1 185.7 1.9 189.6 2.7 5.8 7.7 11.1 13.5 14.2l5.1 2.7h461l5-2.7c6.2-3.3 10.8-8 13.4-13.8 2-4.5 2.1-5.6 2.1-190V21.5l-2.4-5c-1.3-2.8-4.4-6.9-6.9-9.2C483.6-.6 504.1 0 250.4.1 126.2.2 23.2.6 21.5 1zm451.8 18c4 0 5.4.5 7.8 2.9l2.9 2.9v364.4l-2.9 2.9-2.9 2.9H23.8l-2.9-2.9-2.9-2.9V25.3l2.1-2.7c1.1-1.4 3.3-2.9 5-3.3 2.1-.6 397.6-.9 448.2-.3z' />
      <path d='M184 27.1C127.7 34.3 78.4 67 49.7 116c-29.6 50.6-32.5 113.8-7.8 167.3 13.9 30 36.7 56.2 65.5 75.5 16.4 10.9 42.3 21.6 61.6 25.5 23.4 4.7 51.8 4.8 73.7.3 89.4-18.7 151.1-100.4 144.2-190.8-1.8-24.5-7.2-44.5-17.8-66.3-9.1-18.6-17.9-31.2-32.6-46.4-28.7-29.9-66.9-48.9-108.5-54-9.7-1.3-34.5-1.2-44 0zM223.5 45c63.8 7.4 117.4 50.5 137.4 110.8 6.2 18.8 7.5 27.5 7.5 51.2 0 18.5-.3 22.9-2.2 31.6-9.5 43.8-33.4 79.4-69.7 103.8-3.8 2.6-12.8 7.6-20 11.1-79.4 39-175.8 5.8-215.9-74.4-13.2-26.2-19-56-16.5-84.6 1.8-21.6 6.4-38.4 15.5-57.5 19.6-40.8 55.2-71.9 98-85.3 21.7-6.8 44.4-9.1 65.9-6.7z' />
      <path d='M191.8 129c-15.7 2.7-31 11.1-43 23.8-30.2 32.1-28.6 81.9 3.6 111.9 16.8 15.6 34.7 22.1 57.6 21 13.6-.7 20.7-2.4 31.5-7.8 20.6-10.2 35.7-28.8 41.6-51.4 3.2-12 3-29-.5-40.8-3-10.2-6.9-18.3-12.1-25.3-12.4-16.4-28.6-26.9-48-30.9-7.8-1.6-22.7-1.8-30.7-.5zm34.2 20.5c14.2 5.2 23.7 12.8 32 25.6 6.6 10.2 8.5 17.4 8.5 31.9 0 15.1-2 22.1-9.7 33.5-7.9 12-18.8 20.1-33.8 25.1-8.4 2.8-25.3 2.6-34.5-.4-19.2-6.4-33.7-20.8-40-39.7-2.2-6.4-2.7-9.9-2.7-17.5 0-17.6 5.6-31.5 17.7-43.6 7.8-7.9 14.9-12.3 24.5-15.3 9.2-2.9 10.4-3 21-2.6 7.2.2 11.3 1 17 3z' />
      <path d='M202 192.2c-11.8 3.3-14.8 18.1-5.6 26.8 4 3.6 13.8 4.1 18.5.8 9.4-6.4 9.1-20.4-.5-26-4-2.2-8.3-2.8-12.4-1.6zM25 366v22h57l-.2-21.8-.3-21.7-28.2-.3L25 344v22zM321.3 372.4c-3.7 3.2-3.9 9.3-.4 13 2.3 2.5 3 2.6 12.6 2.6 8.8 0 10.6-.3 12.9-2.1 3.6-2.9 3.7-9.9.1-13.4-2.2-2.3-3.1-2.5-12.4-2.5-9.1 0-10.2.2-12.8 2.4zM359.5 372.5c-3.6 3.5-3.5 10.5.1 13.4 2.3 1.8 4.1 2.1 12.9 2.1 9.6 0 10.3-.1 12.6-2.6 3.4-3.6 3.2-9.9-.5-13.1-2.4-2.1-3.7-2.3-12.7-2.3-9.3 0-10.2.2-12.4 2.5z' />
    </svg>
    <div onClick={playPauseTrigger} className='turntable-icon__action' />
  </div>
)

TurntableIcon.propTypes = {
  playPauseTrigger: PropTypes.func
}

export default TurntableIcon
