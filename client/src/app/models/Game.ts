export interface Game {
    id?: number;
    title?: string;
    description?: string;
    image?: string;
    created_at?: Date;
}

export class Game {
    constructor(){
        this.id = 0;
        this.title = '';
        this.description = '';
        this.created_at = new Date();
        this.image = ''
    }
}