import { Given, When, Then } from "@cucumber/cucumber";
import { Actor, Wait, actorInTheSpotlight } from "@serenity-js/core";
import { Navigate } from "@serenity-js/web";
import { LoginMvgExitoso} from "../../main/tasks/LoginMvgExitoso.ts";
import { MvgReservaCertificado } from "../../main/tasks/MvgReservaCertificado.ts";


    Given('{actor} ya inicio sesion con su certificado {string} con su lastName {string} para generar su reserva usando su certificado', {timeout: 10 * 5000}, async (actor: Actor, certificado: string, lastName: string)  =>{
        await actor.attemptsTo(
              Navigate.to("https://webtest19.palaceresorts-qa.com/Home"),
              LoginMvgExitoso.loginExitoso(certificado, lastName),
                           
        )   
    });
 
    When('selecciona un hotel para viajar',{timeout: 10 * 5000}, async ()  =>{
         await  actorInTheSpotlight().attemptsTo(
              MvgReservaCertificado.clicUseCertificate(),
              MvgReservaCertificado.selectHotel()

                           
        )   
    });

    When('selecciona fechas de viaje e ingresa numero de adultos  e ingresa numero de jovenes', {timeout: 10 * 5000}, async ()  =>{
          await  actorInTheSpotlight().attemptsTo(
        MvgReservaCertificado.selectFechaViaje(),
          )     
      });
        
         
           When('visualiza que el costo total sea igual a la suma total de noches, da clic a continuar', function () {
             // Write code here that turns the phrase above into concrete actions
             return 'pending';
           });
