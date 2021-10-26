const li = document.getElementById('search-nav')
const field = document.getElementById('search-field')
const icon = document.getElementById('search')

icon.addEventListener('click', () => {
    if ((field.style.width = '0px')) {
        field.style.width = '180px'
        field.style.backgroundColor = '#ffffff'
        icon.style.color = '#313131'
    }
})
