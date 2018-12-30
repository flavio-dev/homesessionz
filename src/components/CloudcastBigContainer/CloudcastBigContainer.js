import { setPlayingCloudcast, setIsPlaying } from 'app/actions'
import { getIsPlaying, getPlayingCloudcast } from 'app/selectors'
import playPauseTrigger from 'hocomponents/PlayPauseTrigger'

import CloudcastBig from './CloudcastBig'

const mapActionCreators = (dispatch) => ({
  setPlayingCloudcast: (url) => dispatch(setPlayingCloudcast(url)),
  setIsPlaying: (isPlaying) => dispatch(setIsPlaying(isPlaying))
})

const mapStateToProps = (state) => ({
  playingCloudcast: getPlayingCloudcast(state),
  isPlaying: getIsPlaying(state)
})

export default playPauseTrigger(CloudcastBig, mapStateToProps, mapActionCreators)
