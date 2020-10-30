import Service from '@ember/service';
import axios from 'axios';

export default class BaseapiService extends Service {
    
  get(url, withBear = false){

    if(url != ''){
      if(withBear){
       return axios.get(url, { headers: { 'Authorization': 'token' } });
      }else{
       return axios.get(url);
      }
    }
 }
  
  delete(url, withBear = false){

    if(url != ''){
      if(withBear){
       return axios.delete(url, { headers: { 'Authorization': 'token' } });
      }else{
       return axios.delete(url);
      }
    }
 }
  
  patch(url, data, withBear = false){

    if(url){
      if(withBear){
       return axios.patch(url, data,{ headers: { 'Authorization': 'token' } });
      }else{
       return axios.patch(url, data);
      }
    }
 }

  post(url, formdata, withBear = false){
     if(url != ''){
       if(withBear){
        return axios.post(url, formdata);
       }
     }
  }
}
