var url = 'http://localhost/';
import debug from '../Config/debug';

function mock(type) {
  var position = [11.6222117, 48.150102];
  return {
    register: {
      ack: true,
    },
    users: [
      {
        username: 'plusgut',
        position: position
      }
    ]
  }[type];
}

function get(method, params) {
  if(debug) {
    return new Promise((resolve, reject) =>{
      resolve(mock(method));
    });
  } else {
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(params),
    });
  }

}

export default get;
