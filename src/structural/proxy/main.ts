import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const userProxy = new SystemUserProxy('Carla', 'carlinha');
  console.log('Vai demorar 2 segundos...');
  console.log(await userProxy.getAddresses());

  console.log('Isso vai se repetir...(cache)');

  for (let i = 0; i < 5; i++) {
    console.log(await userProxy.getAddresses());
  }
}

clientCode();
