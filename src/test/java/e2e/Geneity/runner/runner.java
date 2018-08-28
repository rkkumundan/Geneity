package e2e.Geneity.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
@CucumberOptions(plugin={"pretty", "html:target/cucumber-reports"}, features = "src/test/resources/features", 
glue="e2e.Geneity.feature.steps", monochrome = true, tags = {"@SmokeTest"})

public class runner {

}
