/**
 * 产生一个随机数（介于min和max之间，最小值min，取不到最大值）
*/
export function getRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}