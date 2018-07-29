import React, { Component } from 'react'
import MCPlayer from 'react-player/lib/players/Mixcloud'

import './CloudcastPlayer.css'

class CloudcastPlayer extends Component {
  componentDidMount() {
    // const widget = window.Mixcloud.PlayerWidget(
    //   document.getElementById('cloudcastPlaer')
    // )
    //
    // console.log(widget)

    // widget.ready.then(function() {
    //   // Put code that interacts with the widget here
    //   console.log('widget is ready')
    // })
  }

  render() {
    return <div className='CloudcastPlayer'><MCPlayer /></div>
  }
}

export default CloudcastPlayer
