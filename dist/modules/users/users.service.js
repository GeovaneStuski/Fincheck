"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const users_repository_1 = require("../../shared/database/repositories/users.repository");
let UsersService = class UsersService {
    constructor(usersRepo) {
        this.usersRepo = usersRepo;
    }
    async create(createUserDto) {
        const { email, name, password } = createUserDto;
        const emailTaken = await this.usersRepo.findUnique({
            where: { email },
            select: { id: true }
        });
        if (emailTaken) {
            throw new common_1.ConflictException('Email already in use');
        }
        const hashedPassword = await (0, bcrypt_1.hash)(password, 12);
        const user = await this.usersRepo.create({ data: {
                name,
                email,
                password: hashedPassword,
                categories: {
                    createMany: {
                        data: [
                            { name: 'Salário', icon: 'salary', type: 'INCOME' },
                            { name: 'Freelance', icon: 'freelance', type: 'INCOME' },
                            { name: 'Outro', icon: 'other', type: 'INCOME' },
                            { name: 'Casa', icon: 'home', type: 'EXPENSE' },
                            { name: 'Alimentação', icon: 'food', type: 'EXPENSE' },
                            { name: 'Educação', icon: 'education', type: 'EXPENSE' },
                            { name: 'Lazer', icon: 'fun', type: 'EXPENSE' },
                            { name: 'Mercado', icon: 'grocery', type: 'EXPENSE' },
                            { name: 'Roupas', icon: 'clothes', type: 'EXPENSE' },
                            { name: 'Transporte', icon: 'transport', type: 'EXPENSE' },
                            { name: 'Viagem', icon: 'travel', type: 'EXPENSE' },
                            { name: 'Outro', icon: 'other', type: 'EXPENSE' },
                        ]
                    }
                }
            } });
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map