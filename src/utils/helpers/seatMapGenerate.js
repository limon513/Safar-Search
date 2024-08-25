const { Enums } = require("../common");

function generateSeatMap(coachNo,row,col,totalseat){
    const r = parseInt(row);
    const c = parseInt(col);
    let seatMap = [];
    for(let i=1; i<=r; i++){
        const j=65;
        for(let k=j; k<j+c; k++){
            const seatNo = (i.toString()+String.fromCharCode(k)).toString();
            console.log(seatNo);
            seatMap.push({
                coachNo: coachNo,
                seatNo: seatNo,
                seatStatus: Enums.SeatStat.AVAILABLE,
            });
        }
    }
    let beshi = + row+1;
    let cholbe = + totalseat-(row*col);
    while(cholbe--){
        seatMap.push({
            coachNo: coachNo,
            seatNo: (beshi.toString()+"Z"),
            seatStatus: Enums.SeatStat.AVAILABLE,
        });
        beshi++;
    }
    return seatMap;
}

module.exports={
    generateSeatMap,
}