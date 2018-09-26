package utils;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.ArrayUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class JsonReader {

	public Map<String, String> response = new HashMap<String, String>();
	static String accessToken=null;
	
	/**
	 * Function to retrieve the data from the JSON response
	 * @param tags
	 * @param inline
	 * @throws ParseException
	 * @throws FileNotFoundException
	 * @throws IOException
	 */
	public void jsonReaderResponse(String tags, String inline)
			throws ParseException, FileNotFoundException, IOException {

		JSONParser parse = new JSONParser();
		// Type caste the parsed json data in json object

		Object obj = parse.parse(inline);

	//	Object obj = parse.parse(new FileReader("/Users/anigupta2/eclipse-workspace_1/com.sapi.cargill.api/src/test/resources/TestData/demo.json"));

		JSONObject jobj = (JSONObject) obj;

		if(tags.equals("access_token"))
		{
			accessToken = (String) jobj.get(tags);
		}
		else {
			if(tags.contains("..") && tags.contains(">>"))
			{
				JSONObject jsonobj_1 = null;
				JSONArray jsonarr_1 = null;
				JSONArray jsonarr_2 = null;
				
				String tag1[] = tags.split("\\.\\.");
				String tag2[] = tag1[0].split(">>");
				String tag[] = tag2[0].split(">");
				int i = 1, len = tag.length;
				jobj = (JSONObject) jobj.get(tag[0]);

				while (len > 1) {
					if (i == 1)
						jsonarr_1 = (JSONArray) jobj.get(tag[i]);
					else
						jsonarr_1 = (JSONArray) jsonobj_1.get(tag[i]);

					jsonobj_1 = (JSONObject) jsonarr_1.get(0);
					len--;
					i++;
				}
				int s=0;

				for(int z=0;z<jsonarr_1.size();z++) {
					jsonobj_1 = (JSONObject) jsonarr_1.get(z);

					jsonarr_2 = (JSONArray) jsonobj_1.get(tag2[1]);
				
				String tag3[]=tag1[1].split("\\.");
				for(int j=0;j<jsonarr_2.size();j++)
				  {
					jsonobj_1 = (JSONObject) jsonarr_2.get(j);
					len=tag3.length;
					int a=0;
					while(len>1) {
						jobj = (JSONObject) jsonobj_1.get(tag3[a]);
						a++;
						s++;
						len--;
						}	
						response.put(tag3[a]+s, jobj.get(tag3[a]).toString());
					
				  }
				}
			}else {
		if (tags.contains(".") && tags.contains(">")) {
			if (tags.indexOf(".") < tags.indexOf(">")) 	
				storeJonData_NormalToArray(tags,jobj);
			
			else { 
				if(tags.contains("..")) {
					JSONObject jsonobj_1 = null;
					JSONArray jsonarr_1 = null;
					String tag1[]=tags.split("\\.\\.");
					String tag[] = tag1[0].split(">");
					int i = 1, len = tag.length;
					jobj = (JSONObject) jobj.get(tag[0]);

					while (len > 1) {
						if (i == 1)
							jsonarr_1 = (JSONArray) jobj.get(tag[i]);
						else
							jsonarr_1 = (JSONArray) jsonobj_1.get(tag[i]);

						jsonobj_1 = (JSONObject) jsonarr_1.get(0);
						len--;
						i++;
					}
					String tag2[]=tag1[1].split("\\.");
					int s=0;
					for(int j=0;j<jsonarr_1.size();j++)
					  {
						jsonobj_1 = (JSONObject) jsonarr_1.get(j);
						len=tag2.length;
						int k=0;
						while(len>1) {
							jobj = (JSONObject) jsonobj_1.get(tag2[k]);
							k++;
							s++;
							len--;
							}	
							response.put(tag2[k]+s, jobj.get(tag2[k]).toString());
						
					  }
				}
				else
				storeJonData_ArrayToNormal(tags,jobj);
			}
			
		} else {
			if(tags.contains("."))	
				storeJONResponse(tags,jobj);
				
			else {
				//Support only Single type of repetition inside array. 
				if(tags.contains(">>"))
				{
					storeJonData_MultipleDataInArray(tags,jobj);
					
				}else 
					storeJonArrayResponse(tags,jobj);
		
		}
	}
	}
		}
}
	/**
	 * Store the Normal JSON data in the Map
	 * @param tags
	 * @param jobj
	 */
	public void storeJONResponse(String tags,JSONObject jobj)
	{
		String tag[] = tags.split("\\.");
		int len=tag.length;
		int k=0;
		while(len>1) {
		jobj = (JSONObject) jobj.get(tag[k]);
		k++;
		len--;
		}	
		response.put(tag[k], jobj.get(tag[k]).toString());
	}
	
	/**
	 * Store the JSON Array data in the Map
	 * @param tags
	 * @param jobj
	 */
	public void storeJonArrayResponse(String tags,JSONObject jobj)
	{
		JSONObject jsonobj_1 = null;
		JSONArray jsonarr_1 = null;
		
		String tag[] = tags.split(">");
		int i = 1, len = tag.length;
		jobj = (JSONObject) jobj.get(tag[0]);

		while (len > 2) {
			if (i == 1)
				jsonarr_1 = (JSONArray) jobj.get(tag[i]);
			else
				jsonarr_1 = (JSONArray) jsonobj_1.get(tag[i]);

			jsonobj_1 = (JSONObject) jsonarr_1.get(0);
			len--;
			i++;
		}
		//store all the matching element inside the array 
		for(int j=0;j<jsonarr_1.size();j++)
		  {
			jsonobj_1 = (JSONObject) jsonarr_1.get(j);
			response.put(tag[i]+j, jsonobj_1.get(tag[i]).toString());
		  }
	}
	
	/**
	 * Used to store array json nested data which are present in normal Json 
	 * Eg. normal{
	 * array[{
	 * "data1":"12"}]
	 *}
	 * @param tags
	 * @param jobj
	 */
	public void storeJonData_NormalToArray(String tags,JSONObject jobj)
	{
		String tag1[] = tags.split("\\.");
		String tag2[] = new String[tags.split(">").length-1];
		int k=0;
		for (int j = 0; j < tag1.length; j++) {
			if (tag1[j].contains(">")) {
				String temp[] = tag1[j].split(">");
				int l=temp.length;
				while(l>1) {
				tag2[k] = temp[k+1];
				k++;
				l--;
				}
			}
		}
		tag1[tag1.length-1]=tag1[tag1.length-1].substring(0, tag1[tag1.length-1].indexOf(">"));
//		String[] tag = (String[]) ArrayUtils.addAll(tag1, tag2);
		int i = 0, len = tag1.length;
		while (len >=1) {
			jobj = (JSONObject) jobj.get(tag1[i]);
			i++;
			len--;
		}

		i = 0;
		len = tag2.length;
		JSONObject jsonobj_1 = null;
		JSONArray jsonarr_1 = null;

		while (len > 1) {
			if (i == 0)
				jsonarr_1 = (JSONArray) jobj.get(tag2[i]);
			else
				jsonarr_1 = (JSONArray) jsonobj_1.get(tag2[i]);

			jsonobj_1 = (JSONObject) jsonarr_1.get(0);
			len--;
			i++;
		}
		for(int j=0;j<jsonarr_1.size();j++)
		  {
			jsonobj_1 = (JSONObject) jsonarr_1.get(j);
			response.put(tag2[i]+j, jsonobj_1.get(tag2[i]).toString());
		  }
	}
	/**
	 * Used to store normal json nested data which are present in Array 
	 * Eg. array[{
	 * normal{
	 * "data1":"12"}
	 *}]
	 * @param tags
	 * @param jobj
	 */
	public void storeJonData_ArrayToNormal(String tags,JSONObject jobj) {
		
		String tag1[] = tags.split(">");
		String tag2[] = new String[tags.split("\\.").length-1];
		jobj = (JSONObject) jobj.get(tag1[0]);
		int k=0;
		for (int j = 0; j < tag1.length; j++) {
			if (tag1[j].contains(".")) {
				String temp[] = tag1[j].split("\\.");
				int l=temp.length;
				while(l>1) {
				tag2[k] = temp[k+1];
				k++;
				l--;
				}
			}
		}
		
		tag1[tag1.length-1]=tag1[tag1.length-1].substring(0, tag1[tag1.length-1].indexOf("."));
		//		String[] tag = (String[]) ArrayUtils.addAll(tag1, tag2);
				int i = 1, len = tag1.length;
				JSONObject jsonobj_1 = null;
				JSONArray jsonarr_1 = null;

				while (len >1) {
					if (i == 1)
						jsonarr_1 = (JSONArray) jobj.get(tag1[i]);
					else
						jsonarr_1 = (JSONArray) jsonobj_1.get(tag1[i]);

					jsonobj_1 = (JSONObject) jsonarr_1.get(0);
					len--;
					i++;
				}
				
				i = 0;
				len = tag2.length;
				while (len >1) {
					jsonobj_1 = (JSONObject) jsonobj_1.get(tag2[i]);
					i++;
					len--;
				}
				response.put(tag2[i], jsonobj_1.get(tag2[i]).toString());
	}
	
	public void storeJonData_MultipleDataInArray(String tags,JSONObject jobj)
	{
		JSONObject jsonobj_1 = null;
		JSONArray jsonarr_1 = null;
		JSONArray jsonarr_2 = null;
		int a=1;

		String tag[]=tags.split(">>");
		String tag1[]=tag[0].split(">");
		int len = tag1.length;

		if(len==1)
			jobj = (JSONObject) jobj.get(tag1[0]);
		else {
			jobj = (JSONObject) jobj.get(tag1[0]);

		while (len > 1) {
			if (a == 1)
				jsonarr_1 = (JSONArray) jobj.get(tag1[a]);
			else
				jsonarr_1 = (JSONArray) jsonobj_1.get(tag1[a]);

			jsonobj_1 = (JSONObject) jsonarr_1.get(0);
			len--;
			a++;
		}
		}
String tag2[]=tag[1].split(">");

for(int q=0;q<jsonarr_1.size();q++) //Can change size according to the JSON as if multiple tag not present so we can limit the value for how many level to want to go. 
{
	a=0;
	jsonobj_1 = (JSONObject) jsonarr_1.get(q);
	len = tag2.length;
	while (len > 1) {
		if (a == 0)
			jsonarr_2 = (JSONArray) jsonobj_1.get(tag2[a]);
		else
			jsonarr_2 = (JSONArray) jsonobj_1.get(tag2[a]);

		jsonobj_1 = (JSONObject) jsonarr_2.get(0);
		len--;
		a++;
	}
	for(int j=0;j<jsonarr_2.size();j++)
	  {
		jsonobj_1 = (JSONObject) jsonarr_2.get(j);
		response.put(tag2[a]+j, jsonobj_1.get(tag2[a]).toString());
	  }
}
	}
}