// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@esm/index.mjs";function s(s,r){return r&&r.type&&"Complex64"===r.type&&e(r.re)&&e(r.im)?new t(r.re,r.im):r}export{s as default};
//# sourceMappingURL=index.mjs.map
