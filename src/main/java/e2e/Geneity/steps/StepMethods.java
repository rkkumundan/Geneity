package e2e.Geneity.steps;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

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
	public void signed_in_user_makes_selection_and_submits_the_bet_with_value(String value) {
		driver.findElement(By.xpath("//*[@id='inplayForSport-tab-VOLL']/div/table/tbody/tr[1]/td[4]/div/button")).click();
		driver.findElement(By.xpath("//*[@id=\'betslip\']/table[1]/tbody[2]/tr[2]/td/table/tbody/tr/td[2]/table[2]/tbody/tr/td[2]/div/input")).sendKeys(value);
		driver.findElement(By.name("place_slip")).click();
	}
}
