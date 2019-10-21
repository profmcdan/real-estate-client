export interface IState {
  auth: IAuth;
  movies?: Array<IMovie>;
  movie?: IMovie;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IAuth {
  username: string;
  email: string;
  role: string;
  loggedIn: boolean;
}
export interface IAdvertProps {
  title: string;
  description: string;
  updatedAt: string;
  imageUrl: string;
}

export interface IMovie {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: {
    self: {
      href: string;
    };
  };
}

export interface ILoginProps {
  login: (username: string, password: string) => IAction;
}
