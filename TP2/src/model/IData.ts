export interface IData {
    id: number;
    category: string;
    name: string;
    description: string
    common_locations: string[]
    image: string
    drops?: string[]
    hearts_recovered?: number
    cooking_effect?: string
}

export interface IMonster {
    id: number;
    category: string;
    name: string;
    description: string
    common_locations: string[]
    image: string
    drops: string[]
    hearts_recovered: null
    cooking_effect: null
}

export interface ICreature {
    id: number;
    category: string;
    name: string;
    description: string
    common_locations: string[]
    image: string
    drops: string[]
    hearts_recovered: number
    cooking_effect: string
}

export interface IDataEntry{
    data: IMonster | ICreature
}

export interface IMonsters{
    data: IMonster[]
}

export interface ICreatures{
    data: {
        food: ICreature[]
        non_food: ICreature[]
    }
}

export interface IDatasAll{
    data: {
        creatures: {
            food: ICreature[]
            non_food: ICreature[]
        }
        monsters: IMonster[]
    }
}
