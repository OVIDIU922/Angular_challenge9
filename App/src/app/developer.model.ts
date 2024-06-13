// src/app/common/developer.model.ts
import { Skill } from './skill.model';

export interface Developer {
  lastName: string;
  firstName: string;
  age: number;
  sexe: string;
  bio: string;
  skills: Skill[];
}
