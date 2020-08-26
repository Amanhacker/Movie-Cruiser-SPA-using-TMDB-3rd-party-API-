export class Movie {

  constructor(
    public id: number,
    public title: string,
    public overview: string,
    public release_date: string,
    public vote_average: number,
    public genre_ids: [number],
    public poster_path?: string,) { }
}
