package e2e.Geneity.objects;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SportCheckAssertion {
	WebDriver driver;
	
	@FindBy(css="#main-area > div.fragment.sports-title > div.heading > h2")
	private WebElement SportType;

	public SportCheckAssertion(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}
	public void SportsCheck(String Sport)
	{
		String Sporttype = SportType.getText();
		assertThat(Sport, equalTo(Sporttype));
	}
}