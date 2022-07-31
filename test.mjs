import fetch from "node-fetch"

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

