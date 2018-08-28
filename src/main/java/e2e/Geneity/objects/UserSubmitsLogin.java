package e2e.Geneity.objects;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class UserSubmitsLogin {
	WebDriver driver;

	@FindBy(className="log-in")
	private WebElement LoginButton;
	@FindBy(xpath="//*[contains(text(),'My Account')]")
	private WebElement MyAccount;
		
	public UserSubmitsLogin(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}
	public void UserSubmitsLoginCheckAssertion()
	{
		LoginButton.click();
		WebDriverWait wait = new WebDriverWait(driver,30);
		WebElement ErrorResponse;
		ErrorResponse = wait.until(ExpectedConditions.visibilityOf(MyAccount));
		String ExpectedErrorResponse = "My Account";
		String ActualErrorResponse = ErrorResponse.getText();
		assertThat(ActualErrorResponse, equalTo(ExpectedErrorResponse));
	}
}