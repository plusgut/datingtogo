var url = 'http://localhost/';
import debug from '../Config/debug';

const USER_COUNT = 4;
const RANDOMIZE = 5;
function mock(type) {
  var position = [11.6222117, 48.150102];

  var users = [];
  for(var i = 0; i < USER_COUNT; i++) {
    users.push({
      username: 'plusgut_' + i,
      position: [randomize(position[0], RANDOMIZE), randomize(position[1], RANDOMIZE)]
    });
  }
  return {
    register: {
      ack: true,
    },
    users: users
  }[type];
}

function randomize(value, length) {
  var stringValue = value + '';
  value = stringValue.slice(0, stringValue.length - length) + (Math.random() + '').slice(2, 2 + length);
  
  return parseFloat(value, 10);
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
