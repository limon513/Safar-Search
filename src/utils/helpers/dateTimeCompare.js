function compareDate(timestring1,timestring2){
    const datetime1 = new Date(timestring1);
    const datetime2 = new Date(timestring2);
    return datetime1.getTime() < datetime2.getTime();
}

function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

function compareTime(time1, time2){
    const minutes1 = timeToMinutes(time1);
    const minutes2 = timeToMinutes(time2);
    console.log(`min1 = ${minutes1} min2 = ${minutes2}`);
    if (minutes1 <= minutes2) {
        return false; 
    } else {
        return true;
    }
}

function formatTime(time){
    const t = parseInt(time);
    if(t < 12){
        return t.toString().padStart(2,'0') + ":00:00";
    }
    else if(t == 12) return "12:00:00";
    else {
        return (t).toString().padStart(2,'0') + ":00:00";
    }
}

function getTodaysDateString(){
    const fulldatestr = new Date();
    const dateString = fulldatestr.getFullYear().toString()+'-'+
                        (fulldatestr.getMonth()+1).toString().padStart(2,'0')+'-'+
                        fulldatestr.getDate().toString().padStart(2.0);
    console.log(dateString);
    return dateString;
}

function instantTimeString(){
    const fulldatestr = new Date();
    const timeString = fulldatestr.getHours().toString().padStart(2,'0')+':'+fulldatestr.getMinutes().toString().padStart(2,'0');
    console.log(timeString);
    return timeString;

}

module.exports = {
    compareDate,
    formatTime,
    getTodaysDateString,
    instantTimeString,
    compareTime,
    timeToMinutes,
}