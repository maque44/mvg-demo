import { Duration, Task, Wait } from "@serenity-js/core";
import { Ensure, equals} from "@serenity-js/assertions";
import { isVisible } from "@serenity-js/web";
import { MvgPage } from "../../main/ui/MvgPage.ts";

export class ValidacionLoginMvg {
    public static welcomeMvg = (welcome: string) =>
        Task.where(`#actor debe visualizar la pagina de bienvenida con la leyenda ${welcome}`,
        Wait.upTo(Duration.ofSeconds(5)).until(MvgPage.welcomeLabel(), isVisible()),
        Ensure.that(MvgPage.welcomeLabel().text(), equals(welcome))
    )

    public static certifcate = (userCertificate: string) =>
    Task.where(`#actor debe visualizar su certificado ${userCertificate}`,
    Wait.upTo(Duration.ofSeconds(5)).until(MvgPage.certifcateLabel(), isVisible()),
    Ensure.that(MvgPage.certifcateLabel().text(), equals(userCertificate))
)
}