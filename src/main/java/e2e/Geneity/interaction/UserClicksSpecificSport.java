package e2e.Geneity.interaction;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class UserClicksSpecificSport {
	WebDriver driver;

	public UserClicksSpecificSport(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}
	public void UserClicksOnSport(String sport) {
		driver.findElement(By.linkText(sport)).click();
	}
}