const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8000/results')
    .then(response => response.json())
    .then(data => {
        data.forEach(artical => {
            const articalItem = `<div><h3>` + artical.title + `</h3><p>` + artical.url + `</p></div>`
            feedDisplay.insertAdjacentHTML("beforeend", articalItem)
        })
    })
    .catch(err => console.log(err))