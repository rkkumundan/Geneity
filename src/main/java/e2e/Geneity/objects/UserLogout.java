package e2e.Geneity.objects;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class UserLogout {
WebDriver driver;
	
	@FindBy(name="do-logout")
	private WebElement Logout;
	@FindBy(xpath="//*[contains(text(),'Forgot your password?')]")
	private WebElement Login;

	public UserLogout(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}
	
	public void LogoutUser(){
		Logout.click();
		WebDriverWait wait = new WebDriverWait(driver,30);
		WebElement ErrorResponse;
		ErrorResponse = wait.until(ExpectedConditions.visibilityOf(Login));
		String ActualErrorResponse = ErrorResponse.getText();
		System.out.println(ActualErrorResponse);
		String ExpectedErrorResponse = "Forgot your password?";
		assertThat(ActualErrorResponse, equalTo(ExpectedErrorResponse));
	}

}
