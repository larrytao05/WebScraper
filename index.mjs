import fetch, {
    Blob,
    blobFrom,
    blobFromSync,
    File,
    fileFrom,
    fileFromSync,
    FormData,
    Headers,
    Request,
    Response,
} from 'node-fetch'
  
if (!globalThis.fetch) {
    globalThis.fetch = fetch
    globalThis.Headers = Headers
    globalThis.Request = Request
    globalThis.Response = Response
}

const url = "http://localhost:3000/api/price-feed"

// website is not formatting for thin windows - 
// gives a warning to the user if they make the window smaller than 600px


// web scraping functions go here
function webScrape(keyword) {
    // fill a dictionary or object with all of the entries
    fetch(url)
    .then(res => {
        if (res.ok) {
            console.log("success")
        } else {
            console.log("error")
        }
        return res.json()
    })
    .then(data => {
        var msg = document.createElement('p')
        msg.id = 'data'
        msg.innerHTML = data
        document.body.appendChild(msg)
    })
    .catch(error => {
        console.log(error.msg)
})
    
}
webScrape("C")



