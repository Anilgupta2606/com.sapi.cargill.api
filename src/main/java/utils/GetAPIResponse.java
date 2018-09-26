package utils;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;
import org.apache.http.client.ClientProtocolException;
import org.json.simple.parser.ParseException;
import org.junit.Assert;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

public class GetAPIResponse {

	static String access_token;
	
	OkHttpClient client = new OkHttpClient();

	/**
	 * Function to generate the access token - okta from the API
	 * @throws ClientProtocolException
	 * @throws IOException
	 * @throws ParseException
	 */
	public void getaccessToken() throws ClientProtocolException, IOException, ParseException
	{

		MediaType mediaType = MediaType.parse("application/x-www-form-urlencoded");
		RequestBody body = RequestBody.create(mediaType, "username=cascnatestuser2%40gmail.com&password=Test%402018&client_id=0oag3eee6wgn7gxmS0h7&client_secret=CF53Oi15Qz7oAlEQ5skl4SBVGnfLzWNh5A27Rfn4&grant_type=password&scope=openid%20email%20profile%20offline_access");
		Request request = new Request.Builder()
		  .url("https://cargillcustomer-qa.oktapreview.com/oauth2/auseru1y91KUkOCCB0h7/v1/token")
		  .post(body)
		  .addHeader("Content-Type", "application/x-www-form-urlencoded")
		  .addHeader("Cache-Control", "no-cache")
		  .build();
		
		Response response = client.newCall(request).execute();
		String token = response.body().string();
		new JsonReader().jsonReaderResponse("access_token", token);
		access_token = JsonReader.accessToken;
	}
	
	/**
	 * Function to get the response based on the URL(API) passed
	 * @param requestURL
	 * @return: response
	 */
	public String getAPIResponse(String requestURL)
	{
		try
		{
			getaccessToken();
			Request request = new Request.Builder()
					  .url(requestURL)
					  .get()
					  .addHeader("Authorization", "Bearer "+access_token)
					  .addHeader("cache-control", "no-cache")
					  .build();
					 
					Response response = client.newCall(request).execute();
					if(response.isSuccessful() && response.code()==200) {
					return response.body().string();
					}else {
						Assert.fail("Bad Response recieved "+response.code());
					}
					
	}catch(Exception e)
		{
		e.printStackTrace();
	}
		return null;
		
}
}
