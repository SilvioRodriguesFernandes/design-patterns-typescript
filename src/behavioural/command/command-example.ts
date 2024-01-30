interface Command {
  execute(): void;
}

class OpenFileCommand implements Command {
  constructor(private readonly filename: string) {}

  execute(): void {
    console.log(`Abrindo o arquivo ${this.filename}`);
  }
}

class CloseFileCommand implements Command {
  constructor(private readonly filename: string) {}

  execute(): void {
    console.log(`Fechando o arquivo ${this.filename}`);
  }
}

class Invoke {
  private _command: Command;

  constructor(command: Command) {
    this._command = command;
  }

  execute(): void {
    this._command.execute();
  }
}

const openFile = new OpenFileCommand('my-file.txt');

const invoker = new Invoke(openFile);
invoker.execute();

const closeFile = new CloseFileCommand('my-file.txt');

const closeInvoker = new Invoke(closeFile);
closeInvoker.execute();
