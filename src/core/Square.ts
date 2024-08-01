import { Point, IViewer } from "./types";
export class Square {

  // 显示者

  private _viewer?: IViewer;

  get viewer() {
    return this._viewer;
  }

  set viewer(val) {
    this._viewer = val;
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

  constructor(
    private _point: Point,
    private _color: string,
    
  ) { };

}