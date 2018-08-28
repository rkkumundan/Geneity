package e2e.Geneity.objects;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CheckIfBetPlaced {
	WebDriver driver;
	
	@FindBy(xpath="//*[contains(text(),'Your bet has been placed')]")
	private WebElement CheckInplaySelection;
		
	public CheckIfBetPlaced(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver=driver;   
	}
	public void CheckBetStatus() {
		WebDriverWait wait = new WebDriverWait(driver,60);
		WebElement ErrorResponse;
		ErrorResponse = wait.until(ExpectedConditions.visibilityOf(CheckInplaySelection));
		String ExpectedErrorResponse = "Your bet has been placed";
		String ActualErrorResponse = ErrorResponse.getText();
		System.out.println(ActualErrorResponse);
		assertThat(ActualErrorResponse, equalTo(ExpectedErrorResponse));
	}
}
