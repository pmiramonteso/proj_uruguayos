import { Blog } from "./blog";

export interface ApiBlog {
    code: number;
    message: string;
    data: Blog[];
}
