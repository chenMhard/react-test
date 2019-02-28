export default {

    formatDate(time){
        if(!time) return '';
        let nowD = new Date(time);
        let Y = nowD.getFullYear() > 9 ? nowD.getFullYear():'0' + nowD.getFullYear();
        let M = (nowD.getMonth()+1) > 9 ? (nowD.getMonth()+1):'0' + (nowD.getMonth()+1);
        let D = nowD.getDay() > 9 ? nowD.getDay():'0' + nowD.getDay();
        let H = nowD.getHours() > 9 ? nowD.getHours():'0' + nowD.getHours();
        let m = nowD.getMinutes() > 9 ? nowD.getMinutes():'0' + nowD.getMinutes();
        let s = nowD.getSeconds() > 9 ? nowD.getSeconds():'0' + nowD.getSeconds();
        
        return Y + '-' + M +'-' + D + ' ' + H + ':' + m + ':' + s




    }




}