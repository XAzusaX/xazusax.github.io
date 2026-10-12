export type ElementCompound = {
  formula: string;
  name: string;
  description: string;
};

export type ElementReaction = {
  equation: string;
  description: string;
  conditions?: string;
};

export type ElementSafetyNote = {
  level: "注意" | "警告" | "高風險";
  description: string;
};

export type ElementIsotope = {
  notation: string;
  use: string;
  description?: string;
};

export type ElementReliability = {
  level: "已實測資料" | "部分推定資料" | "理論預測";
  description: string;
};

export type ElementNote = {
  description: string;
  uses: string[];

  appearance?: string;
  lifeRole?: string;

  compounds?: ElementCompound[];
  reactions?: ElementReaction[];
  safety?: ElementSafetyNote[];
  isotopes?: ElementIsotope[];
  reliability?: ElementReliability;
};

export const elementNotes: Record<string, ElementNote> = {
    H: {
description: "氫是最輕且宇宙中含量最豐富的元素，常溫下為雙原子氣體。它是許多重要化合物的核心組成部分。",
uses: ["製造氨", "燃料電池", "火箭燃料"],
appearance: "常溫下為無色、無味的氣體。",
lifeRole: "氫是水與多數有機化合物的核心組成元素，在生命系統的結構與能量代謝中不可或缺。",
compounds: [
{
formula: "H₂O",
name: "水",
description: "由氫與氧組成，是生命與許多化學反應的重要介質。",
},
{
formula: "NH₃",
name: "氨",
description: "常用於製造肥料，也是重要的工業化學原料。",
},
],
reactions: [
{
equation: "2H₂ + O₂ → 2H₂O",
description: "氫氣與氧氣反應可生成水，並釋放出大量能量。",
conditions: "點燃",
},
],
safety: [
{
level: "高風險",
description: "氫氣極易燃，與空氣混合時可能形成危險的爆炸性混合物；不應在非專業環境自行製備或燃燒。",
},
],
isotopes: [
{
notation: "氘（²H／D）",
use: "核反應研究與同位素示蹤",
description: "氫的穩定同位素，常以重水形式應用於科學研究。",
},
{
notation: "氚（³H／T）",
use: "示蹤與核融合研究",
description: "具放射性的同位素，相關用途只適合受規範的專業環境。",
},
],
reliability: {
level: "已實測資料",
description: "氫的基礎性質、常見化合物與同位素資料皆為經過廣泛科學驗證的已實測資料。",
},
},
He: {
description: "氦是宇宙中含量第二豐富的元素，屬於惰性氣體。其化學性質極不活潑，在極低溫下具有特殊的超流體現象。",
uses: ["磁振造影（MRI）超導磁鐵冷卻", "氣球與飛船的浮升氣體", "深海潛水混合氣體"],
appearance: "常溫下為無色、無味的氣體。",
safety: [
{
level: "警告",
description: "氦氣本身無毒，但在密閉空間大量洩漏可能排擠氧氣，導致缺氧與窒息風險。",
},
],
isotopes: [
{
notation: "³He",
use: "極低溫物理研究",
description: "稀有的穩定同位素，廣泛應用於低溫冷卻與中子偵測器。",
},
{
notation: "⁴He",
use: "常見浮升與冷卻用途",
description: "自然界中最豐富的氦同位素，主要來自地底放射性衰變。",
},
],
reliability: {
level: "已實測資料",
description: "氦的物理性質與惰性特徵皆為廣泛應用的已實測資料。",
},
},
Li: {
description: "鋰是最輕的金屬元素，屬於鹼金屬，質地柔軟且極易氧化。它在現代電池技術與合金材料中扮演關鍵角色。",
uses: ["鋰離子電池", "航太高強度鋁合金", "精神科藥物（以鋰鹽形式）"],
appearance: "常溫下為銀白色金屬，切開後迅速與空氣反應變暗。",
lifeRole: "鋰金屬單質對人體有毒且不存在於體內；醫學上使用的是微量鋰離子（Li⁺），可幫助穩定神經遞質與情緒。",
compounds: [
{
formula: "Li₂CO₃",
name: "碳酸鋰",
description: "常作為精神科治療用藥，也可用於陶瓷與玻璃工業。",
},
{
formula: "LiCoO₂",
name: "鈷酸鋰",
description: "常見的鋰離子電池正極材料。",
},
],
reactions: [
{
equation: "2Li + 2H₂O → 2LiOH + H₂",
description: "鋰金屬遇水會發生劇烈反應，生成鹼性的氫氧化鋰與氫氣。",
},
],
safety: [
{
level: "高風險",
description: "鋰金屬遇水或空氣中水分會劇烈反應並產生易燃的氫氣；不應自行操作。",
},
],
isotopes: [
{
notation: "⁶Li",
use: "核工業材料",
description: "可用於吸收中子或作為熱核融合的原料。",
},
],
reliability: {
level: "已實測資料",
description: "鋰的化學反應性與化合物性質皆有大量已實測資料支持。",
},
},
Be: {
description: "鈹是一種灰白色的鹼土金屬，質輕、高強度且具備高熔點。由於其粉塵具有劇毒性，應用範圍多受限於專業工業與國防。",
uses: ["X射線管的穿透窗口", "航太與國防高剛性合金", "核子反應爐的中子反射體"],
appearance: "常溫下為堅硬的灰白色金屬。",
compounds: [
{
formula: "BeO",
name: "氧化鈹",
description: "具有極佳導熱性與優異電絕緣性的高溫陶瓷材料。",
},
],
safety: [
{
level: "高風險",
description: "鈹粉塵或煙霧吸入會引起嚴重的慢性鈹肺病（Berylliosis）；應僅在嚴格工安規範下處理。",
},
],
reliability: {
level: "已實測資料",
description: "鈹的物理性質與毒性作用皆具備權威機構的已實測資料。",
},
},
B: {
description: "硼是一種硬度極高的類金屬元素，在自然界中常以硼酸鹽形式存在。它在材料科學與半導體領域具有獨特價值。",
uses: ["製造硼矽酸鹽耐熱玻璃", "半導體P型摻雜物", "核子反應爐控制棒"],
appearance: "結晶態為黑色或銀灰色堅硬固體，無定形態為棕色粉末。",
lifeRole: "硼單質在人體內無已知功能；但在植物生長中，硼酸鹽是細胞壁發育所必需的微量營養素。",
compounds: [
{
formula: "H₃BO₃",
name: "硼酸",
description: "常見的溫和消毒劑，也用於控制蟑螂等蟲害。",
},
{
formula: "B₂O₃",
name: "氧化硼",
description: "製造高強度玻璃與特殊陶瓷的重要原料。",
},
],
isotopes: [
{
notation: "¹⁰B",
use: "中子吸收劑",
description: "具有極高的熱中子吸收截面，廣泛應用於核反應爐控制。",
},
],
reliability: {
level: "已實測資料",
description: "硼的各項物理與化學數據均為廣泛驗證的已實測資料。",
},
},
C: {
description: "碳是地球上所有已知生命體的基礎元素，能夠形成數量龐大且結構複雜的有機化合物。它在自然界擁有石墨與鑽石等物理性質迥異的同素異形體。",
uses: ["鋼鐵與合金冶煉", "聚合物與塑膠工業", "碳-14放射性同位素定年法"],
appearance: "常溫下為固態，常見形式為黑色的石墨粉末或無色透明的鑽石結晶。",
lifeRole: "碳是生命體中蛋白質、脂質、醣類與核酸的骨架核心元素。",
compounds: [
{
formula: "CO₂",
name: "二氧化碳",
description: "動植物呼吸作用的產物，也是植物進行光合作用的碳源。",
},
{
formula: "CH₄",
name: "甲烷",
description: "天然氣的主要成分，也是一種強效的溫室氣體。",
},
],
reactions: [
{
equation: "C + O₂ → CO₂",
description: "碳在氧氣中完全燃燒會生成二氧化碳，並釋出熱能。",
conditions: "點燃",
},
],
isotopes: [
{
notation: "¹²C",
use: "質譜與原子量標準",
description: "最豐富的穩定同位素，被作為原子量定義的基準。",
},
{
notation: "¹⁴C",
use: "放射性定年",
description: "微量存在於自然界的放射性同位素，用於測定考古遺物的年代。",
},
],
reliability: {
level: "已實測資料",
description: "碳的性質與其同素異形體結構均為科學界深入研究的已實測資料。",
},
},
N: {
description: "氮是地球大氣中含量最多的元素，常溫下以極為穩定的雙原子氣體分子存在。它是許多工業化學品與生命分子的重要組成。",
uses: ["哈柏法合成氨", "食品包裝與工業惰性環境", "液態氮低溫冷凍技術"],
appearance: "常溫下為無色、無味的氣體。",
lifeRole: "人體無法直接吸收空氣中的氮氣單質；必須透過飲食攝取蛋白質與胺基酸，以取得構成DNA與蛋白質的關鍵氮元素。",
compounds: [
{
formula: "NH₃",
name: "氨",
description: "重要的人造化學品，主要用於製造氮肥與硝酸。",
},
{
formula: "HNO₃",
name: "硝酸",
description: "具強氧化性的強酸，用於製造炸藥、肥料與化學合成。",
},
],
reactions: [
{
equation: "N₂ + 3H₂ ⇌ 2NH₃",
description: "氮氣與氫氣在極端條件下可合成氨，是現代農業肥料的基礎（哈柏法）。",
conditions: "高溫高壓與催化劑",
},
],
safety: [
{
level: "警告",
description: "氮氣本身無毒，但在密閉空間累積會造成缺氧窒息；液態氮極低溫，接觸可能造成嚴重凍傷。",
},
],
isotopes: [
{
notation: "¹⁵N",
use: "農業與生物學示蹤劑",
description: "穩定的重同位素，常用於追蹤氮在生態系統與人體代謝中的途徑。",
},
],
reliability: {
level: "已實測資料",
description: "氮氣的物理化學性質及反應途徑皆為有百年驗證的已實測資料。",
},
},
O: {
description: "氧是地殼中含量最豐富的元素，也是化學性質極為活潑的非金屬。它對於絕大多數地球生物的細胞呼吸至關重要。",
uses: ["醫療與高空供氧", "鋼鐵冶煉", "火箭推進劑的氧化劑"],
appearance: "常溫下為無色、無味的氣體；液態氧則呈淡藍色。",
lifeRole: "氧氣（O₂）被吸入肺部後與血紅素結合，參與細胞有氧呼吸產生能量；氧也是水分子（H₂O）的組成，佔人體重量的大半。",
compounds: [
{
formula: "H₂O",
name: "水",
description: "地球表面最常見的化合物，支持所有已知生命系統的運作。",
},
{
formula: "O₃",
name: "臭氧",
description: "氧的同素異形體，在平流層可吸收紫外線，在地面則是空氣污染物。",
},
],
reactions: [
{
equation: "2Mg + O₂ → 2MgO",
description: "活潑金屬如鎂在氧氣中燃燒，會發出強烈白光並生成固態氧化物。",
conditions: "點燃",
},
],
safety: [
{
level: "注意",
description: "氧氣本身不燃燒，但高濃度氧氣會強烈助燃，接觸油脂或火源極易引發猛烈火災。",
},
],
isotopes: [
{
notation: "¹⁸O",
use: "古氣候與水文研究",
description: "穩定的重同位素，常透過冰芯與海洋沉積物比例來推算古代氣溫。",
},
],
reliability: {
level: "已實測資料",
description: "氧的助燃性、生物學功能及物理常數皆具備確鑿的已實測資料。",
},
},
F: {
description: "氟是電負度最高、化學反應性最強的鹵素元素。在自然界中幾乎不以單質存在，多以氟化物礦物形式出現。",
uses: ["製造鐵氟龍（聚四氟乙烯）", "核工業提煉與濃縮鈾", "牙膏防蛀（以氟化物形式）"],
appearance: "常溫下為淡黃色、具強烈刺鼻臭味的氣體。",
lifeRole: "氟氣單質具有劇毒；微量的氟離子（F⁻）能與牙齒琺瑯質結合形成氟磷灰石，幫助抵抗蛀牙，骨骼中亦含有微量氟化物。",
compounds: [
{
formula: "HF",
name: "氫氟酸",
description: "弱酸但具強烈腐蝕性與透皮毒性，常應用於玻璃蝕刻與半導體製程。",
},
{
formula: "NaF",
name: "氟化鈉",
description: "常見的自來水加氟與牙膏防蛀添加物。",
},
],
reactions: [
{
equation: "H₂ + F₂ → 2HF",
description: "氟氣極其活潑，即使在極低溫與暗處，也能與氫氣發生爆炸性反應生成氟化氫。",
},
],
safety: [
{
level: "高風險",
description: "氟氣與氫氟酸具劇毒且腐蝕性極強，與多數物質接觸均會發生劇烈反應；絕對不應自行操作。",
},
],
isotopes: [
{
notation: "¹⁹F",
use: "核磁共振（NMR）光譜學",
description: "唯一的天然穩定同位素，因核自旋特性被廣泛用於結構化學分析。",
},
],
reliability: {
level: "已實測資料",
description: "氟的極高反應性與化合物毒性皆有完備的工安與實測資料。",
},
},
Ne: {
description: "氖是一種極為惰性的單原子氣體元素。它在宇宙中相對豐富，但在地球大氣中含量稀少，在真空管中通電會發出特有的紅橙色光輝。",
uses: ["霓虹燈與廣告招牌", "氦氖雷射技術", "極低溫冷凍冷卻劑"],
appearance: "常溫下為無色、無味的氣體；通電激發時發出明亮的紅橙色光。",
safety: [
{
level: "注意",
description: "氖氣為無毒的惰性氣體，但在密閉環境中高濃度釋放，可能會排擠氧氣而引發缺氧窒息。",
},
],
isotopes: [
{
notation: "²⁰Ne",
use: "基礎物理研究",
description: "自然界中最豐富的氖同位素。",
},
],
reliability: {
level: "已實測資料",
description: "氖的物理、熱力學與光學特性皆為物理學界廣泛應用的已實測資料。",
},
},
Na: {
description: "鈉是一種柔軟的銀白色鹼金屬，化學性質極為活潑。在自然界中從不以單質存在，而是以化合物形式廣泛分佈。",
uses: ["核子反應爐的液態金屬冷卻劑", "製造路燈的高壓鈉氣燈", "化學合成與冶金工業的還原劑"],
appearance: "常溫下為質軟的銀白色金屬，切開後接觸空氣會迅速氧化失去光澤。",
lifeRole: "鈉金屬單質遇水會發生爆炸；人體與生物界依賴的是鈉離子（Na⁺），它負責調節細胞內外水分平衡及神經脈衝的傳導。",
compounds: [
{
formula: "NaCl",
name: "氯化鈉",
description: "俗稱食鹽，是人類飲食必需品與最重要的化學工業原料之一。",
},
{
formula: "NaOH",
name: "氫氧化鈉",
description: "強鹼性物質，俗稱苛性鈉，廣泛用於製造肥皂、紙張與清潔劑。",
},
],
reactions: [
{
equation: "2Na + 2H₂O → 2NaOH + H₂",
description: "鈉金屬遇水會劇烈反應生成氫氣與氫氧化鈉，並放出大量熱能，常導致生成的氫氣燃燒甚至爆炸。",
},
],
safety: [
{
level: "高風險",
description: "鈉金屬單質接觸水氣或空氣會劇烈反應並起火；必須保存在礦物油或惰性氣體中，絕不應自行操作。",
},
],
isotopes: [
{
notation: "²³Na",
use: "核磁共振研究與日常穩定元素",
description: "自然界中唯一存在的穩定同位素，構成了所有天然鈉化合物。",
},
],
reliability: {
level: "已實測資料",
description: "鈉的各項熱力學數據、化學性質與生理功能皆具備完備的科學實測資料。",
},
},
Mg: {
description: "鎂是一種輕質的銀白色鹼土金屬。它具有優異的強度重量比，不僅是重要的工程材料，也是地球生命系統不可或缺的元素。",
uses: ["航太與汽車工業的輕量合金", "煙火與照明彈的發光劑", "製造耐火材料"],
appearance: "常溫下為堅固的銀白色金屬。",
lifeRole: "鎂是葉綠素分子的核心元素，使植物能進行光合作用；在人體中，鎂離子（Mg²⁺）參與超過數百種酵素反應與能量代謝。",
compounds: [
{
formula: "MgO",
name: "氧化鎂",
description: "極耐高溫的固體，常作為高爐與熔爐的內襯材料。",
},
{
formula: "MgSO₄",
name: "硫酸鎂",
description: "俗稱瀉鹽，廣泛用於農業肥料與醫療用途。",
},
],
reactions: [
{
equation: "2Mg + O₂ → 2MgO",
description: "鎂在高溫下與氧氣反應，燃燒並發出耀眼的強烈白光。",
conditions: "點燃",
},
],
safety: [
{
level: "警告",
description: "粉末狀或帶狀的鎂金屬極易點燃，燃燒時溫度極高且發出強光；不能使用水或二氧化碳滅火器撲滅鎂火災。",
},
],
isotopes: [
{
notation: "²⁴Mg",
use: "生化研究基準",
description: "鎂最豐富的穩定同位素，佔自然界鎂的七成以上。",
},
],
reliability: {
level: "已實測資料",
description: "鎂的物理特性、燃燒現象及生物代謝機制均有詳細且權威的實測資料。",
},
},
Al: {
description: "鋁是地殼中含量最豐富的金屬元素。由於其低密度且表面易生成緻密氧化膜而抗腐蝕，它是現代工業最重要的金屬之一。",
uses: ["飛機與運輸工具結構", "飲料罐與食品包裝箔", "高壓輸電線路"],
appearance: "常溫下為柔軟、具有光澤的銀白色金屬。",
lifeRole: "鋁單質與離子在人體及生物系統中無已知的生理功能；過量的鋁離子（Al³⁺）甚至可能對植物及神經系統產生毒性。",
compounds: [
{
formula: "Al₂O₃",
name: "氧化鋁",
description: "硬度極高的化合物，是藍寶石與紅寶石的主要成分，也是磨料與耐火材料的原料。",
},
{
formula: "KAl(SO₄)₂·12H₂O",
name: "明礬",
description: "傳統用於淨水處理、皮革鞣製及食品工業。",
},
],
reactions: [
{
equation: "4Al + 3O₂ → 2Al₂O₃",
description: "鋁在空氣中極易與氧氣結合，表面生成緻密的氧化鋁薄膜，從而阻擋進一步氧化。",
},
],
safety: [
{
level: "注意",
description: "大塊鋁金屬極為安全，但極細微的鋁粉末懸浮於空氣中可能引發粉塵爆炸。",
},
],
isotopes: [
{
notation: "²⁷Al",
use: "核磁共振研究與工業應用",
description: "自然界唯一存在的穩定同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鋁的工程數據、化學性質與環境影響皆具備長期、大量的實測資料。",
},
},
Si: {
description: "矽是一種具有半導體特性的類金屬，是地殼中含量第二豐富的元素。它是現代電子工業與電腦科技的基石。",
uses: ["半導體晶片與微電子元件", "太陽能電池", "製造玻璃、水泥與陶瓷"],
appearance: "常溫下純矽呈現帶有金屬光澤的暗灰色或藍灰色結晶固體。",
lifeRole: "人體對矽的需求極微；但部分植物與海綿、矽藻等生物會大量利用二氧化矽（SiO₂）來建構堅硬的結構與外殼。",
compounds: [
{
formula: "SiO₂",
name: "二氧化矽",
description: "自然界常見為石英與沙子，是製造玻璃的主要原料，也是地殼的主要成分。",
},
{
formula: "SiC",
name: "碳化矽",
description: "硬度極高的人造材料，用於磨料與高功率半導體元件。",
},
],
safety: [
{
level: "警告",
description: "固態矽本身無毒，但在採礦、切割或加工過程中產生的結晶游離二氧化矽粉塵，長期吸入可能導致矽肺症（一種嚴重的肺部疾病）。",
},
],
isotopes: [
{
notation: "²⁸Si",
use: "精密測量與半導體研究",
description: "矽最常見的穩定同位素，曾被用於製作定義公斤的完美矽晶球。",
},
],
reliability: {
level: "已實測資料",
description: "矽的晶體結構、電學特性及二氧化矽毒理學均有極為豐富的實測資料。",
},
},
P: {
description: "磷是一種高反應性的非金屬元素，在自然界中從不以單質存在。它具有多種同素異形體，最常見的為白磷與紅磷。",
uses: ["製造農業用磷肥", "火柴盒側面的摩擦面（紅磷）", "半導體N型摻雜物"],
appearance: "白磷為具有蒜味的蠟狀白色或微黃色半透明固體；紅磷為暗紅色粉末。",
lifeRole: "磷是細胞中DNA與RNA骨架的核心元素，並以ATP（三磷酸腺苷）的形式主導生物體內的能量傳遞，同時也是骨骼磷酸鈣的重要成分。",
compounds: [
{
formula: "H₃PO₄",
name: "磷酸",
description: "重要的化學原料，廣泛用於製造肥料、食品添加劑及除鏽劑。",
},
{
formula: "Ca₃(PO₄)₂",
name: "磷酸鈣",
description: "構成脊椎動物骨骼與牙齒的主要無機礦物成分。",
},
],
reactions: [
{
equation: "P₄ + 5O₂ → P₄O₁₀",
description: "白磷在室溫下極易與空氣中的氧氣反應自燃，生成白色的十氧化四磷煙霧。",
},
],
safety: [
{
level: "高風險",
description: "白磷具有劇毒且在空氣中會自燃，造成嚴重的化學性燒傷；處理磷化學品需高度專業規範，絕對不應自行操作。",
},
],
isotopes: [
{
notation: "³¹P",
use: "核磁共振（NMR）分析與生化研究",
description: "唯一的天然穩定同位素，其核自旋特性非常適合用於生化代謝路徑追蹤。",
},
],
reliability: {
level: "已實測資料",
description: "磷的同素異形體特性、燃燒現象及生化功能皆有完備的實測資料。",
},
},
S: {
description: "硫是一種多產的黃色非金屬元素，在自然界中常以火山口附近的單質或硫化物礦物形式存在。它在化學工業與生物體系中均扮演關鍵角色。",
uses: ["製造硫酸", "橡膠硫化製程（提升輪胎耐用度）", "農業殺菌劑與肥料生產"],
appearance: "常溫下為鮮黃色、無氣味的脆性質輕固體結晶。",
lifeRole: "單質硫無毒但人體無法直接吸收；生命體依賴含硫胺基酸（如半胱胺酸）來建構蛋白質的立體結構與維護正常代謝。",
compounds: [
{
formula: "H₂SO₄",
name: "硫酸",
description: "被譽為「化學工業之母」，是世界上產量最大的強酸，廣泛用於肥料與電池工業。",
},
{
formula: "H₂S",
name: "硫化氫",
description: "具有強烈腐臭雞蛋氣味的氣體，劇毒且易燃，常見於火山氣體與有機物腐敗。",
},
],
reactions: [
{
equation: "S + O₂ → SO₂",
description: "硫在空氣中燃燒發出藍色火焰，生成具有強烈刺激性氣味的二氧化硫氣體。",
conditions: "點燃",
},
],
safety: [
{
level: "高風險",
description: "燃燒硫磺會產生有毒的二氧化硫氣體，嚴重刺激呼吸道；多數硫化物氣體亦具劇毒，不應在通風不良處或非專業環境自行操作。",
},
],
isotopes: [
{
notation: "³²S",
use: "地質與宇宙化學研究",
description: "自然界中最豐富的硫同位素。",
},
{
notation: "³⁴S",
use: "生態學示蹤劑",
description: "穩定的重同位素，常透過硫同位素比例追蹤古環境與食物鏈。",
},
],
reliability: {
level: "已實測資料",
description: "硫的燃燒產物、化合物毒理與生物學角色皆具備明確的科學實測資料。",
},
},
Cl: {
description: "氯是一種極具反應性的鹵素元素。它是一種強氧化劑，廣泛應用於全球的消毒與化工合成製程中。",
uses: ["自來水與游泳池消毒", "製造聚氯乙烯（PVC）塑膠", "醫藥與農藥合成"],
appearance: "常溫下為黃綠色、具有強烈窒息性氣味的氣體。",
lifeRole: "氯氣單質劇毒；但氯離子（Cl⁻）在人體中與鈉離子共同維持細胞外液的滲透壓與水分平衡，並構成胃酸（鹽酸）。",
compounds: [
{
formula: "NaCl",
name: "氯化鈉",
description: "自然界最常見的氯化合物，為人體所需鹽分與工業電解製氯的原料。",
},
{
formula: "HCl",
name: "氯化氫（鹽酸）",
description: "溶於水後形成強酸，廣泛用於金屬除鏽與工業清洗。",
},
],
reactions: [
{
equation: "H₂ + Cl₂ → 2HCl",
description: "氯氣與氫氣混合後，在強光照射或點火下會發生爆炸性反應生成氯化氫氣體。",
conditions: "光照或點燃",
},
],
safety: [
{
level: "高風險",
description: "氯氣為具高度腐蝕性與毒性的化學武器級氣體，吸入會嚴重損害肺部甚至致命；絕對不應自行混合含氯漂白水與酸類清潔劑。",
},
],
isotopes: [
{
notation: "³⁵Cl",
use: "化學分析基準",
description: "自然界中豐度最高的氯同位素，約佔四分之三比例。",
},
{
notation: "³⁷Cl",
use: "環境化學追蹤",
description: "穩定的重同位素，與³⁵Cl的比例常被用於質譜分析與地下水污染源追溯。",
},
],
reliability: {
level: "已實測資料",
description: "氯氣的毒性、漂白作用與工業化學性質皆有極為詳細的實測與歷史紀錄資料。",
},
},
Ar: {
description: "氬是一種極為安定的單原子惰性氣體，也是地球大氣中含量第三豐富的氣體（約佔0.93%）。它在一般情況下不參與化學反應。",
uses: ["電銲的保護氣體（防止金屬高溫氧化）", "白熾燈與螢光燈的填充氣體", "半導體晶圓製造的惰性環境"],
appearance: "常溫下為無色、無味的氣體。",
safety: [
{
level: "警告",
description: "氬氣完全無毒，但比重較空氣重，若在密閉空間或深坑中大量洩漏會沉積於底部，排擠氧氣而造成無預警的缺氧窒息危險。",
},
],
isotopes: [
{
notation: "⁴⁰Ar",
use: "地質年代測定",
description: "鉀-氬定年法中的關鍵同位素，用於測定岩石與隕石的年齡。",
},
],
reliability: {
level: "已實測資料",
description: "氬氣的物理惰性、熱力學表現與同位素定年應用均有豐富的已實測資料。",
},
},
K: {
description: "鉀是一種極為活潑的銀白色鹼金屬。在自然界中從不以單質存在，多以礦物或海水中溶解的鹽類形式廣泛分佈。",
uses: ["製造農業用鉀肥", "工業用氫氧化鉀與肥皂", "實驗室的強還原劑"],
appearance: "常溫下為質軟的銀白色金屬，切開後接觸空氣會迅速氧化失去光澤。",
lifeRole: "鉀金屬單質遇水會發生劇烈爆炸；人體與植物依賴的是鉀離子（K⁺），它在細胞內負責維持滲透壓、神經傳導與肌肉收縮。",
compounds: [
{
formula: "KCl",
name: "氯化鉀",
description: "最常見的鉀肥，也常用於醫療上補充血鉀。",
},
{
formula: "KNO₃",
name: "硝酸鉀",
description: "重要的肥料，也是傳統黑火藥的主要成分。",
},
],
reactions: [
{
equation: "2K + 2H₂O → 2KOH + H₂",
description: "鉀金屬遇水會劇烈反應生成氫氣，放出的高熱會直接點燃甚至引爆產生的氫氣。",
},
],
safety: [
{
level: "高風險",
description: "鉀金屬極易與水、空氣中的氧氣及水分發生劇烈反應並引發火災甚至爆炸；必須保存在礦物油中，絕不應自行操作。",
},
],
isotopes: [
{
notation: "⁴⁰K",
use: "地質定年與自然放射源",
description: "存在於自然界的微量放射性同位素，是岩石與人體內天然背景輻射的主要來源之一。",
},
],
reliability: {
level: "已實測資料",
description: "鉀的化學反應性、生理功能與同位素特性皆具備豐富且完備的科學實測資料。",
},
},
Ca: {
description: "鈣是一種銀灰色的鹼土金屬，化學性質相當活潑。它是地殼中第五豐富的元素，也是多數生物體結構的重要基石。",
uses: ["冶煉其他金屬的還原劑", "製造水泥與建築材料（以化合物形式）", "鋼鐵與合金的脫氧劑"],
appearance: "常溫下為質地較硬的銀灰色金屬。",
lifeRole: "單質鈣具有腐蝕性且不存在於生物體；人體利用的是鈣離子（Ca²⁺）來傳遞神經訊號，並以磷酸鈣化合物形式建構骨骼與牙齒。",
compounds: [
{
formula: "CaCO₃",
name: "碳酸鈣",
description: "石灰岩、大理石與貝殼的主要成分，常用於建築與補鈣劑。",
},
{
formula: "CaO",
name: "氧化鈣",
description: "俗稱生石灰，遇水會放出大量熱能生成熟石灰，廣泛用於工業與建築。",
},
],
reactions: [
{
equation: "Ca + 2H₂O → Ca(OH)₂ + H₂",
description: "鈣金屬會與水發生反應，穩定釋放出氫氣並生成微溶於水的氫氧化鈣鹼性溶液。",
},
],
safety: [
{
level: "警告",
description: "鈣金屬單質接觸水或濕氣會產生易燃的氫氣與具腐蝕性的鹼液，應避免皮膚直接接觸並妥善存放。",
},
],
isotopes: [
{
notation: "⁴⁰Ca",
use: "核物理研究",
description: "自然界最豐沛的鈣穩定同位素，約佔地球上天然鈣的97%。",
},
],
reliability: {
level: "已實測資料",
description: "鈣的晶體結構、反應熱力學及生物醫學資料皆為權威機構的已實測資料。",
},
},
Sc: {
description: "鈧是一種質輕的銀白色過渡金屬，屬於稀土元素。雖然在地殼中分布廣泛，但極少富集，因此提煉困難且價格相對昂貴。",
uses: ["製造航太級鈧鋁合金", "高強度運動器材（如自行車架）", "金屬鹵素燈的發光添加劑"],
appearance: "常溫下為銀白色金屬，暴露在空氣中會逐漸氧化呈現微黃色或粉紅色光澤。",
compounds: [
{
formula: "Sc₂O₃",
name: "氧化鈧",
description: "提煉鈧金屬與製造高效能固態雷射的重要原料。",
},
],
safety: [
{
level: "注意",
description: "鈧金屬單質無明顯毒性，但極細微的鈧粉末在空氣中具有易燃性。",
},
],
reliability: {
level: "已實測資料",
description: "鈧的冶金特性與合金應用數據均為現代材料科學的已實測資料。",
},
},
Ti: {
description: "鈦是一種堅硬、質輕且耐腐蝕的銀灰色過渡金屬。它具有極高的強度重量比，在嚴苛環境中表現出優異的化學穩定性。",
uses: ["航太機身與引擎部件", "人工關節與植牙體", "製造白色顏料（以二氧化鈦形式）"],
appearance: "常溫下為帶有金屬光澤的銀灰色金屬。",
lifeRole: "鈦金屬對人體完全無毒且具備極佳的生物相容性，免疫系統幾乎不會對其產生排斥，因此成為醫療植入物的首選。",
compounds: [
{
formula: "TiO₂",
name: "二氧化鈦",
description: "極為穩定的白色粉末，廣泛應用於防曬乳、油漆與食品添加劑中。",
},
{
formula: "TiCl₄",
name: "四氯化鈦",
description: "提煉純鈦的中間產物，接觸潮濕空氣會產生濃烈的白色煙霧，可用於製造煙幕。",
},
],
reactions: [
{
equation: "Ti + O₂ → TiO₂",
description: "鈦在高溫下極易與空氣中的氧結合，但在常溫下表面生成的緻密氧化膜能防止其進一步腐蝕。",
},
],
safety: [
{
level: "注意",
description: "大塊鈦金屬極為安全，但極細的鈦金屬粉末極易點燃，且燃燒溫度極高，難以用常規滅火器撲滅。",
},
],
isotopes: [
{
notation: "⁴⁸Ti",
use: "材料科學與物理研究",
description: "自然界最常見的鈦同位素，佔超過七成。",
},
],
reliability: {
level: "已實測資料",
description: "鈦的物理強度、耐腐蝕特性及生物相容性均有大量的醫療與工業實測資料。",
},
},
V: {
description: "釩是一種質地堅硬、具延展性的銀灰色過渡金屬。它主要作為合金添加劑，能顯著提升鋼鐵的強度與韌性。",
uses: ["製造高強度合金鋼與工具鋼", "硫酸工業中的觸媒（以氧化物形式）", "釩氧化還原液流電池"],
appearance: "常溫下為具有光澤的銀灰色金屬。",
compounds: [
{
formula: "V₂O₅",
name: "五氧化二釩",
description: "劇毒化合物，是接觸法製造硫酸過程中不可或缺的催化劑。",
},
],
safety: [
{
level: "警告",
description: "釩金屬單質相對安全，但釩的多數化合物（特別是粉塵）具有強烈毒性，吸入會嚴重刺激呼吸道。",
},
],
isotopes: [
{
notation: "⁵¹V",
use: "核磁共振與材料分析",
description: "佔自然界99.7%以上的穩定同位素。",
},
],
reliability: {
level: "已實測資料",
description: "釩的冶金效果與化合物毒理皆具備成熟的工業與醫學實測資料。",
},
},
Cr: {
description: "鉻是一種堅硬、高熔點且具有閃亮光澤的過渡金屬。它的名稱源自希臘文的「顏色」，因為其化合物色彩極為豐富。",
uses: ["製造不鏽鋼", "金屬表面鍍鉻以防鏽與裝飾", "皮革鞣製與工業顏料"],
appearance: "常溫下為帶有極高光澤的堅硬銀灰色金屬。",
lifeRole: "三價鉻離子（Cr³⁺）是人體代謝糖分與脂質所需的微量元素；但六價鉻（Cr⁶⁺）化合物對生物體具有劇毒及強烈致癌性。",
compounds: [
{
formula: "Cr₂O₃",
name: "氧化鉻(III)",
description: "綠色固體，常作為顏料與研磨劑，相對穩定且毒性較低。",
},
{
formula: "K₂Cr₂O₇",
name: "重鉻酸鉀",
description: "強氧化劑，呈現鮮豔的橘紅色，具劇毒及致癌性。",
},
],
safety: [
{
level: "高風險",
description: "鉻金屬本身無毒，但工業製程中產生的六價鉻粉塵或溶液具有強烈毒性與致癌性，嚴禁隨意排放與無防護接觸。",
},
],
isotopes: [
{
notation: "⁵²Cr",
use: "環境化學與生物代謝研究",
description: "自然界中最豐沛的鉻同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鉻的冶金應用及六價鉻的毒理學與致癌性皆有極為明確的實測資料。",
},
},
Mn: {
description: "錳是一種質硬而脆的銀灰色過渡金屬。它在自然界中常與鐵礦伴生，是鋼鐵工業中不可或缺的脫氧與合金劑。",
uses: ["製造高錳耐磨鋼材（如鐵軌、保險箱）", "乾電池與鹼性電池的去極化劑", "鋁合金工業的添加劑"],
appearance: "常溫下為帶有些微粉紅色澤的銀灰色金屬，質地堅脆。",
lifeRole: "微量的錳離子（Mn²⁺）是多種人體酵素（如抗氧化酵素）運作所必需的輔因子；但過量攝取會損害中樞神經系統。",
compounds: [
{
formula: "MnO₂",
name: "二氧化錳",
description: "黑色粉末，廣泛應用於碳鋅電池中，也是實驗室中製造氧氣的常見催化劑。",
},
{
formula: "KMnO₄",
name: "高錳酸鉀",
description: "紫黑色的強氧化劑結晶，溶於水呈紫紅色，常用於醫藥消毒與水處理。",
},
],
safety: [
{
level: "警告",
description: "長期暴露或吸入錳金屬與其化合物的粉塵，會導致嚴重的不可逆神經性疾病（錳中毒）。",
},
],
isotopes: [
{
notation: "⁵⁵Mn",
use: "核磁共振與材料科學",
description: "自然界唯一存在的穩定同位素。",
},
],
reliability: {
level: "已實測資料",
description: "錳的合金效能、催化機制及神經毒性皆有長期累積的實測資料。",
},
},
Fe: {
description: "鐵是地球上質量最豐富的元素，也是人類使用最廣泛的過渡金屬。它具有強磁性，且極易與氧氣和水分反應生鏽。",
uses: ["建築用的鋼筋與結構鋼", "製造汽車與船艦的鋼板", "鑄鐵鍋具與各類機械工具"],
appearance: "常溫下純鐵為柔軟的銀灰色金屬，但日常見到的鐵多為含有碳的堅硬合金。",
lifeRole: "純鐵金屬無生物功能；但亞鐵離子（Fe²⁺）與鐵離子（Fe³⁺）是人體紅血球血紅素的核心，負責在體內運送氧氣。",
compounds: [
{
formula: "Fe₂O₃",
name: "氧化鐵(III)",
description: "紅褐色粉末，俗稱鐵鏽，也是重要的鐵礦石（赤鐵礦）成分。",
},
{
formula: "FeCl₃",
name: "氯化鐵(III)",
description: "呈棕黃色的強酸性鹽類，常用於污水處理與印刷電路板的蝕刻。",
},
],
reactions: [
{
equation: "4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃",
description: "鐵在潮濕空氣中極易氧化，生成疏鬆多孔的氫氧化鐵與氧化鐵混合物（即生鏽），無法阻擋內部繼續腐蝕。",
},
],
safety: [
{
level: "注意",
description: "大塊鐵金屬無毒且安全，但鐵鏽與泥土混合若造成穿刺傷，容易引發破傷風細菌感染；過量攝取鐵劑則會引起急性中毒。",
},
],
isotopes: [
{
notation: "⁵⁶Fe",
use: "核子天文學研究",
description: "宇宙中最穩定的核種之一，是恆星核融合反應的最終產物。",
},
],
reliability: {
level: "已實測資料",
description: "鐵的冶金學、磁性物理與生化代謝路徑皆為人類最熟悉的實測資料。",
},
},
Co: {
description: "鈷是一種堅硬、具有磁性的銀灰色過渡金屬。它在極端溫度下仍能保持高強度與磁性，是高科技產業的關鍵戰略金屬。",
uses: ["鋰離子電池的正極材料", "航空燃氣渦輪引擎的超級合金", "製造高硬度切削工具"],
appearance: "常溫下為具有亮澤的銀灰色金屬，帶有些微淡藍色調。",
lifeRole: "鈷離子是維生素B12（鈷胺素）的中心原子，對人體神經系統健康及紅血球的生成至關重要。",
compounds: [
{
formula: "CoCl₂",
name: "氯化鈷",
description: "無水時呈藍色，吸水後變為粉紅色，常被用作乾燥劑中的濕度指示劑。",
},
{
formula: "LiCoO₂",
name: "鈷酸鋰",
description: "廣泛應用於智慧型手機與電動車電池中的儲能化學材料。",
},
],
safety: [
{
level: "警告",
description: "過量接觸鈷粉塵可能引起嚴重的呼吸道疾病與皮膚過敏；某些人工放射性同位素則具有強烈輻射危害。",
},
],
isotopes: [
{
notation: "⁶⁰Co",
use: "醫療放射治療與工業探傷",
description: "具有強烈伽瑪射線的放射性同位素，廣泛用於癌症放療與食品殺菌。",
},
],
reliability: {
level: "已實測資料",
description: "鈷的合金性能、電池化學反應與生物學功能皆具備高度可靠的實測資料。",
},
},
Ni: {
description: "鎳是一種堅硬、具延展性且高度抗腐蝕的銀白色過渡金屬。它在空氣中極為穩定，常作為保護性鍍層或合金成分。",
uses: ["製造不鏽鋼（與鐵、鉻形成合金）", "金屬表面的防鏽鍍鎳", "硬幣製造與充電電池（鎳氫電池）"],
appearance: "常溫下為帶有些微金色光澤的銀白色金屬。",
lifeRole: "微量鎳是某些植物與微生物必需的元素；但在人體中沒有已知的必要生理功能，反而常引發接觸性過敏。",
compounds: [
{
formula: "NiO",
name: "氧化鎳",
description: "綠色至黑色的粉末，廣泛應用於陶瓷釉料與鎳系電池製造。",
},
{
formula: "NiCl₂",
name: "氯化鎳",
description: "易溶於水的黃色或綠色結晶，是電鍍鎳製程中的主要化學品。",
},
],
safety: [
{
level: "注意",
description: "鎳金屬是常見的接觸性過敏原（如劣質飾品引發的皮膚炎）；某些鎳化合物粉塵若長期吸入具致癌風險。",
},
],
isotopes: [
{
notation: "⁵⁸Ni",
use: "中子探測與核反應研究",
description: "自然界中最豐富的鎳同位素，約佔三分之二。",
},
],
reliability: {
level: "已實測資料",
description: "鎳的冶金學、電化學與毒理學均有長期的科學與工業實測資料。",
},
},
Cu: {
description: "銅是一種呈現紅橙色金屬光澤的過渡金屬，具有極佳的導電性與導熱性。它是人類最早冶煉與使用的金屬之一。",
uses: ["電線與電氣設備", "水管與建築材料", "製造青銅與黃銅合金"],
appearance: "常溫下為呈現紅橙色光澤的柔軟金屬。",
lifeRole: "銅金屬單質無毒，但微量銅離子（Cu²⁺）是多種人體酵素的核心輔因子；若攝取過量可溶性銅鹽則會引發重金屬中毒。",
compounds: [
{
formula: "CuO",
name: "氧化銅",
description: "黑色固體，常作為玻璃與陶瓷的顏料。",
},
{
formula: "CuSO₄",
name: "硫酸銅",
description: "藍色結晶，廣泛用於農業殺菌劑、電鍍工業與實驗室試劑。",
},
],
reactions: [
{
equation: "2Cu + O₂ → 2CuO",
description: "銅在高溫下與空氣中的氧氣緩慢反應，表面會失去光澤並生成黑色的氧化銅。",
conditions: "加熱",
},
],
safety: [
{
level: "注意",
description: "固體銅金屬十分安全，但攝入過量可溶性銅鹽會強烈刺激腸胃並導致急性重金屬中毒。",
},
],
isotopes: [
{
notation: "⁶³Cu",
use: "核磁共振研究",
description: "自然界中最常見的穩定同位素，佔近七成。",
},
],
reliability: {
level: "已實測資料",
description: "銅的導電物理性質、化學反應性及生物學作用均為歷史悠久且完善的已實測資料。",
},
},
Zn: {
description: "鋅是一種帶有微藍色澤的銀白色過渡金屬。它在空氣中容易形成緻密氧化層，常作為保護鐵防鏽的犧牲陽極。",
uses: ["鋼鐵表面的防鏽鍍鋅", "製造黃銅（與銅的合金）", "乾電池的外殼與負極"],
appearance: "常溫下為帶有微藍灰色光澤的金屬。",
lifeRole: "鋅單質無生物功能，但鋅離子（Zn²⁺）是人體免疫系統與DNA合成不可或缺的微量元素，存在於數百種酵素中。",
compounds: [
{
formula: "ZnO",
name: "氧化鋅",
description: "白色粉末，廣泛應用於防曬乳、橡膠添加劑與醫療藥膏。",
},
{
formula: "ZnS",
name: "硫化鋅",
description: "具有螢光特性的白色或微黃色固體，用於發光塗料與螢光幕。",
},
],
reactions: [
{
equation: "Zn + 2HCl → ZnCl₂ + H₂",
description: "鋅金屬能與稀酸（如鹽酸）反應，置換出酸中的氫，產生易燃的氫氣。",
},
],
safety: [
{
level: "注意",
description: "鋅金屬本身安全，但在高溫焊接或熔煉時吸入產生的氧化鋅煙霧，會引發金屬煙熱（一種急性呼吸道症狀）。",
},
],
isotopes: [
{
notation: "⁶⁴Zn",
use: "生化與醫學追蹤",
description: "自然界豐度最高的鋅穩定同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鋅的電化學防鏽特性、合金配方及生物酵素機制皆具備高度可靠的實測資料。",
},
},
Ga: {
description: "鎵是一種銀白色的貧金屬，具有異常低的熔點，甚至能在人類的手掌心融化。它在現代高頻電子與光電半導體中扮演關鍵角色。",
uses: ["製造微波與高頻通訊半導體（砷化鎵）", "高亮度藍光與白光LED", "高溫溫度計的填充金屬"],
appearance: "常溫下為銀白色金屬，稍微加熱（約29.7°C）即融化為液態。",
lifeRole: "人體中沒有鎵的自然生理功能，但某些放射性鎵同位素化合物被用於醫學腫瘤造影。",
compounds: [
{
formula: "GaAs",
name: "砷化鎵",
description: "重要的半導體材料，電子遷移率比矽高，廣泛用於高頻與無線通訊。",
},
{
formula: "GaN",
name: "氮化鎵",
description: "新世代寬能隙半導體，用於高效能充電器與藍光雷射二極體。",
},
],
reactions: [
{
equation: "2Ga + 6HCl → 2GaCl₃ + 3H₂",
description: "鎵可與鹽酸反應，生成氯化鎵並釋放出氫氣。",
},
],
safety: [
{
level: "注意",
description: "鎵對人體多數無毒，但液態鎵會嚴重滲透並腐蝕鋁金屬，破壞其結構強度，絕對不應攜帶上飛機。",
},
],
isotopes: [
{
notation: "⁶⁷Ga",
use: "醫學造影",
description: "具有放射性的同位素，常被用作核醫學中的發炎與腫瘤定位追蹤劑。",
},
],
reliability: {
level: "已實測資料",
description: "鎵的低熔點特性、半導體電學表現及合金腐蝕現象皆有完備的實測資料。",
},
},
Ge: {
description: "鍺是一種灰白色的類金屬，質脆且具有半導體特性。它是早期電晶體的核心材料，現今主要應用於光學與特殊電子元件。",
uses: ["光纖通訊網路的核心摻雜物", "紅外線夜視儀的鏡片材料", "太陽能電池與特殊半導體"],
appearance: "常溫下為具有金屬光澤的灰白色固體結晶。",
lifeRole: "鍺在生物體中沒有已知的必需生理功能；儘管曾有保健食品宣稱其功效，但攝入無機鍺化合物對人體具有腎臟毒性。",
compounds: [
{
formula: "GeO₂",
name: "二氧化鍺",
description: "具有高折射率與紅外線穿透性的光學材料，廣泛用於製造光纖與廣角鏡頭。",
},
],
safety: [
{
level: "警告",
description: "某些無機鍺化合物若被當作保健食品長期或大量服用，會導致不可逆的嚴重腎衰竭。",
},
],
isotopes: [
{
notation: "⁷²Ge",
use: "基礎物理與半導體研究",
description: "穩定的同位素，佔天然鍺的兩成以上。",
},
],
reliability: {
level: "已實測資料",
description: "鍺的半導體特性、光學折射率與腎臟毒性皆具備明確的實測資料。",
},
},
As: {
description: "砷是一種劇毒的類金屬元素，在自然界中以多種同素異形體存在。儘管其毒性惡名昭彰，它在現代半導體工業中卻是不可或缺的摻雜材料。",
uses: ["半導體N型摻雜與砷化鎵晶圓", "木材防腐劑（歷史用途，多數已禁用）", "鉛酸電池的合金添加物"],
appearance: "常見的灰砷在常溫下為具有金屬光澤的銀灰色脆性固體。",
lifeRole: "砷及多數砷化合物對絕大多數生物體具有劇毒及致癌性，會嚴重干擾細胞能量代謝的關鍵酵素。",
compounds: [
{
formula: "As₂O₃",
name: "三氧化二砷",
description: "俗稱砒霜，白色無味的劇毒粉末，歷史上曾被廣泛用作毒藥，現今在嚴格控制下用於治療特定白血病。",
},
{
formula: "GaAs",
name: "砷化鎵",
description: "高速電子元件與光電晶體的重要材料，化學結構極為穩定。",
},
],
reactions: [
{
equation: "4As + 3O₂ → 2As₂O₃",
description: "砷在空氣中加熱會燃燒，散發出刺鼻大蒜味的劇毒白煙（三氧化二砷）。",
conditions: "加熱",
},
],
safety: [
{
level: "高風險",
description: "砷及其多數化合物具有劇毒且為一級致癌物，吸入或攝入微量即可致命；必須在嚴格防護下處理，不應自行操作。",
},
],
isotopes: [
{
notation: "⁷⁵As",
use: "核磁共振與半導體摻雜",
description: "自然界唯一存在的穩定砷同位素。",
},
],
reliability: {
level: "已實測資料",
description: "砷的化學反應、化合物劇毒性與半導體應用皆有長期的工安與科學實測資料。",
},
},
Se: {
description: "硒是一種非金屬（或類金屬）元素，具有獨特的光電導性，即在光照下導電能力會大幅提升。它在微量與過量之間對生命的影響呈現兩極化。",
uses: ["影印機與雷射印表機的感光鼓", "玻璃工業中的脫色劑與紅寶石玻璃發色劑", "整流器與光電池"],
appearance: "最穩定的同素異形體為常溫下呈現金屬光澤的灰色固體，另有紅色的粉末狀態。",
lifeRole: "微量硒離子是人體抗氧化酵素（如穀胱甘肽過氧化物酶）的核心；但攝取過量無機硒會導致硒中毒，引起脫髮、神經損傷與蒜味呼吸。",
compounds: [
{
formula: "SeO₂",
name: "二氧化硒",
description: "重要的氧化劑，常用於有機化學合成與電鍍工業，具有高毒性。",
},
],
reactions: [
{
equation: "Se + O₂ → SeO₂",
description: "硒在空氣中燃燒發出藍色火焰，生成具有強烈腐敗蘿蔔氣味的二氧化硒有毒氣體。",
conditions: "點燃",
},
],
safety: [
{
level: "警告",
description: "硒單質相對安全，但其多數化合物具有高毒性與刺激性，工業處理時應嚴格防護以免吸入粉塵或氣體。",
},
],
isotopes: [
{
notation: "⁸⁰Se",
use: "同位素地球化學追蹤",
description: "自然界最豐富的穩定同位素，佔近半數。",
},
],
reliability: {
level: "已實測資料",
description: "硒的光電特性、生物學微量必需性與過量中毒機制皆有完備的實測資料。",
},
},
Br: {
description: "溴是常溫下唯一呈現液態的非金屬元素。它屬於鹵素，具有極高的反應性、強烈的腐蝕性與刺鼻的惡臭氣味。",
uses: ["製造阻燃劑", "水處理與游泳池消毒（作為氯的替代品）", "有機合成與農化產品製造"],
appearance: "常溫下為深紅棕色、不斷冒出刺激性紅棕色蒸氣的沉重液體。",
lifeRole: "有研究指出極微量的溴離子（Br⁻）可能參與動物膠原蛋白的合成；但攝入過量無機溴化物會嚴重抑制中樞神經系統（溴中毒）。",
compounds: [
{
formula: "AgBr",
name: "溴化銀",
description: "對光極為敏感的淡黃色固體，是傳統黑白與彩色攝影底片的核心感光材料。",
},
{
formula: "NaBr",
name: "溴化鈉",
description: "歷史上曾作為醫學鎮靜劑，現今常用於石油探勘的鑽井液。",
},
],
reactions: [
{
equation: "2Na + Br₂ → 2NaBr",
description: "溴與鹼金屬（如鈉）接觸會發生劇烈反應甚至爆炸，生成白色的溴化物鹽類固體。",
},
],
safety: [
{
level: "高風險",
description: "液態溴極易揮發，其紅棕色蒸氣對呼吸道與眼睛黏膜具有強烈破壞性與毒性；液體接觸皮膚會造成嚴重且難以癒合的化學灼傷，絕對不應自行操作。",
},
],
isotopes: [
{
notation: "⁷⁹Br",
use: "質譜分析結構判定",
description: "與⁸¹Br的自然豐度幾乎為1:1，是化學結構質譜分析中極具辨識度的特徵。",
},
],
reliability: {
level: "已實測資料",
description: "溴的揮發性、強烈腐蝕性與感光化合物機制皆有極為詳細的化學與工安實測資料。",
},
},
Kr: {
description: "氪是一種無色、無臭、無味的惰性氣體元素，在地球大氣中的含量極為稀少。通電後它能發出強烈的白光，常用於特種照明與雷射技術。",
uses: ["高頻閃光燈與高速攝影照明", "雙層玻璃窗的隔熱填充氣體", "氪氟（KrF）準分子雷射（用於半導體光刻）"],
appearance: "常溫下為無色、無味的氣體；通電激發時會發出明亮的淡白色或微綠色光輝。",
safety: [
{
level: "警告",
description: "氪氣本身完全無毒且化學性質極度惰性，但在密閉空間或低窪處大量釋放會排擠氧氣，導致無預警的窒息危險。",
},
],
isotopes: [
{
notation: "⁸⁴Kr",
use: "地球與大氣科學追蹤",
description: "自然界最豐富的氪同位素，佔近六成比例。",
},
{
notation: "⁸¹Kr",
use: "古地下水定年",
description: "極微量的放射性同位素，被用於測定深層地下水的年代。",
},
],
reliability: {
level: "已實測資料",
description: "氪的物理光譜、熱力學隔熱特性及放射性同位素定年皆為精密物理學的已實測資料。",
},
},
Rb: {
description: "銣是一種極為柔軟、化學性質極為活潑的銀白色鹼金屬。在空氣中會迅速氧化甚至自燃。",
uses: ["特殊玻璃製造", "光電池與光電倍增管", "高精度原子鐘"],
appearance: "常溫下為質軟的銀白色金屬，暴露空氣中會迅速氧化失去光澤並可能自燃。",
lifeRole: "銣單質遇水會劇烈爆炸；銣離子（Rb⁺）在人體內無已知功能，但化學性質類似鉀，可被人體微量吸收與代謝。",
compounds: [
{
formula: "RbCl",
name: "氯化銣",
description: "常被用於生物化學研究中作為生物標記或追蹤劑。",
},
],
reactions: [
{
equation: "2Rb + 2H₂O → 2RbOH + H₂",
description: "銣金屬遇水會發生極度猛烈的爆炸反應，生成氫氧化銣並點燃或引爆釋放出的氫氣。",
},
],
safety: [
{
level: "高風險",
description: "銣金屬極易與水、空氣中的氧氣及水分發生劇烈反應並引發爆炸燃燒；必須保存在真空或惰性氣體中，絕不應自行操作。",
},
],
isotopes: [
{
notation: "⁸⁷Rb",
use: "地質定年",
description: "微具放射性的同位素，銣-鍶定年法常被用於測定古老岩石的年齡。",
},
],
reliability: {
level: "已實測資料",
description: "銣的極高反應性、熱力學數據與同位素特性皆有完備的實測資料。",
},
},
Sr: {
description: "鍶是一種柔軟的銀黃色鹼土金屬，化學性質相當活潑。它在燃燒時會發出極為鮮豔的深紅色火焰。",
uses: ["製造紅色煙火與信號彈", "鐵氧體磁鐵添加劑", "醫學上鍶同位素應用於骨癌治療"],
appearance: "常溫下為帶有些微黃色的銀灰色金屬，切開後接觸空氣會迅速氧化。",
lifeRole: "鍶離子的化學性質類似鈣，少量會積聚在人體骨骼中且多數無害；但核爆炸產生的放射性同位素（鍶-90）極具危險性，會引發骨癌。",
compounds: [
{
formula: "SrCO₃",
name: "碳酸鍶",
description: "最常見的鍶化合物之一，廣泛用於製造煙火的紅色發光劑。",
},
],
reactions: [
{
equation: "Sr + 2H₂O → Sr(OH)₂ + H₂",
description: "鍶與水會發生反應，生成氫氧化鍶的鹼性溶液並釋放出易燃的氫氣。",
},
],
safety: [
{
level: "注意",
description: "鍶金屬單質易與空氣及水分反應起火；其人工放射性同位素為高度危險的核廢料。",
},
],
isotopes: [
{
notation: "⁹⁰Sr",
use: "同位素熱電機與工業測厚儀",
description: "核分裂的危險產物，因其能積聚於骨骼中，是核災中危害最大的放射性核種之一。",
},
],
reliability: {
level: "已實測資料",
description: "鍶的光譜特性、化學反應性及放射毒理學皆有豐富的已實測資料。",
},
},
Y: {
description: "釔是一種銀白色的過渡金屬，通常與稀土元素伴生。它是現代光電科技、雷射技術與高溫超導體的重要基礎材料。",
uses: ["製造高溫超導材料（如YBCO）", "白色LED與電視螢光粉", "高強度鎂合金添加物"],
appearance: "常溫下為具有金屬光澤的銀灰色金屬。",
compounds: [
{
formula: "Y₃Al₅O₁₂",
name: "釔鋁石榴石（YAG）",
description: "重要的人造晶體材料，常摻雜其他元素用於固態雷射器（如Nd:YAG雷射）。",
},
{
formula: "YBa₂Cu₃O₇",
name: "釔鋇銅氧（YBCO）",
description: "著名的高溫超導體材料，可在液態氮溫度下實現超導現象。",
},
],
safety: [
{
level: "注意",
description: "釔金屬塊狀相對安全，但其粉末在空氣中極易點燃；過量吸入釔化合物粉塵可能損害肺部。",
},
],
reliability: {
level: "已實測資料",
description: "釔的光學、磁性與超導電學物理數據均為物理與材料科學界廣泛驗證的已實測資料。",
},
},
Zr: {
description: "鋯是一種堅硬、灰白色的過渡金屬，具有極佳的抗腐蝕性與極低的中子吸收截面。這使其成為核能工業中不可或缺的材料。",
uses: ["核子反應爐的鈾燃料棒外殼", "航太與化工高溫抗腐蝕合金", "人造鑽石（立方氧化鋯）與陶瓷牙冠"],
appearance: "常溫下為極為堅硬的灰白色金屬。",
compounds: [
{
formula: "ZrO₂",
name: "二氧化鋯",
description: "耐高溫且極為堅硬的白色固體，廣泛用於高級陶瓷材料與廉價的鑽石替代品。",
},
],
safety: [
{
level: "注意",
description: "固體鋯金屬完全無毒且極其穩定，但在機械加工過程中產生的細微鋯粉末極易在空氣中自燃爆炸。",
},
],
reliability: {
level: "已實測資料",
description: "鋯的抗腐蝕數據、核物理特性及耐高溫表現皆有完備的實測資料。",
},
},
Nb: {
description: "鈮是一種質軟、灰色的延展性過渡金屬。它具有優異的低溫超導特性，且能顯著增強鋼鐵的強度與耐熱性。",
uses: ["粒子加速器與核磁共振的超導磁鐵", "航太火箭引擎耐熱合金", "高級不鏽鋼與管線鋼的強化添加物"],
appearance: "常溫下為具有光澤的灰色金屬，表面氧化後會呈現極美麗的不同干涉色。",
compounds: [
{
formula: "Nb₃Sn",
name: "錫化鈮",
description: "極其重要的超導化合物，廣泛用於製造產生強磁場的超導線圈。",
},
],
safety: [
{
level: "注意",
description: "鈮金屬本身安全無毒，但多數鈮化合物具刺激性，處理粉塵時應佩戴防護裝備。",
},
],
reliability: {
level: "已實測資料",
description: "鈮的冶金強化效果與超導轉變溫度等皆具備權威機構的已實測資料。",
},
},
Mo: {
description: "鉬是一種極高熔點的銀灰色過渡金屬。它在工業合金與生物圈的氮代謝機制中，都扮演著關鍵且不可替代的角色。",
uses: ["製造高強度抗腐蝕合金鋼", "煉油工業的脫硫催化劑", "高溫爐的電極與發熱元件"],
appearance: "常溫下為極堅硬的銀灰色金屬。",
lifeRole: "鉬離子是動植物與人體內多種關鍵酵素（如固氮酶與黃嘌呤氧化酶）所必需的微量核心元素，缺乏會影響代謝。",
compounds: [
{
formula: "MoS₂",
name: "二硫化鉬",
description: "呈黑色的層狀固體，是極佳的高溫與真空環境固體潤滑劑。",
},
],
isotopes: [
{
notation: "⁹⁹Mo",
use: "醫學同位素製造",
description: "具有放射性，是核醫學中最常用放射源「鎝-99m」的母體核種。",
},
],
reliability: {
level: "已實測資料",
description: "鉬的冶金特性、高溫物理與生物酵素活性機制均有高度可靠的實測資料。",
},
},
Tc: {
description: "鎝是元素週期表中第一個完全由人工合成或放射性衰變產生的元素。自然界中幾乎不存在，其所有同位素皆具放射性。",
uses: ["醫學影像診斷（心肌與骨骼造影）", "鋼鐵防鏽研究的極微量添加劑", "科學研究示蹤劑"],
appearance: "常溫下為銀灰色金屬，但在實驗室外極少製成肉眼可見的單質塊狀。",
lifeRole: "人工合成的放射性鎝（鎝-99m）化合物被廣泛注射入人體用於核醫學造影，因其半衰期短，在幾天內就會從體內代謝並衰變完畢。",
compounds: [
{
formula: "NaTcO₄",
name: "高鎝酸鈉",
description: "用於醫學注射與防腐蝕研究中的可溶性放射性鹽類。",
},
],
safety: [
{
level: "高風險",
description: "鎝的所有型態均具有放射性危險，僅能在具備輻射防護裝備的核醫學或放射化學實驗室中操作。",
},
],
isotopes: [
{
notation: "⁹⁹ᵐTc",
use: "核子醫學造影",
description: "釋放純伽瑪射線且半衰期僅六小時，是全球醫學影像診斷中最廣泛使用的放射性同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鎝的放射性衰變數據、醫學造影效果皆具備詳盡且高度規範的科學實測資料。",
},
},
Ru: {
description: "釕是一種堅硬、稀有且質脆的銀白色鉑族金屬。它主要作為合金硬化劑以及電子工業中的耐磨接點材料。",
uses: ["硬碟磁性儲存層的微量塗層", "鉑與鈀金屬合金的硬化劑", "太陽能電池中的化學染料與催化劑"],
appearance: "常溫下為質地堅硬、易碎裂的銀白色金屬。",
compounds: [
{
formula: "RuO₄",
name: "四氧化釕",
description: "極易揮發且具有劇毒的強氧化劑，主要用於電子顯微鏡生物樣本的染色與固定。",
},
],
safety: [
{
level: "警告",
description: "金屬釕相對穩定且安全，但其高氧化態化合物（如四氧化釕蒸氣）具有劇毒，會強烈刺激眼睛與呼吸道。",
},
],
reliability: {
level: "已實測資料",
description: "釕的金屬特性、合金應用與化合物毒理皆有明確的化學實測資料。",
},
},
Rh: {
description: "銠是一種極其稀有、昂貴的銀白色鉑族金屬。它具有卓越的抗腐蝕性與強大的催化能力。",
uses: ["汽車排氣系統的觸媒轉化器", "高級珠寶與銀器的抗氧化亮面鍍層", "工業硝酸與化學品合成催化劑"],
appearance: "常溫下為具有強烈光澤的銀白色堅硬金屬。",
compounds: [
{
formula: "RhCl₃",
name: "氯化銠",
description: "製備其他銠均相催化劑的重要化學起點物質。",
},
],
safety: [
{
level: "注意",
description: "固態銠金屬無毒且極度穩定，但其化合物粉塵或氣溶膠具有強烈刺激性，部分甚至被懷疑具致癌性。",
},
],
isotopes: [
{
notation: "¹⁰³Rh",
use: "工業與科學研究",
description: "自然界唯一存在的銠穩定同位素。",
},
],
reliability: {
level: "已實測資料",
description: "銠的光學反射率、催化轉化效能與化學穩定性皆有充足的實測資料。",
},
},
Pd: {
description: "鈀是一種柔軟、閃亮的銀白色鉑族金屬。它對氫氣具有驚人的吸收能力，是汽車觸媒與電子產業的關鍵材料。",
uses: ["汽車排氣系統觸媒轉化器", "多層陶瓷電容器（MLCC）", "珠寶製造（俗稱的白K金合金成分）"],
appearance: "常溫下為柔軟、具有極佳延展性的銀白色金屬。",
reactions: [
{
equation: "Pd + H₂ ⇌ PdHₓ",
description: "鈀金屬能像海綿一樣吸收高達自身體積數百倍的氫氣，並在受熱時釋出，這使其成為提純氫氣的完美薄膜材料。",
conditions: "常溫加壓與加熱",
},
],
safety: [
{
level: "注意",
description: "大塊鈀金屬極為安全，但在催化劑形態下的高比表面積鈀粉末若吸滿氫氣，接觸空氣極易發生自燃或爆炸。",
},
],
isotopes: [
{
notation: "¹⁰⁶Pd",
use: "穩定元素存在形式",
description: "自然界中六種鈀的穩定同位素中豐度最高的一種。",
},
],
reliability: {
level: "已實測資料",
description: "鈀的氫氣吸收熱力學、催化效率與材料特性皆為高度完備的已實測資料。",
},
},
Ag: {
description: "銀是一種柔軟、具有極高光澤的白色過渡金屬。在所有金屬中，它擁有最高的導電率、導熱率與可見光反射率。",
uses: ["太陽能電池與電子元件的導電漿", "高級珠寶與餐具製造", "醫療抗菌與敷料材料"],
appearance: "常溫下為極具光澤的銀白色柔軟金屬，長時間暴露於含硫空氣會變黑。",
lifeRole: "銀金屬對人體沒有任何已知的生理功能；但銀離子（Ag⁺）能穿透多數細菌的細胞壁並破壞其酵素系統，具有極強的廣效抗菌作用。",
compounds: [
{
formula: "AgBr",
name: "溴化銀",
description: "對光極為敏感的淡黃色固體，是傳統黑白底片與X光攝影的感光材料。",
},
{
formula: "AgNO₃",
name: "硝酸銀",
description: "重要的化學實驗試劑，也用於醫療殺菌與處理灼傷。",
},
],
reactions: [
{
equation: "4Ag + 2H₂S + O₂ → 2Ag₂S + 2H₂O",
description: "銀在空氣中與微量的硫化氫氣體反應，表面會生成黑色的硫化銀，這就是銀器隨時間變黑發暗的原因。",
},
],
safety: [
{
level: "注意",
description: "單質銀安全無毒，但長期攝取或接觸過量的銀化合物與銀奈米微粒，可能導致不可逆的「銀質沉著症」，使皮膚永久呈現藍灰色。",
},
],
isotopes: [
{
notation: "¹⁰⁷Ag",
use: "穩定元素存在形式",
description: "銀最豐富的穩定同位素，佔自然界一半以上的比例。",
},
],
reliability: {
level: "已實測資料",
description: "銀的光學與電學極值特性、抗菌機制及化學變黑反應皆具備豐富的實測資料。",
},
},
Cd: {
description: "鎘是一種極其柔軟、具有微藍色澤的銀白色金屬。儘管其化合物能產生極其鮮豔的顏料，但鎘本身是一種累積性的劇毒元素。",
uses: ["鎳鎘（Ni-Cd）充電電池", "核子反應爐的中子吸收控制棒", "製造鮮豔不褪色的黃色與紅色顏料（鎘黃/鎘紅）"],
appearance: "常溫下為質地極軟、帶有些微藍色光澤的銀白色金屬。",
lifeRole: "鎘及其化合物對所有已知生物均具劇毒。進入人體後它會取代骨骼中的鈣與酵素中的鋅，導致極度疼痛的骨質軟化（痛痛病）與腎臟衰竭。",
compounds: [
{
formula: "CdS",
name: "硫化鎘",
description: "極為鮮豔的黃色固體粉末，歷史上曾是頂級藝術油畫顏料（鎘黃）的成分。",
},
],
safety: [
{
level: "高風險",
description: "鎘及其化合物為已知的高危害人類致癌物，且會在人體與環境中長期累積無法代謝，應嚴格限制使用並避免任何接觸。",
},
],
isotopes: [
{
notation: "¹¹⁴Cd",
use: "穩定元素與核反應",
description: "自然界中最豐富的鎘同位素，具有極高的中子吸收能力。",
},
],
reliability: {
level: "已實測資料",
description: "鎘的合金特性與導致「痛痛病」的毒理學機制皆為科學與醫學界嚴格驗證的已實測資料。",
},
},
In: {
description: "銦是一種極為柔軟、銀白色的貧金屬，彎折純銦棒時會發出特殊的「錫鳴」清脆聲響。它是現代觸控科技不可或缺的核心材料。",
uses: ["液晶顯示器（LCD）與觸控螢幕的透明導電膜", "無鉛焊料合金與低熔點合金", "高溫計溫器與熱介面材料填充物"],
appearance: "常溫下為極軟、可以用指甲留下劃痕的銀白色金屬。",
compounds: [
{
formula: "ITO",
name: "氧化銦錫",
description: "一種能導電同時又透明的特殊混合氧化物，廣泛應用於幾乎所有智慧型手機的觸控面板中。",
},
],
safety: [
{
level: "警告",
description: "純銦金屬毒性低且安全，但在工業顯示器製程中長期吸入氧化銦錫（ITO）粉塵，會導致極為嚴重的職業性肺部纖維化疾病。",
},
],
isotopes: [
{
notation: "¹¹⁵In",
use: "工業應用材料",
description: "佔天然銦95%的極長半衰期微弱放射性同位素，其放射性弱到對人體無實際危害。",
},
],
reliability: {
level: "已實測資料",
description: "銦的物理延展性、光電薄膜電學數據及工業毒理皆有完備的實測資料。",
},
},
Sn: {
description: "錫是一種柔軟、具有銀白色光澤的貧金屬。它不易氧化且抗腐蝕，自青銅時代以來即被人類廣泛應用於器具與防鏽。",
uses: ["電子零件的無鉛焊接金屬", "鋼鐵表面的防鏽鍍層（如食品馬口鐵罐頭）", "製造青銅合金（與銅結合）"],
appearance: "常溫下（白錫）為具有光澤的銀白色柔軟金屬；在極低溫下會碎裂成粉末狀的灰錫。",
lifeRole: "無機錫單質與常見化合物對人體毒性極低；但部分人造「有機錫」化合物曾被用作船底防污漆，對海洋生態具有強烈的毀滅性毒性，現已遭全球禁用。",
compounds: [
{
formula: "SnO₂",
name: "二氧化錫",
description: "白色的固體，常用作陶瓷釉料的不透明劑與玻璃塗層。",
},
{
formula: "SnCl₂",
name: "氯化亞錫",
description: "白色結晶，是化學工業中極為常見的強還原劑。",
},
],
safety: [
{
level: "注意",
description: "常見的金屬錫與無機錫化合物極度安全，但工業用有機錫化合物劇毒，需依毒性化學物質規範處理。",
},
],
isotopes: [
{
notation: "¹²⁰Sn",
use: "穩定元素存在形式",
description: "錫擁有多達十種穩定同位素（所有元素中最多的），而¹²⁰Sn是其中最豐富的一種。",
},
],
reliability: {
level: "已實測資料",
description: "錫的防鏽性質、低溫相變現像（錫疫）及有機錫毒理學皆為高度可靠的已實測資料。",
},
},
Sb: {
description: "銻是一種質脆、帶有微藍色光澤的銀灰色類金屬。它主要作為合金添加劑，能顯著增加鉛金屬的硬度，也常與鹵素結合製成阻燃劑。",
uses: ["傳統鉛酸電池極板的合金硬化劑", "塑膠與紡織品的阻燃劑（以氧化銻形式）", "半導體材料的摻雜物"],
appearance: "常溫下為具有極亮金屬光澤、但質地極為脆弱易碎的銀灰色固體。",
compounds: [
{
formula: "Sb₂O₃",
name: "三氧化二銻",
description: "白色粉末，常與鹵素阻燃劑配合使用，能大幅降低塑膠與電子產品外殼的易燃性。",
},
],
safety: [
{
level: "警告",
description: "銻金屬粉塵與其多數化合物具中度至高度毒性，吸入或長期攝入會引起類似砷中毒的嚴重神經與呼吸道症狀，不應在無防護下操作。",
},
],
isotopes: [
{
notation: "¹²¹Sb",
use: "質譜分析與材料應用",
description: "自然界中最豐富的銻穩定同位素。",
},
],
reliability: {
level: "已實測資料",
description: "銻的合金硬化效能、阻燃化學機制與毒理學反應皆有明確的科學實測資料。",
},
},
Te: {
description: "碲是一種罕見、具備半導體特性的銀白色類金屬。它經常與金、銅、鉛等礦石伴生，是現代綠能與熱電產業的重要特殊材料。",
uses: ["高效能薄膜太陽能電池（碲化鎘）", "提高鋼鐵與銅合金的切削加工性能", "熱電製冷晶片（致冷元件）的核心材料"],
appearance: "常溫下為質脆、具有明顯金屬光澤的銀白色晶體固體。",
lifeRole: "碲對人體無生理作用且具有毒性；極微量的碲化合物被吸入或接觸皮膚後，人體會將其代謝為二甲基碲，導致呼吸與汗水散發長達數週的強烈大蒜惡臭。",
compounds: [
{
formula: "CdTe",
name: "碲化鎘",
description: "具有極佳光吸收能力的化合物，是薄膜太陽能電池吸收光能的核心層。",
},
],
safety: [
{
level: "警告",
description: "碲的多數化合物具中度毒性且極度擾人，極微量暴露即會造成嚴重的「碲呼吸」（持久的蒜臭味），工業加工需有極佳的通風防護設備。",
},
],
isotopes: [
{
notation: "¹³⁰Te",
use: "粒子物理學研究",
description: "豐度最高的天然同位素，科學家常利用其研究罕見的雙貝塔衰變現象。",
},
],
reliability: {
level: "已實測資料",
description: "碲的半導體特性、熱電材料熱力學及人體代謝反應皆有廣泛的實測資料。",
},
},
I: {
description: "碘是一種呈現紫黑色的鹵素元素，微熱時會昇華成刺鼻的紫紅色氣體。它是最重的穩定鹵素，對維持動物生命運作至關重要。",
uses: ["醫療傷口消毒劑（如優碘與碘酒）", "食鹽加碘以預防甲狀腺腫大", "醫學X光與電腦斷層（CT）顯影劑"],
appearance: "常溫下為帶有微弱金屬光澤的紫黑色晶體固體。",
lifeRole: "單質碘蒸氣具強烈刺激性與腐蝕性；但微量的碘離子（I⁻）是人體合成甲狀腺激素不可或缺的關鍵元素，主導全身的基礎代謝率與大腦發育。",
compounds: [
{
formula: "KI",
name: "碘化鉀",
description: "最常見的碘營養補充劑，也是核災外洩時用於緊急保護甲狀腺的儲備藥物。",
},
{
formula: "AgI",
name: "碘化銀",
description: "淡黃色固體，因其晶體結構類似冰，常被噴灑於雲層中作為人造雨的凝結核。",
},
],
reactions: [
{
equation: "I₂ + 澱粉 → 藍黑色錯合物",
description: "碘單質遇澱粉溶液會立刻呈現極深的藍黑色，這是化學實驗與生物學中最經典的檢驗反應。",
conditions: "常溫水溶液",
},
],
safety: [
{
level: "注意",
description: "固態碘單質具腐蝕性，其紫紅色昇華蒸氣會強烈刺激眼睛與呼吸道黏膜；不可大量吞食或讓皮膚長時間直接接觸。",
},
],
isotopes: [
{
notation: "¹³¹I",
use: "核醫治療與放射污染指標",
description: "人工放射性同位素，醫療上用於精準破壞甲狀腺癌細胞，同時也是核災外洩初期最危險的游離輻射來源。",
},
],
reliability: {
level: "已實測資料",
description: "碘的物理昇華現象、人體甲狀腺代謝機制與放射性同位素行為皆為醫學與化學界完備的已實測資料。",
},
},
Xe: {
description: "氙是一種沉重、極為稀有的單原子惰性氣體元素。雖然化學性質極度安定，但它是歷史上第一個被證明能與其他元素形成化合物的惰性氣體。",
uses: ["高階汽車與電影放映機的高亮度放電燈", "醫學上安全但昂貴的全身麻醉劑", "太空載具與人造衛星的離子推進器推進劑"],
appearance: "常溫下為無色、無味的氣體；在真空管中通電激發時會發出強烈的藍白色或淡紫色光輝。",
lifeRole: "氙氣對人體完全無毒且不參與任何生化反應，但在吸入後能與中樞神經細胞受體產生物理作用，達到極佳的麻醉效果。",
compounds: [
{
formula: "XeF₄",
name: "四氟化氙",
description: "歷史性的人造化合物，證明了「惰性氣體絕對不反應」的傳統理論存在例外。",
},
],
safety: [
{
level: "警告",
description: "氙氣本身無毒且化學性質極為安全，但因其密度極大，在密閉或低窪空間大量洩漏會迅速沉積並排擠氧氣，造成無預警的窒息死亡風險。",
},
],
isotopes: [
{
notation: "¹³²Xe",
use: "物理學基礎研究",
description: "自然界中最豐富的穩定氙同位素，常被用於暗物質探測器的靶材。",
},
],
reliability: {
level: "已實測資料",
description: "氙的光譜發光特性、惰性氣體化學反應及醫療麻醉效果皆具備明確權威的實測資料。",
},
},
Cs: {
description: "銫是一種極為柔軟的金色鹼金屬，化學性質極端活潑。它是現代科學中定義國際標準時間（秒）的關鍵元素。",
uses: ["高精度原子鐘", "光電倍增管與光電池的感光材料", "石油探勘的鑽井液（以甲酸銫形式）"],
appearance: "常溫下為帶有金色光澤的極軟金屬，略高於室溫（約28.5°C）即融化為液態。",
lifeRole: "銫金屬遇水會發生劇烈爆炸；銫離子（Cs⁺）在人體內無已知功能，但其化學性質類似鉀，微量攝入可隨代謝排出，不過其放射性同位素則會對健康造成嚴重威脅。",
compounds: [
{
formula: "CsCl",
name: "氯化銫",
description: "易溶於水的鹽類，廣泛應用於離心分離DNA等大分子的生物化學實驗中。",
},
],
reactions: [
{
equation: "2Cs + 2H₂O → 2CsOH + H₂",
description: "銫遇水會發生極度猛烈的爆炸反應，即使在極低溫下（-116°C）也能與冰塊發生爆炸。",
},
],
safety: [
{
level: "高風險",
description: "銫金屬極易與水、空氣中的氧氣與水分發生劇烈反應並引發強烈爆炸；必須保存在真空或惰性氣體中，絕對不應自行操作。",
},
],
isotopes: [
{
notation: "¹³³Cs",
use: "國際時間標準基準",
description: "自然界唯一的穩定同位素，其原子共振頻率被用來定義一秒的長度。",
},
{
notation: "¹³⁷Cs",
use: "醫療放射源與工業測厚儀",
description: "核分裂產生的危險放射性同位素，是核災發生後長期污染環境的主要核種之一。",
},
],
reliability: {
level: "已實測資料",
description: "銫的原子鐘共振頻率、極端化學反應性及放射性危害皆有極為精密且完備的實測資料。",
},
},
Ba: {
description: "鋇是一種柔軟的銀白色鹼土金屬，化學性質十分活潑。它在燃燒時會發出明亮而獨特的蘋果綠色火焰。",
uses: ["醫療消化道X光顯影劑（以硫酸鋇形式）", "製造綠色煙火與照明彈", "真空管中的除氣劑（吸收殘餘氣體）"],
appearance: "常溫下為柔軟的銀白色金屬，暴露在空氣中會迅速氧化變暗。",
lifeRole: "可溶性鋇離子（Ba²⁺）對人體具有劇毒，會引起嚴重的肌肉痙攣與心律不整；但醫療上服用的「鋇餐」因極難溶於水與胃酸，無法被人體吸收，故十分安全。",
compounds: [
{
formula: "BaSO₄",
name: "硫酸鋇",
description: "極難溶於水與酸的白色固體，是醫學上腸胃道X光顯影的主要成分。",
},
{
formula: "BaCO₃",
name: "碳酸鋇",
description: "具有毒性的白色沉澱物，過去曾被廣泛用作殺鼠劑及陶瓷釉料。",
},
],
reactions: [
{
equation: "Ba + 2H₂O → Ba(OH)₂ + H₂",
description: "鋇金屬與水發生反應，生成強鹼性的氫氧化鋇溶液並釋放出易燃的氫氣。",
},
],
safety: [
{
level: "警告",
description: "鋇金屬單質易與空氣及水分起火反應；多數可溶性鋇化合物（如氯化鋇）具劇毒，攝入微量即可致命，不應在無專業指導下操作。",
},
],
isotopes: [
{
notation: "¹³⁸Ba",
use: "基礎科學與環境追蹤",
description: "自然界中最豐富的鋇穩定同位素，約佔七成比例。",
},
],
reliability: {
level: "已實測資料",
description: "鋇的醫學顯影機制、化學反應性及毒理學特徵皆為醫學與化學界極為明確的已實測資料。",
},
},
La: {
description: "鑭是一種柔軟、具有延展性的銀白色金屬，是鑭系元素的第一個成員。它在空氣中極易氧化，是許多現代光學與電池科技的重要基礎材料。",
uses: ["鎳氫電池（NiMH）的負極材料", "製造高折射率的光學相機鏡頭", "打火機打火石（與鈰的混合金屬）"],
appearance: "常溫下為柔軟的銀白色金屬，暴露空氣中會迅速變暗。",
lifeRole: "鑭單質與離子在人體內沒有已知的生理功能；攝入過量可溶性鑭鹽可能導致肝臟與細胞毒性。",
compounds: [
{
formula: "La₂O₃",
name: "氧化鑭",
description: "白色固體粉末，能大幅提升玻璃的折射率，廣泛用於天文望遠鏡與相機的高階鏡頭。",
},
],
reactions: [
{
equation: "4La + 3O₂ → 2La₂O₃",
description: "鑭在空氣中極易氧化，細小的鑭粉末在室溫下即可自燃，生成白色的氧化鑭。",
conditions: "常溫或微熱",
},
],
safety: [
{
level: "注意",
description: "大塊金屬鑭毒性低微，但在機械加工時產生的鑭金屬粉末極易在空氣中自燃，應防範粉塵火災。",
},
],
isotopes: [
{
notation: "¹³⁹La",
use: "核磁共振（NMR）分析",
description: "自然界幾乎100%的穩定鑭同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鑭的化學反應性、光學折射特性及電池化學數據皆具備完備的實測資料。",
},
},
Ce: {
description: "鈰是稀土元素中含量最豐富的一種，化學性質十分活潑。它具有在不同氧化態（+3與+4）間自由轉換的獨特能力，使其成為絕佳的催化與拋光材料。",
uses: ["汽車排氣系統的觸媒轉化器", "玻璃與光學鏡片的精密拋光粉（以二氧化鈰形式）", "打火石合金（混合稀土金屬）"],
appearance: "常溫下為鐵灰色的延展性金屬，接觸空氣極易氧化剝落。",
compounds: [
{
formula: "CeO₂",
name: "二氧化鈰",
description: "淡黃色或白色的粉末，是玻璃拋光工業的標準材料，也用於自我清潔烤箱的內壁塗層。",
},
],
reactions: [
{
equation: "Ce + O₂ → CeO₂",
description: "金屬鈰在空氣中摩擦或受熱時極易起火燃燒，生成穩定的二氧化鈰。",
conditions: "摩擦或受熱",
},
],
safety: [
{
level: "警告",
description: "鈰金屬粉末或碎屑極其容易自燃（發火性金屬）；切削或打磨鈰時極易產生高溫火花。",
},
],
isotopes: [
{
notation: "¹⁴⁰Ce",
use: "核裂變產物追蹤",
description: "最豐富的鈰穩定同位素，佔自然界近九成比例。",
},
],
reliability: {
level: "已實測資料",
description: "鈰的氧化還原催化能力與燃燒特性皆有極為詳細的工業與科學實測資料。",
},
},
Pr: {
description: "鐠是一種柔軟的銀黃色稀土金屬，能賦予玻璃與琺瑯獨特的純黃色或綠色。它主要用於製造強力磁鐵與過護目鏡等特殊光學材料。",
uses: ["製造電焊與吹玻璃護目鏡的迪迪姆（Didymium）玻璃", "與釹混合製造高強度永磁鐵", "航空發動機的高溫合金添加劑"],
appearance: "常溫下為帶有銀黃色光澤的金屬，在空氣中會緩慢生成綠色的易碎氧化層。",
compounds: [
{
formula: "Pr₆O₁₁",
name: "十一氧化六鐠",
description: "自然環境下最穩定的鐠氧化物，呈現深棕黑色，可用於陶瓷著色劑。",
},
],
safety: [
{
level: "注意",
description: "金屬鐠的粉末具有引發火災的風險；可溶性鐠鹽攝入具有輕度至中度毒性。",
},
],
isotopes: [
{
notation: "¹⁴¹Pr",
use: "核磁共振研究",
description: "自然界唯一存在的穩定鐠同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鐠的光學吸收光譜與磁性合金應用均有明確的科學實測資料。",
},
},
Nd: {
description: "釹是一種亮銀色金屬，是製造目前已知最強力永久磁鐵的核心元素。它極大地推動了微型馬達、風力發電與現代聲學技術的革命。",
uses: ["製造極高強度的釹鐵硼（NdFeB）永久磁鐵", "固態雷射器（如Nd:YAG雷射）", "高階耳機與手機揚聲器的驅動單體"],
appearance: "常溫下為亮銀色金屬，極易被空氣氧化，通常需鍍上鎳或其他保護層以防腐蝕。",
compounds: [
{
formula: "Nd₂Fe₁₄B",
name: "釹鐵硼合金",
description: "目前商業化最強的永磁材料，以極小的體積提供驚人的磁力。",
},
{
formula: "Nd₂O₃",
name: "氧化釹",
description: "淡藍色的粉末，能賦予玻璃美麗的紫色並吸收有害眩光。",
},
],
safety: [
{
level: "注意",
description: "釹金屬粉末極易燃燒；大型釹磁鐵吸力極其猛烈，若手指夾在兩塊磁鐵間可能導致骨折等嚴重機械性傷害。",
},
],
isotopes: [
{
notation: "¹⁴²Nd",
use: "地球化學與隕石定年",
description: "釹最豐沛的同位素之一，常用於追溯地球早期演化史。",
},
],
reliability: {
level: "已實測資料",
description: "釹鐵硼的強大磁學數據與雷射發光特性皆具備無可爭議的實測資料。",
},
},
Pm: {
description: "鉕是鑭系元素中唯一沒有穩定同位素的放射性金屬。在自然界中幾乎不存在，主要透過核子反應爐中鈾的裂變來人工合成。",
uses: ["核能微型電池（如太空探測器電源）", "測量造紙與塑膠薄膜厚度的放射源", "特殊發光塗料（歷史用途，現多被氚取代）"],
appearance: "理論上為具金屬光澤的固體，但因具強烈放射性與衰變熱，肉眼觀察其單質極為困難且危險。",
safety: [
{
level: "高風險",
description: "鉕的所有同位素皆具高度放射性，衰變時會釋放貝他（β）射線並引發有害的二次X射線（制動輻射）；只能在具輻射防護的實驗室操作。",
},
],
isotopes: [
{
notation: "¹⁴⁷Pm",
use: "核能電池與測厚儀",
description: "半衰期約2.6年的放射性同位素，是最具商業與工業應用價值的鉕核種。",
},
],
reliability: {
level: "已實測資料",
description: "鉕的放射性衰變特性及核物理數據皆為人工合成觀測的已實測資料。",
},
},
Sm: {
description: "釤是一種銀白色的稀土金屬，具有優異的耐高溫與抗退磁能力。它是第一代實用稀土永久磁鐵（釤鈷磁鐵）的關鍵成分。",
uses: ["釤鈷（SmCo）高溫永久磁鐵", "核子反應爐的控制棒與中子吸收劑", "特定骨癌轉移的放射性同位素標靶治療"],
appearance: "常溫下為具光澤的銀白色金屬固體。",
compounds: [
{
formula: "SmCo₅",
name: "釤鈷合金",
description: "即使在高溫（可達300°C以上）環境下，仍能保持極強磁力的永久磁鐵，廣泛用於軍工與航太馬達。",
},
],
safety: [
{
level: "注意",
description: "釤金屬單質無明顯毒性，但粉末易燃；其可溶性鹽類若大量進入人體可能干擾鈣質代謝。",
},
],
isotopes: [
{
notation: "¹⁵²Sm",
use: "中子吸收研究",
description: "穩定且豐度最高的釤同位素，具有極大的中子吸收截面。",
},
{
notation: "¹⁵³Sm",
use: "放射性醫療藥物",
description: "發射貝他射線的短半衰期同位素，被用於緩解晚期骨癌患者的極度疼痛。",
},
],
reliability: {
level: "已實測資料",
description: "釤鈷合金的磁性表現、耐溫極限與醫療應用皆具備豐富的實測資料。",
},
},
Eu: {
description: "銪是鑭系金屬中化學反應性最強的元素，也是極為重要的發光材料。它在現代顯示科技中，提供了最關鍵純粹的「紅色」與「藍色」螢光。",
uses: ["電視、手機與電腦螢幕的紅光與藍光螢光粉", "歐元紙幣的防偽螢光印刷", "低能耗LED照明燈具"],
appearance: "常溫下為柔軟的鉛灰色金屬，極易氧化變黑。",
compounds: [
{
formula: "Eu₂O₃",
name: "氧化銪",
description: "白色帶粉紅色的粉末，在紫外線激發下能發出鮮豔的紅光，是舊式映像管電視彩色化的最大功臣。",
},
],
reactions: [
{
equation: "2Eu + 2H₂O → 2Eu(OH)₂ + H₂",
description: "金屬銪極度活潑，在水中的反應類似鈣金屬，會劇烈釋出易燃的氫氣。",
},
],
safety: [
{
level: "警告",
description: "銪金屬單質遇水或濕氣會劇烈反應起火；必須封裝在礦物油或惰性氣體中保存。",
},
],
isotopes: [
{
notation: "¹⁵¹Eu",
use: "核物理研究",
description: "自然界中極微弱的放射性同位素（半衰期極長，視同穩定）。",
},
],
reliability: {
level: "已實測資料",
description: "銪的光學激發光譜與極端化學活潑性均為材料化學的已實測資料。",
},
},
Gd: {
description: "釓是一種銀白色的磁性稀土金屬，具有所有穩定元素中最高的中子吸收截面。它在常溫附近表現出極為獨特的磁熱效應。",
uses: ["醫學磁振造影（MRI）靜脈顯影劑", "核子反應爐的緊急停機控制棒", "磁熱冷凍技術（無需壓縮冷媒的冷卻系統）"],
appearance: "常溫下為具有金屬光澤的銀白色固體。",
lifeRole: "游離的釓離子（Gd³⁺）對人體具高毒性，會干擾鈣離子通道；但在MRI顯影劑中，釓被錯合劑牢牢包裹，多數情況下能安全排出體外。",
compounds: [
{
formula: "Gd-DOTA",
name: "大環釓螯合物",
description: "一種安全的醫學顯影劑分子，利用釓的順磁性來大幅提升核磁共振影像的對比度。",
},
],
safety: [
{
level: "注意",
description: "純釓金屬粉末具易燃性；特定腎功能不全患者若施打釓顯影劑，可能引發嚴重的腎因性全身纖維化（NSF）。",
},
],
isotopes: [
{
notation: "¹⁵⁷Gd",
use: "核工業中子吸收",
description: "自然界中吸收熱中子能力最強的穩定同位素。",
},
],
reliability: {
level: "已實測資料",
description: "釓的磁性、中子截面數據及醫學造影代謝機制皆具備高度嚴謹的實測資料。",
},
},
Tb: {
description: "鋱是一種柔軟的銀灰色金屬。與銪類似，它主要活躍於光電領域，能提供顯示器與照明設備中極為純粹的「綠色」螢光。",
uses: ["顯示器與螢光燈管的綠光螢光粉", "聲納與致動器的超磁致伸縮材料（Terfenol-D）", "固態電子元件的摻雜物"],
appearance: "常溫下為具有延展性的銀灰色金屬，可以用刀切割。",
compounds: [
{
formula: "Tb₄O₇",
name: "七氧化四鋱",
description: "深褐色粉末，是商業上最常見的鋱化合物，也是製備綠色發光材料的前驅物。",
},
],
safety: [
{
level: "注意",
description: "鋱金屬粉末極易燃燒；與多數稀土金屬一樣，微量粉塵長期吸入可能對肺部產生刺激。",
},
],
isotopes: [
{
notation: "¹⁵⁹Tb",
use: "材料物理與光學應用",
description: "自然界唯一存在的穩定鋱同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鋱的發光光譜、磁致伸縮物理變化皆有明確的科學實測資料。",
},
},
Dy: {
description: "鏑是一種極易被磁化的銀白色稀土金屬。它能大幅提升釹磁鐵在高溫下的抗退磁能力，是電動車與風力發電機馬達不可或缺的戰略元素。",
uses: ["耐高溫釹鐵硼磁鐵的關鍵添加劑", "核子反應爐的控制棒材料", "超磁致伸縮合金（Terfenol-D）的核心成分"],
appearance: "常溫下為閃亮的銀白色金屬，暴露在空氣中會緩慢失去光澤。",
compounds: [
{
formula: "Dy₂O₃",
name: "氧化鏑",
description: "白色粉末，主要用於陶瓷與特殊磁性材料的添加物。",
},
],
safety: [
{
level: "注意",
description: "鏑金屬粉末若遇火花極易燃燒；其可溶性鹽類對人體具低微毒性。",
},
],
isotopes: [
{
notation: "¹⁶⁴Dy",
use: "磁學與核物理研究",
description: "自然界中最豐富的鏑穩定同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鏑對永磁材料的抗退磁提升效果（矯頑力）及磁致伸縮形變數據皆有大量的實測資料。",
},
},
Ho: {
description: "鈥是一種相對柔軟的銀白色金屬，擁有所有天然元素中最高的磁矩。這使其在創造極端強磁場的科學領域無可取代。",
uses: ["醫療用鈥雷射（用於無創碎石與攝護腺手術）", "製造產生超強磁場的特殊磁極片", "核子反應爐的可燃毒物（中子吸收劑）"],
appearance: "常溫下為銀白色金屬，在乾燥空氣中相對穩定，但在高溫下極易氧化。",
compounds: [
{
formula: "Ho₂O₃",
name: "氧化鈥",
description: "淡黃色的粉末，在不同光源下會呈現奇妙的顏色變化，常被用作光學分光光度計的校準標準。",
},
],
safety: [
{
level: "注意",
description: "鈥金屬粉塵具有火災與爆炸風險；大量接觸鈥化合物可能對人體代謝造成輕度干擾。",
},
],
isotopes: [
{
notation: "¹⁶⁵Ho",
use: "極端磁場與光學標準研究",
description: "自然界唯一存在的穩定鈥同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鈥的極高磁矩與雷射醫療手術（碎石作用）均具備臨床與物理的已實測資料。",
},
},
Er: {
description: "鉺是一種銀白色的稀土金屬，其最著名的特徵是氧化物能呈現美麗的粉紅色。它在長距離光纖通訊網路中扮演光訊號放大的關鍵角色。",
uses: ["光纖放大器（EDFA）的核心摻雜物", "醫療用鉺雷射（精準的皮膚美容與牙科手術）", "玻璃、瓷器與立方氧化鋯的粉紅色發色劑"],
appearance: "常溫下為閃亮且具延展性的銀白色金屬。",
compounds: [
{
formula: "Er₂O₃",
name: "氧化鉺",
description: "具有美麗粉紅色的固體粉末，是光學通訊網路中能吸收特定波長並將訊號放大的關鍵材料。",
},
],
safety: [
{
level: "注意",
description: "金屬鉺的粉末在高溫下易燃；化合物毒性極低，但仍應避免吸入粉塵。",
},
],
isotopes: [
{
notation: "¹⁶⁶Er",
use: "核物理與材料研究",
description: "自然豐度最高的鉺穩定同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鉺在光纖網路中的能階躍遷放大效應及雷射手術切割深度皆有精確的實測資料。",
},
},
Tm: {
description: "銩是地球上最稀有、最昂貴的稀土金屬之一。儘管極度罕見，它在特殊雷射與可攜式X光設備中具有無可取代的地位。",
uses: ["醫療手術用的銩雷射（切割組織精準且止血極佳）", "可攜式X光機的微型輻射源（經核活化後）", "歐元紙幣的高階防偽螢光特徵"],
appearance: "常溫下為帶有明亮光澤的銀灰色金屬。",
compounds: [
{
formula: "Tm₂O₃",
name: "氧化銩",
description: "淡綠色粉末，經過反應爐中子照射後，會轉變為發射X射線的放射源。",
},
],
safety: [
{
level: "注意",
description: "單質銩粉末具火災危險；其可溶性化合物微毒，人工放射性同位素則有明確的輻射危害。",
},
],
isotopes: [
{
notation: "¹⁶⁹Tm",
use: "工業與醫療微型X射線源（經活化為¹⁷⁰Tm）",
description: "自然界唯一的穩定銩同位素。",
},
],
reliability: {
level: "已實測資料",
description: "銩的雷射激發光譜與醫學切割熱效應皆具備詳細的臨床與物理實測資料。",
},
},
Yb: {
description: "鐿是一種柔軟的銀白色稀土金屬，具有在壓力下電阻率急劇增加的奇特物理性質。它廣泛應用於工業應力感測與高能光纖雷射。",
uses: ["高功率工業切割用的鐿摻雜光纖雷射", "不鏽鋼的晶粒細化合金添加物", "監測地震或爆炸衝擊波的應力感測器"],
appearance: "常溫下為具有明亮光澤、柔軟的銀白色金屬。",
compounds: [
{
formula: "Yb₂O₃",
name: "氧化鐿",
description: "白色粉末，是高功率固態雷射器與光纖雷射中的重要光學摻雜物。",
},
],
safety: [
{
level: "注意",
description: "鐿金屬粉塵極易自燃，且鐿的多數化合物對人體有高度刺激性，長期接觸有致畸胎疑慮。",
},
],
isotopes: [
{
notation: "¹⁷⁴Yb",
use: "雷射物理與材料科學",
description: "自然界中最豐沛的鐿穩定同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鐿的光纖雷射輸出效能及高壓下的電阻變化皆為材料物理界高度確認的已實測資料。",
},
},
Lu: {
description: "鎦是鑭系元素中最後一個、最重且最堅硬的金屬。由於提煉極度困難且價格極端昂貴，其應用主要集中在少數高階的科學與醫學領域。",
uses: ["正子斷層造影（PET）的高效閃爍體晶體（如LSO）", "特定癌症的標靶放射性同位素治療", "石油裂解工業的高階催化劑"],
appearance: "常溫下為堅硬、緻密的銀白色金屬。",
compounds: [
{
formula: "Lu₂SiO₅",
name: "矽酸鎦（LSO）",
description: "優異的閃爍體材料，能將高能伽瑪射線轉換為可見光，極大提升了PET掃描儀的解析度。",
},
],
safety: [
{
level: "注意",
description: "金屬鎦粉末如同多數稀土金屬一樣極易燃燒；其化合物毒性低，但自然界中含有微弱的放射性同位素。",
},
],
isotopes: [
{
notation: "¹⁷⁵Lu",
use: "高階晶體材料研究",
description: "自然界中最豐富的鎦穩定同位素。",
},
{
notation: "¹⁷⁷Lu",
use: "精準標靶放射治療",
description: "極為重要的人工醫學同位素，能附著於特定癌細胞上並釋放短射程的放射線將其精準摧毀。",
},
],
reliability: {
level: "已實測資料",
description: "鎦晶體的閃爍效應及人工同位素的標靶抗癌機制皆有極為嚴謹的臨床與醫學實測資料。",
},
},
Hf: {
description: "鉿是一種閃亮的銀灰色過渡金屬，化學性質極其類似鋯。它最突出的特點是具有極高的吸收熱中子能力，因此在核能工業中佔有重要地位。",
uses: ["核反應爐的控制棒（特別是核子潛艇）", "製造極高熔點合金", "高階半導體晶片中的高介電常數（High-k）絕緣層"],
appearance: "常溫下為具有明亮金屬光澤的銀灰色金屬。",
compounds: [
{
formula: "HfO₂",
name: "二氧化鉿",
description: "耐高溫的白色粉末，廣泛用於先進積體電路中以減少微型電晶體的漏電流。",
},
],
safety: [
{
level: "注意",
description: "鉿金屬單質安全，但在機械加工過程中產生的微細粉末具有高易燃性，極易自燃。",
},
],
isotopes: [
{
notation: "¹⁸⁰Hf",
use: "核物理研究",
description: "自然界中最豐富的鉿穩定同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鉿的核物理截面數據與半導體材料特性皆為高度完備的實測資料。",
},
},
Ta: {
description: "鉭是一種堅硬、沉重且具極高延展性的銀灰色過渡金屬。它對化學腐蝕具有極強的抵抗力，且不會引起人體免疫排斥。",
uses: ["智慧型手機與電子設備中的鉭質電容器", "醫療植入物（如人工骨骼與骨板）", "製造實驗室的抗腐蝕儀器"],
appearance: "常溫下為具有延展性的銀灰色金屬，表面通常有一層極緻密且穩定的深藍色氧化膜。",
lifeRole: "鉭金屬對人體完全無毒且具有極佳的生物相容性，被廣泛用於骨科與外科手術植入物而不會引發免疫反應。",
compounds: [
{
formula: "Ta₂O₅",
name: "五氧化二鉭",
description: "白色固體，極度穩定，是製造微型高容量鉭質電容器的核心介電材料。",
},
],
safety: [
{
level: "注意",
description: "塊狀鉭金屬極為安全；但在特殊製程下產生的極細粉末具火災危險。",
},
],
isotopes: [
{
notation: "¹⁸¹Ta",
use: "核子物理與醫學材料研究",
description: "自然界幾乎唯一的穩定同位素（佔99.98%以上）。",
},
],
reliability: {
level: "已實測資料",
description: "鉭的電容器介電常數及生物相容性皆為經過長期臨床與工業驗證的已實測資料。",
},
},
W: {
description: "鎢是一種極為堅硬的灰白色過渡金屬，擁有所有天然元素中最高的熔點（3422°C）。它的密度極高，幾乎與黃金相同。",
uses: ["傳統白熾燈泡的鎢絲", "金屬切削刀具（碳化鎢）", "穿甲彈的高密度動能穿透體"],
appearance: "純鎢為具有鋼灰色光澤的金屬；極難加工，常以粉末冶金方式製成極為堅硬的合金。",
compounds: [
{
formula: "WC",
name: "碳化鎢",
description: "硬度僅次於鑽石的極端堅硬材料，廣泛應用於鑽頭、車刀與圓珠筆尖。",
},
],
safety: [
{
level: "注意",
description: "純鎢極為安全；但工業加工時長期吸入碳化鎢及伴隨的鈷粉塵，會引發嚴重的職業性硬金屬肺病。",
},
],
isotopes: [
{
notation: "¹⁸⁴W",
use: "物理學基礎研究",
description: "自然界中最豐富的鎢穩定同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鎢的極端高溫熱力學數據與合金硬度皆有極為詳細的工程實測資料。",
},
},
Re: {
description: "錸是一種極其罕見、沉重且熔點極高的銀白色過渡金屬（熔點僅次於鎢與碳）。它極大地提升了高溫合金的抗蠕變能力，是航空引擎的戰略材料。",
uses: ["航空與火箭燃氣渦輪引擎的高溫單晶葉片", "高辛烷值無鉛汽油的提煉催化劑", "鎢錸合金熱電偶（測量極高溫）"],
appearance: "常溫下為堅硬的銀白色金屬。",
safety: [
{
level: "注意",
description: "錸金屬毒性極微，但與所有重金屬粉末一樣，粉塵狀態下應避免吸入與防範火災。",
},
],
isotopes: [
{
notation: "¹⁸⁷Re",
use: "地質年代測定",
description: "佔天然錸六成以上的微弱放射性同位素，半衰期超過宇宙年齡，可用於錸-鋨定年法測定古老礦物。",
},
],
reliability: {
level: "已實測資料",
description: "錸的單晶葉片高溫抗蠕變數據與催化特性皆有高度可靠的實測資料。",
},
},
Os: {
description: "鋨是一種堅硬、易碎且帶有些微藍色的白金屬。它是自然界中密度最高的元素，且在室溫下會緩慢釋放出具有劇毒的揮發性氧化物。",
uses: ["高品質鋼筆筆尖的耐磨合金點", "顯微鏡生物樣本的染色劑（以四氧化鋨形式）", "指紋鑑識技術"],
appearance: "常溫下為堅硬且極其沉重的藍白色金屬，粉末狀鋨在空氣中會散發出刺鼻的蘿蔔臭味（因表面氧化）。",
compounds: [
{
formula: "OsO₄",
name: "四氧化鋨",
description: "一種極易揮發的淡黃色固體，蒸氣具劇毒，能將生物組織中的脂肪染成黑色，常應用於電子顯微鏡製樣。",
},
],
reactions: [
{
equation: "Os + 2O₂ → OsO₄",
description: "鋨粉末在室溫下即會與氧氣反應，緩慢生成具強烈刺激性氣味與劇毒的四氧化鋨氣體。",
},
],
safety: [
{
level: "高風險",
description: "鋨金屬本身無毒，但其表面生成的四氧化鋨蒸氣具高度揮發性與劇毒，微量接觸眼睛即可導致失明，極度危險。",
},
],
isotopes: [
{
notation: "¹⁹²Os",
use: "地球化學追蹤",
description: "自然界中最豐富的鋨穩定同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鋨的極端密度物理極值與四氧化鋨的毒理學皆為科學界明確的已實測資料。",
},
},
Ir: {
description: "銥是一種極其堅硬、脆且沉重的銀白色過渡金屬，密度僅次於鋨。它是抗腐蝕性最強的元素，甚至不溶於能溶解黃金的王水。",
uses: ["製造頂級火星塞的電極", "高階羅盤與儀器的耐磨軸承", "度量衡標準原器（如早期的國際公尺與公斤原器合金）"],
appearance: "常溫下為極亮、堅硬易碎的銀白色金屬。",
compounds: [
{
formula: "IrO₂",
name: "二氧化銥",
description: "黑色固體，常用作工業電解製程中極耐腐蝕的陽極材料。",
},
],
safety: [
{
level: "注意",
description: "大塊銥金屬極度惰性且安全，但某些人工放射性銥同位素具有極強輻射，曾引發嚴重的輻射外洩事故。",
},
],
isotopes: [
{
notation: "¹⁹³Ir",
use: "同位素化學研究",
description: "自然界豐度最高的穩定同位素。",
},
{
notation: "¹⁹²Ir",
use: "工業射線探傷與近珀放射治療",
description: "人工放射性同位素，釋放強烈的伽瑪射線，廣泛用於檢查管線焊縫及體內腫瘤放療。",
},
],
reliability: {
level: "已實測資料",
description: "銥的極端抗腐蝕數據及地球化學特徵（如白堊紀滅絕事件的地層銥異常）皆為明確的實測資料。",
},
},
Pt: {
description: "鉑（俗稱白金）是一種沉重、可延展且極為稀有的銀白色貴金屬。它具有卓越的抗腐蝕性與強大的催化能力，價值常與黃金比肩。",
uses: ["汽車排氣觸媒轉化器", "高級珠寶首飾", "化學工業與氫燃料電池的催化劑"],
appearance: "常溫下為閃亮、具有極佳延展性的銀白色金屬。",
lifeRole: "鉑金屬單質對人體無生理作用且無毒；但某些鉑的配位化合物被發現能強烈抑制細胞分裂，成為重要的抗癌藥物。",
compounds: [
{
formula: "PtCl₂(NH₃)₂",
name: "順鉑（Cisplatin）",
description: "一種極為著名的化學治療藥物，能干擾癌細胞的DNA複製，廣泛用於治療睪丸癌等多種惡性腫瘤。",
},
],
reactions: [
{
equation: "2CO + O₂ → 2CO₂",
description: "在汽車排氣管中，鉑金屬作為觸媒能極大降低反應活化能，將有毒的一氧化碳迅速氧化為二氧化碳。",
conditions: "鉑催化劑與高溫",
},
],
safety: [
{
level: "注意",
description: "金屬鉑本身極為安全；但部分鉑的可溶性鹽類可能引發強烈的呼吸道過敏反應，抗癌藥物順鉑則具有嚴重的腎臟副作用。",
},
],
isotopes: [
{
notation: "¹⁹⁵Pt",
use: "核磁共振研究",
description: "自然界中最常見的鉑同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鉑的催化機制與順鉑化療的藥理數據皆有長期的工業與臨床醫學實測資料。",
},
},
Au: {
description: "金是一種極度柔軟、沉重且具耀眼黃色光澤的貴金屬。它是人類最古老的財富象徵，其極佳的延展性與極強的抗腐蝕性在現代科技中同樣無可取代。",
uses: ["金融儲備與高級珠寶首飾", "智慧型手機與電腦晶片的防氧化電接點", "太空衣與人造衛星的紅外線防護反射塗層"],
appearance: "常溫下為柔軟、極具光澤的深黃色金屬，永不生鏽變色。",
lifeRole: "純金對人體完全無毒且無法被消化，常被用作食品裝飾（金箔）；某些極少數的黃金化合物偶爾被用於治療嚴重的類風濕性關節炎。",
compounds: [
{
formula: "HAuCl₄",
name: "氯金酸",
description: "將黃金溶解於王水後生成的黃色結晶化合物，是電鍍金及製備奈米金粒子的前驅物。",
},
],
safety: [
{
level: "注意",
description: "純金屬黃金極度安全無毒；但用於開採提煉黃金的氰化物製程與汞齊法具極高危害性，常造成嚴重環境污染。",
},
],
isotopes: [
{
notation: "¹⁹⁷Au",
use: "物理標準與材料科學",
description: "自然界唯一存在的穩定黃金同位素。",
},
],
reliability: {
level: "已實測資料",
description: "黃金的抗腐蝕熱力學、極端延展性及電學數據皆為歷史最悠久且完備的已實測資料。",
},
},
Hg: {
description: "汞（俗稱水銀）是常溫常壓下唯一呈現液態的金屬元素。它非常沉重，具有銀白色的閃亮外觀與高表面張力，但同時也是一種累積性神經劇毒。",
uses: ["傳統體溫計與氣壓計（多已淘汰）", "螢光燈與節能燈管的發光氣體（微量）", "補牙用的銀粉（汞齊合金）"],
appearance: "常溫下為沉重、極具流動性的銀白色閃亮液體，極易碎裂成細小球體。",
lifeRole: "汞對所有生物均無生理功能且具強烈神經毒性。環境中的無機汞會被微生物轉化為脂溶性的「甲基汞」，透過食物鏈（特別是深海魚類）在人體內累積，嚴重破壞中樞神經。",
compounds: [
{
formula: "HgS",
name: "硫化汞",
description: "自然界中極鮮豔的紅色礦物（辰砂），古代常作為硃砂顏料使用。",
},
{
formula: "CH₃Hg⁺",
name: "甲基汞",
description: "有機汞離子，是環境污染與食物鏈累積中毒（如日本水俁病）的主要致命物質。",
},
],
safety: [
{
level: "高風險",
description: "液態汞在室溫下會揮發出無色無味的劇毒蒸氣，若不慎打破水銀溫度計，絕對不可使用吸塵器清理；多數汞化合物對中樞神經與腎臟造成不可逆的永久破壞。",
},
],
isotopes: [
{
notation: "²⁰²Hg",
use: "物理基礎研究",
description: "自然界中最豐富的汞穩定同位素。",
},
],
reliability: {
level: "已實測資料",
description: "汞的蒸氣壓物理特性、合金（汞齊）反應及甲基汞毒理學皆有極為慘痛的歷史實測資料。",
},
},
Tl: {
description: "鉈是一種質地極軟的灰白色貧金屬。它曾被廣泛用作殺鼠劑，但由於其無色無味且對人體具有極其猛烈的劇毒，現已被全球多數國家嚴格管制。",
uses: ["特殊光學紅外線穿透玻璃", "高溫超導材料研究", "醫學心肌造影（以放射性鉈-201形式）"],
appearance: "常溫下為極軟、類似鉛的灰白色金屬，暴露空氣中會迅速氧化失去光澤。",
compounds: [
{
formula: "Tl₂SO₄",
name: "硫酸鉈",
description: "無色無味的劇毒晶體，歷史上曾是極為致命的殺蟲劑與毒鼠強的主要成分。",
},
],
safety: [
{
level: "高風險",
description: "鉈及其化合物為極端猛烈的神經與細胞毒物，攝入微量即會導致劇烈神經痛、嚴重掉髮與器官衰竭，絕不應在非專業規範下接觸。",
},
],
isotopes: [
{
notation: "²⁰³Tl",
use: "穩定同位素標記",
description: "佔天然鉈近三成的穩定同位素。",
},
{
notation: "²⁰¹Tl",
use: "心臟核醫學造影",
description: "發射特定射線的人工放射性同位素，被用於評估心臟肌肉的血液灌注狀況。",
},
],
reliability: {
level: "已實測資料",
description: "鉈的極端毒性機轉及醫療放射造影應用均為嚴格規範的已實測資料。",
},
},
Pb: {
description: "鉛是一種沉重、柔軟且具延展性的藍灰色貧金屬。儘管其擁有極佳的工業與防輻射效能，但因其嚴重的累積性神經毒性，正逐漸被逐步淘汰於日常用品中。",
uses: ["汽車的鉛酸蓄電池", "醫療X光與核能設施的輻射防護屏蔽", "高壓地下電纜的防水保護層"],
appearance: "常溫下為極柔軟的暗藍灰色金屬，切開時呈現亮銀色，但會迅速氧化變暗。",
lifeRole: "鉛對生物體無任何已知益處。它能輕易穿透血腦屏障，干擾血紅素合成與神經傳導；兒童對鉛毒極度敏感，微量暴露即會造成永久性的智力損害。",
compounds: [
{
formula: "PbO",
name: "氧化鉛",
description: "黃色粉末，廣泛用於製造鉛酸電池與歷史悠久的鉛水晶玻璃。",
},
{
formula: "Pb(C₂H₅)₄",
name: "四乙基鉛",
description: "曾經廣泛添加於汽油中的抗爆震劑，是20世紀造成全球性鉛污染與健康災難的元凶，現已全面禁用。",
},
],
safety: [
{
level: "高風險",
description: "鉛及其化合物是嚴重的累積性神經毒物。應絕對避免兒童接觸老舊房屋剝落的含鉛油漆，且舊式含鉛水管會導致飲用水污染。",
},
],
isotopes: [
{
notation: "²⁰⁸Pb",
use: "放射性定年終點",
description: "最重且極度穩定的鉛同位素，是自然界中釷與鈾放射性衰變鏈的最終穩定產物。",
},
],
reliability: {
level: "已實測資料",
description: "鉛的輻射屏蔽物理、電化學反應與嚴重的神經毒理學皆有歷史極為豐富的實測資料。",
},
},
Bi: {
description: "鉍是一種脆性、帶有獨特粉紅色澤的白金屬。它是所有重金屬中極少數對人體幾乎無毒的元素，常被用作鉛的環保替代品。",
uses: ["胃腸藥的有效成分（次水楊酸鉍）", "消防灑水頭與保險絲的低熔點易熔合金", "無鉛焊料與無鉛子彈的替代材料"],
appearance: "常溫下為具光澤的銀白色金屬，略帶微粉紅色；冷卻時會形成極其美麗的彩虹色階梯狀晶體（因表面氧化膜干涉）。",
lifeRole: "鉍金屬與多數化合物極其安全，甚至被廣泛製成非處方藥（如Pepto-Bismol）用以舒緩胃灼熱與消化不良，且能輔助殺滅幽門螺旋桿菌。",
compounds: [
{
formula: "C₇H₅BiO₄",
name: "次水楊酸鉍",
description: "常見腸胃成藥的粉紅色液體成分，能有效保護胃黏膜。",
},
],
safety: [
{
level: "注意",
description: "鉍是已知最安全的重金屬；但長期過量服用鉍劑藥物偶爾會引起輕微的黑舌與黑便（無害現象）。",
},
],
isotopes: [
{
notation: "²⁰⁹Bi",
use: "物理學衰變極限研究",
description: "曾被認為是自然界最重的穩定同位素，後被證實具有極其微弱的放射性（半衰期比宇宙年齡長十億倍以上），實際上絕對安全。",
},
],
reliability: {
level: "已實測資料",
description: "鉍的低溫相變、安全毒理及醫療藥效均為成熟的臨床與物理實測資料。",
},
},
Po: {
description: "釙是一種極端罕見、具有極強放射性的類金屬元素，由居禮夫人所發現。它是自然界中毒性最強的物質之一。",
uses: ["消除工業靜電的靜電刷（歷史用途）", "早期的太空衛星熱電發電機核熱源", "引爆核武器的微型中子源觸發器"],
appearance: "理應為銀灰色固體，但因自身強烈的輻射與衰變熱，肉眼所見的單質會因高熱發出藍光並迅速氣化。",
lifeRole: "釙對人體極度致命。極微量的粉塵若被吸入或攝入體內，其釋放的強烈阿爾法（α）射線會直接撕裂DNA與細胞結構，導致無藥可救的急性輻射中毒。",
compounds: [
{
formula: "PoO₂",
name: "二氧化釙",
description: "具強烈放射性的固體，在自然界中幾乎不可能以巨觀數量存在。",
},
],
safety: [
{
level: "高風險",
description: "釙-210是已知的最強致命毒物之一（毒性是氰化物的數十萬倍），僅需微克級的劑量進入人體即可致死；絕對僅限於最高防護級別的核實驗室操作。",
},
],
isotopes: [
{
notation: "²¹⁰Po",
use: "暗殺與核物理源",
description: "最著名的同位素，半衰期僅138天，衰變時釋放驚人能量的阿爾法粒子，曾被用作著名的放射性毒殺工具。",
},
],
reliability: {
level: "已實測資料",
description: "釙的放射性衰變熱及致命的輻射毒理學皆具備明確的核物理與法醫實測資料。",
},
},
At: {
description: "砈是自然界中最稀有的元素，屬於鹵素族但極具放射性。在地球地殼中任何時刻的總存量估計不到一盎司。",
uses: ["研究特定癌症的阿爾法標靶放射治療（極小規模研究中）", "無其他實際工業用途"],
appearance: "無人見過其巨觀外貌；理論上若能聚集足夠質量，會瞬間因極其強烈的輻射熱將自身蒸發殆盡。",
safety: [
{
level: "高風險",
description: "砈的所有同位素皆具有極端的放射性破壞力，其半衰期最長也僅有數小時，無法脫離特殊的粒子加速器環境存在。",
},
],
isotopes: [
{
notation: "²¹¹At",
use: "醫學標靶放射研究",
description: "半衰期約7.2小時的人工同位素，科學家正研究將其附著於抗體上以精準殺死極小範圍內的癌細胞。",
},
],
reliability: {
level: "部分推定資料",
description: "砈因半衰期極短且數量極微，多數化學性質依賴理論外推，僅有其放射性衰變與示蹤實驗為實測資料。",
},
},
Rn: {
description: "氡是一種無色、無味、沉重的放射性惰性氣體，由地層中鈾和釷的自然衰變產生。它是自然界中引發非吸菸者肺癌的最主要元凶。",
uses: ["地震預測研究（地下水氡氣濃度監測）", "早期的放射性醫療植入種子（多已淘汰）"],
appearance: "常溫下為完全無色無味的氣體；當冷卻到固態極低溫時，會因自身輻射發出強烈的黃色至橙紅色輝光。",
lifeRole: "氡氣在密閉空間（如地下室）累積後，一旦被人體吸入，其衰變產生的固體微粒會附著於肺部組織，長期持續釋放阿爾法射線轟擊肺細胞。",
compounds: [
{
formula: "RnF₂",
name: "二氟化氡",
description: "在極端實驗室條件下合成的固體，證實了氡並非絕對惰性，但因強烈輻射極不穩定。",
},
],
safety: [
{
level: "高風險",
description: "氡氣是自然界最具威脅的放射性氣體，長期吸入低濃度氡氣即具有強烈的致癌風險；地下室與密閉礦坑應安裝良好通風或氡氣偵測器。",
},
],
isotopes: [
{
notation: "²²²Rn",
use: "環境輻射監測",
description: "半衰期約3.8天的天然放射性同位素，是鈾-238衰變鏈中唯一呈現氣態的核種。",
},
],
reliability: {
level: "已實測資料",
description: "氡的放射性衰變路徑、氣體擴散物理及致癌風險皆有高度完備的環境科學與醫學實測資料。",
},
},
Fr: {
description: "鍅是一種極度不穩定且具有強烈放射性的鹼金屬，是所有自然元素中反應性最強但也最稀少的元素之一。",
uses: ["基礎科學與原子結構研究", "激光光譜學實驗", "雷射冷卻與捕獲研究"],
appearance: "預期為銀白色金屬（因半衰期極短且發熱量大，從未製成巨觀塊狀）。",
safety: [
{
level: "高風險",
description: "鍅具有極強的放射性且半衰期極短（最長僅22分鐘），僅存在於極度專業的核物理實驗室中。",
},
],
isotopes: [
{
notation: "²²³Fr",
use: "原子物理與光譜研究",
description: "鍅壽命最長的同位素，半衰期約22分鐘。",
},
],
reliability: {
level: "已實測資料",
description: "其原子光譜與半衰期已有精確的實驗測量數據。",
},
},
Ra: {
description: "鐳是一種具有強烈放射性的鹼土金屬，化合物在黑暗中會發出微弱的藍色螢光。它曾被廣泛用於夜光塗料，但因嚴重輻射危害而遭禁。",
uses: ["早期放射性醫療與癌症治療研究", "攜帶型中子源材料（歷史用途）", "科學研究與輻射標準源"],
appearance: "常溫下為銀白色金屬，但在空氣中會迅速氧化變黑。",
safety: [
{
level: "高風險",
description: "鐳具強烈放射性且化學性質類似鈣會積聚於骨骼中，長期暴露會引發骨癌與嚴重輻射傷害，絕對不應接觸。",
},
],
isotopes: [
{
notation: "²²⁶Ra",
use: "放射源與歷史醫療",
description: "鐳最主要的同位素，半衰期約1600年。",
},
],
reliability: {
level: "已實測資料",
description: "鐳的放射衰變鏈與毒理學歷史記錄完整。",
},
},
Ac: {
description: "錒是一種具有銀白色光澤的放射性金屬，是錒系元素的命名來源。它在空氣中會迅速與氧氣反應形成一層白色的氧化物。",
uses: ["高效能阿爾法射線放射源研究", "癌症標靶放射治療（如錒-225）", "中子源科研應用"],
appearance: "常溫下為銀白色金屬，在暗處會因強烈輻射發出微弱藍光。",
safety: [
{
level: "高風險",
description: "錒及其化合物具有極強的放射性與毒性，其危害性與鐳相當，僅限於專門的放射化學實驗室操作。",
},
],
isotopes: [
{
notation: "²²⁵Ac",
use: "標靶癌症治療",
description: "釋放阿爾法粒子的醫療同位素，正被廣泛研究用於精準癌症治療。",
},
],
reliability: {
level: "已實測資料",
description: "錒的化學與放射性質具備詳盡的實測數據。",
},
},
Th: {
description: "釷是一種微具放射性的銀灰色金屬，在地殼中的豐度遠高於鈾。它被視為未來核能發電的潛在清潔燃料來源。",
uses: ["製造耐高溫金屬坩堝與航空引擎合金", "釷燃料核能發電研究", "鎢惰性氣體焊接（TIG）電極的添加劑"],
appearance: "常溫下為銀灰色金屬，在空氣中會緩慢氧化成暗灰色或黑色。",
compounds: [
{
formula: "ThO₂",
name: "二氧化釷",
description: "極高熔點的耐火材料，曾用於製造氣燈網罩。",
},
],
safety: [
{
level: "警告",
description: "金屬釷具微弱放射性且釷粉末在空氣中易燃；長期吸入釷粉塵會增加健康風險，應在通風環境下專業操作。",
},
],
isotopes: [
{
notation: "²³²Th",
use: "核能與地質定年",
description: "自然界唯一的天然釷同位素，半衰期長達140億年。",
},
],
reliability: {
level: "已實測資料",
description: "釷的物理、化學及核燃料特性具備豐富實測資料。",
},
},
Pa: {
description: "鏷是一種稀有且具強烈放射性的銀灰色金屬，屬於錒系元素。它在自然界中主要由鈾礦石的放射性衰變微量產生。",
uses: ["基礎核物理與放射化學研究", "地質年代測定參考", "科學探索用途"],
appearance: "常溫下為銀灰色金屬，在空氣中會緩慢氧化失去光澤。",
safety: [
{
level: "高風險",
description: "鏷及其化合物具高放射性與化學毒性，其危害程度與鈾和鎰相似，需嚴格在防護箱中操作。",
},
],
isotopes: [
{
notation: "²³¹Pa",
use: "地質定年研究",
description: "鏷壽命最長的同位素，半衰期約32700年。",
},
],
reliability: {
level: "已實測資料",
description: "鏷的晶體結構與衰變數據已有科學實測記錄。",
},
},
U: {
description: "鈾是一種重質、銀灰色的放射性金屬，是核能發電與核武器的核心原料。自然界中的鈾主要由多種同位素混合組成。",
uses: ["核能發電廠的核燃料", "核子潛艇動力來源", "軍事裝甲與穿甲彈材料（貧鈾）"],
appearance: "常溫下為銀灰色金屬，暴露在空氣中會迅速覆蓋一層黑色氧化層。",
compounds: [
{
formula: "UF₆",
name: "六氟化鈾",
description: "常溫下為固體，加熱易昇華，是鈾同位素濃縮製程中的關鍵氣體原料。",
},
{
formula: "UO₂",
name: "二氧化鈾",
description: "核燃料芯餅的主要化學成分。",
},
],
reactions: [
{
equation: "U + O₂ → UO₂",
description: "鈾金屬在空氣中加熱會燃燒並生成二氧化鈾。",
conditions: "加熱",
},
],
safety: [
{
level: "高風險",
description: "鈾具備放射性與重金屬化學毒性，濃縮鈾或武器級鈾受嚴格國際管制，不應自行接觸或操作。",
},
],
isotopes: [
{
notation: "²³⁵U",
use: "核能發電與核武",
description: "天然鈾中唯一能進行熱中子核分裂的同位素。",
},
{
notation: "²³⁸U",
use: "核燃料原料與地質定年",
description: "佔天然鈾99%以上的穩定度極高同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鈾的核分裂物理特性與化工製程擁有極為詳盡的實測資料。",
},
},
Np: {
description: "鎿是第一個被發現的人工合成超鈾元素，是一種具有強烈放射性的銀灰色金屬。",
uses: ["核物理研究與中子探測器", "合成鈽-238的原料（用於太空探測器熱電發電機）", "科學研究用途"],
appearance: "常溫下為銀灰色金屬，具備多種晶體結構。",
safety: [
{
level: "高風險",
description: "鎿及其化合物具高度放射性與重金屬毒性，僅限於受高度規範的國家級實驗室中處理。",
},
],
isotopes: [
{
notation: "²³⁷Np",
use: "太空電源與中子偵測",
description: "鎿最穩定且半衰期最長的同位素（約214萬年）。",
},
],
reliability: {
level: "已實測資料",
description: "鎿的化學性質與核反應數據具備完整的實驗測量資料。",
},
},
Pu: {
description: "鈽是一種具高度放射性與劇毒的銀灰色人工超鈾金屬。它在核能工業與核武發展中佔有極其關鍵的地位。",
uses: ["核武器核心裝藥", "太空探測器放射性同位素熱電機（RTG）燃料", "快中子增殖反應爐燃料"],
appearance: "常溫下為銀灰色金屬，接觸空氣後會迅速因氧化而變成暗黃色或橄欖綠色。",
compounds: [
{
formula: "PuO₂",
name: "二氧化鈽",
description: "極難溶於水的穩定陶瓷狀粉末，廣泛用於太空電池的熱源。",
},
],
safety: [
{
level: "高風險",
description: "鈽是已知毒性最強且具極強放射性的元素之一，吸入微量粉塵即可致癌，受國際原子能機構嚴格管制，絕對禁止私自接觸。",
},
],
isotopes: [
{
notation: "²³⁹Pu",
use: "核武與核能",
description: "能夠進行高效核分裂的同位素，是核武器的主要材料。",
},
{
notation: "²³⁸Pu",
use: "太空探測電力供應",
description: "釋放大量衰變熱的同位素，用於卡西尼號、好奇號等太空船的RTG電源。",
},
],
reliability: {
level: "已實測資料",
description: "鈽的冶金學、核分裂性質及生物毒理學均有大量的軍事與科學實測資料。",
},
},
Am: {
description: "鋂是一種人工合成的放射性金屬，屬於錒系元素。它是日常生活中少數能接觸到的放射性元素民用應核種。",
uses: ["家用火災煙霧探測器（離子感煙器）", "工業厚度與密度測量儀", "伽瑪射線與阿爾法射線譜儀校準源"],
appearance: "常溫下為銀白色金屬，暴露在空氣中會緩慢失去光澤。",
safety: [
{
level: "高風險",
description: "鋂具強烈放射性（特別是阿爾法輻射），雖然市售煙霧探測器中的劑量極低且安全，但裸露的鋂源具高度健康危害，不應拆解。",
},
],
isotopes: [
{
notation: "²⁴¹Am",
use: "煙霧探測器與工業儀器",
description: "鋂最主要的同位素，半衰期約432.2年。",
},
],
reliability: {
level: "已實測資料",
description: "鋂的輻射衰變與民用電離特性已有幾十年的實測驗證。",
},
},
Cm: {
description: "鋦是一種硬質、具高放射性的人工超鈾金屬，以科學家居禮夫婦命名。它在強烈輻射下會發出微弱的藍色螢光。",
uses: ["太空探測器上的α粒子X光譜儀（APXS）放射源", "合成更重超重元素的靶材", "同位素熱電機熱源研究"],
appearance: "常溫下為銀白色金屬，在暗處受自身強烈放射性激發會發光。",
safety: [
{
level: "高風險",
description: "鋦釋放高能量的阿爾法粒子，具有極強的放射毒性，若進入體內會囤積於骨骼中破壞造血組織，僅限專業實驗室操作。",
},
],
isotopes: [
{
notation: "²⁴⁴Cm",
use: "太空儀器與熱源",
description: "鋦較容易大量製備的同位素，常作為火星車科學儀器的輻射源。",
},
],
reliability: {
level: "已實測資料",
description: "鋦的結晶學與放射化學數據均為實驗室已實測資料。",
},
},
Bk: {
description: "錇是一種人工合成的放射性金屬，屬於錒系元素，以美國柏克萊加州大學命名。",
uses: ["合成更新、更重的超重元素（如琫元素）之靶材", "基礎核物理與化學電子結構研究", "科學研究用途"],
appearance: "預期為銀白色金屬，但因強烈放射性會破壞自身晶格結構。",
safety: [
{
level: "高風險",
description: "錇具強烈放射性與生物毒性，由於產量極其稀少且半衰期短，僅能在頂級國家實驗室中處理。",
},
],
isotopes: [
{
notation: "²⁴⁹Bk",
use: "合成超重元素靶材",
description: "錇相對較穩定的同位素，半衰期約330天。",
},
],
reliability: {
level: "已實測資料",
description: "錇的化學分離與合成數據具備實驗室實測記錄。",
},
},
Cf: {
description: "鉲是一種具有強烈放射性的人工超鈾金屬。它能釋放大量中子，是世界上最強大的攜帶型中子源之一。",
uses: ["啟動核子反應爐的強效中子源", "癌症放射治療（中子近接治療）", "工業材料無損探傷與黃金、水文探勘"],
appearance: "常溫下為銀白色金屬，在空氣中會緩慢氧化。",
safety: [
{
level: "高風險",
description: "鉲-252釋放大量高穿透性中子與阿爾法射線，具有極高的致死輻射危險，必須在厚重的鉛與水屏蔽容器中操作。",
},
],
isotopes: [
{
notation: "²⁵²Cf",
use: "工業中子源與癌症治療",
description: "強烈自發分裂並釋放大量中子的同位素，每微克每秒能釋放數百萬個中子。",
},
],
reliability: {
level: "已實測資料",
description: "鉲的中子發射率與工業應用擁有詳盡的實測數據。",
},
},
Es: {
description: "鑀是在1952年第一顆氫彈爆炸後的殘餘放射性塵埃中首次被發現的人工超鈾元素。",
uses: ["合成更重超重元素（如鍆、鍩）的研究", "基礎核物理學與量子化學實驗", "科學研究用途"],
appearance: "預期為銀白色金屬，但因強烈放射性產生的熱量會使自身迅速氣化或發光。",
safety: [
{
level: "高風險",
description: "鑀具有極高的放射毒性與強烈發熱性，僅能在具備完善遠端遙控設備的熱室實驗室中處理。",
},
],
isotopes: [
{
notation: "²⁵²Es",
use: "科學研究",
description: "鑀的主要研究同位素之一。",
},
],
reliability: {
level: "已實測資料",
description: "鑀的微量化學特性已有初步實驗測量。",
},
},
Fm: {
description: "鐨是紀念現代物理學之父恩里科·費米而命名的人工放射性超鈾金屬，只能在核子反應爐或粒子加速器中微量合成。",
uses: ["基礎核物理與超重元素性質研究", "科學探索用途"],
appearance: "預期為金屬態，但因產量僅有少數原子，無法製成巨觀實體。",
safety: [
{
level: "高風險",
description: "鐨具強烈放射性，但因半衰期極短且產量極微，對公眾無實際接觸風險，僅在核實驗室受嚴格管制。",
},
],
isotopes: [
{
notation: "²⁵⁷Fm",
use: "核物理實驗",
description: "鐨壽命較長的同位素之一，半衰期約100.5天。",
},
],
reliability: {
level: "已實測資料",
description: "鐨的基礎化學離子行為有實驗測量紀錄。",
},
},
Md: {
description: "鍆是為了紀念化學元素週期表發明者德米特里·門得列夫而命名的人工放射性金屬。",
uses: ["超重元素化學性質的基礎科學研究", "科學研究用途"],
appearance: "預期為金屬態，但因極度稀少無法實際觀察外觀。",
safety: [
{
level: "高風險",
description: "鍆具強烈放射性，僅存在於專業粒子物理實驗室中。",
},
],
isotopes: [
{
notation: "²⁵⁸Md",
use: "科學研究",
description: "半衰期約51.5天的同位素。",
},
],
reliability: {
level: "已實測資料",
description: "鍆的離子交換色層分析已有實驗數據。",
},
},
No: {
description: "鍩是為了紀念諾貝爾獎創辦人阿爾弗雷德·諾貝爾而命名的人工放射性超鈾元素。",
uses: ["核物理與超重元素電子結構研究", "科學研究用途"],
appearance: "理論上為金屬態，但因半衰期極短無法製成塊狀。",
safety: [
{
level: "高風險",
description: "鍩具有強烈放射性，僅能在產生的實驗室環境中受監控存在。",
},
],
isotopes: [
{
notation: "²⁵⁹No",
use: "核物理研究",
description: "鍩相對較穩定的同位素，半衰期約58分鐘。",
},
],
reliability: {
level: "已實測資料",
description: "鍩的衰變模式與氧化態實驗已有記錄。",
},
},
Lr: {
description: "鐒是錒系元素的最後一個成員（第103號元素），以歐內斯特·勞倫斯命名的人工放射性金屬。",
uses: ["探索超錒系元素與週期表邊界的基礎物理研究", "科學研究用途"],
appearance: "理論上為銀白色的金屬固體。",
safety: [
{
level: "高風險",
description: "鐒具強烈放射性且半衰期很短，僅限於頂級粒子加速器實驗室中進行極微量觀測。",
},
],
isotopes: [
{
notation: "²⁶²Lr",
use: "超重元素研究",
description: "鐒較長壽的同位素之一，半衰期約3.6小時。",
},
],
reliability: {
level: "已實測資料",
description: "鐒的第一游離能等基礎物理性質已有實驗測量紀錄。",
},
},
Rf: {
description: "鑪是一種人工合成的放射性過渡金屬，屬於第4族元素。由於其半衰期極短且產量極微，目前僅限於粒子物理與超重元素化學研究。",
uses: ["超重元素核物理研究", "相對論性量子化學實驗", "探討元素週期表邊界與電子排布"],
appearance: "理論上為金屬固體，但因半衰期極短且數量極少，無法實際觀測巨觀外觀。",
safety: [
{
level: "高風險",
description: "具有極強的放射性，僅能在頂級國家級加速器實驗室中受嚴格防護操作。",
},
],
isotopes: [
{
notation: "²⁶⁷Rf",
use: "學術研究",
description: "壽命較長的同位素之一，半衰期約數小時內。",
},
],
reliability: {
level: "已實測資料",
description: "其合成與基礎核物理性質已有實驗測量紀錄。",
},
},
Db: {
description: "銂是一種人工合成的放射性過渡金屬，屬於第5族元素。它只能透過粒子加速器中的核反應微量製造。",
uses: ["超重元素化學性質研究", "核物理反應機制探討", "科學研究用途"],
appearance: "理論上為金屬固體，但無法製成巨觀實體。",
safety: [
{
level: "高風險",
description: "具強烈放射性，僅限於專業核實驗室操作。",
},
],
reliability: {
level: "已實測資料",
description: "其合成與衰變數據已有實驗測量紀錄。",
},
},
Sg: {
description: "𭭗是一種人工合成的放射性過渡金屬，以現代化學先驅格倫·西博格命名。它是第6族的最重成員。",
uses: ["超重元素化學與氣相色譜研究", "探討第6族元素的化學同源性", "核物理基礎研究"],
appearance: "理論上為金屬固體。",
safety: [
{
level: "高風險",
description: "具強烈放射性，僅限於粒子物理實驗室中處理。",
},
],
reliability: {
level: "已實測資料",
description: "其合成及初步氣相化學性質已有實驗測量紀錄。",
},
},
Bh: {
description: "𭧴是一種人工合成的放射性過渡金屬，屬於第7族元素。其化學性質預期與錳和錸相似。",
uses: ["超重元素週期表定位研究", "核物理與衰變鏈分析", "科學研究用途"],
appearance: "理論上為金屬固體。",
safety: [
{
level: "高風險",
description: "具強烈放射性，僅限於專業核實驗室操作。",
},
],
reliability: {
level: "已實測資料",
description: "其合成與阿爾法衰變數據已有實驗測量紀錄。",
},
},
Hs: {
description: "𭫼是一種人工合成的放射性過渡金屬，屬於第8族元素。它能形成揮發性的四氧化物，類似鋨。",
uses: ["超重元素揮發性化合物化學研究", "核結構與超重核穩定島理論驗證", "科學研究用途"],
appearance: "理論上為金屬固體。",
safety: [
{
level: "高風險",
description: "具強烈放射性，僅限於高度防護的物理實驗室操作。",
},
],
reliability: {
level: "已實測資料",
description: "其合成及揮發性氧化物實驗已有實測記錄。",
},
},
Mt: {
description: "䥑是一種人工合成的放射性過渡金屬，以著名物理學家莉澤·邁特納命名，屬於第9族元素。",
uses: ["超重核物理研究", "探討第9族元素的金屬鍵與相對論效應", "科學研究用途"],
appearance: "理論上為金屬固體。",
safety: [
{
level: "高風險",
description: "具強烈放射性，僅限於專業加速器實驗室操作。",
},
],
reliability: {
level: "已實測資料",
description: "其合成與衰變鏈數據已有實驗測量紀錄。",
},
},
Ds: {
description: "𠫓是一種人工合成的放射性過渡金屬，以其發現地德國達姆城命名，屬於第10族元素。",
uses: ["超重元素合成與核物理研究", "探討類鉑元素的化學性質", "科學研究用途"],
appearance: "理論上為金屬固體。",
safety: [
{
level: "高風險",
description: "具強烈放射性，僅限於專業物理實驗室操作。",
},
],
reliability: {
level: "已實測資料",
description: "其合成與基礎衰變數據已有實驗測量紀錄。",
},
},
Rg: {
description: "𨭆是一種人工合成的放射性過渡金屬，以X射線發現者倫琴命名，屬於第11族元素。",
uses: ["超重元素電子結構研究", "探討類金元素的相對論性收縮效應", "科學研究用途"],
appearance: "理論上為金屬固體。",
safety: [
{
level: "高風險",
description: "具強烈放射性，僅限於頂級核物理實驗室操作。",
},
],
reliability: {
level: "已實測資料",
description: "其合成與基礎衰變數據已有實驗測量紀錄。",
},
},
Cn: {
description: "鎶是一種人工合成的放射性過渡金屬，屬於第12族元素。實驗顯示它在常溫下可能呈現高度揮發性，甚至表現出類似惰性氣體的某些物理特性。",
uses: ["超重元素氣相吸附與揮發性研究", "相對論量子化學實驗", "核物理基礎研究"],
appearance: "理論上在常溫下可能為揮發性液體或氣體金屬。",
safety: [
{
level: "高風險",
description: "具強烈放射性，僅限於專業核實驗室操作。",
},
],
reliability: {
level: "已實測資料",
description: "其揮發性與吸附性質已有突破性的實驗測量紀錄。",
},
},
Nh: {
description: "鉨是一種人工合成的放射性元素，屬於第13族，由日本理化學研究所團隊首次命名發現。",
uses: ["超重元素週期表定位研究", "探討第13族重元素的相對論效應", "科學研究用途"],
appearance: "理論上為金屬固體。",
safety: [
{
level: "高風險",
description: "具強烈放射性，僅限於專業加速器實驗室操作。",
},
],
reliability: {
level: "已實測資料",
description: "其合成與衰變鏈數據已有實驗測量紀錄。",
},
},
Fl: {
description: "鈇是一種人工合成的放射性元素，屬於第14族。理論預測其化學性質可能受到強烈的相對論效應影響，表現出類似惰性氣體的惰性。",
uses: ["超重元素氣相化學與惰性行為研究", "探討「安定島」理論", "科學研究用途"],
appearance: "理論上為金屬固體或揮發性物質。",
safety: [
{
level: "高風險",
description: "具強烈放射性，僅限於專業核實驗室操作。",
},
],
reliability: {
level: "已實測資料",
description: "其初步揮發性與合成數據已有實驗測量紀錄。",
},
},
Mc: {
description: "鏌是一種人工合成的放射性元素，屬於第15族。它只能透過離子轟擊靶材微量合成。",
uses: ["超重元素核物理研究", "探討重氮族元素的化學性質", "科學研究用途"],
appearance: "理論上為金屬固體。",
safety: [
{
level: "高風險",
description: "具強烈放射性，僅限於頂級粒子物理實驗室操作。",
},
],
reliability: {
level: "已實測資料",
description: "其合成與阿爾法衰變數據已有實驗測量紀錄。",
},
},
Lv: {
description: "鉝是一種人工合成的放射性元素，屬於第16族。",
uses: ["超重元素核結構研究", "探討重氧族元素的化學性質", "科學研究用途"],
appearance: "理論上為固體元素。",
safety: [
{
level: "高風險",
description: "具強烈放射性，僅限於專業實驗室操作。",
},
],
reliability: {
level: "已實測資料",
description: "其合成與衰變鏈數據已有實驗測量紀錄。",
},
},
Ts: {
description: "鿬是一種人工合成的放射性鹵素元素。由於其原子序極高，預期會受到顯著的相對論效應影響。",
uses: ["超重鹵素化學與物理性質研究", "探討元素週期表第7周期結尾特性", "科學研究用途"],
appearance: "理論上預期為固態鹵素。",
safety: [
{
level: "高風險",
description: "具強烈放射性與高能量衰變，僅限於頂級國家實驗室操作。",
},
],
reliability: {
level: "已實測資料",
description: "其合成與基礎核物理性質已有實驗測量紀錄。",
},
},
Og: {
description: "鿫是目前已知原子序最大（118號）的元素，屬於第18族。儘管被歸類為鈍氣，但因強烈的相對論效應，它在常溫下可能並非氣體，而是具半導體特性的固體。",
uses: ["探索週期表極限與相對論效應的物理研究", "超重核穩定島理論驗證", "科學研究用途"],
appearance: "理論預測在常溫下可能為具備獨特半導體特性的固體狀態。",
safety: [
{
level: "高風險",
description: "具極強的放射性與極短半衰期，僅能在頂級國家級加速器實驗室中受防護操作。",
},
],
reliability: {
level: "已實測資料",
description: "其合成與基礎阿爾法衰變數據已有實驗測量紀錄。",
},
}
};