export class NavBarUi {
    // Icono de perfil dentro de un SVG (usando local-name)
    static readonly profileInconBtn = "xpath=//ul[@class='nav navbar-nav navbar-right']//*[local-name()='svg']/*[local-name()='g']/*[local-name()='g' and @id='controller']/*[local-name()='path' and @class='icon-back-2']";
  
    // Botón de "Perfil" con textos multilenguaje
    static readonly profileBtn = "xpath=//a[@class='dropdown-item' and (text()='Profile' or text()='Perfil' or text()='Profil')]";
  
    // Dropdown de consola (selector CSS simple)
    static readonly consoleDrdn = '.form-control-sm';
  }
  