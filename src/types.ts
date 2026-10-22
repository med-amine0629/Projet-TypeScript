const TEAMS = ["team kyo", "team fatal fury", "team yagami", "team New Faces", "team awakened orochi"] as const;
type Team = typeof TEAMS[number];

type Fighter = {
    id: number,
    name: string,
    team: Team
}

type TornamentEvent = |{type : "match-start", FighterId : number, opponentId: number}
                      | { type: "special-move"; FighterId: number; move: string; power: number }
                      |{type:"ko", FighterId: number}
type SDM = Extract<TornamentEvent, {type:"special-move"}>
type SavedSDM = SDM & { id: number };
export { TEAMS };
export type { Team, Fighter, TornamentEvent, SDM, SavedSDM };