export class Cake {
  _id: string;
  bakerName: string;
  url: string;
  stars = 0;
  rating: Rating[];
  createdAt: number;
  updatedAt: number;
}
export class Rating {
  _id: string;
  rating: number;
  comment: string;
}
