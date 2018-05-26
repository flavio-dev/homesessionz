export const getEnvUrlPrefix = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:4000'
  } else if (process.env.NODE_ENV === 'production') {
    return 'https://homesessionz.herokuapp.com'
  } else {
    return ''
  }
}

export default getEnvUrlPrefix
