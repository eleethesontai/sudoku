function fl(start, end, callback) {
    for(let i=start; i<=end; i++) {
        callback(i)
    }
}

fl(1,9,(i)=>{console.log(i)})