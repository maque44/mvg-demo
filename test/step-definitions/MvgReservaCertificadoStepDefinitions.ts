import { Given, When, Then } from "@cucumber/cucumber";
import { Actor, Wait, actorInTheSpotlight } from "@serenity-js/core";
import { Navigate } from "@serenity-js/web";
import { LoginMvgExitoso} from "../../main/tasks/LoginMvgExitoso.ts";
import { MvgReservaCertificado } from "../../main/tasks/MvgReservaCertificado.ts";


    Given('{actor} ya inicio sesion con su certificado {string} con su lastName {string} para generar su reserva usando su certificado', {timeout: 10 * 5000}, async (actor: Actor, certificado: string, lastName: string)  =>{
        await actor.attemptsTo(
              Navigate.to("http://webtest19-8084.web.palaceqa.local/Home/"),
              LoginMvgExitoso.loginExitoso(certificado, lastName),
                           
        )   
    });
 
    When('selecciona un hotel para viajar',{timeout: 10 * 5000}, async ()  =>{
         await  actorInTheSpotlight().attemptsTo(
              MvgReservaCertificado.clicUseCertificate()

                           
        )   
    });
        
           When('selecciona fechas de viaje {string}, ingresa numero de adultos {string}, ingresa numero de jovenes {string}', function (string, string2, string3) {
             // Write code here that turns the phrase above into concrete actions
             return 'pending';
           });
        
           When('visualiza que el costo total sea igual a la suma total de noches, da clic a continuar', function () {
             // Write code here that turns the phrase above into concrete actions
             return 'pending';
           });
