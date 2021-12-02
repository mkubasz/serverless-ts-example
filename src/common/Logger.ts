export class Logger {
  public static log(...data: any[]) {
    console.log(data);
  }
  public static error(...data: any[]) {
    console.error(data);
  }
}
