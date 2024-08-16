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
    this.setSquarePoints();
  }

  setSquarePoints() {
    this._shape.forEach((p, i) => {
      this.squares[i].point = {
        x: p.x + this.centerPoint.x,
        y: p.y + this.centerPoint.y,
      }
    })
  }

  constructor(private _shape: Shape, private _centerPoint: Point, private _color: string) {
    const arr: Square[] = [];
    this._shape.forEach((p: Point) => {
      const sq = new Square();
      sq.color = this._color;
      arr.push(sq);
    })
    this._squares = arr;
    this.setSquarePoints();
  }

  // 是否为向右旋转
  protected isClock = true;

  /**
   * 得到旋转后的shape
   * @returns 新的shape
   */
  afterRotateShape(): Shape {
    if (this.isClock) {
      return this.shape.map((p: Point) => {
        return {
          x: -p.y,
          y: p.x
        }
      })
    } else {
      return this.shape.map((p: Point) => {
        return {
          x: p.y,
          y: -p.x
        }
      })
    }
  }

  rotate() {
    const rotateShape = this.afterRotateShape();
    this._shape = rotateShape;
    this.setSquarePoints();
  }

}