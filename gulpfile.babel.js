import { series, parallel } from 'gulp';

import { 
  transpilePug, 
  transpileStylus, 
  bootDevServer, 
  cleanAll,
} from './gulp/import.babel';

/**
 * Build for dev
 */
export const buildDev = series(
  cleanAll,
  parallel(transpilePug, transpileStylus),
);

/**
 * Start for dev
 */
export default series(
  buildDev,
  bootDevServer
);