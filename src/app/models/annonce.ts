import { Category } from "./category";
import { User } from "./user";

export class Annonce {
public id! : number;
public title!: string;
public description!: string;
public price!: number;
public location!: string;
public image!: string;
public category! : Category;
public user!: User;
}
