
fetch('http://localhost:3000/puzzle')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })