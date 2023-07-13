import {ICategory} from "./category.interface";

export interface IMovie {
  id: number;
  title: string;
  description: string;
  rate: number;
  favorite: boolean;
  category?: ICategory;
}
