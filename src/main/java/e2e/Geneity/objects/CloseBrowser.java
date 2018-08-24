package e2e.Geneity.objects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class CloseBrowser {
	WebDriver driver;
	
	public CloseBrowser(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
		}
	public void CloseCurrentBrowser(){
		driver.quit();
		}
}
