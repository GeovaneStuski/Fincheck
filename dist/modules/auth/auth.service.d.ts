import { UsersRepository } from 'src/shared/database/repositories/users.repository';
import { AuthenticateDto } from './dto/authenticate.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersRepo;
    private readonly jwtService;
    constructor(usersRepo: UsersRepository, jwtService: JwtService);
    authenticate(authenticateDto: AuthenticateDto): Promise<{
        accessToken: string;
    }>;
}
