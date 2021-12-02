import 'reflect-metadata';
import ServerlessHttp from 'serverless-http';

import Application from 'koa';
import bodyParser from 'koa-body';
import cors from '@koa/cors';
import Router from '@koa/router';
import * as dotenv from 'dotenv';


dotenv.config();

const router = new Router();

export class PingController {
  public static async ping(ctx: Application.BaseContext): Promise<void> {
    ctx.body = {
      requestEndpoint: 'ping',
      data: 'pong',
    }
  }
}

router.get('/ping', PingController.ping);


class ApplicationServer extends Application {
  public constructor() {
    super();

    this.use(bodyParser());
    this.use(cors());
    this.use(router.routes());
  }
}

export const api = ServerlessHttp(new ApplicationServer());
