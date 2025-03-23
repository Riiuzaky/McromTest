import { Page, test } from "@playwright/test";
import { FormNewRecordETUi } from "../userInterfaces/modules/enhancedOutagesUi/FormNewRecordEtUi";
import { LoginUi } from "../userInterfaces/modules/LoginUi/LoginUi";
import { NavBarUi } from "../userInterfaces/modules/homePageUi/NavBarUi";
import { FormProfileUi } from "../userInterfaces/modules/homePageUi/FormProfileUi";
import { ExcelReader } from "../utils/ExcelReader";
import { ContactUi } from "../userInterfaces/modules/contactUi/ContactUi";


export class Reusable {
    static async login( page:Page, username: string, password: string) {
        await page.locator(LoginUi.usernameInput).fill(username);
        await page.locator(LoginUi.passwordInput).fill(password);
        await page.locator(LoginUi.loginButton).click();
    }

    static async captureStepScreenshot(page: Page, stepName: string) {
        const buffer = await page.screenshot({ fullPage: true });

        test.info().attach(stepName, {
          body: buffer,
          contentType: 'image/png',
        });
      }

      static async selectDarkMode(page: Page, darkModeStatus: boolean) {
        // open profile
        await page.locator(NavBarUi.profileInconBtn).click();
        await page.locator(NavBarUi.profileBtn).click();

        if (!darkModeStatus) {
          const darkModeButton = page.locator(FormProfileUi.darkModeBtn);
          if (await darkModeButton.count() > 0) {
            await darkModeButton.scrollIntoViewIfNeeded();
            await darkModeButton.first().click();
          } else {
              await page.locator(FormProfileUi.LightModeBtn).scrollIntoViewIfNeeded();
          }
        } else {
          const lightModeButton = page.locator(FormProfileUi.LightModeBtn);
          if (await lightModeButton.count() > 0) {
            await lightModeButton.scrollIntoViewIfNeeded();
            await lightModeButton.first().click();
          } else {
            await page.locator(FormProfileUi.darkModeBtn).scrollIntoViewIfNeeded();
          }
        }

        // Cancel
        await page.locator(FormProfileUi.cancelBtn).click();
      }


      static async selectLanguage(page: Page, language: string)  {
        // open profile
        await page.locator(NavBarUi.profileInconBtn).click();
        await page.locator(NavBarUi.profileBtn).waitFor({ state: 'visible' });
        await page.locator(NavBarUi.profileBtn).click();
    
        // open combo box language
        await page.locator(FormProfileUi.languageBtn).scrollIntoViewIfNeeded();
        await page.locator(FormProfileUi.languageBtn).click();
    
        // select language
        await page.locator(FormProfileUi.languageBtn).scrollIntoViewIfNeeded();
        await page.locator(FormProfileUi.languageBtn).waitFor({ state: 'visible' });
        await page.selectOption(FormProfileUi.languageBtn, { value: language });

    
        // cancel
        await page.locator(FormProfileUi.cancelBtn).click();
      }

      static async selectOptionByIndex(
        page: Page,
        dropdownLocator: string,
        optionsLocator: string,
        index: number
      ): Promise<string> {

        // open dropdown
        await page.locator(dropdownLocator).click();
    
        const options = page.locator(optionsLocator);
        await options.first().waitFor({ state: 'visible' });
    
        const count = await options.count();
    
        if (index >= count) {
          throw new Error(`Index ${index} out of bounds. Only ${count} options available.`);
        }
    
        const option = options.nth(index);
        const label = (await option.textContent())?.trim() ?? '';
        await option.click();
    
        return label;
      }

      static async selectCustomOptionByText(
        page: Page,
        dropdownLocator: string,
        optionsLocator: string,
        textToSelect: string
      ): Promise<string> {
        // 1. open dropdown
        await page.locator(dropdownLocator).click();
    
        // 2. wait for options to be visible
        const options = page.locator(optionsLocator);
        await options.first().waitFor({ state: 'visible' });
    
        // 3. search for option that matches the text
        const count = await options.count();
        for (let i = 0; i < count; i++) {
          const option = options.nth(i);
          const text = (await option.textContent())?.trim();
          if (text === textToSelect) {
            await option.click();
            return text;
          }
        }
    
        throw new Error(`Option with text "${textToSelect}" not found.`);
      }


