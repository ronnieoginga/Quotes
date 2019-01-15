export class Quotes {
    public showDescription: boolean;
   public upvotes: number;
   public downvotes: number;
    constructor(public id: number, public name: string, public description: string, public completeDate:Date) {
      this.showDescription = false;
      this.upvotes = 0;
      this.downvotes = 0;
    }
}
