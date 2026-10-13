import sourceData from "../data/periodic-table-source.json";
import {
  japaneseElementNames,
  simplifiedChineseElementNames,
} from "./element-names";

type SourceElement = {
  name: string;
  
  symbol: string;
  number: number;
  atomic_mass: number | null;
  category: string | null;
  period: number | null;
  group: number | null;
  xpos: number;
  ypos: number;
  phase: string | null;
  density: number | null;
  density_unit?: string | null;
  melt: number | null;
  boil: number | null;
  electron_configuration_semantic: string | null;
  electron_configuration: string | null;
  electronegativity_pauling: number | null;
  block: string | null;
  source: string | null;
  appearance: string | null;
  shells: number[] | null;
};

type SourceData = {
  elements: SourceElement[];
};

export type Element = {
  number: number;
  symbol: string;
  name: string;
  nameZh: string;
  nameZhHans: string;
  nameJa: string;
  atomicMass: number | null;
  category: string;
  categoryZh: string;
  period: number | null;
  group: number | null;
  xpos: number;
  ypos: number;
  phase: string;
  phaseZh: string;
  density: number | null;
  densityUnit: string | null;
  melt: number | null;
  boil: number | null;
  electronConfiguration: string | null;
  electronConfigurationFull: string | null;
  electronegativity: number | null;
  block: string | null;
  sourceUrl: string | null;
  appearance: string | null;
  shells: number[] | null;
};

const chineseNames: Record<string, string> = {
  H: "氫",
  He: "氦",
  Li: "鋰",
  Be: "鈹",
  B: "硼",
  C: "碳",
  N: "氮",
  O: "氧",
  F: "氟",
  Ne: "氖",
  Na: "鈉",
  Mg: "鎂",
  Al: "鋁",
  Si: "矽",
  P: "磷",
  S: "硫",
  Cl: "氯",
  Ar: "氬",
  K: "鉀",
  Ca: "鈣",
  Sc: "鈧",
  Ti: "鈦",
  V: "釩",
  Cr: "鉻",
  Mn: "錳",
  Fe: "鐵",
  Co: "鈷",
  Ni: "鎳",
  Cu: "銅",
  Zn: "鋅",
  Ga: "鎵",
  Ge: "鍺",
  As: "砷",
  Se: "硒",
  Br: "溴",
  Kr: "氪",
  Rb: "銣",
  Sr: "鍶",
  Y: "釔",
  Zr: "鋯",
  Nb: "鈮",
  Mo: "鉬",
  Tc: "鎝",
  Ru: "釕",
  Rh: "銠",
  Pd: "鈀",
  Ag: "銀",
  Cd: "鎘",
  In: "銦",
  Sn: "錫",
  Sb: "銻",
  Te: "碲",
  I: "碘",
  Xe: "氙",
  Cs: "銫",
  Ba: "鋇",
  La: "鑭",
  Ce: "鈰",
  Pr: "鐠",
  Nd: "釹",
  Pm: "鉕",
  Sm: "釤",
  Eu: "銪",
  Gd: "釓",
  Tb: "鋱",
  Dy: "鏑",
  Ho: "鈥",
  Er: "鉺",
  Tm: "銩",
  Yb: "鐿",
  Lu: "鎦",
  Hf: "鉿",
  Ta: "鉭",
  W: "鎢",
  Re: "錸",
  Os: "鋨",
  Ir: "銥",
  Pt: "鉑",
  Au: "金",
  Hg: "汞",
  Tl: "鉈",
  Pb: "鉛",
  Bi: "鉍",
  Po: "釙",
  At: "砈",
  Rn: "氡",
  Fr: "鍅",
  Ra: "鐳",
  Ac: "錒",
  Th: "釷",
  Pa: "鏷",
  U: "鈾",
  Np: "錼",
  Pu: "鈽",
  Am: "鋂",
  Cm: "鋦",
  Bk: "鉳",
  Cf: "鉲",
  Es: "鑀",
  Fm: "鐨",
  Md: "鍆",
  No: "鍩",
  Lr: "鐒",
  Rf: "鑪",
  Db: "𨧀",
  Sg: "𨭎",
  Bh: "𨨏",
  Hs: "𨭆",
  Mt: "䥑",
  Ds: "鐽",
  Rg: "錀",
  Cn: "鎶",
  Nh: "鉨",
  Fl: "鈇",
  Mc: "鏌",
  Lv: "鉝",
  Ts: "鿬",
  Og: "鿫",
};

const categoryLabels: Record<string, string> = {
  "alkali metal": "鹼金屬",
  "alkaline earth metal": "鹼土金屬",
  "transition metal": "過渡金屬",
  "post-transition metal": "後過渡金屬",
  metalloid: "類金屬",
  "polyatomic nonmetal": "多原子非金屬",
  "diatomic nonmetal": "雙原子非金屬",
  "noble gas": "惰性氣體",
  lanthanide: "鑭系元素",
  actinide: "錒系元素",
};

const normalizeCategory = (category: string | null) => {
  const value = (category ?? "").toLowerCase();

  if (value.includes("alkaline earth")) return "alkaline earth metal";
  if (value.includes("alkali metal")) return "alkali metal";
  if (value.includes("post-transition")) return "post-transition metal";
  if (value.includes("transition metal")) return "transition metal";
  if (value.includes("lanthanide")) return "lanthanide";
  if (value.includes("actinide")) return "actinide";
  if (value.includes("noble gas")) return "noble gas";
  if (value.includes("halogen")) return "diatomic nonmetal";
  if (value.includes("metalloid")) return "metalloid";
  if (value.includes("nonmetal")) return "polyatomic nonmetal";

  return "unknown";
};

const phaseLabels: Record<string, string> = {
  Solid: "固體",
  Liquid: "液體",
  Gas: "氣體",
};

const rawData = sourceData as SourceData;


export const elements: Element[] = rawData.elements
  .filter((element) => element.number >= 1 && element.number <= 118)
  .map((element) => ({
    number: element.number,
    symbol: element.symbol,
    name: element.name,
    nameZh: chineseNames[element.symbol] ?? element.name,
    nameZhHans:
      simplifiedChineseElementNames[element.symbol] ??
      chineseNames[element.symbol] ??
      element.name,
    nameJa: japaneseElementNames[element.symbol] ?? element.name,
    atomicMass: element.atomic_mass,
    category: normalizeCategory(element.category),
    categoryZh:
    categoryLabels[normalizeCategory(element.category)] ?? "未知／待確認",
    period: element.period,
    group: element.group,
    xpos: element.xpos,
    ypos: element.ypos,
    phase: element.phase ?? "Unknown",
    phaseZh: phaseLabels[element.phase ?? ""] ?? "未知",
    appearance: element.appearance,
    shells: element.shells,
    density: element.density,
    densityUnit: element.density_unit ?? null,
    melt: element.melt,
    boil: element.boil,
    electronConfiguration: element.electron_configuration_semantic,
    electronConfigurationFull: element.electron_configuration,
    electronegativity: element.electronegativity_pauling,
    block: element.block,
    sourceUrl: element.source,
  }))
  .sort((a, b) => a.number - b.number);

export const getElementBySymbol = (symbol: string) =>
  elements.find(
    (element) => element.symbol.toLocaleLowerCase() === symbol.toLocaleLowerCase()
  );

export const elementCategories = [
  ...new Set(elements.map((element) => element.category)),
];