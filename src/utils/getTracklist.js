import whatwgFetch from './fetch'

function getCookie(name) {
    var pair = document.cookie.split('; ').find(x => x.startsWith(name+'='));
    if (pair)
       return pair.split('=')[1]
}

function getCastID(){
    var datas = JSON.parse(document.getElementById("relay-data").innerHTML.replace(/&quot;/g,'"'));
    for (let data of datas) {
        if(data.hasOwnProperty('cloudcast')){
            try {
                var id = data.cloudcast.data.cloudcastLookup.id;
            } catch ($error){

            }
            if(id){
                return id;
            }
        }
    }
}

export const getTracklist = () => {
  const id = getCastID();
  const cookie = getCookie('csrftoken');

  const query = `
  {
     "id":"q70",
     "query":"query PlayerControls($id_0:ID!) {cloudcast(id:$id_0) {id,...Fc}} fragment F9 on TrackSection {artistName,songName,startSeconds,id} fragment Fa on ChapterSection {chapter,startSeconds,id} fragment Fc on Cloudcast {sections {__typename,...F9,...Fa},id}",
     "variables":{
        "id_0":"${id}"
     }
  }
  `;

  const options = {
      method: 'POST',
      headers: {
          'Content-Type':'application/json; charset=utf-8',
          'x-csrftoken': cookie
          },
      credentials: 'same-origin',
      body: query
  }

  const tracklist = whatwgFetch('https://www.mixcloud.com/graphql', options)

  console.log('tracklist = ', tracklist)

  return tracklist
}

export default getTracklist
