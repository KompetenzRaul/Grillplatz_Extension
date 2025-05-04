
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Grillplatz_Extension/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Grillplatz_Extension"
  },
  {
    "renderMode": 2,
    "route": "/Grillplatz_Extension/angebote"
  },
  {
    "renderMode": 2,
    "route": "/Grillplatz_Extension/kontakt"
  },
  {
    "renderMode": 2,
    "route": "/Grillplatz_Extension/impressum"
  },
  {
    "renderMode": 2,
    "route": "/Grillplatz_Extension/datenschutz"
  },
  {
    "renderMode": 2,
    "route": "/Grillplatz_Extension/produkte/musikanlage"
  },
  {
    "renderMode": 2,
    "route": "/Grillplatz_Extension/produkte/laser"
  },
  {
    "renderMode": 2,
    "route": "/Grillplatz_Extension/produkte/sportbox"
  },
  {
    "renderMode": 2,
    "route": "/Grillplatz_Extension/produkte/riesen-jenga"
  },
  {
    "renderMode": 2,
    "route": "/Grillplatz_Extension/produkte/darts"
  },
  {
    "renderMode": 2,
    "route": "/Grillplatz_Extension/produkte/lichter"
  },
  {
    "renderMode": 0,
    "route": "/Grillplatz_Extension/produkte/*"
  },
  {
    "renderMode": 2,
    "route": "/Grillplatz_Extension/anfrage"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 833, hash: '77b48f14d46bf2c8a2c2171cc8aae741d92173a5dfc661f6d273cd538fadae5f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: '90dce71a3f93c0001d30732801e716de495152cc930e5f6e6a904dafc257aaf3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'angebote/index.html': {size: 30383, hash: '8fd9ffe0b861c3e297d8c6c8bc91b00ef337b46465bae60d9f935955a4cac0ca', text: () => import('./assets-chunks/angebote_index_html.mjs').then(m => m.default)},
    'datenschutz/index.html': {size: 27803, hash: '6462e1d3dff8766c2916444aab3e63c8d6c1bf9116355ac7b2d8694dbd644683', text: () => import('./assets-chunks/datenschutz_index_html.mjs').then(m => m.default)},
    'index.html': {size: 82618, hash: '269309714d94c889d8020a92d08fa178582009a8f0fde867a2c33ea5664ec901', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'kontakt/index.html': {size: 29153, hash: '6bc257c4a8350dea552540ab0cc770ffb90a5825707beb5b687a021f18a7cabb', text: () => import('./assets-chunks/kontakt_index_html.mjs').then(m => m.default)},
    'produkte/musikanlage/index.html': {size: 28545, hash: '983a25716abc5b883c3fcfc85372fc10beaafb36e1f06a46d6762f2584104592', text: () => import('./assets-chunks/produkte_musikanlage_index_html.mjs').then(m => m.default)},
    'produkte/laser/index.html': {size: 28474, hash: '0244d3be78f2d2d143a020df2b5be9fd1d6e745597a1e9a08297291b33e17153', text: () => import('./assets-chunks/produkte_laser_index_html.mjs').then(m => m.default)},
    'impressum/index.html': {size: 27745, hash: '70b46e1eed6df129f9479993a590d7de77d8f5c1637460d32ea5fc7b675a0afc', text: () => import('./assets-chunks/impressum_index_html.mjs').then(m => m.default)},
    'produkte/riesen-jenga/index.html': {size: 27947, hash: '083eda082b5b143e89dae1a1bdbaccbc7370d9247be0af8e6edd097f56aff50b', text: () => import('./assets-chunks/produkte_riesen-jenga_index_html.mjs').then(m => m.default)},
    'produkte/darts/index.html': {size: 27869, hash: '4b1f0207947d7bf864ce27a6a17f54605ec1029d2cf77b6d0a8821c60c5a930e', text: () => import('./assets-chunks/produkte_darts_index_html.mjs').then(m => m.default)},
    'produkte/sportbox/index.html': {size: 28405, hash: '69db45fd12a2f90147a96386d64550b5dce64233beb4c9efe026d0abddc15a12', text: () => import('./assets-chunks/produkte_sportbox_index_html.mjs').then(m => m.default)},
    'anfrage/index.html': {size: 32465, hash: '501b9de6af4575b3799e5cbaefc8daed4cff58ac06d5cab98ba7cdb999c96b28', text: () => import('./assets-chunks/anfrage_index_html.mjs').then(m => m.default)},
    'produkte/lichter/index.html': {size: 27844, hash: '24bb11aa62ebf3cf582258dcd683aeb6f68f69c94720b83cd1ffcb91f9591a69', text: () => import('./assets-chunks/produkte_lichter_index_html.mjs').then(m => m.default)},
    'styles-43YEDSLV.css': {size: 189, hash: '6khOUOvIO1Y', text: () => import('./assets-chunks/styles-43YEDSLV_css.mjs').then(m => m.default)}
  },
};
