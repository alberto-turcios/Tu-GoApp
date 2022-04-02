export class categoriesResponse{
    categories: categories[];
    constructor(categories: categories[]){
        this.categories = categories;
    }
}

export class categories{
    id: number;
    name: string;
    description: string;

    constructor(id: number, name: string, description: string){
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