      static async selectHierarchy(
        page: Page,
        ...params: string[]
      ): Promise<void> {
        const elements = [
          FormNewRecordETUi.activo,
          FormNewRecordETUi.division,
          FormNewRecordETUi.area,
          FormNewRecordETUi.filterOfSystem,
          FormNewRecordETUi.filterTypeOfSystemLocation,
          FormNewRecordETUi.nameLocation,
          FormNewRecordETUi.nameLocationCode,
          FormNewRecordETUi.namelocUnitType,
          FormNewRecordETUi.nameLocUnit,
        ];
      
        const options = [
          FormNewRecordETUi.activoOptions,
          FormNewRecordETUi.divisionOptions,
          FormNewRecordETUi.areaOptions,
          FormNewRecordETUi.filterOfSystemOptions,
          FormNewRecordETUi.filterTypeOfSystemLocationOptions,
          FormNewRecordETUi.nameLocationOptions,
          FormNewRecordETUi.nameLocationCodeOptions,
          FormNewRecordETUi.locUnitTypeOptions,
          FormNewRecordETUi.locUnitTOptions,
        ];
      
        for (let i = 0; i < params.length && i < elements.length; i++) {
          const value = params[i];
          if (value && value.trim() !== '') {
            await page.locator(elements[i]).scrollIntoViewIfNeeded();
            await page.locator(elements[i]).click();
            await page.waitForTimeout(500); // time for charge
      
            const optionList = page.locator(options[i]);
            const optionCount = await optionList.count();
      
            let selected = false;
            for (let j = 0; j < optionCount; j++) {
              const option = optionList.nth(j);
              const text = (await option.textContent())?.trim();
              if (text === value.trim()) {
                await option.click();
                selected = true;
                break;
              }
            }
      
            if (!selected) {
              throw new Error(`option "${value}" dont foundd  in the dropdown ${elements[i]}`);
            }
          }
        }
      }



      static async selectContactForId(
        page: Page,
        id: string,
        role: string,
        ruta: string
      ) {
        // click in the inout of the ID filter
        await page.locator(ContactUi.inputFilterID).click();
      
        // write the ID
        await page.locator(ContactUi.inputFilterID).fill(id);
      
        //wait for the options to load
        await page.waitForTimeout(1000);
      
        // select the option
        await page.locator(ContactUi.optionContactID(id)).click();
        
        // obtain the first name
        const firstName = await page.locator(ContactUi.gridCellFirstName).innerText();
      
  
        // save the name in the excel
        ExcelReader.writeExcel(ruta, 'Hoja1', 0, role, firstName);
      
        // click in the save button
        await page.locator(ContactUi.buttonContactGuardar).click();
      }


      static async selectDate(page: Page, daysToAdd: number) {
        const monthsMap = [
          '', 'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
      
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + daysToAdd);
      
        const year = targetDate.getFullYear();
        const month = targetDate.getMonth() + 1;
        const day = targetDate.getDate();
      
        // Seleccionar año
        await page.locator(FormNewRecordETUi.buttonYearlist).click();
        await page.locator(FormNewRecordETUi.buttonSelect(year)).click();
      
        // Seleccionar mes
        await page.locator(FormNewRecordETUi.buttonSelect(monthsMap[month])).click();
      
        // Seleccionar día
        await page.locator(FormNewRecordETUi.buttonSelectDay(day)).click();
      }


      static async scrollToElementInTable(
        page: Page,
        scrollLocator: string,
        elementLocator: string
      ) {
        const scrollElement = page.locator(scrollLocator);
        await scrollElement.evaluate(el => (el as HTMLElement).scrollLeft = 0);
      
        let elementFound = false;
        const scrollAmount = 100;
        const maxScroll = 10000;
        let currentScroll = 0;
      
        while (!elementFound && currentScroll < maxScroll) {
          const locator = page.locator(elementLocator);
          const count = await locator.count();
      
          if (count > 0) {
            try {
              await locator.first().scrollIntoViewIfNeeded({ timeout: 5000 });
              elementFound = true;
              console.log('✅ Element found and moved into view.');
            } catch (err) {
              console.warn(`⚠️ Element ${elementLocator} was found but detached from DOM. Retrying...`);
            }
          } else {
            await scrollElement.evaluate((el, amount) => {
              (el as HTMLElement).scrollLeft += amount;
            }, scrollAmount);
      
            currentScroll += scrollAmount;
          }
        }
      
        if (!elementFound) {
          console.warn('⚠️ Element not found after horizontal scrolling.');
        }
      }
      
      
      


      

}