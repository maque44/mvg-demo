import type { Answerable, AnswersQuestions, Interaction, UsesAbilities } from '@serenity-js/core';
import { d } from '@serenity-js/core';
import { PageElement, PageElementInteraction } from '@serenity-js/web';



export class CustomClick extends PageElementInteraction {

    static on(pageElement: Answerable<PageElement>): Interaction {
        return new CustomClick(pageElement);
    }

    protected constructor(private readonly element: Answerable<PageElement>) {
        super(d `#actor makes a custom click on ${ element }`);
    }

    async performAs(actor: UsesAbilities & AnswersQuestions): Promise<void> {
        const element = await this.resolve(actor, this.element);
        element.click();
    }
}