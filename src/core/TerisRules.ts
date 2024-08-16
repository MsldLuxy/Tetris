import { SquareGroup } from "./SquareGroup";
import { MoveDirection, Point, Shape } from "./types";

export const panelConfig = {
  width: 10,
  height: 10,
}

export const isPoint = (obj: any): obj is Point => {
  if (obj.x !== undefined) {
    return true;
  }
  return false;
}

export class TerisRules {
  // 某个形状的方块根据中心点位置去判断是否可以移动到目标位置
  static canIMove(shape: Shape, targetPoint: Point): boolean {
    const targetSquarePoints = shape.map((s) => {
      return {
        x: s.x + targetPoint.x,
        y: s.y + targetPoint.y
      }
    })
    const result = targetSquarePoints.some((s) => {
      return s.x < 0 || s.x >= panelConfig.width || s.y >= panelConfig.height
    })
    if (!result) {
      return true;
    }
    return false;
  }

  static move(teris: SquareGroup, targetPointOrDirection: Point): boolean;
  static move(teris: SquareGroup, targetPointOrDirection: MoveDirection): boolean;
  static move(teris: SquareGroup, targetPointOrDirection: Point | MoveDirection): boolean {
    if (isPoint(targetPointOrDirection)) {
      if (this.canIMove(teris.shape, targetPointOrDirection)) {
        teris.centerPoint = targetPointOrDirection;
        return true;
      }
      return false;
    } else {
      const direction = targetPointOrDirection;
      let targetPoint: Point;
      if (direction === MoveDirection.down) {
        targetPoint = {
          x: teris.centerPoint.x,
          y: teris.centerPoint.y + 1
        }
      } else if (direction === MoveDirection.left) {
        targetPoint = {
          x: teris.centerPoint.x - 1,
          y: teris.centerPoint.y
        }
      } else {
        targetPoint = {
          x: teris.centerPoint.x + 1,
          y: teris.centerPoint.y
        }
      }
      return this.move(teris, targetPoint);
    }
  }

  static moveDirectly(teris: SquareGroup, direction: MoveDirection) {
    while (this.move(teris, direction)) {}
  }

  static rotate(teris: SquareGroup) {
    const newShape = teris.afterRotateShape();
    if (this.canIMove(newShape, teris.centerPoint)) {
      teris.rotate();
      return true;
    } else {
      return false;
    }
  }
}