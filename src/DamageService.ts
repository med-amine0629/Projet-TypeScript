import {Cache} from "./Decorators";
export class DamageService {
    @Cache
    computeDamage(power: number, combo: number): number {
        console.log("computing...");
        return power * combo;
    }
}