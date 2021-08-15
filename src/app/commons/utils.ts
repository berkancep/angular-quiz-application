export class Utils {
  static getHalfAndFloor(data: any[]) {
    return Math.floor(data.length / 2);
  }
  static getRandomValue(data: any[]) {
    return Math.floor(Math.random() * data.length);
  }
  static deepCopy(data: any) {
    return JSON.parse(JSON.stringify(data));
  }
}
