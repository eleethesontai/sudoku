function fl(range, callback) {
    for(let i=0; i<range; i++) {
        callback(i)
    }
}

fl(9,row => {
    fl(9,col=> {
        console.log(row,col)
    })
})