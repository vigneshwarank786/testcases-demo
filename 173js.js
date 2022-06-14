function revstr(val)
{
    var a=val;
    a = [...a].reverse().join("");
    return a;
}


module.exports=revstr;