export interface MovieVideo {
  id: number;
  results: [
    {
      id: string;
      iso_639_1: string;
      iso_3166_1: string;
      key: string;
      name: string;
      site: string;
      type: string;
      size: number;
    }
  ]
}
