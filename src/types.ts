export interface Post {
  id: number;
  title: string;
  body: string;
  limit?: number;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  limit?: number;
}

export interface UserGet {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Users {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface NavLinkProps {
  href: string;
  title: string;
}

export interface ITask {
  id?: number;
  title: string;
  description: string;
  completed?: boolean;
  createdAt?: Date | undefined;
  updatedAt?: Date;
}

export interface ITasks extends Array<ITask> {}

export interface Params {
  params: {
    id: string;
  };
}
