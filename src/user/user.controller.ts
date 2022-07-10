import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    private service;
    constructor() {
        this.service = new UserService()
    }
}
