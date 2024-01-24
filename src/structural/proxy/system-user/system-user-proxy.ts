import { AdminUser } from './admin-user';
import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class SystemUserProxy implements SystemUserProtocol {
  private originalUser: SystemUserProtocol | null = null;
  private originalUserAddresses: SystemUserAddressProtocol[] | null = null;

  constructor(
    public firstName: string,
    public userName: string,
  ) {}

  private createUser(): SystemUserProtocol {
    if (this.originalUser === null) {
      this.originalUser = new AdminUser(this.firstName, this.userName);
    }
    return this.originalUser;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    this.originalUser = this.createUser();

    if (this.originalUserAddresses === null) {
      this.originalUserAddresses = await this.originalUser.getAddresses();
    }
    return this.originalUserAddresses;
  }
}
