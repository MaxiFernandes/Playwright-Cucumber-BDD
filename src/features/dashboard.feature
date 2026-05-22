@regression
Feature: Busqueda en el menu lateral

  Background:
    Given Que estoy en la pagina de iniciar sesión
    And Inicio sesión correctamente

  @validation
  Scenario Outline: Buscar secciones del menu lateral
    When Escribo "<seccion>" en la barra de busqueda
    Then Deberia visualizar "<seccion>" en el panel lateral izquierdo

  Examples:
    | seccion      |
    | Admin        |
    | PIM          |
    | Leave        |
    | Time         |
    | Recruitment  |
    | My Info      |
    | Performance  |
    | Dashboard    |
    | Directory    |
    | Maintenance  |
    | Claim        |