import create from "./http-service";

export interface User {
    id: Number,
    name: string
  }

export default create('/users');