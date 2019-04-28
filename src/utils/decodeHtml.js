export const decodeHtml = (htmlStr) => {
  var txt = document.createElement('textarea')
  txt.innerHTML = htmlStr
  return txt.value
}

export default decodeHtml
