import del from 'del';

import { root } from './../../helper.babel';

export const cleanAll = () => del(root('public'));

export const cleanHtml = () => del(root('public', '!(assets)**'));

export const cleanStyle = () => del(root('public', 'assets', 'style'));