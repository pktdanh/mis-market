import axios from 'axios';
//mock API
// let API_URL = 'https://5adc8779b80f490014fb883a.mockapi.io';
let API_URL = 'https://6146e2b165467e0017384983.mockapi.io';
   export default function callApi(endpoint, method = 'GET', body) {
       return axios({
           method,
           url: `${API_URL}/${endpoint}`,
           data: body
       }).catch(err => {
           console.log(err);
       });
}
