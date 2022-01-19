import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('local/signup')
  sigupLocal(@Body() dto: AuthDto): Promise<Tokens> {
    return this.authService.sigupLocal(dto);
  }
  @Post('local/sigin')
  siginLocal() {
    return this.authService.siginLocal();
  }
  @Post('logout')
  logout() {
    return this.authService.logout();
  }
  @Post('refresh')
  refreshTokens() {
    return this.authService.refreshTokens();
  }
}
