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

function scrape() {
    const url = "http://localhost:3000/api/price-feed"


    fetch(url)
        .then(res => {
            if (res.ok) {
                console.log("success")
            } else {
                console.log("error")
            }
            return res.json()
        })
        .then(data => console.log(data))
        .catch(error => console.log("ERROR"))

}



scrape()

