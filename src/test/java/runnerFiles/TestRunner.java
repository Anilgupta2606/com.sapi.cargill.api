package runnerFiles;


import cucumber.api.*;
import cucumber.api.testng.AbstractTestNGCucumberTests;
 
@CucumberOptions(
        features = "src/test/resources/Feature",
        glue = {"stepdefs"},
        tags = {"@tag"},
        format = {
                "pretty",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        })
public class TestRunner extends AbstractTestNGCucumberTests{

}
