import { Duration, Task, Wait } from "@serenity-js/core";
import { Click, Enter, ExecuteScript, Press, isVisible } from "@serenity-js/web";
import { MvgReservacionesPage } from "../ui/MvgReservacionesPage.ts";
import { CustomClick } from "../../main/interactions/general/CustomClick.ts";
import { ClickJavaScriptById } from "../../main/interactions/general/ClickJavaScriptById.ts";

export class MvgReservaCertificado {
    
    public static clicUseCertificate = () =>
    
    Task.where(`#actor da clic a la opción User Your Certificate`,
   // ExecuteScript.sync(`window.scrollBy(0,2000)`),
    //ExecuteScript.async(`document.getElementById('btn_action_BookNow').click()`) 
    //ExecuteScript.async(`document.getElementById('input-156').click()`) 
    Wait.for(Duration.ofSeconds(3)),
    ExecuteScript.sync(`window.scrollBy(0,500)`),
    Wait.upTo(Duration.ofSeconds(5)).until(MvgReservacionesPage.useCertificateButton(), isVisible()),
    CustomClick.on(MvgReservacionesPage.useCertificateButton())
)

   // ExecuteScript.async(`document.getElementById('btn_action_BookNow').click()`)   
    //CustomClick.on(MvgReservacionesPage.useCertificateButton())
    
   // public static clicDom = () =>
     //   ExecuteScript.async(`document.getElementById('btn_action_BookNow').click()`)
        
    public static selectHotel = () =>
        Task.where(`#actor selecciona Hotel`,
        Wait.for(Duration.ofSeconds(3)),
        ExecuteScript.sync(`window.scrollBy(0,500)`),
        Wait.upTo(Duration.ofSeconds(5)).until(MvgReservacionesPage.selectHotelButton(), isVisible()),        
        CustomClick.on(MvgReservacionesPage.selectHotelButton()),
        Wait.for(Duration.ofSeconds(2))
    )

    public static selectFechaViaje = () =>
        Task.where(`#actor selecciona fechas de viaje`,
        Wait.for(Duration.ofSeconds(5)),
        ExecuteScript.sync(`window.scrollBy(0,500)`),
        Wait.upTo(Duration.ofSeconds(10)).until(MvgReservacionesPage.travelCalendar(), isVisible()),  
        CustomClick.on(MvgReservacionesPage.travelCalendar()),
        Wait.upTo(Duration.ofSeconds(5)).until(MvgReservacionesPage.selectDateMonthNext(), isVisible()),  
        CustomClick.on(MvgReservacionesPage.selectDateMonthNext()),
        Wait.for(Duration.ofSeconds(3)),
        CustomClick.on(MvgReservacionesPage.selectDateMonthNext()),        
        Wait.upTo(Duration.ofSeconds(5)).until(MvgReservacionesPage.selectDay(), isVisible()),  
        CustomClick.on(MvgReservacionesPage.selectDay()),
        Wait.for(Duration.ofSeconds(2)),
        Wait.upTo(Duration.ofSeconds(5)).until(MvgReservacionesPage.confirmDate(), isVisible()),  
        CustomClick.on(MvgReservacionesPage.confirmDate()),
        Wait.for(Duration.ofSeconds(10)),
    )

      



}
