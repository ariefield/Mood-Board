export class Panel
{
    id: number;
    left: number;
    top: number;
    colour: string;
    content: string;

    mouseWithin: boolean;

    constructor()
    {
        this.id = 0;
        this.left = 0;
        this.top = 0;
        this.colour = "Black";
        this.content = "Content";
        this.mouseWithin = false;
    }

}