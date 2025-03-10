export enum Level {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Expert = "Expert"
}

export class DetailsModel {
    public subject: string;
    public count: number = 5;
    public level = Level.Beginner;
}