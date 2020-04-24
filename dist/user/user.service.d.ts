import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { UserEntity } from "./user.entity";
export declare class UserService extends TypeOrmCrudService<UserEntity> {
    constructor(repo: any);
}
