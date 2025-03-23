export class ModulesBarUi {
    static readonly eoutBtn = `xpath=//li[@class='nav-item ng-star-inserted']/a[@class='d-flex align-items-center nav-link ng-star-inserted']
      /div[@class='ms-1 xy' and (
        text()='Enhanced Outages' or
        text()='Interrupciones mejoradas' or
        text()='Interrupções aprimoradas' or
        text()='Interrupções melhoradas' or
        text()='Erweiterte Ausfälle'
      )]`;
  
    static readonly compliBtn = `xpath=//li[@class='nav-item nav-dropdown ng-star-inserted']/a[@class='nav-link nav-dropdown-toggle d-flex align-items-center']
      /div[@class='ms-1' and (
        text()='Compliance' or
        text()='Cumplimiento' or
        text()='Formulários personalizados' or
        text()='Einhaltung'
      )]`;
  
    static readonly tasksBtn = `xpath=//li[@class='nav-itempad-left ng-star-inserted']/a[@class='d-flex align-items-center nav-link ng-star-inserted']
      /div[@class='pad-left ms-1 xy' and (
        text()='Tasks' or
        text()='Tareas de Cumplimiento' or
        text()='Aufgaben'
      )]`;
  
    static readonly ticketBtn = `xpath=//li[@class='nav-item ng-star-inserted']/a[@class='d-flex align-items-center nav-link ng-star-inserted']
      //div[@class='ms-1 xy' and text()=' Tickets']`;
  }
  