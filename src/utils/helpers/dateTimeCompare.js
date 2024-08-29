function compareTime(timestring1,timestring2){
    const datetime1 = new Date(timestring1);
    const datetime2 = new Date(timestring2);
    return datetime1.getTime() < datetime2.getTime();
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
    compareTime,
    formatTime,
    getTodaysDateString,
    instantTimeString,
}