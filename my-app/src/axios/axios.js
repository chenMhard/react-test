import Jsonp from '.0.2.1@jsonp';

export default {
    jsonpRequest(url){
        return new Promise((resolve,reject) => {
            Jsonp(url,{ param : 'callback'},(err,data)=>{
                if(data.status === 'success'){
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    }
}