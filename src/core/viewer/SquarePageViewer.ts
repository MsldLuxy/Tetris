import { Square } from "../Square";
import { IViewer } from "../types";
import PageConfig from "./PageConfig";
import $ from "jquery";

export class SquarePageViewer implements IViewer {

  private _dom?: JQuery<HTMLElement>
  private isRemoved: boolean = false

  show(): void {
    if (this.isRemoved) {
      return;
    }
    if (!this._dom) {
      this._dom = $("<div>").css({
        position: "absolute",
        width: PageConfig.SquareSize.width,
        height: PageConfig.SquareSize.height,
        border: "1px solid #ccc",
        boxSizing: "border-box",
      }).appendTo(this.container);
    }

    this._dom.css({
      top: PageConfig.SquareSize.height * this.sq.point.y,
      left: PageConfig.SquareSize.width * this.sq.point.x,
      backgroundColor: this.sq.color,
    })
   
  }
  remove(): void {
    if (!this.isRemoved) {
      this._dom?.remove();
      this.isRemoved = true;
    }
  }

  constructor(
    private sq: Square,
    private container: JQuery<HTMLElement>
  ) {

  }

}