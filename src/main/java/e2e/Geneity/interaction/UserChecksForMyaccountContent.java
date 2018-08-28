package e2e.Geneity.interaction;

import java.util.Set;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import e2e.Geneity.user_interface.ui_model.TargetObjects;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

import java.util.Iterator;	

public class UserChecksForMyaccountContent extends TargetObjects{
	WebDriver driver;

	public UserChecksForMyaccountContent(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver = driver;
	}

	public void UserAccountAssertion() {
		String MainWindow=driver.getWindowHandle();	
		Set<String> s1=driver.getWindowHandles();		
		Iterator<String> i1=s1.iterator();	
		while(i1.hasNext())			
		{		
			String ChildWindow=i1.next();		
			if(!MainWindow.equalsIgnoreCase(ChildWindow))			
			{    		
				driver.switchTo().window(ChildWindow);	  				
				String ExpectedBetsListErrorResponse = "Bets List";
				String ActualBetsListErrorResponse = BetsList.getText();
				assertThat(ActualBetsListErrorResponse, equalTo(ExpectedBetsListErrorResponse));				
				String ExpectedBonusErrorResponse = "Bonus";
				String ActualBonusErrorResponse = Bonus.getText();
				assertThat(ActualBonusErrorResponse, equalTo(ExpectedBonusErrorResponse));				
				String ExpectedCashierErrorResponse = "Cashier";
				String ActualCashierErrorResponse = Cashier.getText();
				assertThat(ActualCashierErrorResponse, equalTo(ExpectedCashierErrorResponse));
				driver.close();
			}
		}
		driver.switchTo().window(MainWindow);				
	}
}

