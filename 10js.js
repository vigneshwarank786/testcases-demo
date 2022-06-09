function day(d) {
    value = d / 365;
    value1 = d / 7;
    value2=d;

    var data = {
        year: value,
        week: value1,
        days:value2
    }

    return data

}



module.exports=day;

