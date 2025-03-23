export class ContactUi {
    // Input de filtro por ID
    static inputFilterID = 'xpath=//div[h4]/following-sibling::div//input[@ref="eInput" and @aria-label="Id Filter Input"]';
  
    // Input alternativo para filtro por ID
    static inputFilterID2 = 'xpath=//input[@aria-label="Id Filter Input"]';
  
    // Botón para guardar contacto en el modal
    static buttonContactGuardar = 'xpath=//app-enhaced-moc-contact-modal/div[@class="modal-footer"]/button[@class="btn btn-sm btn-primary highlight"]';
  
    // Opción de contacto por ID (usar string replace o template literal)
    static optionContactID = (id: string) => `xpath=//div[@col-id='contactId' and text()='${id}']`;
  
    // Celda con el nombre del contacto
    static gridCellFirstName = 'xpath=//div[@col-id="firstName" and @role="gridcell"]';
  }
  