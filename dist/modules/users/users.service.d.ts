import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repository';
export declare class UsersService {
    private readonly usersRepo;
    constructor(usersRepo: UsersRepository);
    create(createUserDto: CreateUserDto): Promise<{
        name: string;
        email: string;
        password: string;
        id: string;
    }>;
}
