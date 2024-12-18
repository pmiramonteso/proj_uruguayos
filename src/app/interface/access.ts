import { User } from "./user";

export interface Access {
    accessToken:string,
    message?: string;
    data:{
        user:User
    }
}