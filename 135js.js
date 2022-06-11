

function dub() {

    const counts = {};
    const sampleArray = ['a', 'a', 'b', 'c'];
    sampleArray.forEach(function (n) {
        counts[n] = (counts[n] || 0) + 1;
    });
    return counts;
}


module.exports=dub;