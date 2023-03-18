const paragraph = document.getElementById('paragraph')

const params = new URLSearchParams(window.location.search)

params.forEach((value,key) => {
    paragraph.append(`${key} = ${value}`)
    paragraph.append(document.createElement('br'))
})