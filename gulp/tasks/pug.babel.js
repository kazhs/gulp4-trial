import { dest, src } from 'gulp';
import pug from 'gulp-pug';

import { root } from './../../helper.babel';

export const transpilePug = () =>
  src(root('src', 'template', '**', '!(_)*.pug'))
    .pipe(pug())
    .pipe(dest(root('public')));