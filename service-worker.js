/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9ee8b0bca0e631b5d7e48d335b40dfd6"
  },
  {
    "url": "about.html",
    "revision": "90e3dd4549f253179558e6747b3f72bd"
  },
  {
    "url": "android-logo.png",
    "revision": "1ebb00413163d021874b65d90daf12c6"
  },
  {
    "url": "android-logo.svg",
    "revision": "9441d900401244f9814160b68b0b37e4"
  },
  {
    "url": "Android/index.html",
    "revision": "083d1ddb19271aa6bc18f9809d1495ac"
  },
  {
    "url": "Android/Uninstall Android Apps.html",
    "revision": "9ff7f06df9d41cd576e032d18e258091"
  },
  {
    "url": "angular-logo.png",
    "revision": "bf861c957269be290ba37a1b5f448eaf"
  },
  {
    "url": "angular-logo.svg",
    "revision": "32cc53a5a100ce60e1e59ce607e19656"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "d9f242a7c62c1424e39305b0317467e1"
  },
  {
    "url": "assets/css/0.styles.c955acfa.css",
    "revision": "e728aee63b5c42c4bcabfac01f2891b5"
  },
  {
    "url": "assets/img/adb-folder.a2e80b0f.png",
    "revision": "a2e80b0f76aeb4e45748029b46ec5a3d"
  },
  {
    "url": "assets/img/adb-open-here.78d260f4.png",
    "revision": "78d260f4d15e58c9f3ffaa073802d745"
  },
  {
    "url": "assets/img/app-inspector-1.112b0673.png",
    "revision": "112b06737ee50d1d0a72980218f7598f"
  },
  {
    "url": "assets/img/app-inspector-2.8074769a.png",
    "revision": "8074769a8c3d30948d190c03c9fcec0d"
  },
  {
    "url": "assets/img/app-inspector-3.21b342e2.png",
    "revision": "21b342e2a2088cc1791b3b95e602f45c"
  },
  {
    "url": "assets/img/circular-dependencies.ffb5c5f4.png",
    "revision": "ffb5c5f4de4ef5588332a308da9c4687"
  },
  {
    "url": "assets/img/enable-developer-options.04c34949.jpg",
    "revision": "04c34949b631d8c01e886371537a5bac"
  },
  {
    "url": "assets/img/example.d17d569c.png",
    "revision": "d17d569ccc957dea41670accf5760ea2"
  },
  {
    "url": "assets/img/git-hooks.a3cc1902.jpeg",
    "revision": "a3cc190270d1d243399148e41cbfe1b2"
  },
  {
    "url": "assets/img/mongodb-architecture.3259e0d1.jpeg",
    "revision": "3259e0d183833b6f52cefea9f661fe55"
  },
  {
    "url": "assets/img/mongodb-database.1dc9e5c6.png",
    "revision": "1dc9e5c62f37812662f66c667a15ac41"
  },
  {
    "url": "assets/img/mongodb-flow.6f8613c3.png",
    "revision": "6f8613c38f208c9411e6a0811bc24cd1"
  },
  {
    "url": "assets/img/mongoose-data-mapping.7c14f39c.png",
    "revision": "7c14f39cb0b5b5115813ee37ef5f07e8"
  },
  {
    "url": "assets/img/mvc-flow.f666ce8c.svg",
    "revision": "f666ce8c44db14206e80edd96b35f5aa"
  },
  {
    "url": "assets/img/operations-on-data-types.ab8c6b17.jpg",
    "revision": "ab8c6b177e8b98d2d0453a7e40b62c44"
  },
  {
    "url": "assets/img/package-list.fa9ec990.png",
    "revision": "fa9ec9907fc1a028a888c21dc9c28583"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/structure-of-gulp-file.fcf77907.png",
    "revision": "fcf77907b1c5c797f894acdced1a60e9"
  },
  {
    "url": "assets/img/the-reactor-pattern.9d49d87e.png",
    "revision": "9d49d87e5369ea3439320b46b181b065"
  },
  {
    "url": "assets/img/types.49a34152.png",
    "revision": "49a341528b909969cf7784cad521a86b"
  },
  {
    "url": "assets/img/web-page-load-time.c5834a4c.jpg",
    "revision": "c5834a4c1421fb4ad7b63e6d053bc516"
  },
  {
    "url": "assets/img/what-happens-when-you-browse-the-web.df48eb12.jpg",
    "revision": "df48eb121baa2af4242ed8936e8e0d4b"
  },
  {
    "url": "assets/js/10.803dc8a4.js",
    "revision": "79a4e687ff48c08d964c54a76b1c433a"
  },
  {
    "url": "assets/js/100.4e417b5a.js",
    "revision": "0bb79c09efe1773c0213c8a1281c070e"
  },
  {
    "url": "assets/js/101.c27a654b.js",
    "revision": "b3f53ffff20ef1af99d34a5bd6bf22b6"
  },
  {
    "url": "assets/js/102.93807b3c.js",
    "revision": "71ec5e19d0291d074726788278da424b"
  },
  {
    "url": "assets/js/103.9071444c.js",
    "revision": "39cfb56ab2ba4437b6aaaf2b57736ddb"
  },
  {
    "url": "assets/js/104.80cdc69b.js",
    "revision": "9b5a71179e2dd623437c8a50d403043b"
  },
  {
    "url": "assets/js/105.f5819fe9.js",
    "revision": "5a2e372f513190ffe887beb3b16561a8"
  },
  {
    "url": "assets/js/106.23ad94b9.js",
    "revision": "dd01ade424baa7ff91c565a1d0b1af32"
  },
  {
    "url": "assets/js/107.205018be.js",
    "revision": "995284941ba7104750a1e9d7953bc212"
  },
  {
    "url": "assets/js/108.ce0418b2.js",
    "revision": "ba771a64c8596ff6855443d33e35001b"
  },
  {
    "url": "assets/js/109.6160565b.js",
    "revision": "4fa1060c62a3eed00a235bdc1859bc8e"
  },
  {
    "url": "assets/js/11.24099deb.js",
    "revision": "32bfa18c29f19772756988b5e3ea9bc0"
  },
  {
    "url": "assets/js/110.346407e0.js",
    "revision": "23acb818a3ae2052f746d18d704c75d5"
  },
  {
    "url": "assets/js/111.6568b920.js",
    "revision": "917939704dc471cb5508125868e0936d"
  },
  {
    "url": "assets/js/112.c2d91bb3.js",
    "revision": "991c11fa5f8a261fdaa32b74ca942598"
  },
  {
    "url": "assets/js/12.95ca1ef4.js",
    "revision": "71b8f7e5b4025a869cd35d758c4437f0"
  },
  {
    "url": "assets/js/13.338c991f.js",
    "revision": "9dab9030de90c66f3dd6f82dd8a3e294"
  },
  {
    "url": "assets/js/14.b9dc6e5d.js",
    "revision": "12f5f53307fbfb962cac5e8c754f7231"
  },
  {
    "url": "assets/js/15.1343603a.js",
    "revision": "baaf55bfc70fa298e3cb361b5ef9cbda"
  },
  {
    "url": "assets/js/16.ae1572b2.js",
    "revision": "5ce6f9312f72a4eb0d193ef46dc37906"
  },
  {
    "url": "assets/js/17.6d23a402.js",
    "revision": "e1ff05cef0c19d42b3d657d045adb405"
  },
  {
    "url": "assets/js/18.ca2171cd.js",
    "revision": "0aa984fa9bd5ccb132e70df47c910bf5"
  },
  {
    "url": "assets/js/19.5237c1a1.js",
    "revision": "23cd89cd3f7b1d426e45bd9e35a0ca6c"
  },
  {
    "url": "assets/js/2.1a7eba46.js",
    "revision": "42f07f604328e6191ef202ee26b23fa1"
  },
  {
    "url": "assets/js/20.9aab8c76.js",
    "revision": "f46971af9e3d8a6b2bd1949a6b2476bf"
  },
  {
    "url": "assets/js/21.3d54b796.js",
    "revision": "887416aaf92c9c13c67f145b6e78831d"
  },
  {
    "url": "assets/js/22.6688d8fa.js",
    "revision": "e024d952a55fd92abb66aad838e31048"
  },
  {
    "url": "assets/js/23.56300348.js",
    "revision": "dfbd32d240ce0ab37e608ac8bb7a3f25"
  },
  {
    "url": "assets/js/24.a52a275e.js",
    "revision": "76fe851cce46a538fd6afeb267fb6f9f"
  },
  {
    "url": "assets/js/25.68d5d864.js",
    "revision": "20e7fd6006ca56ad5a307c859cbf5dec"
  },
  {
    "url": "assets/js/26.4f7a47f4.js",
    "revision": "70d15000889830709bc5fc8e9f7ccd5c"
  },
  {
    "url": "assets/js/27.869523af.js",
    "revision": "83a5e2befe0ee846eab477640cb2b960"
  },
  {
    "url": "assets/js/28.94cbb0e9.js",
    "revision": "58b0e192d54195636cc111b32d792369"
  },
  {
    "url": "assets/js/29.963acb75.js",
    "revision": "620d4570176208c5c200da160f7779d9"
  },
  {
    "url": "assets/js/3.59bf76cb.js",
    "revision": "69287579de3245000dfd0f4d2122851d"
  },
  {
    "url": "assets/js/30.a9e95402.js",
    "revision": "0be41656777616ada1bb8f0f5ab91874"
  },
  {
    "url": "assets/js/31.3bbb0eb2.js",
    "revision": "f3fb5853556911a8d8c5977ec25e6d6b"
  },
  {
    "url": "assets/js/32.f9b25e9b.js",
    "revision": "93e976f4c05a7f68c5e2b7726f8fc523"
  },
  {
    "url": "assets/js/33.1d7d752b.js",
    "revision": "b68fa51738a666676b5de6491c560f10"
  },
  {
    "url": "assets/js/34.1438f776.js",
    "revision": "96c40c033141559dcc5730e335324c6b"
  },
  {
    "url": "assets/js/35.6e0e0b2a.js",
    "revision": "9b6ac4978729453500925c1cdb54c69e"
  },
  {
    "url": "assets/js/36.f43f46a8.js",
    "revision": "2301b5ba68a3fd8f355791e6109feb76"
  },
  {
    "url": "assets/js/37.335dc069.js",
    "revision": "475fef1c13b63d7645a781b454a6eb2f"
  },
  {
    "url": "assets/js/38.1a722a5d.js",
    "revision": "df53d8b78bb27b3c80483999b80c3026"
  },
  {
    "url": "assets/js/39.7b8fbc3c.js",
    "revision": "0df04a395f5e2102191ca0c65b01daa4"
  },
  {
    "url": "assets/js/4.7e2414f6.js",
    "revision": "1ec89eed951bad08a6f838837ca77b8f"
  },
  {
    "url": "assets/js/40.38dd09b4.js",
    "revision": "98ace0b9e29ae8454f042a69cf71fc3e"
  },
  {
    "url": "assets/js/41.978acd2e.js",
    "revision": "892c9fabb0d83496fa9431d439273b46"
  },
  {
    "url": "assets/js/42.81c1e6d6.js",
    "revision": "d3572acc9939396abdd96ae3edfe12ec"
  },
  {
    "url": "assets/js/43.86b842ea.js",
    "revision": "7c0308709b801ede0163c9dbe9af56e7"
  },
  {
    "url": "assets/js/44.d356a5a8.js",
    "revision": "93fa35d8468f848459c4c043232f21e0"
  },
  {
    "url": "assets/js/45.4b2d34a3.js",
    "revision": "7942bb7dbf8a1313089ea6eaac9b1921"
  },
  {
    "url": "assets/js/46.1a7b8df3.js",
    "revision": "9d2af705b7c2e7afe629ac43ad23cc10"
  },
  {
    "url": "assets/js/47.bcc84021.js",
    "revision": "42c739f35404670bc1c722419b780442"
  },
  {
    "url": "assets/js/48.0a228aac.js",
    "revision": "47208c3836ad18640e3a58e662b0b92e"
  },
  {
    "url": "assets/js/49.69f289be.js",
    "revision": "fb2ba3dd5e8854dee5614a752c4505fa"
  },
  {
    "url": "assets/js/5.65751f54.js",
    "revision": "890120c36f02e7b8b29ba847e3734a65"
  },
  {
    "url": "assets/js/50.42532b05.js",
    "revision": "a001546a8b004dbd9e1a0f809dd66d57"
  },
  {
    "url": "assets/js/51.9c4a4e3d.js",
    "revision": "7e98412e58c39c37cff610611b5025ae"
  },
  {
    "url": "assets/js/52.06a7224c.js",
    "revision": "991f7316435d970ad6e9f3823996317b"
  },
  {
    "url": "assets/js/53.45f88307.js",
    "revision": "c61ea439ccd10daf30df889ecf8a594c"
  },
  {
    "url": "assets/js/54.02243d7b.js",
    "revision": "4d6e75e107ce43b355b0ad31d7b96d3f"
  },
  {
    "url": "assets/js/55.dc2b8ed9.js",
    "revision": "ea24a9f91803877f443936f71bf46b6c"
  },
  {
    "url": "assets/js/56.65e7f0b1.js",
    "revision": "d930e0f9e64d9f48fa465bcb58dc8418"
  },
  {
    "url": "assets/js/57.c2a3af83.js",
    "revision": "7e83e91afba4ca462fc1e69d10a8a6fe"
  },
  {
    "url": "assets/js/58.82d174ec.js",
    "revision": "9ab6e411b7495c6d2acb3483d5d9c8bf"
  },
  {
    "url": "assets/js/59.3907f6d1.js",
    "revision": "5906e67c329474584f271c6e05b91de3"
  },
  {
    "url": "assets/js/6.19799003.js",
    "revision": "54310e04885db6a369b38331781cbd5a"
  },
  {
    "url": "assets/js/60.4c9ad484.js",
    "revision": "16892fab6ff72b98bd5b8679d1c01abb"
  },
  {
    "url": "assets/js/61.6a7d39e2.js",
    "revision": "ef4156405be298cf978d7e9087b353ed"
  },
  {
    "url": "assets/js/62.ac6e1bc8.js",
    "revision": "66d29135c63acb694a7129cf0d873b6b"
  },
  {
    "url": "assets/js/63.aeb1010b.js",
    "revision": "5246fa467f03db594a9e51cf59e2a0ac"
  },
  {
    "url": "assets/js/64.df3b4b04.js",
    "revision": "0449a404f3530c85d91d4517939215d5"
  },
  {
    "url": "assets/js/65.43791cf0.js",
    "revision": "a46186e1cfb93b8344b7fc5c7043c403"
  },
  {
    "url": "assets/js/66.3c94278c.js",
    "revision": "8fec387d48c9437904ece30b700ac2d4"
  },
  {
    "url": "assets/js/67.9bb2cb95.js",
    "revision": "00340c0e5720aa73da7ea8fb25c28f3d"
  },
  {
    "url": "assets/js/68.aae1c3f1.js",
    "revision": "f9d17e2f2b201d033b37c32f862ac260"
  },
  {
    "url": "assets/js/69.3ace881b.js",
    "revision": "fdc6dd4cf23d4a9d749bb55f25572360"
  },
  {
    "url": "assets/js/7.9a98ddc1.js",
    "revision": "757b9c5506ff6e1ac7586864bde16c34"
  },
  {
    "url": "assets/js/70.24b08ab9.js",
    "revision": "95404792643a2013b03b0b17dead2634"
  },
  {
    "url": "assets/js/71.a68d353c.js",
    "revision": "6ddfb25a3ab6b58dd22b3fc11cd27860"
  },
  {
    "url": "assets/js/72.92939276.js",
    "revision": "adf4cb0eed8b2e7cebc108659807f4ad"
  },
  {
    "url": "assets/js/73.00bf5ccd.js",
    "revision": "52ade72f7ca928d20a2bd45ed3161c91"
  },
  {
    "url": "assets/js/74.6b60deb9.js",
    "revision": "621b35370c6ca985c205491d80f6c41e"
  },
  {
    "url": "assets/js/75.9e09a04e.js",
    "revision": "1c6420efe60a2e24670d49546f476e92"
  },
  {
    "url": "assets/js/76.9112e72e.js",
    "revision": "4f73192382b37c1140c9857f4baa74de"
  },
  {
    "url": "assets/js/77.569b2655.js",
    "revision": "7d0c6b152bc80892133fb865d9025d81"
  },
  {
    "url": "assets/js/78.87cf78cd.js",
    "revision": "5b850e83ea6c7971f5be39594660a04f"
  },
  {
    "url": "assets/js/79.762bd9f1.js",
    "revision": "7a63c220001769ec33f35d06735d0ca7"
  },
  {
    "url": "assets/js/8.7d422227.js",
    "revision": "10da2a874874a261156ac115690eefb9"
  },
  {
    "url": "assets/js/80.fd71234d.js",
    "revision": "7b65c139614643ec3e49f3b4fec093c1"
  },
  {
    "url": "assets/js/81.6341dac7.js",
    "revision": "a854f0733ec8ef985fcb4b41f37a22a8"
  },
  {
    "url": "assets/js/82.e12a9f9f.js",
    "revision": "77788839094fd4f8f64657275f133095"
  },
  {
    "url": "assets/js/83.56f257b4.js",
    "revision": "d3746e221b3f03325d8b87c65c26ded2"
  },
  {
    "url": "assets/js/84.6aeece3b.js",
    "revision": "7b0d0fdf207277247c4e96823110e960"
  },
  {
    "url": "assets/js/85.8bcf93c6.js",
    "revision": "a1eef88117a6e622f19939f1346d039c"
  },
  {
    "url": "assets/js/86.a82f14bd.js",
    "revision": "47772cce16d83965e3051e061e2d3ad1"
  },
  {
    "url": "assets/js/87.c760a4cd.js",
    "revision": "6c5cfc9ed54f50137d4dd829eeacdbd6"
  },
  {
    "url": "assets/js/88.b06d2b2a.js",
    "revision": "9731fb3e048ecb532d7a09768408789f"
  },
  {
    "url": "assets/js/89.c67fb0cb.js",
    "revision": "bb4c6f91b07a82a5e4ec2b9dc6889806"
  },
  {
    "url": "assets/js/9.068a74d7.js",
    "revision": "00efedb91ab38926b79fe5129c73a2ee"
  },
  {
    "url": "assets/js/90.5ccd4bf9.js",
    "revision": "51cf04ca4278805204a6b976a8bb6a56"
  },
  {
    "url": "assets/js/91.fcad4364.js",
    "revision": "c1d6191b3de16555d8ae4b9da5f7d7bd"
  },
  {
    "url": "assets/js/92.67c26882.js",
    "revision": "394d536e90f361ac6c45a9ead582b14a"
  },
  {
    "url": "assets/js/93.774fe6c1.js",
    "revision": "211d34370f8137630f6b346193e630da"
  },
  {
    "url": "assets/js/94.f189ae0d.js",
    "revision": "708f9329cb3f2f6c9df456ed0cd2a3d4"
  },
  {
    "url": "assets/js/95.84810d4f.js",
    "revision": "b65de714cadc90ac1429227a8149d62c"
  },
  {
    "url": "assets/js/96.1920151d.js",
    "revision": "5c8344c3e6690848ef3db7f28ac0236f"
  },
  {
    "url": "assets/js/97.a1963b33.js",
    "revision": "debc7b9a9594d13e373cd16627309a80"
  },
  {
    "url": "assets/js/98.63bff6a0.js",
    "revision": "c3748e4d17f15dcae45ce2434ad54651"
  },
  {
    "url": "assets/js/99.721a3ea6.js",
    "revision": "aeafb0547f1ea2328be911be60367f66"
  },
  {
    "url": "assets/js/app.75dd2e1d.js",
    "revision": "1afa082d0b1be984a9df991e80a023f6"
  },
  {
    "url": "bash-logo.svg",
    "revision": "2ce57f152f8728ebbcf49963011e5741"
  },
  {
    "url": "c-logo.svg",
    "revision": "735d13dfdb44e07b9bb04876760ec6b7"
  },
  {
    "url": "c-sharp-logo.png",
    "revision": "e1ceb2d6bc4220e5d644dd65d6f6d209"
  },
  {
    "url": "c-sharp-logo.svg",
    "revision": "b78fdde225274b68d4e884db77722217"
  },
  {
    "url": "collection.svg",
    "revision": "4ac27d20bf3ffeffe6c8e6ce66e69708"
  },
  {
    "url": "Collection/Dual Boot OS.html",
    "revision": "df9d8560d1bbcf7aa78afc3129da6c53"
  },
  {
    "url": "Collection/index.html",
    "revision": "10a5f551dc77ad525e078c3d628211e2"
  },
  {
    "url": "Collection/Manjaro OS.html",
    "revision": "d5b351d69b900969efcd4b9517a73bcb"
  },
  {
    "url": "Collection/VSCode.html",
    "revision": "9b1f005f17424eefc92ee35e0370a740"
  },
  {
    "url": "Collection/Windows Quirks.html",
    "revision": "f5731811de55aa987c473812524d5cd5"
  },
  {
    "url": "Collection/x265.html",
    "revision": "fa1e5ec501b6b8f67e272a39f27d0af7"
  },
  {
    "url": "Concepts/Algorithms.html",
    "revision": "b5d1cf65e9381a15c348afcfc9935647"
  },
  {
    "url": "Concepts/Application Security/API.html",
    "revision": "820a682b643040b3517e44f53445f236"
  },
  {
    "url": "Concepts/Application Security/index.html",
    "revision": "fa7c761dc8529827317f76a6954ca8f2"
  },
  {
    "url": "Concepts/Application Security/SQL Injections.html",
    "revision": "971d88b46aac78d7c00eda7e5fc2e797"
  },
  {
    "url": "Concepts/Data Structures.html",
    "revision": "65a037a8c63d0eecd4cd0997c5ca59eb"
  },
  {
    "url": "Concepts/F/f.html",
    "revision": "67e10cc3f9afedb1ce16600d957ef2cd"
  },
  {
    "url": "Concepts/index.html",
    "revision": "db17128ed7580f907efe3d11a1583c60"
  },
  {
    "url": "Concepts/Linux.html",
    "revision": "b402e6a5e0c27dfe1d44d6ea2b9be5e9"
  },
  {
    "url": "Concepts/temp.html",
    "revision": "284296f35d9af2d1efb87e5a128fc652"
  },
  {
    "url": "Concepts/Web/HTTP.html",
    "revision": "3cc3507aa5dd728a033f14fb6323e70a"
  },
  {
    "url": "Concepts/Web/index.html",
    "revision": "c2e27fe7735e26b4cf21576432770651"
  },
  {
    "url": "Concepts/Web/RESTful Web Services.html",
    "revision": "6a0ca47f1a9fba8a688a158fead8cb37"
  },
  {
    "url": "Concepts/Web/Web Development Stacks.html",
    "revision": "a4d2d48c51657f6e32f6cc067c01fcd6"
  },
  {
    "url": "Concepts/Web/WebDevResources.html",
    "revision": "8d30cc9b593fc8a84c9c068028cf44c9"
  },
  {
    "url": "cpp-logo.svg",
    "revision": "8c0ad374dd1554cd400fd8830797ec12"
  },
  {
    "url": "css-logo.svg",
    "revision": "73bb8ddc9664bee4d4492f65ecf6f77c"
  },
  {
    "url": "gulp-logo.png",
    "revision": "a9be5d01bb31521da2e476a9b62fc969"
  },
  {
    "url": "gulp-logo.svg",
    "revision": "802c0e70f55fb553c509adab2aa4c534"
  },
  {
    "url": "html5-logo.svg",
    "revision": "5b6ca79e5f98be895e070968a796451f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "9c481e496c53f064a64c8a61b5333f8f"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ca6d43ac4be6bee2d8d84a4ccf94e3b"
  },
  {
    "url": "icons/apple-touch-icon-180x180-precomposed.png",
    "revision": "4bbb76813e0a90fb8faf2d1f0b5a1287"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "d9f242a7c62c1424e39305b0317467e1"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "8fefa790e73f1cee42fa56ef4b4bc5e4"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "4fbba9b4633c95ad280cb72f908a27b1"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "2d7db08e823489f3376addef48cbe72b"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "60aec94359db32facdab62c2d69460ae"
  },
  {
    "url": "index.html",
    "revision": "c1953f296c07af06cd7d6b0fdefec873"
  },
  {
    "url": "javascript-logo.png",
    "revision": "e5e47a44b486b17b6f5836aca2cb4027"
  },
  {
    "url": "javascript-logo.svg",
    "revision": "dd60b11e9762b6e25f6d4ce981a1eeae"
  },
  {
    "url": "Languages/AWS.html",
    "revision": "190294b666c6f55ce81610270fc23595"
  },
  {
    "url": "Languages/Bash/Bash Scripting.html",
    "revision": "ae6a3fd4a5e5c6388c020be6273e079d"
  },
  {
    "url": "Languages/Bash/Bash.html",
    "revision": "1eb8f38ff84ef1f2f2e739ef2b57a46f"
  },
  {
    "url": "Languages/Bash/index.html",
    "revision": "9859dbf27cb07df15e9eff4daadc068e"
  },
  {
    "url": "Languages/Bash/Snippets.html",
    "revision": "0709c38b0a5d087e11924396cf15b72e"
  },
  {
    "url": "Languages/Bash/Zsh.html",
    "revision": "ce7ff4988454a9e5ca2cc4096d0929e7"
  },
  {
    "url": "Languages/C Sharp/ASP.NET/ASP.NET Core.html",
    "revision": "b9e17282eb4ca8ae67867fd0ada334d9"
  },
  {
    "url": "Languages/C Sharp/ASP.NET/ASP.NET MVC.html",
    "revision": "d477496bcb2f1460c1cc31c709f84d33"
  },
  {
    "url": "Languages/C Sharp/C Sharp 8.html",
    "revision": "c4cd8341f848f9b1717bd84a2dc67d7f"
  },
  {
    "url": "Languages/C Sharp/C Sharp and Angular.html",
    "revision": "7bc48066e0e2545b7bc8ce9141a01c8e"
  },
  {
    "url": "Languages/C Sharp/C Sharp.html",
    "revision": "2fb0a8b22ed9967d1f0db0c4be305198"
  },
  {
    "url": "Languages/C Sharp/index.html",
    "revision": "75bc9b53456f6031cc70ceaee688248b"
  },
  {
    "url": "Languages/C Sharp/Introduction.html",
    "revision": "0e91abe669a7c69e598eaf52c3cdefdc"
  },
  {
    "url": "Languages/CD-CI/Github Actions.html",
    "revision": "3e3234e8adde825555ee218612773155"
  },
  {
    "url": "Languages/CSS/CSS Testing.html",
    "revision": "b4d1a2a6a77c275fe19b9b9dd0f3b1a4"
  },
  {
    "url": "Languages/CSS/CSS.html",
    "revision": "2f30f7fb6109af1d20fe99886d64a28b"
  },
  {
    "url": "Languages/CSS/index.html",
    "revision": "623c3a31de51f987f55986c9faf271ce"
  },
  {
    "url": "Languages/CSS/Sass.html",
    "revision": "ace474329939a407c5bbda56be944240"
  },
  {
    "url": "Languages/Database/index.html",
    "revision": "31d91ab7663a7f352346fe91a576af1e"
  },
  {
    "url": "Languages/Database/MongoDB/MongoDB Cheat Sheet.html",
    "revision": "f928414a64f7d2cf28d7dece852ec3bb"
  },
  {
    "url": "Languages/Database/MongoDB/mongodb_cheat_sheet.html",
    "revision": "959d5f4cf0b303775859e859b098125c"
  },
  {
    "url": "Languages/Database/MongoDB/MongoDB_Udemy.html",
    "revision": "75a8ad2572a1abcbcb8890b448ed6184"
  },
  {
    "url": "Languages/Database/MongoDB/MongoDB.html",
    "revision": "4dc405fcdd0c01fa1b96f7f459874ecb"
  },
  {
    "url": "Languages/GIT/GIT.html",
    "revision": "4914e17f168955e120b46222b7d58eec"
  },
  {
    "url": "Languages/GIT/index.html",
    "revision": "87b04756fa8bd9fb6e6467424d574928"
  },
  {
    "url": "Languages/HTML/Fast and Beautiful Modern Image Delivery Techniques.html",
    "revision": "24c08f615e02fb32de7fb5a6153ab083"
  },
  {
    "url": "Languages/HTML/HTML.html",
    "revision": "25a224b64e5be082fcacf4a2dcf50518"
  },
  {
    "url": "Languages/HTML/HTML5 Boilerplate/CSS.html",
    "revision": "77b8ae66f4721d03aa1ff3ec6793618c"
  },
  {
    "url": "Languages/HTML/HTML5 Boilerplate/Extend.html",
    "revision": "b7ff919e3ea6ab36a178d8dbf5d7e207"
  },
  {
    "url": "Languages/HTML/HTML5 Boilerplate/FAQ.html",
    "revision": "d433c46f14121b34ca82974a5a84c3af"
  },
  {
    "url": "Languages/HTML/HTML5 Boilerplate/HTML.html",
    "revision": "65fbc47834652434d5d27f50e48fd88b"
  },
  {
    "url": "Languages/HTML/HTML5 Boilerplate/index.html",
    "revision": "273cd58f96dd0c771176664d4c18fe3c"
  },
  {
    "url": "Languages/HTML/HTML5 Boilerplate/JavaScript.html",
    "revision": "e3d7eac3bbd859ab5f88fba997d71b72"
  },
  {
    "url": "Languages/HTML/HTML5 Boilerplate/Misc.html",
    "revision": "d67790bb0d015e229624746c4bcb9349"
  },
  {
    "url": "Languages/HTML/HTML5 Boilerplate/Usage.html",
    "revision": "6e7bc8946ab8559e7de2618288dca281"
  },
  {
    "url": "Languages/HTML/index.html",
    "revision": "4760e2e249b2deee35c35ffba3126c72"
  },
  {
    "url": "Languages/HTML/Notes.html",
    "revision": "7b6095bd06e0716d67b2a16a96c5be64"
  },
  {
    "url": "Languages/HTML/Typography/Typography.html",
    "revision": "0229ec21bb1ba431421a26e129f0d6f4"
  },
  {
    "url": "Languages/HTML/Typography/Variable Fonts.html",
    "revision": "99c3864fb74f472a7587bf19b5fea4cd"
  },
  {
    "url": "Languages/index.html",
    "revision": "c7d3d28c066332211f939e6755d4000f"
  },
  {
    "url": "Languages/JavaScript/Angular/Angular.html",
    "revision": "68ffaeeca879fc8765e26737b45b84b7"
  },
  {
    "url": "Languages/JavaScript/Gulp.JS/GulpJS.html",
    "revision": "9ddee242fb46d7698757742557313ce5"
  },
  {
    "url": "Languages/JavaScript/index.html",
    "revision": "8e9734b5c1ef66e0576f367d4fa45422"
  },
  {
    "url": "Languages/JavaScript/JavaScript - Copy.html",
    "revision": "09769befcc38c5373ddec9b2715caadc"
  },
  {
    "url": "Languages/JavaScript/JavaScript - Functional Programming.html",
    "revision": "1e5972056f1e5a6286f7c5c54d917b1f"
  },
  {
    "url": "Languages/JavaScript/JavaScript No FrameWorks.html",
    "revision": "c924cbbec1f0f7f8134e6bbf163f62c0"
  },
  {
    "url": "Languages/JavaScript/JavaScript Testing.html",
    "revision": "e263fd4bcc7851ec37370ed6903c58b5"
  },
  {
    "url": "Languages/JavaScript/JavaScript Udemy.html",
    "revision": "da72700a418eb09e5f707aa1a16e2f96"
  },
  {
    "url": "Languages/JavaScript/JavaScript-Functional-Programming.html",
    "revision": "dc0fd36603644329328b0c6bd1c31d5b"
  },
  {
    "url": "Languages/JavaScript/JavaScript.html",
    "revision": "4a623df26d7dc9094c11f3c12a0590c8"
  },
  {
    "url": "Languages/JavaScript/jQuery/jQuery.html",
    "revision": "da996b749303315e1368eb6a1a4fc3fe"
  },
  {
    "url": "Languages/JavaScript/Node.JS/index.html",
    "revision": "66cced2d3a4df404d754392d6e472868"
  },
  {
    "url": "Languages/JavaScript/Node.JS/NodeJS-Express-Handlebars Project.html",
    "revision": "3bbbc0cbf341396d8ba5c8fa369b285b"
  },
  {
    "url": "Languages/JavaScript/Node.JS/NodeJS.html",
    "revision": "5a2190443e52c1b1bacfefad8b825864"
  },
  {
    "url": "Languages/JavaScript/React.JS/ReactJS.html",
    "revision": "9625faae7eef63e351c6fb0807a5387d"
  },
  {
    "url": "Languages/JavaScript/TypeScript/TypeScript.html",
    "revision": "9ed2cff89978bee09bfb12e27eef298a"
  },
  {
    "url": "Languages/JavaScript/Vue.JS/VuePress.html",
    "revision": "7a55d035c4204755b6c1354337a3fd2f"
  },
  {
    "url": "Languages/JavaScript/Webpack/Webpack.html",
    "revision": "6b3130864f4cafd8121407d02bad9065"
  },
  {
    "url": "Languages/Markdown/Code.html",
    "revision": "4b29342c93a8ef14e06090baba51dbf1"
  },
  {
    "url": "Languages/Markdown/Heading.html",
    "revision": "377bdb9c497f25f9aeaa30ab6e196aa9"
  },
  {
    "url": "Languages/Markdown/Images.html",
    "revision": "9452ea0fff29af513075611cd219b366"
  },
  {
    "url": "Languages/Markdown/index.html",
    "revision": "2d86b7b93a78e9b180a87ad2ce72a80a"
  },
  {
    "url": "Languages/Markdown/Introduction.html",
    "revision": "9a807fc61c219a8e0f6856189efad6d4"
  },
  {
    "url": "Languages/Markdown/Links.html",
    "revision": "c2bb084e9c4fe74c0247b5cba2d7564c"
  },
  {
    "url": "Languages/Markdown/List.html",
    "revision": "c67a50665cb27abe08f0e513ae9f4c0a"
  },
  {
    "url": "Languages/Markdown/lorem-ipsum.html",
    "revision": "88b05c18c350a454d5f97193ea980782"
  },
  {
    "url": "Languages/Markdown/Markdown Reference.html",
    "revision": "5f9f1868a026c3cdcfbc1cf0951e5dce"
  },
  {
    "url": "Languages/Markdown/Tables.html",
    "revision": "6361a8e1a89cdae819083e1e9643ffc4"
  },
  {
    "url": "Languages/Python/Django/Django.html",
    "revision": "6bceb796b648f60b1244ff8f6eda66f5"
  },
  {
    "url": "Languages/Python/Flask/Flask.html",
    "revision": "6ccbf9ca9a16a1d83702709fee5c525c"
  },
  {
    "url": "Languages/Python/index.html",
    "revision": "b5a837ffbef1ac493e6298a345330bf8"
  },
  {
    "url": "Languages/Python/Python Design Patterns.html",
    "revision": "559ea2cb3d058d68c7f84f33a669f0ee"
  },
  {
    "url": "Languages/Python/Python.html",
    "revision": "0da1984d26a60a89017dcea400a69e4d"
  },
  {
    "url": "lego.png",
    "revision": "903dad2cebd2096624ed207d27e3fec0"
  },
  {
    "url": "logo.png",
    "revision": "69920942e58fdc5a4ab3b23393c4f984"
  },
  {
    "url": "markdown-logo.png",
    "revision": "d1a5a471090f23c99572487512ce06fe"
  },
  {
    "url": "markdown-logo.svg",
    "revision": "2c388e5eaa325fae9dde0dc3c4260b0c"
  },
  {
    "url": "Non-Sorted/Con cannot be used as name for files and folders in windows.html",
    "revision": "5805c0f717ffcfa516f7c256adbf752e"
  },
  {
    "url": "Non-Sorted/Dual Boot OS.html",
    "revision": "f099a8eed9f76f40a40a50c5c7a254cd"
  },
  {
    "url": "Non-Sorted/index.html",
    "revision": "6fe370e9170d7ad0dddabaeb8e991bb1"
  },
  {
    "url": "Non-Sorted/Manjaro Startup Settings.html",
    "revision": "f3a749fb7444c1ab3444015c37a6cdde"
  },
  {
    "url": "Non-Sorted/vsCode.html",
    "revision": "99bc11205f9ce0d6154f555cf14b49c4"
  },
  {
    "url": "open-book.svg",
    "revision": "8ec91a67a75f8bc2e2f5a19cd3944e74"
  },
  {
    "url": "programming-code.svg",
    "revision": "9c65d061fbdf45b56b43cf3be9ae964a"
  },
  {
    "url": "python-logo.png",
    "revision": "9a12dc02416262a57445cd328f32a82d"
  },
  {
    "url": "python-logo.svg",
    "revision": "1ba1a00b0004ec30d7b00325b4aca91f"
  },
  {
    "url": "react-logo.png",
    "revision": "b2f14791b3c523eb7d6006bba81f1029"
  },
  {
    "url": "react-logo.svg",
    "revision": "df23a7d86cfadcda4fc99cd589f68898"
  },
  {
    "url": "typescript-logo.png",
    "revision": "9d439c3d6904cf6411d8906877b15fac"
  },
  {
    "url": "typescript-logo.svg",
    "revision": "b81c42ea8de1ee51685777678652f759"
  },
  {
    "url": "vuejs-logo.png",
    "revision": "d96379f11821a80b2999e7b417b05471"
  },
  {
    "url": "vuejs-logo.svg",
    "revision": "9a45fc7689867939804c469bfcd17784"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
