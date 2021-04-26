
export function getDate(timesrcoll){
    var date = new Date(+timesrcoll);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day}`
}
