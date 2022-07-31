const axios = require('axios')
const { html } = require('cheerio')
const cheerio = require('cheerio')
const express = require('express')

function generateURL(keyword) {
  
  const costco = `https://www.costco.com/CatalogSearch?keyword=${keyword}&dept=All&hide-unavailable-items=in-stock&deliveryFacetFlag=false&refine=||item_program_eligibility-ShipIt||item_location_availability-in%2Bstock&sortBy=item_location_pricing_salePrice+asc`
  const stop_shop = `https://stopandshop.com/product-search/${keyword}?searchRef=`
  const target = `https://www.target.com/s?searchTerm=${keyword}&sortBy=PriceLow&moveTo=product-list-grid`

  const urls = costco

  return urls
}

coinArr = []

async function getPriceFeed(keyword) {
  try {
    const siteUrl = generateURL(keyword)
    const { data } = await axios({
      method: "GET",
      url: siteUrl,
    })


    const $ = cheerio.load(data)
    //const elemSelectorStopShop = "#product-search-panel > div > div.product-view.product-view-search > div.product-search-result > div > ul > li > div.product-tile_content > div.product-grid-cell_price-tag.product-grid-cell_price-tag--full-tile > div.product-tile_detail > div > div > span"
    const elemSelector = "#search-results > div.product-list.grid > div > div.product-tile-set > div.thumbnail > div.caption.link-behavior > div.caption"
    //const elemSelectorTarget = "#pageBodyContainer > div > div > div > div > div.styles__StyledRow-sc-1nuqtm0-0.goXowJ > div.styles__StyledCol-sc-ct8kx6-0.kakpde > div > section > div > div > div > div >  div.styles__ImageAndInfoWrapper-sc-1iglypx-3.cunuto > div.styles__StyledProductCardBody-sc-bcz5ql-0.ioITgn > div > div > div.styles__ProductCardPriceAndPromoStyled-sc-1p9w55v-0.bqCwoU > div > div.h-padding-r-tiny > div > span"
    const keys = [
      "price",
      "name",
    ]


    $(elemSelector).each((parentIdx, parentElem) => {
      let keyIdx = 0
      const coinObj = {}

        $(parentElem).children().each((childIdx, childElem) => {
          if (childIdx >= 1 && childIdx <= 3 && (childElem["name"] == "div" || childElem["name"] == "span")) {
            let tdValue = $(childElem).text().replace(/\n/g, '').replace(/\t/g, "")

            coinObj[keys[keyIdx]] = tdValue
            keyIdx ++
          
          }

        })
       
      coinArr.push(coinObj)

    })
    return coinArr
  } catch (err) {
    console.log(err)
  }
}

const app = express()
app.get('/api/price-feed', async(req, res) => {
  try {
    const priceFeed = await getPriceFeed("chicken")

    return res.status(200).json({
      result: priceFeed,
    })
  } catch (err) {
    return res.status(500).json({
      err: err.toString()
    })
  }
})
app.listen(3000, () => {
  console.log("running on port 3000")
})
