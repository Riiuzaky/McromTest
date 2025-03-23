import { Page } from "@playwright/test";
import { Reusable } from '../../../actions/Reusable';
import { Constants } from "../../../constans/Constants";
import { ModulesBarUi } from "../../../userInterfaces/modules/homePageUi/ModulesBarUi";
import { HomeETUi } from "../../../userInterfaces/modules/enhancedOutagesUi/HomeEtUi";
import { ExcelReader } from "../../../utils/ExcelReader";
import { FormNewRecordETUi } from "../../../userInterfaces/modules/enhancedOutagesUi/FormNewRecordEtUi";
import { SideBarETUi } from "../../../userInterfaces/modules/enhancedOutagesUi/SideBarEtUi";

export class NewRecordEtTask {

    static async userLogin(page: Page) {
        await Reusable.login(page, Constants.USERNAME, Constants.PASSWORD);
        await Reusable.captureStepScreenshot(page, 'Login');
    }

    static async selectDarkMode(page: Page, darkModeStatus: boolean) {
        await Reusable.selectDarkMode(page, darkModeStatus);
        await Reusable.captureStepScreenshot(page, 'Select Dark Mode');
    }

    static async selectLanguage(page: Page, language: string) {
        await Reusable.selectLanguage(page, language);
        await Reusable.captureStepScreenshot(page, 'Select Language');
    }

    static async openFormNewRecord(page: Page) {
        await page.locator(ModulesBarUi.eoutBtn).click();
        await page.locator(HomeETUi.newRecordBtn).waitFor({ state: 'visible' });
        await page.locator(HomeETUi.newRecordBtn).click();
        await Reusable.captureStepScreenshot(page, 'Open Form New Record');
    }

    static async fillTheFieldsBasic(page: Page, row: number) {
        // read value Title from Excel
        const title = ExcelReader.getCellValue(Constants.RUTADATAEOUT, 'Hoja1', row, 'Title');
        //wait for the element to be visible and then fill
        await page.locator(FormNewRecordETUi.titleTxtArea).waitFor({ state: 'visible' });
        await page.fill(FormNewRecordETUi.titleTxtArea, title);

        // read value Description from Excel
        const description = ExcelReader.getCellValue(Constants.RUTADATAEOUT, 'Hoja1', row, 'Description');
        //wait for the element to be visible and then fill
        await page.locator(FormNewRecordETUi.descriptionTxtArea).waitFor({ state: 'visible' });
        await page.fill(FormNewRecordETUi.descriptionTxtArea, description);

        // read value summary from Excel
        const summary = ExcelReader.getCellValue(Constants.RUTADATAEOUT, 'Hoja1', row, 'Summary');
        //wait for the element to be visible and then fill
        await page.locator(FormNewRecordETUi.summaryTxtArea).waitFor({ state: 'visible' });
        await page.fill(FormNewRecordETUi.summaryTxtArea, summary);

        // read value text area 1 from Excel
        const textArea1 = ExcelReader.getCellValue(Constants.RUTADATAEOUT, 'Hoja1', row, 'Text Area 1');
        //wait for the element to be visible and then fill
        await page.locator(FormNewRecordETUi.textArea1TxtArea).waitFor({ state: 'visible' });
        await page.fill(FormNewRecordETUi.textArea1TxtArea, textArea1);

        // read value text area 2 from Excel
        const textArea2 = ExcelReader.getCellValue(Constants.RUTADATAEOUT, 'Hoja1', row, 'Text Area 2');
        //wait for the element to be visible and then fill
        await page.locator(FormNewRecordETUi.textArea2TxtArea).waitFor({ state: 'visible' });
        await page.fill(FormNewRecordETUi.textArea2TxtArea, textArea2);

        // read value text area 3 from Excel
        const textArea3 = ExcelReader.getCellValue(Constants.RUTADATAEOUT, 'Hoja1', row, 'Text Area 3');
        //wait for the element to be visible and then fill
        await page.locator(FormNewRecordETUi.textArea3TxtArea).waitFor({ state: 'visible' });
        await page.fill(FormNewRecordETUi.textArea3TxtArea, textArea3);
        await page.locator(FormNewRecordETUi.textArea3TxtArea).scrollIntoViewIfNeeded();

        // take screenshot
        await Reusable.captureStepScreenshot(page, 'Fill The Fields Basic');
    }

