export interface receta {
    name: string,
    ingredientes?: string,
    pasos?: string,
}

export const defaultContact:receta = {
    name: "First name",
    ingredientes: "+5412345678",
    pasos: "0123465"
}



export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface recetaJsonPlaceholder {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    address?: Address;
    phone?: string;
    website?: string;
    company?: Company;
}
