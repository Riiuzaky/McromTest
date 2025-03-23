

export class FormNewRecordETUi {
    static cancelBtn = "xpath=//button[@class='btn btn-sm btn-danger cancel_btn']";
  
    static titleTxtArea = "textarea[formcontrolname='title']";
    static descriptionTxtArea = "textarea[formcontrolname='description']";
    static summaryTxtArea = "textarea[formcontrolname='summary']";
    static textArea1TxtArea = "textarea[formcontrolname='customTextArea1']";
    static textArea2TxtArea = "textarea[formcontrolname='customTextArea2']";
    static textArea3TxtArea = "textarea[formcontrolname='customTextArea3']";
  
    // Combo Box Type
    static typeDropBox = "xpath=//ng-select[@formcontrolname='type']";
    static optionsType = "xpath=//ng-select[@formcontrolname='type']//div[@role='option']/span";
  
    // Combo Box 1
    static dropdown1 = "xpath=//ng-select[@formcontrolname='customDropdown1']";
    static optionsDropdown1 = "xpath=//ng-select[@formcontrolname='customDropdown1']//div[@role='option']/span";
  
    // Combo Box 2
    static dropdown2 = "xpath=//ng-select[@formcontrolname='customDropdown2']";
    static optionsDropdown2 = "xpath=//ng-select[@formcontrolname='customDropdown2']//div[@role='option']/span";
  
    // Combo Box 3
    static dropdown3 = "xpath=//ng-select[@formcontrolname='customDropdown3']";
    static optionsDropdown3 = "xpath=//ng-select[@formcontrolname='customDropdown3']//div[@role='option']/span";
  
    // Combo Box Work Type
    static workType = "xpath=//ng-select[@formcontrolname='workTypeId']";
    static optionsWorkType = "xpath=//ng-select[@formcontrolname='workTypeId']//div[@role='option']/span";
  
    // Combo Box Work Detail
    static workDetail = "xpath=//ng-select[@formcontrolname='workDetailId']";
    static optionsWorkDetail = "xpath=//ng-select[@formcontrolname='workDetailId']//div[@role='option']/span";
  
    // Combo Box Work Classification
    static workClassification = "xpath=//ng-select[@formcontrolname='workClassificationId']";
    static optionsWorkClassification = "xpath=//ng-select[@formcontrolname='workClassificationId']//div[@role='option']/span";
  
    // Checkbox capacityImpact
    static capacityImpact = "xpath=//input[@formcontrolname='capacityImpact']/following-sibling::span";
  
    // Hierarchy selectors
    static activo = "#select-hiearchy-asset";
    static activoOptions = "xpath=//ng-select[@id='select-hiearchy-asset']//div[@role='option']/span";
  
    static division = "#select-hiearchy-division";
    static divisionOptions = "xpath=//ng-select[@id='select-hiearchy-division']//div[@role='option']/span";
  
    static area = "#select-hiearchy-area";
    static areaOptions = "xpath=//ng-select[@id='select-hiearchy-area']//div[@role='option']/span";
  
    static filterOfSystem = "#select-hiearchy-system-filter";
    static filterOfSystemOptions = "xpath=//ng-select[@id='select-hiearchy-system-filter']//div[@role='option']/span";
  
    static filterTypeOfSystemLocation = "#select-hiearchy-location-type-filter";
    static filterTypeOfSystemLocationOptions = "xpath=//ng-select[@id='select-hiearchy-location-type-filter']//div[@role='option']/span";
  
    static nameLocation = "#select-hiearchy-location-name";
    static nameLocationOptions = "xpath=//ng-select[@id='select-hiearchy-location-name']//div[@role='option']/span";
  
    static nameLocationCode = "#select-hiearchy-location-code";
    static nameLocationCodeOptions = "xpath=//ng-select[@id='select-hiearchy-location-code']//div[@role='option']/span";
  
    static namelocUnitType = "#select-hiearchy-location-unit-type-filter";
    static locUnitTypeOptions = "xpath=//ng-select[@id='select-hiearchy-location-unit-type-filter']//div[@role='option']/span";
  
    static nameLocUnit = "#select-hiearchy-location-unit";
    static locUnitTOptions = "xpath=//ng-select[@id='select-hiearchy-location-unit']//div[@role='option']/span";
  
    // Personnel
    static manager = "xpath=//button[normalize-space()='Administrador' or normalize-space()='Manager' or normalize-space()='Gerente']";
    static workManager = "xpath=//button[normalize-space()='Administrador de trabajo' or normalize-space()='Work Manager' or normalize-space()='Gerenciador de Trabalho' or normalize-space()='Arbeitsleiter']";
  
    static inputCaller = "xpath=//input[@formcontrolname='caller']";
    static inputCallee = "xpath=//input[@formcontrolname='callee']";
  
    // Lista de calendarios (ajustado con CSS)
    static calendars = 'css=app-custom-datetime-picker g#calendar';

    // Botón que muestra el año actual
    static buttonYearlist = 'xpath=//button[@class="current"]';

    // Botón para navegar al mes anterior (si lo usas)
    static buttonPrevius = 'xpath=//button[@class="previous"]';

    // XPath dinámico para seleccionar un mes o año
    static buttonSelect = (value: string | number) => `xpath=//span[text()="${value}"]`;

    // XPath dinámico para seleccionar el día del mes
    static buttonSelectDay = (day: string | number) =>
      `xpath=//td/span[text()="${day}" and not(contains(@class, 'is-other-month'))]`;
    
    // General form
    static buttonCreate = "xpath=//div[@class='modal-footer']/button[@class='btn btn-sm btn-primary highlight']";
  }
  