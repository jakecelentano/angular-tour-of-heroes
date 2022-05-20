import { Ability } from "./ability";
import { Size } from "./size";
import { Language } from "./language";

export interface Race {
  id: number;
  name: string;
  speed?: number;
  abilityScores?: Ability[];
  abilityBonus?: number[];
  size?: Size;
  languages?: Language[];

}
