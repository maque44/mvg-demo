Feature: Mvg Login

    Scenario: Ingresar al sitio Mvg con credenciales correctas
        Given Maque quiere ingresar al sitio de MVG
        When  selecciona la opción use your certificate
        And   ingresa  información del login en campo certificado "ZMSUEKF2191"  
        And   ingresa  información del login en campo lastName "Sali" 
        And   da clic al boton get started
        Then  se debe visualizar la pagina home page de MVG con leyenda "Welcome to Moon Vacation Getaway. You are one step closer to indulging in the experience of a lifetime. Book now!"
        And   se debe visualizar mi certificado "Certificate: ZMSUE KF 2191"

 