import { Body, Controller, Get, Post, Render } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/hello')
  getHello(): string {
    return this.appService.getHello()
  }

  @Get()
  @Render('index')
  getIndex(): object {
    return {}
  }

  @Get('get-started')
  @Render('get-started')
  getStarted(): object {
    return { title: 'Tiendu Title', subtitle: 'Tiendu Subtitle' }
  }

  @Post('get-started')
  getStartedPost(@Body() body): object {
    return body
  }
}
