import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { EditProfileDto } from './editProfileDto.js';
import { error } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getFooldal() {
    return {
      title: 'My First NestJS App'
    }
  }

  @Post('/')
  @Render('index')
  editProfile(@Body() body: EditProfileDto) {

    const userRegex_username = /^[a-z][a-z\d]*$/; 
    if (!userRegex_username.test(body.username)) {
      return {
        error: "Invalid username"
      }
    }

    const userRegex_nickname = /^[a-z][a-z\d]*$/; 
    if (!userRegex_nickname.test(body.nickname)) {
      return {
        error2: "Invalid nickname"
      }
    }

  }

}
