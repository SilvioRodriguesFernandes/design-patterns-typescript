interface UserProtocol {
  name: string;
  age: number;
}

// Classe Original
class User implements UserProtocol {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

// Classe Proxy
class UserProxy {
  constructor(private readonly user: User) {}

  get name(): string {
    return this.user.name;
  }

  set name(name: string) {
    if (name.length > 10) {
      throw new Error('O nome não pode ter mais de 10 caracteres.');
    }
    this.user.name = name;
  }

  get age(): number {
    return this.user.age;
  }

  set age(age: number) {
    if (age < 18) {
      throw new Error('O usuário deve ter mais de 18 anos.');
    }
    this.user.age = age;
  }
}

// Cliente
const user = new User('Milena', 25);

const proxy = new UserProxy(user);

proxy.name = 'Sabrina';
proxy.age = 18;

console.log(user);
