/** 
 * 时间戳格式化函数 
 * @param  {string} format    格式 
 * @param  {int}    timestamp 要格式化的时间 默认为当前时间 
 * @return {string}           格式化的时间字符串 
 */
export function formatDate(k,timestamp){  
    var now = new Date(timestamp);
    var year=now.getFullYear();     
    var month=(now.getMonth()+1)<9?'0'+(now.getMonth()+1):(now.getMonth()+1);     
    var date=now.getDate()<9?'0'+now.getDate():now.getDate();     
    var hour=now.getHours()<9?'0'+now.getHours():now.getHours();     
    var minute=now.getMinutes()<9?'0'+now.getMinutes():now.getMinutes();     
    var second=now.getSeconds()<9?'0'+now.getSeconds():now.getSeconds();     
    if(k === 1){
        return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;     
    }
    return year+"-"+month+"-"+date;     
}
