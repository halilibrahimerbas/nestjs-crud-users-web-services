import { Controller } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";
import { Crud } from "@nestjsx/crud";

@Crud({
  model: {
    type: UserEntity
  }
})
@Controller("user")
export class UserController {
  constructor(private service: UserService) {}
}
