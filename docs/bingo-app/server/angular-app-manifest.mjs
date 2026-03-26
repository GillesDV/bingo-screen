
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2180, hash: 'd823378b6278c4e46d9aa41e2c03dac48eb4320e21e26c66583a0630b5209117', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 946, hash: '77b3abe0c0dc7ad4142b3c25df6baffafa6362124c897e6a5e1bbcad3d1186a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 19826, hash: '514c123723f551d93bdc401d496196737ea819684fdbf812de988638fc216589', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PUYODMO3.css': {size: 6270, hash: '529bNLPrapw', text: () => import('./assets-chunks/styles-PUYODMO3_css.mjs').then(m => m.default)}
  },
};
