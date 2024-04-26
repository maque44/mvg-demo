import { Answerable, AnswersQuestions, Interaction, UsesAbilities, d } from "@serenity-js/core";
import { ExecuteScript, PageElement, PageElementInteraction } from "@serenity-js/web";

export class ClickJavaScriptById extends PageElementInteraction {


    static on(pageElement: Answerable<PageElement>): Interaction {
        return new ClickJavaScriptById(pageElement);
    }

    protected constructor(private readonly element: Answerable<PageElement>) {
        super(d`#actor clicks javascript by id on ${element}`);
    }

    async performAs(actor: UsesAbilities & AnswersQuestions): Promise<void> {
        const element = await this.resolve(actor, this.element);
        const id = await element.attribute('id');
        const script = "document.getElementById('" + id + "').click();"
        ExecuteScript.sync(script);
    }
}