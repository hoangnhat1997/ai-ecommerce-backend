import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'changeme-secret',
    });
  }

  validate(payload: any) {
    // payload chứa dữ liệu khi login bạn mã hóa
    // ví dụ { sub: user.id, email: user.email }
    return { sub: payload.sub, email: payload.email };
  }
}
