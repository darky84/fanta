export enum Role {
  GolKeeper, Defender, MiddleFielder, Forward
}

export interface Player {
  role: Role;
  realTeam: string;
  name: string;
  quotation: number;
  valutation: number;
  fantaTeam?: string;
}

export const players: Array<Player> = [
  {
    role: Role.GolKeeper,
    realTeam: 'Atalanta',
    name: 'Kirlian',
    quotation: 1000,
    valutation: 2
  },
   {
    role: Role.Forward,
    realTeam: 'Atalanta',
    name: 'Kernel',
    quotation: 1000,
    valutation: 2
  }


];

export const allRoles = Object.keys(Role)
    .filter((x) => isNaN(x))
    .map((x) => Role[x]);

