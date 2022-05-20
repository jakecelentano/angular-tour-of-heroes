
import { Ability } from "./ability";
export interface Class {
  id: number;
  name: string;
  hitDie: number;
  savingThrows?: Ability[];

}
