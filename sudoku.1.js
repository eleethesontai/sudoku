const GRID_SIZE = 4

function solve(grid) {

    let valid = (g,r,c,n) => {
        
        for(let i=0; i<4; i++) {
            if (g[r][i]===n) return false
            if (g[i][c]===n) return false
        }

        br=r-r%2
        br=c-c%2

        for(x=br;x<br+2;x++) {
            for(y=bc;y<bc+2;y++) {
                if(g[x][y]===n) return false
            }
        }

        return true
    }
    let recurse = (g,f) => {
        
    }

    let results = []
    recurse(grid,true)
    return results

}

// for(let r=0; r<GRID_SIZE; r++) {
//     for(let c=0; c<GRID_SIZE; c++) {
//         if(g[r][c]===0) {   
//         }
//     }
// }

let test = [
        [1,0,3,4],
        [4,3,2,1],
        [2,1,4,3],
        [3,4,1,2]
    ]

let results = solve(test)
console.log(results)