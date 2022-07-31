

const url = "http://localhost:3000/api/price-feed"

// website is not formatting for thin windows - 
// gives a warning to the user if they make the window smaller than 600px
var currentWidth = window.innerWidth;
window.addEventListener('resize', function () {
    console.log(window.innerWidth)
    if (window.innerWidth < 600 && window.innerWidth < currentWidth) {
        alert('This website was not made for smaller viewports. Note that formatting may be distorted.')
    }
    currentWidth = window.innerWidth
})

var input = document.getElementById('search-box')
document.getElementById('search-btn').addEventListener('click', submitForm)
function submitForm() {
    console.log("reached submit")
    clearAllCells(); clearAllCells()
    webScrape("chicken")
}

// web scraping functions go here
function webScrape(keyword) {
    // fill a dictionary or object with all of the entries
        fetch(url, {
            mode: "no-cors"
        })
            .then(response => {
                if (response.ok) {
                    console.log("success")
                } else {
                    console.log(response.json())
                }
                return response.json()
            })
            .then(data => {
                var msg = document.createElement('p')
                msg.id = 'data'
                msg.innerHTML = data
                document.body.appendChild(msg)
            })
            .catch(error => {
                var msg = document.createElement('p')
                msg.id = 'data'
                msg.innerHTML = error
                document.body.appendChild(msg)
            })







    // keep this as the very last step
    if (data.length == 0) {
        var msg = document.createElement('p')
        msg.id = 'initial-msg'
        msg.innerHTML = 'No Results Found'
        document.body.appendChild(msg)
    }
}



function clearAllCells() {
    // remove initial message
    var msg = document.getElementById('initial-msg');
    if (msg != undefined) {
        msg.remove()
    }
    // get and remove every cell
    var cells = document.getElementsByClassName('cell');
    for (var i = 0; i < cells.length; i++) {
        cells[i].remove();
    }
}

function loadCell(name, desc, price, link = '') {
    // creating the cell's elements
    var output = document.getElementById('output')
    var li = document.createElement('li')
    li.classList.add('cell')
    var h2_name = document.createElement('h2')
    h2_name.classList.add('item-name')
    h2_name.innerHTML = name;
    var p_price = document.createElement('p')
    p_price.classList.add('item-price')
    p_price.innerHTML = '$' + price
    var p_desc = document.createElement('p')
    p_desc.classList.add('item-desc')
    p_desc.innerHTML = desc
    li.appendChild(h2_name)
    li.appendChild(p_price)
    li.appendChild(p_desc)
    output.appendChild(li)
    // deleting the top border for first cell
    var cells = document.getElementsByClassName('cell')
    if (cells == undefined || cells.length <= 1) {
        li.style.borderTop = 'none';
    }
}



/* for testing
loadCell('test','made with loadCell()',5)
loadCell('test2','made with loadCell()',10)
loadCell('test3','made with loadCell()',15)*/