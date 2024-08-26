import { SquareGroup } from "./SquareGroup";
import { createTeris } from "./Teris";
import { TerisRules } from "./TerisRules";
import { GameStatus, GameViewer, MoveDirection } from "./types";
import { GameConfig } from "./GameConfig";

export class Game {
  // 游戏状态
  private _gameState: GameStatus = GameStatus.init;
  // 当前操作方块
  private _curTeris?: SquareGroup;
  // 下一个方块
  private _nextTeris: SquareGroup = createTeris({ x: 0, y: 0 });
  // 下落间隔时间
  private _duration: number = 1000;
  // 定时器
  private _timer: number | undefined;
  constructor(private _viewer: GameViewer) {
    this.resetTerisCenterPoint(GameConfig.nextSize.width, this._nextTeris);
    this._viewer.showNext(this._nextTeris);
  }


  start() {
    if (this._gameState === GameStatus.playing) {
      return;
    }
    this._gameState = GameStatus.playing;

    if (!this._curTeris) { 
      this.switchTeris();
    }
    this.autoDrop();
  }

  /**
   * 自由下落
   * @returns 
   */
  private autoDrop() {
    if (this._gameState !== GameStatus.playing || this._timer) {
      return;
    }

    this._timer = setInterval(() => {
      if (this._curTeris) {
        TerisRules.move(this._curTeris, MoveDirection.down);
      }
    }, this._duration);
  }

  /**
   * 切换方块
   */
  private switchTeris() {
    this._curTeris = this._nextTeris;
    this.resetTerisCenterPoint(GameConfig.panelSize.width, this._curTeris);
    this._nextTeris = createTeris({ x: 0, y: 0 });
    this.resetTerisCenterPoint(GameConfig.nextSize.width, this._nextTeris);
    this._viewer.switch(this._curTeris);
    this._viewer.showNext(this._nextTeris);
  }

  pause() {
    if (this._gameState === GameStatus.playing) {
      this._gameState = GameStatus.over;
      clearInterval(this._timer);
      this._timer = undefined;
    }
  }

  controlLeft() {
    if (this._curTeris && this._gameState === GameStatus.playing) {
      TerisRules.move(this._curTeris, MoveDirection.left);
    }
  }

  controlRight() {
    if (this._curTeris && this._gameState === GameStatus.playing) {
      TerisRules.move(this._curTeris, MoveDirection.right);
    }
  }

  controlDown() {
    if (this._curTeris && this._gameState === GameStatus.playing) {
      TerisRules.moveDirectly(this._curTeris, MoveDirection.down);
    }
  }

  controlRotate() {
    if (this._curTeris && this._gameState === GameStatus.playing) {
      TerisRules.rotate(this._curTeris);
    }
  }

  private resetTerisCenterPoint(width: number, teris: SquareGroup) {
    let x = Math.ceil(width / 2) - 1;
    let y = 0;
    teris.centerPoint = { x, y }

    while (teris.squares.some(sq => sq.point.y < 0)) {
      // TerisRules.move(teris, MoveDirection.down);
      teris.squares.forEach(sq => sq.point = {
          x: sq.point.x,
          y: sq.point.y + 1,
        }
      );
    }
  }
}