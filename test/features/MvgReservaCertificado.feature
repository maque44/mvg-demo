Feature: Mvg Generar reserva con certificado

    Scenario: Generar reserva con certificado
        Given Maque ya inicio sesion con su certificado "ZMSUEKF2191" con su lastName "Sali" para generar su reserva usando su certificado
        When  selecciona un hotel para viajar
        And   selecciona fechas de viaje "fechas a viajar", ingresa numero de adultos <>, ingresa numero de jovenes "2" 
        And   visualiza que el costo total sea igual a la suma total de noches, da clic a continuar
        And   da clic al boton get started
        Then  se debe visualizar la pagina home page de MVG con leyenda "Welcome to Moon Vacation Getaway. You are one step closer to indulging in the experience of a lifetime. Book now!"
        And   se debe visualizar mi certificado "Certificate: ZMSUE KF 2191"

 