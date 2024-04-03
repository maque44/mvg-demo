import { Given, When, Then } from "@cucumber/cucumber";
import { Actor, Wait, actorInTheSpotlight } from "@serenity-js/core";
import { Navigate } from "@serenity-js/web";
import { LoginMvg } from "../../main/tasks/LoginMvg.ts";
import { ValidacionLoginMvg } from "../../main/questions/ValidaciónLoginMvg.ts";


    Given('{actor} quiere ingresar al sitio de MVG', {timeout: 10 * 5000}, async (actor: Actor)  =>{
        await actor.attemptsTo(
              Navigate.to("http://webtest19-8084.web.palaceqa.local/Home/")
        )   
    });
 
    When('selecciona la opción use your certificate', {timeout: 10 * 5000},async () => {
        await actorInTheSpotlight().attemptsTo(
              LoginMvg.clicUserYourCertificated()
        )
    });

    When('ingresa  información del login en campo certificado {string}',{timeout: 10 * 5000}, async (certificado: string) => {
        await  actorInTheSpotlight().attemptsTo(
            LoginMvg.elCertificado(certificado)
        )
            });
    When('ingresa  información del login en campo lastName {string}',{timeout: 5 * 5000}, async (lastName: string) => {
         await  actorInTheSpotlight().attemptsTo(
            LoginMvg.elLastName(lastName)
            )
         });
 
   
    When('da clic al boton get started', {timeout: 5 * 5000},async () =>  {
        await actorInTheSpotlight().attemptsTo(
            LoginMvg.clicInicio()
        )
     });
   
    Then('se debe visualizar la pagina home page de MVG con leyenda {string}',{timeout: 5 * 5000}, async (mvgWelcome: string) => {
        await actorInTheSpotlight().attemptsTo(
            ValidacionLoginMvg.welcomeMvg(mvgWelcome)
        )
    });
   
    Then('se debe visualizar mi certificado {string}', {timeout: 5 * 5000},async (certifcate: string) => {
        await actorInTheSpotlight().attemptsTo(
            ValidacionLoginMvg.certifcate(certifcate)
        )
    });