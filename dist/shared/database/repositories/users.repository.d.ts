import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';
export declare class UsersRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.UserCreateArgs): Prisma.Prisma__UserClient<{
        name: string;
        email: string;
        password: string;
        id: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findUnique(findUnique: Prisma.UserFindUniqueArgs): Prisma.Prisma__UserClient<{
        name: string;
        email: string;
        password: string;
        id: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
