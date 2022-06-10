import { role } from "./role";

export class User {
    id?: number;
    name?: string;
    password?: string;
    roles?: role[];
  }