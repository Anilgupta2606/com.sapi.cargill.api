$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("API.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Test the API \"\u003cURL\"\u003e",
  "description": "",
  "id": "title-of-your-feature;test-the-api-\"\u003curl\"\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Hit the url \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "store the response tag value \"\u003cresponseTag\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "check the \"\u003cresponseTag\u003e\" value",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;test-the-api-\"\u003curl\"\u003e;",
  "rows": [
    {
      "cells": [
        "URL",
        "responseTag"
      ],
      "line": 11,
      "id": "title-of-your-feature;test-the-api-\"\u003curl\"\u003e;;1"
    },
    {
      "comments": [
        {
          "line": 12,
          "value": "#  | https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/futureOffering?commodityCode\u003d12     | data\u003eoffering\u003ecode,data\u003eoffering\u003eendDate,data\u003eoffering\u003efuturesMonth,data\u003eoffering\u003efuturesYear,data\u003eoffering\u003estartDate,data\u003eoffering\u003ethirdPartyId                                                                                                                                                                                                                                                                                                                                                                                                                                                                |"
        }
      ],
      "cells": [
        "https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/deliveryLocationsWithBids",
        "data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.city,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.description,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.locationId,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.state,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.thirdPartyLocationId,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.basis,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.flatPrice,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.futures,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.marketQuotePriceId,data\u003edelLocBidGroup\u003eendDate,data\u003edelLocBidGroup\u003egroupLabel,data\u003edelLocBidGroup\u003estartDate"
      ],
      "line": 13,
      "id": "title-of-your-feature;test-the-api-\"\u003curl\"\u003e;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#  | https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/futureOffering?commodityCode\u003d12     | data\u003eoffering\u003ecode,data\u003eoffering\u003eendDate,data\u003eoffering\u003efuturesMonth,data\u003eoffering\u003efuturesYear,data\u003eoffering\u003estartDate,data\u003eoffering\u003ethirdPartyId                                                                                                                                                                                                                                                                                                                                                                                                                                                                |"
    }
  ],
  "line": 13,
  "name": "Test the API \"\u003cURL\"\u003e",
  "description": "",
  "id": "title-of-your-feature;test-the-api-\"\u003curl\"\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Hit the url \"https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/deliveryLocationsWithBids\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "store the response tag value \"data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.city,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.description,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.locationId,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.state,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.thirdPartyLocationId,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.basis,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.flatPrice,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.futures,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.marketQuotePriceId,data\u003edelLocBidGroup\u003eendDate,data\u003edelLocBidGroup\u003egroupLabel,data\u003edelLocBidGroup\u003estartDate\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "check the \"data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.city,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.description,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.locationId,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.state,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.thirdPartyLocationId,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.basis,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.flatPrice,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.futures,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.marketQuotePriceId,data\u003edelLocBidGroup\u003eendDate,data\u003edelLocBidGroup\u003egroupLabel,data\u003edelLocBidGroup\u003estartDate\" value",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/deliveryLocationsWithBids",
      "offset": 13
    }
  ],
  "location": "API_StepDef.hit_the_url(String)"
});
formatter.result({
  "duration": 4808446422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.city,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.description,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.locationId,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.state,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.thirdPartyLocationId,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.basis,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.flatPrice,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.futures,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.marketQuotePriceId,data\u003edelLocBidGroup\u003eendDate,data\u003edelLocBidGroup\u003egroupLabel,data\u003edelLocBidGroup\u003estartDate",
      "offset": 30
    }
  ],
  "location": "API_StepDef.store_the_response_tag_value(String)"
});
formatter.result({
  "duration": 27014448989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.city,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.description,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.locationId,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.state,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.thirdPartyLocationId,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.basis,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.flatPrice,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.futures,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.marketQuotePriceId,data\u003edelLocBidGroup\u003eendDate,data\u003edelLocBidGroup\u003egroupLabel,data\u003edelLocBidGroup\u003estartDate",
      "offset": 11
    }
  ],
  "location": "API_StepDef.check_the_value_with_the_test_data(String)"
});
formatter.result({
  "duration": 4159897,
  "status": "passed"
});
});