    static async selectType(page: Page, row: number) {
        const type = ExcelReader.getCellValue(Constants.RUTADATAEOUT, 'Hoja1', row, 'Type');
        await page.locator(FormNewRecordETUi.typeDropBox).scrollIntoViewIfNeeded();
        await page.locator(FormNewRecordETUi.typeDropBox).waitFor({ state: 'visible' });
        await Reusable.selectCustomOptionByText(page, FormNewRecordETUi.typeDropBox, FormNewRecordETUi.optionsType, type);
        await Reusable.captureStepScreenshot(page, 'Select Type');

        const calendars = await page.locator(FormNewRecordETUi.calendars).all();

        let fechas;

        if(type == 'Planned' || type == 'Planificado' || type == 'Planejado' || type == 'Geplant' ){
          fechas = [-2, 5, -4, 3, 3, 4]; // days to apply planned
        }else{
          fechas = [5, 1, 4]; // days to apply unplanned
        }

        for (let i = 0; i < fechas.length; i++) {
          await calendars[i].click();
          await Reusable.selectDate(page, fechas[i]);
        }

        await Reusable.captureStepScreenshot(page, 'Select dates');

    }

    static async fillTheFieldsBasicTwo(page: Page, row: number) {
        // be sure the dropdown is visible and open
        await page.locator(FormNewRecordETUi.dropdown1).scrollIntoViewIfNeeded();
        await page.locator(FormNewRecordETUi.dropdown1).waitFor({ state: 'visible' });
      
        // select option and save text
        var selectedText = await Reusable.selectOptionByIndex(
          page,
          FormNewRecordETUi.dropdown1,
          FormNewRecordETUi.optionsDropdown1,
          0
        );
        // save value in Excel
        ExcelReader.writeExcel(Constants.RUTADATAEOUT, 'Hoja1', row, 'Dropdown 1', selectedText);

        // dropdown2
        await page.locator(FormNewRecordETUi.dropdown2).scrollIntoViewIfNeeded();
        await page.locator(FormNewRecordETUi.dropdown2).waitFor({ state: 'visible' });
      
        
        selectedText = await Reusable.selectOptionByIndex(
          page,
          FormNewRecordETUi.dropdown2,
          FormNewRecordETUi.optionsDropdown2,
          0
        );

        ExcelReader.writeExcel(Constants.RUTADATAEOUT, 'Hoja1', row, 'Dropdown 2', selectedText);

        // dropdown3
        await page.locator(FormNewRecordETUi.dropdown3).scrollIntoViewIfNeeded();
        await page.locator(FormNewRecordETUi.dropdown3).waitFor({ state: 'visible' });
      
        selectedText = await Reusable.selectOptionByIndex(
          page,
          FormNewRecordETUi.dropdown3,
          FormNewRecordETUi.optionsDropdown3,
          0
        );
        ExcelReader.writeExcel(Constants.RUTADATAEOUT, 'Hoja1', row, 'Dropdown 3', selectedText);

        // work type
        await page.locator(FormNewRecordETUi.workType).scrollIntoViewIfNeeded();
        await page.locator(FormNewRecordETUi.workType).waitFor({ state: 'visible' });
      
        selectedText = await Reusable.selectOptionByIndex(
          page,
          FormNewRecordETUi.workType,
          FormNewRecordETUi.optionsWorkType,
          3
        );
        ExcelReader.writeExcel(Constants.RUTADATAEOUT, 'Hoja1', row, 'Work Type', selectedText);

        // work detail
        await page.locator(FormNewRecordETUi.workDetail).scrollIntoViewIfNeeded();
        await page.locator(FormNewRecordETUi.workDetail).waitFor({ state: 'visible' });
      
        selectedText = await Reusable.selectOptionByIndex(
          page,
          FormNewRecordETUi.workDetail,
          FormNewRecordETUi.optionsWorkDetail,
          0
        );
        ExcelReader.writeExcel(Constants.RUTADATAEOUT, 'Hoja1', row, 'Work Detail', selectedText);

        // work classification
        await page.locator(FormNewRecordETUi.workClassification).scrollIntoViewIfNeeded();
        await page.locator(FormNewRecordETUi.workClassification).waitFor({ state: 'visible' });
      
        selectedText = await Reusable.selectOptionByIndex(
          page,
          FormNewRecordETUi.workClassification,
          FormNewRecordETUi.optionsWorkClassification,
          0
        );
        ExcelReader.writeExcel(Constants.RUTADATAEOUT, 'Hoja1', row, 'Work Classification', selectedText);
      
        // take screenshot
        await Reusable.captureStepScreenshot(page, 'Fill The Fields Basic Two');

        // caller

        const caller = ExcelReader.getCellValue(Constants.RUTADATAEOUT, 'Hoja1', row, 'Caller');
        //wait for the element to be visible and then fill
        await page.locator(FormNewRecordETUi.inputCaller).waitFor({ state: 'visible' });
        await page.fill(FormNewRecordETUi.inputCaller, caller);

        // caller

        const callee = ExcelReader.getCellValue(Constants.RUTADATAEOUT, 'Hoja1', row, 'Callee');
        //wait for the element to be visible and then fill
        await page.locator(FormNewRecordETUi.inputCallee).waitFor({ state: 'visible' });
        await page.fill(FormNewRecordETUi.inputCallee, callee);

         // take screenshot
         await Reusable.captureStepScreenshot(page, 'Fill The Fields Basic Two Callers');

    }

