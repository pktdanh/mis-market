import React, {useEffect} from 'react';
import axios from 'axios';


function StoreInformation() {
  useEffect(() => {
    
    let url1 = 'https://localhost:44352/api/store/all'
      let fetchData1 =  () => {
          const result = axios.get(url1, 
          ).then(function (res) {
            console.log(res.data);  
                      //  console.log(JSON.stringify(res.data));
          }).catch(function (error) {
              console.log(error);
          });
        }
      fetchData1()
  })
  return <div>Quan li cua hang</div>;
}

export default StoreInformation;
