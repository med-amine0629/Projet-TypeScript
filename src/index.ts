import type { NewFighter } from "./fonction";
import { eventHandler } from "./fonction";
import { FighterRepository } from "./FighterRepository";
import { MoveRepository } from "./MoveRepository";
import { DamageService } from "./DamageService";
import { TEAMS } from "./types";
import type { Team, Fighter } from "./types";
const fighterRepository = new FighterRepository();
const moveRepository = new MoveRepository();
  
let fighter1: NewFighter = {
  name: "Kyo Kusanagi",
  team: "team kyo"
}
let fighter2: NewFighter = {
  name: "Terry Bogard",
  team: "team fatal fury"
}
let fighter3: NewFighter = {
  name: "Iori Yagami",
  team: "team yagami"
}
let fighter4: NewFighter = {
  name: "benimaru Nikaido",
  team: "team kyo"
}
const kyo = fighterRepository.add(fighter1);
const terry = fighterRepository.add(fighter2);
const iori = fighterRepository.add(fighter3);
const benimaru = fighterRepository.add(fighter4);

console.log("Tous les combattants :");
console.log(fighterRepository.findall());

console.log("Combattants de la team Kyo :");
console.log(fighterRepository.findByTeam("team kyo"));
eventHandler({ type: "special-move", FighterId: kyo.id, move: "Orochinagi", power: 100 }, fighterRepository);
try {
    console.log(moveRepository.add({ type: "special-move", FighterId: kyo.id, move: "Orochinagi", power: 90 })); // ok
    console.log(moveRepository.add({ type: "special-move", FighterId: kyo.id, move: "Bad", power: -5 }));        // ko
} catch (e) {
    console.log("Error:", (e as Error).message);
}


const service1 = new DamageService();
const service2 = new DamageService();

console.log(service1.computeDamage(100, 3));
console.log(service1.computeDamage(100, 3)); 
console.log(service1.computeDamage(50, 2)); 
console.log(service2.computeDamage(100, 3)); 
function isTeam(value: unknown): value is Team {
    return typeof value === "string" && (TEAMS as readonly string[]).includes(value);
}


function isFighter(value: unknown): value is Fighter {
    if (typeof value !== "object" || value === null) return false;
    const v = value as Record<string, unknown>;
    return typeof v.id === "number"
        && typeof v.name === "string"
        && isTeam(v.team);
}
console.log(isFighter({ id: 1, name: "Kyo", team: "team kyo" }));       
console.log(isFighter({ id: 2, name: "Ralf", team: "team ikari" }));     
console.log(isFighter({ id: "3", name: "Iori", team: "team yagami" }));  
console.log(isFighter({ id: 4, team: "team kyo" }));                     
console.log(isFighter(null));                                            

// Narrowing in action
const data: unknown = JSON.parse('{"id":5,"name":"Terry","team":"team fatal fury"}');
if (isFighter(data)) {
    console.log(data.name, data.team);
}