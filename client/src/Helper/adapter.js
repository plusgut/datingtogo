var url = 'http://localhost/';
import debug from '../Config/debug';

const USER_COUNT = 4;
const RANDOMIZE_X = 6;
const RANDOMIZE_Y = 5;
function mock(type) {
  var position = [11.6222117, 48.150102];

  var users = [];
  for(var i = 0; i < USER_COUNT; i++) {
    var x = position[0];
    var y = position[1];

    if(i !==0) {
      x = randomize(x, RANDOMIZE_X);
      y = randomize(y, RANDOMIZE_Y);
    }

    users.push({
      username: 'plusgut_' + i,
      position: [x, y]
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
