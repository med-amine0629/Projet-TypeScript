import { Repository } from "./repository";
import type { SavedSDM, SDM } from "./types";
import { ValidateSpecialMove } from "./Decorators";

export class MoveRepository extends Repository<SavedSDM> {
    @ValidateSpecialMove
    add(move: SDM): SavedSDM {
        return super.add(move);
    }
}