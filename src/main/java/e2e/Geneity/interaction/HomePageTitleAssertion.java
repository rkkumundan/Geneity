package e2e.Geneity.interaction;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class HomePageTitleAssertion {
	WebDriver driver;
	public HomePageTitleAssertion(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;		
	}
	public void CheckTitleAssertion(){
	String ExpectedTitle ="TitanBet - A whole world of Sports betting in one place";
	String ActualTitle = driver.getTitle();
	assertThat(ActualTitle, equalTo(ExpectedTitle));	
	}
}
