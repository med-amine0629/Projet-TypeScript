type Team  = "team kyo" | "team fatal fury" | "team yagami" | "team New Faces" | "team awakened orochi"
type Fighter = {
    id: number,
    name: string,
    team: Team
}

type TornamentEvent = |{type : "match-start",FighterId : number, opponentId: number}
                      | { type: "special-move"; FighterId: number; move: string; power: number }
                      |{type:"ko", fighterId: number}
type SDM = Extract<TornamentEvent, {type:"special-move"}> 

export type {Team, Fighter, TornamentEvent, SDM};