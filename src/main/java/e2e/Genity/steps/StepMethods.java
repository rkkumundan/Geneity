package e2e.Genity.steps;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class StepMethods {
	WebDriver driver;
	public StepMethods(WebDriver driver) {
		this.driver=driver;   
	}
	public void user_opens_genbet_url() {
		File file = new File("src/main/resources/url.properties");
		FileInputStream fileInput = null;
		try {
			fileInput = new FileInputStream(file);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		Properties prop = new Properties();
		try {
			prop.load(fileInput);
		} catch (IOException e) {
			e.printStackTrace();
		}
		driver.manage().deleteAllCookies();
		driver.get(prop.getProperty("url"));
		driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
		driver.manage().window().maximize();		
	}
	public void user_check_web_title_assertion() {
		String ActualTitle = driver.getTitle();
		String ExpectedTitle ="TitanBet - A whole world of Sports betting in one place";
		assertThat(ActualTitle, equalTo(ExpectedTitle));
	}
	public void unsigned_in_user_closes_the_browser() {
		driver.close();
	}
	public void unsigned_in_user_sends_username_and_password(String username, String password) {
		driver.findElement(By.name("username")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
	}
	public void unsigned_in_user_submits_from() {
		driver.findElement(By.xpath("//*[@id=\'header-area\']/div[1]/div[1]/form/button")).click();
		WebDriverWait wait = new WebDriverWait(driver,30);
		WebElement ErrorResponse = (WebElement) wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//*[contains(text(),'My account')]")));


	}
}
