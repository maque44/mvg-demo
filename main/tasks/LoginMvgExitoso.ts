import { Task } from "@serenity-js/core";
import { LoginMvg } from "./LoginMvg.ts";

export class LoginMvgExitoso {
    public static loginExitoso = (certificado: string, lastName: string) =>
        Task.where(`#actor ingresa al sitio Mvg exitosamente`,
       
            LoginMvg.clicUserYourCertificated(),            
            LoginMvg.elCertificado(certificado),
            LoginMvg.elLastName(lastName),
            LoginMvg.clicInicio(),   
            
        )
}