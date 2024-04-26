import { Duration, Task, Wait } from "@serenity-js/core";
import { Click, Enter, isVisible} from "@serenity-js/web";
import { MvgPage } from "../ui/MvgPage.ts";


export class LoginMvg {
    public static clicUserYourCertificated = () =>
        Task.where(`#actor da clic a la opción User Your Certificate`,
        Wait.upTo(Duration.ofSeconds(5)).until(MvgPage.userYourCertificateButton(), isVisible()),
        Click.on(MvgPage.userYourCertificateButton())
    )

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
      



}
