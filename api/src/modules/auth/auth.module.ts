import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'src/shared/env';

@Module({
  imports: [
    JwtModule.register({
      secret: env.jwtSecret,
      signOptions: { expiresIn: '1d' },
      global: true,
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
