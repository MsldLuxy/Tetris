import { Square } from "./core/Square";
import { SquareGroup } from "./core/SquareGroup";
import { createTeris } from "./core/Teris";
import { TerisRules } from "./core/TerisRules";
import { MoveDirection } from "./core/types";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";

import $ from "jquery";

// ----------------小方块类测试------------------

// const sq = new Square(); // 生成小方块
// sq.viewer = new SquarePageViewer(sq, $("#root")); // 给小方块的显示者赋值

// sq.color = "red";
// sq.point = {
//   x: 3,
//   y: 4
// }

// setInterval(() => {
//   sq.point = {
//     x: sq.point.x,
//     y: sq.point.y + 1
//   }
// }, 1000)

// $("#btnDown").on("click",function() {
//   sq.point = {
//     x: sq.point.x,
//     y: sq.point.y + 1
//   }
// });

// $("#btnRemove").on("click",function() {
//   sq.viewer?.remove();
// });

// $("#btnAdd").on("click",function() {
//   sq.viewer = new SquarePageViewer(sq, $("#root"));
// });

// ----------------小方块类测试------------------

// ----------------方块组合类测试------------------

const teris = createTeris({ x: 3, y: 4 })
teris.squares.forEach(sq => {
  sq.viewer = new SquarePageViewer(sq, $("#root"))
});

$("#btnDown").on("click", function () {
  TerisRules.move(teris, MoveDirection.down);
  // TerisRules.moveDirectly(teris, MoveDirection.down);
});
$("#btnLeft").on("click", function () {
  TerisRules.move(teris, MoveDirection.left);
  // TerisRules.moveDirectly(teris, MoveDirection.left);
});
$("#btnRight").on("click", function () {
  TerisRules.move(teris, MoveDirection.right);
  // TerisRules.moveDirectly(teris, MoveDirection.right);
});

$("#rotate").on("click", function () {
  TerisRules.rotate(teris);
});

// ----------------方块组合类测试------------------




