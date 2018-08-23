package e2e.Geneity.steps;

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
		driver.quit();
	}
	public void unsigned_in_user_sends_username_and_password(String username, String password) {
		driver.findElement(By.name("username")).sendKeys(password);
		driver.findElement(By.name("password")).sendKeys(password);
	}
	public void unsigned_in_user_submits_from() {
		driver.findElement(By.xpath("//*[@id=\'header-area\']/div[1]/div[1]/form/button")).click();
		WebDriverWait wait = new WebDriverWait(driver,30);
		WebElement ErrorResponse;
		ErrorResponse = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'My Account')]")));
		String ExpectedErrorResponse = "My Account";
		String ActualErrorResponse = ErrorResponse.getText();
		assertThat(ActualErrorResponse, equalTo(ExpectedErrorResponse));
	}
	public void unsigned_in_user_submits_from_with_wrong_credentials() {
		driver.findElement(By.xpath("//*[@id=\'header-area\']/div[1]/div[1]/form/button")).click();
		WebDriverWait wait = new WebDriverWait(driver,30);
		WebElement ErrorResponse;
		ErrorResponse = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\'header-area\']/div[1]/div[1]/div")));
		String ActualErrorResponse = ErrorResponse.getText();
		String ExpectedErrorResponse = "Incorrect username or password entered.<br>Verify your account information and try again.\nx";
		assertThat(ActualErrorResponse, equalTo(ExpectedErrorResponse));
	}	
	public void signed_in_user_clicks_on_sport(String sport) {
		driver.findElement(By.linkText(sport)).click();
	}
	public void signed_in_user_clicks_on_sport_check_the_page_displayed(String sport) {
		String sporttype = driver.findElement(By.cssSelector("#main-area > div.fragment.sports-title > div.heading > h2")).getText();
		assertThat(sport, equalTo(sporttype));
	}
	public void signed_in_user_makes_selection_and_submits_the_bet_with_value(String value) {
		driver.findElement(By.xpath("//*[@id='inplayForSport-tab-VOLL']/div/table/tbody/tr[1]/td[4]/div/button")).click();
		driver.findElement(By.xpath("//*[@id=\'betslip\']/table[1]/tbody[2]/tr[2]/td/table/tbody/tr/td[2]/table[2]/tbody/tr/td[2]/div/input")).sendKeys(value);
		driver.findElement(By.name("place_slip")).click();
	}
}
