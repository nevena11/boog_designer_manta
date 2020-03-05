export class DegRadHelper {
  private obj;
  private prop;

  constructor(obj, prop) {
    this.obj = obj;
    this.prop = prop;
  }
  get value() {
    return this.obj[this.prop] * (180 / Math.PI);
  }
  set value(v) {
    this.obj[this.prop] = v * Math.PI / 180;
  }
}

export class StringToNumberHelper {
  private obj;
  private prop;

  constructor(obj, prop) {
    this.obj = obj;
    this.prop = prop;
  }
  get value() {
    return this.obj[this.prop];
  }
  set value(v) {
    this.obj[this.prop] = parseFloat(v);
  }
}