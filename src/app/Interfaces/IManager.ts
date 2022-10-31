import {IEmployee} from "./IEmployee";

export interface IManager{
  id?: number
  name: string
  reports: IEmployee[]
}
