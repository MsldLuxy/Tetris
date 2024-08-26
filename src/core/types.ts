import { SquareGroup } from "./SquareGroup";

export interface Point {
  readonly x: number;
  readonly y: number;
}

export interface IViewer {
  show(): void;
  remove(): void;
}

export type Shape = Point[];


export enum MoveDirection {
  down,
  left,
  right
}

export enum GameStatus {
  init, //未开始
  playing, //进行中,
  pause, //暂停
  over //游戏结束
}

export interface GameViewer {
  showNext(teris: SquareGroup): void;
  switch(teris: SquareGroup): void;
}