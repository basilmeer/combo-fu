/* TEMPORARY SEEDER, DO NOT USE IN PROD */
const axios = require('axios');

const Android16 = '/images/dbfz/thumbnails/android_16.png';
const Android17 = '/images/dbfz/thumbnails/android_17.png';
const Android18 = '/images/dbfz/thumbnails/android_18.png';
const Android21 = '/images/dbfz/thumbnails/android_21.png';
const Bardock = '/images/dbfz/thumbnails/bardock.png';
const Beerus = '/images/dbfz/thumbnails/beerus.png';
const Broly = '/images/dbfz/thumbnails/broly.png';
const CaptainGinyu = '/images/dbfz/thumbnails/captain_ginyu.png';
const Cell = '/images/dbfz/thumbnails/cell.png';
const Cooler = '/images/dbfz/thumbnails/cooler.png';
const Frieza = '/images/dbfz/thumbnails/frieza.png';
const GogetaSSGSS = '/images/dbfz/thumbnails/gogeta_ssgss.png';
const SonGohanTeen = '/images/dbfz/thumbnails/gohan_teen.png';
const SonGohanAdult = '/images/dbfz/thumbnails/gohan_adult.png';
const GokuBase = '/images/dbfz/thumbnails/goku_base.png';
const GokuSS = '/images/dbfz/thumbnails/goku_ss.png';
const GokuSSGSS = '/images/dbfz/thumbnails/goku_ssgss.png';
const GokuGT = '/images/dbfz/thumbnails/goku_gt.png';
const GokuBlack = '/images/dbfz/thumbnails/goku_black.png';
const Gotenks = '/images/dbfz/thumbnails/gotenks.png';
const Hit = '/images/dbfz/thumbnails/hit.png';
const Janemba = '/images/dbfz/thumbnails/janemba.png';
const Jiren = '/images/dbfz/thumbnails/jiren.png';
const KidBuu = '/images/dbfz/thumbnails/kid_buu.png';
const Krillin = '/images/dbfz/thumbnails/krillin.png';
const MajinBuu = '/images/dbfz/thumbnails/majin_buu.png';
const Nappa = '/images/dbfz/thumbnails/nappa.png';
const Piccolo = '/images/dbfz/thumbnails/piccolo.png';
const TienShinhan = '/images/dbfz/thumbnails/tien_shinhan.png';
const Trunks = '/images/dbfz/thumbnails/trunks.png';
const VegetaBase = '/images/dbfz/thumbnails/vegeta_base.png';
const VegetaSS = '/images/dbfz/thumbnails/vegeta_ss.png';
const VegetaSSGSS = '/images/dbfz/thumbnails/vegeta_ssgss.png';
const VegitoSSGSS = '/images/dbfz/thumbnails/vegito_ssgss.png';
const Videl = '/images/dbfz/thumbnails/videl.png';
const Yamcha = '/images/dbfz/thumbnails/yamcha.png';
const ZamasuFused = '/images/dbfz/thumbnails/zamasu_fused.png';

