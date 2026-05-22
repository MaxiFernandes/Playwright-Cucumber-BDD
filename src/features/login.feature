@regression
Feature: Login en OrangeHRM

  COMO usuario
  QUIERO iniciar sesión
  PARA acceder al sistema

  Background:
    Given Que estoy en la pagina de Login

  @success
  Scenario: Login exitoso
    When Ingreso credenciales validas
    And Hago click en el botón Login
    Then Deberia visualizar el dashboard

  @validation
  Scenario Outline: Validaciones de login
    When Ingreso el usuario "<usuario>" y la contraseña "<contraseña>"
    And Hago click en el botón Login
    Then Deberia visualizar <cantidad> mensaje "<mensaje>"

    Examples:
      | usuario | contraseña | mensaje             | cantidad |
      | Maxi    | maxi123    | Invalid credentials | 1        | 
      |         | admin123   | Required            | 1        |
      | Admin   |            | Required            | 1        |
      |         |            | Required            | 2        | 
