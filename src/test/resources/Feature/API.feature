@tag
Feature: Title of your feature
  I want to use this template for my feature file

  Scenario Outline: Test the API "<URL">
    Given Hit the url "<URL>"
    When store the response tag value "<responseTag>"
    Then check the "<responseTag>" value

    Examples: 
      | APIName           | URL                                                                                                 | responseTag                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
      | Future Offering   | https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/futureOffering?commodityCode=12     | data>offering>code,data>offering>endDate,data>offering>futuresMonth,data>offering>futuresYear,data>offering>startDate,data>offering>thirdPartyId                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
      | Delivery Location | https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/deliveryLocationsWithBids           | data>delLocBidGroup>>delLocBid..deliveryLocation.city,data>delLocBidGroup>>delLocBid..deliveryLocation.description,data>delLocBidGroup>>delLocBid..deliveryLocation.locationId,data>delLocBidGroup>>delLocBid..deliveryLocation.state,data>delLocBidGroup>>delLocBid..deliveryLocation.thirdPartyLocationId,data>delLocBidGroup>>delLocBid..pricing.basis,data>delLocBidGroup>>delLocBid..pricing.flatPrice,data>delLocBidGroup>>delLocBid..pricing.futures,data>delLocBidGroup>>delLocBid..pricing.marketQuotePriceId,data>delLocBidGroup>endDate,data>delLocBidGroup>groupLabel,data>delLocBidGroup>startDate |
      | Cak Ref Point     | https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/cakRefPoint?locationName=1          | data>locations>city,data>locations>state,data>locations>thirdPartyLocationId                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
      | Contract Pricing  | https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/contractPricing?userId=1            | data.pricing.basis,data.pricing.flatPrice,data.pricing.futures,data.pricing.marketQuotePriceId                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
      | Seller            | https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/customer/searchSeller?userId=2&searchTerm=12 | data>seller>id,data>seller>name,data>seller..address.city,data>seller..address.state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
