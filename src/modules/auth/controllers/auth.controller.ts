import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Request,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { UserLoginDto } from 'src/modules/user/dto/user-login.dto';
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}
  @Get('facebook')
  async getTokenAfterFacebookSignIn(@Query() query) {
    return this._authService.loginWithFacebook(query.access_token);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Request() req, @Body() model: UserLoginDto) {
    return this._authService.login(req.body);
  }
}
