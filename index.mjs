
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
    let data = [
        "$9.79",
        "Nissin Cup Noodles Chicken 2.5 oz 24-count",
        "$9.89",
        "Swanson Chicken Broth 14.5 oz 12-count",
        "$11.19",
        "Nissin Top Ramen Chicken 3 oz 48-count",
        "$12.59",
        "Campbells Chicken Noodle Soup 10.75 oz 12-count",
        "$12.99",
        "CJ Bibigo Chicken & Cilantro Mini Wontons 3 lbs.",
        "$12.99",
        "IvarΓÇÖs Chicken Noodle Soup 32 oz 2-count",
        "$13.49",
        "Don Miguel Mini Tacos Chicken & Cheese 72-count",
        "$13.59",
        "Kirkland Signature Organic Chicken Stock 32 fl oz 6-count",
        "$13.89",
        "Sandwich Bros Chicken Melt Flatbread Pocket Sandwiches 2.5 oz 15-count",
        "$13.99",
        "Ling Ling All Natural Potstickers Chicken & Vegetable 4.2 lbs",
        "$13.99",
        "Kirkland Signature Chicken Bakes 8 oz 6-count",
        "$14.49",
        "Frankly Fresh Chicken Breast Burrito Bowl 12 oz 3-count",
        "$14.79",
        "Campbells Simply Chicken Noodle Soup 18.6 oz 8-count",
        "$15.09",
        "Nissin Hot & Spicy Noodle Bowl Chicken 3.32 oz 18-count",
        "$15.49",
        "Frontera Chicken Fajita Bowl Medium 11.3 oz 4-count",
        "$15.49",
        "Foster Farms Jumbo Chicken Corn Dogs 28-count",
        "$15.79",
        "El Monterey Mexican Grill Taquitos Chicken & Cheese 30-count",
        "$15.79",
        "Tru Grill Chicken Breast Strips Grilled 16 oz 2-count",
        "$15.79",
        "Rotisserie Chicken Breast Meat 2 lbs 14 oz",
        "$15.99",
        "Pierre Signatures Grilled Chicken Sandwich 4.0 oz 12-count",
        "$15.99",
        "Marie Callenders Chicken Pot Pies 10 oz 8-count",
        "$15.99",
        "Yummy Dino Buddies Dinosaur Chicken Breast Nuggets 5 lbs",
        "$16.39",
        "Tarantino Diced Chicken 5 lbs",
        "$16.99",
        "Kirkland Signature Chicken Meal & Rice Formula Dog Biscuits 15 lbs"
    ]
    for (let i = 0; i < data.length; i+=2) {
        price = data[i]
        n = data[i+1]
        loadCell(n, "Costco", price, 10)
    }
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
    p_price.innerHTML = price
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





