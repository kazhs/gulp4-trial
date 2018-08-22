import { dest, src } from 'gulp';
import pug from 'gulp-pug';

import { root } from './../../helper.babel';

class PugPath {
  constructor(_context = '') {
    this._context = _context;
  }

  script(filename) { return `${this._context}/assets/script/${filename}.js`; }
  style(filename) { return `${this._context}/assets/style/${filename}.css` }
}

export const transpilePug = () =>
  src(root('src', 'template', '**', '!(_)*.pug'))
    .pipe(pug({
      locals: {
        path: new PugPath()
      }
    }))
    .pipe(dest(root('public')));