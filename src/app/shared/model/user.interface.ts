export enum rolesEnum {
  ADMIN = 'admin',
  USER = 'user',
  MANAGER_MOVIES = 'manager_movies',
  MANAGER_CATEGORIES = 'manager_categories',
  MANAGER_USERS = 'manager_users',
}

export interface IUser {
  id: number;
  name: string;
  roles: rolesEnum[];
}
