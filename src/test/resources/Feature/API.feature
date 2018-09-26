@tag
Feature: Title of your feature
  I want to use this template for my feature file

  Scenario Outline: Test the API
    Given Hit the url "<URL>"
    When store the response tag value "<responseTag>"
    Then check the "<responseTag>" value

    Examples: 
      | URL                                                                                                 | responseTag                             |
      #    | https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/contractRefData?userId=12 | data>commodity>thirdPartyId,data>cakTerm>status,data>discountScheduleTiming>name |
      | https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/deliveryLocationsWithBids | data>delLocBidGroup>>delLocBid..deliveryLocation.city |
