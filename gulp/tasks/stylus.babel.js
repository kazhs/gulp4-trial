import { dest, src } from 'gulp';
import stylus from 'gulp-stylus';

import { root } from './../../helper.babel';

export const transpileStylus = () =>
  src(root('src', 'assets', 'stylus', '**', '!(_)*.styl'))
    .pipe(stylus())
    .pipe(dest(root('public', 'assets', 'style')));