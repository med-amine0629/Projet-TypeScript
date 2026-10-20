import {Repository} from "./repository";
import type {Fighter} from "./types";
import type { NewFighter } from "./fonction";
import type { Team } from "./types";
export class FighterRepository extends Repository<Fighter> 
{
    add(fighter:NewFighter): Fighter {
        return super.add(fighter);
    }
    findByTeam(team: Team): Fighter[] {
        return this.data.filter(fighter => fighter.team ===team);
    }
    findById(id: number): Fighter | undefined {
        return this.data.find(fighter => fighter.id === id);
    }
    findall(): Fighter[] {
        return super.findall();
    }
}
