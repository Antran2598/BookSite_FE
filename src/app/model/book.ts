import { Author } from "./author";
import { Category } from "./category";
import { Publisher } from "./publisher";

export class Book {
  id?: number;
  bookName?: string;
  author?: number;
  salePrice?: number;
  originalPrice?: number;
  category?:number;
  publisher?:number;
  quantity?:number;
  description?:string;
  picture?: string;
  isAdded?: boolean;
}
