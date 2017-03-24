var url = 'http://localhost/';
var debug = false;

var mock = {
  register: {
    ack: true,
  }
};

function get(method, params) {
  if(debug) {
    return new Promise((resolve, reject) =>{
      resolve(mock[method]);
    });
  } else {
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(params),
    });
  }

}

export default get;