    static async selectHierarchy(page: Page, row: number) {
      const params = ['Activo', 'Division', 'Area', 'Filter Of System'].map(key =>
        ExcelReader.getCellValue(Constants.RUTADATAEOUT, 'Hoja1', row, key)
      );
      
      await Reusable.selectHierarchy(page, ...params);

      // take screenshot
      await Reusable.captureStepScreenshot(page, 'Select Hierarchy');
    }

    static async selectContact(page: Page, row: number) {

      await page.locator(FormNewRecordETUi.manager).click();

      await Reusable.selectContactForId(
        page,
        ExcelReader.getCellValue(Constants.RUTADATAEOUT, 'Hoja1', row, 'ID Manager'),
        'Manager',
        Constants.RUTADATAEOUT
      );
      
      await page.locator(FormNewRecordETUi.workManager).click();
      
      await Reusable.selectContactForId(
        page,
        ExcelReader.getCellValue(Constants.RUTADATAEOUT, 'Hoja1', row, 'ID Work Manager'),
        'Work Manager',
        Constants.RUTADATAEOUT
      );

      // take screenshot
      await page.waitForTimeout(1000);
      await Reusable.captureStepScreenshot(page, 'Select Contact');
      
    }

    static async createNewRecord(page: Page) {

      await page.locator(FormNewRecordETUi.buttonCreate).click();
      await page.waitForTimeout(1000);

      // take screenshot
      await Reusable.captureStepScreenshot(page, 'Create New Record');
    }

    static async reChargeGrid(page: Page){
        // wait for 2 seconds
        await page.waitForTimeout(500);
      
        // close side bar
        await page.locator(SideBarETUi.btnCloseSideBar).click();
      
        // change module to compliance
        await page.locator(ModulesBarUi.compliBtn).click();
        await page.waitForTimeout(500);
      
        // select sub module to tasks
        await page.locator(ModulesBarUi.tasksBtn).click();
        await page.waitForTimeout(500);
      
        // return to enhanced outages
        await page.locator(ModulesBarUi.eoutBtn).click();
        await page.waitForTimeout(500);

        // take screenshot
        await Reusable.captureStepScreenshot(page, 'Recharge Grid');
      }







}