/* const DBFZ_CHAR_LIST = {
  Android16: {
    name: "Android 16",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Android16,
    movelist: [],
    posted_by: "Bagul"
  },
  Android17: {
    name: "Android 17",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Android17,
    movelist: [],
    posted_by: "Bagul"
  },
  Android18: {
    name: "Android 18",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Android18,
    movelist: [],
    posted_by: "Bagul"
  },
  Android21: {
    name: "Android 21",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Android21,
    movelist: [],
    posted_by: "Bagul"
  },
  Bardock: {
    name: "Bardock",
    health: "10000",
    role: "Point, Middle",
    game: "Dragon Ball FighterZ",
    image: Bardock,
    movelist: [],
    posted_by: "Bagul"
  },
  Beerus: {
    name: "Beerus",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Beerus,
    movelist: [],
    posted_by: "Bagul"
  },
  Broly: {
    name: "Broly",
    health: "10000",
    role: "Point, Middle",
    game: "Dragon Ball FighterZ",
    image: Broly,
    movelist: [],
    posted_by: "Bagul"
  },
  CaptainGinyu: {
    name: "Captain Ginyu",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: CaptainGinyu,
    movelist: [],
    posted_by: "Bagul"
  },
  Cell: {
    name: "Cell",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Cell,
    movelist: [],
    posted_by: "Bagul"
  },
  Cooler: {
    name: "Cooler",
    health: "10000",
    role: "Point, Middle",
    game: "Dragon Ball FighterZ",
    image: Cooler,
    movelist: [],
    posted_by: "Bagul"
  },
  Frieza: {
    name: "Frieza",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Frieza,
    movelist: [],
    posted_by: "Bagul"
  },
  GogetaSSGSS: {
    name: "Gogeta (SSGSS)",
    health: "10000",
    role: "Point, Middle",
    game: "Dragon Ball FighterZ",
    image: GogetaSSGSS,
    movelist: [],
    posted_by: "Bagul"
  },
  SonGohanTeen: {
    name: "Son Gohan (Teen)",
    health: "10000",
    role: "Any",
    game: "Dragon Ball FighterZ",
    image: SonGohanTeen,
    movelist: [],
    posted_by: "Bagul"
  },
  SonGohanAdult: {
    name: "Son Gohan (Adult)",
    health: "10000",
    role: "Middle",
    game: "Dragon Ball FighterZ",
    image: SonGohanAdult,
    movelist: [],
    posted_by: "Bagul"
  },
  GokuBase: {
    name: "Goku (Base)",
    health: "10000",
    role: "Middle, Anchor",
    game: "Dragon Ball FighterZ",
    image: GokuBase,
    movelist: [],
    posted_by: "Bagul"
  },
  GokuSS: {
    name: "Goku (SS)",
    health: "10000",
    role: "Anchor",
    game: "Dragon Ball FighterZ",
    image: GokuSS,
    movelist: [],
    posted_by: "Bagul"
  },
  GokuSSGSS: {
    name: "Goku (SSGSS)",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: GokuSSGSS,
    movelist: [],
    posted_by: "Bagul"
  },
  GokuGT: {
    name: "Goku (GT)",
    health: "10000",
    role: "Middle, Anchor",
    game: "Dragon Ball FighterZ",
    image: GokuGT,
    movelist: [],
    posted_by: "Bagul"
  },
  GokuBlack: {
    name: "Goku Black",
    health: "10000",
    role: "Point, Anchor",
    game: "Dragon Ball FighterZ",
    image: GokuBlack,
    movelist: [],
    posted_by: "Bagul"
  },
  Gotenks: {
    name: "Gotenks",
    health: "10000",
    role: "Any",
    game: "Dragon Ball FighterZ",
    image: Gotenks,
    movelist: [],
    posted_by: "Bagul"
  },
  Hit: {
    name: "Hit",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Hit,
    movelist: [],
    posted_by: "Bagul"
  },
  Janemba: {
    name: "Janemba",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Janemba,
    movelist: [],
    posted_by: "Bagul"
  },
  Jiren: {
    name: "Jiren",
    health: "10000",
    role: "Middle",
    game: "Dragon Ball FighterZ",
    image: Jiren,
    movelist: [],
    posted_by: "Bagul"
  },
  KidBuu: {
    name: "Kid Buu",
    health: "10000",
    role: "Any",
    game: "Dragon Ball FighterZ",
    image: KidBuu,
    movelist: [],
    posted_by: "Bagul"
  },
  Krillin: {
    name: "Krillin",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Krillin,
    movelist: [],
    posted_by: "Bagul"
  },
  MajinBuu: {
    name: "Majin Buu",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: MajinBuu,
    movelist: [],
    posted_by: "Bagul"
  },
  Nappa: {
    name: "Nappa",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Nappa,
    movelist: [],
    posted_by: "Bagul"
  },
  Piccolo: {
    name: "Piccolo",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Piccolo,
    movelist: [],
    posted_by: "Bagul"
  },
  TienShinhan: {
    name: "Tien Shinhan",
    health: "10000",
    role: "Anchor",
    game: "Dragon Ball FighterZ",
    image: TienShinhan,
    movelist: [],
    posted_by: "Bagul"
  },
  Trunks: {
    name: "Trunks",
    health: "10000",
    role: "Anchor",
    game: "Dragon Ball FighterZ",
    image: Trunks,
    movelist: [],
    posted_by: "Bagul"
  },
  VegetaBase: {
    name: "Vegeta (Base)",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: VegetaBase,
    movelist: [],
    posted_by: "Bagul"
  },
  VegetaSS: {
    name: "Vegeta (SS)",
    health: "10000",
    role: "Anchor",
    game: "Dragon Ball FighterZ",
    image: VegetaSS,
    movelist: [],
    posted_by: "Bagul"
  },
  VegetaSSGSS: {
    name: "Vegeta (SSGSS)",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: VegetaSSGSS,
    movelist: [],
    posted_by: "Bagul"
  },
  VegitoSSGSS: {
    name: "Vegito (SSGSS)",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: VegitoSSGSS,
    movelist: [],
    posted_by: "Bagul"
  },
  Videl: {
    name: "Videl",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Videl,
    movelist: [],
    posted_by: "Bagul"
  },
  Yamcha: {
    name: "Yamcha",
    health: "10000",
    role: "Anchor",
    game: "Dragon Ball FighterZ",
    image: Yamcha,
    movelist: [],
    posted_by: "Bagul"
  },
  ZamasuFused: {
    name: "Zamasu (Fused)",
    health: "10000",
    role: "Point, Middle",
    game: "Dragon Ball FighterZ",
    image: ZamasuFused,
    movelist: [],
    posted_by: "Bagul"
  }
}; */

