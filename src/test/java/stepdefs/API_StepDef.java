package stepdefs;

import java.util.Map;

import org.testng.annotations.AfterClass;
import org.testng.asserts.SoftAssert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.GetAPIResponse;
import utils.JsonReader;

public class API_StepDef {

	String res;
	String testdata;
	GetAPIResponse response;
	JsonReader readerResponse;
	SoftAssert softAssertion = new SoftAssert();

	public API_StepDef() {
		response = new GetAPIResponse();
		readerResponse = new JsonReader();
	}

	@Given("^Hit the url \"([^\"]*)\"$")
	public void hit_the_url(String url) throws Throwable {
		// return the response
		res = response.getAPIResponse(url);
		System.out.println(res);
	}

	@When("^store the response tag value \"([^\"]*)\"$")
	public void store_the_response_tag_value(String tag) throws Throwable {

		String tagToCheck[] = tag.split(",");

			for (int i = 0; i < tagToCheck.length; i++)
				readerResponse.jsonReaderResponse(tagToCheck[i], res);
		} 
		

	@Then("^check the \"([^\"]*)\" value$")
	public void check_the_value_with_the_test_data(String tag) throws Throwable {

		for (Map.Entry<String, String> entry : readerResponse.response.entrySet()) {
			softAssertion.assertFalse(entry.getValue().isEmpty(), entry.getKey() + " have NULL value");
		}
		softAssertion.assertAll();

	}

}
