function circle(r) {
    myvalue = 2 * 3.14 * r
    myvalue1 = 2 * r
    myvalue2 = 3.14 * (r * r)

    var data = {
        circum: myvalue,
        diameter: myvalue1,
        area: myvalue2
    }

    return data


}


module.exports=circle;