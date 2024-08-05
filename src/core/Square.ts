import { Point, IViewer } from "./types";
export class Square {


  private _point: Point = {
    x: 0,
    y: 0
  }
  private _color: string = ""
  // 显示者

  private _viewer?: IViewer;

  get viewer() {
    return this._viewer;
  }

  set viewer(val) {
    this._viewer = val;
    if (val) {
      val.show();
    }
  }

  get point() {
    return this._point;
  }

  set point(value: Point) {
    this._point = value;
    // 完成显示
    if (this.viewer) {
      this.viewer.show();
    }
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  // constructor(
  //   private _point: Point,
  //   private _color: string,

  // ) { };

}