export interface StarshipDto {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: string;
  crew: string; // eg. "823,772"
  passengers: string; //same as crew
  cargo_capacity: number;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: number;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}
