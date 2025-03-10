import { Injectable } from '@angular/core';
import { DetailsModel } from '../models/details.model';
import { PromptModel } from '../models/prompt.model';

@Injectable({
    providedIn: 'root'
})
export class PromptEngineeringService {

    public createPrompt(details: DetailsModel): PromptModel {
        const system = `You are an expert in ${details.subject} programming technology. Your role is to generate ${details.subject} job interview questions and answers.`;

        const user = `Please write ${details.count} job interview questions in the subject of ${details.subject} at a ${details.level}
        level and the questions and the answers should be in the following format:
        [
            {question: "First Question...", "answer": "First Answer..."},
            {question: "Second Question...", "answer": "Second Answer..."},
            {question: "First Question...", "answer": "Third Answer..."},
            ...
        ] .
        Don't respond with anything else, just the above JSON format containing the questions and the answers.
        `

        return { system: this.innerTrim(system), user: this.innerTrim(user) };
    }

    private innerTrim(text: string): string {
        // If there are no Enters and additional spaces:
        if (!text.includes("\n") && !text.includes("  ")) return text;

        // Remove Enter
        text = text.replaceAll("\n", " ");

        // remove multi-space
        text = text.replaceAll("  ", " ");

        // recursion
        return this.innerTrim(text);
    }


}
