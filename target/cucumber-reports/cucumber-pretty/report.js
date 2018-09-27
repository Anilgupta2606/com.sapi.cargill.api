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
      "cells": [
        "https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/futureOffering?commodityCode\u003d12",
        "data\u003eoffering\u003ecode,data\u003eoffering\u003eendDate,data\u003eoffering\u003efuturesMonth,data\u003eoffering\u003efuturesYear,data\u003eoffering\u003estartDate,data\u003eoffering\u003ethirdPartyId"
      ],
      "line": 12,
      "id": "title-of-your-feature;test-the-api-\"\u003curl\"\u003e;;2"
    },
    {
      "cells": [
        "https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/deliveryLocationsWithBids",
        "data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.city,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.description,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.locationId,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.state,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.thirdPartyLocationId,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.basis,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.flatPrice,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.futures,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.marketQuotePriceId,data\u003edelLocBidGroup\u003eendDate,data\u003edelLocBidGroup\u003egroupLabel,data\u003edelLocBidGroup\u003estartDate"
      ],
      "line": 13,
      "id": "title-of-your-feature;test-the-api-\"\u003curl\"\u003e;;3"
    },
    {
      "cells": [
        "https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/cakRefPoint?locationName\u003d1",
        "data\u003elocations\u003ecity,data\u003elocations\u003estate,data\u003elocations\u003ethirdPartyLocationId"
      ],
      "line": 14,
      "id": "title-of-your-feature;test-the-api-\"\u003curl\"\u003e;;4"
    },
    {
      "cells": [
        "https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/contractPricing?userId\u003d1",
        "data.pricing.basis,data.pricing.flatPrice,data.pricing.futures,data.pricing.marketQuotePriceId"
      ],
      "line": 15,
      "id": "title-of-your-feature;test-the-api-\"\u003curl\"\u003e;;5"
    },
    {
      "cells": [
        "https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/customer/searchSeller?userId\u003d2\u0026searchTerm\u003d12",
        "data\u003eseller\u003eid,data\u003eseller\u003ename,data\u003eseller..address.city,data\u003eseller..address.state"
      ],
      "line": 16,
      "id": "title-of-your-feature;test-the-api-\"\u003curl\"\u003e;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
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
  "name": "Hit the url \"https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/futureOffering?commodityCode\u003d12\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "store the response tag value \"data\u003eoffering\u003ecode,data\u003eoffering\u003eendDate,data\u003eoffering\u003efuturesMonth,data\u003eoffering\u003efuturesYear,data\u003eoffering\u003estartDate,data\u003eoffering\u003ethirdPartyId\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "check the \"data\u003eoffering\u003ecode,data\u003eoffering\u003eendDate,data\u003eoffering\u003efuturesMonth,data\u003eoffering\u003efuturesYear,data\u003eoffering\u003estartDate,data\u003eoffering\u003ethirdPartyId\" value",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/futureOffering?commodityCode\u003d12",
      "offset": 13
    }
  ],
  "location": "API_StepDef.hit_the_url(String)"
});
formatter.result({
  "duration": 17846750174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data\u003eoffering\u003ecode,data\u003eoffering\u003eendDate,data\u003eoffering\u003efuturesMonth,data\u003eoffering\u003efuturesYear,data\u003eoffering\u003estartDate,data\u003eoffering\u003ethirdPartyId",
      "offset": 30
    }
  ],
  "location": "API_StepDef.store_the_response_tag_value(String)"
});
formatter.result({
  "duration": 2046907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data\u003eoffering\u003ecode,data\u003eoffering\u003eendDate,data\u003eoffering\u003efuturesMonth,data\u003eoffering\u003efuturesYear,data\u003eoffering\u003estartDate,data\u003eoffering\u003ethirdPartyId",
      "offset": 11
    }
  ],
  "location": "API_StepDef.check_the_value_with_the_test_data(String)"
});
formatter.result({
  "duration": 2251343,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test the API \"\u003cURL\"\u003e",
  "description": "",
  "id": "title-of-your-feature;test-the-api-\"\u003curl\"\u003e;;3",
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
  "duration": 2877602891,
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
  "duration": 3627450,
  "error_message": "java.lang.AssertionError: tag is not present data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.city null\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat utils.JsonReader.storeMultileDatainJon_MultipleArray_MultipleNormal(JsonReader.java:335)\n\tat utils.JsonReader.jsonReaderResponse(JsonReader.java:44)\n\tat stepdefs.API_StepDef.store_the_response_tag_value(API_StepDef.java:39)\n\tat ✽.When store the response tag value \"data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.city,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.description,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.locationId,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.state,data\u003edelLocBidGroup\u003e\u003edelLocBid..deliveryLocation.thirdPartyLocationId,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.basis,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.flatPrice,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.futures,data\u003edelLocBidGroup\u003e\u003edelLocBid..pricing.marketQuotePriceId,data\u003edelLocBidGroup\u003eendDate,data\u003edelLocBidGroup\u003egroupLabel,data\u003edelLocBidGroup\u003estartDate\"(API.feature:7)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Test the API \"\u003cURL\"\u003e",
  "description": "",
  "id": "title-of-your-feature;test-the-api-\"\u003curl\"\u003e;;4",
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
  "name": "Hit the url \"https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/cakRefPoint?locationName\u003d1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "store the response tag value \"data\u003elocations\u003ecity,data\u003elocations\u003estate,data\u003elocations\u003ethirdPartyLocationId\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "check the \"data\u003elocations\u003ecity,data\u003elocations\u003estate,data\u003elocations\u003ethirdPartyLocationId\" value",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/cakRefPoint?locationName\u003d1",
      "offset": 13
    }
  ],
  "location": "API_StepDef.hit_the_url(String)"
});
formatter.result({
  "duration": 1335743572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data\u003elocations\u003ecity,data\u003elocations\u003estate,data\u003elocations\u003ethirdPartyLocationId",
      "offset": 30
    }
  ],
  "location": "API_StepDef.store_the_response_tag_value(String)"
});
formatter.result({
  "duration": 220831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data\u003elocations\u003ecity,data\u003elocations\u003estate,data\u003elocations\u003ethirdPartyLocationId",
      "offset": 11
    }
  ],
  "location": "API_StepDef.check_the_value_with_the_test_data(String)"
});
formatter.result({
  "duration": 70133,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Test the API \"\u003cURL\"\u003e",
  "description": "",
  "id": "title-of-your-feature;test-the-api-\"\u003curl\"\u003e;;5",
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
  "name": "Hit the url \"https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/contractPricing?userId\u003d1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "store the response tag value \"data.pricing.basis,data.pricing.flatPrice,data.pricing.futures,data.pricing.marketQuotePriceId\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "check the \"data.pricing.basis,data.pricing.flatPrice,data.pricing.futures,data.pricing.marketQuotePriceId\" value",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/contract/contractPricing?userId\u003d1",
      "offset": 13
    }
  ],
  "location": "API_StepDef.hit_the_url(String)"
});
formatter.result({
  "duration": 1163355134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.pricing.basis,data.pricing.flatPrice,data.pricing.futures,data.pricing.marketQuotePriceId",
      "offset": 30
    }
  ],
  "location": "API_StepDef.store_the_response_tag_value(String)"
});
formatter.result({
  "duration": 2614700,
  "error_message": "java.lang.AssertionError: tag is not present data.pricing.marketQuotePriceId null\n\tat org.testng.Assert.fail(Assert.java:96)\n\tat utils.JsonReader.storeJONResponse(JsonReader.java:93)\n\tat utils.JsonReader.jsonReaderResponse(JsonReader.java:59)\n\tat stepdefs.API_StepDef.store_the_response_tag_value(API_StepDef.java:39)\n\tat ✽.When store the response tag value \"data.pricing.basis,data.pricing.flatPrice,data.pricing.futures,data.pricing.marketQuotePriceId\"(API.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "data.pricing.basis,data.pricing.flatPrice,data.pricing.futures,data.pricing.marketQuotePriceId",
      "offset": 11
    }
  ],
  "location": "API_StepDef.check_the_value_with_the_test_data(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Test the API \"\u003cURL\"\u003e",
  "description": "",
  "id": "title-of-your-feature;test-the-api-\"\u003curl\"\u003e;;6",
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
  "name": "Hit the url \"https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/customer/searchSeller?userId\u003d2\u0026searchTerm\u003d12\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "store the response tag value \"data\u003eseller\u003eid,data\u003eseller\u003ename,data\u003eseller..address.city,data\u003eseller..address.state\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "check the \"data\u003eseller\u003eid,data\u003eseller\u003ename,data\u003eseller..address.city,data\u003eseller..address.state\" value",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api-dev.dev.dev-cglcloud.com/api/dxo/cascna/v1/customer/searchSeller?userId\u003d2\u0026searchTerm\u003d12",
      "offset": 13
    }
  ],
  "location": "API_StepDef.hit_the_url(String)"
});
formatter.result({
  "duration": 1330106223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data\u003eseller\u003eid,data\u003eseller\u003ename,data\u003eseller..address.city,data\u003eseller..address.state",
      "offset": 30
    }
  ],
  "location": "API_StepDef.store_the_response_tag_value(String)"
});
formatter.result({
  "duration": 409980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "data\u003eseller\u003eid,data\u003eseller\u003ename,data\u003eseller..address.city,data\u003eseller..address.state",
      "offset": 11
    }
  ],
  "location": "API_StepDef.check_the_value_with_the_test_data(String)"
});
formatter.result({
  "duration": 56982,
  "status": "passed"
});
});