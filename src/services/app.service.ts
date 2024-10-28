// import { Injectable } from '@nestjs/common';

export interface IAppService {
  getHello(name: string): string;
}

// @Injectable()
// export class AppService implements IAppService {
//   getHello(name: string): string {
//     return `Hello ${name}!`;
//   }
// }
