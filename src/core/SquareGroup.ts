import { Square } from "./Square";
import { Point, Shape } from "./types";

export class SquareGroup {
  private _squares: Square[] = [];

  get squares() {
    return this._squares;
  }

  get shape() {
    return this._shape;
  }

  get centerPoint() {
    return this._centerPoint;
  }

  set centerPoint(value: Point) {
    this._centerPoint = value;
    this._shape.forEach((p, index) => {
      this._squares[index].point = {
        x: this.centerPoint.x + p.x,
        y: this.centerPoint.y + p.y
      }
    })
  }

  constructor(private _shape: Shape, private _centerPoint: Point, private _color: string) {
    const arr: Square[] = [];
    this._shape.forEach((p: Point) => {
      const sq = new Square();
      sq.color = this._color;
      sq.point = {
        x: this.centerPoint.x + p.x,
        y: this.centerPoint.y + p.y
      }
      arr.push(sq);
    })
    this._squares = arr;
  }
}