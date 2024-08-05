import { Square } from "./core/Square";
import { SquareGroup } from "./core/SquareGroup";
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

const sqGroup = new SquareGroup(
  [{
    x: -1,
    y: 0,
  },
  {
    x: 0,
    y: 0,
  },
  {
    x: 0,
    y: -1,
  }, {
    x: 0,
    y: 1,
  }],
  {
    x: 5,
    y: 5
  },
  "red"
);

sqGroup.squares.forEach(sq => {
  sq.viewer = new SquarePageViewer(sq, $("#root"))
});

$("#btnDown").on("click",function() {
  sqGroup.centerPoint = {
    x: sqGroup.centerPoint.x,
    y: sqGroup.centerPoint.y + 1
  }
});
// ----------------方块组合类测试------------------

