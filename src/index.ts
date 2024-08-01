import { Square } from "./core/Square";
import { IViewer } from "./core/types";

export class SquareConsoleViewer implements IViewer {
  constructor(private square: Square) {}
  show() {
    console.log("show", this.square.point, this.square.color);
  }
  remove() {
    console.log("remove", this.square.point, this.square.color);
  }
}

const sq = new Square({ x: 1, y: 2}, "red");

sq.viewer = new SquareConsoleViewer(sq);
sq.viewer.show();
sq.point = {
  x: 2,
  y: 3
}

sq.point = {
  x: 3,
  y: 4
}
