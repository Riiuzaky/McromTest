import { test } from '@playwright/test';
import { Constants } from '../../../src/constans/Constants';
import { NewRecordEtTask } from '../../../src/task/modules/enhancedOutages/NewRecordEtTask';
import { NewRecordEtQuestions } from '../../../src/questions/modules/enhancedOutagesQuestions/NewRecordQuestions';


test.describe('New Record ET Suite', () => {

    test('New Record Dark Mode English Language Gas Master UnPlanned', async ({ page }) => {

        test.setTimeout(60000);

        await test.step('Login', async () => {
            await page.goto(Constants.URL);
            await NewRecordEtTask.userLogin(page);
        });

        await test.step('Select Dark Mode', async () => {
            await NewRecordEtTask.selectDarkMode(page, true);
        });

        await test.step('Select Language', async () => {
            await NewRecordEtTask.selectLanguage(page, Constants.LANGUAGE_ENGLISH);
        });

        await test.step('Open Form New Record', async () => {
            await NewRecordEtTask.openFormNewRecord(page);
        });

        await test.step('Fill The Fields Basic', async () => {
            await NewRecordEtTask.fillTheFieldsBasic(page, 0);
        });

        await test.step('Select Type', async () => {
            await NewRecordEtTask.selectType(page, 0);
        });

        await test.step('Fill The Fields Basic Two', async () => {
            await NewRecordEtTask.fillTheFieldsBasicTwo(page, 0);
        });

        await test.step('Select Hierarchy', async () => {
            await NewRecordEtTask.selectHierarchy(page, 0);
        });

        await test.step('Select Contact', async () => {
            await NewRecordEtTask.selectContact(page, 0);
        });

        await test.step('Create New Record', async () => {
            await NewRecordEtTask.createNewRecord(page);
        });

        await test.step('Recharge Grid', async () => {
            await NewRecordEtTask.reChargeGrid(page);
        });

        await test.step('validate New Record data', async () => {
            await NewRecordEtQuestions.checkNewRecordData(page, 0);
        });

    });



    test('New Record Light Mode English Language Gas Master Planned', async ({ page }) => {
        
        test.setTimeout(60000);

        await test.step('Login', async () => {
            await page.goto(Constants.URL);
            await NewRecordEtTask.userLogin(page);
        });

        await test.step('Select Dark Mode', async () => {
            await NewRecordEtTask.selectDarkMode(page, false);
        });

        await test.step('Select Language', async () => {
            await NewRecordEtTask.selectLanguage(page, Constants.LANGUAGE_ENGLISH);
        });

        await test.step('Open Form New Record', async () => {
            await NewRecordEtTask.openFormNewRecord(page);
        });

        await test.step('Fill The Fields Basic', async () => {
            await NewRecordEtTask.fillTheFieldsBasic(page, 1);
        });

        await test.step('Select Type', async () => {
            await NewRecordEtTask.selectType(page, 1);
        });

        await test.step('Fill The Fields Basic Two', async () => {
            await NewRecordEtTask.fillTheFieldsBasicTwo(page, 1);
        });

        await test.step('Select Hierarchy', async () => {
            await NewRecordEtTask.selectHierarchy(page, 1);
        });

        await test.step('Select Contact', async () => {
            await NewRecordEtTask.selectContact(page, 1);
        });

        await test.step('Create New Record', async () => {
            await NewRecordEtTask.createNewRecord(page);
        });

        await test.step('Recharge Grid', async () => {
            await NewRecordEtTask.reChargeGrid(page);
        });

        await test.step('validate New Record data', async () => {
            await NewRecordEtQuestions.checkNewRecordData(page, 1);
        });

    });


    test('New Record Dark Mode Spanish Language Gas Master UnPlanned', async ({ page }) => {
        
        test.setTimeout(60000);

        await test.step('Login', async () => {
            await page.goto(Constants.URL);
            await NewRecordEtTask.userLogin(page);
        });

        await test.step('Select Dark Mode', async () => {
            await NewRecordEtTask.selectDarkMode(page, true);
        });

        await test.step('Select Language', async () => {
            await NewRecordEtTask.selectLanguage(page, Constants.LANGUAGE_SPANISH);
        });

        await test.step('Open Form New Record', async () => {
            await NewRecordEtTask.openFormNewRecord(page);
        });

        await test.step('Fill The Fields Basic', async () => {
            await NewRecordEtTask.fillTheFieldsBasic(page, 2);
        });

        await test.step('Select Type', async () => {
            await NewRecordEtTask.selectType(page, 2);
        });

        await test.step('Fill The Fields Basic Two', async () => {
            await NewRecordEtTask.fillTheFieldsBasicTwo(page, 2);
        });

        await test.step('Select Hierarchy', async () => {
            await NewRecordEtTask.selectHierarchy(page, 2);
        });

        await test.step('Select Contact', async () => {
            await NewRecordEtTask.selectContact(page, 1);
        });

        await test.step('Create New Record', async () => {
            await NewRecordEtTask.createNewRecord(page);
        });

        await test.step('Recharge Grid', async () => {
            await NewRecordEtTask.reChargeGrid(page);
        });

        await test.step('validate New Record data', async () => {
            await NewRecordEtQuestions.checkNewRecordData(page, 2);
        });

    });




});
