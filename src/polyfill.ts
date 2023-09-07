import { Buffer } from 'buffer';

window.global = window;
global.Buffer = Buffer;
global.process = {
  // @ts-ignore
  env: { DEBUG: undefined },
  version: '',
  nextTick: require('next-tick'),
};
