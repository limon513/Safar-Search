function compareTime(timestring1,timestring2){
    const datetime1 = new Date(timestring1);
    const datetime2 = new Date(timestring2);
    return datetime1.getTime() <= datetime2.getTime();
}

function formatTime(time){
    const t = parseInt(time);
    if(t < 12){
        return t.toString().padStart(2,'0') + ":00:00";
    }
    else if(t == 12) return "12:00:00";
    else {
        return (t+12).toString().padStart(2,'0') + ":00:00";
    }
}

module.exports = {
    compareTime,
    formatTime,
}