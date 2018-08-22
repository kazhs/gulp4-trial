import { src } from 'gulp';
import server from 'gulp-webserver';

import { root } from './../../helper.babel';

export const bootDevServer = () =>
  src(root('public'))
    .pipe(server({ livereload: true, port: 8080 }));