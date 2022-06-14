

function dub(val) {

    const counts = {};
    const sampleArray = val;
    sampleArray.forEach(function (n) {
        counts[n] = (counts[n] || 0) + 1;
    });
    return counts;
}


module.exports=dub;