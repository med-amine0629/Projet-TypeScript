import type { NewFighter } from "./fonction";
import { eventHandler } from "./fonction";
import { FighterRepository } from "./FighterRepository";
const fighterRepository = new FighterRepository();
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