const DBFZ_CHAR_LIST = [
  {
    name: "Android 16",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Android16,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Android 17",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Android17,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Android 18",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Android18,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Android 21",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Android21,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Bardock",
    health: "10000",
    role: "Point, Middle",
    game: "Dragon Ball FighterZ",
    image: Bardock,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Beerus",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Beerus,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Broly",
    health: "10000",
    role: "Point, Middle",
    game: "Dragon Ball FighterZ",
    image: Broly,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Captain Ginyu",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: CaptainGinyu,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Cell",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Cell,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Cooler",
    health: "10000",
    role: "Point, Middle",
    game: "Dragon Ball FighterZ",
    image: Cooler,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Frieza",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Frieza,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Gogeta (SSGSS)",
    health: "10000",
    role: "Point, Middle",
    game: "Dragon Ball FighterZ",
    image: GogetaSSGSS,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Son Gohan (Teen)",
    health: "10000",
    role: "Any",
    game: "Dragon Ball FighterZ",
    image: SonGohanTeen,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Son Gohan (Adult)",
    health: "10000",
    role: "Middle",
    game: "Dragon Ball FighterZ",
    image: SonGohanAdult,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Goku (Base)",
    health: "10000",
    role: "Middle, Anchor",
    game: "Dragon Ball FighterZ",
    image: GokuBase,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Goku (SS)",
    health: "10000",
    role: "Anchor",
    game: "Dragon Ball FighterZ",
    image: GokuSS,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Goku (SSGSS)",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: GokuSSGSS,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Goku (GT)",
    health: "10000",
    role: "Middle, Anchor",
    game: "Dragon Ball FighterZ",
    image: GokuGT,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Goku Black",
    health: "10000",
    role: "Point, Anchor",
    game: "Dragon Ball FighterZ",
    image: GokuBlack,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Gotenks",
    health: "10000",
    role: "Any",
    game: "Dragon Ball FighterZ",
    image: Gotenks,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Hit",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Hit,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Janemba",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Janemba,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Jiren",
    health: "10000",
    role: "Middle",
    game: "Dragon Ball FighterZ",
    image: Jiren,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Kid Buu",
    health: "10000",
    role: "Any",
    game: "Dragon Ball FighterZ",
    image: KidBuu,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Krillin",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Krillin,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Majin Buu",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: MajinBuu,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Nappa",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Nappa,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Piccolo",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Piccolo,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Tien Shinhan",
    health: "10000",
    role: "Anchor",
    game: "Dragon Ball FighterZ",
    image: TienShinhan,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Trunks",
    health: "10000",
    role: "Anchor",
    game: "Dragon Ball FighterZ",
    image: Trunks,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Vegeta (Base)",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: VegetaBase,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Vegeta (SS)",
    health: "10000",
    role: "Anchor",
    game: "Dragon Ball FighterZ",
    image: VegetaSS,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Vegeta (SSGSS)",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: VegetaSSGSS,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Vegito (SSGSS)",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: VegitoSSGSS,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Videl",
    health: "10000",
    role: "Point",
    game: "Dragon Ball FighterZ",
    image: Videl,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Yamcha",
    health: "10000",
    role: "Anchor",
    game: "Dragon Ball FighterZ",
    image: Yamcha,
    movelist: [],
    posted_by: "Bagul"
  },
  {
    name: "Zamasu (Fused)",
    health: "10000",
    role: "Point, Middle",
    game: "Dragon Ball FighterZ",
    image: ZamasuFused,
    movelist: [],
    posted_by: "Bagul"
  }
];

DBFZ_CHAR_LIST.forEach((char, i) => {
  axios.post('http://localhost:5000/api/characters/', char)
    .then(res => console.log(res))
    .catch(err => console.log(err));
})

// console.log(DBFZ_CHAR_LIST["ZamasuFused"]);