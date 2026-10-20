import type { Fighter, SDM } from "./types";
import type { FighterRepository } from "./FighterRepository";

type NewFighter = Omit<Fighter, "id">;

function eventHandler(event: SDM, repo: FighterRepository): void {
    const fighter = repo.findById(event.FighterId);
    if (fighter) {
        console.log(`Fighter ${fighter.name} used ${event.move} (power ${event.power})`);
    } else {
        console.log(`Unknown fighter ${event.FighterId}`);
    }
}

export type { NewFighter };
export { eventHandler };