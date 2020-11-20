export class Starship {

  id: number;
  MGLT: number;
  length: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  max_atmosphering_speed: number;
  crew: Starship;
  passengers: number;
  url: string;
  pilots: Pilot[];

}

 export class Pilot {
  url2: string;
}
