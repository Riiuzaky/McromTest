import { expect, Page } from '@playwright/test';
import { HomeETUi } from '../../../userInterfaces/modules/enhancedOutagesUi/HomeEtUi';
import { Reusable } from '../../../actions/Reusable';
import { ExcelReader } from '../../../utils/ExcelReader';
import { Constants } from '../../../constans/Constants';

export class NewRecordEtQuestions {
    static async checkNewRecordData(page: Page, rows : number) {
        const row = rows;
        const sheet = 'Hoja1';
        const table = HomeETUi;

        const validations = [
            { key: 'Title', locator: table.titleColumGrid },
            { key: 'Description', locator: table.descriptionColumGrid },
            { key: 'Summary', locator: table.summaryColumGrid },
            { key: 'Text Area 1', locator: table.txtArea1ColumGrid },
            { key: 'Text Area 2', locator: table.txtArea2ColumGrid },
            { key: 'Text Area 3', locator: table.txtArea3ColumGrid },
            { key: 'Type', locator: table.typeColumGrid },
            { key: 'Dropdown 1', locator: table.dropdown1ColumGrid },
            { key: 'Dropdown 2', locator: table.dropdown2ColumGrid },
            { key: 'Dropdown 3', locator: table.dropdown3ColumGrid },
            { key: 'Work Type', locator: table.workTypeColumGrid },
            { key: 'Work Detail', locator: table.workDetailColumGrid },
            { key: 'Caller', locator: table.callerColumGrid },
            { key: 'Callee', locator: table.calleeColumGrid },
            { key: 'Activo', locator: table.activoColumGrid },
            { key: 'Division', locator: table.divisionColumGrid },
            { key: 'Area', locator: table.areaColumGrid }
        ];

        for (const { key, locator } of validations) {
            await Reusable.scrollToElementInTable(page, table.tableScrollHorizontalGrid, locator);
            const uiValue = await page.locator(locator).innerText();
            const excelValue = ExcelReader.getCellValue(Constants.RUTADATAEOUT, sheet, row, key);
            expect.soft(uiValue.trim()).toBe(excelValue.trim());


        }

        // take screenshot
        await Reusable.captureStepScreenshot(page, 'Check New Record Data');

    }
}