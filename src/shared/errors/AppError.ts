export class AppError {
  readonly message: string;

  readonly statusCode: number;

  constructor(message: any, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
