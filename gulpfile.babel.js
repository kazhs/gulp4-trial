import { series, parallel } from 'gulp';

import { transpilePug, transpileStylus, bootDevServer } from './gulp/import.babel';

export default series(
  parallel(transpilePug, transpileStylus),
  bootDevServer
);