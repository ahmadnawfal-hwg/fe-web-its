export type Permission = {
  id: number;
  name: string;
};

export type Role = {
  id: number;
  name: string;
  permissions: Permission[];
};

export type User = {
  id: number;
  name: string;
  user_id: string;
  username: string;
  roles: Role[];
};
