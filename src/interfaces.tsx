export interface IState {
  auth: {
    username: string;
    email: string;
    role: string;
    loggedIn: boolean;
  };
}

export interface IAction {
  type: string;
  payload: any;
}
