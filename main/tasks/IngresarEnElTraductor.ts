import { Task } from "@serenity-js/core";
import { Enter } from "@serenity-js/web";
import { GoogleTranslatePage } from "../../main/ui/GoogleTranslatePage.ts";

export class IngresarEnElTraductor {
    public static laPalabra = (palabra: string) =>
        Task.where(`#actor ingresa la palabra ${palabra} en el cuadro de texto`,
            Enter.theValue(palabra).into(GoogleTranslatePage.textArea())
        )
}