import { Duration, Task, Wait } from "@serenity-js/core";
import { Click, Enter, ExecuteScript, Press, isVisible } from "@serenity-js/web";
import { MvgReservacionesPage } from "../ui/MvgReservacionesPage.ts";
import { CustomClick } from "../../main/interactions/general/CustomClick.ts";
import { ClickJavaScriptById } from "../../main/interactions/general/ClickJavaScriptById.ts";

export class MvgReservaCertificado {
    
    public static clicUseCertificate = () =>
    
    Task.where(`#actor da clic a la opción User Your Certificate`,
    ExecuteScript.sync(`window.scrollBy(0,2000)`),
    //ExecuteScript.async(`document.getElementById('btn_action_BookNow').click()`) 
    Wait.upTo(Duration.ofSeconds(5)).until(MvgReservacionesPage.useCertificateButton(), isVisible()),
    Click.on(MvgReservacionesPage.useCertificateButton())
)

   // ExecuteScript.async(`document.getElementById('btn_action_BookNow').click()`)   
    //CustomClick.on(MvgReservacionesPage.useCertificateButton())
    
   // public static clicDom = () =>
     //   ExecuteScript.async(`document.getElementById('btn_action_BookNow').click()`)
        


/*
    public static clicInicio = () =>
        Task.where(`#actor da clic a la opción User Your Certificate`,
        Wait.upTo(Duration.ofSeconds(5)).until(MvgPage.getStartedButton(), isVisible()),
        Click.on(MvgPage.getStartedButton())
    )

    public static elCertificado = (certificado: string) =>
        Task.where(`#actor ingresa información en  campo certificado ${certificado}`,
        Enter.theValue(certificado).into(MvgPage.inputCertificateFolio())
    )

    public static elLastName = (lastName: string) =>
        Task.where(`#actor ingresa información en campo lastName ${lastName}`,
        Enter.theValue(lastName).into(MvgPage.inputLastName())      
        
    )
      */



}
