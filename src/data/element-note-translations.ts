export const elementNoteTranslations = {
  en: {
    H: {
      description: "Hydrogen is the lightest and most abundant element in the universe, existing as a diatomic gas at room temperature. It is a core component of many important compounds.",
      uses: ["Ammonia production", "Fuel cells", "Rocket fuel"],
      appearance: "Colorless, odorless gas at room temperature.",
      lifeRole: "Hydrogen is a core element in water and most organic compounds, indispensable in the structure and energy metabolism of living systems.",
      compounds: [
        {
          formula: "H₂O",
          name: "Water",
          description: "Composed of hydrogen and oxygen, it is an essential medium for life and many chemical reactions.",
        },
        {
          formula: "NH₃",
          name: "Ammonia",
          description: "Commonly used in fertilizer production and is an important industrial chemical raw material.",
        },
      ],
      reactions: [
        {
          equation: "2H₂ + O₂ → 2H₂O",
          description: "Hydrogen gas reacts with oxygen to form water, releasing a large amount of energy.",
          conditions: "Ignition",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Hydrogen gas is highly flammable and can form dangerous explosive mixtures when mixed with air; it should not be prepared or burned independently in non-professional environments.",
        },
      ],
      isotopes: [
        {
          notation: "Deuterium (²H/D)",
          use: "Nuclear reaction research and isotope tracing",
          description: "A stable isotope of hydrogen, often used in scientific research in the form of heavy water.",
        },
        {
          notation: "Tritium (³H/T)",
          use: "Tracing and nuclear fusion research",
          description: "A radioactive isotope; related uses are only suitable for regulated professional environments.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The basic properties, common compounds, and isotope data of hydrogen are all empirically measured data that have been extensively scientifically verified.",
      },
    },
    He: {
      description: "Helium is the second most abundant element in the universe and is a noble gas. Its chemical properties are extremely unreactive, and it exhibits a unique superfluidity phenomenon at ultra-low temperatures.",
      uses: ["Cooling superconducting magnets in MRI", "Lifting gas for balloons and airships", "Deep-sea diving gas mixtures"],
      appearance: "Colorless, odorless gas at room temperature.",
      safety: [
        {
          level: "Warning",
          description: "Helium itself is non-toxic, but a massive leak in a confined space can displace oxygen, leading to a risk of hypoxia and asphyxiation.",
        },
      ],
      isotopes: [
        {
          notation: "³He",
          use: "Ultra-low temperature physics research",
          description: "A rare stable isotope widely used in cryogenic cooling and neutron detectors.",
        },
        {
          notation: "⁴He",
          use: "Common lifting and cooling uses",
          description: "The most abundant helium isotope in nature, primarily sourced from underground radioactive decay.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The physical properties and inert characteristics of helium are widely applied empirical data.",
      },
    },
    Li: {
      description: "Lithium is the lightest metal element, an alkali metal that is soft and highly susceptible to oxidation. It plays a crucial role in modern battery technology and alloy materials.",
      uses: ["Lithium-ion batteries", "Aerospace high-strength aluminum alloys", "Psychiatric medications (as lithium salts)"],
      appearance: "Silvery-white metal at room temperature; rapidly reacts with air and darkens when cut.",
      lifeRole: "Elemental lithium metal is toxic to the human body and does not exist within it; medicine uses trace amounts of lithium ions (Li⁺), which help stabilize neurotransmitters and mood.",
      compounds: [
        {
          formula: "Li₂CO₃",
          name: "Lithium carbonate",
          description: "Often used as a psychiatric medication, and also in the ceramics and glass industries.",
        },
        {
          formula: "LiCoO₂",
          name: "Lithium cobalt oxide",
          description: "A common cathode material for lithium-ion batteries.",
        },
      ],
      reactions: [
        {
          equation: "2Li + 2H₂O → 2LiOH + H₂",
          description: "Lithium metal reacts violently with water to form alkaline lithium hydroxide and hydrogen gas.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Lithium metal reacts violently with water or moisture in the air, producing flammable hydrogen gas; it should not be handled independently.",
        },
      ],
      isotopes: [
        {
          notation: "⁶Li",
          use: "Nuclear industry materials",
          description: "Can be used to absorb neutrons or as a raw material for thermonuclear fusion.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The chemical reactivity and compound properties of lithium are supported by abundant empirical data.",
      },
    },
    Be: {
      description: "Beryllium is a grayish-white alkaline earth metal that is lightweight, high-strength, and has a high melting point. Due to the high toxicity of its dust, its applications are mostly limited to specialized industry and defense.",
      uses: ["X-ray tube windows", "Aerospace and defense high-rigidity alloys", "Neutron reflectors in nuclear reactors"],
      appearance: "Hard, grayish-white metal at room temperature.",
      compounds: [
        {
          formula: "BeO",
          name: "Beryllium oxide",
          description: "A high-temperature ceramic material with excellent thermal conductivity and outstanding electrical insulation.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Inhalation of beryllium dust or fumes can cause severe chronic berylliosis; it should only be handled under strict industrial safety regulations.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The physical properties and toxic effects of beryllium have empirical data from authoritative institutions.",
      },
    },
    B: {
      description: "Boron is an extremely hard metalloid element, commonly found in nature in the form of borates. It holds unique value in materials science and semiconductor fields.",
      uses: ["Borosilicate heat-resistant glass manufacturing", "P-type dopant for semiconductors", "Nuclear reactor control rods"],
      appearance: "Crystalline form is a black or silvery-gray hard solid; amorphous form is a brown powder.",
      lifeRole: "Elemental boron has no known function in the human body; however, in plant growth, borates are an essential micronutrient for cell wall development.",
      compounds: [
        {
          formula: "H₃BO₃",
          name: "Boric acid",
          description: "A common mild disinfectant, also used for controlling pests like cockroaches.",
        },
        {
          formula: "B₂O₃",
          name: "Boron trioxide",
          description: "An important raw material for manufacturing high-strength glass and specialty ceramics.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁰B",
          use: "Neutron absorber",
          description: "Has a very high thermal neutron absorption cross-section, widely used in nuclear reactor control.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Various physical and chemical data for boron are extensively verified empirical data.",
      },
    },
    C: {
      description: "Carbon is the foundational element of all known life on Earth, capable of forming a vast number of complex organic compounds. It has allotropes with vastly different physical properties in nature, such as graphite and diamond.",
      uses: ["Steel and alloy smelting", "Polymer and plastics industry", "Carbon-14 radiocarbon dating"],
      appearance: "Solid at room temperature, commonly found as black graphite powder or colorless, transparent diamond crystals.",
      lifeRole: "Carbon is the core framework element for proteins, lipids, carbohydrates, and nucleic acids in living organisms.",
      compounds: [
        {
          formula: "CO₂",
          name: "Carbon dioxide",
          description: "A product of animal and plant respiration, and the carbon source for plant photosynthesis.",
        },
        {
          formula: "CH₄",
          name: "Methane",
          description: "The primary component of natural gas, and also a potent greenhouse gas.",
        },
      ],
      reactions: [
        {
          equation: "C + O₂ → CO₂",
          description: "Carbon completely burning in oxygen produces carbon dioxide and releases thermal energy.",
          conditions: "Ignition",
        },
      ],
      isotopes: [
        {
          notation: "¹²C",
          use: "Mass spectrometry and atomic weight standard",
          description: "The most abundant stable isotope, used as the baseline for defining atomic weight.",
        },
        {
          notation: "¹⁴C",
          use: "Radiometric dating",
          description: "A radioactive isotope present in trace amounts in nature, used for determining the age of archaeological artifacts.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The properties of carbon and its allotropic structures are well-researched empirical data in the scientific community.",
      },
    },
    N: {
      description: "Nitrogen is the most abundant element in Earth's atmosphere, existing as an extremely stable diatomic gas molecule at room temperature. It is a crucial component of many industrial chemicals and biological molecules.",
      uses: ["Ammonia synthesis via Haber process", "Food packaging and industrial inert environments", "Liquid nitrogen cryogenic freezing technology"],
      appearance: "Colorless, odorless gas at room temperature.",
      lifeRole: "The human body cannot directly absorb elemental nitrogen gas from the air; it must ingest proteins and amino acids through diet to obtain the key nitrogen element that makes up DNA and proteins.",
      compounds: [
        {
          formula: "NH₃",
          name: "Ammonia",
          description: "An important synthetic chemical, primarily used to manufacture nitrogen fertilizers and nitric acid.",
        },
        {
          formula: "HNO₃",
          name: "Nitric acid",
          description: "A strongly oxidizing strong acid, used in manufacturing explosives, fertilizers, and chemical synthesis.",
        },
      ],
      reactions: [
        {
          equation: "N₂ + 3H₂ ⇌ 2NH₃",
          description: "Nitrogen and hydrogen can synthesize ammonia under extreme conditions, which is the foundation of modern agricultural fertilizers (Haber process).",
          conditions: "High temperature, high pressure, and a catalyst",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Nitrogen gas itself is non-toxic, but accumulation in confined spaces can cause hypoxia and asphyxiation; liquid nitrogen is extremely cold and contact can cause severe frostbite.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁵N",
          use: "Agricultural and biological tracer",
          description: "A stable heavy isotope, commonly used to trace the pathways of nitrogen in ecosystems and human metabolism.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The physicochemical properties and reaction pathways of nitrogen gas are century-verified empirical data.",
      },
    },
    O: {
      description: "Oxygen is the most abundant element in the Earth's crust and a highly reactive nonmetal. It is crucial for the cellular respiration of the vast majority of life on Earth.",
      uses: ["Medical and high-altitude oxygen supply", "Steel smelting", "Oxidizer for rocket propellants"],
      appearance: "Colorless, odorless gas at room temperature; liquid oxygen is pale blue.",
      lifeRole: "Oxygen (O₂) is inhaled into the lungs and binds with hemoglobin, participating in cellular aerobic respiration to generate energy; oxygen is also a component of water (H₂O), which accounts for most of the human body's weight.",
      compounds: [
        {
          formula: "H₂O",
          name: "Water",
          description: "The most common compound on the Earth's surface, supporting the operation of all known life systems.",
        },
        {
          formula: "O₃",
          name: "Ozone",
          description: "An allotrope of oxygen; in the stratosphere it absorbs ultraviolet light, while at ground level it is an air pollutant.",
        },
      ],
      reactions: [
        {
          equation: "2Mg + O₂ → 2MgO",
          description: "Reactive metals like magnesium burn in oxygen, emitting intense white light and forming solid oxides.",
          conditions: "Ignition",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Oxygen itself does not burn, but high concentrations strongly support combustion; contact with oils or ignition sources can easily trigger fierce fires.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁸O",
          use: "Paleoclimate and hydrology research",
          description: "A stable heavy isotope, often used to infer ancient temperatures through its ratio in ice cores and marine sediments.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The combustion-supporting properties, biological functions, and physical constants of oxygen all have conclusive empirical data.",
      },
    },
    F: {
      description: "Fluorine is the most electronegative and chemically reactive halogen element. It almost never exists as a free element in nature, mostly appearing as fluoride minerals.",
      uses: ["Teflon (PTFE) manufacturing", "Uranium extraction and enrichment in the nuclear industry", "Toothpaste for cavity prevention (as fluorides)"],
      appearance: "Pale yellow gas with a strong, pungent odor at room temperature.",
      lifeRole: "Elemental fluorine gas is highly toxic; trace amounts of fluoride ions (F⁻) can combine with tooth enamel to form fluorapatite, helping to resist cavities. Bones also contain trace amounts of fluorides.",
      compounds: [
        {
          formula: "HF",
          name: "Hydrofluoric acid",
          description: "A weak acid but intensely corrosive and highly toxic upon skin contact, commonly used in glass etching and semiconductor manufacturing.",
        },
        {
          formula: "NaF",
          name: "Sodium fluoride",
          description: "A common additive for water fluoridation and anti-cavity toothpaste.",
        },
      ],
      reactions: [
        {
          equation: "H₂ + F₂ → 2HF",
          description: "Fluorine gas is extremely reactive; even at ultra-low temperatures and in the dark, it can react explosively with hydrogen to form hydrogen fluoride.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Fluorine gas and hydrofluoric acid are highly toxic and extremely corrosive, reacting violently with most substances; they should absolutely not be handled independently.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁹F",
          use: "Nuclear Magnetic Resonance (NMR) spectroscopy",
          description: "The only natural stable isotope, widely used for structural chemical analysis due to its nuclear spin properties.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The extreme reactivity and compound toxicity of fluorine have complete industrial safety and empirical data.",
      },
    },
    Ne: {
      description: "Neon is an extremely inert monatomic gas element. It is relatively abundant in the universe but rare in Earth's atmosphere. When electrified in a vacuum tube, it emits a characteristic red-orange glow.",
      uses: ["Neon lights and advertising signs", "Helium-neon laser technology", "Cryogenic refrigerant"],
      appearance: "Colorless, odorless gas at room temperature; emits a bright red-orange light when electrically excited.",
      safety: [
        {
          level: "Caution",
          description: "Neon is a non-toxic noble gas, but high concentration release in confined environments can displace oxygen and cause hypoxia and asphyxiation.",
        },
      ],
      isotopes: [
        {
          notation: "²⁰Ne",
          use: "Fundamental physics research",
          description: "The most abundant neon isotope in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The physical, thermodynamic, and optical properties of neon are empirical data widely applied in the physics community.",
      },
    },
    Na: {
      description: "Sodium is a soft, silvery-white alkali metal that is highly reactive chemically. It never exists as a free element in nature, but is widely distributed in the form of compounds.",
      uses: ["Liquid metal coolant in nuclear reactors", "High-pressure sodium vapor lamps for streetlights", "Reducing agent in chemical synthesis and metallurgy"],
      appearance: "Soft, silvery-white metal at room temperature; rapidly oxidizes and loses its luster upon contact with air after being cut.",
      lifeRole: "Elemental sodium metal explodes upon contact with water; the human body and biosphere rely on sodium ions (Na⁺), which are responsible for regulating water balance inside and outside cells and conducting nerve impulses.",
      compounds: [
        {
          formula: "NaCl",
          name: "Sodium chloride",
          description: "Commonly known as table salt, it is a human dietary necessity and one of the most important chemical industry raw materials.",
        },
        {
          formula: "NaOH",
          name: "Sodium hydroxide",
          description: "A strongly alkaline substance, commonly known as caustic soda, widely used in making soap, paper, and detergents.",
        },
      ],
      reactions: [
        {
          equation: "2Na + 2H₂O → 2NaOH + H₂",
          description: "Sodium metal reacts violently with water to produce hydrogen gas and sodium hydroxide, releasing a large amount of heat, which often causes the generated hydrogen gas to burn or even explode.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Elemental sodium reacts violently and catches fire upon contact with moisture or air; it must be stored under mineral oil or inert gas and should never be handled independently.",
        },
      ],
      isotopes: [
        {
          notation: "²³Na",
          use: "NMR research and daily stable element",
          description: "The only stable isotope existing in nature, constituting all natural sodium compounds.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "All thermodynamic data, chemical properties, and physiological functions of sodium have complete scientific empirical data.",
      },
    },
    Mg: {
      description: "Magnesium is a lightweight, silvery-white alkaline earth metal. With an excellent strength-to-weight ratio, it is not only an important engineering material but also an indispensable element for Earth's life systems.",
      uses: ["Lightweight alloys for aerospace and automotive industries", "Illuminant in fireworks and flares", "Manufacturing refractory materials"],
      appearance: "Solid, silvery-white metal at room temperature.",
      lifeRole: "Magnesium is the core element of the chlorophyll molecule, enabling plants to photosynthesize; in the human body, magnesium ions (Mg²⁺) participate in hundreds of enzyme reactions and energy metabolism.",
      compounds: [
        {
          formula: "MgO",
          name: "Magnesium oxide",
          description: "An extremely heat-resistant solid, often used as lining material for blast furnaces and kilns.",
        },
        {
          formula: "MgSO₄",
          name: "Magnesium sulfate",
          description: "Commonly known as Epsom salt, widely used in agricultural fertilizers and medical applications.",
        },
      ],
      reactions: [
        {
          equation: "2Mg + O₂ → 2MgO",
          description: "Magnesium reacts with oxygen at high temperatures, burning and emitting a dazzling, intense white light.",
          conditions: "Ignition",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Powdered or ribbon magnesium metal is highly flammable, burning at extremely high temperatures and emitting strong light; water or carbon dioxide fire extinguishers cannot be used to extinguish a magnesium fire.",
        },
      ],
      isotopes: [
        {
          notation: "²⁴Mg",
          use: "Biochemical research baseline",
          description: "The most abundant stable isotope of magnesium, accounting for over 70% of natural magnesium.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The physical properties, combustion phenomena, and biological metabolism mechanisms of magnesium all have detailed and authoritative empirical data.",
      },
    },
    Al: {
      description: "Aluminum is the most abundant metal element in the Earth's crust. Due to its low density and the easy formation of a dense, corrosion-resistant oxide film on its surface, it is one of the most important metals in modern industry.",
      uses: ["Aircraft and transportation vehicle structures", "Beverage cans and food packaging foil", "High-voltage transmission lines"],
      appearance: "Soft, lustrous, silvery-white metal at room temperature.",
      lifeRole: "Elemental aluminum and its ions have no known physiological function in humans and biological systems; excessive aluminum ions (Al³⁺) can even be toxic to plants and the nervous system.",
      compounds: [
        {
          formula: "Al₂O₃",
          name: "Aluminum oxide",
          description: "An extremely hard compound, it is the main component of sapphires and rubies, and also a raw material for abrasives and refractories.",
        },
        {
          formula: "KAl(SO₄)₂·12H₂O",
          name: "Alum",
          description: "Traditionally used in water purification, leather tanning, and the food industry.",
        },
      ],
      reactions: [
        {
          equation: "4Al + 3O₂ → 2Al₂O₃",
          description: "Aluminum easily combines with oxygen in the air, forming a dense aluminum oxide film on its surface, thereby preventing further oxidation.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Large pieces of aluminum metal are extremely safe, but extremely fine aluminum powder suspended in the air can cause dust explosions.",
        },
      ],
      isotopes: [
        {
          notation: "²⁷Al",
          use: "NMR research and industrial applications",
          description: "The only stable isotope existing in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Aluminum's engineering data, chemical properties, and environmental impacts all possess long-term, extensive empirical data.",
      },
    },
    Si: {
      description: "Silicon is a metalloid with semiconducting properties, being the second most abundant element in the Earth's crust. It is the cornerstone of the modern electronics industry and computer technology.",
      uses: ["Semiconductor chips and microelectronic components", "Solar cells", "Manufacturing glass, cement, and ceramics"],
      appearance: "At room temperature, pure silicon is a dark gray or blue-gray crystalline solid with a metallic luster.",
      lifeRole: "The human body's requirement for silicon is minimal; however, some plants and organisms like sponges and diatoms use large amounts of silicon dioxide (SiO₂) to build hard structures and shells.",
      compounds: [
        {
          formula: "SiO₂",
          name: "Silicon dioxide",
          description: "Commonly found in nature as quartz and sand, it is the primary raw material for making glass and a major component of the Earth's crust.",
        },
        {
          formula: "SiC",
          name: "Silicon carbide",
          description: "An extremely hard synthetic material, used for abrasives and high-power semiconductor devices.",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Solid silicon itself is non-toxic, but the crystalline free silica dust generated during mining, cutting, or processing can lead to silicosis (a severe lung disease) if inhaled long-term.",
        },
      ],
      isotopes: [
        {
          notation: "²⁸Si",
          use: "Precision measurement and semiconductor research",
          description: "The most common stable isotope of silicon, once used to create perfect silicon spheres to define the kilogram.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The crystal structure, electrical properties, and toxicology of silicon dioxide all have extremely rich empirical data.",
      },
    },
    P: {
      description: "Phosphorus is a highly reactive nonmetal element that never exists as a free element in nature. It has several allotropes, the most common being white phosphorus and red phosphorus.",
      uses: ["Manufacturing agricultural phosphorus fertilizers", "Striking surface of matchboxes (red phosphorus)", "N-type dopant for semiconductors"],
      appearance: "White phosphorus is a waxy, white or yellowish translucent solid with a garlic-like odor; red phosphorus is a dark red powder.",
      lifeRole: "Phosphorus is a core element of the DNA and RNA backbone in cells, and orchestrates energy transfer in organisms in the form of ATP (adenosine triphosphate); it is also an important component of bone calcium phosphate.",
      compounds: [
        {
          formula: "H₃PO₄",
          name: "Phosphoric acid",
          description: "An important chemical raw material, widely used in making fertilizers, food additives, and rust removers.",
        },
        {
          formula: "Ca₃(PO₄)₂",
          name: "Calcium phosphate",
          description: "The main inorganic mineral component constituting the bones and teeth of vertebrates.",
        },
      ],
      reactions: [
        {
          equation: "P₄ + 5O₂ → P₄O₁₀",
          description: "White phosphorus easily autoignites with oxygen in the air at room temperature, forming white smoke of tetraphosphorus decaoxide.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "White phosphorus is highly toxic and autoignites in air, causing severe chemical burns; handling phosphorus chemicals requires highly professional regulations and should absolutely not be done independently.",
        },
      ],
      isotopes: [
        {
          notation: "³¹P",
          use: "NMR analysis and biochemical research",
          description: "The only natural stable isotope; its nuclear spin properties make it very suitable for tracing biochemical metabolic pathways.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The properties of phosphorus allotropes, combustion phenomena, and biochemical functions all have complete empirical data.",
      },
    },
    S: {
      description: "Sulfur is a prolific yellow nonmetal element, commonly found in nature as elemental sulfur near volcanoes or in sulfide minerals. It plays a critical role in both the chemical industry and biological systems.",
      uses: ["Sulfuric acid production", "Rubber vulcanization (improving tire durability)", "Agricultural fungicides and fertilizer production"],
      appearance: "Bright yellow, odorless, brittle, lightweight crystalline solid at room temperature.",
      lifeRole: "Elemental sulfur is non-toxic but cannot be absorbed directly by the human body; living organisms rely on sulfur-containing amino acids (like cysteine) to construct the three-dimensional structure of proteins and maintain normal metabolism.",
      compounds: [
        {
          formula: "H₂SO₄",
          name: "Sulfuric acid",
          description: "Known as the 'mother of the chemical industry,' it is the highest-volume strong acid produced globally, widely used in the fertilizer and battery industries.",
        },
        {
          formula: "H₂S",
          name: "Hydrogen sulfide",
          description: "A highly toxic, flammable gas with a strong odor of rotten eggs, commonly found in volcanic gases and decomposing organic matter.",
        },
      ],
      reactions: [
        {
          equation: "S + O₂ → SO₂",
          description: "Sulfur burns in air with a blue flame, producing sulfur dioxide gas which has a strong, irritating odor.",
          conditions: "Ignition",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Burning sulfur produces toxic sulfur dioxide gas, which severely irritates the respiratory tract; most sulfide gases are also highly toxic and should not be handled in poorly ventilated areas or non-professional environments.",
        },
      ],
      isotopes: [
        {
          notation: "³²S",
          use: "Geological and cosmochemical research",
          description: "The most abundant sulfur isotope in nature.",
        },
        {
          notation: "³⁴S",
          use: "Ecological tracer",
          description: "A stable heavy isotope, often used to trace paleoenvironments and food chains via sulfur isotope ratios.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The combustion products, compound toxicology, and biological roles of sulfur all have definitive scientific empirical data.",
      },
    },
    Cl: {
      description: "Chlorine is a highly reactive halogen element. It is a strong oxidizing agent, widely applied in disinfection and chemical synthesis processes worldwide.",
      uses: ["Tap water and swimming pool disinfection", "Manufacturing polyvinyl chloride (PVC) plastics", "Pharmaceutical and pesticide synthesis"],
      appearance: "Yellow-green gas with a strong, choking odor at room temperature.",
      lifeRole: "Elemental chlorine gas is highly toxic; however, chloride ions (Cl⁻) work with sodium ions in the human body to maintain extracellular fluid osmotic pressure and water balance, and make up stomach acid (hydrochloric acid).",
      compounds: [
        {
          formula: "NaCl",
          name: "Sodium chloride",
          description: "The most common chlorine compound in nature, serving as the salt required by the human body and raw material for industrial electrolytic chlorine production.",
        },
        {
          formula: "HCl",
          name: "Hydrogen chloride (Hydrochloric acid)",
          description: "Forms a strong acid when dissolved in water, widely used for metal rust removal and industrial cleaning.",
        },
      ],
      reactions: [
        {
          equation: "H₂ + Cl₂ → 2HCl",
          description: "When chlorine and hydrogen gases are mixed, they react explosively under strong light or ignition to form hydrogen chloride gas.",
          conditions: "Light exposure or ignition",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Chlorine is a highly corrosive and toxic chemical weapon-grade gas; inhalation causes severe lung damage and can be fatal. Chlorine bleach must never be mixed with acidic cleaners.",
        },
      ],
      isotopes: [
        {
          notation: "³⁵Cl",
          use: "Chemical analysis baseline",
          description: "The most abundant chlorine isotope in nature, making up about three-quarters of the total.",
        },
        {
          notation: "³⁷Cl",
          use: "Environmental chemical tracing",
          description: "A stable heavy isotope; its ratio with ³⁵Cl is frequently used in mass spectrometry and groundwater pollution source tracing.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The toxicity, bleaching action, and industrial chemical properties of chlorine gas possess extremely detailed empirical and historical records.",
      },
    },
    Ar: {
      description: "Argon is an extremely stable monatomic noble gas and the third most abundant gas in Earth's atmosphere (about 0.93%). It does not participate in chemical reactions under normal conditions.",
      uses: ["Shielding gas in arc welding (preventing high-temperature metal oxidation)", "Filler gas in incandescent and fluorescent lamps", "Inert environment for semiconductor wafer manufacturing"],
      appearance: "Colorless, odorless gas at room temperature.",
      safety: [
        {
          level: "Warning",
          description: "Argon is completely non-toxic, but it is heavier than air. A massive leak in a confined space or deep pit will settle at the bottom, displacing oxygen and causing a risk of sudden asphyxiation.",
        },
      ],
      isotopes: [
        {
          notation: "⁴⁰Ar",
          use: "Geochronology",
          description: "The key isotope in potassium-argon dating, used to determine the age of rocks and meteorites.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The physical inertness, thermodynamic behavior, and isotopic dating applications of argon have abundant empirical data.",
      },
    },
    K: {
      description: "Potassium is an extremely reactive, silvery-white alkali metal. It never exists as a free element in nature, mostly distributed widely as minerals or dissolved salts in seawater.",
      uses: ["Agricultural potassium fertilizer production", "Industrial potassium hydroxide and soap", "Strong reducing agent in laboratories"],
      appearance: "Soft, silvery-white metal at room temperature; rapidly oxidizes and loses luster when cut and exposed to air.",
      lifeRole: "Elemental potassium metal violently explodes upon contact with water; humans and plants rely on potassium ions (K⁺), which maintain osmotic pressure, nerve conduction, and muscle contraction within cells.",
      compounds: [
        {
          formula: "KCl",
          name: "Potassium chloride",
          description: "The most common potassium fertilizer, also often used medically for potassium supplementation.",
        },
        {
          formula: "KNO₃",
          name: "Potassium nitrate",
          description: "An important fertilizer and the main ingredient in traditional black powder.",
        },
      ],
      reactions: [
        {
          equation: "2K + 2H₂O → 2KOH + H₂",
          description: "Potassium metal reacts violently with water to produce hydrogen gas; the intense heat released directly ignites or even detonates the generated hydrogen.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Potassium metal reacts violently and can catch fire or explode upon contact with water, oxygen, or moisture in the air. It must be stored in mineral oil and should never be handled independently.",
        },
      ],
      isotopes: [
        {
          notation: "⁴⁰K",
          use: "Geochronology and natural radiation source",
          description: "A trace radioactive isotope in nature, it is one of the primary sources of natural background radiation in rocks and the human body.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The chemical reactivity, physiological functions, and isotopic characteristics of potassium are backed by abundant and complete scientific empirical data.",
      },
    },
    Ca: {
      description: "Calcium is a silvery-gray alkaline earth metal with fairly high chemical reactivity. It is the fifth most abundant element in the Earth's crust and an important building block for the structure of most living organisms.",
      uses: ["Reducing agent in smelting other metals", "Manufacturing cement and building materials (in compound form)", "Deoxidizer in steel and alloys"],
      appearance: "Relatively hard, silvery-gray metal at room temperature.",
      lifeRole: "Elemental calcium is corrosive and absent in biological systems; the human body uses calcium ions (Ca²⁺) to transmit nerve signals and constructs bones and teeth using calcium phosphate compounds.",
      compounds: [
        {
          formula: "CaCO₃",
          name: "Calcium carbonate",
          description: "The main component of limestone, marble, and seashells, commonly used in construction and calcium supplements.",
        },
        {
          formula: "CaO",
          name: "Calcium oxide",
          description: "Commonly known as quicklime, it releases a large amount of heat when mixed with water to form slaked lime, widely used in industry and construction.",
        },
      ],
      reactions: [
        {
          equation: "Ca + 2H₂O → Ca(OH)₂ + H₂",
          description: "Calcium metal reacts with water, steadily releasing hydrogen gas and forming a slightly soluble, alkaline calcium hydroxide solution.",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Elemental calcium metal generates flammable hydrogen gas and corrosive lye upon contact with water or moisture; direct skin contact should be avoided, and it must be stored properly.",
        },
      ],
      isotopes: [
        {
          notation: "⁴⁰Ca",
          use: "Nuclear physics research",
          description: "The most abundant stable isotope of calcium in nature, accounting for about 97% of natural calcium on Earth.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The crystal structure, reaction thermodynamics, and biomedical data of calcium are empirical data verified by authoritative institutions.",
      },
    },
    Sc: {
      description: "Scandium is a lightweight, silvery-white transition metal, classified as a rare earth element. Although widely distributed in the Earth's crust, it is rarely concentrated, making extraction difficult and relatively expensive.",
      uses: ["Manufacturing aerospace-grade scandium-aluminum alloys", "High-strength sports equipment (like bicycle frames)", "Luminescent additive in metal halide lamps"],
      appearance: "Silvery-white metal at room temperature; develops a yellowish or pinkish cast when oxidized in air.",
      compounds: [
        {
          formula: "Sc₂O₃",
          name: "Scandium oxide",
          description: "An important raw material for extracting scandium metal and manufacturing high-efficiency solid-state lasers.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Elemental scandium metal has no obvious toxicity, but extremely fine scandium powder is flammable in air.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The metallurgical properties and alloy application data of scandium are empirical data in modern materials science.",
      },
    },
    Ti: {
      description: "Titanium is a hard, lightweight, and corrosion-resistant silvery-gray transition metal. It has an extremely high strength-to-weight ratio and exhibits outstanding chemical stability in harsh environments.",
      uses: ["Aerospace airframes and engine components", "Artificial joints and dental implants", "Manufacturing white pigment (as titanium dioxide)"],
      appearance: "Silvery-gray metal with a metallic luster at room temperature.",
      lifeRole: "Titanium metal is completely non-toxic to humans and possesses excellent biocompatibility; the immune system almost never rejects it, making it the top choice for medical implants.",
      compounds: [
        {
          formula: "TiO₂",
          name: "Titanium dioxide",
          description: "An extremely stable white powder, widely used in sunscreens, paints, and food additives.",
        },
        {
          formula: "TiCl₄",
          name: "Titanium tetrachloride",
          description: "An intermediate product in extracting pure titanium; it produces dense white smoke when in contact with moist air and can be used to make smoke screens.",
        },
      ],
      reactions: [
        {
          equation: "Ti + O₂ → TiO₂",
          description: "Titanium easily combines with oxygen in the air at high temperatures, but the dense oxide film formed on its surface at room temperature prevents further corrosion.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Large pieces of titanium metal are extremely safe, but very fine titanium powder is highly flammable, burns at exceedingly high temperatures, and is difficult to extinguish with conventional fire extinguishers.",
        },
      ],
      isotopes: [
        {
          notation: "⁴⁸Ti",
          use: "Materials science and physics research",
          description: "The most common titanium isotope in nature, making up over 70%.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Titanium's physical strength, corrosion resistance, and biocompatibility possess extensive medical and industrial empirical data.",
      },
    },
    V: {
      description: "Vanadium is a hard, ductile, silvery-gray transition metal. It is primarily used as an alloy additive, significantly improving the strength and toughness of steel.",
      uses: ["Manufacturing high-strength alloy steel and tool steel", "Catalyst in the sulfuric acid industry (as an oxide)", "Vanadium redox flow batteries"],
      appearance: "Silvery-gray metal with a luster at room temperature.",
      compounds: [
        {
          formula: "V₂O₅",
          name: "Vanadium pentoxide",
          description: "A highly toxic compound, it is an indispensable catalyst in the contact process for manufacturing sulfuric acid.",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Elemental vanadium metal is relatively safe, but most vanadium compounds (especially dust) are highly toxic and severely irritate the respiratory tract if inhaled.",
        },
      ],
      isotopes: [
        {
          notation: "⁵¹V",
          use: "NMR and materials analysis",
          description: "A stable isotope making up over 99.7% in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The metallurgical effects and compound toxicology of vanadium have mature industrial and medical empirical data.",
      },
    },
    Cr: {
      description: "Chromium is a hard, high-melting-point transition metal with a shiny luster. Its name derives from the Greek word for 'color' because its compounds are richly colored.",
      uses: ["Manufacturing stainless steel", "Chrome plating for rust prevention and decoration on metal surfaces", "Leather tanning and industrial pigments"],
      appearance: "Hard, silvery-gray metal with a very high luster at room temperature.",
      lifeRole: "Trivalent chromium ions (Cr³⁺) are trace elements required for the human body's metabolism of sugars and lipids; however, hexavalent chromium (Cr⁶⁺) compounds are highly toxic and strongly carcinogenic to living organisms.",
      compounds: [
        {
          formula: "Cr₂O₃",
          name: "Chromium(III) oxide",
          description: "A green solid, often used as a pigment and abrasive; relatively stable with lower toxicity.",
        },
        {
          formula: "K₂Cr₂O₇",
          name: "Potassium dichromate",
          description: "A strong oxidizing agent, brightly orange-red, highly toxic, and carcinogenic.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Chromium metal itself is non-toxic, but the hexavalent chromium dust or solutions produced in industrial processes are highly toxic and carcinogenic. Casual discharge and unprotected contact are strictly prohibited.",
        },
      ],
      isotopes: [
        {
          notation: "⁵²Cr",
          use: "Environmental chemistry and biological metabolism research",
          description: "The most abundant chromium isotope in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The metallurgical applications of chromium and the toxicology and carcinogenicity of hexavalent chromium have extremely clear empirical data.",
      },
    },
    Mn: {
      description: "Manganese is a hard and brittle silvery-gray transition metal. It is commonly found associated with iron ores in nature and is an indispensable deoxidizing and alloying agent in the steel industry.",
      uses: ["Manufacturing high-manganese wear-resistant steel (like railway tracks and safes)", "Depolarizer in dry cell and alkaline batteries", "Additive in the aluminum alloy industry"],
      appearance: "Silvery-gray metal with a slight pinkish tint at room temperature, hard and brittle in texture.",
      lifeRole: "Trace amounts of manganese ions (Mn²⁺) are necessary cofactors for the operation of various human enzymes (such as antioxidant enzymes); however, excessive intake can damage the central nervous system.",
      compounds: [
        {
          formula: "MnO₂",
          name: "Manganese dioxide",
          description: "A black powder widely used in zinc-carbon batteries and also a common catalyst for generating oxygen in laboratories.",
        },
        {
          formula: "KMnO₄",
          name: "Potassium permanganate",
          description: "A purplish-black, strongly oxidizing crystal; its aqueous solution is purplish-red, often used for medical disinfection and water treatment.",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Long-term exposure or inhalation of dust from manganese metal and its compounds can lead to severe, irreversible neurological diseases (manganism).",
        },
      ],
      isotopes: [
        {
          notation: "⁵⁵Mn",
          use: "NMR and materials science",
          description: "The only stable isotope existing in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The alloying performance, catalytic mechanisms, and neurotoxicity of manganese have long-accumulated empirical data.",
      },
    },
    Fe: {
      description: "Iron is the most abundant element by mass on Earth and the most widely used transition metal by humanity. It possesses strong magnetism and very easily reacts with oxygen and moisture to rust.",
      uses: ["Rebar and structural steel for construction", "Manufacturing steel plates for cars and ships", "Cast iron cookware and various mechanical tools"],
      appearance: "Pure iron is a soft, silvery-gray metal at room temperature, but the iron commonly seen daily is mostly a hard alloy containing carbon.",
      lifeRole: "Pure elemental iron has no biological function; however, ferrous (Fe²⁺) and ferric (Fe³⁺) ions are the core of hemoglobin in human red blood cells, responsible for transporting oxygen throughout the body.",
      compounds: [
        {
          formula: "Fe₂O₃",
          name: "Iron(III) oxide",
          description: "A reddish-brown powder, commonly known as rust, and a major component of important iron ore (hematite).",
        },
        {
          formula: "FeCl₃",
          name: "Iron(III) chloride",
          description: "A brownish-yellow, strongly acidic salt, commonly used in wastewater treatment and printed circuit board etching.",
        },
      ],
      reactions: [
        {
          equation: "4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃",
          description: "Iron oxidizes extremely easily in moist air, forming a loose, porous mixture of iron hydroxides and iron oxides (i.e., rust), which cannot prevent further internal corrosion.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Large pieces of iron metal are non-toxic and safe, but puncture wounds from a mixture of rust and soil can easily cause tetanus bacterial infections; excessive intake of iron supplements can cause acute poisoning.",
        },
      ],
      isotopes: [
        {
          notation: "⁵⁶Fe",
          use: "Nuclear astrophysics research",
          description: "One of the most stable nuclides in the universe, it is the final product of stellar nuclear fusion reactions.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The metallurgy, magnetic physics, and biochemical metabolic pathways of iron are among the most familiar empirical data to humanity.",
      },
    },
    Co: {
      description: "Cobalt is a hard, magnetic, silvery-gray transition metal. It retains its high strength and magnetism at extreme temperatures and is a key strategic metal in the high-tech industry.",
      uses: ["Cathode material for lithium-ion batteries", "Superalloys for aerospace gas turbine engines", "Manufacturing high-hardness cutting tools"],
      appearance: "Silvery-gray metal with a bright luster and a slight pale blue tint at room temperature.",
      lifeRole: "Cobalt ions are the central atom of vitamin B12 (cobalamin), which is crucial for the health of the human nervous system and the production of red blood cells.",
      compounds: [
        {
          formula: "CoCl₂",
          name: "Cobalt(II) chloride",
          description: "Blue when anhydrous, turning pink after absorbing water; often used as a humidity indicator in desiccants.",
        },
        {
          formula: "LiCoO₂",
          name: "Lithium cobalt oxide",
          description: "Energy storage chemical material widely used in smartphone and electric vehicle batteries.",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Excessive exposure to cobalt dust can cause severe respiratory diseases and skin allergies; certain artificial radioactive isotopes pose severe radiation hazards.",
        },
      ],
      isotopes: [
        {
          notation: "⁶⁰Co",
          use: "Medical radiotherapy and industrial flaw detection",
          description: "A radioactive isotope emitting strong gamma rays, widely used in cancer radiotherapy and food sterilization.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The alloy performance, battery chemical reactions, and biological functions of cobalt all have highly reliable empirical data.",
      },
    },
    Ni: {
      description: "Nickel is a hard, ductile, and highly corrosion-resistant silvery-white transition metal. It is extremely stable in air and is often used as a protective coating or alloy component.",
      uses: ["Manufacturing stainless steel (alloyed with iron and chromium)", "Anti-rust nickel plating on metal surfaces", "Coin manufacturing and rechargeable batteries (NiMH batteries)"],
      appearance: "Silvery-white metal with a slight golden luster at room temperature.",
      lifeRole: "Trace amounts of nickel are essential for some plants and microorganisms; however, it has no known essential physiological function in humans and often triggers contact allergies.",
      compounds: [
        {
          formula: "NiO",
          name: "Nickel(II) oxide",
          description: "Green to black powder, widely used in ceramic glazes and nickel-based battery manufacturing.",
        },
        {
          formula: "NiCl₂",
          name: "Nickel(II) chloride",
          description: "Water-soluble yellow or green crystals, serving as a primary chemical in the nickel electroplating process.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Nickel metal is a common contact allergen (e.g., dermatitis caused by poor-quality jewelry); long-term inhalation of certain nickel compound dust poses a carcinogenic risk.",
        },
      ],
      isotopes: [
        {
          notation: "⁵⁸Ni",
          use: "Neutron detection and nuclear reaction research",
          description: "The most abundant nickel isotope in nature, making up about two-thirds.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The metallurgy, electrochemistry, and toxicology of nickel all have long-term scientific and industrial empirical data.",
      },
    },
    Cu: {
      description: "Copper is a transition metal with a red-orange metallic luster, possessing excellent electrical and thermal conductivity. It is one of the earliest metals smelted and used by humanity.",
      uses: ["Electrical wires and electrical equipment", "Plumbing pipes and building materials", "Manufacturing bronze and brass alloys"],
      appearance: "Soft metal with a red-orange luster at room temperature.",
      lifeRole: "Elemental copper metal is non-toxic, but trace copper ions (Cu²⁺) are core cofactors for various human enzymes; excessive intake of soluble copper salts can cause heavy metal poisoning.",
      compounds: [
        {
          formula: "CuO",
          name: "Copper(II) oxide",
          description: "Black solid, often used as a pigment for glass and ceramics.",
        },
        {
          formula: "CuSO₄",
          name: "Copper(II) sulfate",
          description: "Blue crystals, widely used in agricultural fungicides, electroplating industry, and laboratory reagents.",
        },
      ],
      reactions: [
        {
          equation: "2Cu + O₂ → 2CuO",
          description: "Copper slowly reacts with oxygen in the air at high temperatures, losing its luster on the surface and forming black copper(II) oxide.",
          conditions: "Heating",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Solid copper metal is very safe, but ingesting excessive soluble copper salts strongly irritates the gastrointestinal tract and leads to acute heavy metal poisoning.",
        },
      ],
      isotopes: [
        {
          notation: "⁶³Cu",
          use: "NMR research",
          description: "The most common stable isotope in nature, accounting for nearly 70%.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Copper's physical conductivity properties, chemical reactivity, and biological roles are all long-standing and comprehensive empirical data.",
      },
    },
    Zn: {
      description: "Zinc is a silvery-white transition metal with a slight blueish tint. It easily forms a dense oxide layer in the air and is commonly used as a sacrificial anode to protect iron from rusting.",
      uses: ["Anti-rust galvanizing on steel surfaces", "Manufacturing brass (an alloy with copper)", "Casings and negative electrodes of dry cells"],
      appearance: "Metal with a slight blue-gray luster at room temperature.",
      lifeRole: "Elemental zinc has no biological function, but zinc ions (Zn²⁺) are essential trace elements for the human immune system and DNA synthesis, present in hundreds of enzymes.",
      compounds: [
        {
          formula: "ZnO",
          name: "Zinc oxide",
          description: "White powder, widely applied in sunscreens, rubber additives, and medical ointments.",
        },
        {
          formula: "ZnS",
          name: "Zinc sulfide",
          description: "White or slightly yellow solid with fluorescent properties, used in luminous paints and fluorescent screens.",
        },
      ],
      reactions: [
        {
          equation: "Zn + 2HCl → ZnCl₂ + H₂",
          description: "Zinc metal can react with dilute acids (such as hydrochloric acid) to displace hydrogen from the acid, generating flammable hydrogen gas.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Zinc metal itself is safe, but inhaling zinc oxide fumes generated during high-temperature welding or smelting can cause metal fume fever (an acute respiratory syndrome).",
        },
      ],
      isotopes: [
        {
          notation: "⁶⁴Zn",
          use: "Biochemical and medical tracing",
          description: "The most abundant stable isotope of zinc in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Zinc's electrochemical anti-rust properties, alloy formulas, and biological enzyme mechanisms all possess highly reliable empirical data.",
      },
    },
    Ga: {
      description: "Gallium is a silvery-white post-transition metal with an unusually low melting point, capable of melting even in the palm of a human hand. It plays a critical role in modern high-frequency electronics and optoelectronic semiconductors.",
      uses: ["Manufacturing microwave and high-frequency communication semiconductors (Gallium arsenide)", "High-brightness blue and white LEDs", "Filler metal for high-temperature thermometers"],
      appearance: "Silvery-white metal at room temperature; melts into a liquid when slightly heated (around 29.7°C).",
      lifeRole: "There is no natural physiological function of gallium in the human body, but certain radioactive gallium isotope compounds are used in medical tumor imaging.",
      compounds: [
        {
          formula: "GaAs",
          name: "Gallium arsenide",
          description: "An important semiconductor material with higher electron mobility than silicon, widely used in high-frequency and wireless communications.",
        },
        {
          formula: "GaN",
          name: "Gallium nitride",
          description: "A next-generation wide-bandgap semiconductor used in high-efficiency chargers and blue laser diodes.",
        },
      ],
      reactions: [
        {
          equation: "2Ga + 6HCl → 2GaCl₃ + 3H₂",
          description: "Gallium can react with hydrochloric acid to form gallium chloride and release hydrogen gas.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Gallium is mostly non-toxic to humans, but liquid gallium severely permeates and corrodes aluminum metal, destroying its structural integrity; it should absolutely not be brought onto an airplane.",
        },
      ],
      isotopes: [
        {
          notation: "⁶⁷Ga",
          use: "Medical imaging",
          description: "A radioactive isotope often used as an inflammation and tumor localization tracer in nuclear medicine.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Gallium's low melting point properties, semiconductor electrical performance, and alloy corrosion phenomena all have complete empirical data.",
      },
    },
    Ge: {
      description: "Germanium is a grayish-white metalloid that is brittle and has semiconducting properties. It was the core material of early transistors and is now mainly used in optics and specialty electronic components.",
      uses: ["Core dopant in fiber optic communication networks", "Lens material for infrared night vision devices", "Solar cells and specialty semiconductors"],
      appearance: "Grayish-white solid crystals with a metallic luster at room temperature.",
      lifeRole: "Germanium has no known essential physiological function in living organisms; although health supplements have claimed benefits, ingesting inorganic germanium compounds is nephrotoxic to the human body.",
      compounds: [
        {
          formula: "GeO₂",
          name: "Germanium dioxide",
          description: "An optical material with a high refractive index and infrared transparency, widely used in manufacturing optical fibers and wide-angle lenses.",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "If certain inorganic germanium compounds are taken as health supplements over a long period or in large amounts, they can cause irreversible severe renal failure.",
        },
      ],
      isotopes: [
        {
          notation: "⁷²Ge",
          use: "Fundamental physics and semiconductor research",
          description: "A stable isotope making up over 20% of natural germanium.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Germanium's semiconductor properties, optical refractive index, and nephrotoxicity all have definitive empirical data.",
      },
    },
    As: {
      description: "Arsenic is a highly toxic metalloid element that exists in various allotropic forms in nature. Despite its notorious toxicity, it is an indispensable doping material in the modern semiconductor industry.",
      uses: ["N-type doping for semiconductors and gallium arsenide wafers", "Wood preservative (historical use, mostly banned now)", "Alloy additive in lead-acid batteries"],
      appearance: "Common gray arsenic is a silvery-gray, brittle solid with a metallic luster at room temperature.",
      lifeRole: "Arsenic and most arsenic compounds are highly toxic and carcinogenic to the vast majority of living organisms, severely interfering with key enzymes in cellular energy metabolism.",
      compounds: [
        {
          formula: "As₂O₃",
          name: "Arsenic trioxide",
          description: "Commonly known as white arsenic, it is a white, odorless, highly toxic powder. Historically widely used as a poison, it is now used under strict control to treat specific leukemias.",
        },
        {
          formula: "GaAs",
          name: "Gallium arsenide",
          description: "An important material for high-speed electronic components and optoelectronic crystals, with a highly stable chemical structure.",
        },
      ],
      reactions: [
        {
          equation: "4As + 3O₂ → 2As₂O₃",
          description: "When heated in air, arsenic burns, emitting a highly toxic white smoke of arsenic trioxide with a pungent garlic odor.",
          conditions: "Heating",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Arsenic and most of its compounds are highly toxic and Group 1 carcinogens; inhaling or ingesting trace amounts can be fatal. It must be handled under strict protection and should not be operated independently.",
        },
      ],
      isotopes: [
        {
          notation: "⁷⁵As",
          use: "NMR and semiconductor doping",
          description: "The only stable arsenic isotope existing in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The chemical reactions, severe compound toxicity, and semiconductor applications of arsenic all have long-term industrial safety and scientific empirical data.",
      },
    },
    Se: {
      description: "Selenium is a nonmetal (or metalloid) element with unique photoconductivity, meaning its electrical conductivity greatly increases under light exposure. Its impact on life is polarized between trace necessity and excessive toxicity.",
      uses: ["Photoreceptor drums in photocopiers and laser printers", "Decolorizer in the glass industry and colorant for ruby glass", "Rectifiers and photocells"],
      appearance: "The most stable allotrope is a gray solid with a metallic luster at room temperature, but it also exists in a red powder state.",
      lifeRole: "Trace selenium ions are the core of human antioxidant enzymes (like glutathione peroxidase); however, excessive intake of inorganic selenium leads to selenosis, causing hair loss, nerve damage, and garlic breath.",
      compounds: [
        {
          formula: "SeO₂",
          name: "Selenium dioxide",
          description: "An important oxidizing agent commonly used in organic chemical synthesis and the electroplating industry; highly toxic.",
        },
      ],
      reactions: [
        {
          equation: "Se + O₂ → SeO₂",
          description: "Selenium burns in air with a blue flame, generating toxic selenium dioxide gas with a strong odor of rotting radishes.",
          conditions: "Ignition",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Elemental selenium is relatively safe, but most of its compounds are highly toxic and irritating. Industrial handling requires strict protection to avoid inhaling dust or gases.",
        },
      ],
      isotopes: [
        {
          notation: "⁸⁰Se",
          use: "Isotope geochemistry tracing",
          description: "The most abundant stable isotope in nature, accounting for nearly half.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Selenium's photoelectric properties, biological trace necessity, and excessive poisoning mechanisms all have complete empirical data.",
      },
    },
    Br: {
      description: "Bromine is the only nonmetal element that is liquid at room temperature. It is a halogen, possessing extremely high reactivity, strong corrosiveness, and a pungent, foul odor.",
      uses: ["Manufacturing flame retardants", "Water treatment and swimming pool disinfection (as a chlorine alternative)", "Organic synthesis and agrochemical manufacturing"],
      appearance: "A heavy, deep red-brown liquid at room temperature that continuously emits irritating red-brown fumes.",
      lifeRole: "Some studies suggest that trace bromide ions (Br⁻) may be involved in animal collagen synthesis; but excessive intake of inorganic bromides severely depresses the central nervous system (bromism).",
      compounds: [
        {
          formula: "AgBr",
          name: "Silver bromide",
          description: "A pale yellow solid highly sensitive to light, acting as the core photosensitive material in traditional black-and-white and color photographic film.",
        },
        {
          formula: "NaBr",
          name: "Sodium bromide",
          description: "Historically used as a medical sedative, now commonly used in drilling fluids for oil exploration.",
        },
      ],
      reactions: [
        {
          equation: "2Na + Br₂ → 2NaBr",
          description: "Bromine reacts violently or even explosively upon contact with alkali metals (like sodium), forming a white bromide salt solid.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Liquid bromine is highly volatile, and its red-brown vapor is severely destructive and toxic to the respiratory tract and eye mucous membranes; liquid contact with skin causes severe, hard-to-heal chemical burns. It should absolutely not be handled independently.",
        },
      ],
      isotopes: [
        {
          notation: "⁷⁹Br",
          use: "Mass spectrometry structural determination",
          description: "Its natural abundance ratio with ⁸¹Br is nearly 1:1, a highly recognizable feature in chemical structure mass spectrometry.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Bromine's volatility, strong corrosiveness, and photosensitive compound mechanisms all have extremely detailed chemical and industrial safety empirical data.",
      },
    },
    Kr: {
      description: "Krypton is a colorless, odorless, tasteless noble gas element that is extremely rare in the Earth's atmosphere. When electrified, it emits an intense white light and is commonly used in specialty lighting and laser technologies.",
      uses: ["High-frequency strobe lights and high-speed photography lighting", "Insulating filler gas in double-pane windows", "Krypton fluoride (KrF) excimer lasers (used in semiconductor photolithography)"],
      appearance: "Colorless, odorless gas at room temperature; emits a bright pale white or slight green glow when electrically excited.",
      safety: [
        {
          level: "Warning",
          description: "Krypton gas itself is completely non-toxic and chemically extremely inert, but a massive release in confined spaces or low-lying areas will displace oxygen, leading to a risk of sudden asphyxiation.",
        },
      ],
      isotopes: [
        {
          notation: "⁸⁴Kr",
          use: "Earth and atmospheric science tracing",
          description: "The most abundant krypton isotope in nature, accounting for nearly 60%.",
        },
        {
          notation: "⁸¹Kr",
          use: "Paleo-groundwater dating",
          description: "An extremely trace radioactive isotope used to determine the age of deep groundwater.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Krypton's physical spectra, thermodynamic insulation properties, and radioisotope dating are all empirical data in precision physics.",
      },
    },
    Rb: {
      description: "Rubidium is an extremely soft, chemically highly reactive silvery-white alkali metal. It rapidly oxidizes and can even spontaneously ignite in air.",
      uses: ["Specialty glass manufacturing", "Photocells and photomultiplier tubes", "High-precision atomic clocks"],
      appearance: "Soft, silvery-white metal at room temperature; rapidly oxidizes, loses its luster, and may autoignite when exposed to air.",
      lifeRole: "Elemental rubidium explodes violently upon contact with water; rubidium ions (Rb⁺) have no known function in the human body, but being chemically similar to potassium, they can be absorbed and metabolized in trace amounts.",
      compounds: [
        {
          formula: "RbCl",
          name: "Rubidium chloride",
          description: "Often used as a biomarker or tracer in biochemical research.",
        },
      ],
      reactions: [
        {
          equation: "2Rb + 2H₂O → 2RbOH + H₂",
          description: "Rubidium metal reacts with water in an extremely violent explosive reaction, forming rubidium hydroxide and igniting or detonating the released hydrogen gas.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Rubidium metal easily undergoes violent reactions, explosions, and fires upon contact with water, oxygen, and moisture in the air. It must be stored in a vacuum or inert gas and should never be handled independently.",
        },
      ],
      isotopes: [
        {
          notation: "⁸⁷Rb",
          use: "Geochronology",
          description: "A slightly radioactive isotope; rubidium-strontium dating is often used to determine the age of ancient rocks.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Rubidium's extremely high reactivity, thermodynamic data, and isotope characteristics all have complete empirical data.",
      },
    },
    Sr: {
      description: "Strontium is a soft, silvery-yellow alkaline earth metal that is fairly chemically reactive. It emits an extremely vivid deep red flame when burned.",
      uses: ["Manufacturing red fireworks and flares", "Ferrite magnet additive", "Medical application of strontium isotopes in bone cancer treatment"],
      appearance: "Silvery-gray metal with a slight yellowish tint at room temperature; rapidly oxidizes when cut and exposed to air.",
      lifeRole: "Strontium ions are chemically similar to calcium; small amounts accumulate in human bones and are mostly harmless. However, radioactive isotopes (Strontium-90) produced by nuclear explosions are highly dangerous and can cause bone cancer.",
      compounds: [
        {
          formula: "SrCO₃",
          name: "Strontium carbonate",
          description: "One of the most common strontium compounds, widely used to manufacture red illuminants for fireworks.",
        },
      ],
      reactions: [
        {
          equation: "Sr + 2H₂O → Sr(OH)₂ + H₂",
          description: "Strontium reacts with water, generating an alkaline solution of strontium hydroxide and releasing flammable hydrogen gas.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Elemental strontium metal easily reacts with air and moisture to catch fire; its artificial radioactive isotopes are highly dangerous nuclear waste.",
        },
      ],
      isotopes: [
        {
          notation: "⁹⁰Sr",
          use: "Radioisotope thermoelectric generators and industrial thickness gauges",
          description: "A dangerous product of nuclear fission. Because it accumulates in bones, it is one of the most hazardous radionuclides in nuclear disasters.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Strontium's spectral properties, chemical reactivity, and radiotoxicology all have abundant empirical data.",
      },
    },
    Y: {
      description: "Yttrium is a silvery-white transition metal typically found associated with rare earth elements. It is an important foundational material in modern optoelectronics, laser technology, and high-temperature superconductors.",
      uses: ["Manufacturing high-temperature superconducting materials (like YBCO)", "White LEDs and TV phosphors", "High-strength magnesium alloy additive"],
      appearance: "Silvery-gray metal with a metallic luster at room temperature.",
      compounds: [
        {
          formula: "Y₃Al₅O₁₂",
          name: "Yttrium aluminum garnet (YAG)",
          description: "An important synthetic crystal material, often doped with other elements for solid-state lasers (e.g., Nd:YAG lasers).",
        },
        {
          formula: "YBa₂Cu₃O₇",
          name: "Yttrium barium copper oxide (YBCO)",
          description: "A famous high-temperature superconductor material capable of achieving superconductivity at liquid nitrogen temperatures.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Bulk yttrium metal is relatively safe, but its powder is highly flammable in air; inhaling excessive yttrium compound dust may damage the lungs.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The optical, magnetic, and superconducting physical data of yttrium are all empirical data widely verified by the physics and materials science communities.",
      },
    },
    Zr: {
      description: "Zirconium is a hard, grayish-white transition metal with excellent corrosion resistance and an extremely low neutron absorption cross-section. This makes it an indispensable material in the nuclear power industry.",
      uses: ["Uranium fuel rod cladding in nuclear reactors", "High-temperature corrosion-resistant alloys for aerospace and chemical industries", "Synthetic diamonds (cubic zirconia) and ceramic dental crowns"],
      appearance: "Extremely hard, grayish-white metal at room temperature.",
      compounds: [
        {
          formula: "ZrO₂",
          name: "Zirconium dioxide",
          description: "A high-temperature resistant and extremely hard white solid, widely used in advanced ceramic materials and as an inexpensive diamond substitute.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Solid zirconium metal is completely non-toxic and extremely stable, but fine zirconium powder generated during machining can easily spontaneously ignite and explode in air.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Zirconium's corrosion resistance data, nuclear physics properties, and high-temperature performance all have complete empirical data.",
      },
    },
    Nb: {
      description: "Niobium is a soft, gray, ductile transition metal. It has excellent low-temperature superconducting properties and can significantly enhance the strength and heat resistance of steel.",
      uses: ["Superconducting magnets in particle accelerators and MRI machines", "Heat-resistant alloys for aerospace rocket engines", "Strengthening additive for advanced stainless steel and pipeline steel"],
      appearance: "Gray metal with a luster at room temperature; exhibits beautiful interference colors when oxidized on the surface.",
      compounds: [
        {
          formula: "Nb₃Sn",
          name: "Niobium-tin",
          description: "An extremely important superconducting compound widely used to manufacture superconducting coils that generate strong magnetic fields.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Niobium metal itself is safe and non-toxic, but most niobium compounds are irritating; protective equipment should be worn when handling their dust.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Niobium's metallurgical strengthening effects and superconducting transition temperatures have empirical data from authoritative institutions.",
      },
    },
    Mo: {
      description: "Molybdenum is a silvery-gray transition metal with an extremely high melting point. It plays a crucial and irreplaceable role in both industrial alloys and the nitrogen metabolism mechanisms of the biosphere.",
      uses: ["Manufacturing high-strength, corrosion-resistant alloy steel", "Desulfurization catalysts in the oil refining industry", "Electrodes and heating elements in high-temperature furnaces"],
      appearance: "Extremely hard, silvery-gray metal at room temperature.",
      lifeRole: "Molybdenum ions are essential trace core elements for various key enzymes (such as nitrogenase and xanthine oxidase) in plants, animals, and humans; deficiency affects metabolism.",
      compounds: [
        {
          formula: "MoS₂",
          name: "Molybdenum disulfide",
          description: "A black layered solid, acting as an excellent solid lubricant in high-temperature and vacuum environments.",
        },
      ],
      isotopes: [
        {
          notation: "⁹⁹Mo",
          use: "Medical isotope production",
          description: "Radioactive, serving as the parent nuclide for 'Technetium-99m', the most commonly used radioactive source in nuclear medicine.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Molybdenum's metallurgical properties, high-temperature physics, and biological enzyme activation mechanisms all have highly reliable empirical data.",
      },
    },
    Tc: {
      description: "Technetium is the first element in the periodic table to be entirely artificially synthesized or produced by radioactive decay. It is virtually non-existent in nature, and all its isotopes are radioactive.",
      uses: ["Medical diagnostic imaging (myocardial and skeletal imaging)", "Trace additive in steel rust prevention research", "Scientific research tracer"],
      appearance: "Silvery-gray metal at room temperature, but rarely produced in macroscopically visible blocks outside of laboratories.",
      lifeRole: "Artificially synthesized radioactive technetium (Technetium-99m) compounds are widely injected into the human body for nuclear medicine imaging; due to its short half-life, it is metabolized and decays completely within a few days.",
      compounds: [
        {
          formula: "NaTcO₄",
          name: "Sodium pertechnetate",
          description: "A soluble radioactive salt used in medical injections and corrosion prevention research.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "All forms of technetium present radiation hazards and must only be handled in nuclear medicine or radiochemistry laboratories equipped with radiation protection gear.",
        },
      ],
      isotopes: [
        {
          notation: "⁹⁹ᵐTc",
          use: "Nuclear medicine imaging",
          description: "Emits pure gamma rays with a half-life of only six hours, making it the most widely used radioactive isotope in medical diagnostic imaging globally.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Technetium's radioactive decay data and medical imaging effects have detailed and highly regulated scientific empirical data.",
      },
    },
    Ru: {
      description: "Ruthenium is a hard, rare, and brittle silvery-white platinum-group metal. It is primarily used as an alloy hardener and a wear-resistant contact material in the electronics industry.",
      uses: ["Trace coatings for hard disk magnetic storage layers", "Hardener for platinum and palladium metal alloys", "Chemical dyes and catalysts in solar cells"],
      appearance: "Hard, brittle, silvery-white metal at room temperature.",
      compounds: [
        {
          formula: "RuO₄",
          name: "Ruthenium tetroxide",
          description: "A highly volatile and highly toxic strong oxidizing agent, mainly used for staining and fixing biological samples in electron microscopy.",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Metallic ruthenium is relatively stable and safe, but its high oxidation state compounds (like ruthenium tetroxide vapor) are highly toxic and severely irritate the eyes and respiratory tract.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Ruthenium's metallic properties, alloy applications, and compound toxicology all have clear chemical empirical data.",
      },
    },
    Rh: {
      description: "Rhodium is an extremely rare, expensive, silvery-white platinum-group metal. It possesses outstanding corrosion resistance and powerful catalytic capabilities.",
      uses: ["Catalytic converters in automobile exhaust systems", "Tarnish-resistant bright plating for fine jewelry and silverware", "Catalyst in industrial nitric acid and chemical synthesis"],
      appearance: "A hard, silvery-white metal with a brilliant luster at room temperature.",
      compounds: [
        {
          formula: "RhCl₃",
          name: "Rhodium(III) chloride",
          description: "An important chemical starting material for preparing other homogeneous rhodium catalysts.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Solid rhodium metal is non-toxic and extremely stable, but its compound dusts or aerosols are highly irritating, and some are even suspected to be carcinogenic.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁰³Rh",
          use: "Industrial and scientific research",
          description: "The only stable rhodium isotope existing in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Rhodium's optical reflectivity, catalytic conversion efficiency, and chemical stability all have sufficient empirical data.",
      },
    },
    Pd: {
      description: "Palladium is a soft, shiny, silvery-white platinum-group metal. It has an astonishing ability to absorb hydrogen gas, making it a key material in automotive catalysts and the electronics industry.",
      uses: ["Catalytic converters in automobile exhaust systems", "Multi-layer ceramic capacitors (MLCC)", "Jewelry manufacturing (a component of what is commonly known as white gold alloys)"],
      appearance: "A soft, silvery-white metal with excellent ductility at room temperature.",
      reactions: [
        {
          equation: "Pd + H₂ ⇌ PdHₓ",
          description: "Palladium metal can absorb hydrogen gas up to hundreds of times its own volume like a sponge, and release it when heated, making it a perfect membrane material for purifying hydrogen.",
          conditions: "Room temperature under pressure, and heating",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Bulk palladium metal is extremely safe, but high surface area palladium powder in catalyst form can easily autoignite or explode in air if saturated with hydrogen.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁰⁶Pd",
          use: "Stable element form",
          description: "The most abundant of the six stable palladium isotopes in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Palladium's hydrogen absorption thermodynamics, catalytic efficiency, and material properties are all highly complete empirical data.",
      },
    },
    Ag: {
      description: "Silver is a soft, white transition metal with an extremely high luster. Among all metals, it has the highest electrical conductivity, thermal conductivity, and visible light reflectivity.",
      uses: ["Conductive paste for solar cells and electronic components", "Manufacturing fine jewelry and tableware", "Medical antibacterial and dressing materials"],
      appearance: "A soft, extremely lustrous, silvery-white metal at room temperature; turns black after prolonged exposure to sulfur-containing air.",
      lifeRole: "Silver metal has no known physiological function in the human body; however, silver ions (Ag⁺) can penetrate the cell walls of most bacteria and destroy their enzyme systems, providing extremely strong, broad-spectrum antibacterial effects.",
      compounds: [
        {
          formula: "AgBr",
          name: "Silver bromide",
          description: "A pale yellow solid highly sensitive to light, acting as the photosensitive material in traditional black-and-white film and X-ray photography.",
        },
        {
          formula: "AgNO₃",
          name: "Silver nitrate",
          description: "An important chemical laboratory reagent, also used for medical sterilization and treating burns.",
        },
      ],
      reactions: [
        {
          equation: "4Ag + 2H₂S + O₂ → 2Ag₂S + 2H₂O",
          description: "Silver reacts with trace amounts of hydrogen sulfide gas in the air, forming black silver sulfide on its surface, which is why silverware darkens over time.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Elemental silver is safe and non-toxic, but long-term ingestion or exposure to excessive silver compounds and silver nanoparticles can lead to irreversible 'argyria', turning the skin permanently blue-gray.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁰⁷Ag",
          use: "Stable element form",
          description: "The most abundant stable isotope of silver, accounting for more than half of its natural proportion.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Silver's extreme optical and electrical properties, antibacterial mechanisms, and chemical tarnishing reactions all have abundant empirical data.",
      },
    },
    Cd: {
      description: "Cadmium is an extremely soft, silvery-white metal with a slight blueish tint. Although its compounds can produce extremely vibrant pigments, cadmium itself is a cumulative, highly toxic element.",
      uses: ["Nickel-cadmium (Ni-Cd) rechargeable batteries", "Neutron-absorbing control rods in nuclear reactors", "Manufacturing vibrant, fade-resistant yellow and red pigments (Cadmium yellow/Cadmium red)"],
      appearance: "An extremely soft, silvery-white metal with a slight blueish luster at room temperature.",
      lifeRole: "Cadmium and its compounds are highly toxic to all known living organisms. Upon entering the human body, it replaces calcium in bones and zinc in enzymes, leading to excruciatingly painful osteomalacia (Itai-itai disease) and kidney failure.",
      compounds: [
        {
          formula: "CdS",
          name: "Cadmium sulfide",
          description: "An extremely vibrant yellow solid powder, historically a component of top-tier artistic oil paints (Cadmium yellow).",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Cadmium and its compounds are known highly hazardous human carcinogens that accumulate long-term in the human body and environment without being metabolized; their use should be strictly limited and any contact avoided.",
        },
      ],
      isotopes: [
        {
          notation: "¹¹⁴Cd",
          use: "Stable element and nuclear reactions",
          description: "The most abundant cadmium isotope in nature, possessing an extremely high neutron absorption capacity.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Cadmium's alloy properties and the toxicological mechanisms causing 'Itai-itai disease' are empirical data strictly verified by the scientific and medical communities.",
      },
    },
    In: {
      description: "Indium is an extremely soft, silvery-white post-transition metal; bending a pure indium rod produces a distinct, crisp 'tin cry'. It is an indispensable core material in modern touch technology.",
      uses: ["Transparent conductive films in liquid crystal displays (LCDs) and touch screens", "Lead-free solder alloys and low-melting-point alloys", "High-temperature thermometer fluid and thermal interface material filler"],
      appearance: "An extremely soft, silvery-white metal at room temperature, soft enough to be scratched by a fingernail.",
      compounds: [
        {
          formula: "ITO",
          name: "Indium tin oxide",
          description: "A special mixed oxide that is both electrically conductive and transparent, widely applied in the touch panels of nearly all smartphones.",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Pure indium metal has low toxicity and is safe, but long-term inhalation of indium tin oxide (ITO) dust in industrial display manufacturing can cause extremely severe occupational pulmonary fibrosis.",
        },
      ],
      isotopes: [
        {
          notation: "¹¹⁵In",
          use: "Industrial application materials",
          description: "An extremely long half-life, weakly radioactive isotope making up 95% of natural indium; its radioactivity is so weak that it poses no practical harm to the human body.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Indium's physical ductility, optoelectronic thin-film electrical data, and industrial toxicology all have complete empirical data.",
      },
    },
    Sn: {
      description: "Tin is a soft post-transition metal with a silvery-white luster. It resists oxidation and corrosion, and has been widely used by humanity since the Bronze Age for utensils and rust prevention.",
      uses: ["Lead-free soldering metal for electronic components", "Anti-rust plating on steel surfaces (like tinplate for food cans)", "Manufacturing bronze alloys (alloyed with copper)"],
      appearance: "A lustrous, silvery-white soft metal (white tin) at room temperature; shatters into a powdery gray tin at extremely low temperatures.",
      lifeRole: "Inorganic elemental tin and its common compounds have extremely low toxicity to humans; however, certain synthetic 'organotin' compounds, once used in anti-fouling paint for boat hulls, have devastating toxicity to marine ecosystems and are now banned globally.",
      compounds: [
        {
          formula: "SnO₂",
          name: "Tin(IV) oxide",
          description: "A white solid commonly used as an opacifier for ceramic glazes and glass coatings.",
        },
        {
          formula: "SnCl₂",
          name: "Tin(II) chloride",
          description: "White crystals, serving as an extremely common strong reducing agent in the chemical industry.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Common metallic tin and inorganic tin compounds are extremely safe, but industrial organotin compounds are highly toxic and must be handled according to toxic chemical substance regulations.",
        },
      ],
      isotopes: [
        {
          notation: "¹²⁰Sn",
          use: "Stable element form",
          description: "Tin has up to ten stable isotopes (the most of any element), with ¹²⁰Sn being the most abundant.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Tin's anti-rust properties, low-temperature phase transition phenomena (tin pest), and organotin toxicology are all highly reliable empirical data.",
      },
    },
    Sb: {
      description: "Antimony is a brittle, silvery-gray metalloid with a slight blueish luster. It is primarily used as an alloy additive to significantly increase the hardness of lead, and is also often combined with halogens to make flame retardants.",
      uses: ["Alloy hardener for traditional lead-acid battery plates", "Flame retardant in plastics and textiles (as antimony oxides)", "Dopant for semiconductor materials"],
      appearance: "A silvery-gray solid with an extremely bright metallic luster but a very brittle, fragile texture at room temperature.",
      compounds: [
        {
          formula: "Sb₂O₃",
          name: "Antimony trioxide",
          description: "A white powder, often used in conjunction with halogenated flame retardants, capable of significantly reducing the flammability of plastics and electronic product casings.",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Antimony metal dust and most of its compounds possess moderate to high toxicity; inhalation or long-term ingestion can cause severe neurological and respiratory symptoms similar to arsenic poisoning, and it should not be handled without protection.",
        },
      ],
      isotopes: [
        {
          notation: "¹²¹Sb",
          use: "Mass spectrometry and material applications",
          description: "The most abundant stable isotope of antimony in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Antimony's alloy hardening effects, flame retardant chemical mechanisms, and toxicological reactions all have definitive scientific empirical data.",
      },
    },
    Te: {
      description: "Tellurium is a rare, silvery-white metalloid with semiconducting properties. It is often found associated with gold, copper, and lead ores, and is an important specialty material in the modern green energy and thermoelectric industries.",
      uses: ["High-efficiency thin-film solar cells (Cadmium telluride)", "Improving the machinability of steel and copper alloys", "Core material for thermoelectric cooling chips (Peltier coolers)"],
      appearance: "A brittle, silvery-white crystalline solid with a distinct metallic luster at room temperature.",
      lifeRole: "Tellurium has no physiological function in the human body and is toxic; when trace amounts of tellurium compounds are inhaled or contact the skin, the body metabolizes them into dimethyl telluride, causing the breath and sweat to emit a strong, foul garlic odor lasting for weeks.",
      compounds: [
        {
          formula: "CdTe",
          name: "Cadmium telluride",
          description: "A compound with excellent light absorption capabilities, acting as the core layer for absorbing light energy in thin-film solar cells.",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Most tellurium compounds are moderately toxic and extremely bothersome; exposure to even trace amounts causes severe 'tellurium breath' (persistent garlic odor). Industrial processing requires excellent ventilation and protective equipment.",
        },
      ],
      isotopes: [
        {
          notation: "¹³⁰Te",
          use: "Particle physics research",
          description: "The most abundant natural isotope, often used by scientists to study the rare phenomenon of double beta decay.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Tellurium's semiconductor properties, thermoelectric material thermodynamics, and human metabolic reactions all have extensive empirical data.",
      },
    },
    I: {
      description: "Iodine is a purple-black halogen element that sublimes into a pungent purple-red gas when slightly heated. It is the heaviest stable halogen and is crucial for maintaining animal life functions.",
      uses: ["Medical wound disinfectants (like povidone-iodine and tincture of iodine)", "Iodized salt to prevent goiter", "Medical X-ray and CT scan contrast agents"],
      appearance: "A purple-black crystalline solid with a faint metallic luster at room temperature.",
      lifeRole: "Elemental iodine vapor is highly irritating and corrosive; however, trace iodide ions (I⁻) are a crucial, indispensable element for the human body to synthesize thyroid hormones, which regulate the body's basal metabolic rate and brain development.",
      compounds: [
        {
          formula: "KI",
          name: "Potassium iodide",
          description: "The most common iodine nutritional supplement, and also an emergency reserve drug used to protect the thyroid gland during nuclear radiation leaks.",
        },
        {
          formula: "AgI",
          name: "Silver iodide",
          description: "A pale yellow solid; because its crystal structure is similar to ice, it is often sprayed into clouds as condensation nuclei for artificial rain (cloud seeding).",
        },
      ],
      reactions: [
        {
          equation: "I₂ + Starch → Blue-black complex",
          description: "Elemental iodine instantly turns a very deep blue-black when it contacts a starch solution, making it the most classic chemical and biological test reaction.",
          conditions: "Aqueous solution at room temperature",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Solid elemental iodine is corrosive, and its purple-red sublimated vapor severely irritates the eyes and respiratory mucous membranes; it should not be ingested in large amounts or allowed prolonged direct contact with the skin.",
        },
      ],
      isotopes: [
        {
          notation: "¹³¹I",
          use: "Nuclear medicine therapy and radioactive contamination indicator",
          description: "An artificial radioactive isotope used medically to precisely destroy thyroid cancer cells, and also the most dangerous source of ionizing radiation in the early stages of a nuclear disaster leak.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Iodine's physical sublimation phenomena, human thyroid metabolism mechanisms, and radioisotope behaviors are all complete empirical data in the medical and chemical communities.",
      },
    },
    Xe: {
      description: "Xenon is a heavy, extremely rare monatomic noble gas element. Although its chemical properties are highly stable, it was historically the first noble gas proven capable of forming compounds with other elements.",
      uses: ["High-intensity discharge lamps for high-end automobiles and movie projectors", "Safe but expensive general anesthetic in medicine", "Propellant for ion thrusters in spacecraft and satellites"],
      appearance: "A colorless, odorless gas at room temperature; emits an intense blue-white or pale purple glow when electrically excited in a vacuum tube.",
      lifeRole: "Xenon gas is completely non-toxic to the human body and does not participate in any biochemical reactions, but upon inhalation, it physically interacts with central nervous system cell receptors to achieve an excellent anesthetic effect.",
      compounds: [
        {
          formula: "XeF₄",
          name: "Xenon tetrafluoride",
          description: "A historic synthetic compound that proved exceptions exist to the traditional theory that 'noble gases absolutely do not react'.",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Xenon gas itself is non-toxic and chemically extremely safe, but due to its very high density, a massive leak in confined or low-lying spaces will quickly settle and displace oxygen, posing a risk of unexpected death by asphyxiation.",
        },
      ],
      isotopes: [
        {
          notation: "¹³²Xe",
          use: "Fundamental physics research",
          description: "The most abundant stable xenon isotope in nature, often used as target material in dark matter detectors.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Xenon's spectral emission properties, noble gas chemical reactions, and medical anesthetic effects all have clear, authoritative empirical data.",
      },
    },
    Cs: {
      description: "Cesium is an extremely soft, golden alkali metal with extremely high chemical reactivity. It is the key element in modern science for defining the international standard of time (the second).",
      uses: ["High-precision atomic clocks", "Photosensitive material in photomultiplier tubes and photocells", "Drilling fluids for oil exploration (as cesium formate)"],
      appearance: "An extremely soft metal with a golden luster at room temperature; melts into a liquid just slightly above room temperature (around 28.5°C).",
      lifeRole: "Cesium metal explodes violently upon contact with water; cesium ions (Cs⁺) have no known function in the human body, but because their chemical properties are similar to potassium, trace ingestion can be excreted through metabolism. However, its radioactive isotopes pose severe health threats.",
      compounds: [
        {
          formula: "CsCl",
          name: "Cesium chloride",
          description: "A highly water-soluble salt widely used in biochemical experiments for the centrifugal separation of macromolecules like DNA.",
        },
      ],
      reactions: [
        {
          equation: "2Cs + 2H₂O → 2CsOH + H₂",
          description: "Cesium undergoes an extremely violent explosive reaction when it meets water, capable of exploding upon contact with ice even at extremely low temperatures (-116°C).",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Cesium metal easily undergoes violent reactions and triggers strong explosions upon contact with water, oxygen, and moisture in the air; it must be stored in a vacuum or inert gas and absolutely should not be handled independently.",
        },
      ],
      isotopes: [
        {
          notation: "¹³³Cs",
          use: "International time standard baseline",
          description: "The only stable isotope in nature; its atomic resonance frequency is used to define the length of one second.",
        },
        {
          notation: "¹³⁷Cs",
          use: "Medical radiation source and industrial thickness gauge",
          description: "A dangerous radioactive isotope produced by nuclear fission, and one of the primary nuclides causing long-term environmental contamination after a nuclear disaster.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Cesium's atomic clock resonance frequencies, extreme chemical reactivity, and radiation hazards all have extremely precise and complete empirical data.",
      },
    },
    Ba: {
      description: "Barium is a soft, silvery-white alkaline earth metal with very high chemical reactivity. It emits a bright and distinctive apple-green flame when burned.",
      uses: ["Medical X-ray contrast agent for the gastrointestinal tract (as barium sulfate)", "Manufacturing green fireworks and flares", "Getter in vacuum tubes (to absorb residual gases)"],
      appearance: "A soft, silvery-white metal at room temperature; rapidly oxidizes and darkens when exposed to air.",
      lifeRole: "Soluble barium ions (Ba²⁺) are highly toxic to the human body, causing severe muscle spasms and cardiac arrhythmias; however, the 'barium meal' consumed medically is extremely insoluble in water and stomach acid, thus cannot be absorbed by the body and is very safe.",
      compounds: [
        {
          formula: "BaSO₄",
          name: "Barium sulfate",
          description: "A white solid extremely insoluble in water and acid, serving as the main component for gastrointestinal X-ray imaging in medicine.",
        },
        {
          formula: "BaCO₃",
          name: "Barium carbonate",
          description: "A toxic white precipitate, historically widely used as a rodenticide and in ceramic glazes.",
        },
      ],
      reactions: [
        {
          equation: "Ba + 2H₂O → Ba(OH)₂ + H₂",
          description: "Barium metal reacts with water, generating a strongly alkaline barium hydroxide solution and releasing flammable hydrogen gas.",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Elemental barium metal easily reacts with air and moisture to catch fire; most soluble barium compounds (like barium chloride) are highly toxic, and ingesting trace amounts can be fatal. It should not be handled without professional guidance.",
        },
      ],
      isotopes: [
        {
          notation: "¹³⁸Ba",
          use: "Fundamental science and environmental tracing",
          description: "The most abundant stable isotope of barium in nature, making up about 70%.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Barium's medical imaging mechanisms, chemical reactivity, and toxicological characteristics are extremely clear empirical data in the medical and chemical communities.",
      },
    },
    La: {
      description: "Lanthanum is a soft, ductile, silvery-white metal and the first member of the lanthanide series. It oxidizes very easily in air and is an important foundational material for many modern optical and battery technologies.",
      uses: ["Negative electrode material in nickel-metal hydride (NiMH) batteries", "Manufacturing high-refractive-index optical camera lenses", "Lighter flints (mischmetal mixed with cerium)"],
      appearance: "A soft, silvery-white metal at room temperature; rapidly darkens when exposed to air.",
      lifeRole: "Elemental lanthanum and its ions have no known physiological function in the human body; excessive ingestion of soluble lanthanum salts may cause liver and cellular toxicity.",
      compounds: [
        {
          formula: "La₂O₃",
          name: "Lanthanum oxide",
          description: "A white solid powder that can significantly increase the refractive index of glass, widely used in high-end lenses for astronomical telescopes and cameras.",
        },
      ],
      reactions: [
        {
          equation: "4La + 3O₂ → 2La₂O₃",
          description: "Lanthanum oxidizes extremely easily in air, and fine lanthanum powder can autoignite at room temperature, forming white lanthanum oxide.",
          conditions: "Room temperature or slight heat",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Bulk metallic lanthanum has very low toxicity, but lanthanum metal powder generated during machining can easily autoignite in air; dust fires should be prevented.",
        },
      ],
      isotopes: [
        {
          notation: "¹³⁹La",
          use: "Nuclear Magnetic Resonance (NMR) analysis",
          description: "The stable lanthanum isotope making up nearly 100% in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Lanthanum's chemical reactivity, optical refractive properties, and battery chemistry data all have complete empirical data.",
      },
    },
    Ce: {
      description: "Cerium is the most abundant of the rare earth elements and has very active chemical properties. It possesses a unique ability to freely transition between different oxidation states (+3 and +4), making it an excellent catalytic and polishing material.",
      uses: ["Catalytic converters in automobile exhaust systems", "Precision polishing powder for glass and optical lenses (as cerium dioxide)", "Flint alloys (mischmetal)"],
      appearance: "An iron-gray, ductile metal at room temperature; oxidizes and flakes off very easily upon contact with air.",
      compounds: [
        {
          formula: "CeO₂",
          name: "Cerium dioxide",
          description: "A pale yellow or white powder, it is the standard material in the glass polishing industry and is also used in the interior wall coatings of self-cleaning ovens.",
        },
      ],
      reactions: [
        {
          equation: "Ce + O₂ → CeO₂",
          description: "Metallic cerium extremely easily catches fire and burns when subjected to friction or heat in the air, forming stable cerium dioxide.",
          conditions: "Friction or heating",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Cerium metal powder or shavings are extremely prone to spontaneous combustion (pyrophoric metal); cutting or grinding cerium very easily produces high-temperature sparks.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁴⁰Ce",
          use: "Nuclear fission product tracing",
          description: "The most abundant stable isotope of cerium, making up nearly 90% in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Cerium's redox catalytic capabilities and combustion characteristics have extremely detailed industrial and scientific empirical data.",
      },
    },
    Pr: {
      description: "Praseodymium is a soft, silvery-yellow rare earth metal that can impart unique pure yellow or green colors to glass and enamels. It is primarily used to manufacture powerful magnets and special optical materials like protective goggles.",
      uses: ["Manufacturing Didymium glass for welding and glassblowing goggles", "Alloyed with neodymium to create high-strength permanent magnets", "High-temperature alloy additive in aircraft engines"],
      appearance: "A metal with a silvery-yellow luster at room temperature; slowly forms a green, crumbly oxide layer in air.",
      compounds: [
        {
          formula: "Pr₆O₁₁",
          name: "Praseodymium(III,IV) oxide",
          description: "The most stable praseodymium oxide in natural environments, appearing deep brownish-black; used as a ceramic colorant.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Metallic praseodymium powder carries a fire risk; ingestion of soluble praseodymium salts has mild to moderate toxicity.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁴¹Pr",
          use: "NMR research",
          description: "The only stable praseodymium isotope existing in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Praseodymium's optical absorption spectra and magnetic alloy applications have clear scientific empirical data.",
      },
    },
    Nd: {
      description: "Neodymium is a bright silvery metal and the core element used to manufacture the strongest permanent magnets currently known. It has tremendously driven the revolution in micro-motors, wind power generation, and modern acoustic technology.",
      uses: ["Manufacturing extremely high-strength Neodymium-Iron-Boron (NdFeB) permanent magnets", "Solid-state lasers (such as Nd:YAG lasers)", "Driver units in high-end headphones and smartphone speakers"],
      appearance: "A bright silvery metal at room temperature; highly susceptible to oxidation in air and usually requires plating with nickel or other protective layers to prevent corrosion.",
      compounds: [
        {
          formula: "Nd₂Fe₁₄B",
          name: "Neodymium-iron-boron alloy",
          description: "Currently the strongest commercial permanent magnet material, providing astonishing magnetic force in a very small volume.",
        },
        {
          formula: "Nd₂O₃",
          name: "Neodymium oxide",
          description: "A pale blue powder that imparts a beautiful purple color to glass and absorbs harmful glare.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Neodymium metal powder burns extremely easily; large neodymium magnets have an immensely fierce attraction, and fingers caught between two magnets can suffer severe mechanical injuries such as fractures.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁴²Nd",
          use: "Geochemistry and meteorite dating",
          description: "One of the most abundant isotopes of neodymium, commonly used to trace Earth's early evolutionary history.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The powerful magnetic data of NdFeB and the luminescent properties of its lasers possess indisputable empirical data.",
      },
    },
    Pm: {
      description: "Promethium is the only radioactive metal in the lanthanide series that lacks a stable isotope. It is virtually non-existent in nature and is primarily synthesized artificially through the fission of uranium in nuclear reactors.",
      uses: ["Nuclear micro-batteries (like power sources for space probes)", "Radiation source for measuring the thickness of paper and plastic films", "Specialty luminous paints (historical use, now mostly replaced by tritium)"],
      appearance: "Theoretically a solid with a metallic luster, but due to intense radioactivity and decay heat, observing its elemental form with the naked eye is extremely difficult and dangerous.",
      safety: [
        {
          level: "High Risk",
          description: "All isotopes of promethium are highly radioactive; upon decay, they emit beta (β) rays and trigger harmful secondary X-rays (Bremsstrahlung). It must only be handled in laboratories with radiation shielding.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁴⁷Pm",
          use: "Nuclear batteries and thickness gauges",
          description: "A radioactive isotope with a half-life of about 2.6 years, it is the most commercially and industrially valuable promethium nuclide.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Promethium's radioactive decay properties and nuclear physics data are empirical data observed from artificial synthesis.",
      },
    },
    Sm: {
      description: "Samarium is a silvery-white rare earth metal with excellent resistance to high temperatures and demagnetization. It is the key component of the first generation of practical rare earth permanent magnets (Samarium-cobalt magnets).",
      uses: ["Samarium-cobalt (SmCo) high-temperature permanent magnets", "Control rods and neutron absorbers in nuclear reactors", "Targeted radioisotope therapy for specific bone cancer metastases"],
      appearance: "A silvery-white metallic solid with a luster at room temperature.",
      compounds: [
        {
          formula: "SmCo₅",
          name: "Samarium-cobalt alloy",
          description: "A permanent magnet that maintains extremely strong magnetism even in high-temperature environments (up to 300°C and above), widely used in military and aerospace motors.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Elemental samarium metal has no obvious toxicity, but its powder is flammable; large amounts of soluble salts entering the body may interfere with calcium metabolism.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁵²Sm",
          use: "Neutron absorption research",
          description: "The stable and most abundant samarium isotope, possessing a very large neutron absorption cross-section.",
        },
        {
          notation: "¹⁵³Sm",
          use: "Radiopharmaceuticals",
          description: "A short half-life isotope that emits beta rays, used to alleviate extreme pain in advanced bone cancer patients.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The magnetic performance, temperature limits, and medical applications of samarium-cobalt alloys all possess abundant empirical data.",
      },
    },
    Eu: {
      description: "Europium is the most chemically reactive element among the lanthanide metals and an extremely important luminescent material. In modern display technology, it provides the most crucial and pure 'red' and 'blue' phosphors.",
      uses: ["Red and blue phosphors in TV, smartphone, and computer screens", "Anti-counterfeiting fluorescent printing on Euro banknotes", "Low-energy LED lighting fixtures"],
      appearance: "A soft, lead-gray metal at room temperature; extremely easily oxidizes and turns black.",
      compounds: [
        {
          formula: "Eu₂O₃",
          name: "Europium(III) oxide",
          description: "A white powder with a pinkish tint that emits a vibrant red light when excited by ultraviolet light; it was the greatest contributor to colorizing old CRT televisions.",
        },
      ],
      reactions: [
        {
          equation: "2Eu + 2H₂O → 2Eu(OH)₂ + H₂",
          description: "Metallic europium is extremely reactive; its reaction in water is similar to calcium metal, violently releasing flammable hydrogen gas.",
        },
      ],
      safety: [
        {
          level: "Warning",
          description: "Elemental europium metal reacts violently and catches fire upon contact with water or moisture; it must be sealed and stored in mineral oil or an inert gas.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁵¹Eu",
          use: "Nuclear physics research",
          description: "An extremely weakly radioactive isotope in nature (with an exceedingly long half-life, treated as stable).",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Europium's optical excitation spectra and extreme chemical reactivity are both empirical data in materials chemistry.",
      },
    },
    Gd: {
      description: "Gadolinium is a silvery-white, magnetic rare earth metal with the highest neutron absorption cross-section of any stable element. It exhibits a highly unique magnetocaloric effect near room temperature.",
      uses: ["Intravenous contrast agents for Medical Magnetic Resonance Imaging (MRI)", "Emergency shutdown control rods in nuclear reactors", "Magnetic refrigeration technology (cooling systems without compressor refrigerants)"],
      appearance: "A silvery-white solid with a metallic luster at room temperature.",
      lifeRole: "Free gadolinium ions (Gd³⁺) are highly toxic to the human body, interfering with calcium ion channels; however, in MRI contrast agents, gadolinium is securely wrapped by chelating agents and can be safely excreted from the body in most cases.",
      compounds: [
        {
          formula: "Gd-DOTA",
          name: "Macrocyclic gadolinium chelate",
          description: "A safe medical contrast agent molecule that utilizes gadolinium's paramagnetism to vastly improve the contrast of MRI images.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Pure gadolinium metal powder is flammable; if specific patients with renal insufficiency are administered gadolinium contrast agents, it may trigger severe Nephrogenic Systemic Fibrosis (NSF).",
        },
      ],
      isotopes: [
        {
          notation: "¹⁵⁷Gd",
          use: "Neutron absorption in the nuclear industry",
          description: "The stable isotope with the strongest thermal neutron absorption capability in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Gadolinium's magnetism, neutron cross-section data, and medical imaging metabolic mechanisms all have highly rigorous empirical data.",
      },
    },
    Tb: {
      description: "Terbium is a soft, silvery-gray metal. Similar to europium, it is primarily active in the optoelectronic field, providing extremely pure 'green' phosphors in displays and lighting equipment.",
      uses: ["Green phosphors in displays and fluorescent lamps", "Giant magnetostrictive materials for sonar and actuators (Terfenol-D)", "Dopant in solid-state electronic components"],
      appearance: "A ductile, silvery-gray metal at room temperature; can be cut with a knife.",
      compounds: [
        {
          formula: "Tb₄O₇",
          name: "Terbium(III,IV) oxide",
          description: "A deep brown powder, it is the most common commercial terbium compound and a precursor for preparing green luminescent materials.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Terbium metal powder burns extremely easily; like most rare earth metals, long-term inhalation of trace dust may cause lung irritation.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁵⁹Tb",
          use: "Materials physics and optical applications",
          description: "The only stable terbium isotope existing in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Terbium's emission spectra and magnetostrictive physical changes have clear scientific empirical data.",
      },
    },
    Dy: {
      description: "Dysprosium is a silvery-white rare earth metal that is extremely easily magnetized. It can vastly improve the demagnetization resistance of neodymium magnets at high temperatures, making it an indispensable strategic element for electric vehicle and wind turbine motors.",
      uses: ["Key additive for high-temperature resistant Neodymium-Iron-Boron magnets", "Control rod material in nuclear reactors", "Core component in giant magnetostrictive alloys (Terfenol-D)"],
      appearance: "A shiny, silvery-white metal at room temperature; slowly loses its luster when exposed to air.",
      compounds: [
        {
          formula: "Dy₂O₃",
          name: "Dysprosium(III) oxide",
          description: "A white powder, mainly used as an additive in ceramics and specialty magnetic materials.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Dysprosium metal powder burns extremely easily if it encounters sparks; its soluble salts have low toxicity to humans.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁶⁴Dy",
          use: "Magnetism and nuclear physics research",
          description: "The most abundant stable isotope of dysprosium in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The effect of dysprosium on enhancing the demagnetization resistance (coercivity) of permanent magnetic materials and its magnetostrictive deformation data have vast amounts of empirical data.",
      },
    },
    Ho: {
      description: "Holmium is a relatively soft, silvery-white metal possessing the highest magnetic moment of any natural element. This makes it irreplaceable in scientific fields dedicated to creating extremely strong magnetic fields.",
      uses: ["Medical holmium lasers (used for non-invasive lithotripsy and prostate surgeries)", "Manufacturing special magnetic pole pieces for generating ultra-strong magnetic fields", "Burnable poison (neutron absorber) in nuclear reactors"],
      appearance: "A silvery-white metal at room temperature; relatively stable in dry air but oxidizes extremely easily at high temperatures.",
      compounds: [
        {
          formula: "Ho₂O₃",
          name: "Holmium(III) oxide",
          description: "A pale yellow powder that exhibits strange color changes under different light sources; often used as a calibration standard for optical spectrophotometers.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Holmium metal dust carries fire and explosion risks; massive exposure to holmium compounds may cause mild interference with human metabolism.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁶⁵Ho",
          use: "Extreme magnetic field and optical standard research",
          description: "The only stable holmium isotope existing in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Holmium's extremely high magnetic moment and its laser medical surgery applications (lithotripsy effect) both have clinical and physical empirical data.",
      },
    },
    Er: {
      description: "Erbium is a silvery-white rare earth metal, most famous for its oxides which can display a beautiful pink color. It plays a critical role in amplifying optical signals in long-distance fiber optic communication networks.",
      uses: ["Core dopant in Erbium-Doped Fiber Amplifiers (EDFA)", "Medical erbium lasers (for precise cosmetic skin and dental surgeries)", "Pink colorant in glass, porcelain, and cubic zirconia"],
      appearance: "A shiny, ductile, silvery-white metal at room temperature.",
      compounds: [
        {
          formula: "Er₂O₃",
          name: "Erbium(III) oxide",
          description: "A solid powder with a beautiful pink color; it is a critical material in optical communication networks that can absorb specific wavelengths to amplify signals.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Metallic erbium powder is flammable at high temperatures; compound toxicity is extremely low, but inhaling the dust should still be avoided.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁶⁶Er",
          use: "Nuclear physics and materials research",
          description: "The stable isotope of erbium with the highest natural abundance.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Erbium's energy level transition amplification effect in fiber optic networks and its laser surgery cutting depth both have precise empirical data.",
      },
    },
    Tm: {
      description: "Thulium is one of the rarest and most expensive rare earth metals on Earth. Despite its extreme rarity, it holds an irreplaceable position in specialty lasers and portable X-ray equipment.",
      uses: ["Medical surgical thulium lasers (excellent for precise tissue cutting and hemostasis)", "Miniature radiation source in portable X-ray machines (after nuclear activation)", "High-end anti-counterfeiting fluorescent feature in Euro banknotes"],
      appearance: "A silvery-gray metal with a bright luster at room temperature.",
      compounds: [
        {
          formula: "Tm₂O₃",
          name: "Thulium(III) oxide",
          description: "A pale green powder; after neutron irradiation in a reactor, it converts into a radiation source that emits X-rays.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Elemental thulium powder carries a fire hazard; its soluble compounds are mildly toxic, and artificial radioactive isotopes pose a clear radiation hazard.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁶⁹Tm",
          use: "Industrial and medical miniature X-ray source (activated to ¹⁷⁰Tm)",
          description: "The only stable thulium isotope in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Thulium's laser excitation spectra and medical cutting thermal effects possess detailed clinical and physical empirical data.",
      },
    },
    Yb: {
      description: "Ytterbium is a soft, silvery-white rare earth metal possessing the peculiar physical property of a drastic increase in electrical resistivity under pressure. It is widely used in industrial stress sensing and high-energy fiber lasers.",
      uses: ["Ytterbium-doped fiber lasers for high-power industrial cutting", "Grain refining alloy additive for stainless steel", "Stress sensors for monitoring earthquakes or explosive shockwaves"],
      appearance: "A soft, silvery-white metal with a bright luster at room temperature.",
      compounds: [
        {
          formula: "Yb₂O₃",
          name: "Ytterbium(III) oxide",
          description: "A white powder, acting as an important optical dopant in high-power solid-state lasers and fiber lasers.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Ytterbium metal dust is highly prone to spontaneous combustion, and most ytterbium compounds are highly irritating to the human body; there are concerns about teratogenicity with long-term exposure.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁷⁴Yb",
          use: "Laser physics and materials science",
          description: "The most abundant stable isotope of ytterbium in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Ytterbium's fiber laser output performance and resistance changes under high pressure are empirical data highly verified by the materials physics community.",
      },
    },
    Lu: {
      description: "Lutetium is the last, heaviest, and hardest metal in the lanthanide series. Because extraction is extremely difficult and its price is exorbitantly high, its applications are primarily concentrated in a few high-end scientific and medical fields.",
      uses: ["High-efficiency scintillator crystals (like LSO) for Positron Emission Tomography (PET)", "Targeted radioisotope therapy for specific cancers", "High-end catalysts in the petroleum cracking industry"],
      appearance: "A hard, dense, silvery-white metal at room temperature.",
      compounds: [
        {
          formula: "Lu₂SiO₅",
          name: "Lutetium oxyorthosilicate (LSO)",
          description: "An excellent scintillator material capable of converting high-energy gamma rays into visible light, vastly improving the resolution of PET scanners.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Lutetium metal powder, like most rare earth metals, burns extremely easily; its compounds have low toxicity, but natural lutetium contains weakly radioactive isotopes.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁷⁵Lu",
          use: "Advanced crystal materials research",
          description: "The most abundant stable lutetium isotope in nature.",
        },
        {
          notation: "¹⁷⁷Lu",
          use: "Precision targeted radiotherapy",
          description: "An extremely important artificial medical isotope; it can attach to specific cancer cells and emit short-range radiation to precisely destroy them.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The scintillation effect of lutetium crystals and the targeted anti-cancer mechanisms of its artificial isotopes both have extremely rigorous clinical and medical empirical data.",
      },
    },
    Hf: {
      description: "Hafnium is a shiny, silvery-gray transition metal with chemical properties extremely similar to zirconium. Its most prominent feature is its extremely high capacity to absorb thermal neutrons, giving it an important status in the nuclear power industry.",
      uses: ["Control rods in nuclear reactors (especially nuclear submarines)", "Manufacturing extremely high melting point alloys", "High-dielectric-constant (High-k) insulating layers in high-end semiconductor chips"],
      appearance: "A silvery-gray metal with a bright metallic luster at room temperature.",
      compounds: [
        {
          formula: "HfO₂",
          name: "Hafnium dioxide",
          description: "A highly heat-resistant white powder, widely used in advanced integrated circuits to reduce leakage current in micro-transistors.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Elemental hafnium metal is safe, but fine powder generated during machining is highly flammable and extremely prone to spontaneous combustion.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁸⁰Hf",
          use: "Nuclear physics research",
          description: "The most abundant stable isotope of hafnium in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Hafnium's nuclear physics cross-section data and semiconductor material properties are highly complete empirical data.",
      },
    },
    Ta: {
      description: "Tantalum is a hard, heavy, and extremely ductile silvery-gray transition metal. It boasts extremely strong resistance to chemical corrosion and does not trigger immune rejection in the human body.",
      uses: ["Tantalum capacitors in smartphones and electronic devices", "Medical implants (like artificial bones and plates)", "Manufacturing corrosion-resistant laboratory instruments"],
      appearance: "A ductile, silvery-gray metal at room temperature; its surface usually has an extremely dense and stable deep blue oxide film.",
      lifeRole: "Tantalum metal is completely non-toxic to the human body and has excellent biocompatibility; it is widely used in orthopedic and surgical implants without triggering immune reactions.",
      compounds: [
        {
          formula: "Ta₂O₅",
          name: "Tantalum pentoxide",
          description: "A white solid that is extremely stable; it is the core dielectric material for manufacturing miniature, high-capacity tantalum capacitors.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Bulk tantalum metal is extremely safe; however, extremely fine powder generated under special processes carries a fire hazard.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁸¹Ta",
          use: "Nuclear physics and medical materials research",
          description: "Virtually the only stable isotope in nature (accounting for over 99.98%).",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The dielectric constant of tantalum capacitors and its biocompatibility are empirical data verified through long-term clinical and industrial use.",
      },
    },
    W: {
      description: "Tungsten is an extremely hard, grayish-white transition metal possessing the highest melting point of all natural elements (3422°C). Its density is exceedingly high, nearly identical to that of gold.",
      uses: ["Filaments in traditional incandescent light bulbs", "Metal cutting tools (Tungsten carbide)", "High-density kinetic energy penetrators in armor-piercing ammunition"],
      appearance: "Pure tungsten is a metal with a steel-gray luster; it is extremely difficult to machine and is often made into extremely hard alloys via powder metallurgy.",
      compounds: [
        {
          formula: "WC",
          name: "Tungsten carbide",
          description: "An extremely hard material second only to diamond in hardness, widely used in drill bits, lathe tools, and ballpoint pen tips.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Pure tungsten is extremely safe; however, long-term industrial inhalation of tungsten carbide and the accompanying cobalt dust can cause severe occupational hard metal lung disease.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁸⁴W",
          use: "Fundamental physics research",
          description: "The most abundant stable isotope of tungsten in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Tungsten's extreme high-temperature thermodynamics data and alloy hardness have extremely detailed engineering empirical data.",
      },
    },
    Re: {
      description: "Rhenium is an extremely rare, heavy, silvery-white transition metal with a very high melting point (second only to tungsten and carbon). It vastly improves the creep resistance of high-temperature alloys, making it a strategic material for aviation engines.",
      uses: ["High-temperature single-crystal blades in aviation and rocket gas turbine engines", "Catalyst for refining high-octane unleaded gasoline", "Tungsten-rhenium thermocouples (for measuring extreme high temperatures)"],
      appearance: "A hard, silvery-white metal at room temperature.",
      safety: [
        {
          level: "Caution",
          description: "Rhenium metal has extremely low toxicity, but like all heavy metal powders, inhalation and fire hazards should be avoided when it is in a dust state.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁸⁷Re",
          use: "Geochronology",
          description: "A weakly radioactive isotope making up over 60% of natural rhenium; its half-life exceeds the age of the universe, and it can be used in rhenium-osmium dating to age ancient minerals.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Rhenium's high-temperature creep resistance data in single-crystal blades and its catalytic properties have highly reliable empirical data.",
      },
    },
    Os: {
      description: "Osmium is a hard, brittle, white metal with a slight blueish tint. It is the densest naturally occurring element and slowly releases a highly toxic, volatile oxide at room temperature.",
      uses: ["Wear-resistant alloy points for high-quality fountain pen nibs", "Staining agent for microscopic biological samples (as osmium tetroxide)", "Fingerprint detection technology"],
      appearance: "A hard and exceedingly heavy blue-white metal at room temperature; powdered osmium emits a pungent radish-like odor in air (due to surface oxidation).",
      compounds: [
        {
          formula: "OsO₄",
          name: "Osmium tetroxide",
          description: "A highly volatile pale yellow solid; its vapor is highly toxic and can stain fats in biological tissues black, commonly used in electron microscopy sample preparation.",
        },
      ],
      reactions: [
        {
          equation: "Os + 2O₂ → OsO₄",
          description: "Osmium powder reacts with oxygen even at room temperature, slowly generating highly toxic osmium tetroxide gas with a strong, irritating odor.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Osmium metal itself is non-toxic, but the osmium tetroxide vapor formed on its surface is highly volatile and highly toxic; trace contact with the eyes can cause blindness, making it extremely dangerous.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁹²Os",
          use: "Geochemical tracing",
          description: "The most abundant stable isotope of osmium in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Osmium's extreme density physics values and the toxicology of osmium tetroxide are clear empirical data in the scientific community.",
      },
    },
    Ir: {
      description: "Iridium is an extremely hard, brittle, and heavy silvery-white transition metal, second only to osmium in density. It is the most corrosion-resistant element, insoluble even in aqua regia, which can dissolve gold.",
      uses: ["Manufacturing top-tier spark plug electrodes", "Wear-bearing bearings in high-end compasses and instruments", "Metrological prototype standards (such as early international prototype meter and kilogram alloys)"],
      appearance: "An extremely brilliant, hard, brittle silvery-white metal at room temperature.",
      compounds: [
        {
          formula: "IrO₂",
          name: "Iridium(IV) oxide",
          description: "A black solid, commonly used as an extremely corrosion-resistant anode material in industrial electrolysis processes.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Bulk iridium metal is extremely inert and safe, but certain artificial radioactive iridium isotopes possess intense radiation and have previously caused severe radiation leak accidents.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁹³Ir",
          use: "Isotopic chemical research",
          description: "The stable isotope with the highest abundance in nature.",
        },
        {
          notation: "¹⁹²Ir",
          use: "Industrial radiographic testing and brachytherapy",
          description: "An artificial radioactive isotope emitting intense gamma rays, widely used for inspecting pipeline welds and tumor radiotherapy in vivo.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Iridium's extreme corrosion resistance data and geochemical characteristics (such as the Cretaceous-Paleogene boundary iridium anomaly) are clear empirical data.",
      },
    },
    Pt: {
      description: "Platinum (commonly known as white gold) is a heavy, ductile, and extremely rare silvery-white precious metal. It exhibits outstanding corrosion resistance and powerful catalytic capabilities, with a value often rivaling gold.",
      uses: ["Automobile exhaust catalytic converters", "Fine jewelry", "Catalysts for the chemical industry and hydrogen fuel cells"],
      appearance: "A shiny silvery-white metal with excellent ductility at room temperature.",
      lifeRole: "Elemental platinum has no physiological function in the human body and is non-toxic; however, certain platinum coordination compounds have been found to strongly inhibit cell division, becoming important anti-cancer drugs.",
      compounds: [
        {
          formula: "PtCl₂(NH₃)₂",
          name: "Cisplatin",
          description: "A very famous chemotherapeutic drug that interferes with cancer cell DNA replication, widely used to treat testicular cancer and various other malignant tumors.",
        },
      ],
      reactions: [
        {
          equation: "2CO + O₂ → 2CO₂",
          description: "In automobile exhaust pipes, platinum metal acts as a catalyst to greatly reduce the reaction activation energy, rapidly oxidizing toxic carbon monoxide into carbon dioxide.",
          conditions: "Platinum catalyst and high temperature",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Metallic platinum itself is extremely safe; however, some soluble platinum salts may trigger severe respiratory allergic reactions, and the anti-cancer drug cisplatin carries severe renal side effects.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁹⁵Pt",
          use: "NMR research",
          description: "The most common platinum isotope in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Platinum's catalytic mechanisms and the pharmacological data of cisplatin chemotherapy have long-term industrial and clinical medical empirical data.",
      },
    },
    Au: {
      description: "Gold is an extremely soft, heavy precious metal with a dazzling yellow luster. It is humanity's oldest symbol of wealth, and its superb ductility and exceptional corrosion resistance remain irreplaceable in modern technology.",
      uses: ["Financial reserves and fine jewelry", "Anti-oxidation electrical contacts in smartphones and computer chips", "Infrared shielding reflective coatings for spacesuits and artificial satellites"],
      appearance: "A soft, highly lustrous, deep yellow metal at room temperature that never rusts or discolors.",
      lifeRole: "Pure gold is completely non-toxic to the human body and cannot be digested, often used as food decoration (gold leaf); rare gold compounds are occasionally used to treat severe rheumatoid arthritis.",
      compounds: [
        {
          formula: "HAuCl₄",
          name: "Chloroauric acid",
          description: "A yellow crystalline compound formed by dissolving gold in aqua regia, serving as a precursor for gold electroplating and preparing gold nanoparticles.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Pure metallic gold is extremely safe and non-toxic; however, the cyanide processes and amalgamation methods used for mining and extracting gold present high hazards and frequently cause severe environmental pollution.",
        },
      ],
      isotopes: [
        {
          notation: "¹⁹⁷Au",
          use: "Physical standards and materials science",
          description: "The only stable gold isotope existing in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Gold's corrosion-resistant thermodynamics, extreme ductility, and electrical data are among the oldest and most comprehensive empirical data.",
      },
    },
    Hg: {
      description: "Mercury (commonly known as quicksilver) is the only metallic element that is liquid at standard temperature and pressure. It is very heavy, featuring a silvery-white shining appearance and high surface tension, but is also a cumulative neurotoxin.",
      uses: ["Traditional thermometers and barometers (mostly phased out)", "Luminous gas in fluorescent and energy-saving light tubes (trace amounts)", "Silver amalgam alloy used for dental fillings"],
      appearance: "A heavy, highly fluid, silvery-white shining liquid at room temperature that easily breaks into tiny spherical droplets.",
      lifeRole: "Mercury has no physiological function for any living organism and possesses strong neurotoxicity. Inorganic mercury in the environment can be transformed by microorganisms into lipid-soluble 'methylmercury', accumulating in the human body through the food chain (especially deep-sea fish) and severely damaging the central nervous system.",
      compounds: [
        {
          formula: "HgS",
          name: "Mercury(II) sulfide",
          description: "An extremely vibrant red mineral in nature (cinnabar), historically widely used as a vermilion pigment.",
        },
        {
          formula: "CH₃Hg⁺",
          name: "Methylmercury",
          description: "An organic mercury ion, acting as the primary fatal substance in environmental pollution and food chain accumulation poisoning (such as Minamata disease in Japan).",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Liquid mercury volatilizes into a colorless, odorless, highly toxic vapor at room temperature. If a mercury thermometer breaks, a vacuum cleaner must never be used for cleanup; most mercury compounds cause irreversible, permanent damage to the central nervous system and kidneys.",
        },
      ],
      isotopes: [
        {
          notation: "²⁰²Hg",
          use: "Fundamental physics research",
          description: "The most abundant stable mercury isotope in nature.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Mercury's vapor pressure physical characteristics, alloy (amalgam) reactions, and methylmercury toxicology all possess deeply tragic historical empirical data.",
      },
    },
    Tl: {
      description: "Thallium is a very soft, grayish-white post-transition metal. It was widely used as a rodenticide, but due to its colorless, odorless nature and extreme acute toxicity to humans, it has been strictly regulated by most countries worldwide.",
      uses: ["Special optical infrared-transmitting glass", "High-temperature superconducting material research", "Medical myocardial imaging (in the form of radioactive Thallium-201)"],
      appearance: "An extremely soft, lead-like grayish-white metal at room temperature; rapidly oxidizes and loses its luster upon exposure to air.",
      compounds: [
        {
          formula: "Tl₂SO₄",
          name: "Thallium(I) sulfate",
          description: "A colorless, odorless, highly toxic crystal, historically a major component of lethal insecticides and rodenticides.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Thallium and its compounds are extremely violent neural and cellular poisons; ingestion of trace amounts causes severe neuralgia, intense hair loss, and organ failure, and it should never be handled outside of professional regulations.",
        },
      ],
      isotopes: [
        {
          notation: "²⁰³Tl",
          use: "Stable isotopic labeling",
          description: "A stable isotope making up nearly 30% of natural thallium.",
        },
        {
          notation: "²⁰¹Tl",
          use: "Cardiac nuclear medicine imaging",
          description: "An artificial radioactive isotope emitting specific rays, used to evaluate blood perfusion conditions in heart muscle.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Thallium's extreme toxicity mechanisms and medical radioactive imaging applications are strictly regulated empirical data.",
      },
    },
    Pb: {
      description: "Lead is a heavy, soft, ductile bluish-gray post-transition metal. Although it possesses excellent industrial and radiation-shielding efficacy, due to its severe cumulative neurotoxicity, it is gradually being phased out of everyday goods.",
      uses: ["Automotive lead-acid storage batteries", "Radiation shielding barriers for medical X-ray and nuclear facilities", "Waterproof protective layers for high-voltage underground cables"],
      appearance: "An extremely soft, dark bluish-gray metal at room temperature; freshly cut surfaces appear bright silver but rapidly oxidize and darken.",
      lifeRole: "Lead has no known benefits to biological systems. It easily crosses the blood-brain barrier, interfering with hemoglobin synthesis and nerve transmission; children are extremely sensitive to lead toxicity, and trace exposure can cause permanent intellectual impairment.",
      compounds: [
        {
          formula: "PbO",
          name: "Lead(II) oxide",
          description: "A yellow powder widely used in manufacturing lead-acid batteries and historically crafted lead crystal glassware.",
        },
        {
          formula: "Pb(C₂H₅)₄",
          name: "Tetraethyllead",
          description: "An anti-knock additive once widely used in gasoline, acting as the culprit behind global lead pollution and health catastrophes in the 20th century, now completely banned.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Lead and its compounds are severe cumulative neurotoxins. Children must be strictly prevented from contacting peeling lead paint in older homes, and old lead water pipes cause drinking water contamination.",
        },
      ],
      isotopes: [
        {
          notation: "²⁰⁸Pb",
          use: "Endpoint of radioactive dating",
          description: "The heaviest and extremely stable lead isotope, acting as the final stable product of natural thorium and uranium radioactive decay chains.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Lead's radiation-shielding physics, electrochemical reactions, and severe neurotoxicology possess a historically rich body of empirical data.",
      },
    },
    Bi: {
      description: "Bismuth is a brittle white metal with a distinctive pinkish tint. It is one of the very few heavy metals that is virtually non-toxic to humans, commonly used as an eco-friendly substitute for lead.",
      uses: ["Active ingredient in gastrointestinal medications (Bismuth subsalicylate)", "Low-melting fusible alloys for fire sprinkler heads and fuses", "Alternative material for lead-free solder and lead-free bullets"],
      appearance: "A lustrous, silvery-white metal with a slight pinkish tint at room temperature; upon cooling, it forms exceptionally beautiful iridescent stepped crystals (due to surface oxide film interference).",
      lifeRole: "Bismuth metal and most of its compounds are extremely safe, even widely formulated into over-the-counter medications (like Pepto-Bismol) to soothe heartburn and indigestion, while assisting in eradicating Helicobacter pylori.",
      compounds: [
        {
          formula: "C₇H₅BiO₄",
          name: "Bismuth subsalicylate",
          description: "The pink liquid component in common gastrointestinal medications, capable of effectively protecting the gastric mucosa.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Bismuth is known as the safest heavy metal; however, long-term excessive ingestion of bismuth medications occasionally causes mild black tongue and black stools (a harmless phenomenon).",
        },
      ],
      isotopes: [
        {
          notation: "²⁰⁹Bi",
          use: "Physics decay limit research",
          description: "Once thought to be the heaviest stable isotope in nature, it was later proven to possess extremely weak radioactivity (with a half-life over ten billion times the age of the universe), rendering it absolutely safe in practice.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Bismuth's low-temperature phase transitions, safe toxicology, and medical efficacies are mature clinical and physical empirical data.",
      },
    },
    Po: {
      description: "Polonium is an extremely rare, highly radioactive metalloid element discovered by Marie Curie. It is one of the most toxic substances in nature.",
      uses: ["Industrial static elimination brushes (historical use)", "Early nuclear thermal sources for space satellite thermoelectric generators", "Miniature neutron source triggers for detonating nuclear weapons"],
      appearance: "Theoretically a silvery-gray solid, but due to its intense radiation and decay heat, its elemental form observed with the naked eye glows blue from high heat and rapidly vaporizes.",
      lifeRole: "Polonium is extremely lethal to the human body. If trace amounts of dust are inhaled or ingested into the body, the intense alpha (α) rays it emits directly tear apart DNA and cell structures, causing hopeless acute radiation poisoning.",
      compounds: [
        {
          formula: "PoO₂",
          name: "Polonium dioxide",
          description: "A highly radioactive solid that is virtually impossible to exist in macroscopic quantities in nature.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Polonium-210 is one of the strongest known lethal poisons (dozens of times more toxic than cyanide), where microgram-level doses entering the body can cause death; it is strictly restricted to highest-protection nuclear laboratories.",
        },
      ],
      isotopes: [
        {
          notation: "²¹⁰Po",
          use: "Assassination and nuclear physics source",
          description: "The most famous isotope, with a half-life of only 138 days, releasing alpha particles of astonishing energy upon decay; it was historically used as a notorious radioactive assassination tool.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Polonium's radioactive decay heat and fatal radiation toxicology possess clear nuclear physics and forensic empirical data.",
      },
    },
    At: {
      description: "Astatine is the rarest element in nature, belonging to the halogen group but highly radioactive. Its total abundance in the Earth's crust at any given moment is estimated to be less than an ounce.",
      uses: ["Targeted alpha particle radiotherapy for specific cancers (in very small-scale research)", "No other practical industrial uses"],
      appearance: "No one has ever seen its macroscopic appearance; theoretically, if enough mass could be gathered, it would instantly vaporize itself due to its extremely intense radioactive heat.",
      safety: [
        {
          level: "High Risk",
          description: "All isotopes of astatine possess extreme radioactive destructive power, with a half-life lasting at most only a few hours, making it impossible to exist outside specialized particle accelerator environments.",
        },
      ],
      isotopes: [
        {
          notation: "²¹¹At",
          use: "Medical targeted radiation research",
          description: "An artificial isotope with a half-life of about 7.2 hours; scientists are studying attaching it to antibodies to precisely kill cancer cells within a tiny range.",
        },
      ],
      reliability: {
        level: "Partial Estimation Data",
        description: "Due to its extremely short half-life and minuscule quantities, most of astatine's chemical properties rely on theoretical extrapolation, with only its radioactive decay and tracing experiments serving as empirical data.",
      },
    },
    Rn: {
      description: "Radon is a colorless, odorless, heavy radioactive noble gas produced by the natural decay of uranium and thorium in rock strata. It is the leading cause of lung cancer in non-smokers in nature.",
      uses: ["Earthquake prediction research (monitoring radon gas concentrations in groundwater)", "Early radioactive medical implant seeds (mostly phased out)"],
      appearance: "A completely colorless and odorless gas at room temperature; when cooled to solid cryogenic temperatures, it emits an intense yellow to orange-red glow due to its own radiation.",
      lifeRole: "Once radon gas accumulates in confined spaces (such as basements) and is inhaled by humans, the solid particulate matter produced by its decay attaches to lung tissue, continuously bombarding lung cells with alpha rays over long periods.",
      compounds: [
        {
          formula: "RnF₂",
          name: "Radon difluoride",
          description: "A solid synthesized under extreme laboratory conditions, proving that radon is not absolutely inert, though highly unstable due to intense radiation.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Radon gas is the most threatening radioactive gas in nature, and long-term inhalation of low concentrations carries a strong cancer risk; basements and enclosed mines should install proper ventilation or radon detectors.",
        },
      ],
      isotopes: [
        {
          notation: "²²²Rn",
          use: "Environmental radiation monitoring",
          description: "A natural radioactive isotope with a half-life of about 3.8 days, acting as the only nuclide in the uranium-238 decay chain that appears in gaseous form.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Radon's radioactive decay pathways, gas diffusion physics, and carcinogenic risks all possess highly complete environmental science and medical empirical data.",
      },
    },
    Fr: {
      description: "Francium is an extremely unstable and highly radioactive alkali metal, ranking as one of the most reactive yet scarcest elements among all natural elements.",
      uses: ["Fundamental science and atomic structure research", "Laser spectroscopy experiments", "Laser cooling and trapping research"],
      appearance: "Expected to be a silvery-white metal (due to an extremely short half-life and high heat generation, it has never been manufactured into macroscopic blocks).",
      safety: [
        {
          level: "High Risk",
          description: "Francium possesses extreme radioactivity with a very short half-life (at most only 22 minutes), existing exclusively in highly specialized nuclear physics laboratories.",
        },
      ],
      isotopes: [
        {
          notation: "²²³Fr",
          use: "Atomic physics and spectroscopy research",
          description: "The longest-lived isotope of francium, with a half-life of about 22 minutes.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its atomic spectra and half-life already have precise experimental measurement data.",
      },
    },
    Ra: {
      description: "Radium is a highly radioactive alkaline earth metal whose compounds emit a faint blue glow in the dark. It was once widely used in luminous paints, but was banned due to severe radiation hazards.",
      uses: ["Early radioactive medicine and cancer treatment research", "Portable neutron source materials (historical use)", "Scientific research and radiation standard sources"],
      appearance: "A silvery-white metal at room temperature, but rapidly oxidizes and darkens upon exposure to air.",
      safety: [
        {
          level: "High Risk",
          description: "Radium possesses intense radioactivity, and its chemical properties resemble calcium, causing it to accumulate in bones; long-term exposure triggers bone cancer and severe radiation injuries, and it should never be touched.",
        },
      ],
      isotopes: [
        {
          notation: "²²⁶Ra",
          use: "Radiation source and historical medicine",
          description: "The primary isotope of radium, with a half-life of about 1,600 years.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The radioactive decay chain and toxicological history records of radium are complete.",
      },
    },
    Ac: {
      description: "Actinium is a radioactive metal with a silvery-white luster, serving as the namesake for the actinide series. It rapidly reacts with oxygen in the air to form a white oxide layer.",
      uses: ["High-efficiency alpha ray radiation source research", "Targeted cancer radiation therapy (such as Actinium-225)", "Neutron source scientific applications"],
      appearance: "A silvery-white metal at room temperature that emits a faint blue glow in the dark due to intense radiation.",
      safety: [
        {
          level: "High Risk",
          description: "Actinium and its compounds possess intense radioactivity and toxicity, with hazard levels comparable to radium, restricted strictly to specialized radiochemistry laboratories.",
        },
      ],
      isotopes: [
        {
          notation: "²²⁵Ac",
          use: "Targeted cancer therapy",
          description: "A medical isotope emitting alpha particles, actively researched for precision cancer treatment.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "The chemical and radioactive properties of actinium possess detailed empirical data.",
      },
    },
    Th: {
      description: "Thorium is a weakly radioactive, grayish-white metal with an abundance in the Earth's crust far exceeding that of uranium. It is viewed as a potential clean fuel source for future nuclear power generation.",
      uses: ["Manufacturing high-temperature metal crucibles and aircraft engine alloys", "Thorium fuel nuclear power generation research", "Additive for tungsten inert gas (TIG) welding electrodes"],
      appearance: "A grayish-white metal at room temperature that slowly oxidizes to dark gray or black in air.",
      compounds: [
        {
          formula: "ThO₂",
          name: "Thorium dioxide",
          description: "A refractory material with an extremely high melting point, historically used to manufacture gas lantern mantles.",
        },
      ],
      safety: [
        {
          level: "Caution",
          description: "Metallic thorium carries weak radioactivity, and thorium powder is flammable in air; long-term inhalation of thorium dust increases health risks, requiring professional operation in well-ventilated environments.",
        },
      ],
      isotopes: [
        {
          notation: "²³²Th",
          use: "Nuclear energy and geochronology",
          description: "The only natural thorium isotope in nature, with a half-life reaching 14 billion years.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Thorium's physical, chemical, and nuclear fuel characteristics possess abundant empirical data.",
      },
    },
    Pa: {
      description: "Protactinium is a rare and highly radioactive silvery-gray metal belonging to the actinide series. In nature, it is primarily produced in trace amounts through the radioactive decay of uranium ores.",
      uses: ["Fundamental nuclear physics and radiochemistry research", "Geological dating reference", "Scientific exploration purposes"],
      appearance: "A silvery-gray metal at room temperature; slowly oxidizes and loses its luster in air.",
      safety: [
        {
          level: "High Risk",
          description: "Protactinium and its compounds are highly radioactive and chemically toxic, with hazard levels similar to uranium and plutonium. It must be strictly handled in a glovebox.",
        },
      ],
      isotopes: [
        {
          notation: "²³¹Pa",
          use: "Geological dating research",
          description: "The longest-lived isotope of protactinium, with a half-life of about 32,700 years.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Protactinium's crystal structure and decay data have scientific empirical records.",
      },
    },
    U: {
      description: "Uranium is a heavy, silvery-gray radioactive metal, acting as the core raw material for nuclear power generation and nuclear weapons. Natural uranium consists mainly of a mixture of several isotopes.",
      uses: ["Nuclear fuel for nuclear power plants", "Power source for nuclear submarines", "Military armor and armor-piercing ammunition materials (depleted uranium)"],
      appearance: "A silvery-gray metal at room temperature; rapidly covers with a black oxide layer when exposed to air.",
      compounds: [
        {
          formula: "UF₆",
          name: "Uranium hexafluoride",
          description: "Solid at room temperature, easily sublimes when heated; a key gaseous raw material in the uranium isotope enrichment process.",
        },
        {
          formula: "UO₂",
          name: "Uranium dioxide",
          description: "The main chemical component of nuclear fuel pellets.",
        },
      ],
      reactions: [
        {
          equation: "U + O₂ → UO₂",
          description: "Uranium metal burns when heated in air, forming uranium dioxide.",
          conditions: "Heating",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Uranium possesses radioactivity and heavy metal chemical toxicity. Enriched uranium or weapons-grade uranium is strictly controlled internationally and should not be accessed or handled privately.",
        },
      ],
      isotopes: [
        {
          notation: "²³⁵U",
          use: "Nuclear power generation and nuclear weapons",
          description: "The only isotope in natural uranium capable of undergoing thermal neutron fission.",
        },
        {
          notation: "²³⁸U",
          use: "Nuclear fuel raw material and geological dating",
          description: "A highly stable isotope making up over 99% of natural uranium.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Uranium's nuclear fission physical properties and chemical engineering processes possess extremely detailed empirical data.",
      },
    },
    Np: {
      description: "Neptunium is the first artificially synthesized transuranium element discovered, a highly radioactive silvery-gray metal.",
      uses: ["Nuclear physics research and neutron detectors", "Raw material for synthesizing Plutonium-238 (used in space probe radioisotope thermoelectric generators)", "Scientific research purposes"],
      appearance: "A silvery-gray metal at room temperature, possessing multiple crystal structures.",
      safety: [
        {
          level: "High Risk",
          description: "Neptunium and its compounds possess high radioactivity and heavy metal toxicity, restricted strictly to highly regulated national laboratories.",
        },
      ],
      isotopes: [
        {
          notation: "²³⁷Np",
          use: "Space power sources and neutron detection",
          description: "The most stable and longest-lived isotope of neptunium (half-life of about 2.14 million years).",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Neptunium's chemical properties and nuclear reaction data possess complete experimental measurement data.",
      },
    },
    Pu: {
      description: "Plutonium is a highly radioactive and intensely toxic silvery-gray artificial transuranium metal. It occupies an extremely critical position in the nuclear power industry and nuclear weapons development.",
      uses: ["Core charge for nuclear weapons", "Fuel for Radioisotope Thermoelectric Generators (RTGs) in space probes", "Fast neutron breeder reactor fuel"],
      appearance: "A silvery-gray metal at room temperature; rapidly turns dark yellow or olive green due to oxidation after contact with air.",
      compounds: [
        {
          formula: "PuO₂",
          name: "Plutonium dioxide",
          description: "A stable, ceramic-like powder extremely insoluble in water, widely used as a heat source in space batteries.",
        },
      ],
      safety: [
        {
          level: "High Risk",
          description: "Plutonium is one of the most toxic and highly radioactive elements known; inhaling trace amounts of dust can cause cancer. It is strictly controlled by the International Atomic Energy Agency, and private contact is absolutely prohibited.",
        },
      ],
      isotopes: [
        {
          notation: "²³⁹Pu",
          use: "Nuclear weapons and nuclear energy",
          description: "An isotope capable of highly efficient nuclear fission, serving as the primary material for nuclear weapons.",
        },
        {
          notation: "²³⁸Pu",
          use: "Space probe power supply",
          description: "An isotope releasing a massive amount of decay heat, used in RTG power sources for spacecraft like Cassini and Curiosity.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Plutonium's metallurgy, nuclear fission properties, and biological toxicology all possess vast amounts of military and scientific empirical data.",
      },
    },
    Am: {
      description: "Americium is an artificially synthesized radioactive metal belonging to the actinide series. It is one of the few radioactive elements whose civilian application nuclides can be encountered in daily life.",
      uses: ["Household fire smoke detectors (ionization smoke detectors)", "Industrial thickness and density gauges", "Calibration sources for gamma-ray and alpha-ray spectrometers"],
      appearance: "A silvery-white metal at room temperature; slowly loses its luster when exposed to air.",
      safety: [
        {
          level: "High Risk",
          description: "Americium possesses intense radioactivity (especially alpha radiation). Although the dose in commercial smoke detectors is extremely low and safe, bare americium sources pose a high health hazard and should not be dismantled.",
        },
      ],
      isotopes: [
        {
          notation: "²⁴¹Am",
          use: "Smoke detectors and industrial instruments",
          description: "The primary isotope of americium, with a half-life of about 432.2 years.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Americium's radioactive decay and civilian ionization properties have decades of empirical verification.",
      },
    },
    Cm: {
      description: "Curium is a hard, highly radioactive artificial transuranium metal, named after scientists Marie and Pierre Curie. It emits a faint blue glow under its intense radiation.",
      uses: ["Radiation source for Alpha Particle X-ray Spectrometers (APXS) on space probes", "Target material for synthesizing heavier superheavy elements", "Radioisotope thermoelectric generator heat source research"],
      appearance: "A silvery-white metal at room temperature; glows in the dark due to excitation from its own intense radioactivity.",
      safety: [
        {
          level: "High Risk",
          description: "Curium emits high-energy alpha particles and possesses extreme radiotoxicity. If it enters the body, it accumulates in the bones, destroying hematopoietic tissue. Restricted strictly to professional laboratories.",
        },
      ],
      isotopes: [
        {
          notation: "²⁴⁴Cm",
          use: "Space instruments and heat sources",
          description: "A more easily mass-produced isotope of curium, often used as a radiation source in scientific instruments for Mars rovers.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Curium's crystallography and radiochemistry data are all laboratory empirical data.",
      },
    },
    Bk: {
      description: "Berkelium is an artificially synthesized radioactive metal belonging to the actinide series, named after the University of California, Berkeley.",
      uses: ["Target material for synthesizing newer, heavier superheavy elements (like Tennessine)", "Fundamental nuclear physics and chemical electronic structure research", "Scientific research purposes"],
      appearance: "Expected to be a silvery-white metal, but its intense radioactivity destroys its own crystal lattice structure.",
      safety: [
        {
          level: "High Risk",
          description: "Berkelium possesses intense radioactivity and biological toxicity. Because its production is extremely scarce and its half-life is short, it can only be handled in top-tier national laboratories.",
        },
      ],
      isotopes: [
        {
          notation: "²⁴⁹Bk",
          use: "Target material for synthesizing superheavy elements",
          description: "A relatively more stable isotope of berkelium, with a half-life of about 330 days.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Berkelium's chemical separation and synthesis data possess laboratory empirical records.",
      },
    },
    Cf: {
      description: "Californium is an intensely radioactive artificial transuranium metal. It can release massive amounts of neutrons, making it one of the most powerful portable neutron sources in the world.",
      uses: ["Potent neutron source for starting nuclear reactors", "Cancer radiotherapy (neutron brachytherapy)", "Non-destructive testing of industrial materials and gold/hydrological exploration"],
      appearance: "A silvery-white metal at room temperature; slowly oxidizes in air.",
      safety: [
        {
          level: "High Risk",
          description: "Californium-252 releases massive amounts of highly penetrating neutrons and alpha rays, posing an extremely high lethal radiation hazard. It must be handled in thick lead and water shielding containers.",
        },
      ],
      isotopes: [
        {
          notation: "²⁵²Cf",
          use: "Industrial neutron sources and cancer therapy",
          description: "An isotope that undergoes intense spontaneous fission and releases massive amounts of neutrons, emitting millions of neutrons per microgram per second.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Californium's neutron emission rates and industrial applications possess detailed empirical data.",
      },
    },
    Es: {
      description: "Einsteinium is an artificial transuranium element first discovered in the radioactive fallout from the explosion of the first hydrogen bomb in 1952.",
      uses: ["Research on synthesizing heavier superheavy elements (like Mendelevium, Nobelium)", "Fundamental nuclear physics and quantum chemistry experiments", "Scientific research purposes"],
      appearance: "Expected to be a silvery-white metal, but the heat generated by its intense radioactivity causes it to rapidly vaporize or glow.",
      safety: [
        {
          level: "High Risk",
          description: "Einsteinium possesses extremely high radiotoxicity and intense heat generation; it can only be handled in hot cell laboratories equipped with complete remote control equipment.",
        },
      ],
      isotopes: [
        {
          notation: "²⁵²Es",
          use: "Scientific research",
          description: "One of the main isotopes used for studying einsteinium.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Einsteinium's trace chemical properties have preliminary experimental measurements.",
      },
    },
    Fm: {
      description: "Fermium is an artificial radioactive transuranium metal named in honor of Enrico Fermi, the father of modern physics. It can only be synthesized in trace amounts in nuclear reactors or particle accelerators.",
      uses: ["Fundamental nuclear physics and superheavy element property research", "Scientific exploration purposes"],
      appearance: "Expected to be in a metallic state, but because its production is only a few atoms, it cannot be formed into a macroscopic entity.",
      safety: [
        {
          level: "High Risk",
          description: "Fermium is highly radioactive, but due to its extremely short half-life and minuscule production, there is no actual contact risk to the public; it is strictly regulated only within nuclear laboratories.",
        },
      ],
      isotopes: [
        {
          notation: "²⁵⁷Fm",
          use: "Nuclear physics experiments",
          description: "One of the longer-lived isotopes of fermium, with a half-life of about 100.5 days.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Fermium's fundamental chemical ion behavior has experimental measurement records.",
      },
    },
    Md: {
      description: "Mendelevium is an artificial radioactive metal named in honor of Dmitri Mendeleev, the inventor of the periodic table of chemical elements.",
      uses: ["Fundamental scientific research on the chemical properties of superheavy elements", "Scientific research purposes"],
      appearance: "Expected to be in a metallic state, but its extreme rarity prevents actual observation of its appearance.",
      safety: [
        {
          level: "High Risk",
          description: "Mendelevium is highly radioactive and exists only in specialized particle physics laboratories.",
        },
      ],
      isotopes: [
        {
          notation: "²⁵⁸Md",
          use: "Scientific research",
          description: "An isotope with a half-life of about 51.5 days.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Mendelevium's ion exchange chromatography analysis already has experimental data.",
      },
    },
    No: {
      description: "Nobelium is an artificial radioactive transuranium element named in honor of Alfred Nobel, the founder of the Nobel Prize.",
      uses: ["Nuclear physics and superheavy element electronic structure research", "Scientific research purposes"],
      appearance: "Theoretically in a metallic state, but due to its extremely short half-life, it cannot be formed into a bulk mass.",
      safety: [
        {
          level: "High Risk",
          description: "Nobelium is highly radioactive and can only exist under monitoring in the laboratory environments where it is produced.",
        },
      ],
      isotopes: [
        {
          notation: "²⁵⁹No",
          use: "Nuclear physics research",
          description: "A relatively stable isotope of nobelium, with a half-life of about 58 minutes.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Nobelium's decay modes and oxidation state experiments have been recorded.",
      },
    },
    Lr: {
      description: "Lawrencium is the final member of the actinide series (element 103), an artificial radioactive metal named after Ernest Lawrence.",
      uses: ["Fundamental physics research exploring transactinide elements and the boundaries of the periodic table", "Scientific research purposes"],
      appearance: "Theoretically a silvery-white metallic solid.",
      safety: [
        {
          level: "High Risk",
          description: "Lawrencium is highly radioactive with a very short half-life, restricted to extremely trace observations in top-tier particle accelerator laboratories.",
        },
      ],
      isotopes: [
        {
          notation: "²⁶²Lr",
          use: "Superheavy element research",
          description: "One of the longer-lived isotopes of lawrencium, with a half-life of about 3.6 hours.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Fundamental physical properties like lawrencium's first ionization energy have experimental measurement records.",
      },
    },
    Rf: {
      description: "Rutherfordium is an artificially synthesized radioactive transition metal belonging to Group 4. Due to its extremely short half-life and minuscule production, it is currently restricted to particle physics and superheavy element chemistry research.",
      uses: ["Superheavy element nuclear physics research", "Relativistic quantum chemistry experiments", "Exploring the boundaries of the periodic table and electron configuration"],
      appearance: "Theoretically a metallic solid, but its extremely short half-life and minuscule quantities make macroscopic observation impossible.",
      safety: [
        {
          level: "High Risk",
          description: "Possesses intense radioactivity; it can only be operated under strict protection in top-tier national accelerator laboratories.",
        },
      ],
      isotopes: [
        {
          notation: "²⁶⁷Rf",
          use: "Academic research",
          description: "One of the longer-lived isotopes, with a half-life of about a few hours.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its synthesis and fundamental nuclear physics properties have experimental measurement records.",
      },
    },
    Db: {
      description: "Dubnium is an artificially synthesized radioactive transition metal belonging to Group 5. It can only be produced in trace amounts through nuclear reactions in particle accelerators.",
      uses: ["Research on the chemical properties of superheavy elements", "Exploration of nuclear physics reaction mechanisms", "Scientific research purposes"],
      appearance: "Theoretically a metallic solid, but cannot be formed into a macroscopic entity.",
      safety: [
        {
          level: "High Risk",
          description: "Highly radioactive, restricted strictly to professional nuclear laboratory operations.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its synthesis and decay data have experimental measurement records.",
      },
    },
    Sg: {
      description: "Seaborgium is an artificially synthesized radioactive transition metal, named after Glenn Seaborg, a pioneer of modern chemistry. It is the heaviest member of Group 6.",
      uses: ["Superheavy element chemistry and gas chromatography research", "Exploring the chemical homology of Group 6 elements", "Fundamental nuclear physics research"],
      appearance: "Theoretically a metallic solid.",
      safety: [
        {
          level: "High Risk",
          description: "Highly radioactive, restricted strictly to particle physics laboratory operations.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its synthesis and preliminary gas-phase chemical properties have experimental measurement records.",
      },
    },
    Bh: {
      description: "Bohrium is an artificially synthesized radioactive transition metal belonging to Group 7. Its chemical properties are expected to be similar to manganese and rhenium.",
      uses: ["Research on the positioning of superheavy elements in the periodic table", "Nuclear physics and decay chain analysis", "Scientific research purposes"],
      appearance: "Theoretically a metallic solid.",
      safety: [
        {
          level: "High Risk",
          description: "Highly radioactive, restricted strictly to professional nuclear laboratory operations.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its synthesis and alpha decay data have experimental measurement records.",
      },
    },
    Hs: {
      description: "Hassium is an artificially synthesized radioactive transition metal belonging to Group 8. It can form a volatile tetroxide, similar to osmium.",
      uses: ["Chemical research on volatile compounds of superheavy elements", "Verification of nuclear structure and the island of stability theory for superheavy nuclei", "Scientific research purposes"],
      appearance: "Theoretically a metallic solid.",
      safety: [
        {
          level: "High Risk",
          description: "Highly radioactive, restricted strictly to highly protected physics laboratory operations.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its synthesis and volatile oxide experiments have empirical records.",
      },
    },
    Mt: {
      description: "Meitnerium is an artificially synthesized radioactive transition metal belonging to Group 9, named after the renowned physicist Lise Meitner.",
      uses: ["Superheavy nuclear physics research", "Exploring the metallic bonding and relativistic effects of Group 9 elements", "Scientific research purposes"],
      appearance: "Theoretically a metallic solid.",
      safety: [
        {
          level: "High Risk",
          description: "Highly radioactive, restricted strictly to professional accelerator laboratory operations.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its synthesis and decay chain data have experimental measurement records.",
      },
    },
    Ds: {
      description: "Darmstadtium is an artificially synthesized radioactive transition metal belonging to Group 10, named after Darmstadt, Germany, the city of its discovery.",
      uses: ["Superheavy element synthesis and nuclear physics research", "Exploring the chemical properties of platinum-like elements", "Scientific research purposes"],
      appearance: "Theoretically a metallic solid.",
      safety: [
        {
          level: "High Risk",
          description: "Highly radioactive, restricted strictly to professional physics laboratory operations.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its synthesis and fundamental decay data have experimental measurement records.",
      },
    },
    Rg: {
      description: "Roentgenium is an artificially synthesized radioactive transition metal belonging to Group 11, named after Wilhelm Röntgen, the discoverer of X-rays.",
      uses: ["Electronic structure research of superheavy elements", "Exploring the relativistic contraction effects of gold-like elements", "Scientific research purposes"],
      appearance: "Theoretically a metallic solid.",
      safety: [
        {
          level: "High Risk",
          description: "Highly radioactive, restricted strictly to top-tier nuclear physics laboratory operations.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its synthesis and fundamental decay data have experimental measurement records.",
      },
    },
    Cn: {
      description: "Copernicium is an artificially synthesized radioactive transition metal belonging to Group 12. Experiments suggest it might exhibit high volatility at room temperature, potentially displaying some physical properties similar to noble gases.",
      uses: ["Gas-phase adsorption and volatility research of superheavy elements", "Relativistic quantum chemistry experiments", "Fundamental nuclear physics research"],
      appearance: "Theoretically, it could be a volatile liquid or gaseous metal at room temperature.",
      safety: [
        {
          level: "High Risk",
          description: "Highly radioactive, restricted strictly to professional nuclear laboratory operations.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its volatility and adsorption properties possess breakthrough experimental measurement records.",
      },
    },
    Nh: {
      description: "Nihonium is an artificially synthesized radioactive element belonging to Group 13, first named and discovered by a team at the RIKEN institute in Japan.",
      uses: ["Research on the positioning of superheavy elements in the periodic table", "Exploring the relativistic effects of heavy Group 13 elements", "Scientific research purposes"],
      appearance: "Theoretically a metallic solid.",
      safety: [
        {
          level: "High Risk",
          description: "Highly radioactive, restricted strictly to professional accelerator laboratory operations.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its synthesis and decay chain data have experimental measurement records.",
      },
    },
    Fl: {
      description: "Flerovium is an artificially synthesized radioactive element belonging to Group 14. Theoretical predictions suggest its chemical properties might be strongly influenced by relativistic effects, exhibiting noble gas-like inertness.",
      uses: ["Gas-phase chemistry and inert behavior research of superheavy elements", "Exploring the 'island of stability' theory", "Scientific research purposes"],
      appearance: "Theoretically a metallic solid or a volatile substance.",
      safety: [
        {
          level: "High Risk",
          description: "Highly radioactive, restricted strictly to professional nuclear laboratory operations.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its preliminary volatility and synthesis data have experimental measurement records.",
      },
    },
    Mc: {
      description: "Moscovium is an artificially synthesized radioactive element belonging to Group 15. It can only be synthesized in trace amounts through ion bombardment of target materials.",
      uses: ["Superheavy element nuclear physics research", "Exploring the chemical properties of heavy pnictogens", "Scientific research purposes"],
      appearance: "Theoretically a metallic solid.",
      safety: [
        {
          level: "High Risk",
          description: "Highly radioactive, restricted strictly to top-tier particle physics laboratory operations.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its synthesis and alpha decay data have experimental measurement records.",
      },
    },
    Lv: {
      description: "Livermorium is an artificially synthesized radioactive element belonging to Group 16.",
      uses: ["Superheavy element nuclear structure research", "Exploring the chemical properties of heavy chalcogens", "Scientific research purposes"],
      appearance: "Theoretically a solid element.",
      safety: [
        {
          level: "High Risk",
          description: "Highly radioactive, restricted strictly to professional laboratory operations.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its synthesis and decay chain data have experimental measurement records.",
      },
    },
    Ts: {
      description: "Tennessine is an artificially synthesized radioactive halogen element. Due to its extremely high atomic number, it is expected to be significantly influenced by relativistic effects.",
      uses: ["Superheavy halogen chemical and physical property research", "Exploring the characteristics at the end of the 7th period of the periodic table", "Scientific research purposes"],
      appearance: "Theoretically expected to be a solid halogen.",
      safety: [
        {
          level: "High Risk",
          description: "Possesses intense radioactivity and high-energy decay, restricted strictly to top-tier national laboratory operations.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its synthesis and fundamental nuclear physics properties have experimental measurement records.",
      },
    },
    Og: {
      description: "Oganesson is currently the element with the highest known atomic number (118), belonging to Group 18. Although classified as a noble gas, intense relativistic effects mean it might not be a gas at room temperature, but rather a solid with unique semiconductor properties.",
      uses: ["Physical research exploring the limits of the periodic table and relativistic effects", "Verification of the island of stability theory for superheavy nuclei", "Scientific research purposes"],
      appearance: "Theoretically predicted to possibly be a solid state with unique semiconductor properties at room temperature.",
      safety: [
        {
          level: "High Risk",
          description: "Possesses extreme radioactivity and an extremely short half-life, restricted to protected operations in top-tier national accelerator laboratories.",
        },
      ],
      reliability: {
        level: "Empirical Data",
        description: "Its synthesis and fundamental alpha decay data have experimental measurement records.",
      },
    }
  },
  "zh-Hans": {
    H: {
      description: "氢是最轻且宇宙中含量最丰富的元素，常温下为双原子气体。它是许多重要化合物的核心组成部分。",
      uses: ["制造氨", "燃料电池", "火箭燃料"],
      appearance: "常温下为无色、无味的气体。",
      lifeRole: "氢是水与多数有机化合物的核心组成元素，在生命系统的结构与能量代谢中不可或缺。",
      compounds: [
        {
          formula: "H₂O",
          name: "水",
          description: "由氢与氧组成，是生命与许多化学反应的重要介质。",
        },
        {
          formula: "NH₃",
          name: "氨",
          description: "常用于制造肥料，也是重要的工业化学原料。",
        },
      ],
      reactions: [
        {
          equation: "2H₂ + O₂ → 2H₂O",
          description: "氢气与氧气反应可生成水，并释放出大量能量。",
          conditions: "点燃",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "氢气极易燃，与空气混合时可能形成危险的爆炸性混合物；不应在非专业环境自行制备或燃烧。",
        },
      ],
      isotopes: [
        {
          notation: "氘（²H／D）",
          use: "核反应研究与同位素示踪",
          description: "氢的稳定同位素，常以重水形式应用于科学研究。",
        },
        {
          notation: "氚（³H／T）",
          use: "示踪与核融合研究",
          description: "具放射性的同位素，相关用途只适合受规范的专业环境。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "氢的基础性质、常见化合物与同位素资料皆为经过广泛科学验证的已实测资料。",
      },
    },
    He: {
      description: "氦是宇宙中含量第二丰富的元素，属于惰性气体。其化学性质极不活泼，在极低温下具有特殊的超流体现象。",
      uses: ["磁振造影（MRI）超导磁铁冷却", "气球与飞船的浮升气体", "深海潜水混合气体"],
      appearance: "常温下为无色、无味的气体。",
      safety: [
        {
          level: "警告",
          description: "氦气本身无毒，但在密闭空间大量泄漏可能排挤氧气，导致缺氧与窒息风险。",
        },
      ],
      isotopes: [
        {
          notation: "³He",
          use: "极低温物理研究",
          description: "稀有的稳定同位素，广泛应用于低温冷却与中子侦测器。",
        },
        {
          notation: "⁴He",
          use: "常见浮升与冷却用途",
          description: "自然界中最丰富的氦同位素，主要来自地底放射性衰变。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "氦的物理性质与惰性特征皆为广泛应用的已实测资料。",
      },
    },
    Li: {
      description: "锂是最轻的金属元素，属于碱金属，质地柔软且极易氧化。它在现代电池技术与合金材料中扮演关键角色。",
      uses: ["锂离子电池", "航太高强度铝合金", "精神科药物（以锂盐形式）"],
      appearance: "常温下为银白色金属，切开后迅速与空气反应变暗。",
      lifeRole: "锂金属单质对人体有毒且不存在于体内；医学上使用的是微量锂离子（Li⁺），可帮助稳定神经递质与情绪。",
      compounds: [
        {
          formula: "Li₂CO₃",
          name: "碳酸锂",
          description: "常作为精神科治疗用药，也可用于陶瓷与玻璃工业。",
        },
        {
          formula: "LiCoO₂",
          name: "钴酸锂",
          description: "常见的锂离子电池正极材料。",
        },
      ],
      reactions: [
        {
          equation: "2Li + 2H₂O → 2LiOH + H₂",
          description: "锂金属遇水会发生剧烈反应，生成碱性的氢氧化锂与氢气。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "锂金属遇水或空气中水分会剧烈反应并产生易燃的氢气；不应自行操作。",
        },
      ],
      isotopes: [
        {
          notation: "⁶Li",
          use: "核工业材料",
          description: "可用于吸收中子或作为热核融合的原料。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锂的化学反应性与化合物性质皆有大量已实测资料支持。",
      },
    },
    Be: {
      description: "铍是一种灰白色的碱土金属，质轻、高强度且具备高熔点。由于其粉尘具有剧毒性，应用范围多受限于专业工业与国防。",
      uses: ["X射线管的穿透窗口", "航太与国防高刚性合金", "核子反应炉的中子反射体"],
      appearance: "常温下为坚硬的灰白色金属。",
      compounds: [
        {
          formula: "BeO",
          name: "氧化铍",
          description: "具有极佳导热性与优异电绝缘性的高温陶瓷材料。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "铍粉尘或烟雾吸入会引起严重的慢性铍肺病（Berylliosis）；应仅在严格工安规范下处理。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铍的物理性质与毒性作用皆具备权威机构的已实测资料。",
      },
    },
    B: {
      description: "硼是一种硬度极高的类金属元素，在自然界中常以硼酸盐形式存在。它在材料科学与半导体领域具有独特价值。",
      uses: ["制造硼硅酸盐耐热玻璃", "半导体P型掺杂物", "核子反应炉控制棒"],
      appearance: "结晶态为黑色或银灰色坚硬固体，无定形态为棕色粉末。",
      lifeRole: "硼单质在人体内无已知功能；但在植物生长中，硼酸盐是细胞壁发育所必需的微量营养素。",
      compounds: [
        {
          formula: "H₃BO₃",
          name: "硼酸",
          description: "常见的温和消毒剂，也用于控制蟑螂等虫害。",
        },
        {
          formula: "B₂O₃",
          name: "氧化硼",
          description: "制造高强度玻璃与特殊陶瓷的重要原料。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁰B",
          use: "中子吸收剂",
          description: "具有极高的热中子吸收截面，广泛应用于核反应炉控制。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "硼的各项物理与化学数据均为广泛验证的已实测资料。",
      },
    },
    C: {
      description: "碳是地球上所有已知生命体的基础元素，能够形成数量庞大且结构复杂的有机化合物。它在自然界拥有石墨与钻石等物理性质迥异的同素异形体。",
      uses: ["钢铁与合金冶炼", "聚合物与塑料工业", "碳-14放射性同位素定年法"],
      appearance: "常温下为固态，常见形式为黑色的石墨粉末或无色透明的钻石结晶。",
      lifeRole: "碳是生命体中蛋白质、脂质、糖类与核酸的骨架核心元素。",
      compounds: [
        {
          formula: "CO₂",
          name: "二氧化碳",
          description: "动植物呼吸作用的产物，也是植物进行光合作用的碳源。",
        },
        {
          formula: "CH₄",
          name: "甲烷",
          description: "天然气的主要成分，也是一种强效的温室气体。",
        },
      ],
      reactions: [
        {
          equation: "C + O₂ → CO₂",
          description: "碳在氧气中完全燃烧会生成二氧化碳，并释出热能。",
          conditions: "点燃",
        },
      ],
      isotopes: [
        {
          notation: "¹²C",
          use: "质谱与原子量标准",
          description: "最丰富的稳定同位素，被作为原子量定义的基准。",
        },
        {
          notation: "¹⁴C",
          use: "放射性定年",
          description: "微量存在于自然界的放射性同位素，用于测定考古遗物的年代。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "碳的性质与其同素异形体结构均为科学界深入研究的已实测资料。",
      },
    },
    N: {
      description: "氮是地球大气中含量最多的元素，常温下以极为稳定的双原子气体分子存在。它是许多工业化学品与生命分子的重要组成。",
      uses: ["哈伯法合成氨", "食品包装与工业惰性环境", "液态氮低温冷冻技术"],
      appearance: "常温下为无色、无味的气体。",
      lifeRole: "人体无法直接吸收空气中的氮气单质；必须透过饮食摄取蛋白质与氨基酸，以取得构成DNA与蛋白质的关键氮元素。",
      compounds: [
        {
          formula: "NH₃",
          name: "氨",
          description: "重要的人造化学品，主要用于制造氮肥与硝酸。",
        },
        {
          formula: "HNO₃",
          name: "硝酸",
          description: "具强氧化性的强酸，用于制造炸药、肥料与化学合成。",
        },
      ],
      reactions: [
        {
          equation: "N₂ + 3H₂ ⇌ 2NH₃",
          description: "氮气与氢气在极端条件下可合成氨，是现代农业肥料的基础（哈伯法）。",
          conditions: "高温高压与催化剂",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "氮气本身无毒，但在密闭空间积累会造成缺氧窒息；液态氮极低温，接触可能造成严重冻伤。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁵N",
          use: "农业与生物学示踪剂",
          description: "稳定的重同位素，常用于追踪氮在生态系统与人体代谢中的途径。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "氮气的物理化学性质及反应途径皆为有百年验证的已实测资料。",
      },
    },
    O: {
      description: "氧是地壳中含量最丰富的元素，也是化学性质极为活泼的非金属。它对于绝大多数地球生物的细胞呼吸至关重要。",
      uses: ["医疗与高空供氧", "钢铁冶炼", "火箭推进剂的氧化剂"],
      appearance: "常温下为无色、无味的气体；液态氧则呈淡蓝色。",
      lifeRole: "氧气（O₂）被吸入肺部后与血红蛋白结合，参与细胞有氧呼吸产生能量；氧也是水分子（H₂O）的组成，占人体重量的大半。",
      compounds: [
        {
          formula: "H₂O",
          name: "水",
          description: "地球表面最常见的化合物，支持所有已知生命系统的运作。",
        },
        {
          formula: "O₃",
          name: "臭氧",
          description: "氧的同素异形体，在平流层可吸收紫外线，在地面则是空气污染物。",
        },
      ],
      reactions: [
        {
          equation: "2Mg + O₂ → 2MgO",
          description: "活泼金属如镁在氧气中燃烧，会发出强烈白光并生成固态氧化物。",
          conditions: "点燃",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "氧气本身不燃烧，但高浓度氧气会强烈助燃，接触油脂或火源极易引发猛烈火灾。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁸O",
          use: "古气候与水文研究",
          description: "稳定的重同位素，常透过冰芯与海洋沉积物比例来推算古代气温。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "氧的助燃性、生物学功能及物理常数皆具备确凿的已实测资料。",
      },
    },
    F: {
      description: "氟是电负性最高、化学反应性最强的卤素元素。在自然界中几乎不以单质存在，多以氟化物矿物形式出现。",
      uses: ["制造特氟龙（聚四氟乙烯）", "核工业提炼与浓缩铀", "牙膏防蛀（以氟化物形式）"],
      appearance: "常温下为淡黄色、具强烈刺鼻臭味的气体。",
      lifeRole: "氟气单质具有剧毒；微量的氟离子（F⁻）能与牙齿珐琅质结合形成氟磷灰石，帮助抵抗蛀牙，骨骼中亦含有微量氟化物。",
      compounds: [
        {
          formula: "HF",
          name: "氢氟酸",
          description: "弱酸但具强烈腐蚀性与透皮毒性，常应用于玻璃蚀刻与半导体制程。",
        },
        {
          formula: "NaF",
          name: "氟化钠",
          description: "常见的自来水加氟与牙膏防蛀添加物。",
        },
      ],
      reactions: [
        {
          equation: "H₂ + F₂ → 2HF",
          description: "氟气极其活泼，即使在极低温与暗处，也能与氢气发生爆炸性反应生成氟化氢。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "氟气与氢氟酸具剧毒且腐蚀性极强，与多数物质接触均会发生剧烈反应；绝对不应自行操作。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁹F",
          use: "核磁共振（NMR）光谱学",
          description: "唯一的天然稳定同位素，因核自旋特性被广泛用于结构化学分析。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "氟的极高反应性与化合物毒性皆有完备的工安与实测资料。",
      },
    },
    Ne: {
      description: "氖是一种极为惰性的单原子气体元素。它在宇宙中相对丰富，但在地球大气中含量稀少，在真空管中通电会发出特有的红橙色光辉。",
      uses: ["霓虹灯与广告招牌", "氦氖激光技术", "极低温冷冻冷却剂"],
      appearance: "常温下为无色、无味的气体；通电激发时发出明亮的红橙色光。",
      safety: [
        {
          level: "注意",
          description: "氖气为无毒的惰性气体，但在密闭环境中高浓度释放，可能会排挤氧气而引发缺氧窒息。",
        },
      ],
      isotopes: [
        {
          notation: "²⁰Ne",
          use: "基础物理研究",
          description: "自然界中最丰富的氖同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "氖的物理、热力学与光学特性皆为物理学界广泛应用的已实测资料。",
      },
    },
    Na: {
      description: "钠是一种柔软的银白色碱金属，化学性质极为活泼。在自然界中从不以单质存在，而是以化合物形式广泛分布。",
      uses: ["核子反应炉的液态金属冷却剂", "制造路灯的高压钠气灯", "化学合成与冶金工业的还原剂"],
      appearance: "常温下为质软的银白色金属，切开后接触空气会迅速氧化失去光泽。",
      lifeRole: "钠金属单质遇水会发生爆炸；人体与生物界依赖的是钠离子（Na⁺），它负责调节细胞内外水分平衡及神经脉冲的传导。",
      compounds: [
        {
          formula: "NaCl",
          name: "氯化钠",
          description: "俗称食盐，是人类饮食必需品与最重要的化学工业原料之一。",
        },
        {
          formula: "NaOH",
          name: "氢氧化钠",
          description: "强碱性物质，俗称苛性钠，广泛用于制造肥皂、纸张与清洁剂。",
        },
      ],
      reactions: [
        {
          equation: "2Na + 2H₂O → 2NaOH + H₂",
          description: "钠金属遇水会剧烈反应生成氢气与氢氧化钠，并放出大量热能，常导致生成的氢气燃烧甚至爆炸。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "钠金属单质接触水汽或空气会剧烈反应并起火；必须保存在矿物油或惰性气体中，绝不应自行操作。",
        },
      ],
      isotopes: [
        {
          notation: "²³Na",
          use: "核磁共振研究与日常稳定元素",
          description: "自然界中唯一存在的稳定同位素，构成了所有天然钠化合物。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钠的各项热力学数据、化学性质与生理功能皆具备完备的科学实测资料。",
      },
    },
    Mg: {
      description: "镁是一种轻质的银白色碱土金属。它具有优异的强度重量比，不仅是重要的工程材料，也是地球生命系统不可或缺的元素。",
      uses: ["航太与汽车工业的轻量合金", "烟火与照明弹的发光剂", "制造耐火材料"],
      appearance: "常温下为坚固的银白色金属。",
      lifeRole: "镁是叶绿素分子的核心元素，使植物能进行光合作用；在人体中，镁离子（Mg²⁺）参与超过数百种酶促反应与能量代谢。",
      compounds: [
        {
          formula: "MgO",
          name: "氧化镁",
          description: "极耐高温的固体，常作为高炉与熔炉的内衬材料。",
        },
        {
          formula: "MgSO₄",
          name: "硫酸镁",
          description: "俗称泻盐，广泛用于农业肥料与医疗用途。",
        },
      ],
      reactions: [
        {
          equation: "2Mg + O₂ → 2MgO",
          description: "镁在高温下与氧气反应，燃烧并发出耀眼的强烈白光。",
          conditions: "点燃",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "粉末状或带状的镁金属极易点燃，燃烧时温度极高且发出强光；不能使用水或二氧化碳灭火器扑灭镁火灾。",
        },
      ],
      isotopes: [
        {
          notation: "²⁴Mg",
          use: "生化研究基准",
          description: "镁最丰富的稳定同位素，占自然界镁的七成以上。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "镁的物理特性、燃烧现象及生物代谢机制均有详细且权威的实测资料。",
      },
    },
    Al: {
      description: "铝是地壳中含量最丰富的金属元素。由于其低密度且表面易生成致密氧化膜而抗腐蚀，它是现代工业最重要的金属之一。",
      uses: ["飞机与运输工具结构", "饮料罐与食品包装箔", "高压输电线路"],
      appearance: "常温下为柔软、具有光泽的银白色金属。",
      lifeRole: "铝单质与离子在人体及生物系统中无已知的生理功能；过量的铝离子（Al³⁺）甚至可能对植物及神经系统产生毒性。",
      compounds: [
        {
          formula: "Al₂O₃",
          name: "氧化铝",
          description: "硬度极高的化合物，是蓝宝石与红宝石的主要成分，也是磨料与耐火材料的原料。",
        },
        {
          formula: "KAl(SO₄)₂·12H₂O",
          name: "明矾",
          description: "传统用于净水处理、皮革鞣制及食品工业。",
        },
      ],
      reactions: [
        {
          equation: "4Al + 3O₂ → 2Al₂O₃",
          description: "铝在空气中极易与氧气结合，表面生成致密的氧化铝薄膜，从而阻挡进一步氧化。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "大块铝金属极为安全，但极细微的铝粉末悬浮于空气中可能引发粉尘爆炸。",
        },
      ],
      isotopes: [
        {
          notation: "²⁷Al",
          use: "核磁共振研究与工业应用",
          description: "自然界唯一存在的稳定同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铝的工程数据、化学性质与环境影响皆具备长期、大量的实测资料。",
      },
    },
    Si: {
      description: "硅是一种具有半导体特性的类金属，是地壳中含量第二丰富的元素。它是现代电子工业与计算机科技的基石。",
      uses: ["半导体芯片与微电子元件", "太阳能电池", "制造玻璃、水泥与陶瓷"],
      appearance: "常温下纯硅呈现带有金属光泽的暗灰色或蓝灰色结晶固体。",
      lifeRole: "人体对硅的需求极微；但部分植物与海绵、硅藻等生物会大量利用二氧化硅（SiO₂）来建构坚硬的结构与外壳。",
      compounds: [
        {
          formula: "SiO₂",
          name: "二氧化硅",
          description: "自然界常见为石英与沙子，是制造玻璃的主要原料，也是地壳的主要成分。",
        },
        {
          formula: "SiC",
          name: "碳化硅",
          description: "硬度极高的人造材料，用于磨料与高功率半导体元件。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "固态硅本身无毒，但在采矿、切割或加工过程中产生的结晶游离二氧化硅粉尘，长期吸入可能导致矽肺病（一种严重的肺部疾病）。",
        },
      ],
      isotopes: [
        {
          notation: "²⁸Si",
          use: "精密测量与半导体研究",
          description: "硅最常见的稳定同位素，曾被用于制作定义千克的完美硅晶球。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "硅的晶体结构、电学特性及二氧化硅毒理学均有极为丰富的实测资料。",
      },
    },
    P: {
      description: "磷是一种高反应性的非金属元素，在自然界中从不以单质存在。它具有多种同素异形体，最常见的为白磷与红磷。",
      uses: ["制造农业用磷肥", "火柴盒侧面的摩擦面（红磷）", "半导体N型掺杂物"],
      appearance: "白磷为具有蒜味的蜡状白色或微黄色半透明固体；红磷为暗红色粉末。",
      lifeRole: "磷是细胞中DNA与RNA骨架的核心元素，并以ATP（三磷酸腺苷）的形式主导生物体内的能量传递，同时也是骨骼磷酸钙的重要成分。",
      compounds: [
        {
          formula: "H₃PO₄",
          name: "磷酸",
          description: "重要的化学原料，广泛用于制造肥料、食品添加剂及除锈剂。",
        },
        {
          formula: "Ca₃(PO₄)₂",
          name: "磷酸钙",
          description: "构成脊椎动物骨骼与牙齿的主要无机矿物成分。",
        },
      ],
      reactions: [
        {
          equation: "P₄ + 5O₂ → P₄O₁₀",
          description: "白磷在室温下极易与空气中的氧气反应自燃，生成白色的十氧化四磷烟雾。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "白磷具有剧毒且在空气中会自燃，造成严重的化学性烧伤；处理磷化学品需高度专业规范，绝对不应自行操作。",
        },
      ],
      isotopes: [
        {
          notation: "³¹P",
          use: "核磁共振（NMR）分析与生化研究",
          description: "唯一的天然稳定同位素，其核自旋特性非常适合用于生化代谢路径追踪。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "磷的同素异形体特性、燃烧现象及生化功能皆有完备的实测资料。",
      },
    },
    S: {
      description: "硫是一种多产的黄色非金属元素，在自然界中常以火山口附近的单质或硫化物矿物形式存在。它在化学工业与生物体系中均扮演关键角色。",
      uses: ["制造硫酸", "橡胶硫化制程（提升轮胎耐用度）", "农业杀菌剂与肥料生产"],
      appearance: "常温下为鲜黄色、无气味的脆性质轻固体结晶。",
      lifeRole: "单质硫无毒但人体无法直接吸收；生命体依赖含硫氨基酸（如半胱氨酸）来建构蛋白质的立体结构与维护正常代谢。",
      compounds: [
        {
          formula: "H₂SO₄",
          name: "硫酸",
          description: "被誉为“化学工业之母”，是世界上产量最大的强酸，广泛用于肥料与电池工业。",
        },
        {
          formula: "H₂S",
          name: "硫化氢",
          description: "具有强烈腐臭鸡蛋气味的气体，剧毒且易燃，常见于火山气体与有机物腐败。",
        },
      ],
      reactions: [
        {
          equation: "S + O₂ → SO₂",
          description: "硫在空气中燃烧发出蓝色火焰，生成具有强烈刺激性气味的二氧化硫气体。",
          conditions: "点燃",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "燃烧硫磺会产生有毒的二氧化硫气体，严重刺激呼吸道；多数硫化物气体亦具剧毒，不应在通风不良处或非专业环境自行操作。",
        },
      ],
      isotopes: [
        {
          notation: "³²S",
          use: "地质与宇宙化学研究",
          description: "自然界中最丰富的硫同位素。",
        },
        {
          notation: "³⁴S",
          use: "生态学示踪剂",
          description: "稳定的重同位素，常透过硫同位素比例追踪古环境与食物链。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "硫的燃烧产物、化合物毒理与生物学角色皆具备明确的科学实测资料。",
      },
    },
    Cl: {
      description: "氯是一种极具反应性的卤素元素。它是一种强氧化剂，广泛应用于全球的消毒与化工合成制程中。",
      uses: ["自来水与游泳池消毒", "制造聚氯乙烯（PVC）塑料", "医药与农药合成"],
      appearance: "常温下为黄绿色、具有强烈窒息性气味的气体。",
      lifeRole: "氯气单质剧毒；但氯离子（Cl⁻）在人体中与钠离子共同维持细胞外液的渗透压与水分平衡，并构成胃酸（盐酸）。",
      compounds: [
        {
          formula: "NaCl",
          name: "氯化钠",
          description: "自然界最常见的氯化合物，为人体所需盐分与工业电解制氯的原料。",
        },
        {
          formula: "HCl",
          name: "氯化氢（盐酸）",
          description: "溶于水后形成强酸，广泛用于金属除锈与工业清洗。",
        },
      ],
      reactions: [
        {
          equation: "H₂ + Cl₂ → 2HCl",
          description: "氯气与氢气混合后，在强光照射或点火下会发生爆炸性反应生成氯化氢气体。",
          conditions: "光照或点燃",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "氯气为具高度腐蚀性与毒性的化学武器级气体，吸入会严重损害肺部甚至致命；绝对不应自行混合含氯漂白水与酸类清洁剂。",
        },
      ],
      isotopes: [
        {
          notation: "³⁵Cl",
          use: "化学分析基准",
          description: "自然界中丰度最高的氯同位素，约占四分之三比例。",
        },
        {
          notation: "³⁷Cl",
          use: "环境化学追踪",
          description: "稳定的重同位素，与³⁵Cl的比例常被用于质谱分析与地下水污染源追溯。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "氯气的毒性、漂白作用与工业化学性质皆有极为详细的实测与历史纪录资料。",
      },
    },
    Ar: {
      description: "氩是一种极为安定的单原子惰性气体，也是地球大气中含量第三丰富的气体（约占0.93%）。它在一般情况下不参与化学反应。",
      uses: ["电焊的保护气体（防止金属高温氧化）", "白炽灯与荧光灯的填充气体", "半导体晶圆制造的惰性环境"],
      appearance: "常温下为无色、无味的气体。",
      safety: [
        {
          level: "警告",
          description: "氩气完全无毒，但比重较空气重，若在密闭空间或深坑中大量泄漏会沉积于底部，排挤氧气而造成无预警的缺氧窒息危险。",
        },
      ],
      isotopes: [
        {
          notation: "⁴⁰Ar",
          use: "地质年代测定",
          description: "钾-氩定年法中的关键同位素，用于测定岩石与陨石的年龄。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "氩气的物理惰性、热力学表现与同位素定年应用均有丰富的已实测资料。",
      },
    },
    K: {
      description: "钾是一种极为活泼的银白色碱金属。在自然界中从不以单质存在，多以矿物或海水中溶解的盐类形式广泛分布。",
      uses: ["制造农业用钾肥", "工业用氢氧化钾与肥皂", "实验室的强还原剂"],
      appearance: "常温下为质软的银白色金属，切开后接触空气会迅速氧化失去光泽。",
      lifeRole: "钾金属单质遇水会发生剧烈爆炸；人体与植物依赖的是钾离子（K⁺），它在细胞内负责维持渗透压、神经传导与肌肉收缩。",
      compounds: [
        {
          formula: "KCl",
          name: "氯化钾",
          description: "最常见的钾肥，也常用于医疗上补充血钾。",
        },
        {
          formula: "KNO₃",
          name: "硝酸钾",
          description: "重要的肥料，也是传统黑火药的主要成分。",
        },
      ],
      reactions: [
        {
          equation: "2K + 2H₂O → 2KOH + H₂",
          description: "钾金属遇水会剧烈反应生成氢气，放出的高热会直接点燃甚至引爆产生的氢气。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "钾金属极易与水、空气中的氧气及水分发生剧烈反应并引发火灾甚至爆炸；必须保存在矿物油中，绝不应自行操作。",
        },
      ],
      isotopes: [
        {
          notation: "⁴⁰K",
          use: "地质定年与自然放射源",
          description: "存在于自然界的微量放射性同位素，是岩石与人体内天然背景辐射的主要来源之一。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钾的化学反应性、生理功能与同位素特性皆具备丰富且完备的科学实测资料。",
      },
    },
    Ca: {
      description: "钙是一种银灰色的碱土金属，化学性质相当活泼。它是地壳中第五丰富的元素，也是多数生物体结构的重要基石。",
      uses: ["冶炼其他金属的还原剂", "制造水泥与建筑材料（以化合物形式）", "钢铁与合金的脱氧剂"],
      appearance: "常温下为质地较硬的银灰色金属。",
      lifeRole: "单质钙具有腐蚀性且不存在于生物体；人体利用的是钙离子（Ca²⁺）来传递神经信号，并以磷酸钙化合物形式建构骨骼与牙齿。",
      compounds: [
        {
          formula: "CaCO₃",
          name: "碳酸钙",
          description: "石灰岩、大理石与贝壳的主要成分，常用于建筑与补钙剂。",
        },
        {
          formula: "CaO",
          name: "氧化钙",
          description: "俗称生石灰，遇水会放出大量热能生成熟石灰，广泛用于工业与建筑。",
        },
      ],
      reactions: [
        {
          equation: "Ca + 2H₂O → Ca(OH)₂ + H₂",
          description: "钙金属会与水发生反应，稳定释放出氢气并生成微溶于水的氢氧化钙碱性溶液。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "钙金属单质接触水或湿气会产生易燃的氢气与具腐蚀性的碱液，应避免皮肤直接接触并妥善存放。",
        },
      ],
      isotopes: [
        {
          notation: "⁴⁰Ca",
          use: "核物理研究",
          description: "自然界最丰沛的钙稳定同位素，约占地球上天然钙的97%。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钙的晶体结构、反应热力学及生物医学资料皆为权威机构的已实测资料。",
      },
    },
    Sc: {
      description: "钪是一种质轻的银白色过渡金属，属于稀土元素。虽然在地壳中分布广泛，但极少富集，因此提炼困难且价格相对昂贵。",
      uses: ["制造航天级钪铝合金", "高强度运动器材（如自行车架）", "金属卤素灯的发光添加剂"],
      appearance: "常温下为银白色金属，暴露在空气中会逐渐氧化呈现微黄色或粉红色光泽。",
      compounds: [
        {
          formula: "Sc₂O₃",
          name: "氧化钪",
          description: "提炼钪金属与制造高效能固态激光的重要原料。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "钪金属单质无明显毒性，但极细微的钪粉末在空气中具有易燃性。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钪的冶金特性与合金应用数据均为现代材料科学的已实测资料。",
      },
    },
    Ti: {
      description: "钛是一种坚硬、质轻且耐腐蚀的银灰色过渡金属。它具有极高的强度重量比，在严苛环境中表现出优异的化学稳定性。",
      uses: ["航天机身与引擎部件", "人工关节与植牙体", "制造白色颜料（以二氧化钛形式）"],
      appearance: "常温下为带有金属光泽的银灰色金属。",
      lifeRole: "钛金属对人体完全无毒且具备极佳的生物相容性，免疫系统几乎不会对其产生排斥，因此成为医疗植入物的首选。",
      compounds: [
        {
          formula: "TiO₂",
          name: "二氧化钛",
          description: "极为稳定的白色粉末，广泛应用于防晒乳、油漆与食品添加剂中。",
        },
        {
          formula: "TiCl₄",
          name: "四氯化钛",
          description: "提炼纯钛的中间产物，接触潮湿空气会产生浓烈的白色烟雾，可用于制造烟幕。",
        },
      ],
      reactions: [
        {
          equation: "Ti + O₂ → TiO₂",
          description: "钛在高温下极易与空气中的氧结合，但在常温下表面生成的致密氧化膜能防止其进一步腐蚀。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "大块钛金属极为安全，但极细的钛金属粉末极易点燃，且燃烧温度极高，难以用常规灭火器扑灭。",
        },
      ],
      isotopes: [
        {
          notation: "⁴⁸Ti",
          use: "材料科学与物理研究",
          description: "自然界最常见的钛同位素，占超过七成。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钛的物理强度、耐腐蚀特性及生物相容性均有大量的医疗与工业实测资料。",
      },
    },
    V: {
      description: "钒是一种质地坚硬、具延展性的银灰色过渡金属。它主要作为合金添加剂，能显著提升钢铁的强度与韧性。",
      uses: ["制造高强度合金钢与工具钢", "硫酸工业中的触媒（以氧化物形式）", "钒氧化还原液流电池"],
      appearance: "常温下为具有光泽的银灰色金属。",
      compounds: [
        {
          formula: "V₂O₅",
          name: "五氧化二钒",
          description: "剧毒化合物，是接触法制造硫酸过程中不可或缺的催化剂。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "钒金属单质相对安全，但钒的多数化合物（特别是粉尘）具有强烈毒性，吸入会严重刺激呼吸道。",
        },
      ],
      isotopes: [
        {
          notation: "⁵¹V",
          use: "核磁共振与材料分析",
          description: "占自然界99.7%以上的稳定同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钒的冶金效果与化合物毒理皆具备成熟的工业与医学实测资料。",
      },
    },
    Cr: {
      description: "铬是一种坚硬、高熔点且具有闪亮光泽的过渡金属。它的名称源自希腊文的“颜色”，因为其化合物色彩极为丰富。",
      uses: ["制造不锈钢", "金属表面镀铬以防锈与装饰", "皮革鞣制与工业颜料"],
      appearance: "常温下为带有极高光泽的坚硬银灰色金属。",
      lifeRole: "三价铬离子（Cr³⁺）是人体代谢糖分与脂质所需的微量元素；但六价铬（Cr⁶⁺）化合物对生物体具有剧毒及强烈致癌性。",
      compounds: [
        {
          formula: "Cr₂O₃",
          name: "氧化铬(III)",
          description: "绿色固体，常作为颜料与研磨剂，相对稳定且毒性较低。",
        },
        {
          formula: "K₂Cr₂O₇",
          name: "重铬酸钾",
          description: "强氧化剂，呈现鲜艳的橘红色，具剧毒及致癌性。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "铬金属本身无毒，但工业制程中产生的六价铬粉尘或溶液具有强烈毒性与致癌性，严禁随意排放与无防护接触。",
        },
      ],
      isotopes: [
        {
          notation: "⁵²Cr",
          use: "环境化学与生物代谢研究",
          description: "自然界中最丰沛的铬同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铬的冶金应用及六价铬的毒理学与致癌性皆有极为明确的实测资料。",
      },
    },
    Mn: {
      description: "锰是一种质硬而脆的银灰色过渡金属。它在自然界中常与铁矿伴生，是钢铁工业中不可或缺的脱氧与合金剂。",
      uses: ["制造高锰耐磨钢材（如铁轨、保险箱）", "干电池与碱性电池的去极化剂", "铝合金工业的添加剂"],
      appearance: "常温下为带有些微粉红色泽的银灰色金属，质地坚脆。",
      lifeRole: "微量的锰离子（Mn²⁺）是多种人体酶（如抗氧化酶）运作所必需的辅因子；但过量摄取会损害中枢神经系统。",
      compounds: [
        {
          formula: "MnO₂",
          name: "二氧化锰",
          description: "黑色粉末，广泛应用于碳锌电池中，也是实验室中制造氧气的常见催化剂。",
        },
        {
          formula: "KMnO₄",
          name: "高锰酸钾",
          description: "紫黑色的强氧化剂结晶，溶于水呈紫红色，常用于医药消毒与水处理。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "长期暴露或吸入锰金属与其化合物的粉尘，会导致严重的不可逆神经性疾病（锰中毒）。",
        },
      ],
      isotopes: [
        {
          notation: "⁵⁵Mn",
          use: "核磁共振与材料科学",
          description: "自然界唯一存在的稳定同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锰的合金效能、催化机制及神经毒性皆有长期积累的实测资料。",
      },
    },
    Fe: {
      description: "铁是地球上质量最丰富的元素，也是人类使用最广泛的过渡金属。它具有强磁性，且极易与氧气和水分反应生锈。",
      uses: ["建筑用的钢筋与结构钢", "制造汽车与船舰的钢板", "铸铁锅具与各类机械工具"],
      appearance: "常温下纯铁为柔软的银灰色金属，但日常见到的铁多为含有碳的坚硬合金。",
      lifeRole: "纯铁金属无生物功能；但亚铁离子（Fe²⁺）与铁离子（Fe³⁺）是人体红细胞血红蛋白的核心，负责在体内运送氧气。",
      compounds: [
        {
          formula: "Fe₂O₃",
          name: "氧化铁(III)",
          description: "红褐色粉末，俗称铁锈，也是重要的铁矿石（赤铁矿）成分。",
        },
        {
          formula: "FeCl₃",
          name: "氯化铁(III)",
          description: "呈棕黄色的强酸性盐类，常用于污水处理与印刷电路板的蚀刻。",
        },
      ],
      reactions: [
        {
          equation: "4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃",
          description: "铁在潮湿空气中极易氧化，生成疏松多孔的氢氧化铁与氧化铁混合物（即生锈），无法阻挡内部继续腐蚀。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "大块铁金属无毒且安全，但铁锈与泥土混合若造成穿刺伤，容易引发破伤风细菌感染；过量摄取铁剂则会引起急性中毒。",
        },
      ],
      isotopes: [
        {
          notation: "⁵⁶Fe",
          use: "核子天文学研究",
          description: "宇宙中最稳定的核素之一，是恒星核聚变反应的最终产物。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铁的冶金学、磁性物理与生化代谢路径皆为人类最熟悉的实测资料。",
      },
    },
    Co: {
      description: "钴是一种坚硬、具有磁性的银灰色过渡金属。它在极端温度下仍能保持高强度与磁性，是高科技产业的关键战略金属。",
      uses: ["锂离子电池的正极材料", "航空燃气涡轮引擎的超级合金", "制造高硬度切削工具"],
      appearance: "常温下为具有亮泽的银灰色金属，带有些微淡蓝色调。",
      lifeRole: "钴离子是维生素B12（钴胺素）的中心原子，对人体神经系统健康及红细胞的生成至关重要。",
      compounds: [
        {
          formula: "CoCl₂",
          name: "氯化钴",
          description: "无水时呈蓝色，吸水后变为粉红色，常被用作干燥剂中的湿度指示剂。",
        },
        {
          formula: "LiCoO₂",
          name: "钴酸锂",
          description: "广泛应用于智能手机与电动车电池中的储能化学材料。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "过量接触钴粉尘可能引起严重的呼吸道疾病与皮肤过敏；某些人工放射性同位素则具有强烈辐射危害。",
        },
      ],
      isotopes: [
        {
          notation: "⁶⁰Co",
          use: "医疗放射治疗与工业探伤",
          description: "具有强烈伽马射线的放射性同位素，广泛用于癌症放疗与食品杀菌。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钴的合金性能、电池化学反应与生物学功能皆具备高度可靠的实测资料。",
      },
    },
    Ni: {
      description: "镍是一种坚硬、具延展性且高度抗腐蚀的银白色过渡金属。它在空气中极为稳定，常作为保护性镀层或合金成分。",
      uses: ["制造不锈钢（与铁、铬形成合金）", "金属表面的防锈镀镍", "硬币制造与充电电池（镍氢电池）"],
      appearance: "常温下为带有些微金色光泽的银白色金属。",
      lifeRole: "微量镍是某些植物与微生物必需的元素；但在人体中没有已知的必要生理功能，反而常引发接触性过敏。",
      compounds: [
        {
          formula: "NiO",
          name: "氧化镍",
          description: "绿色至黑色的粉末，广泛应用于陶瓷釉料与镍系电池制造。",
        },
        {
          formula: "NiCl₂",
          name: "氯化镍",
          description: "易溶于水的黄色或绿色结晶，是电镀镍制程中的主要化学品。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "镍金属是常见的接触性过敏原（如劣质饰品引发的皮炎）；某些镍化合物粉尘若长期吸入具致癌风险。",
        },
      ],
      isotopes: [
        {
          notation: "⁵⁸Ni",
          use: "中子探测与核反应研究",
          description: "自然界中最丰富的镍同位素，约占三分之二。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "镍的冶金学、电化学与毒理学均有长期的科学与工业实测资料。",
      },
    },
    Cu: {
      description: "铜是一种呈现红橙色金属光泽的过渡金属，具有极佳的导电性与导热性。它是人类最早冶炼与使用的金属之一。",
      uses: ["电线与电气设备", "水管与建筑材料", "制造青铜与黄铜合金"],
      appearance: "常温下为呈现红橙色光泽的柔软金属。",
      lifeRole: "铜金属单质无毒，但微量铜离子（Cu²⁺）是多种人体酶的核心辅因子；若摄取过量可溶性铜盐则会引发重金属中毒。",
      compounds: [
        {
          formula: "CuO",
          name: "氧化铜",
          description: "黑色固体，常作为玻璃与陶瓷的颜料。",
        },
        {
          formula: "CuSO₄",
          name: "硫酸铜",
          description: "蓝色结晶，广泛用于农业杀菌剂、电镀工业与实验室试剂。",
        },
      ],
      reactions: [
        {
          equation: "2Cu + O₂ → 2CuO",
          description: "铜在高温下与空气中的氧气缓慢反应，表面会失去光泽并生成黑色的氧化铜。",
          conditions: "加热",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "固体铜金属十分安全，但摄入过量可溶性铜盐会强烈刺激肠胃并导致急性重金属中毒。",
        },
      ],
      isotopes: [
        {
          notation: "⁶³Cu",
          use: "核磁共振研究",
          description: "自然界中最常见的稳定同位素，占近七成。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铜的导电物理性质、化学反应性及生物学作用均为历史悠久且完善的已实测资料。",
      },
    },
    Zn: {
      description: "锌是一种带有微蓝色泽的银白色过渡金属。它在空气中容易形成致密氧化层，常作为保护铁防锈的牺牲阳极。",
      uses: ["钢铁表面的防锈镀锌", "制造黄铜（与铜的合金）", "干电池的外壳与负极"],
      appearance: "常温下为带有微蓝灰色光泽的金属。",
      lifeRole: "锌单质无生物功能，但锌离子（Zn²⁺）是人体免疫系统与DNA合成不可或缺的微量元素，存在于数百种酶中。",
      compounds: [
        {
          formula: "ZnO",
          name: "氧化锌",
          description: "白色粉末，广泛应用于防晒乳、橡胶添加剂与医疗药膏。",
        },
        {
          formula: "ZnS",
          name: "硫化锌",
          description: "具有荧光特性的白色或微黄色固体，用于发光涂料与荧光幕。",
        },
      ],
      reactions: [
        {
          equation: "Zn + 2HCl → ZnCl₂ + H₂",
          description: "锌金属能与稀酸（如盐酸）反应，置换出酸中的氢，产生易燃的氢气。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "锌金属本身安全，但在高温焊接或熔炼时吸入产生的氧化锌烟雾，会引发金属烟热（一种急性呼吸道症状）。",
        },
      ],
      isotopes: [
        {
          notation: "⁶⁴Zn",
          use: "生化与医学追踪",
          description: "自然界丰度最高的锌稳定同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锌的电化学防锈特性、合金配方及生物酶机制皆具备高度可靠的实测资料。",
      },
    },
    Ga: {
      description: "镓是一种银白色的贫金属，具有异常低的熔点，甚至能在人类的手掌心融化。它在现代高频电子与光电半导体中扮演关键角色。",
      uses: ["制造微波与高频通讯半导体（砷化镓）", "高亮度蓝光与白光LED", "高温温度计的填充金属"],
      appearance: "常温下为银白色金属，稍微加热（约29.7°C）即融化为液态。",
      lifeRole: "人体中没有镓的自然生理功能，但某些放射性镓同位素化合物被用于医学肿瘤造影。",
      compounds: [
        {
          formula: "GaAs",
          name: "砷化镓",
          description: "重要的半导体材料，电子迁移率比硅高，广泛用于高频与无线通讯。",
        },
        {
          formula: "GaN",
          name: "氮化镓",
          description: "新世代宽能隙半导体，用于高效能充电器与蓝光激光二极管。",
        },
      ],
      reactions: [
        {
          equation: "2Ga + 6HCl → 2GaCl₃ + 3H₂",
          description: "镓可与盐酸反应，生成氯化镓并释放出氢气。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "镓对人体多数无毒，但液态镓会严重渗透并腐蚀铝金属，破坏其结构强度，绝对不应携带上飞机。",
        },
      ],
      isotopes: [
        {
          notation: "⁶⁷Ga",
          use: "医学造影",
          description: "具有放射性的同位素，常被用作核医学中的发炎与肿瘤定位追踪剂。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "镓的低熔点特性、半导体电学表现及合金腐蚀现象皆有完备的实测资料。",
      },
    },
    Ge: {
      description: "锗是一种灰白色的类金属，质脆且具有半导体特性。它是早期晶体管的核心材料，现今主要应用于光学与特殊电子元件。",
      uses: ["光纤通讯网络的核心掺杂物", "红外线夜视仪的镜片材料", "太阳能电池与特殊半导体"],
      appearance: "常温下为具有金属光泽的灰白色固体结晶。",
      lifeRole: "锗在生物体中没有已知的必需生理功能；尽管曾有保健食品宣称其功效，但摄入无机锗化合物对人体具有肾脏毒性。",
      compounds: [
        {
          formula: "GeO₂",
          name: "二氧化锗",
          description: "具有高折射率与红外线穿透性的光学材料，广泛用于制造光纤与广角镜头。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "某些无机锗化合物若被当作保健食品长期或大量服用，会导致不可逆的严重肾衰竭。",
        },
      ],
      isotopes: [
        {
          notation: "⁷²Ge",
          use: "基础物理与半导体研究",
          description: "稳定的同位素，占天然锗的两成以上。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锗的半导体特性、光学折射率与肾脏毒性皆具备明确的实测资料。",
      },
    },
    As: {
      description: "砷是一种剧毒的类金属元素，在自然界中以多种同素异形体存在。尽管其毒性恶名昭彰，它在现代半导体工业中却是不可或缺的掺杂材料。",
      uses: ["半导体N型掺杂与砷化镓晶圆", "木材防腐剂（历史用途，多数已禁用）", "铅酸电池的合金添加物"],
      appearance: "常见的灰砷在常温下为具有金属光泽的银灰色脆性固体。",
      lifeRole: "砷及多数砷化合物对绝大多数生物体具有剧毒及致癌性，会严重干扰细胞能量代谢的关键酶。",
      compounds: [
        {
          formula: "As₂O₃",
          name: "三氧化二砷",
          description: "俗称砒霜，白色无味的剧毒粉末，历史上曾被广泛用作毒药，现今在严格控制下用于治疗特定白血病。",
        },
        {
          formula: "GaAs",
          name: "砷化镓",
          description: "高速电子元件与光电晶体的重要材料，化学结构极为稳定。",
        },
      ],
      reactions: [
        {
          equation: "4As + 3O₂ → 2As₂O₃",
          description: "砷在空气中加热会燃烧，散发出刺鼻大蒜味的剧毒白烟（三氧化二砷）。",
          conditions: "加热",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "砷及其多数化合物具有剧毒且为一级致癌物，吸入或摄入微量即可致命；必须在严格防护下处理，不应自行操作。",
        },
      ],
      isotopes: [
        {
          notation: "⁷⁵As",
          use: "核磁共振与半导体掺杂",
          description: "自然界唯一存在的稳定砷同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "砷的化学反应、化合物剧毒性与半导体应用皆有长期的工安与科学实测资料。",
      },
    },
    Se: {
      description: "硒是一种非金属（或类金属）元素，具有独特的光电导性，即在光照下导电能力会大幅提升。它在微量与过量之间对生命的影响呈现两极化。",
      uses: ["复印机与激光打印机的感光鼓", "玻璃工业中的脱色剂与红宝石玻璃发色剂", "整流器与光电池"],
      appearance: "最稳定的同素异形体为常温下呈现金属光泽的灰色固体，另有红色的粉末状态。",
      lifeRole: "微量硒离子是人体抗氧化酶（如谷胱甘肽过氧化物酶）的核心；但摄取过量无机硒会导致硒中毒，引起脱发、神经损伤与蒜味呼吸。",
      compounds: [
        {
          formula: "SeO₂",
          name: "二氧化硒",
          description: "重要的氧化剂，常用于有机化学合成与电镀工业，具有高毒性。",
        },
      ],
      reactions: [
        {
          equation: "Se + O₂ → SeO₂",
          description: "硒在空气中燃烧发出蓝色火焰，生成具有强烈腐败萝卜气味的二氧化硒有毒气体。",
          conditions: "点燃",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "硒单质相对安全，但其多数化合物具有高毒性与刺激性，工业处理时应严格防护以免吸入粉尘或气体。",
        },
      ],
      isotopes: [
        {
          notation: "⁸⁰Se",
          use: "同位素地球化学追踪",
          description: "自然界最丰富的稳定同位素，占近半数。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "硒的光电特性、生物学微量必需性与过量中毒机制皆有完备的实测资料。",
      },
    },
    Br: {
      description: "溴是常温下唯一呈现液态的非金属元素。它属于卤素，具有极高的反应性、强烈的腐蚀性与刺鼻的恶臭气味。",
      uses: ["制造阻燃剂", "水处理与游泳池消毒（作为氯的替代品）", "有机合成与农化产品制造"],
      appearance: "常温下为深红棕色、不断冒出刺激性红棕色蒸气的沉重液体。",
      lifeRole: "有研究指出极微量的溴离子（Br⁻）可能参与动物胶原蛋白的合成；但摄入过量无机溴化物会严重抑制中枢神经系统（溴中毒）。",
      compounds: [
        {
          formula: "AgBr",
          name: "溴化银",
          description: "对光极为敏感的淡黄色固体，是传统黑白与彩色摄影底片的核心感光材料。",
        },
        {
          formula: "NaBr",
          name: "溴化钠",
          description: "历史上曾作为医学镇静剂，现今常用于石油探勘的钻井液。",
        },
      ],
      reactions: [
        {
          equation: "2Na + Br₂ → 2NaBr",
          description: "溴与碱金属（如钠）接触会发生剧烈反应甚至爆炸，生成白色的溴化物盐类固体。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "液态溴极易挥发，其红棕色蒸气对呼吸道与眼睛黏膜具有强烈破坏性与毒性；液体接触皮肤会造成严重且难以愈合的化学灼伤，绝对不应自行操作。",
        },
      ],
      isotopes: [
        {
          notation: "⁷⁹Br",
          use: "质谱分析结构判定",
          description: "与⁸¹Br的自然丰度几乎为1:1，是化学结构质谱分析中极具辨识度的特征。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "溴的挥发性、强烈腐蚀性与感光化合物机制皆有极为详细的化学与工安实测资料。",
      },
    },
    Kr: {
      description: "氪是一种无色、无臭、无味的惰性气体元素，在地球大气中的含量极为稀少。通电后它能发出强烈的白光，常用于特种照明与激光技术。",
      uses: ["高频闪光灯与高速摄影照明", "双层玻璃窗的隔热填充气体", "氪氟（KrF）准分子激光（用于半导体光刻）"],
      appearance: "常温下为无色、无味的气体；通电激发时会发出明亮的淡白色或微绿色光辉。",
      safety: [
        {
          level: "警告",
          description: "氪气本身完全无毒且化学性质极度惰性，但在密闭空间或低洼处大量释放会排挤氧气，导致无预警的窒息危险。",
        },
      ],
      isotopes: [
        {
          notation: "⁸⁴Kr",
          use: "地球与大气科学追踪",
          description: "自然界最丰富的氪同位素，占近六成比例。",
        },
        {
          notation: "⁸¹Kr",
          use: "古地下水定年",
          description: "极微量的放射性同位素，被用于测定深层地下水的年代。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "氪的物理光谱、热力学隔热特性及放射性同位素定年皆为精密物理学的已实测资料。",
      },
    },
    Rb: {
      description: "铷是一种极为柔软、化学性质极为活泼的银白色碱金属。在空气中会迅速氧化甚至自燃。",
      uses: ["特殊玻璃制造", "光电池与光电倍增管", "高精度原子钟"],
      appearance: "常温下为质软的银白色金属，暴露空气中会迅速氧化失去光泽并可能自燃。",
      lifeRole: "铷单质遇水会剧烈爆炸；铷离子（Rb⁺）在人体内无已知功能，但化学性质类似钾，可被人体微量吸收与代谢。",
      compounds: [
        {
          formula: "RbCl",
          name: "氯化铷",
          description: "常被用于生物化学研究中作为生物标记或追踪剂。",
        },
      ],
      reactions: [
        {
          equation: "2Rb + 2H₂O → 2RbOH + H₂",
          description: "铷金属遇水会发生极度猛烈的爆炸反应，生成氢氧化铷并点燃或引爆释放出的氢气。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "铷金属极易与水、空气中的氧气及水分发生剧烈反应并引发爆炸燃烧；必须保存在真空或惰性气体中，绝不应自行操作。",
        },
      ],
      isotopes: [
        {
          notation: "⁸⁷Rb",
          use: "地质定年",
          description: "微具放射性的同位素，铷-锶定年法常被用于测定古老岩石的年龄。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铷的极高反应性、热力学数据与同位素特性皆有完备的实测资料。",
      },
    },
    Sr: {
      description: "锶是一种柔软的银黄色碱土金属，化学性质相当活泼。它在燃烧时会发出极为鲜艳的深红色火焰。",
      uses: ["制造红色烟火与信号弹", "铁氧体磁铁添加剂", "医学上锶同位素应用于骨癌治疗"],
      appearance: "常温下为带有些微黄色的银灰色金属，切开后接触空气会迅速氧化。",
      lifeRole: "锶离子的化学性质类似钙，少量会积聚在人体骨骼中且多数无害；但核爆炸产生的放射性同位素（锶-90）极具危险性，会引发骨癌。",
      compounds: [
        {
          formula: "SrCO₃",
          name: "碳酸锶",
          description: "最常见的锶化合物之一，广泛用于制造烟火的红色发光剂。",
        },
      ],
      reactions: [
        {
          equation: "Sr + 2H₂O → Sr(OH)₂ + H₂",
          description: "锶与水会发生反应，生成氢氧化锶的碱性溶液并释放出易燃的氢气。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "锶金属单质易与空气及水分反应起火；其人工放射性同位素为高度危险的核废料。",
        },
      ],
      isotopes: [
        {
          notation: "⁹⁰Sr",
          use: "同位素热电机与工业测厚仪",
          description: "核裂变的危险产物，因其能积聚于骨骼中，是核灾中危害最大的放射性核素之一。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锶的光谱特性、化学反应性及放射毒理学皆有丰富的已实测资料。",
      },
    },
    Y: {
      description: "钇是一种银白色的过渡金属，通常与稀土元素伴生。它是现代光电科技、激光技术与高温超导体的重要基础材料。",
      uses: ["制造高温超导材料（如YBCO）", "白色LED与电视荧光粉", "高强度镁合金添加物"],
      appearance: "常温下为具有金属光泽的银灰色金属。",
      compounds: [
        {
          formula: "Y₃Al₅O₁₂",
          name: "钇铝石榴石（YAG）",
          description: "重要的人造晶体材料，常掺杂其他元素用于固态激光器（如Nd:YAG激光）。",
        },
        {
          formula: "YBa₂Cu₃O₇",
          name: "钇钡铜氧（YBCO）",
          description: "著名的高温超导体材料，可在液态氮温度下实现超导现象。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "钇金属块状相对安全，但其粉末在空气中极易点燃；过量吸入钇化合物粉尘可能损害肺部。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钇的光学、磁性与超导电学物理数据均为物理与材料科学界广泛验证的已实测资料。",
      },
    },
    Zr: {
      description: "锆是一种坚硬、灰白色的过渡金属，具有极佳的抗腐蚀性与极低的中子吸收截面。这使其成为核能工业中不可或缺的材料。",
      uses: ["核反应堆的铀燃料棒外壳", "航天与化工高温抗腐蚀合金", "人造钻石（立方氧化锆）与陶瓷牙冠"],
      appearance: "常温下为极为坚硬的灰白色金属。",
      compounds: [
        {
          formula: "ZrO₂",
          name: "二氧化锆",
          description: "耐高温且极为坚硬的白色固体，广泛用于高级陶瓷材料与廉价的钻石替代品。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "固体锆金属完全无毒且极其稳定，但在机械加工过程中产生的细微锆粉末极易在空气中自燃爆炸。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锆的抗腐蚀数据、核物理特性及耐高温表现皆有完备的实测资料。",
      },
    },
    Nb: {
      description: "铌是一种质软、灰色的延展性过渡金属。它具有优异的低温超导特性，且能显著增强钢铁的强度与耐热性。",
      uses: ["粒子加速器与核磁共振的超导磁铁", "航天火箭引擎耐热合金", "高级不锈钢与管线钢的强化添加物"],
      appearance: "常温下为具有光泽的灰色金属，表面氧化后会呈现极美丽的不同干涉色。",
      compounds: [
        {
          formula: "Nb₃Sn",
          name: "锡化铌",
          description: "极其重要的超导化合物，广泛用于制造产生强磁场的超导线圈。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "铌金属本身安全无毒，但多数铌化合物具刺激性，处理粉尘时应佩戴防护装备。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铌的冶金强化效果与超导转变温度等皆具备权威机构的已实测资料。",
      },
    },
    Mo: {
      description: "钼是一种极高熔点的银灰色过渡金属。它在工业合金与生物圈的氮代谢机制中，都扮演着关键且不可替代的角色。",
      uses: ["制造高强度抗腐蚀合金钢", "炼油工业的脱硫催化剂", "高温炉的电极与发热元件"],
      appearance: "常温下为极坚硬的银灰色金属。",
      lifeRole: "钼离子是动植物与人体内多种关键酶（如固氮酶与黄嘌呤氧化酶）所必需的微量核心元素，缺乏会影响代谢。",
      compounds: [
        {
          formula: "MoS₂",
          name: "二硫化钼",
          description: "呈黑色的层状固体，是极佳的高温与真空环境固体润滑剂。",
        },
      ],
      isotopes: [
        {
          notation: "⁹⁹Mo",
          use: "医学同位素制造",
          description: "具有放射性，是核医学中最常用放射源“锝-99m”的母体核素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钼的冶金特性、高温物理与生物酶活性机制均有高度可靠的实测资料。",
      },
    },
    Tc: {
      description: "锝是元素周期表中第一个完全由人工合成或放射性衰变产生的元素。自然界中几乎不存在，其所有同位素皆具放射性。",
      uses: ["医学影像诊断（心肌与骨骼造影）", "钢铁防锈研究的极微量添加剂", "科学研究示踪剂"],
      appearance: "常温下为银灰色金属，但在实验室外极少制成肉眼可见的单质块状。",
      lifeRole: "人工合成的放射性锝（锝-99m）化合物被广泛注射入人体用于核医学造影，因其半衰期短，在几天内就会从体内代谢并衰变完毕。",
      compounds: [
        {
          formula: "NaTcO₄",
          name: "高锝酸钠",
          description: "用于医学注射与防腐蚀研究中的可溶性放射性盐类。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "锝的所有型态均具有放射性危险，仅能在具备辐射防护装备的核医学或放射化学实验室中操作。",
        },
      ],
      isotopes: [
        {
          notation: "⁹⁹ᵐTc",
          use: "核医学造影",
          description: "释放纯伽马射线且半衰期仅六小时，是全球医学影像诊断中最广泛使用的放射性同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锝的放射性衰变数据、医学造影效果皆具备详尽且高度规范的科学实测资料。",
      },
    },
    Ru: {
      description: "钌是一种坚硬、稀有且质脆的银白色铂族金属。它主要作为合金硬化剂以及电子工业中的耐磨接点材料。",
      uses: ["硬盘磁性储存层的微量涂层", "铂与钯金属合金的硬化剂", "太阳能电池中的化学染料与催化剂"],
      appearance: "常温下为质地坚硬、易碎裂的银白色金属。",
      compounds: [
        {
          formula: "RuO₄",
          name: "四氧化钌",
          description: "极易挥发且具有剧毒的强氧化剂，主要用于电子显微镜生物样本的染色与固定。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "金属钌相对稳定且安全，但其高氧化态化合物（如四氧化钌蒸气）具有剧毒，会强烈刺激眼睛与呼吸道。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钌的金属特性、合金应用与化合物毒理皆有明确的化学实测资料。",
      },
    },
    Rh: {
      description: "铑是一种极其稀有、昂贵的银白色铂族金属。它具有卓越的抗腐蚀性与强大的催化能力。",
      uses: ["汽车排气系统的催化转化器", "高级珠宝与银器的抗氧化亮面镀层", "工业硝酸与化学品合成催化剂"],
      appearance: "常温下为具有强烈光泽的银白色坚硬金属。",
      compounds: [
        {
          formula: "RhCl₃",
          name: "氯化铑",
          description: "制备其他铑均相催化剂的重要化学起点物质。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "固态铑金属无毒且极度稳定，但其化合物粉尘或气溶胶具有强烈刺激性，部分甚至被怀疑具致癌性。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁰³Rh",
          use: "工业与科学研究",
          description: "自然界唯一存在的铑稳定同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铑的光学反射率、催化转化效能与化学稳定性皆有充足的实测资料。",
      },
    },
    Pd: {
      description: "钯是一种柔软、闪亮的银白色铂族金属。它对氢气具有惊人的吸收能力，是汽车触媒与电子产业的关键材料。",
      uses: ["汽车排气系统催化转化器", "多层陶瓷电容器（MLCC）", "珠宝制造（俗称的白K金合金成分）"],
      appearance: "常温下为柔软、具有极佳延展性的银白色金属。",
      reactions: [
        {
          equation: "Pd + H₂ ⇌ PdHₓ",
          description: "钯金属能像海绵一样吸收高达自身体积数百倍的氢气，并在受热时释出，这使其成为提纯氢气的完美薄膜材料。",
          conditions: "常温加压与加热",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "大块钯金属极为安全，但在催化剂形态下的高比表面积钯粉末若吸满氢气，接触空气极易发生自燃或爆炸。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁰⁶Pd",
          use: "稳定元素存在形式",
          description: "自然界中六种钯的稳定同位素中丰度最高的一种。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钯的氢气吸收热力学、催化效率与材料特性皆为高度完备的已实测资料。",
      },
    },
    Ag: {
      description: "银是一种柔软、具有极高光泽的白色过渡金属。在所有金属中，它拥有最高的导电率、导热率与可见光反射率。",
      uses: ["太阳能电池与电子元件的导电浆", "高级珠宝与餐具制造", "医疗抗菌与敷料材料"],
      appearance: "常温下为极具光泽的银白色柔软金属，长时间暴露于含硫空气会变黑。",
      lifeRole: "银金属对人体没有任何已知的生理功能；但银离子（Ag⁺）能穿透多数细菌的细胞壁并破坏其酶系统，具有极强的广效抗菌作用。",
      compounds: [
        {
          formula: "AgBr",
          name: "溴化银",
          description: "对光极为敏感的淡黄色固体，是传统黑白底片与X光摄影的感光材料。",
        },
        {
          formula: "AgNO₃",
          name: "硝酸银",
          description: "重要的化学实验试剂，也用于医疗杀菌与处理灼伤。",
        },
      ],
      reactions: [
        {
          equation: "4Ag + 2H₂S + O₂ → 2Ag₂S + 2H₂O",
          description: "银在空气中与微量的硫化氢气体反应，表面会生成黑色的硫化银，这就是银器随时间变黑发暗的原因。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "单质银安全无毒，但长期摄取或接触过量的银化合物与银纳米微粒，可能导致不可逆的“银质沉着症”，使皮肤永久呈现蓝灰色。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁰⁷Ag",
          use: "稳定元素存在形式",
          description: "银最丰富的稳定同位素，占自然界一半以上的比例。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "银的光学与电学极值特性、抗菌机制及化学变黑反应皆具备丰富的实测资料。",
      },
    },
    Cd: {
      description: "镉是一种极其柔软、具有微蓝色泽的银白色金属。尽管其化合物能产生极其鲜艳的颜料，但镉本身是一种积累性的剧毒元素。",
      uses: ["镍镉（Ni-Cd）充电电池", "核反应堆的中子吸收控制棒", "制造鲜艳不褪色的黄色与红色颜料（镉黄/镉红）"],
      appearance: "常温下为质地极软、带有些微蓝色光泽的银白色金属。",
      lifeRole: "镉及其化合物对所有已知生物均具剧毒。进入人体后它会取代骨骼中的钙与酶中的锌，导致极度疼痛的骨质软化（痛痛病）与肾脏衰竭。",
      compounds: [
        {
          formula: "CdS",
          name: "硫化镉",
          description: "极为鲜艳的黄色固体粉末，历史上曾是顶级艺术油画颜料（镉黄）的成分。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "镉及其化合物为已知的高危害人类致癌物，且会在人体与环境中长期积累无法代谢，应严格限制使用并避免任何接触。",
        },
      ],
      isotopes: [
        {
          notation: "¹¹⁴Cd",
          use: "稳定元素与核反应",
          description: "自然界中最丰富的镉同位素，具有极高的中子吸收能力。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "镉的合金特性与导致“痛痛病”的毒理学机制皆为科学与医学界严格验证的已实测资料。",
      },
    },
    In: {
      description: "铟是一种极为柔软、银白色的贫金属，弯折纯铟棒时会发出特殊的“锡鸣”清脆声响。它是现代触控科技不可或缺的核心材料。",
      uses: ["液晶显示器（LCD）与触控屏幕的透明导电膜", "无铅焊料合金与低熔点合金", "高温计温器与热界面材料填充物"],
      appearance: "常温下为极软、可以用指甲留下划痕的银白色金属。",
      compounds: [
        {
          formula: "ITO",
          name: "氧化铟锡",
          description: "一种能导电同时又透明的特殊混合氧化物，广泛应用于几乎所有智能手机的触控面板中。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "纯铟金属毒性低且安全，但在工业显示器制程中长期吸入氧化铟锡（ITO）粉尘，会导致极为严重的职业性肺部纤维化疾病。",
        },
      ],
      isotopes: [
        {
          notation: "¹¹⁵In",
          use: "工业应用材料",
          description: "占天然铟95%的极长半衰期微弱放射性同位素，其放射性弱到对人体无实际危害。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铟的物理延展性、光电薄膜电学数据及工业毒理皆有完备的实测资料。",
      },
    },
    Sn: {
      description: "锡是一种柔软、具有银白色光泽的贫金属。它不易氧化且抗腐蚀，自青铜时代以来即被人类广泛应用于器具与防锈。",
      uses: ["电子零件的无铅焊接金属", "钢铁表面的防锈镀层（如食品马口铁罐头）", "制造青铜合金（与铜结合）"],
      appearance: "常温下（白锡）为具有光泽的银白色柔软金属；在极低温下会碎裂成粉末状的灰锡。",
      lifeRole: "无机锡单质与常见化合物对人体毒性极低；但部分人造“有机锡”化合物曾被用作船底防污漆，对海洋生态具有强烈的毁灭性毒性，现已遭全球禁用。",
      compounds: [
        {
          formula: "SnO₂",
          name: "二氧化锡",
          description: "白色的固体，常用作陶瓷釉料的不透明剂与玻璃涂层。",
        },
        {
          formula: "SnCl₂",
          name: "氯化亚锡",
          description: "白色结晶，是化学工业中极为常见的强还原剂。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "常见的金属锡与无机锡化合物极度安全，但工业用有机锡化合物剧毒，需依毒性化学物质规范处理。",
        },
      ],
      isotopes: [
        {
          notation: "¹²⁰Sn",
          use: "稳定元素存在形式",
          description: "锡拥有多达十种稳定同位素（所有元素中最多的），而¹²⁰Sn是其中最丰富的一种。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锡的防锈性质、低温相变现象（锡疫）及有机锡毒理学皆为高度可靠的已实测资料。",
      },
    },
    Sb: {
      description: "锑是一种质脆、带有微蓝色光泽的银灰色类金属。它主要作为合金添加剂，能显著增加铅金属的硬度，也常与卤素结合制成阻燃剂。",
      uses: ["传统铅酸电池极板的合金硬化剂", "塑料与纺织品的阻燃剂（以氧化锑形式）", "半导体材料的掺杂物"],
      appearance: "常温下为具有极亮金属光泽、但质地极为脆弱易碎的银灰色固体。",
      compounds: [
        {
          formula: "Sb₂O₃",
          name: "三氧化二锑",
          description: "白色粉末，常与卤素阻燃剂配合使用，能大幅降低塑料与电子产品外壳的易燃性。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "锑金属粉尘与其多数化合物具中度至高度毒性，吸入或长期摄入会引起类似砷中毒的严重神经与呼吸道症状，不应在无防护下操作。",
        },
      ],
      isotopes: [
        {
          notation: "¹²¹Sb",
          use: "质谱分析与材料应用",
          description: "自然界中最丰富的锑稳定同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锑的合金硬化效能、阻燃化学机制与毒理学反应皆有明确的科学实测资料。",
      },
    },
    Te: {
      description: "碲是一种罕见、具备半导体特性的银白色类金属。它经常与金、铜、铅等矿石伴生，是现代绿能与热电产业的重要特殊材料。",
      uses: ["高效能薄膜太阳能电池（碲化镉）", "提高钢铁与铜合金的切削加工性能", "热电制冷芯片（致冷元件）的核心材料"],
      appearance: "常温下为质脆、具有明显金属光泽的银白色晶体固体。",
      lifeRole: "碲对人体无生理作用且具有毒性；极微量的碲化合物被吸入或接触皮肤后，人体会将其代谢为二甲基碲，导致呼吸与汗水散发长达数周的强烈大蒜恶臭。",
      compounds: [
        {
          formula: "CdTe",
          name: "碲化镉",
          description: "具有极佳光吸收能力的化合物，是薄膜太阳能电池吸收光能的核心层。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "碲的多数化合物具中度毒性且极度扰人，极微量暴露即会造成严重的“碲呼吸”（持久的蒜臭味），工业加工需有极佳的通风防护设备。",
        },
      ],
      isotopes: [
        {
          notation: "¹³⁰Te",
          use: "粒子物理学研究",
          description: "丰度最高的天然同位素，科学家常利用其研究罕见的双贝塔衰变现象。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "碲的半导体特性、热电材料热力学及人体代谢反应皆有广泛的实测资料。",
      },
    },
    I: {
      description: "碘是一种呈现紫黑色的卤素元素，微热时会升华成刺鼻的紫红色气体。它是最重的稳定卤素，对维持动物生命运作至关重要。",
      uses: ["医疗伤口消毒剂（如聚维酮碘与碘酒）", "食盐加碘以预防甲状腺肿大", "医学X光与电脑断层（CT）显影剂"],
      appearance: "常温下为带有微弱金属光泽的紫黑色晶体固体。",
      lifeRole: "单质碘蒸气具强烈刺激性与腐蚀性；但微量的碘离子（I⁻）是人体合成甲状腺激素不可或缺的关键元素，主导全身的基础代谢率与大脑发育。",
      compounds: [
        {
          formula: "KI",
          name: "碘化钾",
          description: "最常见的碘营养补充剂，也是核灾外泄时用于紧急保护甲状腺的储备药物。",
        },
        {
          formula: "AgI",
          name: "碘化银",
          description: "淡黄色固体，因其晶体结构类似冰，常被喷洒于云层中作为人造雨的凝结核。",
        },
      ],
      reactions: [
        {
          equation: "I₂ + 淀粉 → 蓝黑色络合物",
          description: "碘单质遇淀粉溶液会立刻呈现极深的蓝黑色，这是化学实验与生物学中最经典的检验反应。",
          conditions: "常温水溶液",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "固态碘单质具腐蚀性，其紫红色升华蒸气会强烈刺激眼睛与呼吸道黏膜；不可大量吞食或让皮肤长时间直接接触。",
        },
      ],
      isotopes: [
        {
          notation: "¹³¹I",
          use: "核医治疗与放射污染指标",
          description: "人工放射性同位素，医疗上用于精准破坏甲状腺癌细胞，同时也是核灾外泄初期最危险的电离辐射来源。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "碘的物理升华现象、人体甲状腺代谢机制与放射性同位素行为皆为医学与化学界完备的已实测资料。",
      },
    },
    Xe: {
      description: "氙是一种沉重、极为稀有的单原子惰性气体元素。虽然化学性质极度安定，但它是历史上第一个被证明能与其他元素形成化合物的惰性气体。",
      uses: ["高阶汽车与电影放映机的高亮度放电灯", "医学上安全但昂贵的全身麻醉剂", "太空载具与人造卫星的离子推进器推进剂"],
      appearance: "常温下为无色、无味的气体；在真空管中通电激发时会发出强烈的蓝白色或淡紫色光辉。",
      lifeRole: "氙气对人体完全无毒且不参与任何生化反应，但在吸入后能与中枢神经细胞受体产生物理作用，达到极佳的麻醉效果。",
      compounds: [
        {
          formula: "XeF₄",
          name: "四氟化氙",
          description: "历史性的人造化合物，证明了“惰性气体绝对不反应”的传统理论存在例外。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "氙气本身无毒且化学性质极为安全，但因其密度极大，在密闭或低洼空间大量泄漏会迅速沉积并排挤氧气，造成无预警的窒息死亡风险。",
        },
      ],
      isotopes: [
        {
          notation: "¹³²Xe",
          use: "物理学基础研究",
          description: "自然界中最丰富的稳定氙同位素，常被用于暗物质探测器的靶材。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "氙的光谱发光特性、惰性气体化学反应及医疗麻醉效果皆具备明确权威的实测资料。",
      },
    },
    Cs: {
      description: "铯是一种极为柔软的金色碱金属，化学性质极端活泼。它是现代科学中定义国际标准时间（秒）的关键元素。",
      uses: ["高精度原子钟", "光电倍增管与光电池的感光材料", "石油探勘的钻井液（以甲酸铯形式）"],
      appearance: "常温下为带有金色光泽的极软金属，略高于室温（约28.5°C）即融化为液态。",
      lifeRole: "铯金属遇水会发生剧烈爆炸；铯离子（Cs⁺）在人体内无已知功能，但其化学性质类似钾，微量摄入可随代谢排出，不过其放射性同位素则会对健康造成严重威胁。",
      compounds: [
        {
          formula: "CsCl",
          name: "氯化铯",
          description: "易溶于水的盐类，广泛应用于离心分离DNA等大分子的生物化学实验中。",
        },
      ],
      reactions: [
        {
          equation: "2Cs + 2H₂O → 2CsOH + H₂",
          description: "铯遇水会发生极度猛烈的爆炸反应，即使在极低温下（-116°C）也能与冰块发生爆炸。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "铯金属极易与水、空气中的氧气与水分发生剧烈反应并引发强烈爆炸；必须保存在真空或惰性气体中，绝对不应自行操作。",
        },
      ],
      isotopes: [
        {
          notation: "¹³³Cs",
          use: "国际时间标准基准",
          description: "自然界唯一的稳定同位素，其原子共振频率被用来定义一秒的长度。",
        },
        {
          notation: "¹³⁷Cs",
          use: "医疗放射源与工业测厚仪",
          description: "核裂变产生的危险放射性同位素，是核灾发生后长期污染环境的主要核素之一。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铯的原子钟共振频率、极端化学反应性及放射性危害皆有极为精密且完备的实测资料。",
      },
    },
    Ba: {
      description: "钡是一种柔软的银白色碱土金属，化学性质十分活泼。它在燃烧时会发出明亮而独特的苹果绿色火焰。",
      uses: ["医疗消化道X光显影剂（以硫酸钡形式）", "制造绿色烟火与照明弹", "真空管中的除气剂（吸收残余气体）"],
      appearance: "常温下为柔软的银白色金属，暴露在空气中会迅速氧化变暗。",
      lifeRole: "可溶性钡离子（Ba²⁺）对人体具有剧毒，会引起严重的肌肉痉挛与心律不整；但医疗上服用的“钡餐”因极难溶于水与胃酸，无法被人体吸收，故十分安全。",
      compounds: [
        {
          formula: "BaSO₄",
          name: "硫酸钡",
          description: "极难溶于水与酸的白色固体，是医学上肠胃道X光显影的主要成分。",
        },
        {
          formula: "BaCO₃",
          name: "碳酸钡",
          description: "具有毒性的白色沉淀物，过去曾被广泛用作杀鼠剂及陶瓷釉料。",
        },
      ],
      reactions: [
        {
          equation: "Ba + 2H₂O → Ba(OH)₂ + H₂",
          description: "钡金属与水发生反应，生成强碱性的氢氧化钡溶液并释放出易燃的氢气。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "钡金属单质易与空气及水分起火反应；多数可溶性钡化合物（如氯化钡）具剧毒，摄入微量即可致命，不应在无专业指导下操作。",
        },
      ],
      isotopes: [
        {
          notation: "¹³⁸Ba",
          use: "基础科学与环境追踪",
          description: "自然界中最丰富的钡稳定同位素，约占七成比例。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钡的医学显影机制、化学反应性及毒理学特征皆为医学与化学界极为明确的已实测资料。",
      },
    },
    La: {
      description: "镧是一种柔软、具有延展性的银白色金属，是镧系元素的第一个成员。它在空气中极易氧化，是许多现代光学与电池科技的重要基础材料。",
      uses: ["镍氢电池（NiMH）的负极材料", "制造高折射率的光学相机镜头", "打火机打火石（与铈的混合金属）"],
      appearance: "常温下为柔软的银白色金属，暴露空气中会迅速变暗。",
      lifeRole: "镧单质与离子在人体内没有已知的生理功能；摄入过量可溶性镧盐可能导致肝脏与细胞毒性。",
      compounds: [
        {
          formula: "La₂O₃",
          name: "氧化镧",
          description: "白色固体粉末，能大幅提升玻璃的折射率，广泛用于天文望远镜与相机的高阶镜头。",
        },
      ],
      reactions: [
        {
          equation: "4La + 3O₂ → 2La₂O₃",
          description: "镧在空气中极易氧化，细小的镧粉末在室温下即可自燃，生成白色的氧化镧。",
          conditions: "常温或微热",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "大块金属镧毒性低微，但在机械加工时产生的镧金属粉末极易在空气中自燃，应防范粉尘火灾。",
        },
      ],
      isotopes: [
        {
          notation: "¹³⁹La",
          use: "核磁共振（NMR）分析",
          description: "自然界几乎100%的稳定镧同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "镧的化学反应性、光学折射特性及电池化学数据皆具备完备的实测资料。",
      },
    },
    Ce: {
      description: "铈是稀土元素中含量最丰富的一种，化学性质十分活泼。它具有在不同氧化态（+3与+4）间自由转换的独特能力，使其成为绝佳的催化与抛光材料。",
      uses: ["汽车排气系统的催化转化器", "玻璃与光学镜片的精密抛光粉（以二氧化铈形式）", "打火石合金（混合稀土金属）"],
      appearance: "常温下为铁灰色的延展性金属，接触空气极易氧化剥落。",
      compounds: [
        {
          formula: "CeO₂",
          name: "二氧化铈",
          description: "淡黄色或白色的粉末，是玻璃抛光工业的标准材料，也用于自我清洁烤箱的内壁涂层。",
        },
      ],
      reactions: [
        {
          equation: "Ce + O₂ → CeO₂",
          description: "金属铈在空气中摩擦或受热时极易起火燃烧，生成稳定的二氧化铈。",
          conditions: "摩擦或受热",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "铈金属粉末或碎屑极其容易自燃（发火性金属）；切削或打磨铈时极易产生高温火花。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁴⁰Ce",
          use: "核裂变产物追踪",
          description: "最丰富的铈稳定同位素，占自然界近九成比例。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铈的氧化还原催化能力与燃烧特性皆有极为详细的工业与科学实测资料。",
      },
    },
    Pr: {
      description: "镨是一种柔软的银黄色稀土金属，能赋予玻璃与珐琅独特的纯黄色或绿色。它主要用于制造强力磁铁与过护目镜等特殊光学材料。",
      uses: ["制造电焊与吹玻璃护目镜的迪迪姆（Didymium）玻璃", "与钕混合制造高强度永磁铁", "航空发动机的高温合金添加剂"],
      appearance: "常温下为带有银黄色光泽的金属，在空气中会缓慢生成绿色的易碎氧化层。",
      compounds: [
        {
          formula: "Pr₆O₁₁",
          name: "十一氧化六镨",
          description: "自然环境下最稳定的镨氧化物，呈现深棕黑色，可用于陶瓷着色剂。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "金属镨的粉末具有引发火灾的风险；可溶性镨盐摄入具有轻度至中度毒性。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁴¹Pr",
          use: "核磁共振研究",
          description: "自然界唯一存在的稳定镨同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "镨的光学吸收光谱与磁性合金应用均有明确的科学实测资料。",
      },
    },
    Nd: {
      description: "钕是一种亮银色金属，是制造目前已知最强力永久磁铁的核心元素。它极大地推动了微型马达、风力发电与现代声学技术的革命。",
      uses: ["制造极高强度的钕铁硼（NdFeB）永久磁铁", "固态激光器（如Nd:YAG激光）", "高阶耳机与手机扬声器的驱动单体"],
      appearance: "常温下为亮银色金属，极易被空气氧化，通常需镀上镍或其他保护层以防腐蚀。",
      compounds: [
        {
          formula: "Nd₂Fe₁₄B",
          name: "钕铁硼合金",
          description: "目前商业化最强的永磁材料，以极小的体积提供惊人的磁力。",
        },
        {
          formula: "Nd₂O₃",
          name: "氧化钕",
          description: "淡蓝色的粉末，能赋予玻璃美丽的紫色并吸收有害眩光。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "钕金属粉末极易燃烧；大型钕磁铁吸力极其猛烈，若手指夹在两块磁铁间可能导致骨折等严重机械性伤害。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁴²Nd",
          use: "地球化学与陨石定年",
          description: "钕最丰沛的同位素之一，常用于追溯地球早期演化史。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钕铁硼的强大磁学数据与激光发光特性皆具备无可争议的实测资料。",
      },
    },
    Pm: {
      description: "钷是镧系元素中唯一没有稳定同位素的放射性金属。在自然界中几乎不存在，主要透过核反应堆中铀的裂变来人工合成。",
      uses: ["核能微型电池（如太空探测器电源）", "测量造纸与塑料薄膜厚度的放射源", "特殊发光涂料（历史用途，现多被氚取代）"],
      appearance: "理论上为具金属光泽的固体，但因具强烈放射性与衰变热，肉眼观察其单质极为困难且危险。",
      safety: [
        {
          level: "高风险",
          description: "钷的所有同位素皆具高度放射性，衰变时会释放贝塔（β）射线并引发有害的二次X射线（制动辐射）；只能在具辐射防护的实验室操作。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁴⁷Pm",
          use: "核能电池与测厚仪",
          description: "半衰期约2.6年的放射性同位素，是最具商业与工业应用价值的钷核素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钷的放射性衰变特性及核物理数据皆为人工合成观测的已实测资料。",
      },
    },
    Sm: {
      description: "钐是一种银白色的稀土金属，具有优异的耐高温与抗退磁能力。它是第一代实用稀土永久磁铁（钐钴磁铁）的关键成分。",
      uses: ["钐钴（SmCo）高温永久磁铁", "核反应堆的控制棒与中子吸收剂", "特定骨癌转移的放射性同位素靶向治疗"],
      appearance: "常温下为具光泽的银白色金属固体。",
      compounds: [
        {
          formula: "SmCo₅",
          name: "钐钴合金",
          description: "即使在高温（可达300°C以上）环境下，仍能保持极强磁力的永久磁铁，广泛用于军工与航天马达。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "钐金属单质无明显毒性，但粉末易燃；其可溶性盐类若大量进入人体可能干扰钙质代谢。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁵²Sm",
          use: "中子吸收研究",
          description: "稳定且丰度最高的钐同位素，具有极大的中子吸收截面。",
        },
        {
          notation: "¹⁵³Sm",
          use: "放射性医疗药物",
          description: "发射贝塔射线的短半衰期同位素，被用于缓解晚期骨癌患者的极度疼痛。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钐钴合金的磁性表现、耐温极限与医疗应用皆具备丰富的实测资料。",
      },
    },
    Eu: {
      description: "铕是镧系金属中化学反应性最强的元素，也是极为重要的发光材料。它在现代显示科技中，提供了最关键纯粹的“红色”与“蓝色”荧光。",
      uses: ["电视、手机与电脑屏幕的红光与蓝光荧光粉", "欧元纸币的防伪荧光印刷", "低能耗LED照明灯具"],
      appearance: "常温下为柔软的铅灰色金属，极易氧化变黑。",
      compounds: [
        {
          formula: "Eu₂O₃",
          name: "氧化铕",
          description: "白色带粉红色的粉末，在紫外线激发下能发出鲜艳的红光，是旧式显像管电视彩色化的最大功臣。",
        },
      ],
      reactions: [
        {
          equation: "2Eu + 2H₂O → 2Eu(OH)₂ + H₂",
          description: "金属铕极度活泼，在水中的反应类似钙金属，会剧烈释出易燃的氢气。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "铕金属单质遇水或湿气会剧烈反应起火；必须封装在矿物油或惰性气体中保存。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁵¹Eu",
          use: "核物理研究",
          description: "自然界中极微弱的放射性同位素（半衰期极长，视同稳定）。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铕的光学激发光谱与极端化学活泼性均为材料化学的已实测资料。",
      },
    },
    Gd: {
      description: "钆是一种银白色的磁性稀土金属，具有所有稳定元素中最高的中子吸收截面。它在常温附近表现出极为独特的磁热效应。",
      uses: ["医学磁共振成像（MRI）静脉显影剂", "核反应堆的紧急停机控制棒", "磁热冷冻技术（无需压缩冷媒的冷却系统）"],
      appearance: "常温下为具有金属光泽的银白色固体。",
      lifeRole: "游离的钆离子（Gd³⁺）对人体具高毒性，会干扰钙离子通道；但在MRI显影剂中，钆被络合剂牢牢包裹，多数情况下能安全排出体外。",
      compounds: [
        {
          formula: "Gd-DOTA",
          name: "大环钆螯合物",
          description: "一种安全的医学显影剂分子，利用钆的顺磁性来大幅提升核磁共振影像的对比度。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "纯钆金属粉末具易燃性；特定肾功能不全患者若施打钆显影剂，可能引发严重的肾源性系统性纤维化（NSF）。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁵⁷Gd",
          use: "核工业中子吸收",
          description: "自然界中吸收热中子能力最强的稳定同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钆的磁性、中子截面数据及医学造影代谢机制皆具备高度严谨的实测资料。",
      },
    },
    Tb: {
      description: "铽是一种柔软的银灰色金属。与铕类似，它主要活跃于光电领域，能提供显示器与照明设备中极为纯粹的“绿色”荧光。",
      uses: ["显示器与荧光灯管的绿光荧光粉", "声纳与致动器的超磁致伸缩材料（Terfenol-D）", "固态电子元件的掺杂物"],
      appearance: "常温下为具有延展性的银灰色金属，可以用刀切割。",
      compounds: [
        {
          formula: "Tb₄O₇",
          name: "七氧化四铽",
          description: "深褐色粉末，是商业上最常见的铽化合物，也是制备绿色发光材料的前驱物。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "铽金属粉末极易燃烧；与多数稀土金属一样，微量粉尘长期吸入可能对肺部产生刺激。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁵⁹Tb",
          use: "材料物理与光学应用",
          description: "自然界唯一存在的稳定铽同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铽的发光光谱、磁致伸缩物理变化皆有明确的科学实测资料。",
      },
    },
    Dy: {
      description: "镝是一种极易被磁化的银白色稀土金属。它能大幅提升钕磁铁在高温下的抗退磁能力，是电动车与风力发电机马达不可或缺的战略元素。",
      uses: ["耐高温钕铁硼磁铁的关键添加剂", "核反应堆的控制棒材料", "超磁致伸缩合金（Terfenol-D）的核心成分"],
      appearance: "常温下为闪亮的银白色金属，暴露在空气中会缓慢失去光泽。",
      compounds: [
        {
          formula: "Dy₂O₃",
          name: "氧化镝",
          description: "白色粉末，主要用于陶瓷与特殊磁性材料的添加物。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "镝金属粉末若遇火花极易燃烧；其可溶性盐类对人体具低微毒性。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁶⁴Dy",
          use: "磁学与核物理研究",
          description: "自然界中最丰富的镝稳定同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "镝对永磁材料的抗退磁提升效果（矫顽力）及磁致伸缩形变数据皆有大量的实测资料。",
      },
    },
    Ho: {
      description: "钬是一种相对柔软的银白色金属，拥有所有天然元素中最高的磁矩。这使其在创造极端强磁场的科学领域无可取代。",
      uses: ["医疗用钬激光（用于无创碎石与前列腺手术）", "制造产生超强磁场的特殊磁极片", "核反应堆的可燃毒物（中子吸收剂）"],
      appearance: "常温下为银白色金属，在干燥空气中相对稳定，但在高温下极易氧化。",
      compounds: [
        {
          formula: "Ho₂O₃",
          name: "氧化钬",
          description: "淡黄色的粉末，在不同光源下会呈现奇妙的颜色变化，常被用作光学分光光度计的校准标准。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "钬金属粉尘具有火灾与爆炸风险；大量接触钬化合物可能对人体代谢造成轻度干扰。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁶⁵Ho",
          use: "极端磁场与光学标准研究",
          description: "自然界唯一存在的稳定钬同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钬的极高磁矩与激光医疗手术（碎石作用）均具备临床与物理的已实测资料。",
      },
    },
    Er: {
      description: "铒是一种银白色的稀土金属，其最著名的特征是氧化物能呈现美丽的粉红色。它在长距离光纤通讯网络中扮演光信号放大的关键角色。",
      uses: ["光纤放大器（EDFA）的核心掺杂物", "医疗用铒激光（精准的皮肤美容与牙科手术）", "玻璃、瓷器与立方氧化锆的粉红色发色剂"],
      appearance: "常温下为闪亮且具延展性的银白色金属。",
      compounds: [
        {
          formula: "Er₂O₃",
          name: "氧化铒",
          description: "具有美丽粉红色的固体粉末，是光学通讯网络中能吸收特定波长并将信号放大的关键材料。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "金属铒的粉末在高温下易燃；化合物毒性极低，但仍应避免吸入粉尘。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁶⁶Er",
          use: "核物理与材料研究",
          description: "自然丰度最高的铒稳定同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铒在光纤网络中的能级跃迁放大效应及激光手术切割深度皆有精确的实测资料。",
      },
    },
    Tm: {
      description: "铥是地球上最稀有、最昂贵的稀土金属之一。尽管极度罕见，它在特殊激光与便携式X光设备中具有无可取代的地位。",
      uses: ["医疗手术用的铥激光（切割组织精准且止血极佳）", "便携式X光机的微型辐射源（经核活化后）", "欧元纸币的高阶防伪荧光特征"],
      appearance: "常温下为带有明亮光泽的银灰色金属。",
      compounds: [
        {
          formula: "Tm₂O₃",
          name: "氧化铥",
          description: "淡绿色粉末，经过反应堆中子照射后，会转变为发射X射线的放射源。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "单质铥粉末具火灾危险；其可溶性化合物微毒，人工放射性同位素则有明确的辐射危害。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁶⁹Tm",
          use: "工业与医疗微型X射线源（经活化为¹⁷⁰Tm）",
          description: "自然界唯一的稳定铥同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铥的激光激发光谱与医学切割热效应皆具备详细的临床与物理实测资料。",
      },
    },
    Yb: {
      description: "镱是一种柔软的银白色稀土金属，具有在压力下电阻率急剧增加的奇特物理性质。它广泛应用于工业应力传感与高能光纤激光。",
      uses: ["高功率工业切割用的镱掺杂光纤激光", "不锈钢的晶粒细化合金添加物", "监测地震或爆炸冲击波的应力传感器"],
      appearance: "常温下为具有明亮光泽、柔软的银白色金属。",
      compounds: [
        {
          formula: "Yb₂O₃",
          name: "氧化镱",
          description: "白色粉末，是高功率固态激光器与光纤激光中的重要光学掺杂物。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "镱金属粉尘极易自燃，且镱的多数化合物对人体有高度刺激性，长期接触有致畸胎疑虑。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁷⁴Yb",
          use: "激光物理与材料科学",
          description: "自然界中最丰沛的镱稳定同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "镱的光纤激光输出效能及高压下的电阻变化皆为材料物理界高度确认的已实测资料。",
      },
    },
    Lu: {
      description: "镥是镧系元素中最后一个、最重且最坚硬的金属。由于提炼极度困难且价格极端昂贵，其应用主要集中在少数高阶的科学与医学领域。",
      uses: ["正电子发射断层扫描（PET）的高效闪烁体晶体（如LSO）", "特定癌症的靶向放射性同位素治疗", "石油裂解工业的高阶催化剂"],
      appearance: "常温下为坚硬、致密的银白色金属。",
      compounds: [
        {
          formula: "Lu₂SiO₅",
          name: "硅酸镥（LSO）",
          description: "优异的闪烁体材料，能将高能伽马射线转换为可见光，极大提升了PET扫描仪的分辨率。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "金属镥粉末如同多数稀土金属一样极易燃烧；其化合物毒性低，但自然界中含有微弱的放射性同位素。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁷⁵Lu",
          use: "高阶晶体材料研究",
          description: "自然界中最丰富的镥稳定同位素。",
        },
        {
          notation: "¹⁷⁷Lu",
          use: "精准靶向放射治疗",
          description: "极为重要的人工医学同位素，能附着于特定癌细胞上并释放短射程的放射线将其精准摧毁。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "镥晶体的闪烁效应及人工同位素的靶向抗癌机制皆有极为严谨的临床与医学实测资料。",
      },
    },
    Hf: {
      description: "铪是一种闪亮的银灰色过渡金属，化学性质极其类似锆。它最突出的特点是具有极高的吸收热中子能力，因此在核能工业中占有重要地位。",
      uses: ["核反应堆的控制棒（特别是核子潜艇）", "制造极高熔点合金", "高阶半导体芯片中的高介电常数（High-k）绝缘层"],
      appearance: "常温下为具有明亮金属光泽的银灰色金属。",
      compounds: [
        {
          formula: "HfO₂",
          name: "二氧化铪",
          description: "耐高温的白色粉末，广泛用于先进集成电路中以减少微型晶体管的漏电流。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "铪金属单质安全，但在机械加工过程中产生的微细粉末具有高易燃性，极易自燃。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁸⁰Hf",
          use: "核物理研究",
          description: "自然界中最丰富的铪稳定同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铪的核物理截面数据与半导体材料特性皆为高度完备的实测资料。",
      },
    },
    Ta: {
      description: "钽是一种坚硬、沉重且具极高延展性的银灰色过渡金属。它对化学腐蚀具有极强的抵抗力，且不会引起人体免疫排斥。",
      uses: ["智能手机与电子设备中的钽质电容器", "医疗植入物（如人工骨骼与骨板）", "制造实验室的抗腐蚀仪器"],
      appearance: "常温下为具有延展性的银灰色金属，表面通常有一层极致密且稳定的深蓝色氧化膜。",
      lifeRole: "钽金属对人体完全无毒且具有极佳的生物相容性，被广泛用于骨科与外科手术植入物而不会引发免疫反应。",
      compounds: [
        {
          formula: "Ta₂O₅",
          name: "五氧化二钽",
          description: "白色固体，极度稳定，是制造微型高容量钽质电容器的核心介电材料。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "块状钽金属极为安全；但在特殊制程下产生的极细粉末具火灾危险。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁸¹Ta",
          use: "核子物理与医学材料研究",
          description: "自然界几乎唯一的稳定同位素（占99.98%以上）。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钽的电容器介电常数及生物相容性皆为经过长期临床与工业验证的已实测资料。",
      },
    },
    W: {
      description: "钨是一种极为坚硬的灰白色过渡金属，拥有所有天然元素中最高的熔点（3422°C）。它的密度极高，几乎与黄金相同。",
      uses: ["传统白炽灯泡的钨丝", "金属切削刀具（碳化钨）", "穿甲弹的高密度动能穿透体"],
      appearance: "纯钨为具有钢灰色光泽的金属；极难加工，常以粉末冶金方式制成极为坚硬的合金。",
      compounds: [
        {
          formula: "WC",
          name: "碳化钨",
          description: "硬度仅次于钻石的极端坚硬材料，广泛应用于钻头、车刀与圆珠笔尖。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "纯钨极为安全；但工业加工时长期吸入碳化钨及伴随的钴粉尘，会引发严重的职业性硬金属肺病。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁸⁴W",
          use: "物理学基础研究",
          description: "自然界中最丰富的钨稳定同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钨的极端高温热力学数据与合金硬度皆有极为详细的工程实测资料。",
      },
    },
    Re: {
      description: "铼是一种极其罕见、沉重且熔点极高的银白色过渡金属（熔点仅次于钨与碳）。它极大地提升了高温合金的抗蠕变能力，是航空引擎的战略材料。",
      uses: ["航空与火箭燃气涡轮引擎的高温单晶叶片", "高辛烷值无铅汽油的提炼催化剂", "钨铼合金热电偶（测量极高温）"],
      appearance: "常温下为坚硬的银白色金属。",
      safety: [
        {
          level: "注意",
          description: "铼金属毒性极微，但与所有重金属粉末一样，粉尘状态下应避免吸入与防范火灾。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁸⁷Re",
          use: "地质年代测定",
          description: "占天然铼六成以上的微弱放射性同位素，半衰期超过宇宙年龄，可用于铼-锇定年法测定古老矿物。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铼的单晶叶片高温抗蠕变数据与催化特性皆有高度可靠的实测资料。",
      },
    },
    Os: {
      description: "锇是一种坚硬、易碎且带有些微蓝色的白金属。它是自然界中密度最高的元素，且在室温下会缓慢释放出具有剧毒的挥发性氧化物。",
      uses: ["高质量钢笔笔尖的耐磨合金点", "显微镜生物样本的染色剂（以四氧化锇形式）", "指纹鉴识技术"],
      appearance: "常温下为坚硬且极其沉重的蓝白色金属，粉末状锇在空气中会散发出刺鼻的萝卜臭味（因表面氧化）。",
      compounds: [
        {
          formula: "OsO₄",
          name: "四氧化锇",
          description: "一种极易挥发的淡黄色固体，蒸气具剧毒，能将生物组织中的脂肪染成黑色，常应用于电子显微镜制样。",
        },
      ],
      reactions: [
        {
          equation: "Os + 2O₂ → OsO₄",
          description: "锇粉末在室温下即会与氧气反应，缓慢生成具强烈刺激性气味与剧毒的四氧化锇气体。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "锇金属本身无毒，但其表面生成的四氧化锇蒸气具高度挥发性与剧毒，微量接触眼睛即可导致失明，极度危险。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁹²Os",
          use: "地球化学追踪",
          description: "自然界中最丰富的锇稳定同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锇的极端密度物理极值与四氧化锇的毒理学皆为科学界明确的已实测资料。",
      },
    },
    Ir: {
      description: "铱是一种极其坚硬、脆且沉重的银白色过渡金属，密度仅次于锇。它是抗腐蚀性最强的元素，甚至不溶于能溶解黄金的王水。",
      uses: ["制造顶级火花塞的电极", "高阶罗盘与仪器的耐磨轴承", "度量衡标准原器（如早期的国际公尺与公斤原器合金）"],
      appearance: "常温下为极亮、坚硬易碎的银白色金属。",
      compounds: [
        {
          formula: "IrO₂",
          name: "二氧化铱",
          description: "黑色固体，常用作工业电解制程中极耐腐蚀的阳极材料。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "大块铱金属极度惰性且安全，但某些人工放射性铱同位素具有极强辐射，曾引发严重的辐射外泄事故。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁹³Ir",
          use: "同位素化学研究",
          description: "自然界丰度最高的稳定同位素。",
        },
        {
          notation: "¹⁹²Ir",
          use: "工业射线探伤与近珀放射治疗",
          description: "人工放射性同位素，释放强烈的伽马射线，广泛用于检查管线焊缝及体内肿瘤放疗。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铱的极端抗腐蚀数据及地球化学特征（如白垩纪灭绝事件的地层铱异常）皆为明确的实测资料。",
      },
    },
    Pt: {
      description: "铂（俗称白金）是一种沉重、可延展且极为稀有的银白色贵金属。它具有卓越的抗腐蚀性与强大的催化能力，价值常与黄金比肩。",
      uses: ["汽车排气触媒转化器", "高级珠宝首饰", "化学工业与氢燃料电池的催化剂"],
      appearance: "常温下为闪亮、具有极佳延展性的银白色金属。",
      lifeRole: "铂金属单质对人体无生理作用且无毒；但某些铂的配位化合物被发现能强烈抑制细胞分裂，成为重要的抗癌药物。",
      compounds: [
        {
          formula: "PtCl₂(NH₃)₂",
          name: "顺铂（Cisplatin）",
          description: "一种极为著名的化学治疗药物，能干扰癌细胞的DNA复制，广泛用于治疗睾丸癌等多种恶性肿瘤。",
        },
      ],
      reactions: [
        {
          equation: "2CO + O₂ → 2CO₂",
          description: "在汽车排气管中，铂金属作为触媒能极大降低反应活化能，将有毒的一氧化碳迅速氧化为二氧化碳。",
          conditions: "铂催化剂与高温",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "金属铂本身极为安全；但部分铂的可溶性盐类可能引发强烈的呼吸道过敏反应，抗癌药物顺铂则具有严重的肾脏副作用。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁹⁵Pt",
          use: "核磁共振研究",
          description: "自然界中最常见的铂同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铂的催化机制与顺铂化疗的药理数据皆有长期的工业与临床医学实测资料。",
      },
    },
    Au: {
      description: "金是一种极度柔软、沉重且具耀眼黄色光泽的贵金属。它是人类最古老的财富象征，其极佳的延展性与极强的抗腐蚀性在现代科技中同样无可取代。",
      uses: ["金融储备与高级珠宝首饰", "智能手机与电脑芯片的防氧化电接点", "太空衣与人造卫星的红外线防护反射涂层"],
      appearance: "常温下为柔软、极具光泽的深黄色金属，永不生锈变色。",
      lifeRole: "纯金对人体完全无毒且无法被消化，常被用作食品装饰（金箔）；某些极少数的黄金化合物偶尔被用于治疗严重的类风湿性关节炎。",
      compounds: [
        {
          formula: "HAuCl₄",
          name: "氯金酸",
          description: "将黄金溶解于王水后生成的黄色结晶化合物，是电镀金及制备纳米金粒子的前驱物。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "纯金属黄金极度安全无毒；但用于开采提炼黄金的氰化物制程与汞齐法具极高危害性，常造成严重环境污染。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁹⁷Au",
          use: "物理标准与材料科学",
          description: "自然界唯一存在的稳定黄金同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "黄金的抗腐蚀热力学、极端延展性及电学数据皆为历史最悠久且完备的已实测资料。",
      },
    },
    Hg: {
      description: "汞（俗称水银）是常温常压下唯一呈现液态的金属元素。它非常沉重，具有银白色的闪亮外观与高表面张力，但同时也是一种积累性神经剧毒。",
      uses: ["传统体温计与气压计（多已淘汰）", "荧光灯与节能灯管的发光气体（微量）", "补牙用的银粉（汞齐合金）"],
      appearance: "常温下为沉重、极具流动性的银白色闪亮液体，极易碎裂成细小球体。",
      lifeRole: "汞对所有生物均无生理功能且具强烈神经毒性。环境中的无机汞会被微生物转化为脂溶性的“甲基汞”，透过食物链（特别是深海鱼类）在人体内积累，严重破坏中枢神经。",
      compounds: [
        {
          formula: "HgS",
          name: "硫化汞",
          description: "自然界中极鲜艳的红色矿物（辰砂），古代常作为朱砂颜料使用。",
        },
        {
          formula: "CH₃Hg⁺",
          name: "甲基汞",
          description: "有机汞离子，是环境污染与食物链积累中毒（如日本水俣病）的主要致命物质。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "液态汞在室温下会挥发出无色无味的剧毒蒸气，若不慎打破水银温度计，绝对不可使用吸尘器清理；多数汞化合物对中枢神经与肾脏造成不可逆的永久破坏。",
        },
      ],
      isotopes: [
        {
          notation: "²⁰²Hg",
          use: "物理基础研究",
          description: "自然界中最丰富的汞稳定同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "汞的蒸气压物理特性、合金（汞齐）反应及甲基汞毒理学皆有极为惨痛的历史实测资料。",
      },
    },
    Tl: {
      description: "铊是一种质地极软的灰白色贫金属。它曾被广泛用作杀鼠剂，但由于其无色无味且对人体具有极其猛烈的剧毒，现已被全球多数国家严格管制。",
      uses: ["特殊光学红外线穿透玻璃", "高温超导材料研究", "医学心肌造影（以放射性铊-201形式）"],
      appearance: "常温下为极软、类似铅的灰白色金属，暴露空气中会迅速氧化失去光泽。",
      compounds: [
        {
          formula: "Tl₂SO₄",
          name: "硫酸铊",
          description: "无色无味的剧毒晶体，历史上曾是极为致命的杀虫剂与毒鼠强的主要成分。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "铊及其化合物为极端猛烈的神经与细胞毒物，摄入微量即会导致剧烈神经痛、严重脱发与器官衰竭，绝不应在非专业规范下接触。",
        },
      ],
      isotopes: [
        {
          notation: "²⁰³Tl",
          use: "稳定同位素标记",
          description: "占天然铊近三成的稳定同位素。",
        },
        {
          notation: "²⁰¹Tl",
          use: "心脏核医学造影",
          description: "发射特定射线的人工放射性同位素，被用于评估心脏肌肉的血液灌注状况。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铊的极端毒性机转及医疗放射造影应用均为严格规范的已实测资料。",
      },
    },
    Pb: {
      description: "铅是一种沉重、柔软且具延展性的蓝灰色贫金属。尽管其拥有极佳的工业与防辐射效能，但因其严重的积累性神经毒性，正逐渐被逐步淘汰于日常用品中。",
      uses: ["汽车的铅酸蓄电池", "医疗X光与核能设施的辐射防护屏蔽", "高压地下电缆的防水保护层"],
      appearance: "常温下为极柔软的暗蓝灰色金属，切开时呈现亮银色，但会迅速氧化变暗。",
      lifeRole: "铅对生物体无任何已知益处。它能轻易穿透血脑屏障，干扰血红素合成与神经传导；儿童对铅毒极度敏感，微量暴露即会造成永久性的智力损害。",
      compounds: [
        {
          formula: "PbO",
          name: "氧化铅",
          description: "黄色粉末，广泛用于制造铅酸电池与历史悠久的铅水晶玻璃。",
        },
        {
          formula: "Pb(C₂H₅)₄",
          name: "四乙基铅",
          description: "曾经广泛添加于汽油中的抗爆震剂，是20世纪造成全球性铅污染与健康灾难的元凶，现已全面禁用。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "铅及其化合物是严重的积累性神经毒物。应绝对避免儿童接触老旧房屋剥落的含铅油漆，且旧式含铅水管会导致饮用水污染。",
        },
      ],
      isotopes: [
        {
          notation: "²⁰⁸Pb",
          use: "放射性定年终点",
          description: "最重且极度稳定的铅同位素，是自然界中钍与铀放射性衰变链的最终稳定产物。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铅的辐射屏蔽物理、电化学反应与严重的神经毒理学皆有历史极为丰富的实测资料。",
      },
    },
    Bi: {
      description: "铋是一种脆性、带有独特粉红色泽的白金属。它是所有重金属中极少数对人体几乎无毒的元素，常被用作铅的环保替代品。",
      uses: ["胃肠药的有效成分（次水杨酸铋）", "消防洒水头与保险丝的低熔点易熔合金", "无铅焊料与无铅子弹的替代材料"],
      appearance: "常温下为具光泽的银白色金属，略带微粉红色；冷却时会形成极其美丽的彩虹色阶梯状晶体（因表面氧化膜干涉）。",
      lifeRole: "铋金属与多数化合物极其安全，甚至被广泛制成非处方药（如Pepto-Bismol）用以舒缓胃灼热与消化不良，且能辅助杀灭幽门螺旋杆菌。",
      compounds: [
        {
          formula: "C₇H₅BiO₄",
          name: "次水杨酸铋",
          description: "常见肠胃成药的粉红色液体成分，能有效保护胃黏膜。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "铋是已知最安全的重金属；但长期过量服用铋剂药物偶尔会引起轻微的黑舌与黑便（无害现象）。",
        },
      ],
      isotopes: [
        {
          notation: "²⁰⁹Bi",
          use: "物理学衰变极限研究",
          description: "曾被认为是自然界最重的稳定同位素，后被证实具有极其微弱的放射性（半衰期比宇宙年龄长十亿倍以上），实际上绝对安全。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铋的低温相变、安全毒理及医疗药效均为成熟的临床与物理实测资料。",
      },
    },
    Po: {
      description: "钋是一种极端罕见、具有极强放射性的类金属元素，由居里夫人所发现。它是自然界中毒性最强的物质之一。",
      uses: ["消除工业静电的静电刷（历史用途）", "早期的太空卫星热电发电机核热源", "引爆核武器的微型中子源触发器"],
      appearance: "理应为银灰色固体，但因自身强烈的辐射与衰变热，肉眼所见的单质会因高热发出蓝光并迅速气化。",
      lifeRole: "钋对人体极度致命。极微量的粉尘若被吸入或摄入体内，其释放的强烈阿尔法（α）射线会直接撕裂DNA与细胞结构，导致无药可救的急性辐射中毒。",
      compounds: [
        {
          formula: "PoO₂",
          name: "二氧化钋",
          description: "具强烈放射性的固体，在自然界中几乎不可能以宏观数量存在。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "钋-210是已知的最强致命毒物之一（毒性是氰化物的数十万倍），仅需微克级的剂量进入人体即可致死；绝对仅限于最高防护级别的核实验室操作。",
        },
      ],
      isotopes: [
        {
          notation: "²¹⁰Po",
          use: "暗杀与核物理源",
          description: "最著名的同位素，半衰期仅138天，衰变时释放惊人能量的阿尔法粒子，曾被用作著名的放射性毒杀工具。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钋的放射性衰变热及致命的辐射毒理学皆具备明确的核物理与法医实测资料。",
      },
    },
    At: {
      description: "砹是自然界中最稀有的元素，属于卤素族但极具放射性。在地球地壳中任何时刻的总存量估计不到一盎司。",
      uses: ["研究特定癌症的阿尔法靶向放射治疗（极小规模研究中）", "无其他实际工业用途"],
      appearance: "无人见过其宏观外貌；理论上若能聚集足够质量，会瞬间因极其强烈的辐射热将自身蒸发殆尽。",
      safety: [
        {
          level: "高风险",
          description: "砹的所有同位素皆具有极端的放射性破坏力，其半衰期最长也仅有数小时，无法脱离特殊的粒子加速器环境存在。",
        },
      ],
      isotopes: [
        {
          notation: "²¹¹At",
          use: "医学靶向放射研究",
          description: "半衰期约7.2小时的人工同位素，科学家正研究将其附着于抗体上以精准杀死极小范围内的癌细胞。",
        },
      ],
      reliability: {
        level: "部分推定资料",
        description: "砹因半衰期极短且数量极微，多数化学性质依赖理论外推，仅有其放射性衰变与示踪实验为实测资料。",
      },
    },
    Rn: {
      description: "氡是一种无色、无味、沉重的放射性惰性气体，由地层中铀和钍的自然衰变产生。它是自然界中引发非吸烟者肺癌的最主要元凶。",
      uses: ["地震预测研究（地下水氡气浓度监测）", "早期的放射性医疗植入种子（多已淘汰）"],
      appearance: "常温下为完全无色无味的气体；当冷却到固态极低温时，会因自身辐射发出强烈的黄色至橙红色辉光。",
      lifeRole: "氡气在密闭空间（如地下室）积累后，一旦被人体吸入，其衰变产生的固体微粒会附着于肺部组织，长期持续释放阿尔法射线轰击肺细胞。",
      compounds: [
        {
          formula: "RnF₂",
          name: "二氟化氡",
          description: "在极端实验室条件下合成的固体，证实了氡并非绝对惰性，但因强烈辐射极不稳定。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "氡气是自然界最具威胁的放射性气体，长期吸入低浓度氡气即具有强烈的致癌风险；地下室与密闭矿坑应安装良好通风或氡气侦测器。",
        },
      ],
      isotopes: [
        {
          notation: "²²²Rn",
          use: "环境辐射监测",
          description: "半衰期约3.8天的天然放射性同位素，是铀-238衰变链中唯一呈现气态的核素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "氡的放射性衰变路径、气体扩散物理及致癌风险皆有高度完备的环境科学与医学实测资料。",
      },
    },
    Fr: {
      description: "钫是一种极度不稳定且具有强烈放射性的碱金属，是所有自然元素中反应性最强但也最稀少的元素之一。",
      uses: ["基础科学与原子结构研究", "激光光谱学实验", "激光冷却与捕获研究"],
      appearance: "预期为银白色金属（因半衰期极短且发热量大，从未制成宏观块状）。",
      safety: [
        {
          level: "高风险",
          description: "钫具有极强的放射性且半衰期极短（最长仅22分钟），仅存在于极度专业的核物理实验室中。",
        },
      ],
      isotopes: [
        {
          notation: "²²³Fr",
          use: "原子物理与光谱研究",
          description: "钫寿命最长的同位素，半衰期约22分钟。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其原子光谱与半衰期已有精确的实验测量数据。",
      },
    },
    Ra: {
      description: "镭是一种具有强烈放射性的碱土金属，化合物在黑暗中会发出微弱的蓝色荧光。它曾被广泛用于夜光涂料，但因严重辐射危害而遭禁。",
      uses: ["早期放射性医疗与癌症治疗研究", "便携式中子源材料（历史用途）", "科学研究与辐射标准源"],
      appearance: "常温下为银白色金属，但在空气中会迅速氧化变黑。",
      safety: [
        {
          level: "高风险",
          description: "镭具强烈放射性且化学性质类似钙会积聚于骨骼中，长期暴露会引发骨癌与严重辐射伤害，绝对不应接触。",
        },
      ],
      isotopes: [
        {
          notation: "²²⁶Ra",
          use: "放射源与历史医疗",
          description: "镭最主要的同位素，半衰期约1600年。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "镭的放射衰变链与毒理学历史记录完整。",
      },
    },
    Ac: {
      description: "锕是一种具有银白色光泽的放射性金属，是锕系元素的命名来源。它在空气中会迅速与氧气反应形成一层白色的氧化物。",
      uses: ["高效能阿尔法射线放射源研究", "癌症靶向放射治疗（如锕-225）", "中子源科研应用"],
      appearance: "常温下为银白色金属，在暗处会因强烈辐射发出微弱蓝光。",
      safety: [
        {
          level: "高风险",
          description: "锕及其化合物具有极强的放射性与毒性，其危害性与镭相当，仅限于专门的放射化学实验室操作。",
        },
      ],
      isotopes: [
        {
          notation: "²²⁵Ac",
          use: "靶向癌症治疗",
          description: "释放阿尔法粒子的医疗同位素，正被广泛研究用于精准癌症治疗。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锕的化学与放射性质具备详尽的实测数据。",
      },
    },
    Th: {
      description: "钍是一种微具放射性的银灰色金属，在地壳中的丰度远高于铀。它被视为未来核能发电的潜在清洁燃料来源。",
      uses: ["制造耐高温金属坩埚与航空引擎合金", "钍燃料核能发电研究", "钨惰性气体焊接（TIG）电极的添加剂"],
      appearance: "常温下为银灰色金属，在空气中会缓慢氧化成暗灰色或黑色。",
      compounds: [
        {
          formula: "ThO₂",
          name: "二氧化钍",
          description: "极高熔点的耐火材料，曾用于制造气灯网罩。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "金属钍具微弱放射性且钍粉末在空气中易燃；长期吸入钍粉尘会增加健康风险，应在通风环境下专业操作。",
        },
      ],
      isotopes: [
        {
          notation: "²³²Th",
          use: "核能与地质定年",
          description: "自然界唯一的天然钍同位素，半衰期长达140亿年。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钍的物理、化学及核燃料特性具备丰富实测资料。",
      },
    },
    Pa: {
      description: "镤是一种稀有且具强烈放射性的银灰色金属，属于锕系元素。它在自然界中主要由铀矿石的放射性衰变微量产生。",
      uses: ["基础核物理与放射化学研究", "地质年代测定参考", "科学探索用途"],
      appearance: "常温下为银灰色金属，在空气中会缓慢氧化失去光泽。",
      safety: [
        {
          level: "高风险",
          description: "镤及其化合物具高放射性与化学毒性，其危害程度与铀和钚相似，需严格在防护箱中操作。",
        },
      ],
      isotopes: [
        {
          notation: "²³¹Pa",
          use: "地质定年研究",
          description: "镤寿命最长的同位素，半衰期约32700年。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "镤的晶体结构与衰变数据已有科学实测记录。",
      },
    },
    U: {
      description: "铀是一种重质、银灰色的放射性金属，是核能发电与核武器的核心原料。自然界中的铀主要由多种同位素混合组成。",
      uses: ["核能发电厂的核燃料", "核潜艇动力来源", "军事装甲与穿甲弹材料（贫铀）"],
      appearance: "常温下为银灰色金属，暴露在空气中会迅速覆盖一层黑色氧化层。",
      compounds: [
        {
          formula: "UF₆",
          name: "六氟化铀",
          description: "常温下为固体，加热易升华，是铀同位素浓缩制程中的关键气体原料。",
        },
        {
          formula: "UO₂",
          name: "二氧化铀",
          description: "核燃料芯块的主要化学成分。",
        },
      ],
      reactions: [
        {
          equation: "U + O₂ → UO₂",
          description: "铀金属在空气中加热会燃烧并生成二氧化铀。",
          conditions: "加热",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "铀具备放射性与重金属化学毒性，浓缩铀或武器级铀受严格国际管制，不应自行接触或操作。",
        },
      ],
      isotopes: [
        {
          notation: "²³⁵U",
          use: "核能发电与核武",
          description: "天然铀中唯一能进行热中子核裂变的同位素。",
        },
        {
          notation: "²³⁸U",
          use: "核燃料原料与地质定年",
          description: "占天然铀99%以上的稳定度极高同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铀的核裂变物理特性与化工制程拥有极为详尽的实测资料。",
      },
    },
    Np: {
      description: "镎是第一个被发现的人工合成超铀元素，是一种具有强烈放射性的银灰色金属。",
      uses: ["核物理研究与中子探测器", "合成钚-238的原料（用于太空探测器热电发电机）", "科学研究用途"],
      appearance: "常温下为银灰色金属，具备多种晶体结构。",
      safety: [
        {
          level: "高风险",
          description: "镎及其化合物具高度放射性与重金属毒性，仅限于受高度规范的国家级实验室中处理。",
        },
      ],
      isotopes: [
        {
          notation: "²³⁷Np",
          use: "太空电源与中子侦测",
          description: "镎最稳定且半衰期最长的同位素（约214万年）。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "镎的化学性质与核反应数据具备完整的实验测量资料。",
      },
    },
    Pu: {
      description: "钚是一种具高度放射性与剧毒的银灰色人工超铀金属。它在核能工业与核武发展中占有极其关键的地位。",
      uses: ["核武器核心装药", "太空探测器放射性同位素热电机（RTG）燃料", "快中子增殖反应堆燃料"],
      appearance: "常温下为银灰色金属，接触空气后会迅速因氧化而变成暗黄色或橄榄绿色。",
      compounds: [
        {
          formula: "PuO₂",
          name: "二氧化钚",
          description: "极难溶于水的稳定陶瓷状粉末，广泛用于太空电池的热源。",
        },
      ],
      safety: [
        {
          level: "高风险",
          description: "钚是已知毒性最强且具极强放射性的元素之一，吸入微量粉尘即可致癌，受国际原子能机构严格管制，绝对禁止私自接触。",
        },
      ],
      isotopes: [
        {
          notation: "²³⁹Pu",
          use: "核武与核能",
          description: "能够进行高效核裂变的同位素，是核武器的主要材料。",
        },
        {
          notation: "²³⁸Pu",
          use: "太空探测电力供应",
          description: "释放大量衰变热的同位素，用于卡西尼号、好奇号等太空船的RTG电源。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钚的冶金学、核裂变性质及生物毒理学均有大量的军事与科学实测资料。",
      },
    },
    Am: {
      description: "镅是一种人工合成的放射性金属，属于锕系元素。它是日常生活中少数能接触到的放射性元素民用应核素。",
      uses: ["家用火灾烟雾探测器（离子感烟器）", "工业厚度与密度测量仪", "伽马射线与阿尔法射线谱仪校准源"],
      appearance: "常温下为银白色金属，暴露在空气中会缓慢失去光泽。",
      safety: [
        {
          level: "高风险",
          description: "镅具强烈放射性（特别是阿尔法辐射），虽然市售烟雾探测器中的剂量极低且安全，但裸露的镅源具高度健康危害，不应拆解。",
        },
      ],
      isotopes: [
        {
          notation: "²⁴¹Am",
          use: "烟雾探测器与工业仪器",
          description: "镅最主要的同位素，半衰期约432.2年。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "镅的辐射衰变与民用电离特性已有几十年的实测验证。",
      },
    },
    Cm: {
      description: "锔是一种硬质、具高放射性的人工超铀金属，以科学家居里夫妇命名。它在强烈辐射下会发出微弱的蓝色荧光。",
      uses: ["太空探测器上的α粒子X光谱仪（APXS）放射源", "合成更重超重元素的靶材", "同位素热电机热源研究"],
      appearance: "常温下为银白色金属，在暗处受自身强烈放射性激发会发光。",
      safety: [
        {
          level: "高风险",
          description: "锔释放高能量的阿尔法粒子，具有极强的放射毒性，若进入体内会囤积于骨骼中破坏造血组织，仅限专业实验室操作。",
        },
      ],
      isotopes: [
        {
          notation: "²⁴⁴Cm",
          use: "太空仪器与热源",
          description: "锔较容易大量制备的同位素，常作为火星车科学仪器的辐射源。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锔的结晶学与放射化学数据均为实验室已实测资料。",
      },
    },
    Bk: {
      description: "锫是一种人工合成的放射性金属，属于锕系元素，以美国伯克利加州大学命名。",
      uses: ["合成更新、更重的超重元素（如鿬元素）之靶材", "基础核物理与化学电子结构研究", "科学研究用途"],
      appearance: "预期为银白色金属，但因强烈放射性会破坏自身晶格结构。",
      safety: [
        {
          level: "高风险",
          description: "锫具强烈放射性与生物毒性，由于产量极其稀少且半衰期短，仅能在顶级国家实验室中处理。",
        },
      ],
      isotopes: [
        {
          notation: "²⁴⁹Bk",
          use: "合成超重元素靶材",
          description: "锫相对较稳定的同位素，半衰期约330天。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锫的化学分离与合成数据具备实验室实测记录。",
      },
    },
    Cf: {
      description: "锎是一种具有强烈放射性的人工超铀金属。它能释放大量中子，是世界上最强大的便携式中子源之一。",
      uses: ["启动核反应堆的强效中子源", "癌症放射治疗（中子近接治疗）", "工业材料无损探伤与黄金、水文探勘"],
      appearance: "常温下为银白色金属，在空气中会缓慢氧化。",
      safety: [
        {
          level: "高风险",
          description: "锎-252释放大量高穿透性中子与阿尔法射线，具有极高的致死辐射危险，必须在厚重的铅与水屏蔽容器中操作。",
        },
      ],
      isotopes: [
        {
          notation: "²⁵²Cf",
          use: "工业中子源与癌症治疗",
          description: "强烈自发裂变并释放大量中子的同位素，每微克每秒能释放数百万个中子。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锎的中子发射率与工业应用拥有详尽的实测数据。",
      },
    },
    Es: {
      description: "锿是在1952年第一颗氢弹爆炸后的残余放射性尘埃中首次被发现的人工超铀元素。",
      uses: ["合成更重超重元素（如钔、锘）的研究", "基础核物理学与量子化学实验", "科学研究用途"],
      appearance: "预期为银白色金属，但因强烈放射性产生的热量会使自身迅速气化或发光。",
      safety: [
        {
          level: "高风险",
          description: "锿具有极高的放射毒性与强烈发热性，仅能在具备完善远端遥控设备的热室实验室中处理。",
        },
      ],
      isotopes: [
        {
          notation: "²⁵²Es",
          use: "科学研究",
          description: "锿的主要研究同位素之一。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锿的微量化学特性已有初步实验测量。",
      },
    },
    Fm: {
      description: "镄是纪念现代物理学之父恩里科·费米而命名的人工放射性超铀金属，只能在核反应堆或粒子加速器中微量合成。",
      uses: ["基础核物理与超重元素性质研究", "科学探索用途"],
      appearance: "预期为金属态，但因产量仅有少数原子，无法制成宏观实体。",
      safety: [
        {
          level: "高风险",
          description: "镄具强烈放射性，但因半衰期极短且产量极微，对公众无实际接触风险，仅在核实验室受严格管制。",
        },
      ],
      isotopes: [
        {
          notation: "²⁵⁷Fm",
          use: "核物理实验",
          description: "镄寿命较长的同位素之一，半衰期约100.5天。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "镄的基础化学离子行为有实验测量纪录。",
      },
    },
    Md: {
      description: "钔是为了纪念化学元素周期表发明者德米特里·门捷列夫而命名的人工放射性金属。",
      uses: ["超重元素化学性质的基础科学研究", "科学研究用途"],
      appearance: "预期为金属态，但因极度稀少无法实际观察外观。",
      safety: [
        {
          level: "高风险",
          description: "钔具强烈放射性，仅存在于专业粒子物理实验室中。",
        },
      ],
      isotopes: [
        {
          notation: "²⁵⁸Md",
          use: "科学研究",
          description: "半衰期约51.5天的同位素。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "钔的离子交换色层分析已有实验数据。",
      },
    },
    No: {
      description: "锘是为了纪念诺贝尔奖创办人阿尔弗雷德·诺贝尔而命名的人工放射性超铀元素。",
      uses: ["核物理与超重元素电子结构研究", "科学研究用途"],
      appearance: "理论上为金属态，但因半衰期极短无法制成块状。",
      safety: [
        {
          level: "高风险",
          description: "锘具有强烈放射性，仅能在产生的实验室环境中受监控存在。",
        },
      ],
      isotopes: [
        {
          notation: "²⁵⁹No",
          use: "核物理研究",
          description: "锘相对较稳定的同位素，半衰期约58分钟。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "锘的衰变模式与氧化态实验已有记录。",
      },
    },
    Lr: {
      description: "铹是锕系元素的最后一个成员（第103号元素），以欧内斯特·劳伦斯命名的人工放射性金属。",
      uses: ["探索超锕系元素与周期表边界的基础物理研究", "科学研究用途"],
      appearance: "理论上为银白色的金属固体。",
      safety: [
        {
          level: "高风险",
          description: "铹具强烈放射性且半衰期很短，仅限于顶级粒子加速器实验室中进行极微量观测。",
        },
      ],
      isotopes: [
        {
          notation: "²⁶²Lr",
          use: "超重元素研究",
          description: "铹较长寿的同位素之一，半衰期约3.6小时。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "铹的第一电离能等基础物理性质已有实验测量纪录。",
      },
    },
    Rf: {
      description: "𬬻是一种人工合成的放射性过渡金属，属于第4族元素。由于其半衰期极短且产量极微，目前仅限于粒子物理与超重元素化学研究。",
      uses: ["超重元素核物理研究", "相对论性量子化学实验", "探讨元素周期表边界与电子排布"],
      appearance: "理论上为金属固体，但因半衰期极短且数量极少，无法实际观测宏观外观。",
      safety: [
        {
          level: "高风险",
          description: "具有极强的放射性，仅能在顶级国家级加速器实验室中受严格防护操作。",
        },
      ],
      isotopes: [
        {
          notation: "²⁶⁷Rf",
          use: "学术研究",
          description: "寿命较长的同位素之一，半衰期约数小时内。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其合成与基础核物理性质已有实验测量纪录。",
      },
    },
    Db: {
      description: "𬭊是一种人工合成的放射性过渡金属，属于第5族元素。它只能透过粒子加速器中的核反应微量制造。",
      uses: ["超重元素化学性质研究", "核物理反应机制探讨", "科学研究用途"],
      appearance: "理论上为金属固体，但无法制成宏观实体。",
      safety: [
        {
          level: "高风险",
          description: "具强烈放射性，仅限于专业核实验室操作。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其合成与衰变数据已有实验测量纪录。",
      },
    },
    Sg: {
      description: "𬭳是一种人工合成的放射性过渡金属，以现代化学先驱格伦·西博格命名。它是第6族的最重成员。",
      uses: ["超重元素化学与气相色谱研究", "探讨第6族元素的化学同源性", "核物理基础研究"],
      appearance: "理论上为金属固体。",
      safety: [
        {
          level: "高风险",
          description: "具强烈放射性，仅限于粒子物理实验室中处理。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其合成及初步气相化学性质已有实验测量纪录。",
      },
    },
    Bh: {
      description: "𬭛是一种人工合成的放射性过渡金属，属于第7族元素。其化学性质预期与锰和铼相似。",
      uses: ["超重元素周期表定位研究", "核物理与衰变链分析", "科学研究用途"],
      appearance: "理论上为金属固体。",
      safety: [
        {
          level: "高风险",
          description: "具强烈放射性，仅限于专业核实验室操作。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其合成与阿尔法衰变数据已有实验测量纪录。",
      },
    },
    Hs: {
      description: "𬭶是一种人工合成的放射性过渡金属，属于第8族元素。它能形成挥发性的四氧化物，类似锇。",
      uses: ["超重元素挥发性化合物化学研究", "核结构与超重核稳定岛理论验证", "科学研究用途"],
      appearance: "理论上为金属固体。",
      safety: [
        {
          level: "高风险",
          description: "具强烈放射性，仅限于高度防护的物理实验室操作。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其合成及挥发性氧化物实验已有实测记录。",
      },
    },
    Mt: {
      description: "䥑是一种人工合成的放射性过渡金属，以著名物理学家莉泽·迈特纳命名，属于第9族元素。",
      uses: ["超重核物理研究", "探讨第9族元素的金属键与相对论效应", "科学研究用途"],
      appearance: "理论上为金属固体。",
      safety: [
        {
          level: "高风险",
          description: "具强烈放射性，仅限于专业加速器实验室操作。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其合成与衰变链数据已有实验测量纪录。",
      },
    },
    Ds: {
      description: "𫟼是一种人工合成的放射性过渡金属，以其发现地德国达姆施塔特命名，属于第10族元素。",
      uses: ["超重元素合成与核物理研究", "探讨类铂元素的化学性质", "科学研究用途"],
      appearance: "理论上为金属固体。",
      safety: [
        {
          level: "高风险",
          description: "具强烈放射性，仅限于专业物理实验室操作。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其合成与基础衰变数据已有实验测量纪录。",
      },
    },
    Rg: {
      description: "𬬭是一种人工合成的放射性过渡金属，以X射线发现者伦琴命名，属于第11族元素。",
      uses: ["超重元素电子结构研究", "探讨类金元素的相对论性收缩效应", "科学研究用途"],
      appearance: "理论上为金属固体。",
      safety: [
        {
          level: "高风险",
          description: "具强烈放射性，仅限于顶级核物理实验室操作。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其合成与基础衰变数据已有实验测量纪录。",
      },
    },
    Cn: {
      description: "鎶是一种人工合成的放射性过渡金属，属于第12族元素。实验显示它在常温下可能呈现高度挥发性，甚至表现出类似惰性气体的某些物理特性。",
      uses: ["超重元素气相吸附与挥发性研究", "相对论量子化学实验", "核物理基础研究"],
      appearance: "理论上在常温下可能为挥发性液体或气体金属。",
      safety: [
        {
          level: "高风险",
          description: "具强烈放射性，仅限于专业核实验室操作。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其挥发性与吸附性质已有突破性的实验测量纪录。",
      },
    },
    Nh: {
      description: "鉨是一种人工合成的放射性元素，属于第13族，由日本理化学研究所团队首次命名发现。",
      uses: ["超重元素周期表定位研究", "探讨第13族重元素的相对论效应", "科学研究用途"],
      appearance: "理论上为金属固体。",
      safety: [
        {
          level: "高风险",
          description: "具强烈放射性，仅限于专业加速器实验室操作。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其合成与衰变链数据已有实验测量纪录。",
      },
    },
    Fl: {
      description: "𫓧是一种人工合成的放射性元素，属于第14族。理论预测其化学性质可能受到强烈的相对论效应影响，表现出类似惰性气体的惰性。",
      uses: ["超重元素气相化学与惰性行为研究", "探讨“稳定岛”理论", "科学研究用途"],
      appearance: "理论上为金属固体或挥发性物质。",
      safety: [
        {
          level: "高风险",
          description: "具强烈放射性，仅限于专业核实验室操作。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其初步挥发性与合成数据已有实验测量纪录。",
      },
    },
    Mc: {
      description: "镆是一种人工合成的放射性元素，属于第15族。它只能透过离子轰击靶材微量合成。",
      uses: ["超重元素核物理研究", "探讨重氮族元素的化学性质", "科学研究用途"],
      appearance: "理论上为金属固体。",
      safety: [
        {
          level: "高风险",
          description: "具强烈放射性，仅限于顶级粒子物理实验室操作。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其合成与阿尔法衰变数据已有实验测量纪录。",
      },
    },
    Lv: {
      description: "𫟷是一种人工合成的放射性元素，属于第16族。",
      uses: ["超重元素核结构研究", "探讨重氧族元素的化学性质", "科学研究用途"],
      appearance: "理论上为固体元素。",
      safety: [
        {
          level: "高风险",
          description: "具强烈放射性，仅限于专业实验室操作。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其合成与衰变链数据已有实验测量纪录。",
      },
    },
    Ts: {
      description: "鿬是一种人工合成的放射性卤素元素。由于其原子序极高，预期会受到显著的相对论效应影响。",
      uses: ["超重卤素化学与物理性质研究", "探讨元素周期表第7周期结尾特性", "科学研究用途"],
      appearance: "理论上预期为固态卤素。",
      safety: [
        {
          level: "高风险",
          description: "具强烈放射性与高能量衰变，仅限于顶级国家实验室操作。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其合成与基础核物理性质已有实验测量纪录。",
      },
    },
    Og: {
      description: "鿫是目前已知原子序最大（118号）的元素，属于第18族。尽管被归类为惰性气体，但因强烈的相对论效应，它在常温下可能并非气体，而是具半导体特性的固体。",
      uses: ["探索周期表极限与相对论效应的物理研究", "超重核稳定岛理论验证", "科学研究用途"],
      appearance: "理论预测在常温下可能为具备独特半导体特性的固体状态。",
      safety: [
        {
          level: "高风险",
          description: "具极强的放射性与极短半衰期，仅能在顶级国家级加速器实验室中受防护操作。",
        },
      ],
      reliability: {
        level: "已实测资料",
        description: "其合成与基础阿尔法衰变数据已有实验测量纪录。",
      },
    }
  },
  ja: {
    H: {
      description: "水素は最も軽く、宇宙で最も豊富に存在する元素であり、常温では二原子分子の気体です。多くの重要な化合物の核となる構成要素です。",
      uses: ["アンモニアの製造", "燃料電池", "ロケット燃料"],
      appearance: "常温では無色、無臭の気体。",
      lifeRole: "水素は水と多くの有機化合物の核となる構成要素であり、生命システムの構造とエネルギー代謝に不可欠です。",
      compounds: [
        {
          formula: "H₂O",
          name: "水",
          description: "水素と酸素から成り、生命と多くの化学反応の重要な媒体です。",
        },
        {
          formula: "NH₃",
          name: "アンモニア",
          description: "肥料の製造に一般的に使用され、重要な工業化学原料でもあります。",
        },
      ],
      reactions: [
        {
          equation: "2H₂ + O₂ → 2H₂O",
          description: "水素と酸素が反応して水を生成し、大量のエネルギーを放出します。",
          conditions: "点火",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "水素は非常に燃えやすく、空気と混合すると危険な爆発性混合物を形成する可能性があります。専門的な環境以外で自ら調製または燃焼させるべきではありません。",
        },
      ],
      isotopes: [
        {
          notation: "重水素（²H / D）",
          use: "核反応研究とアイソトープトレーサー",
          description: "水素の安定同位体であり、科学研究において重水の形でよく使用されます。",
        },
        {
          notation: "トリチウム（³H / T）",
          use: "トレーサーと核融合研究",
          description: "放射性同位体であり、関連する用途は規制された専門環境にのみ適しています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "水素の基本特性、一般的な化合物、および同位体データはすべて、広く科学的に検証された実測データです。",
      },
    },
    He: {
      description: "ヘリウムは宇宙で2番目に豊富に存在する元素であり、希ガスに属します。化学的性質は非常に不活性であり、極低温では特殊な超流動現象を示します。",
      uses: ["MRI（磁気共鳴画像）の超伝導磁石の冷却", "気球や飛行船の浮揚ガス", "深海潜水用の混合ガス"],
      appearance: "常温では無色、無臭の気体。",
      safety: [
        {
          level: "警告",
          description: "ヘリウム自体は無毒ですが、密閉空間で大量に漏れると酸素が押し出され、低酸素症や窒息のリスクにつながる可能性があります。",
        },
      ],
      isotopes: [
        {
          notation: "³He",
          use: "極低温物理研究",
          description: "希少な安定同位体であり、低温冷却や中性子検出器に広く応用されています。",
        },
        {
          notation: "⁴He",
          use: "一般的な浮揚および冷却用途",
          description: "自然界で最も豊富なヘリウム同位体であり、主に地下の放射性崩壊に由来します。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ヘリウムの物理的性質と不活性な特徴はすべて、広く応用されている実測データです。",
      },
    },
    Li: {
      description: "リチウムは最も軽い金属元素であり、アルカリ金属に属し、柔らかく非常に酸化しやすいです。現代の電池技術と合金材料において重要な役割を果たしています。",
      uses: ["リチウムイオン電池", "航空宇宙用の高強度アルミニウム合金", "精神科薬（リチウム塩の形態）"],
      appearance: "常温では銀白色の金属であり、切断するとすぐに空気と反応して暗くなります。",
      lifeRole: "リチウム金属単体は人体に有毒であり、体内には存在しません。医学的に使用されるのは微量のリチウムイオン（Li⁺）であり、神経伝達物質と気分の安定に役立ちます。",
      compounds: [
        {
          formula: "Li₂CO₃",
          name: "炭酸リチウム",
          description: "精神科の治療薬としてよく使用され、セラミックスやガラス工業にも使用できます。",
        },
        {
          formula: "LiCoO₂",
          name: "コバルト酸リチウム",
          description: "一般的なリチウムイオン電池の正極材料。",
        },
      ],
      reactions: [
        {
          equation: "2Li + 2H₂O → 2LiOH + H₂",
          description: "リチウム金属は水と激しく反応し、アルカリ性の水酸化リチウムと水素を生成します。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "リチウム金属は水または空気中の水分と激しく反応し、可燃性の水素を発生させます。自ら取り扱うべきではありません。",
        },
      ],
      isotopes: [
        {
          notation: "⁶Li",
          use: "原子力産業材料",
          description: "中性子の吸収や熱核融合の原料として使用できます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "リチウムの化学反応性と化合物の性質はすべて、多数の実測データによって裏付けられています。",
      },
    },
    Be: {
      description: "ベリリウムは灰白色のアルカリ土類金属であり、軽量で高強度、高融点を備えています。その粉塵は猛毒であるため、応用範囲は主に専門的な産業や国防に限られています。",
      uses: ["X線管の透過窓", "航空宇宙および国防用の高剛性合金", "原子炉の中性子反射体"],
      appearance: "常温では硬い灰白色の金属。",
      compounds: [
        {
          formula: "BeO",
          name: "酸化ベリリウム",
          description: "優れた熱伝導性と電気絶縁性を備えた高温セラミック材料。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "ベリリウムの粉塵やヒュームを吸入すると、重篤な慢性ベリリウム症（Berylliosis）を引き起こします。厳格な労働安全衛生の規制下でのみ取り扱うべきです。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ベリリウムの物理的性質と毒性作用はすべて、権威ある機関の実測データを備えています。",
      },
    },
    B: {
      description: "ホウ素は非常に硬度が高い半金属元素であり、自然界では主にホウ酸塩の形態で存在します。材料科学と半導体分野において独自の価値を持っています。",
      uses: ["ホウケイ酸耐熱ガラスの製造", "半導体のP型ドーパント", "原子炉の制御棒"],
      appearance: "結晶状態では黒色または銀灰色の硬い固体、非晶質状態では褐色の粉末。",
      lifeRole: "ホウ素単体は人体において既知の機能はありません。しかし、植物の成長において、ホウ酸塩は細胞壁の発達に不可欠な微量栄養素です。",
      compounds: [
        {
          formula: "H₃BO₃",
          name: "ホウ酸",
          description: "一般的な穏やかな消毒剤であり、ゴキブリなどの害虫駆除にも使用されます。",
        },
        {
          formula: "B₂O₃",
          name: "酸化ホウ素",
          description: "高強度ガラスと特殊セラミックスの製造における重要な原料。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁰B",
          use: "中性子吸収材",
          description: "熱中性子吸収断面積が非常に高く、原子炉の制御に広く応用されています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ホウ素の各種物理的および化学的データはすべて、広く検証された実測データです。",
      },
    },
    C: {
      description: "炭素は地球上のすべての既知の生命体の基本元素であり、膨大な数と複雑な構造を持つ有機化合物を形成することができます。自然界には、黒鉛やダイヤモンドなど、物理的性質が全く異なる同素体が存在します。",
      uses: ["鉄鋼と合金の製錬", "ポリマーとプラスチック工業", "炭素14放射性同位体年代測定法"],
      appearance: "常温では固体であり、一般的な形態は黒色の黒鉛粉末または無色透明のダイヤモンド結晶です。",
      lifeRole: "炭素は生命体におけるタンパク質、脂質、炭水化物、核酸の骨格となる中核元素です。",
      compounds: [
        {
          formula: "CO₂",
          name: "二酸化炭素",
          description: "動植物の呼吸作用の産物であり、植物が光合成を行うための炭素源でもあります。",
        },
        {
          formula: "CH₄",
          name: "メタン",
          description: "天然ガスの主成分であり、強力な温室効果ガスでもあります。",
        },
      ],
      reactions: [
        {
          equation: "C + O₂ → CO₂",
          description: "炭素が酸素中で完全燃焼すると二酸化炭素を生成し、熱エネルギーを放出します。",
          conditions: "点火",
        },
      ],
      isotopes: [
        {
          notation: "¹²C",
          use: "質量分析と原子量の基準",
          description: "最も豊富な安定同位体であり、原子量定義の基準として使用されます。",
        },
        {
          notation: "¹⁴C",
          use: "放射性年代測定",
          description: "自然界に微量に存在する放射性同位体であり、考古学的遺物の年代測定に使用されます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "炭素の性質とその同素体の構造はすべて、科学界で深く研究された実測データです。",
      },
    },
    N: {
      description: "窒素は地球の大気中で最も豊富な元素であり、常温では非常に安定した二原子分子ガスとして存在します。多くの工業化学物質と生命分子の重要な構成要素です。",
      uses: ["ハーバー・ボッシュ法によるアンモニア合成", "食品包装と工業用不活性環境", "液体窒素による低温冷凍技術"],
      appearance: "常温では無色、無臭の気体。",
      lifeRole: "人体は空気中の窒素分子を直接吸収することはできません。DNAやタンパク質を構成する重要な窒素元素を得るには、食事を通じてタンパク質やアミノ酸を摂取する必要があります。",
      compounds: [
        {
          formula: "NH₃",
          name: "アンモニア",
          description: "重要な人工化学物質であり、主に窒素肥料と硝酸の製造に使用されます。",
        },
        {
          formula: "HNO₃",
          name: "硝酸",
          description: "強い酸化性を持つ強酸であり、爆薬、肥料の製造、および化学合成に使用されます。",
        },
      ],
      reactions: [
        {
          equation: "N₂ + 3H₂ ⇌ 2NH₃",
          description: "窒素と水素は過酷な条件下でアンモニアを合成でき、これは現代の農業用肥料の基礎となっています（ハーバー・ボッシュ法）。",
          conditions: "高温高圧および触媒",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "窒素自体は無毒ですが、密閉空間に蓄積すると低酸素症による窒息を引き起こす可能性があります。液体窒素は極低温であり、接触すると重度の凍傷を引き起こす可能性があります。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁵N",
          use: "農業と生物学のトレーサー",
          description: "安定した重同位体であり、生態系や人体代謝における窒素の経路を追跡するためによく使用されます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "窒素の物理化学的性質および反応経路はすべて、百年以上の検証がある実測データです。",
      },
    },
    O: {
      description: "酸素は地殻で最も豊富な元素であり、化学的性質が非常に活発な非金属でもあります。地球上の大多数の生物の細胞呼吸に不可欠です。",
      uses: ["医療および高空での酸素供給", "鉄鋼の製錬", "ロケット推進剤の酸化剤"],
      appearance: "常温では無色、無臭の気体。液体酸素は淡青色をしています。",
      lifeRole: "酸素（O₂）は肺に吸入された後、ヘモグロビンと結合し、細胞の有酸素呼吸に関与してエネルギーを生成します。酸素は水分子（H₂O）の構成要素でもあり、人体の重量の大部分を占めています。",
      compounds: [
        {
          formula: "H₂O",
          name: "水",
          description: "地球の表面で最も一般的な化合物であり、すべての既知の生命システムの働きを支えています。",
        },
        {
          formula: "O₃",
          name: "オゾン",
          description: "酸素の同素体であり、成層圏では紫外線を吸収しますが、地上では大気汚染物質となります。",
        },
      ],
      reactions: [
        {
          equation: "2Mg + O₂ → 2MgO",
          description: "マグネシウムなどの活性金属は酸素中で燃焼すると、強い白光を発して固体の酸化物を生成します。",
          conditions: "点火",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "酸素自体は燃焼しませんが、高濃度の酸素は強く燃焼を助け、油脂や火源に接触すると極めて激しい火災を引き起こす可能性があります。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁸O",
          use: "古気候学および水文学研究",
          description: "安定した重同位体であり、氷床コアや海洋堆積物の比率を通じて古代の気温を推測するためによく使用されます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "酸素の助燃性、生物学的機能、および物理定数はすべて、確実な実測データを備えています。",
      },
    },
    F: {
      description: "フッ素は電気陰性度が最も高く、化学反応性が最も強いハロゲン元素です。自然界ではほとんど単体で存在せず、多くはフッ化物鉱物の形で存在します。",
      uses: ["テフロン（ポリテトラフルオロエチレン）の製造", "原子力産業におけるウランの抽出と濃縮", "歯磨き粉の虫歯予防（フッ化物の形態）"],
      appearance: "常温では淡黄色で、強い刺激臭のある気体。",
      lifeRole: "フッ素ガス単体は猛毒です。微量のフッ化物イオン（F⁻）は歯のエナメル質と結合してフルオロアパタイトを形成し、虫歯に対する抵抗力を高めるのに役立ちます。骨にも微量のフッ化物が含まれています。",
      compounds: [
        {
          formula: "HF",
          name: "フッ化水素酸",
          description: "弱酸ですが、強い腐食性と経皮毒性があり、ガラスのエッチングや半導体製造プロセスによく応用されます。",
        },
        {
          formula: "NaF",
          name: "フッ化ナトリウム",
          description: "一般的な水道水へのフッ素添加や歯磨き粉の虫歯予防添加物。",
        },
      ],
      reactions: [
        {
          equation: "H₂ + F₂ → 2HF",
          description: "フッ素ガスは極めて活発であり、極低温や暗所でも水素ガスと爆発的に反応してフッ化水素を生成します。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "フッ素ガスとフッ化水素酸は猛毒であり腐食性が極めて強く、ほとんどの物質と接触すると激しく反応します。絶対に自ら取り扱うべきではありません。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁹F",
          use: "核磁気共鳴（NMR）分光法",
          description: "唯一の天然安定同位体であり、核スピンの特性により構造化学分析に広く使用されています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "フッ素の極めて高い反応性と化合物の毒性はすべて、完備された労働安全および実測データを備えています。",
      },
    },
    Ne: {
      description: "ネオンは極めて不活性な単原子ガス元素です。宇宙では比較的豊富ですが、地球の大気中には稀にしか存在せず、真空管に通電すると特有の赤橙色の輝きを放ちます。",
      uses: ["ネオンサインと広告看板", "ヘリウムネオンレーザー技術", "極低温冷却用冷媒"],
      appearance: "常温では無色、無臭の気体。通電により励起されると明るい赤橙色の光を放ちます。",
      safety: [
        {
          level: "注意",
          description: "ネオンガスは無毒な希ガスですが、密閉環境で高濃度で放出されると、酸素を押し出して低酸素症による窒息を引き起こす可能性があります。",
        },
      ],
      isotopes: [
        {
          notation: "²⁰Ne",
          use: "基礎物理研究",
          description: "自然界で最も豊富なネオン同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ネオンの物理的、熱力学的、および光学的特性はすべて、物理学界で広く応用されている実測データです。",
      },
    },
    Na: {
      description: "ナトリウムは柔らかい銀白色のアルカリ金属であり、化学的性質は非常に活発です。自然界では決して単体で存在せず、化合物の形で広く分布しています。",
      uses: ["原子炉の液体金属冷却材", "街灯用の高圧ナトリウムランプの製造", "化学合成と冶金工業の還元剤"],
      appearance: "常温では柔らかい銀白色の金属であり、切断後に空気に触れるとすぐに酸化して光沢を失います。",
      lifeRole: "ナトリウム金属単体は水に触れると爆発します。人体や生物界が依存しているのはナトリウムイオン（Na⁺）であり、細胞内外の水分バランスの調節や神経インパルスの伝導を担っています。",
      compounds: [
        {
          formula: "NaCl",
          name: "塩化ナトリウム",
          description: "通称食塩。人間の食生活の必需品であり、最も重要な化学工業原料の一つでもあります。",
        },
        {
          formula: "NaOH",
          name: "水酸化ナトリウム",
          description: "強アルカリ性物質。通称苛性ソーダ。石鹸、紙、洗剤の製造に広く使用されます。",
        },
      ],
      reactions: [
        {
          equation: "2Na + 2H₂O → 2NaOH + H₂",
          description: "ナトリウム金属は水に触れると激しく反応して水素と水酸化ナトリウムを生成し、大量の熱エネルギーを放出するため、生成された水素が燃焼したり爆発したりすることがよくあります。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "ナトリウム金属単体は湿気や空気に触れると激しく反応して発火します。鉱油または不活性ガス中に保存する必要があり、絶対に自ら取り扱うべきではありません。",
        },
      ],
      isotopes: [
        {
          notation: "²³Na",
          use: "核磁気共鳴研究と日常の安定元素",
          description: "自然界に唯一存在する安定同位体であり、すべての天然ナトリウム化合物を構成しています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ナトリウムの各種熱力学データ、化学的性質、および生理学的機能はすべて、完備された科学的実測データを備えています。",
      },
    },
    Mg: {
      description: "マグネシウムは軽量な銀白色のアルカリ土類金属です。優れた強度重量比を持ち、重要な工業材料であるだけでなく、地球の生命システムに不可欠な元素でもあります。",
      uses: ["航空宇宙および自動車産業の軽量合金", "花火や照明弾の発光剤", "耐火材料の製造"],
      appearance: "常温では頑丈な銀白色の金属。",
      lifeRole: "マグネシウムは葉緑素分子の中心元素であり、植物が光合成を行うことを可能にします。人体では、マグネシウムイオン（Mg²⁺）が数百種類以上の酵素反応とエネルギー代謝に関与しています。",
      compounds: [
        {
          formula: "MgO",
          name: "酸化マグネシウム",
          description: "極めて耐熱性の高い固体であり、高炉や溶鉱炉の内張り材料としてよく使用されます。",
        },
        {
          formula: "MgSO₄",
          name: "硫酸マグネシウム",
          description: "通称エプソムソルト。農業用肥料や医療用途に広く使用されています。",
        },
      ],
      reactions: [
        {
          equation: "2Mg + O₂ → 2MgO",
          description: "マグネシウムは高温で酸素と反応し、燃焼してまばゆい強烈な白光を放ちます。",
          conditions: "点火",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "粉末状またはリボン状のマグネシウム金属は極めて発火しやすく、燃焼時の温度は極めて高く強光を発します。マグネシウム火災の消火に水や二酸化炭素消火器を使用してはいけません。",
        },
      ],
      isotopes: [
        {
          notation: "²⁴Mg",
          use: "生化学研究の基準",
          description: "マグネシウムで最も豊富な安定同位体であり、自然界のマグネシウムの7割以上を占めています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "マグネシウムの物理的特性、燃焼現象、および生物学的代謝メカニズムはすべて、詳細かつ権威ある実測データを備えています。",
      },
    },
    Al: {
      description: "アルミニウムは地殻で最も豊富に存在する金属元素です。低密度であり、表面に緻密な酸化皮膜を形成しやすいため耐食性があり、現代の産業において最も重要な金属の一つです。",
      uses: ["航空機や輸送機器の構造", "飲料缶や食品包装用箔", "高圧送電線"],
      appearance: "常温では柔らかく光沢のある銀白色の金属。",
      lifeRole: "アルミニウム単体およびイオンは、人体および生物システムにおいて既知の生理学的機能はありません。過剰なアルミニウムイオン（Al³⁺）は、植物や神経系に対して毒性を持つ可能性すらあります。",
      compounds: [
        {
          formula: "Al₂O₃",
          name: "酸化アルミニウム",
          description: "極めて硬度の高い化合物であり、サファイアやルビーの主成分であり、研磨材や耐火材料の原料でもあります。",
        },
        {
          formula: "KAl(SO₄)₂·12H₂O",
          name: "ミョウバン",
          description: "伝統的に浄水処理、皮革のなめし、および食品工業に使用されています。",
        },
      ],
      reactions: [
        {
          equation: "4Al + 3O₂ → 2Al₂O₃",
          description: "アルミニウムは空気中で極めて容易に酸素と結合し、表面に緻密な酸化アルミニウムの薄膜を形成することで、それ以上の酸化を防ぎます。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "塊状のアルミニウム金属は極めて安全ですが、極めて微細なアルミニウム粉末が空気中に浮遊すると、粉塵爆発を引き起こす可能性があります。",
        },
      ],
      isotopes: [
        {
          notation: "²⁷Al",
          use: "核磁気共鳴研究と工業的応用",
          description: "自然界に唯一存在する安定同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "アルミニウムの工学データ、化学的性質、および環境への影響はすべて、長期的かつ大量の実測データを備えています。",
      },
    },
    Si: {
      description: "ケイ素は半導体特性を持つ半金属であり、地殻で2番目に豊富に存在する元素です。現代の電子産業とコンピューター技術の礎です。",
      uses: ["半導体チップとマイクロ電子部品", "太陽電池", "ガラス、セメント、セラミックスの製造"],
      appearance: "常温の純粋なケイ素は、金属光沢のある暗灰色または青灰色の結晶固体を示します。",
      lifeRole: "人体のケイ素に対する必要量は極微量です。しかし、一部の植物や海綿、珪藻などの生物は、硬い構造や外殻を構築するために大量の二酸化ケイ素（SiO₂）を利用します。",
      compounds: [
        {
          formula: "SiO₂",
          name: "二酸化ケイ素",
          description: "自然界では一般に石英や砂として見られ、ガラス製造の主原料であり、地殻の主成分でもあります。",
        },
        {
          formula: "SiC",
          name: "炭化ケイ素",
          description: "極めて硬度の高い人工材料であり、研磨材や高電力半導体部品に使用されます。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "固体のケイ素自体は無毒ですが、採掘、切断、または加工プロセスで発生する結晶性の遊離二酸化ケイ素の粉塵を長期にわたって吸入すると、珪肺症（重篤な肺疾患の一種）を引き起こす可能性があります。",
        },
      ],
      isotopes: [
        {
          notation: "²⁸Si",
          use: "精密測定と半導体研究",
          description: "ケイ素で最も一般的な安定同位体であり、かつてはキログラムを定義するための完璧なシリコン球の作製に使用されました。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ケイ素の結晶構造、電気的特性、および二酸化ケイ素の毒性学はすべて、極めて豊富な実測データを備えています。",
      },
    },
    P: {
      description: "リンは高反応性の非金属元素であり、自然界では決して単体で存在しません。複数の同素体を持ち、最も一般的なものは白リンと赤リンです。",
      uses: ["農業用リン肥料の製造", "マッチ箱の側面の摩擦面（赤リン）", "半導体のN型ドーパント"],
      appearance: "白リンはニンニクの匂いがするロウ状の白色または微黄色の半透明の固体です。赤リンは暗赤色の粉末です。",
      lifeRole: "リンは細胞内のDNAおよびRNA骨格の中核元素であり、ATP（アデノシン三リン酸）の形で生体内のエネルギー伝達を主導し、また骨のリン酸カルシウムの重要な成分でもあります。",
      compounds: [
        {
          formula: "H₃PO₄",
          name: "リン酸",
          description: "重要な化学原料であり、肥料、食品添加物、およびサビ取り剤の製造に広く使用されています。",
        },
        {
          formula: "Ca₃(PO₄)₂",
          name: "リン酸カルシウム",
          description: "脊椎動物の骨と歯を構成する主な無機ミネラル成分。",
        },
      ],
      reactions: [
        {
          equation: "P₄ + 5O₂ → P₄O₁₀",
          description: "白リンは室温で空気中の酸素と極めて容易に反応して自然発火し、白色の十酸化四リンの煙を生成します。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "白リンは猛毒であり、空気中で自然発火して重度の化学熱傷を引き起こします。リン化学物質の取り扱いは高度な専門的規制を必要とし、絶対に自ら取り扱うべきではありません。",
        },
      ],
      isotopes: [
        {
          notation: "³¹P",
          use: "核磁気共鳴（NMR）分析と生化学研究",
          description: "唯一の天然安定同位体であり、その核スピン特性は生化学的代謝経路の追跡に非常に適しています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "リンの同素体特性、燃焼現象、および生化学的機能はすべて、完備された実測データを備えています。",
      },
    },
    S: {
      description: "硫黄は自然界で火山の近くに単体または硫化物鉱物としてよく存在する、豊富な黄色の非金属元素です。化学工業と生体系の両方で重要な役割を果たしています。",
      uses: ["硫酸の製造", "ゴムの加硫プロセス（タイヤの耐久性向上）", "農業用殺菌剤と肥料の生産"],
      appearance: "常温では鮮やかな黄色で、無臭の脆くて軽い固体結晶。",
      lifeRole: "単体の硫黄は無毒ですが、人体は直接吸収できません。生命体は、タンパク質の立体構造の構築や正常な代謝の維持のために、含硫アミノ酸（システインなど）に依存しています。",
      compounds: [
        {
          formula: "H₂SO₄",
          name: "硫酸",
          description: "「化学工業の母」と称され、世界で最も生産量の多い強酸であり、肥料や電池工業に広く使用されています。",
        },
        {
          formula: "H₂S",
          name: "硫化水素",
          description: "腐った卵のような強い臭いを持つ気体で、猛毒かつ可燃性であり、火山ガスや有機物の腐敗の際によく見られます。",
        },
      ],
      reactions: [
        {
          equation: "S + O₂ → SO₂",
          description: "硫黄は空気中で燃焼すると青い炎を出し、強い刺激臭を持つ二酸化硫黄ガスを生成します。",
          conditions: "点火",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "硫黄を燃焼させると有毒な二酸化硫黄ガスが発生し、呼吸器を激しく刺激します。また、多くの硫化物ガスも猛毒であるため、換気の悪い場所や非専門的な環境で自ら取り扱うべきではありません。",
        },
      ],
      isotopes: [
        {
          notation: "³²S",
          use: "地質学および宇宙化学研究",
          description: "自然界で最も豊富な硫黄同位体。",
        },
        {
          notation: "³⁴S",
          use: "生態学のトレーサー",
          description: "安定した重同位体であり、硫黄同位体比を通じて古環境や食物連鎖を追跡するためによく使用されます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "硫黄の燃焼生成物、化合物の毒性、および生物学的役割はすべて明確な科学的実測データを備えています。",
      },
    },
    Cl: {
      description: "塩素は極めて反応性の高いハロゲン元素です。強力な酸化剤であり、世界中の消毒や化学合成プロセスで広く応用されています。",
      uses: ["水道水やプールの消毒", "ポリ塩化ビニル（PVC）プラスチックの製造", "医薬品や農薬の合成"],
      appearance: "常温では黄緑色で、強い窒息性の臭いを持つ気体。",
      lifeRole: "塩素ガス単体は猛毒です。しかし、塩素イオン（Cl⁻）は人体においてナトリウムイオンとともに細胞外液の浸透圧と水分バランスを維持し、胃酸（塩酸）を構成しています。",
      compounds: [
        {
          formula: "NaCl",
          name: "塩化ナトリウム",
          description: "自然界で最も一般的な塩素化合物であり、人体に必要な塩分と工業的に塩素を電解製造するための原料です。",
        },
        {
          formula: "HCl",
          name: "塩化水素（塩酸）",
          description: "水に溶けると強酸を形成し、金属のサビ取りや工業用洗浄に広く使用されています。",
        },
      ],
      reactions: [
        {
          equation: "H₂ + Cl₂ → 2HCl",
          description: "塩素ガスと水素ガスを混合した後、強い光を当てるか点火すると、爆発的な反応を起こして塩化水素ガスを生成します。",
          conditions: "光照射または点火",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "塩素ガスは極めて腐食性が高く有毒な化学兵器レベルのガスであり、吸入すると肺に深刻なダメージを与え、致命的となる可能性すらあります。塩素系漂白剤と酸性洗剤を絶対に自ら混合してはいけません。",
        },
      ],
      isotopes: [
        {
          notation: "³⁵Cl",
          use: "化学分析の基準",
          description: "自然界で最も存在量の多い塩素同位体であり、約4分の3の割合を占めています。",
        },
        {
          notation: "³⁷Cl",
          use: "環境化学の追跡",
          description: "安定した重同位体であり、³⁵Clとの比率は質量分析や地下水汚染源の追跡によく使用されます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "塩素ガスの毒性、漂白作用、および工業化学的性質はすべて極めて詳細な実測および歴史的記録データを備えています。",
      },
    },
    Ar: {
      description: "アルゴンは極めて安定した単原子希ガスであり、地球の大気中で3番目に豊富な気体です（約0.93%を占める）。通常、化学反応には関与しません。",
      uses: ["アーク溶接のシールドガス（金属の高温酸化を防ぐため）", "白熱電球や蛍光灯の封入ガス", "半導体ウェハー製造の不活性環境"],
      appearance: "常温では無色、無臭の気体。",
      safety: [
        {
          level: "警告",
          description: "アルゴンガスは完全に無毒ですが、空気より重いため、密閉空間や深い穴で大量に漏れると底部に沈殿し、酸素を押し出して警告なしに低酸素症による窒息の危険をもたらします。",
        },
      ],
      isotopes: [
        {
          notation: "⁴⁰Ar",
          use: "地質年代測定",
          description: "カリウム-アルゴン年代測定法における重要な同位体であり、岩石や隕石の年代を測定するために使用されます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "アルゴンガスの物理的不活性、熱力学的挙動、および同位体年代測定への応用はすべて豊富な実測データを備えています。",
      },
    },
    K: {
      description: "カリウムは極めて活発な銀白色のアルカリ金属です。自然界では決して単体で存在せず、主に鉱物や海水に溶解した塩の形で広く分布しています。",
      uses: ["農業用カリ肥料の製造", "工業用水酸化カリウムと石鹸", "実験室の強力な還元剤"],
      appearance: "常温では柔らかい銀白色の金属であり、切断後に空気に触れるとすぐに酸化して光沢を失います。",
      lifeRole: "カリウム金属単体は水に触れると激しい爆発を起こします。人体や植物が依存しているのはカリウムイオン（K⁺）であり、細胞内の浸透圧の維持、神経伝達、筋肉の収縮を担っています。",
      compounds: [
        {
          formula: "KCl",
          name: "塩化カリウム",
          description: "最も一般的なカリ肥料であり、医療で血中カリウムを補給するためにもよく使用されます。",
        },
        {
          formula: "KNO₃",
          name: "硝酸カリウム",
          description: "重要な肥料であり、伝統的な黒色火薬の主成分でもあります。",
        },
      ],
      reactions: [
        {
          equation: "2K + 2H₂O → 2KOH + H₂",
          description: "カリウム金属は水に触れると激しく反応して水素を生成し、放出された高熱が生成された水素に直接引火し、さらには爆発を引き起こします。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "カリウム金属は水、空気中の酸素、および水分と極めて容易に激しい反応を起こし、火災やさらには爆発を引き起こします。鉱油中に保存する必要があり、絶対に自ら取り扱うべきではありません。",
        },
      ],
      isotopes: [
        {
          notation: "⁴⁰K",
          use: "地質年代測定と自然放射線源",
          description: "自然界に存在する微量の放射性同位体であり、岩石や人体内の自然バックグラウンド放射線の主な発生源の一つです。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "カリウムの化学反応性、生理学的機能、および同位体特性はすべて豊富で完備された科学的実測データを備えています。",
      },
    },
    Ca: {
      description: "カルシウムは銀灰色のアルカリ土類金属であり、化学的性質はかなり活発です。地殻で5番目に豊富な元素であり、大多数の生物体の構造の重要な基盤でもあります。",
      uses: ["他の金属を製錬するための還元剤", "セメントや建築材料の製造（化合物の形態で）", "鉄鋼や合金の脱酸剤"],
      appearance: "常温では比較的硬い銀灰色の金属。",
      lifeRole: "単体のカルシウムは腐食性があり、生物体には存在しません。人体は神経信号を伝達するためにカルシウムイオン（Ca²⁺）を利用し、リン酸カルシウム化合物の形態で骨や歯を構築します。",
      compounds: [
        {
          formula: "CaCO₃",
          name: "炭酸カルシウム",
          description: "石灰岩、大理石、貝殻の主成分であり、建築やカルシウム補給剤によく使用されます。",
        },
        {
          formula: "CaO",
          name: "酸化カルシウム",
          description: "通称生石灰。水に触れると大量の熱エネルギーを放出して消石灰を生成し、工業や建築に広く使用されます。",
        },
      ],
      reactions: [
        {
          equation: "Ca + 2H₂O → Ca(OH)₂ + H₂",
          description: "カルシウム金属は水と反応し、安定して水素ガスを放出し、水にわずかに溶けるアルカリ性の水酸化カルシウム溶液を生成します。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "カルシウム金属単体は水や湿気に触れると可燃性の水素ガスと腐食性のアルカリ液を発生させるため、皮膚への直接接触を避け、適切に保管する必要があります。",
        },
      ],
      isotopes: [
        {
          notation: "⁴⁰Ca",
          use: "核物理研究",
          description: "自然界で最も豊富なカルシウムの安定同位体であり、地球上の天然カルシウムの約97%を占めています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "カルシウムの結晶構造、反応熱力学、および生物医学的データはすべて権威ある機関の実測データです。",
      },
    },
    Sc: {
      description: "スカンジウムは軽量の銀白色遷移金属であり、希土類元素に属します。地殻に広く分布していますが、濃集することは極めてまれであるため、抽出が難しく価格も比較的高いです。",
      uses: ["航空宇宙用スカンジウムアルミニウム合金の製造", "高強度スポーツ用品（自転車のフレームなど）", "メタルハライドランプの発光添加物"],
      appearance: "常温では銀白色の金属であり、空気中にさらされると次第に酸化してわずかに黄色またはピンク色の光沢を呈します。",
      compounds: [
        {
          formula: "Sc₂O₃",
          name: "酸化スカンジウム",
          description: "スカンジウム金属の抽出と高性能固体レーザーの製造における重要な原料。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "スカンジウム金属単体には明らかな毒性はありませんが、極めて微細なスカンジウム粉末は空気中で引火性があります。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "スカンジウムの冶金特性と合金への応用データはすべて、現代材料科学の実測データです。",
      },
    },
    Ti: {
      description: "チタンは硬く、軽く、耐食性のある銀灰色の遷移金属です。非常に高い強度重量比を持ち、過酷な環境下で優れた化学的安定性を示します。",
      uses: ["航空宇宙の機体とエンジン部品", "人工関節と歯科インプラント", "白色顔料の製造（二酸化チタンの形態で）"],
      appearance: "常温では金属光沢を持つ銀灰色の金属。",
      lifeRole: "チタン金属は人体に対して完全に無毒であり、優れた生体適合性を備えています。免疫系はそれにほとんど拒絶反応を示さないため、医療用インプラントの第一選択肢となっています。",
      compounds: [
        {
          formula: "TiO₂",
          name: "二酸化チタン",
          description: "極めて安定した白色粉末であり、日焼け止め、塗料、食品添加物に広く応用されています。",
        },
        {
          formula: "TiCl₄",
          name: "四塩化チタン",
          description: "純チタンを抽出するための中間生成物。湿った空気に触れると濃い白色の煙を発生させ、煙幕の製造に使用できます。",
        },
      ],
      reactions: [
        {
          equation: "Ti + O₂ → TiO₂",
          description: "チタンは高温で空気中の酸素と極めて容易に結合しますが、常温では表面に緻密な酸化皮膜が生成され、それ以上の腐食を防ぎます。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "塊状のチタン金属は極めて安全ですが、極細のチタン金属粉末は極めて引火しやすく、燃焼温度も極めて高いため、通常の消火器で消火するのは困難です。",
        },
      ],
      isotopes: [
        {
          notation: "⁴⁸Ti",
          use: "材料科学と物理研究",
          description: "自然界で最も一般的なチタン同位体であり、7割以上を占めています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "チタンの物理的強度、耐食特性、および生体適合性はすべて、大量の医療および工業的実測データを備えています。",
      },
    },
    V: {
      description: "バナジウムは硬く、延性のある銀灰色の遷移金属です。主に合金添加物として機能し、鉄鋼の強度と靭性を著しく向上させることができます。",
      uses: ["高強度合金鋼と工具鋼の製造", "硫酸工業における触媒（酸化物の形態で）", "バナジウムレドックスフロー電池"],
      appearance: "常温では光沢のある銀灰色の金属。",
      compounds: [
        {
          formula: "V₂O₅",
          name: "五酸化二バナジウム",
          description: "猛毒化合物であり、接触法による硫酸製造プロセスに不可欠な触媒です。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "バナジウム金属単体は比較的安全ですが、バナジウムの多くの化合物（特に粉塵）は強い毒性を持ち、吸入すると呼吸器を激しく刺激します。",
        },
      ],
      isotopes: [
        {
          notation: "⁵¹V",
          use: "核磁気共鳴と材料分析",
          description: "自然界の99.7%以上を占める安定同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "バナジウムの冶金効果と化合物の毒物学はすべて、成熟した工業および医学的実測データを備えています。",
      },
    },
    Cr: {
      description: "クロムは硬く、高融点であり、輝く光沢を持つ遷移金属です。その化合物が非常に豊富な色彩を持つため、その名前はギリシャ語の「色」に由来します。",
      uses: ["ステンレス鋼の製造", "防錆と装飾のための金属表面へのクロムメッキ", "皮革のなめしと工業用顔料"],
      appearance: "常温では極めて高い光沢を持つ硬い銀灰色の金属。",
      lifeRole: "3価クロムイオン（Cr³⁺）は、人体が糖分と脂質を代謝するために必要な微量元素です。しかし、6価クロム（Cr⁶⁺）化合物は生物体に対して猛毒であり、強い発がん性を持ちます。",
      compounds: [
        {
          formula: "Cr₂O₃",
          name: "酸化クロム(III)",
          description: "緑色の固体で、顔料や研磨剤としてよく使用され、比較的安定しており毒性は低いです。",
        },
        {
          formula: "K₂Cr₂O₇",
          name: "二クロム酸カリウム",
          description: "強力な酸化剤であり、鮮やかなオレンジレッド色を示し、猛毒で発がん性があります。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "クロム金属自体は無毒ですが、工業プロセスで発生する6価クロムの粉塵や溶液は強い毒性と発がん性を持ち、不法投棄や無防備な接触は厳禁です。",
        },
      ],
      isotopes: [
        {
          notation: "⁵²Cr",
          use: "環境化学と生物代謝研究",
          description: "自然界で最も豊富に存在するクロム同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "クロムの冶金への応用、および6価クロムの毒物学と発がん性はすべて極めて明確な実測データを備えています。",
      },
    },
    Mn: {
      description: "マンガンは硬くて脆い銀灰色の遷移金属です。自然界では鉄鉱石と共生していることが多く、鉄鋼工業において不可欠な脱酸剤および合金剤です。",
      uses: ["高マンガン耐摩耗鋼材（レール、金庫など）の製造", "乾電池とアルカリ電池の減極剤", "アルミニウム合金工業の添加剤"],
      appearance: "常温ではわずかにピンクがかった色合いを持つ銀灰色の金属であり、硬くて脆い質感を持っています。",
      lifeRole: "微量のマンガンイオン（Mn²⁺）は、複数の人体酵素（抗酸化酵素など）が機能するために不可欠な補因子です。しかし、過剰に摂取すると中枢神経系を損なう可能性があります。",
      compounds: [
        {
          formula: "MnO₂",
          name: "二酸化マンガン",
          description: "黒色粉末であり、マンガン乾電池に広く応用されており、実験室で酸素を製造する際の一般的な触媒でもあります。",
        },
        {
          formula: "KMnO₄",
          name: "過マンガン酸カリウム",
          description: "紫黒色の強力な酸化剤結晶。水に溶けると赤紫色になり、医薬品の消毒や水処理によく使用されます。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "マンガン金属とその化合物の粉塵に長期間曝露または吸入すると、重篤で不可逆的な神経性疾患（マンガン中毒）を引き起こす可能性があります。",
        },
      ],
      isotopes: [
        {
          notation: "⁵⁵Mn",
          use: "核磁気共鳴と材料科学",
          description: "自然界に唯一存在する安定同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "マンガンの合金性能、触媒メカニズム、および神経毒性はすべて長期的に蓄積された実測データを備えています。",
      },
    },
    Fe: {
      description: "鉄は地球上で質量が最も豊富な元素であり、人類が最も広く使用している遷移金属でもあります。強い磁性を持ち、酸素や水分と極めて容易に反応して錆びます。",
      uses: ["建築用鉄筋と構造鋼", "自動車や船舶用の鋼板の製造", "鋳鉄製の調理器具や各種機械工具"],
      appearance: "常温の純鉄は柔らかい銀灰色の金属ですが、日常で見られる鉄の多くは炭素を含む硬い合金です。",
      lifeRole: "純鉄金属には生物学的機能はありません。しかし、第一鉄イオン（Fe²⁺）と第二鉄イオン（Fe³⁺）は人体の赤血球のヘモグロビンの中心であり、体内で酸素を運搬する役割を担っています。",
      compounds: [
        {
          formula: "Fe₂O₃",
          name: "酸化鉄(III)",
          description: "赤褐色の粉末であり、通称赤サビ。重要な鉄鉱石（赤鉄鉱）の成分でもあります。",
        },
        {
          formula: "FeCl₃",
          name: "塩化鉄(III)",
          description: "黄褐色の強酸性塩であり、下水処理やプリント基板のエッチングによく使用されます。",
        },
      ],
      reactions: [
        {
          equation: "4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃",
          description: "鉄は湿った空気中で極めて容易に酸化し、多孔質で緩い水酸化鉄と酸化鉄の混合物（つまりサビ）を生成し、内部の継続的な腐食を防ぐことはできません。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "塊状の鉄金属は無毒で安全ですが、サビと土が混ざって刺し傷ができると、破傷風菌に感染しやすくなります。鉄剤を過剰摂取すると急性中毒を引き起こします。",
        },
      ],
      isotopes: [
        {
          notation: "⁵⁶Fe",
          use: "原子核天体物理学研究",
          description: "宇宙で最も安定した核種の一つであり、恒星の核融合反応の最終産物です。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "鉄の冶金学、磁性物理学、および生化学的代謝経路はすべて、人類に最も馴染みのある実測データです。",
      },
    },
    Co: {
      description: "コバルトは硬く、磁性を持つ銀灰色の遷移金属です。極端な温度下でも高い強度と磁性を維持でき、ハイテク産業における重要な戦略金属です。",
      uses: ["リチウムイオン電池の正極材料", "航空ガスタービンエンジンの超合金", "高硬度切削工具の製造"],
      appearance: "常温では光沢のある銀灰色の金属であり、わずかに淡い青みを帯びています。",
      lifeRole: "コバルトイオンはビタミンB12（コバラミン）の中心原子であり、人体の神経系の健康と赤血球の生成に不可欠です。",
      compounds: [
        {
          formula: "CoCl₂",
          name: "塩化コバルト",
          description: "無水時は青色、吸水後はピンク色になるため、乾燥剤の湿度インジケーターとしてよく使用されます。",
        },
        {
          formula: "LiCoO₂",
          name: "コバルト酸リチウム",
          description: "スマートフォンや電気自動車のバッテリーのエネルギー貯蔵化学物質として広く応用されています。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "コバルト粉塵に過剰に接触すると、重篤な呼吸器疾患や皮膚アレルギーを引き起こす可能性があります。一部の人工放射性同位体は強い放射線障害をもたらします。",
        },
      ],
      isotopes: [
        {
          notation: "⁶⁰Co",
          use: "医療放射線治療と工業用探傷",
          description: "強いガンマ線を放出する放射性同位体であり、がんの放射線治療や食品の殺菌に広く使用されています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "コバルトの合金性能、電池の化学反応、および生物学的機能はすべて、信頼性の高い実測データを備えています。",
      },
    },
    Ni: {
      description: "ニッケルは硬く、延性があり、耐食性に優れた銀白色の遷移金属です。空気中で極めて安定しており、保護メッキや合金成分としてよく使用されます。",
      uses: ["ステンレス鋼の製造（鉄、クロムとの合金）", "金属表面の防錆ニッケルメッキ", "硬貨の製造と二次電池（ニッケル水素電池）"],
      appearance: "常温ではわずかに金色の光沢を帯びた銀白色の金属。",
      lifeRole: "微量のニッケルは一部の植物や微生物にとって必須の元素です。しかし、人体においては既知の必須な生理学的機能はなく、むしろ接触アレルギーを引き起こすことがよくあります。",
      compounds: [
        {
          formula: "NiO",
          name: "酸化ニッケル",
          description: "緑色から黒色の粉末であり、セラミックの釉薬やニッケル系電池の製造に広く応用されています。",
        },
        {
          formula: "NiCl₂",
          name: "塩化ニッケル",
          description: "水に溶けやすい黄色または緑色の結晶であり、ニッケルメッキプロセスにおける主要な化学物質です。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "ニッケル金属は一般的な接触アレルゲンです（粗悪なアクセサリーによる皮膚炎など）。一部のニッケル化合物の粉塵を長期間吸入すると発がん性のリスクがあります。",
        },
      ],
      isotopes: [
        {
          notation: "⁵⁸Ni",
          use: "中性子検出と核反応研究",
          description: "自然界で最も豊富なニッケル同位体であり、約3分の2を占めています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ニッケルの冶金学、電気化学、および毒物学はすべて長期的な科学的および工業的実測データを備えています。",
      },
    },
    Cu: {
      description: "銅は赤みを帯びたオレンジ色の金属光沢を持つ遷移金属であり、優れた導電性と熱伝導性を備えています。人類が最も初期に製錬し使用した金属の一つです。",
      uses: ["電線と電気機器", "水道管と建築材料", "青銅および黄銅合金の製造"],
      appearance: "常温では赤みを帯びたオレンジ色の光沢を持つ柔らかい金属。",
      lifeRole: "銅金属単体は無毒ですが、微量の第二銅イオン（Cu²⁺）は複数の人体酵素の中心的な補因子です。可溶性の銅塩を過剰に摂取すると重金属中毒を引き起こします。",
      compounds: [
        {
          formula: "CuO",
          name: "酸化銅",
          description: "黒色の固体であり、ガラスやセラミックの顔料としてよく使用されます。",
        },
        {
          formula: "CuSO₄",
          name: "硫酸銅",
          description: "青色の結晶であり、農業用殺菌剤、電気メッキ工業、実験室の試薬に広く使用されています。",
        },
      ],
      reactions: [
        {
          equation: "2Cu + O₂ → 2CuO",
          description: "銅は高温で空気中の酸素とゆっくりと反応し、表面の光沢が失われ、黒色の酸化銅が生成されます。",
          conditions: "加熱",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "固体の銅金属は非常に安全ですが、可溶性の銅塩を過剰に摂取すると胃腸を強く刺激し、急性重金属中毒を引き起こします。",
        },
      ],
      isotopes: [
        {
          notation: "⁶³Cu",
          use: "核磁気共鳴研究",
          description: "自然界で最も一般的な安定同位体であり、7割近くを占めています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "銅の導電性などの物理的性質、化学反応性、および生物学的作用はすべて歴史が古く、完備された実測データです。",
      },
    },
    Zn: {
      description: "亜鉛はわずかに青みを帯びた銀白色の遷移金属です。空気中で緻密な酸化層を形成しやすいため、鉄の錆を防ぐための犠牲陽極としてよく使用されます。",
      uses: ["鉄鋼表面の防錆亜鉛メッキ", "黄銅（銅との合金）の製造", "乾電池の外殻と負極"],
      appearance: "常温ではわずかに青灰色の光沢を持つ金属。",
      lifeRole: "亜鉛単体には生物学的機能はありませんが、亜鉛イオン（Zn²⁺）は人体の免疫システムとDNA合成に不可欠な微量元素であり、数百種類の酵素に存在しています。",
      compounds: [
        {
          formula: "ZnO",
          name: "酸化亜鉛",
          description: "白色粉末であり、日焼け止め、ゴム添加剤、医療用軟膏に広く応用されています。",
        },
        {
          formula: "ZnS",
          name: "硫化亜鉛",
          description: "蛍光特性を持つ白色または微黄色の固体であり、発光塗料や蛍光スクリーンに使用されます。",
        },
      ],
      reactions: [
        {
          equation: "Zn + 2HCl → ZnCl₂ + H₂",
          description: "亜鉛金属は希酸（塩酸など）と反応して酸中の水素を置換し、可燃性の水素ガスを発生させます。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "亜鉛金属自体は安全ですが、高温での溶接や製錬の際に発生する酸化亜鉛のヒュームを吸入すると、金属ヒューム熱（急性呼吸器症状の一種）を引き起こします。",
        },
      ],
      isotopes: [
        {
          notation: "⁶⁴Zn",
          use: "生化学と医学の追跡",
          description: "自然界で最も豊富に存在する亜鉛の安定同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "亜鉛の電気化学的防錆特性、合金の配合、および生物酵素のメカニズムはすべて信頼性の高い実測データを備えています。",
      },
    },
    Ga: {
      description: "ガリウムは銀白色の半金属であり、融点が異常に低く、人間の手のひらの上でも溶けることができます。現代の高周波電子機器や光電半導体において重要な役割を果たしています。",
      uses: ["マイクロ波および高周波通信半導体（ヒ化ガリウム）の製造", "高輝度青色および白色LED", "高温温度計の充填金属"],
      appearance: "常温では銀白色の金属であり、少し加熱する（約29.7°C）と溶けて液体になります。",
      lifeRole: "人体においてガリウムの自然な生理学的機能はありませんが、特定の放射性ガリウム同位体化合物は医学的な腫瘍イメージングに使用されます。",
      compounds: [
        {
          formula: "GaAs",
          name: "ヒ化ガリウム",
          description: "重要な半導体材料であり、電子移動度がシリコンより高く、高周波および無線通信に広く使用されています。",
        },
        {
          formula: "GaN",
          name: "窒化ガリウム",
          description: "次世代のワイドバンドギャップ半導体であり、高性能充電器や青色レーザーダイオードに使用されます。",
        },
      ],
      reactions: [
        {
          equation: "2Ga + 6HCl → 2GaCl₃ + 3H₂",
          description: "ガリウムは塩酸と反応し、塩化ガリウムを生成して水素ガスを放出します。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "ガリウムは人体のほとんどにおいて無毒ですが、液体のガリウムはアルミニウム金属に深く浸透して腐食し、その構造強度を破壊するため、絶対に飛行機に持ち込んではいけません。",
        },
      ],
      isotopes: [
        {
          notation: "⁶⁷Ga",
          use: "医学イメージング",
          description: "放射性同位体であり、核医学における炎症や腫瘍の定位トレーサーとしてよく使用されます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ガリウムの低融点特性、半導体の電気的性能、および合金の腐食現象はすべて完備された実測データを備えています。",
      },
    },
    Ge: {
      description: "ゲルマニウムは灰白色の半金属であり、脆く、半導体特性を持っています。初期のトランジスタの中核材料でしたが、現在では主に光学および特殊電子部品に応用されています。",
      uses: ["光ファイバー通信ネットワークの中核ドーパント", "赤外線暗視装置のレンズ材料", "太陽電池と特殊半導体"],
      appearance: "常温では金属光沢を持つ灰白色の固体結晶。",
      lifeRole: "ゲルマニウムは生物体において既知の必須な生理学的機能はありません。かつては健康食品として効能が謳われたこともありましたが、無機ゲルマニウム化合物の摂取は人体に対して腎毒性を持ちます。",
      compounds: [
        {
          formula: "GeO₂",
          name: "二酸化ゲルマニウム",
          description: "高屈折率と赤外線透過性を持つ光学材料であり、光ファイバーや広角レンズの製造に広く使用されています。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "一部の無機ゲルマニウム化合物が健康食品として長期間または大量に摂取されると、不可逆的な重篤な腎不全を引き起こします。",
        },
      ],
      isotopes: [
        {
          notation: "⁷²Ge",
          use: "基礎物理と半導体研究",
          description: "安定した同位体であり、天然ゲルマニウムの2割以上を占めています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ゲルマニウムの半導体特性、光の屈折率、および腎毒性はすべて明確な実測データを備えています。",
      },
    },
    As: {
      description: "ヒ素は猛毒の半金属元素であり、自然界に複数の同素体として存在します。その毒性は悪名高いにもかかわらず、現代の半導体工業において不可欠なドーパント材料です。",
      uses: ["半導体のN型ドーピングとヒ化ガリウムウェハー", "木材防腐剤（歴史的用途。現在はほとんどが禁止されています）", "鉛蓄電池の合金添加物"],
      appearance: "一般的な灰ヒ素は、常温では金属光沢を持つ銀灰色の脆い固体です。",
      lifeRole: "ヒ素および多くのヒ素化合物は、大多数の生物体に対して猛毒であり発がん性を持ち、細胞のエネルギー代謝に関わる重要な酵素を著しく阻害します。",
      compounds: [
        {
          formula: "As₂O₃",
          name: "三酸化二ヒ素",
          description: "通称ヒ素、無色無味の猛毒粉末。歴史的には毒薬として広く使用されていましたが、現在は厳格な管理の下で特定の白血病の治療に使用されています。",
        },
        {
          formula: "GaAs",
          name: "ヒ化ガリウム",
          description: "高速電子部品や光電結晶の重要な材料であり、化学構造が極めて安定しています。",
        },
      ],
      reactions: [
        {
          equation: "4As + 3O₂ → 2As₂O₃",
          description: "ヒ素は空気中で加熱すると燃焼し、刺激的なニンニク臭を持つ猛毒の白煙（三酸化二ヒ素）を発します。",
          conditions: "加熱",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "ヒ素およびその多くの化合物は猛毒であり、第一級発がん性物質です。微量を吸入または摂取しただけでも致命的となる可能性があります。厳格な防護の下で取り扱う必要があり、自ら取り扱うべきではありません。",
        },
      ],
      isotopes: [
        {
          notation: "⁷⁵As",
          use: "核磁気共鳴と半導体ドーピング",
          description: "自然界に唯一存在する安定なヒ素同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ヒ素の化学反応、化合物の猛毒性、および半導体への応用はすべて、長期的な労働安全および科学的実測データを備えています。",
      },
    },
    Se: {
      description: "セレンは非金属（または半金属）元素であり、独特の光導電性を持っています。つまり、光が当たると導電能力が大幅に向上します。生命への影響は、微量か過剰かによって両極端に分かれます。",
      uses: ["コピー機やレーザープリンターの感光ドラム", "ガラス工業における脱色剤とルビーガラスの発色剤", "整流器と光電池"],
      appearance: "最も安定した同素体は、常温では金属光沢を示す灰色の固体であり、他に赤色の粉末状態のものもあります。",
      lifeRole: "微量のセレンイオンは、人体の抗酸化酵素（グルタチオンペルオキシダーゼなど）の中心です。しかし、無機セレンを過剰に摂取するとセレン中毒を引き起こし、脱毛、神経障害、ニンニク臭のする息を引き起こします。",
      compounds: [
        {
          formula: "SeO₂",
          name: "二酸化セレン",
          description: "重要な酸化剤であり、有機化学合成や電気メッキ工業でよく使用され、高い毒性を持ちます。",
        },
      ],
      reactions: [
        {
          equation: "Se + O₂ → SeO₂",
          description: "セレンは空気中で燃焼して青い炎を出し、腐った大根のような強い臭いを持つ有毒な二酸化セレンガスを生成します。",
          conditions: "点火",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "セレン単体は比較的安全ですが、その化合物の多くは高い毒性と刺激性を持ちます。工業的処理の際は、粉塵やガスを吸入しないように厳重に防護する必要があります。",
        },
      ],
      isotopes: [
        {
          notation: "⁸⁰Se",
          use: "同位体地球化学の追跡",
          description: "自然界で最も豊富な安定同位体であり、半数近くを占めています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "セレンの光電特性、生物学的な微量の必須性、および過剰中毒のメカニズムはすべて完備された実測データを備えています。",
      },
    },
    Br: {
      description: "臭素は常温で唯一液体の非金属元素です。ハロゲンに属し、極めて高い反応性、強い腐食性、および刺激的な悪臭を持っています。",
      uses: ["難燃剤の製造", "水処理とプールの消毒（塩素の代替品として）", "有機合成と農薬製品の製造"],
      appearance: "常温では深赤褐色で、刺激性の赤褐色の蒸気が絶えず発生する重い液体。",
      lifeRole: "いくつかの研究では、極微量の臭化物イオン（Br⁻）が動物のコラーゲン合成に関与している可能性があると指摘されています。しかし、無機臭化物を過剰に摂取すると中枢神経系を著しく抑制します（臭素中毒）。",
      compounds: [
        {
          formula: "AgBr",
          name: "臭化銀",
          description: "光に対して極めて敏感な淡黄色の固体であり、従来の白黒およびカラー写真フィルムの中核となる感光材料です。",
        },
        {
          formula: "NaBr",
          name: "臭化ナトリウム",
          description: "歴史的には医学的鎮静剤として使用されていましたが、現在では石油探査の掘削液によく使用されています。",
        },
      ],
      reactions: [
        {
          equation: "2Na + Br₂ → 2NaBr",
          description: "臭素がアルカリ金属（ナトリウムなど）と接触すると、激しい反応やさらには爆発を起こし、白色の臭化物塩の固体を生成します。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "液体の臭素は極めて揮発しやすく、その赤褐色の蒸気は呼吸器や眼の粘膜に対して強い破壊性と毒性を持ちます。液体が皮膚に触れると重度で治りにくい化学火傷を引き起こすため、絶対に自ら取り扱うべきではありません。",
        },
      ],
      isotopes: [
        {
          notation: "⁷⁹Br",
          use: "質量分析による構造決定",
          description: "⁸¹Brとの自然存在比はほぼ1:1であり、化学構造の質量分析において極めて識別性の高い特徴となります。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "臭素の揮発性、強い腐食性、および感光化合物のメカニズムはすべて、極めて詳細な化学的および労働安全の実測データを備えています。",
      },
    },
    Kr: {
      description: "クリプトンは無色、無臭、無味の不活性ガス元素であり、地球の大気中にはごくわずかしか存在しません。通電すると強い白色光を発するため、特殊照明やレーザー技術によく使用されます。",
      uses: ["高周波ストロボや高速撮影照明", "複層ガラス窓の断熱充填ガス", "フッ化クリプトン（KrF）エキシマレーザー（半導体リソグラフィ用）"],
      appearance: "常温では無色、無臭の気体。通電により励起されると、明るい淡白色または微緑色の光を放ちます。",
      safety: [
        {
          level: "警告",
          description: "クリプトンガス自体は完全に無毒で、化学的にも極めて不活性ですが、密閉空間や低地で大量に放出されると酸素を押し出し、警告なしに窒息の危険をもたらします。",
        },
      ],
      isotopes: [
        {
          notation: "⁸⁴Kr",
          use: "地球および大気科学の追跡",
          description: "自然界で最も豊富なクリプトン同位体であり、6割近くを占めています。",
        },
        {
          notation: "⁸¹Kr",
          use: "古い地下水の年代測定",
          description: "極微量の放射性同位体であり、深層地下水の年代を測定するために使用されます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "クリプトンの物理スペクトル、熱力学的断熱特性、および放射性同位体による年代測定はすべて、精密物理学における実測データです。",
      },
    },
    Rb: {
      description: "ルビジウムは極めて柔らかく、化学的性質が極めて活発な銀白色のアルカリ金属です。空気中ではすぐに酸化し、自然発火することすらあります。",
      uses: ["特殊ガラスの製造", "光電池と光電子増倍管", "高精度原子時計"],
      appearance: "常温では柔らかい銀白色の金属であり、空気にさらされると急速に酸化して光沢を失い、自然発火する可能性があります。",
      lifeRole: "単体のルビジウムは水に触れると激しい爆発を起こします。ルビジウムイオン（Rb⁺）は人体内で既知の機能はありませんが、化学的性質がカリウムに似ているため、人体に微量に吸収され代謝されます。",
      compounds: [
        {
          formula: "RbCl",
          name: "塩化ルビジウム",
          description: "生化学研究においてバイオマーカーやトレーサーとしてよく使用されます。",
        },
      ],
      reactions: [
        {
          equation: "2Rb + 2H₂O → 2RbOH + H₂",
          description: "ルビジウム金属は水と極めて激しい爆発的反応を起こし、水酸化ルビジウムを生成し、放出された水素に引火または爆発させます。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "ルビジウム金属は水、空気中の酸素、および水分と極めて容易に激しい反応を起こし、爆発的燃焼を引き起こします。真空または不活性ガス中に保存する必要があり、絶対に自ら取り扱うべきではありません。",
        },
      ],
      isotopes: [
        {
          notation: "⁸⁷Rb",
          use: "地質年代測定",
          description: "微弱な放射性を持つ同位体であり、ルビジウム・ストロンチウム年代測定法は古い岩石の年代を測定するためによく使用されます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ルビジウムの極めて高い反応性、熱力学データ、および同位体特性はすべて完備された実測データを備えています。",
      },
    },
    Sr: {
      description: "ストロンチウムは柔らかい銀黄色のアルカリ土類金属であり、化学的性質はかなり活発です。燃焼すると極めて鮮やかな深紅色の炎を出します。",
      uses: ["赤色の花火や信号弾の製造", "フェライト磁石の添加剤", "骨がん治療におけるストロンチウム同位体の医学的応用"],
      appearance: "常温ではわずかに黄色を帯びた銀灰色の金属であり、切断後に空気に触れると急速に酸化します。",
      lifeRole: "ストロンチウムイオンの化学的性質はカルシウムに似ており、少量が人体の骨に蓄積されますが、多くは無害です。しかし、核爆発によって生成される放射性同位体（ストロンチウム90）は極めて危険であり、骨がんを引き起こします。",
      compounds: [
        {
          formula: "SrCO₃",
          name: "炭酸ストロンチウム",
          description: "最も一般的なストロンチウム化合物の一つであり、花火の赤色発光剤の製造に広く使用されています。",
        },
      ],
      reactions: [
        {
          equation: "Sr + 2H₂O → Sr(OH)₂ + H₂",
          description: "ストロンチウムは水と反応し、アルカリ性の水酸化ストロンチウム溶液を生成して可燃性の水素ガスを放出します。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "ストロンチウム金属単体は空気や水分と反応して発火しやすいです。その人工放射性同位体は極めて危険な核廃棄物です。",
        },
      ],
      isotopes: [
        {
          notation: "⁹⁰Sr",
          use: "アイソトープ熱電気発生器と工業用厚さ計",
          description: "核分裂の危険な生成物であり、骨に蓄積する可能性があるため、原子力災害において最も有害な放射性核種の一つです。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ストロンチウムのスペクトル特性、化学反応性、および放射線毒物学はすべて豊富な実測データを備えています。",
      },
    },
    Y: {
      description: "イットリウムは銀白色の遷移金属であり、通常は希土類元素と共生しています。現代の光電技術、レーザー技術、および高温超伝導体における重要な基盤材料です。",
      uses: ["高温超伝導材料（YBCOなど）の製造", "白色LEDとテレビの蛍光体", "高強度マグネシウム合金の添加物"],
      appearance: "常温では金属光沢を持つ銀灰色の金属。",
      compounds: [
        {
          formula: "Y₃Al₅O₁₂",
          name: "イットリウム・アルミニウム・ガーネット（YAG）",
          description: "重要な人工結晶材料であり、他の元素をドープして固体レーザー（Nd:YAGレーザーなど）によく使用されます。",
        },
        {
          formula: "YBa₂Cu₃O₇",
          name: "イットリウム系超伝導体（YBCO）",
          description: "有名な高温超伝導材料であり、液体窒素温度で超伝導現象を実現できます。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "塊状のイットリウム金属は比較的安全ですが、その粉末は空気中で極めて発火しやすいです。イットリウム化合物の粉塵を過剰に吸入すると肺を損傷する可能性があります。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "イットリウムの光学的、磁気的、および超伝導電気学的な物理データはすべて、物理学および材料科学界で広く検証された実測データです。",
      },
    },
    Zr: {
      description: "ジルコニウムは硬く、灰白色の遷移金属であり、優れた耐食性と極めて低い中性子吸収断面積を備えています。これにより、原子力産業において不可欠な材料となっています。",
      uses: ["原子炉のウラン燃料棒の被覆管", "航空宇宙および化学工業用の高温耐食性合金", "人工ダイヤモンド（キュービックジルコニア）とセラミッククラウン"],
      appearance: "常温では極めて硬い灰白色の金属。",
      compounds: [
        {
          formula: "ZrO₂",
          name: "二酸化ジルコニウム",
          description: "耐熱性があり極めて硬い白色固体であり、高級セラミック材料や安価なダイヤモンド代替品に広く使用されています。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "固体のジルコニウム金属は完全に無毒で極めて安定していますが、機械加工プロセスで発生する微細なジルコニウム粉末は空気中で極めて自然発火、爆発しやすいです。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ジルコニウムの耐食データ、核物理特性、および耐高温性能はすべて完備された実測データを備えています。",
      },
    },
    Nb: {
      description: "ニオブは柔らかく、灰色の延性のある遷移金属です。優れた低温超伝導特性を持ち、鉄鋼の強度と耐熱性を著しく向上させることができます。",
      uses: ["粒子加速器と核磁気共鳴の超伝導磁石", "航空宇宙ロケットエンジンの耐熱合金", "高級ステンレス鋼とパイプライン鋼の強化添加物"],
      appearance: "常温では光沢のある灰色の金属であり、表面が酸化すると極めて美しい様々な干渉色を示します。",
      compounds: [
        {
          formula: "Nb₃Sn",
          name: "ニオブスズ",
          description: "極めて重要な超伝導化合物であり、強力な磁場を発生させる超伝導コイルの製造に広く使用されています。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "ニオブ金属自体は安全で無毒ですが、多くのニオブ化合物は刺激性を持つため、粉塵を取り扱う際は防護装備を着用する必要があります。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ニオブの冶金的強化効果や超伝導転移温度などはすべて権威ある機関の実測データを備えています。",
      },
    },
    Mo: {
      description: "モリブデンは極めて高い融点を持つ銀灰色の遷移金属です。工業用合金および生物圏の窒素代謝メカニズムにおいて、不可欠かつ重要な役割を果たしています。",
      uses: ["高強度の耐食性合金鋼の製造", "石油精製工業の脱硫触媒", "高温炉の電極と発熱体"],
      appearance: "常温では極めて硬い銀灰色の金属。",
      lifeRole: "モリブデンイオンは、動植物および人体内の複数の重要な酵素（ニトロゲナーゼやキサンチンオキシダーゼなど）に不可欠な微量の中心元素であり、不足すると代謝に影響を与えます。",
      compounds: [
        {
          formula: "MoS₂",
          name: "二硫化モリブデン",
          description: "黒色の層状固体であり、高温および真空環境における優れた固体潤滑剤です。",
        },
      ],
      isotopes: [
        {
          notation: "⁹⁹Mo",
          use: "医療用同位体の製造",
          description: "放射性を持ち、核医学で最も一般的に使用される放射線源「テクネチウム99m」の親核種です。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "モリブデンの冶金特性、高温物理学、および生物酵素活性のメカニズムはすべて信頼性の高い実測データを備えています。",
      },
    },
    Tc: {
      description: "テクネチウムは、周期表で初めて完全に人工合成または放射性崩壊によって生成された元素です。自然界にはほとんど存在せず、そのすべての同位体は放射性を持ちます。",
      uses: ["医療画像診断（心筋および骨シンチグラフィ）", "鉄鋼防錆研究における極微量の添加剤", "科学研究のトレーサー"],
      appearance: "常温では銀灰色の金属ですが、実験室外で肉眼で見えるほどの単体の塊として作られることは極めて稀です。",
      lifeRole: "人工的に合成された放射性テクネチウム（テクネチウム99m）化合物は、核医学イメージングのために人体に広く注射されます。半減期が短いため、数日以内に体内から代謝され、崩壊し終わります。",
      compounds: [
        {
          formula: "NaTcO₄",
          name: "過テクネチウム酸ナトリウム",
          description: "医療用注射および腐食防止研究に使用される可溶性放射性塩。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "テクネチウムのすべての形態は放射性の危険があり、放射線防護設備を備えた核医学または放射化学の実験室でのみ取り扱うことができます。",
        },
      ],
      isotopes: [
        {
          notation: "⁹⁹ᵐTc",
          use: "核医学イメージング",
          description: "純粋なガンマ線を放出し、半減期はわずか6時間であり、世界中の医用画像診断で最も広く使用されている放射性同位体です。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "テクネチウムの放射性崩壊データ、医療画像の有効性はすべて詳細かつ高度に標準化された科学的実測データを備えています。",
      },
    },
    Ru: {
      description: "ルテニウムは硬く、希少で脆い銀白色の白金族金属です。主に合金の硬化剤として、また電子工業における耐摩耗性の接点材料として機能します。",
      uses: ["ハードディスクの磁気記憶層の微量コーティング", "白金およびパラジウム金属合金の硬化剤", "太陽電池の化学染料と触媒"],
      appearance: "常温では硬く、砕けやすい銀白色の金属。",
      compounds: [
        {
          formula: "RuO₄",
          name: "四酸化ルテニウム",
          description: "極めて揮発性が高く、猛毒の強力な酸化剤であり、主に電子顕微鏡用の生物試料の染色と固定に使用されます。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "金属ルテニウムは比較的安定しており安全ですが、その高酸化状態の化合物（四酸化ルテニウムの蒸気など）は猛毒であり、目や呼吸器を激しく刺激します。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ルテニウムの金属特性、合金への応用、および化合物の毒物学はすべて明確な化学的実測データを備えています。",
      },
    },
    Rh: {
      description: "ロジウムは極めて希少で高価な銀白色の白金族金属です。優れた耐食性と強力な触媒能力を備えています。",
      uses: ["自動車の排気システムの触媒コンバーター", "高級ジュエリーや銀器の酸化防止光沢メッキ", "工業用硝酸や化学物質合成の触媒"],
      appearance: "常温では強い光沢を持つ銀白色の硬い金属。",
      compounds: [
        {
          formula: "RhCl₃",
          name: "塩化ロジウム",
          description: "他のロジウム均一系触媒を調製するための重要な化学的出発物質。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "固体のロジウム金属は無毒で極めて安定していますが、その化合物の粉塵やエアロゾルは強い刺激性を持ち、一部には発がん性が疑われるものもあります。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁰³Rh",
          use: "工業および科学研究",
          description: "自然界に唯一存在するロジウムの安定同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ロジウムの光の反射率、触媒変換効率、および化学的安定性はすべて十分な実測データを備えています。",
      },
    },
    Pd: {
      description: "パラジウムは柔らかく輝く銀白色の白金族金属です。水素ガスに対して驚異的な吸収能力を持ち、自動車の触媒や電子産業における重要な材料です。",
      uses: ["自動車の排気システムの触媒コンバーター", "積層セラミックコンデンサ（MLCC）", "ジュエリー製造（通称ホワイトゴールド合金の成分）"],
      appearance: "常温では柔らかく、優れた延性を持つ銀白色の金属。",
      reactions: [
        {
          equation: "Pd + H₂ ⇌ PdHₓ",
          description: "パラジウム金属はスポンジのように自身の体積の数百倍もの水素ガスを吸収し、加熱すると放出できるため、水素を精製するための完璧な膜材料となります。",
          conditions: "常温加圧および加熱",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "塊状のパラジウム金属は極めて安全ですが、触媒形態の高比表面積のパラジウム粉末が水素を大量に吸収した場合、空気に触れると極めて容易に自然発火や爆発を起こします。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁰⁶Pd",
          use: "安定元素の存在形態",
          description: "自然界にある6種類のパラジウムの安定同位体の中で最も存在量の多いもの。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "パラジウムの水素ガス吸収熱力学、触媒効率、および材料特性はすべて高度に完備された実測データです。",
      },
    },
    Ag: {
      description: "銀は柔らかく、極めて高い光沢を持つ白色の遷移金属です。すべての金属の中で、最も高い導電率、熱伝導率、および可視光反射率を持っています。",
      uses: ["太陽電池や電子部品の導電性ペースト", "高級ジュエリーや食器の製造", "医療用抗菌材やドレッシング材"],
      appearance: "常温では極めて光沢のある銀白色の柔らかい金属であり、硫黄を含む空気に長時間さらされると黒く変色します。",
      lifeRole: "銀金属は人体に対して既知の生理学的機能はありません。しかし、銀イオン（Ag⁺）は大多数の細菌の細胞壁を透過して酵素系を破壊することができ、極めて強い広範な抗菌作用を持ちます。",
      compounds: [
        {
          formula: "AgBr",
          name: "臭化銀",
          description: "光に対して極めて敏感な淡黄色の固体であり、従来の白黒フィルムやX線写真の感光材料です。",
        },
        {
          formula: "AgNO₃",
          name: "硝酸銀",
          description: "重要な化学実験試薬であり、医療の殺菌や火傷の治療にも使用されます。",
        },
      ],
      reactions: [
        {
          equation: "4Ag + 2H₂S + O₂ → 2Ag₂S + 2H₂O",
          description: "銀は空気中の微量の硫化水素ガスと反応し、表面に黒色の硫化銀を生成します。これが銀器が時間とともに黒くくすむ原因です。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "単体の銀は安全で無毒ですが、過剰な銀化合物や銀ナノ粒子を長期間摂取または接触すると、皮膚が永久に青灰色になる不可逆的な「銀皮症」を引き起こす可能性があります。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁰⁷Ag",
          use: "安定元素の存在形態",
          description: "銀で最も豊富な安定同位体であり、自然界の半分以上の割合を占めています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "銀の光学的および電気的極値特性、抗菌メカニズム、および化学的黒変反応はすべて豊富な実測データを備えています。",
      },
    },
    Cd: {
      description: "カドミウムは極めて柔らかく、わずかに青みを帯びた銀白色の金属です。その化合物は極めて鮮やかな顔料を生み出しますが、カドミウム自体は蓄積性の猛毒元素です。",
      uses: ["ニッケル・カドミウム（Ni-Cd）二次電池", "原子炉の中性子吸収制御棒", "色あせない鮮やかな黄色や赤色の顔料（カドミウムイエロー/カドミウムレッド）の製造"],
      appearance: "常温では極めて柔らかい質感の、わずかに青みがかった光沢を持つ銀白色の金属。",
      lifeRole: "カドミウムおよびその化合物は、すべての既知の生物に対して猛毒です。人体に入ると、骨のカルシウムや酵素の亜鉛と置き換わり、極度の痛みを伴う骨軟化症（イタイイタイ病）や腎不全を引き起こします。",
      compounds: [
        {
          formula: "CdS",
          name: "硫化カドミウム",
          description: "極めて鮮やかな黄色の固体粉末であり、歴史的には最高級の芸術用油絵の具（カドミウムイエロー）の成分でした。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "カドミウムおよびその化合物は既知の危険性の高いヒト発がん性物質であり、人体や環境中に長期間蓄積されて代謝されないため、使用を厳しく制限し、いかなる接触も避けるべきです。",
        },
      ],
      isotopes: [
        {
          notation: "¹¹⁴Cd",
          use: "安定元素と核反応",
          description: "自然界で最も豊富なカドミウム同位体であり、極めて高い中性子吸収能力を持っています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "カドミウムの合金特性と「イタイイタイ病」を引き起こす毒物学的メカニズムはすべて、科学および医学界によって厳密に検証された実測データです。",
      },
    },
    In: {
      description: "インジウムは極めて柔らかい銀白色の半金属であり、純粋なインジウムの棒を曲げると特有の「スズ鳴き」という澄んだ音がします。現代のタッチテクノロジーに不可欠な中核材料です。",
      uses: ["液晶ディスプレイ（LCD）とタッチスクリーンの透明導電膜", "鉛フリーはんだ合金と低融点合金", "高温温度計と熱伝導材料のフィラー"],
      appearance: "常温では極めて柔らかく、爪で引っかき傷をつけることができる銀白色の金属。",
      compounds: [
        {
          formula: "ITO",
          name: "酸化インジウムスズ",
          description: "導電性を持ちながら透明な特殊な混合酸化物であり、ほぼすべてのスマートフォンのタッチパネルに広く応用されています。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "純粋なインジウム金属は毒性が低く安全ですが、工業用ディスプレイの製造プロセスで酸化インジウムスズ（ITO）の粉塵を長期間吸入すると、極めて重篤な職業性肺線維症を引き起こします。",
        },
      ],
      isotopes: [
        {
          notation: "¹¹⁵In",
          use: "工業応用材料",
          description: "天然インジウムの95%を占める極めて半減期の長い微弱な放射性同位体ですが、その放射性は人体に実際の害を及ぼさないほど弱いです。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "インジウムの物理的延性、光電薄膜の電気的データ、および工業毒性学はすべて完備された実測データを備えています。",
      },
    },
    Sn: {
      description: "スズは柔らかく、銀白色の光沢を持つ半金属です。酸化しにくく耐食性があり、青銅器時代から人類によって器具や防錆に広く使用されてきました。",
      uses: ["電子部品の鉛フリーはんだ金属", "鋼鉄表面の防錆メッキ（食品用のブリキ缶など）", "青銅合金の製造（銅と結合）"],
      appearance: "常温（白色スズ）では光沢のある銀白色の柔らかい金属。極低温では砕けて粉末状の灰色スズになります。",
      lifeRole: "無機スズ単体と一般的な化合物の人体に対する毒性は極めて低いです。しかし、一部の人工的な「有機スズ」化合物はかつて船底の防汚塗料として使用され、海洋生態系に対して極めて破壊的な毒性を持つため、現在は世界的に使用が禁止されています。",
      compounds: [
        {
          formula: "SnO₂",
          name: "二酸化スズ",
          description: "白色の固体であり、セラミックの釉薬の乳白剤やガラスコーティングとしてよく使用されます。",
        },
        {
          formula: "SnCl₂",
          name: "塩化スズ(II)",
          description: "白色の結晶であり、化学工業において極めて一般的な強力な還元剤です。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "一般的な金属スズと無機スズ化合物は極めて安全ですが、工業用の有機スズ化合物は猛毒であり、毒性化学物質の規制に従って処理する必要があります。",
        },
      ],
      isotopes: [
        {
          notation: "¹²⁰Sn",
          use: "安定元素の存在形態",
          description: "スズには最大10種類の安定同位体（すべての元素の中で最多）があり、¹²⁰Snはその中で最も豊富なものです。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "スズの防錆性、低温相転移現象（スズペスト）、および有機スズの毒物学はすべて信頼性の高い実測データです。",
      },
    },
    Sb: {
      description: "アンチモンは脆く、わずかに青みを帯びた銀灰色の半金属です。主に合金添加剤として機能し、鉛金属の硬度を著しく増加させ、またハロゲンと結合して難燃剤を作ることもよくあります。",
      uses: ["従来の鉛蓄電池極板の合金硬化剤", "プラスチックや繊維の難燃剤（酸化アンチモンの形態で）", "半導体材料のドーパント"],
      appearance: "常温では極めて明るい金属光沢を持ちますが、質感が極めて脆く砕けやすい銀灰色の固体。",
      compounds: [
        {
          formula: "Sb₂O₃",
          name: "三酸化アンチモン",
          description: "白色粉末であり、ハロゲン系難燃剤と組み合わせて使用されることが多く、プラスチックや電子製品の筐体の可燃性を大幅に低下させることができます。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "アンチモン金属粉塵とその化合物の大部分は中程度から高度の毒性を持ち、吸入または長期間摂取するとヒ素中毒に似た重篤な神経系および呼吸器系の症状を引き起こすため、無防備な状態で取り扱うべきではありません。",
        },
      ],
      isotopes: [
        {
          notation: "¹²¹Sb",
          use: "質量分析と材料応用",
          description: "自然界で最も豊富なアンチモンの安定同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "アンチモンの合金硬化性能、難燃化学メカニズム、および毒物学的反応はすべて明確な科学的実測データを備えています。",
      },
    },
    Te: {
      description: "テルルは希少で半導体特性を持つ銀白色の半金属です。金、銅、鉛などの鉱石と共生していることが多く、現代のグリーンエネルギーおよび熱電産業において重要な特殊材料です。",
      uses: ["高効率薄膜太陽電池（テルル化カドミウム）", "鋼鉄や銅合金の切削加工性の向上", "熱電冷却チップ（ペルチェ素子）の中核材料"],
      appearance: "常温では脆く、はっきりとした金属光沢を持つ銀白色の結晶固体。",
      lifeRole: "テルルは人体に生理学的作用はありませんが、毒性を持ちます。極微量のテルル化合物を吸入したり皮膚に触れたりすると、人体はそれをジメチルテルリドに代謝し、呼吸や汗から数週間にわたって強烈なニンニクの悪臭を放つようになります。",
      compounds: [
        {
          formula: "CdTe",
          name: "テルル化カドミウム",
          description: "優れた光吸収能力を持つ化合物であり、薄膜太陽電池が光エネルギーを吸収する中核層です。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "テルルの化合物の多くは中程度の毒性を持ち、極めて不快です。極微量の曝露でも重篤な「テルル呼気」（持続的なニンニク臭）を引き起こすため、工業加工には優れた換気防護設備が必要です。",
        },
      ],
      isotopes: [
        {
          notation: "¹³⁰Te",
          use: "素粒子物理学研究",
          description: "存在量が最も多い天然同位体であり、科学者はしばしばこれを利用して稀な二重ベータ崩壊現象を研究します。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "テルルの半導体特性、熱電材料の熱力学、および人体の代謝反応はすべて広範な実測データを備えています。",
      },
    },
    I: {
      description: "ヨウ素は紫黒色を呈するハロゲン元素であり、わずかに加熱すると刺激性のある紫赤色の気体に昇華します。最も重い安定ハロゲンであり、動物の生命活動の維持に不可欠です。",
      uses: ["医療用傷口消毒剤（ポビドンヨードやヨードチンキなど）", "甲状腺腫の予防のための食塩へのヨウ素添加", "医学用X線やCT（コンピュータ断層撮影）の造影剤"],
      appearance: "常温では微弱な金属光沢を帯びた紫黒色の結晶固体。",
      lifeRole: "単体ヨウ素の蒸気は強い刺激性と腐食性を持ちます。しかし、微量のヨウ化物イオン（I⁻）は人体が甲状腺ホルモンを合成するために不可欠な重要な元素であり、全身の基礎代謝率と脳の発達を主導しています。",
      compounds: [
        {
          formula: "KI",
          name: "ヨウ化カリウム",
          description: "最も一般的なヨウ素栄養サプリメントであり、原子力災害の漏洩時に甲状腺を緊急保護するための備蓄薬でもあります。",
        },
        {
          formula: "AgI",
          name: "ヨウ化銀",
          description: "淡黄色の固体であり、その結晶構造が氷に似ているため、人工雨の凝結核として雲の中に散布されることがよくあります。",
        },
      ],
      reactions: [
        {
          equation: "I₂ + デンプン → 青黒色の錯体",
          description: "ヨウ素単体はデンプン溶液に触れると直ちに極めて深い青黒色を呈します。これは化学実験や生物学において最も古典的な検出反応です。",
          conditions: "常温水溶液",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "固体のヨウ素単体は腐食性を持ち、その紫赤色の昇華蒸気は目や呼吸器の粘膜を強く刺激します。大量に飲み込んだり、皮膚に長時間直接接触させたりしてはいけません。",
        },
      ],
      isotopes: [
        {
          notation: "¹³¹I",
          use: "核医学治療と放射線汚染指標",
          description: "人工放射性同位体であり、医療では甲状腺がん細胞の正確な破壊に使用され、同時に原子力災害の漏洩初期における最も危険な電離放射線源でもあります。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ヨウ素の物理的な昇華現象、人体の甲状腺代謝メカニズム、および放射性同位体の挙動はすべて医学および化学界で完備された実測データです。",
      },
    },
    Xe: {
      description: "キセノンは重く、極めて希少な単原子希ガス元素です。化学的性質は極度に安定していますが、他の元素と化合物を形成できることが証明された歴史上初の希ガスです。",
      uses: ["高級車や映画用プロジェクターの高輝度放電ランプ", "医学的に安全だが高価な全身麻酔薬", "宇宙船や人工衛星のイオン推進器の推進剤"],
      appearance: "常温では無色、無臭の気体。真空管に通電して励起すると、強烈な青白色または淡紫色の輝きを放ちます。",
      lifeRole: "キセノンガスは人体に対して完全に無毒であり、いかなる生化学反応にも関与しませんが、吸入後は中枢神経細胞の受容体と物理的な作用を引き起こし、優れた麻酔効果をもたらします。",
      compounds: [
        {
          formula: "XeF₄",
          name: "四フッ化キセノン",
          description: "歴史的な人工化合物であり、「希ガスは絶対に反応しない」という従来の理論に例外が存在することを証明しました。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "キセノンガス自体は無毒で化学的性質は極めて安全ですが、密度が非常に大きいため、密閉された場所や低地で大量に漏洩すると急速に沈殿して酸素を押し出し、警告なしに窒息死する危険をもたらします。",
        },
      ],
      isotopes: [
        {
          notation: "¹³²Xe",
          use: "物理学基礎研究",
          description: "自然界で最も豊富な安定キセノン同位体であり、暗黒物質検出器の標的物質としてよく使用されます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "キセノンのスペクトル発光特性、希ガス化学反応、および医療用麻酔効果はすべて明確で権威ある実測データを備えています。",
      },
    },
    Cs: {
      description: "セシウムは極めて柔らかい金色のアルカリ金属であり、化学的性質は極端に活発です。現代科学において国際標準時（秒）を定義するための重要な元素です。",
      uses: ["高精度原子時計", "光電子増倍管と光電池の感光材料", "石油探査の掘削泥水（ギ酸セシウムの形態で）"],
      appearance: "常温では金色の光沢を帯びた極めて柔らかい金属であり、室温よりわずかに高い（約28.5°C）だけですぐに溶けて液体になります。",
      lifeRole: "セシウム金属は水に触れると激しい爆発を起こします。セシウムイオン（Cs⁺）は人体内で既知の機能はありませんが、化学的性質がカリウムに似ており、微量の摂取であれば代謝によって排出されます。しかし、その放射性同位体は健康に深刻な脅威をもたらします。",
      compounds: [
        {
          formula: "CsCl",
          name: "塩化セシウム",
          description: "水に溶けやすい塩類であり、DNAなどの巨大分子を遠心分離する生化学実験に広く応用されています。",
        },
      ],
      reactions: [
        {
          equation: "2Cs + 2H₂O → 2CsOH + H₂",
          description: "セシウムは水に触れると極めて猛烈な爆発反応を起こし、極低温（-116°C）であっても氷と爆発を起こすことができます。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "セシウム金属は水、空気中の酸素、および水分と極めて容易に激しい反応を起こし、強力な爆発を引き起こします。真空または不活性ガス中に保存する必要があり、絶対に自ら取り扱うべきではありません。",
        },
      ],
      isotopes: [
        {
          notation: "¹³³Cs",
          use: "国際時間標準の基準",
          description: "自然界に唯一存在する安定同位体であり、その原子共鳴周波数は1秒の長さを定義するために使用されます。",
        },
        {
          notation: "¹³⁷Cs",
          use: "医療用放射線源と工業用厚さ計",
          description: "核分裂によって生成される危険な放射性同位体であり、原子力災害発生後、長期にわたって環境を汚染する主な核種の一つです。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "セシウムの原子時計の共鳴周波数、極端な化学反応性、および放射線障害はすべて極めて精密かつ完備された実測データを備えています。",
      },
    },
    Ba: {
      description: "バリウムは柔らかい銀白色のアルカリ土類金属であり、化学的性質は非常に活発です。燃焼すると明るく独特なアップルグリーンの炎を出します。",
      uses: ["医療用消化管X線造影剤（硫酸バリウムの形態で）", "緑色の花火や照明弾の製造", "真空管のゲッター（残留ガスの吸収）"],
      appearance: "常温では柔らかい銀白色の金属であり、空気にさらされると急速に酸化して暗くなります。",
      lifeRole: "可溶性のバリウムイオン（Ba²⁺）は人体に対して猛毒であり、重篤な筋痙攣や不整脈を引き起こします。しかし、医療で服用される「バリウムミール」は水や胃酸に極めて溶けにくく人体に吸収されないため、非常に安全です。",
      compounds: [
        {
          formula: "BaSO₄",
          name: "硫酸バリウム",
          description: "水や酸に極めて溶けにくい白色固体であり、医学における胃腸のX線造影の主成分です。",
        },
        {
          formula: "BaCO₃",
          name: "炭酸バリウム",
          description: "毒性を持つ白色沈殿物であり、かつては殺鼠剤やセラミックの釉薬として広く使用されていました。",
        },
      ],
      reactions: [
        {
          equation: "Ba + 2H₂O → Ba(OH)₂ + H₂",
          description: "バリウム金属は水と反応し、強アルカリ性の水酸化バリウム溶液を生成して可燃性の水素ガスを放出します。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "バリウム金属単体は空気や水分と発火反応を起こしやすいです。大多数の可溶性バリウム化合物（塩化バリウムなど）は猛毒であり、微量でも摂取すると致命的となるため、専門家の指導なしに取り扱うべきではありません。",
        },
      ],
      isotopes: [
        {
          notation: "¹³⁸Ba",
          use: "基礎科学と環境追跡",
          description: "自然界で最も豊富なバリウムの安定同位体であり、約7割の割合を占めています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "バリウムの医学的造影メカニズム、化学反応性、および毒物学的特徴はすべて医学および化学界で極めて明確な実測データです。",
      },
    },
    La: {
      description: "ランタンは柔らかく、延性のある銀白色の金属であり、ランタノイドの最初のメンバーです。空気中で極めて酸化しやすく、多くの現代の光学技術や電池技術の重要な基盤材料です。",
      uses: ["ニッケル水素電池（NiMH）の負極材料", "高屈折率の光学カメラレンズの製造", "ライターの発火石（セリウムとのミッシュメタル）"],
      appearance: "常温では柔らかい銀白色の金属であり、空気にさらされると急速に暗くなります。",
      lifeRole: "ランタン単体およびイオンは、人体において既知の生理学的機能はありません。可溶性のランタン塩を過剰に摂取すると、肝臓や細胞に毒性を引き起こす可能性があります。",
      compounds: [
        {
          formula: "La₂O₃",
          name: "酸化ランタン",
          description: "白色の固体粉末であり、ガラスの屈折率を大幅に向上させることができ、天体望遠鏡やカメラの高級レンズに広く使用されています。",
        },
      ],
      reactions: [
        {
          equation: "4La + 3O₂ → 2La₂O₃",
          description: "ランタンは空気中で極めて容易に酸化し、微細なランタン粉末は室温でも自然発火して白色の酸化ランタンを生成します。",
          conditions: "常温または微熱",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "塊状の金属ランタンの毒性は微弱ですが、機械加工時に発生するランタン金属粉末は空気中で極めて容易に自然発火するため、粉塵火災を防ぐ必要があります。",
        },
      ],
      isotopes: [
        {
          notation: "¹³⁹La",
          use: "核磁気共鳴（NMR）分析",
          description: "自然界でほぼ100%を占める安定したランタン同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ランタンの化学反応性、光の屈折特性、および電池の化学データはすべて完備された実測データを備えています。",
      },
    },
    Ce: {
      description: "セリウムは希土類元素の中で最も豊富に存在し、化学的性質が非常に活発です。異なる酸化状態（+3と+4）の間で自由に変換できる独特の能力を持ち、優れた触媒および研磨材料となっています。",
      uses: ["自動車の排気システムの触媒コンバーター", "ガラスや光学レンズの精密研磨粉（酸化セリウムの形態で）", "発火合金（混合希土類金属）"],
      appearance: "常温では鉄灰色の展性がある金属であり、空気に触れると極めて容易に酸化して剥がれ落ちます。",
      compounds: [
        {
          formula: "CeO₂",
          name: "酸化セリウム",
          description: "淡黄色または白色の粉末であり、ガラス研磨工業の標準材料であり、セルフクリーニングオーブンの内壁コーティングにも使用されます。",
        },
      ],
      reactions: [
        {
          equation: "Ce + O₂ → CeO₂",
          description: "金属セリウムは空気中で摩擦または加熱されると極めて容易に発火して燃焼し、安定した酸化セリウムを生成します。",
          conditions: "摩擦または加熱",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "セリウム金属の粉末や削りくずは極めて自然発火しやすい（自然発火性金属）です。セリウムを切削または研磨する際は、極めて高温の火花が発生しやすいです。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁴⁰Ce",
          use: "核分裂生成物の追跡",
          description: "最も豊富なセリウムの安定同位体であり、自然界の約9割を占めています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "セリウムの酸化還元触媒能力と燃焼特性はすべて、極めて詳細な工業的および科学的実測データを備えています。",
      },
    },
    Pr: {
      description: "プラセオジムは柔らかい銀黄色の希土類金属であり、ガラスやエナメルに独特の純粋な黄色や緑色を与えることができます。主に強力な磁石や溶接用ゴーグルなどの特殊な光学材料の製造に使用されます。",
      uses: ["溶接やガラス吹き用のジジミウム（Didymium）ガラスの製造", "ネオジムと混合して高強度永久磁石を製造", "航空エンジンの高温合金添加剤"],
      appearance: "常温では銀黄色の光沢を持つ金属であり、空気中ではゆっくりと緑色の脆い酸化層を生成します。",
      compounds: [
        {
          formula: "Pr₆O₁₁",
          name: "酸化プラセオジム",
          description: "自然環境下で最も安定したプラセオジムの酸化物であり、濃い茶黒色を呈し、セラミックスの着色剤として使用できます。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "金属プラセオジムの粉末は火災を引き起こすリスクがあります。可溶性プラセオジム塩の摂取は軽度から中等度の毒性を持ちます。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁴¹Pr",
          use: "核磁気共鳴研究",
          description: "自然界に唯一存在する安定したプラセオジム同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "プラセオジムの光吸収スペクトルと磁性合金への応用はすべて明確な科学的実測データを備えています。",
      },
    },
    Nd: {
      description: "ネオジムは明るい銀色の金属であり、現在知られている中で最も強力な永久磁石を製造するための中心的な元素です。超小型モーター、風力発電、現代の音響技術の革命を大きく推進しました。",
      uses: ["極めて高強度のネオジム磁石（NdFeB）の製造", "固体レーザー（Nd:YAGレーザーなど）", "高級ヘッドホンやスマートフォンのスピーカーの駆動ユニット"],
      appearance: "常温では明るい銀色の金属であり、極めて空気酸化されやすいため、通常は腐食を防ぐためにニッケルなどの保護層をメッキする必要があります。",
      compounds: [
        {
          formula: "Nd₂Fe₁₄B",
          name: "ネオジム磁石",
          description: "現在商業化されている中で最も強力な永久磁石材料であり、極めて小さな体積で驚異的な磁力を提供します。",
        },
        {
          formula: "Nd₂O₃",
          name: "酸化ネオジム",
          description: "淡青色の粉末であり、ガラスに美しい紫色を与え、有害なまぶしさを吸収することができます。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "ネオジム金属の粉末は極めて燃えやすいです。大型のネオジム磁石の吸着力は極めて強烈であり、指が2つの磁石の間に挟まると骨折などの重篤な機械的傷害を引き起こす可能性があります。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁴²Nd",
          use: "地球化学と隕石の年代測定",
          description: "ネオジムで最も豊富な同位体の一つであり、地球の初期進化史を遡るためによく使用されます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ネオジム磁石の強力な磁気データとレーザー発光特性はすべて、議論の余地のない実測データを備えています。",
      },
    },
    Pm: {
      description: "プロメチウムはランタノイド元素の中で唯一安定同位体を持たない放射性金属です。自然界にはほとんど存在せず、主に原子炉でのウランの核分裂を通じて人工的に合成されます。",
      uses: ["原子力マイクロ電池（宇宙探査機の電源など）", "製紙やプラスチックフィルムの厚さを測定する放射線源", "特殊な発光塗料（歴史的な用途であり、現在は主にトリチウムに置き換えられている）"],
      appearance: "理論上は金属光沢を持つ固体ですが、強い放射性と崩壊熱のため、肉眼でその単体を観察することは極めて困難であり危険です。",
      safety: [
        {
          level: "高リスク",
          description: "プロメチウムのすべての同位体は高い放射性を持ち、崩壊時にベータ（β）線を放出し、有害な二次X線（制動放射）を引き起こします。放射線防護設備のある実験室でのみ取り扱うべきです。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁴⁷Pm",
          use: "原子力電池と厚さ計",
          description: "半減期が約2.6年の放射性同位体であり、商業的および工業的応用の価値が最も高いプロメチウムの核種です。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "プロメチウムの放射性崩壊特性と核物理データはすべて、人工合成による観測に基づく実測データです。",
      },
    },
    Sm: {
      description: "サマリウムは銀白色の希土類金属であり、優れた耐高温性と抗減磁能力を備えています。第1世代の実用的な希土類永久磁石（サマリウムコバルト磁石）の重要な成分です。",
      uses: ["サマリウムコバルト（SmCo）高温永久磁石", "原子炉の制御棒と中性子吸収材", "特定の骨腫瘍転移に対する放射性同位体標的治療"],
      appearance: "常温では光沢のある銀白色の金属固体。",
      compounds: [
        {
          formula: "SmCo₅",
          name: "サマリウムコバルト合金",
          description: "高温（300°C以上）環境下でも極めて強い磁力を維持できる永久磁石であり、軍事および航空宇宙用モーターに広く使用されています。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "サマリウム金属単体には明らかな毒性はありませんが、粉末は可燃性です。可溶性塩類が大量に体内に入ると、カルシウム代謝を妨げる可能性があります。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁵²Sm",
          use: "中性子吸収研究",
          description: "安定しており、最も存在量が多いサマリウム同位体であり、極めて大きな中性子吸収断面積を持っています。",
        },
        {
          notation: "¹⁵³Sm",
          use: "放射性医薬品",
          description: "ベータ線を放出する短い半減期を持つ同位体であり、末期の骨がん患者の極度の痛みを緩和するために使用されます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "サマリウムコバルト合金の磁気性能、耐温限界、および医療への応用はすべて豊富な実測データを備えています。",
      },
    },
    Eu: {
      description: "ユウロピウムはランタノイド金属の中で最も化学反応性が強い元素であり、極めて重要な発光材料でもあります。現代のディスプレイ技術において、最も重要で純粋な「赤色」と「青色」の蛍光を提供しています。",
      uses: ["テレビ、スマートフォン、コンピューター画面の赤色および青色蛍光体", "ユーロ紙幣の偽造防止蛍光印刷", "低消費電力LED照明器具"],
      appearance: "常温では柔らかい鉛灰色の金属であり、極めて酸化して黒くなりやすいです。",
      compounds: [
        {
          formula: "Eu₂O₃",
          name: "酸化ユウロピウム",
          description: "わずかにピンク色がかった白色の粉末であり、紫外線の励起下で鮮やかな赤色の光を放ち、旧式のブラウン管テレビのカラー化に最大の貢献をしました。",
        },
      ],
      reactions: [
        {
          equation: "2Eu + 2H₂O → 2Eu(OH)₂ + H₂",
          description: "金属ユウロピウムは極めて活発であり、水中での反応はカルシウム金属に似ており、激しく可燃性の水素を放出します。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "ユウロピウム金属単体は水や湿気に触れると激しく反応して発火します。鉱油または不活性ガス中に封入して保存する必要があります。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁵¹Eu",
          use: "核物理研究",
          description: "自然界に存在する極めて弱い放射性同位体（半減期が極めて長いため、安定同位体とみなされます）。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ユウロピウムの光励起スペクトルと極端な化学的活性は、いずれも材料化学の実測データです。",
      },
    },
    Gd: {
      description: "ガドリニウムは銀白色の磁性希土類金属であり、すべての安定元素の中で最高の中性子吸収断面積を持っています。常温付近で極めて独特な磁気熱量効果を示します。",
      uses: ["医学的磁気共鳴画像（MRI）用静脈造影剤", "原子炉の緊急停止用制御棒", "磁気冷凍技術（圧縮冷媒を必要としない冷却システム）"],
      appearance: "常温では金属光沢を持つ銀白色の固体。",
      lifeRole: "遊離ガドリニウムイオン（Gd³⁺）は人体に対して強い毒性を持ち、カルシウムイオンチャネルを妨害します。しかし、MRI造影剤ではガドリニウムはキレート剤によってしっかりと包み込まれており、ほとんどの場合、安全に体外に排出されます。",
      compounds: [
        {
          formula: "Gd-DOTA",
          name: "大環状ガドリニウムキレート",
          description: "ガドリニウムの常磁性を利用して核磁気共鳴画像のコントラストを大幅に向上させる、安全な医学的造影剤分子。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "純粋なガドリニウム金属の粉末は可燃性です。特定の腎機能障害患者にガドリニウム造影剤を投与すると、重篤な腎性全身性線維症（NSF）を引き起こす可能性があります。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁵⁷Gd",
          use: "原子力産業における中性子吸収",
          description: "自然界で熱中性子を吸収する能力が最も高い安定同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ガドリニウムの磁性、中性子断面積データ、および医学的造影代謝メカニズムはすべて、高度に厳密な実測データを備えています。",
      },
    },
    Tb: {
      description: "テルビウムは柔らかい銀灰色の金属です。ユウロピウムと同様に、主に光電分野で活躍し、ディスプレイや照明機器において極めて純粋な「緑色」の蛍光を提供できます。",
      uses: ["ディスプレイや蛍光灯の緑色蛍光体", "ソナーやアクチュエータ用の超磁歪材料（Terfenol-D）", "固体電子部品のドーパント"],
      appearance: "常温では展性のある銀灰色の金属であり、ナイフで切ることができます。",
      compounds: [
        {
          formula: "Tb₄O₇",
          name: "酸化テルビウム(III,IV)",
          description: "濃褐色の粉末であり、商業的に最も一般的なテルビウム化合物であり、緑色発光材料を調製するための前駆体でもあります。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "テルビウム金属の粉末は極めて燃えやすいです。多くの希土類金属と同様に、微量の粉塵を長期間吸入すると肺に刺激を与える可能性があります。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁵⁹Tb",
          use: "材料物理と光学的応用",
          description: "自然界に唯一存在する安定したテルビウム同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "テルビウムの発光スペクトルと磁歪による物理的変化はすべて明確な科学的実測データを備えています。",
      },
    },
    Dy: {
      description: "ジスプロシウムは極めて磁化されやすい銀白色の希土類金属です。高温下におけるネオジム磁石の抗減磁能力を大幅に向上させることができ、電気自動車や風力発電機のモーターに不可欠な戦略的元素です。",
      uses: ["耐高温ネオジム磁石の重要な添加剤", "原子炉の制御棒材料", "超磁歪合金（Terfenol-D）の中心成分"],
      appearance: "常温では輝く銀白色の金属であり、空気中にさらされるとゆっくりと光沢を失います。",
      compounds: [
        {
          formula: "Dy₂O₃",
          name: "酸化ジスプロシウム",
          description: "白色の粉末であり、主にセラミックスや特殊磁性材料の添加物として使用されます。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "ジスプロシウム金属の粉末は火花に触れると極めて燃えやすいです。その可溶性塩類は人体に対して軽微な毒性を持ちます。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁶⁴Dy",
          use: "磁気学および核物理研究",
          description: "自然界で最も豊富なジスプロシウムの安定同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "永久磁石材料に対するジスプロシウムの抗減磁向上効果（保磁力）および磁歪変形データはすべて大量の実測データを備えています。",
      },
    },
    Ho: {
      description: "ホルミウムは比較的柔らかい銀白色の金属であり、すべての天然元素の中で最高の磁気モーメントを持っています。これにより、極端に強い磁場を作り出す科学分野においてかけがえのないものとなっています。",
      uses: ["医療用ホルミウムレーザー（非侵襲的な結石破砕や前立腺手術に使用）", "超強磁場を発生させるための特殊な磁極片の製造", "原子炉の可燃性毒物（中性子吸収材）"],
      appearance: "常温では銀白色の金属であり、乾燥した空気中では比較的安定していますが、高温下では極めて容易に酸化します。",
      compounds: [
        {
          formula: "Ho₂O₃",
          name: "酸化ホルミウム",
          description: "淡黄色の粉末であり、光源が異なると奇妙な色の変化を示すため、光学分光光度計の較正標準としてよく使用されます。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "ホルミウム金属の粉塵は火災および爆発の危険性があります。ホルミウム化合物に大量に接触すると、人体の代謝に軽度の障害を引き起こす可能性があります。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁶⁵Ho",
          use: "極端磁場および光学標準研究",
          description: "自然界に唯一存在する安定したホルミウム同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ホルミウムの極めて高い磁気モーメントとレーザー医療手術（結石破砕作用）は、いずれも臨床的および物理的な実測データを備えています。",
      },
    },
    Er: {
      description: "エルビウムは銀白色の希土類金属であり、その最も有名な特徴は、酸化物が美しいピンク色を示すことです。長距離光ファイバー通信ネットワークにおいて、光信号を増幅する重要な役割を果たしています。",
      uses: ["エルビウム添加光ファイバー増幅器（EDFA）のコアドーパント", "医療用エルビウムレーザー（精密な皮膚美容および歯科手術）", "ガラス、磁器、キュービックジルコニアのピンク色の発色剤"],
      appearance: "常温では輝きがあり展性のある銀白色の金属。",
      compounds: [
        {
          formula: "Er₂O₃",
          name: "酸化エルビウム",
          description: "美しいピンク色の固体粉末であり、光通信ネットワークにおいて特定の波長を吸収して信号を増幅できる重要な材料です。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "金属エルビウムの粉末は高温下で可燃性があります。化合物の毒性は極めて低いですが、粉塵の吸入は避けるべきです。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁶⁶Er",
          use: "核物理および材料研究",
          description: "自然存在比が最も高いエルビウムの安定同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "光ファイバーネットワークにおけるエルビウムのエネルギー準位遷移増幅効果およびレーザー手術の切断深度はすべて正確な実測データを備えています。",
      },
    },
    Tm: {
      description: "ツリウムは地球上で最も希少で最も高価な希土類金属の一つです。極めて珍しいですが、特殊なレーザーやポータブルX線装置においてかけがえのない地位を持っています。",
      uses: ["医療手術用のツリウムレーザー（組織の切断が精密で止血効果が極めて高い）", "ポータブルX線装置の小型放射線源（核活性化後）", "ユーロ紙幣の高度な偽造防止蛍光特徴"],
      appearance: "常温では明るい光沢を持つ銀灰色の金属。",
      compounds: [
        {
          formula: "Tm₂O₃",
          name: "酸化ツリウム",
          description: "淡緑色の粉末であり、原子炉で中性子を照射した後、X線を放出する放射線源に変化します。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "単体のツリウム粉末は火災の危険性があります。その可溶性化合物はわずかに毒性があり、人工放射性同位体は明確な放射線の危険性を持っています。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁶⁹Tm",
          use: "工業および医療用小型X線源（¹⁷⁰Tmに活性化後）",
          description: "自然界に唯一存在する安定したツリウム同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ツリウムのレーザー励起スペクトルと医学的切断の熱効果はすべて詳細な臨床的および物理的実測データを備えています。",
      },
    },
    Yb: {
      description: "イッテルビウムは柔らかい銀白色の希土類金属であり、圧力下で電気抵抗率が急激に増加するという特異な物理的性質を持っています。工業用応力センサーや高出力光ファイバーレーザーに広く応用されています。",
      uses: ["高出力工業用切断用のイッテルビウム添加光ファイバーレーザー", "ステンレス鋼の結晶粒微細化合金添加物", "地震や爆発の衝撃波を監視する応力センサー"],
      appearance: "常温では明るい光沢を持ち、柔らかい銀白色の金属。",
      compounds: [
        {
          formula: "Yb₂O₃",
          name: "酸化イッテルビウム",
          description: "白色の粉末であり、高出力固体レーザーや光ファイバーレーザーにおける重要な光学ドーパントです。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "イッテルビウム金属の粉塵は極めて自然発火しやすく、また、イッテルビウムの多くの化合物は人体に対して強い刺激性があり、長期間の接触は催奇形性の懸念があります。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁷⁴Yb",
          use: "レーザー物理学および材料科学",
          description: "自然界で最も豊富なイッテルビウムの安定同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "イッテルビウムの光ファイバーレーザー出力性能および高圧下での抵抗変化はすべて材料物理学界で高く確認された実測データです。",
      },
    },
    Lu: {
      description: "ルテチウムはランタノイド元素の中で最後、最も重く、最も硬い金属です。抽出が極めて困難で価格が極端に高いため、その用途は主に少数の高度な科学および医療分野に集中しています。",
      uses: ["ポジトロン断層法（PET）の高効率シンチレータ結晶（LSOなど）", "特定のがんに対する標的放射性同位体治療", "石油クラッキング工業の高度な触媒"],
      appearance: "常温では硬く、緻密な銀白色の金属。",
      compounds: [
        {
          formula: "Lu₂SiO₅",
          name: "ケイ酸ルテチウム（LSO）",
          description: "優れたシンチレータ材料であり、高エネルギーのガンマ線を可視光に変換でき、PETスキャナーの解像度を大幅に向上させました。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "金属ルテチウムの粉末は多くの希土類金属と同様に極めて燃えやすいです。その化合物の毒性は低いですが、自然界には弱い放射性同位体が含まれています。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁷⁵Lu",
          use: "高度な結晶材料研究",
          description: "自然界で最も豊富なルテチウムの安定同位体。",
        },
        {
          notation: "¹⁷⁷Lu",
          use: "精密な標的放射線治療",
          description: "極めて重要な人工医療用同位体であり、特定のがん細胞に付着し、短い射程の放射線を放出して正確に破壊することができます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ルテチウム結晶のシンチレーション効果および人工同位体の標的抗がんメカニズムはすべて極めて厳密な臨床的および医学的実測データを備えています。",
      },
    },
    Hf: {
      description: "ハフニウムは輝く銀灰色の遷移金属であり、化学的性質はジルコニウムに極めて似ています。その最大の特徴は、熱中性子を吸収する能力が極めて高いことであり、そのため原子力工業において重要な地位を占めています。",
      uses: ["原子炉の制御棒（特に原子力潜水艦）", "極めて高い融点を持つ合金の製造", "高度な半導体チップにおける高誘電率（High-k）絶縁層"],
      appearance: "常温では明るい金属光沢を持つ銀灰色の金属。",
      compounds: [
        {
          formula: "HfO₂",
          name: "酸化ハフニウム",
          description: "耐高温性の白色粉末であり、微小トランジスタの漏れ電流を減らすために先進的な集積回路に広く使用されています。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "ハフニウム金属単体は安全ですが、機械加工の過程で発生する微細な粉末は高い引火性を持ち、極めて自然発火しやすいです。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁸⁰Hf",
          use: "核物理研究",
          description: "自然界で最も豊富なハフニウムの安定同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ハフニウムの核物理断面積データと半導体材料特性はすべて高度に完備された実測データです。",
      },
    },
    Ta: {
      description: "タンタルは硬く、重く、極めて高い展性を持つ銀灰色の遷移金属です。化学的腐食に対して極めて強い抵抗力を持ち、人体の免疫拒絶反応を引き起こしません。",
      uses: ["スマートフォンや電子機器におけるタンタルコンデンサ", "医療用インプラント（人工骨やボーンプレートなど）", "実験室の耐食性機器の製造"],
      appearance: "常温では展性のある銀灰色の金属であり、表面には通常、極めて緻密で安定した濃い青色の酸化膜があります。",
      lifeRole: "タンタル金属は人体に対して完全に無毒であり、優れた生体適合性を備えているため、整形外科や外科手術のインプラントとして免疫反応を引き起こすことなく広く使用されています。",
      compounds: [
        {
          formula: "Ta₂O₅",
          name: "五酸化タンタル",
          description: "白色の固体であり、極めて安定しており、小型で大容量のタンタルコンデンサを製造するための中心的な誘電体材料です。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "塊状のタンタル金属は極めて安全ですが、特殊な製造プロセスで発生する極細粉末は火災の危険性があります。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁸¹Ta",
          use: "核物理および医学材料研究",
          description: "自然界にほぼ唯一存在する安定同位体（99.98%以上を占める）。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "タンタルのコンデンサの誘電率および生体適合性はすべて、長期的な臨床および工業的検証を経た実測データです。",
      },
    },
    W: {
      description: "タングステンは極めて硬い灰白色の遷移金属であり、すべての天然元素の中で最高の融点（3422°C）を持っています。その密度は極めて高く、金とほぼ同じです。",
      uses: ["従来の白熱電球のフィラメント", "金属切削工具（炭化タングステン）", "徹甲弾の高密度運動エネルギーペネトレータ"],
      appearance: "純粋なタングステンは鋼灰色の光沢を持つ金属です。加工が極めて困難なため、粉末冶金法によって極めて硬い合金として製造されることが多いです。",
      compounds: [
        {
          formula: "WC",
          name: "炭化タングステン",
          description: "ダイヤモンドに次ぐ極めて硬い材料であり、ドリル、旋盤の刃、ボールペンの先端に広く応用されています。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "純粋なタングステンは極めて安全ですが、工業加工時に炭化タングステンやそれに伴うコバルトの粉塵を長期間吸入すると、重篤な職業性超硬合金肺疾患を引き起こす可能性があります。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁸⁴W",
          use: "物理学の基礎研究",
          description: "自然界で最も豊富なタングステンの安定同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "タングステンの極端な高温熱力学データと合金の硬度はすべて極めて詳細な工学的実測データを備えています。",
      },
    },
    Re: {
      description: "レニウムは極めて希少で、重く、融点が極めて高い銀白色の遷移金属です（融点はタングステンと炭素に次ぐ）。高温合金のクリープ耐性を大幅に向上させることができ、航空エンジンの戦略的材料です。",
      uses: ["航空宇宙およびロケットガスタービンエンジンの高温単結晶ブレード", "高オクタン価無鉛ガソリンの精製触媒", "タングステン-レニウム合金熱電対（極高温の測定）"],
      appearance: "常温では硬い銀白色の金属。",
      safety: [
        {
          level: "注意",
          description: "レニウム金属の毒性は極めてわずかですが、すべての重金属粉末と同様に、粉塵の状態では吸入を避け、火災を防ぐべきです。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁸⁷Re",
          use: "地質年代測定",
          description: "天然レニウムの6割以上を占める弱い放射性同位体。半減期が宇宙の年齢を超えており、レニウム-オスミウム年代測定法で古い鉱物を測定するために使用できます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "レニウムの単結晶ブレードの高温クリープ耐性データと触媒特性はすべて信頼性の高い実測データを備えています。",
      },
    },
    Os: {
      description: "オスミウムは硬く、脆く、わずかに青みを帯びた白色の金属です。自然界で最も密度が高い元素であり、室温でゆっくりと猛毒の揮発性酸化物を放出します。",
      uses: ["高品質の万年筆のペン先の耐摩耗性合金ポイント", "顕微鏡用生体サンプルの染色剤（四酸化オスミウムの形態で）", "指紋鑑定技術"],
      appearance: "常温では硬く、極めて重い青白色の金属であり、粉末状のオスミウムは空気中で刺激的な大根のような悪臭を放ちます（表面の酸化による）。",
      compounds: [
        {
          formula: "OsO₄",
          name: "四酸化オスミウム",
          description: "極めて揮発しやすい淡黄色の固体。蒸気は猛毒であり、生体組織内の脂肪を黒く染めることができるため、電子顕微鏡のサンプル作製によく応用されます。",
        },
      ],
      reactions: [
        {
          equation: "Os + 2O₂ → OsO₄",
          description: "オスミウムの粉末は室温で酸素と反応し、強い刺激臭と猛毒を持つ四酸化オスミウムガスをゆっくりと生成します。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "オスミウム金属自体は無毒ですが、その表面に生成される四酸化オスミウムの蒸気は高い揮発性と猛毒を持ち、微量が目に触れただけでも失明につながる可能性があり、極めて危険です。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁹²Os",
          use: "地球化学の追跡",
          description: "自然界で最も豊富なオスミウムの安定同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "オスミウムの極端な密度の物理的極値と四酸化オスミウムの毒物学はすべて科学界で明確な実測データです。",
      },
    },
    Ir: {
      description: "イリジウムは極めて硬く、脆く、重い銀白色の遷移金属であり、密度はオスミウムに次ぎます。耐食性が最も高い元素であり、金を溶かす王水にすら溶けません。",
      uses: ["最高級のスパークプラグの電極の製造", "高級コンパスや機器の耐摩耗性軸受", "度量衡の標準原器（初期の国際メートル原器やキログラム原器の合金など）"],
      appearance: "常温では極めて明るく、硬くて脆い銀白色の金属。",
      compounds: [
        {
          formula: "IrO₂",
          name: "酸化イリジウム(IV)",
          description: "黒色の固体であり、工業的電解プロセスにおいて極めて耐食性の高い陽極材料としてよく使用されます。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "塊状のイリジウム金属は極めて不活性で安全ですが、一部の人工放射性イリジウム同位体は極めて強い放射線を持ち、過去に重篤な放射線漏洩事故を引き起こしたことがあります。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁹³Ir",
          use: "同位体化学研究",
          description: "自然界で最も存在比の高い安定同位体。",
        },
        {
          notation: "¹⁹²Ir",
          use: "工業用非破壊検査と近接放射線治療",
          description: "人工放射性同位体であり、強力なガンマ線を放出し、配管の溶接部の検査や体内の腫瘍の放射線治療に広く使用されています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "イリジウムの極端な耐食性データおよび地球化学的特徴（白亜紀の大量絶滅イベントにおける地層のイリジウム異常など）はすべて明確な実測データです。",
      },
    },
    Pt: {
      description: "白金（プラチナ）は重く、展性があり、極めて希少な銀白色の貴金属です。優れた耐食性と強力な触媒能力を持ち、その価値はしばしば金に匹敵します。",
      uses: ["自動車の排気触媒コンバーター", "高級ジュエリー", "化学工業や燃料電池の触媒"],
      appearance: "常温では輝きがあり、優れた展性を持つ銀白色の金属。",
      lifeRole: "白金金属単体は人体に対して生理学的な機能を持たず無毒ですが、特定の白金配位化合物は細胞分裂を強力に抑制することが発見され、重要な抗がん剤となっています。",
      compounds: [
        {
          formula: "PtCl₂(NH₃)₂",
          name: "シスプラチン",
          description: "極めて有名な化学療法薬であり、がん細胞のDNA複製を妨害でき、精巣がんなどの様々な悪性腫瘍の治療に広く使用されています。",
        },
      ],
      reactions: [
        {
          equation: "2CO + O₂ → 2CO₂",
          description: "自動車の排気管内で、白金金属は触媒として反応の活性化エネルギーを大幅に低下させ、有毒な一酸化炭素を迅速に二酸化炭素に酸化することができます。",
          conditions: "白金触媒と高温",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "金属白金自体は極めて安全ですが、一部の白金の可溶性塩類は強い気道アレルギー反応を引き起こす可能性があり、抗がん剤のシスプラチンは重篤な腎臓の副作用を持っています。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁹⁵Pt",
          use: "核磁気共鳴研究",
          description: "自然界で最も一般的な白金同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "白金の触媒メカニズムとシスプラチン化学療法の薬理学的データはすべて、長期にわたる工業的および臨床医学的な実測データを備えています。",
      },
    },
    Au: {
      description: "金は極めて柔らかく、重く、まばゆい黄色の光沢を持つ貴金属です。人類最古の富の象徴であり、その極めて優れた展性と極めて強い耐食性は、現代のテクノロジーにおいても同様にかけがえのないものです。",
      uses: ["金準備と高級ジュエリー", "スマートフォンやコンピューターチップの酸化防止電気接点", "宇宙服や人工衛星の赤外線防護反射コーティング"],
      appearance: "常温では柔らかく、極めて光沢のある濃い黄色の金属であり、決して錆びたり変色したりしません。",
      lifeRole: "純金は人体に対して完全に無毒で消化されず、食品の装飾（金箔）としてよく使用されます。ごく少数の金化合物が、重度の関節リウマチの治療に使用されることがまれにあります。",
      compounds: [
        {
          formula: "HAuCl₄",
          name: "塩化金酸",
          description: "金を王水に溶かした後に生成される黄色の結晶化合物であり、金メッキや金ナノ粒子の調製のための前駆体です。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "純金属の金は極めて安全で無毒ですが、金の採掘と精製に使用されるシアン化物プロセスやアマルガム法は極めて高い危険性を持ち、深刻な環境汚染を引き起こすことがよくあります。",
        },
      ],
      isotopes: [
        {
          notation: "¹⁹⁷Au",
          use: "物理標準と材料科学",
          description: "自然界に唯一存在する安定した金の同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "金の耐食性熱力学、極端な展性、および電気的データはすべて、最も歴史が古く、完備された実測データです。",
      },
    },
    Hg: {
      description: "水銀は常温常圧で唯一液体状態をとる金属元素です。非常に重く、銀白色の輝く外観と高い表面張力を持ちますが、同時に蓄積性の神経性の猛毒でもあります。",
      uses: ["従来の体温計や気圧計（多くは淘汰されている）", "蛍光灯や省エネランプの発光ガス（微量）", "歯の詰め物用の銀アマルガム（合金）"],
      appearance: "常温では重く、極めて流動性の高い銀白色の輝く液体であり、容易に砕けて小さな球体になります。",
      lifeRole: "水銀はすべての生物に対して生理学的機能を持たず、強力な神経毒性を持っています。環境中の無機水銀は微生物によって脂溶性の「メチル水銀」に変換され、食物連鎖（特に深海魚）を通じて人体に蓄積し、中枢神経系を著しく破壊します。",
      compounds: [
        {
          formula: "HgS",
          name: "硫化水銀(II)",
          description: "自然界の極めて鮮やかな赤色の鉱物（辰砂）であり、古代には朱色の顔料としてよく使用されていました。",
        },
        {
          formula: "CH₃Hg⁺",
          name: "メチル水銀",
          description: "有機水銀イオンであり、環境汚染や食物連鎖による蓄積中毒（日本の水俣病など）の主な致命的な物質です。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "液体水銀は室温で無色無臭の猛毒の蒸気を揮発させます。水銀体温計をうっかり割ってしまった場合、絶対に掃除機を使用して片付けてはいけません。多くの水銀化合物は中枢神経系や腎臓に不可逆的で永久的な損傷を引き起こします。",
        },
      ],
      isotopes: [
        {
          notation: "²⁰²Hg",
          use: "物理学の基礎研究",
          description: "自然界で最も豊富な水銀の安定同位体。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "水銀の蒸気圧の物理的特性、合金（アマルガム）の反応、およびメチル水銀の毒物学はすべて極めて痛ましい歴史的実測データを備えています。",
      },
    },
    Tl: {
      description: "タリウムは極めて柔らかい灰白色の卑金属です。かつては殺鼠剤として広く使用されていましたが、無色無臭であり人体に対して極めて強烈な猛毒を持つため、現在では世界の多くの国で厳しく規制されています。",
      uses: ["特殊な光学赤外線透過ガラス", "高温超伝導材料の研究", "医学的心筋造影（放射性のタリウム-201の形態で）"],
      appearance: "常温では鉛に似た極めて柔らかい灰白色の金属であり、空気中にさらされるとすぐに酸化して光沢を失います。",
      compounds: [
        {
          formula: "Tl₂SO₄",
          name: "硫酸タリウム",
          description: "無色無臭の猛毒の結晶であり、歴史的には極めて致命的な殺虫剤や殺鼠剤の主成分でした。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "タリウムとその化合物は極めて強烈な神経および細胞毒であり、微量を摂取しただけで激しい神経痛、重度の脱毛、臓器不全を引き起こします。非専門的な規制下で絶対に接触するべきではありません。",
        },
      ],
      isotopes: [
        {
          notation: "²⁰³Tl",
          use: "安定同位体標識",
          description: "天然タリウムの約3割を占める安定同位体。",
        },
        {
          notation: "²⁰¹Tl",
          use: "心臓核医学造影",
          description: "特定の放射線を放出する人工放射性同位体であり、心筋の血液灌流状態を評価するために使用されます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "タリウムの極端な毒性のメカニズムと医療用放射線造影への応用はすべて厳格に規制された実測データです。",
      },
    },
    Pb: {
      description: "鉛は重く、柔らかく、展性のある青灰色の卑金属です。優れた工業的および放射線遮蔽性能を持っていますが、その重篤な蓄積性の神経毒性のため、日用品からは徐々に段階的に廃止されつつあります。",
      uses: ["自動車の鉛蓄電池", "医療用X線や原子力施設の放射線防護シールド", "高圧地下ケーブルの防水保護層"],
      appearance: "常温では極めて柔らかい暗青灰色の金属であり、切断すると明るい銀色を示しますが、すぐに酸化して暗くなります。",
      lifeRole: "鉛は生物体に対していかなる既知の有益性も持ちません。血液脳関門を容易に通過し、ヘムの合成や神経伝達を妨害します。子供は鉛の毒性に極めて敏感であり、微量の曝露でも永久的な知能障害を引き起こす可能性があります。",
      compounds: [
        {
          formula: "PbO",
          name: "酸化鉛(II)",
          description: "黄色の粉末であり、鉛蓄電池や歴史ある鉛クリスタルガラスの製造に広く使用されています。",
        },
        {
          formula: "Pb(C₂H₅)₄",
          name: "テトラエチル鉛",
          description: "かつてガソリンにアンチノック剤として広く添加されており、20世紀における世界的な鉛汚染と健康被害の元凶であり、現在では全面的に禁止されています。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "鉛とその化合物は重篤な蓄積性の神経毒です。子供が古い家屋の剥がれ落ちた含鉛塗料に接触することは絶対に避けるべきであり、また古い含鉛水道管は飲料水の汚染につながる可能性があります。",
        },
      ],
      isotopes: [
        {
          notation: "²⁰⁸Pb",
          use: "放射性年代測定の終点",
          description: "最も重く、極めて安定した鉛同位体であり、自然界のトリウムとウランの放射性崩壊系列の最終的な安定産物です。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "鉛の放射線遮蔽の物理学、電気化学的反応、および重篤な神経毒物学はすべて、歴史的に極めて豊富な実測データを備えています。",
      },
    },
    Bi: {
      description: "ビスマスは脆く、独特のピンク色の光沢を持つ白色の金属です。重金属の中でごく少数の、人体に対してほとんど無毒な元素であり、鉛の環境に優しい代替品としてよく使用されます。",
      uses: ["胃腸薬の有効成分（次サリチル酸ビスマス）", "スプリンクラーヘッドやヒューズ用の低融点の可融合金", "無鉛はんだや無鉛弾丸の代替材料"],
      appearance: "常温では光沢のある銀白色の金属であり、わずかにピンク色を帯びています。冷却すると、極めて美しい虹色の階段状の結晶を形成します（表面の酸化膜の干渉による）。",
      lifeRole: "ビスマス金属と多くの化合物は極めて安全であり、胸焼けや消化不良を和らげるための市販薬（Pepto-Bismolなど）として広く製造されており、ヘリコバクター・ピロリ菌の殺菌を助けることもできます。",
      compounds: [
        {
          formula: "C₇H₅BiO₄",
          name: "次サリチル酸ビスマス",
          description: "一般的な胃腸薬のピンク色の液体成分であり、胃粘膜を効果的に保護できます。",
        },
      ],
      safety: [
        {
          level: "注意",
          description: "ビスマスは知られている中で最も安全な重金属ですが、ビスマス剤を長期にわたって過剰に服用すると、まれに軽度の黒毛舌や黒色便（無害な現象）を引き起こすことがあります。",
        },
      ],
      isotopes: [
        {
          notation: "²⁰⁹Bi",
          use: "物理学の崩壊限界の研究",
          description: "かつては自然界で最も重い安定同位体であると考えられていましたが、後に極めて微弱な放射性（半減期は宇宙の年齢より10億倍以上長い）を持つことが証明されており、実際には絶対に安全です。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ビスマスの低温相転移、安全な毒物学、および医療における薬効はすべて成熟した臨床および物理的実測データです。",
      },
    },
    Po: {
      description: "ポロニウムは極めて希少で、極めて強い放射性を持つ半金属元素であり、キュリー夫人によって発見されました。自然界で最も毒性が強い物質の一つです。",
      uses: ["工業用静電気を除去する除電ブラシ（歴史的な用途）", "初期の人工衛星用熱電発電機の核熱源", "核兵器を起爆させるための超小型中性子源トリガー"],
      appearance: "理論上は銀灰色の固体であるべきですが、それ自身の強烈な放射線と崩壊熱のため、肉眼で見える単体は高温により青い光を発し、急速に気化します。",
      lifeRole: "ポロニウムは人体に対して極めて致命的です。微量の粉塵を吸入または体内に摂取すると、それが放出する強烈なアルファ（α）線が直接DNAと細胞構造を引き裂き、治療不可能な急性の放射線中毒を引き起こします。",
      compounds: [
        {
          formula: "PoO₂",
          name: "二酸化ポロニウム",
          description: "強い放射性を持つ固体であり、自然界に巨視的な量で存在することはほぼ不可能です。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "ポロニウム-210は知られている中で最も強力な致命的な毒物の一つ（毒性はシアン化物の数十万倍）であり、マイクログラムレベルの線量が体内に入るだけで死に至ります。最高防護レベルの核実験室での操作に絶対的に制限されています。",
        },
      ],
      isotopes: [
        {
          notation: "²¹⁰Po",
          use: "暗殺と核物理の線源",
          description: "最も有名な同位体。半減期はわずか138日で、崩壊時に驚異的なエネルギーのアルファ粒子を放出します。有名な放射性毒殺の道具として使用されたことがあります。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ポロニウムの放射性崩壊熱と致命的な放射線の毒物学はすべて明確な核物理および法医学の実測データを備えています。",
      },
    },
    At: {
      description: "アスタチンは自然界で最も希少な元素であり、ハロゲン族に属しますが極めて放射性が高いです。地球の地殻に存在するいかなる時点での総量も1オンス未満と推定されています。",
      uses: ["特定のがんに対するアルファ標的放射線治療の研究（極めて小規模な研究において）", "他に実用的な工業用途はない"],
      appearance: "その巨視的な外観を見た者はいません。理論上、十分な質量を集めることができたとしても、自身の極めて強烈な放射熱によって瞬時に蒸発してなくなります。",
      safety: [
        {
          level: "高リスク",
          description: "アスタチンのすべての同位体は極端な放射線による破壊力を持ち、その半減期は最長でもわずか数時間であり、特殊な粒子加速器の環境から離れて存在することはできません。",
        },
      ],
      isotopes: [
        {
          notation: "²¹¹At",
          use: "医学的標的放射線研究",
          description: "半減期が約7.2時間の人工同位体。科学者たちは、これを抗体に付着させて極めて狭い範囲内のがん細胞を正確に殺すための研究を行っています。",
        },
      ],
      reliability: {
        level: "一部推定データあり",
        description: "アスタチンは半減期が極めて短く量も極めて少ないため、多くの化学的性質は理論的な外挿に依存しており、放射性崩壊とトレーサー実験のみが実測データです。",
      },
    },
    Rn: {
      description: "ラドンは無色、無臭、重い放射性希ガスであり、地層中のウランとトリウムの自然崩壊によって生成されます。自然界において、非喫煙者の肺がんを引き起こす最大の元凶です。",
      uses: ["地震予測研究（地下水中のラドンガス濃度の監視）", "初期の放射性医療インプラントシード（多くは淘汰されている）"],
      appearance: "常温では完全に無色無臭の気体です。固体になるほどの極低温まで冷却すると、自身の放射線によって強烈な黄色からオレンジレッドの輝きを放ちます。",
      lifeRole: "ラドンガスが密閉空間（地下室など）に蓄積した後、人体に吸入されると、その崩壊によって生成される固体微粒子が肺組織に付着し、長期間にわたって継続的にアルファ線を放出して肺細胞を砲撃します。",
      compounds: [
        {
          formula: "RnF₂",
          name: "二フッ化ラドン",
          description: "極端な実験室条件下で合成された固体であり、ラドンが完全に不活性ではないことを証明しましたが、強い放射線のため極めて不安定です。",
        },
      ],
      safety: [
        {
          level: "高リスク",
          description: "ラドンガスは自然界で最も脅威となる放射性ガスであり、低濃度のラドンガスを長期間吸入するだけでも強い発がん性のリスクがあります。地下室や密閉された鉱山には、良好な換気設備やラドンガス検知器を設置すべきです。",
        },
      ],
      isotopes: [
        {
          notation: "²²²Rn",
          use: "環境放射線モニタリング",
          description: "半減期が約3.8日の天然放射性同位体であり、ウラン-238の崩壊系列の中で唯一気体状態をとる核種です。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ラドンの放射性崩壊経路、ガスの拡散物理学、および発がん性のリスクはすべて、高度に完備された環境科学および医学の実測データを備えています。",
      },
    },
    Fr: {
      description: "フランシウムは極めて不安定で強烈な放射性を持つアルカリ金属であり、すべての自然元素の中で最も反応性が高く、かつ最も希少な元素の一つです。",
      uses: ["基礎科学と原子構造の研究", "レーザー分光実験", "レーザー冷却と捕捉の研究"],
      appearance: "銀白色の金属であると予想されます（半減期が極めて短く発熱量が大きいため、巨視的な塊として作られたことはありません）。",
      safety: [
        {
          level: "高リスク",
          description: "フランシウムは極めて強い放射性を持ち、半減期が極めて短く（最長でもわずか22分）、極度に専門的な核物理実験室にのみ存在します。",
        },
      ],
      isotopes: [
        {
          notation: "²²³Fr",
          use: "原子物理学および分光学研究",
          description: "フランシウムの中で最も寿命の長い同位体。半減期は約22分。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "その原子スペクトルと半減期は、すでに正確な実験測定データを持っています。",
      },
    },
    Ra: {
      description: "ラジウムは強烈な放射性を持つアルカリ土類金属であり、化合物は暗闇で微弱な青い蛍光を発します。かつては夜光塗料に広く使用されていましたが、深刻な放射線障害のため禁止されました。",
      uses: ["初期の放射線医療とがん治療の研究", "ポータブル中性子源材料（歴史的な用途）", "科学研究と放射線標準線源"],
      appearance: "常温では銀白色の金属ですが、空気中ではすぐに酸化して黒くなります。",
      safety: [
        {
          level: "高リスク",
          description: "ラジウムは強烈な放射性を持ち、化学的性質がカルシウムに似ているため骨に蓄積しやすく、長期間の曝露は骨がんや深刻な放射線障害を引き起こすため、絶対に接触するべきではありません。",
        },
      ],
      isotopes: [
        {
          notation: "²²⁶Ra",
          use: "放射線源および歴史的な医療",
          description: "ラジウムの最も主要な同位体。半減期は約1600年。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "ラジウムの放射性崩壊系列と毒物学の歴史的記録は完全です。",
      },
    },
    Ac: {
      description: "アクチニウムは銀白色の光沢を持つ放射性金属であり、アクチノイド元素の名前の由来です。空気中ではすぐに酸素と反応して白色の酸化物の層を形成します。",
      uses: ["高効率なアルファ線放射線源の研究", "がんの標的放射線治療（アクチニウム-225など）", "中性子源の科学研究への応用"],
      appearance: "常温では銀白色の金属であり、暗所では強烈な放射線によって微弱な青い光を発します。",
      safety: [
        {
          level: "高リスク",
          description: "アクチニウムとその化合物は極めて強い放射性と毒性を持ち、その危険性はラジウムに匹敵し、専門の放射化学実験室での操作に限定されています。",
        },
      ],
      isotopes: [
        {
          notation: "²²⁵Ac",
          use: "標的がん治療",
          description: "アルファ粒子を放出する医療用同位体であり、精密ながん治療への応用のために広く研究されています。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "アクチニウムの化学的および放射線的性質は、詳細な実測データを備えています。",
      },
    },
    Th: {
      description: "トリウムは微弱な放射性を持つ銀灰色の金属であり、地殻中の存在量はウランよりもはるかに高いです。将来の原子力発電の潜在的なクリーン燃料源と見なされています。",
      uses: ["耐高温金属るつぼと航空エンジン合金の製造", "トリウム燃料原子力発電の研究", "タングステンイナートガス（TIG）溶接電極の添加剤"],
      appearance: "常温では銀灰色の金属であり、空気中ではゆっくりと酸化して暗灰色または黒色になります。",
      compounds: [
        {
          formula: "ThO₂",
          name: "二酸化トリウム",
          description: "極めて高い融点を持つ耐火材料であり、かつてはガス灯のマントルの製造に使用されていました。",
        },
      ],
      safety: [
        {
          level: "警告",
          description: "金属トリウムは微弱な放射性を持ち、トリウム粉末は空気中で燃えやすいです。トリウムの粉塵を長期間吸入すると健康リスクが高まるため、換気の良い環境で専門的に取り扱うべきです。",
        },
      ],
      isotopes: [
        {
          notation: "²³²Th",
          use: "原子力と地質年代測定",
          description: "自然界に唯一存在する天然のトリウム同位体。半減期は140億年にも及びます。",
        },
      ],
      reliability: {
        level: "実測データあり",
        description: "トリウムの物理的、化学的、および核燃料としての特性は豊富な実測データを備えています。",
      },
    },
    Pa: {
  description:
    "プロトアクチニウムは、アクチノイドに属する希少で強い放射能をもつ銀灰色の金属です。自然界では主にウラン鉱石の放射性崩壊によって、ごく微量に生成されます。",
  uses: [
    "基礎核物理学および放射化学の研究",
    "地質年代測定の参照",
    "科学的探究用途",
  ],
  appearance:
    "常温では銀灰色の金属で、空気中ではゆっくり酸化して光沢を失います。",
  safety: [
    {
      level: "高リスク",
      description:
        "プロトアクチニウムおよびその化合物は高い放射能と化学毒性をもち、その危険性はウランやマンガンに近いとされます。厳格な防護環境下で扱う必要があります。",
    },
  ],
  isotopes: [
    {
      notation: "²³¹Pa",
      use: "地質年代測定研究",
      description:
        "プロトアクチニウムで最も寿命の長い同位体で、半減期は約32700年です。",
    },
  ],
  reliability: {
    level: "実測データあり",
    description:
      "プロトアクチニウムの結晶構造と崩壊データには科学的な実測記録があります。",
  },
},

U: {
  description:
    "ウランは重く銀灰色をした放射性金属で、原子力発電と核兵器の中心的な原料です。自然界のウランは主に複数の同位体の混合物として存在します。",
  uses: [
    "原子力発電所の核燃料",
    "原子力潜水艦の動力源",
    "軍用装甲および徹甲弾の材料（劣化ウラン）",
  ],
  appearance:
    "常温では銀灰色の金属で、空気に触れるとすばやく黒色の酸化被膜を生じます。",
  compounds: [
    {
      formula: "UF₆",
      name: "六フッ化ウラン",
      description:
        "常温では固体で、加熱すると昇華しやすく、ウラン同位体濃縮工程における重要な気体原料です。",
    },
    {
      formula: "UO₂",
      name: "二酸化ウラン",
      description: "核燃料ペレットの主要な化学成分です。",
    },
  ],
  reactions: [
    {
      equation: "U + O₂ → UO₂",
      description:
        "ウラン金属は空気中で加熱すると燃焼し、二酸化ウランを生成します。",
      conditions: "加熱",
    },
  ],
  safety: [
    {
      level: "高リスク",
      description:
        "ウランには放射能と重金属としての化学毒性があります。濃縮ウランや兵器級ウランは国際的に厳格な管理対象であり、個人で接触・操作してはいけません。",
    },
  ],
  isotopes: [
    {
      notation: "²³⁵U",
      use: "原子力発電と核兵器",
      description:
        "天然ウラン中で熱中性子による核分裂を起こせる唯一の同位体です。",
    },
    {
      notation: "²³⁸U",
      use: "核燃料原料と地質年代測定",
      description:
        "天然ウランの99%以上を占める、非常に安定した同位体です。",
    },
  ],
  reliability: {
    level: "実測データあり",
    description:
      "ウランの核分裂に関する物理特性と化学工業プロセスには、非常に詳細な実測データがあります。",
  },
},

Np: {
  description:
    "ネプツニウムは、最初に発見された人工超ウラン元素で、強い放射能をもつ銀灰色の金属です。",
  uses: [
    "核物理研究および中性子検出器",
    "プルトニウム238の合成原料（宇宙探査機の熱電発電機用）",
    "科学研究用途",
  ],
  appearance:
    "常温では銀灰色の金属で、複数の結晶構造をもちます。",
  safety: [
    {
      level: "高リスク",
      description:
        "ネプツニウムおよびその化合物は高い放射能と重金属毒性をもち、高度に規制された国家レベルの実験施設に限って扱われます。",
    },
  ],
  isotopes: [
    {
      notation: "²³⁷Np",
      use: "宇宙用電源と中性子検出",
      description:
        "ネプツニウムで最も安定かつ半減期の長い同位体で、半減期は約214万年です。",
    },
  ],
  reliability: {
    level: "実測データあり",
    description:
      "ネプツニウムの化学的性質と核反応データには、十分な実験測定資料があります。",
  },
},

Pu: {
  description:
    "プルトニウムは、非常に強い放射能と毒性をもつ銀灰色の人工超ウラン金属です。原子力産業と核兵器開発において極めて重要な位置を占めます。",
  uses: [
    "核兵器の中心装荷物",
    "宇宙探査機用放射性同位体熱電発電機（RTG）の燃料",
    "高速増殖炉の燃料",
  ],
  appearance:
    "常温では銀灰色の金属で、空気に触れると酸化により急速に暗黄色またはオリーブグリーンに変化します。",
  compounds: [
    {
      formula: "PuO₂",
      name: "二酸化プルトニウム",
      description:
        "水に極めて溶けにくい安定したセラミック状の粉末で、宇宙用電池の熱源として広く用いられます。",
    },
  ],
  safety: [
    {
      level: "高リスク",
      description:
        "プルトニウムは、既知の元素の中でも特に毒性と放射能が強いものの一つです。微量の粉じんを吸入するだけでも健康被害の危険があり、国際原子力機関の厳格な管理対象です。個人で接触してはいけません。",
    },
  ],
  isotopes: [
    {
      notation: "²³⁹Pu",
      use: "核兵器と原子力",
      description:
        "高効率で核分裂を起こせる同位体で、核兵器の主要材料です。",
    },
    {
      notation: "²³⁸Pu",
      use: "宇宙探査用電力供給",
      description:
        "大きな崩壊熱を放出する同位体で、カッシーニやキュリオシティなどの宇宙船のRTG電源に使われます。",
    },
  ],
  reliability: {
    level: "実測データあり",
    description:
      "プルトニウムの冶金学、核分裂特性、生物毒性には、多数の軍事・科学的な実測資料があります。",
  },
},

Am: {
  description:
    "アメリシウムは人工的に合成された放射性金属で、アクチノイドに属します。日常生活で触れる可能性のある数少ない民生利用の放射性元素の一つです。",
  uses: [
    "家庭用火災報知器（イオン化式煙感知器）",
    "工業用の厚さ・密度測定器",
    "ガンマ線およびアルファ線スペクトロメーターの校正線源",
  ],
  appearance:
    "常温では銀白色の金属で、空気中ではゆっくり光沢を失います。",
  safety: [
    {
      level: "高リスク",
      description:
        "アメリシウムは強い放射能、特にアルファ線を放出します。市販の煙感知器に含まれる量は非常に少なく安全ですが、露出したアメリシウム線源は高い健康リスクをもち、分解してはいけません。",
    },
  ],
  isotopes: [
    {
      notation: "²⁴¹Am",
      use: "煙感知器と工業機器",
      description:
        "アメリシウムの主要同位体で、半減期は約432.2年です。",
    },
  ],
  reliability: {
    level: "実測データあり",
    description:
      "アメリシウムの放射性崩壊と民生用電離特性は、数十年にわたり実測で検証されています。",
  },
},

Cm: {
  description:
    "キュリウムは硬く高い放射能をもつ人工超ウラン金属で、科学者キュリー夫妻にちなんで名付けられました。強い放射線の影響により、かすかな青い発光を示すことがあります。",
  uses: [
    "宇宙探査機のα粒子X線分光計（APXS）の放射線源",
    "より重い超重元素を合成するための標的",
    "同位体熱電発電機の熱源研究",
  ],
  appearance:
    "常温では銀白色の金属で、暗所では自身の強い放射能による励起で発光することがあります。",
  safety: [
    {
      level: "高リスク",
      description:
        "キュリウムは高エネルギーのアルファ粒子を放出し、非常に強い放射線毒性をもちます。体内に入ると骨に蓄積して造血組織を損なうおそれがあるため、専門実験室でのみ扱われます。",
    },
  ],
  isotopes: [
    {
      notation: "²⁴⁴Cm",
      use: "宇宙機器と熱源",
      description:
        "比較的まとまった量で製造しやすい同位体で、火星探査車の科学機器の放射線源として使われます。",
    },
  ],
  reliability: {
    level: "実測データあり",
    description:
      "キュリウムの結晶学および放射化学データは、実験室で測定されています。",
  },
},

Bk: {
  description:
    "バークリウムは人工合成された放射性金属で、アクチノイドに属します。アメリカのカリフォルニア大学バークレー校にちなんで名付けられました。",
  uses: [
    "より新しい超重元素（ボーリウムなど）を合成するための標的",
    "基礎核物理学および化学的電子構造の研究",
    "科学研究用途",
  ],
  appearance:
    "銀白色の金属と予想されていますが、強い放射能によって自身の結晶格子が損なわれます。",
  safety: [
    {
      level: "高リスク",
      description:
        "バークリウムは強い放射能と生物毒性をもち、生産量が極めて少なく半減期も短いため、最高水準の国家研究所でのみ扱われます。",
    },
  ],
  isotopes: [
    {
      notation: "²⁴⁹Bk",
      use: "超重元素合成の標的",
      description:
        "比較的安定したバークリウム同位体で、半減期は約330日です。",
    },
  ],
  reliability: {
    level: "実測データあり",
    description:
      "バークリウムの化学分離および合成データには、実験室での実測記録があります。",
  },
},

Cf: {
  description:
    "カリホルニウムは強い放射能をもつ人工超ウラン金属です。大量の中性子を放出し、世界で最も強力な携帯可能な中性子源の一つです。",
  uses: [
    "原子炉の起動に用いる強力な中性子源",
    "がん放射線治療（中性子近接照射）",
    "工業材料の非破壊検査、金・水文探査",
  ],
  appearance:
    "常温では銀白色の金属で、空気中ではゆっくり酸化します。",
  safety: [
    {
      level: "高リスク",
      description:
        "カリホルニウム252は高い透過力をもつ中性子とアルファ線を大量に放出し、極めて高い致死的放射線リスクがあります。厚い鉛と水による遮蔽を備えた容器内で扱う必要があります。",
    },
  ],
  isotopes: [
    {
      notation: "²⁵²Cf",
      use: "工業用中性子源とがん治療",
      description:
        "強く自発核分裂して大量の中性子を放出する同位体で、1マイクログラムあたり毎秒数百万個の中性子を放出します。",
    },
  ],
  reliability: {
    level: "実測データあり",
    description:
      "カリホルニウムの中性子放出率と工業利用には、詳細な実測データがあります。",
  },
},

Es: {
  description:
    "アインスタイニウムは、1952年の最初の水素爆弾実験後に残った放射性降下物から初めて発見された人工超ウラン元素です。",
  uses: [
    "より重い超重元素（メンデレビウム、ノーベリウムなど）の合成研究",
    "基礎核物理学および量子化学の実験",
    "科学研究用途",
  ],
  appearance:
    "銀白色の金属と予想されていますが、強い放射能による熱で自身が急速に気化または発光する可能性があります。",
  safety: [
    {
      level: "高リスク",
      description:
        "アインスタイニウムは非常に高い放射線毒性と発熱性をもち、遠隔操作設備を備えたホットセル実験室でのみ扱われます。",
    },
  ],
  isotopes: [
    {
      notation: "²⁵²Es",
      use: "科学研究",
      description:
        "アインスタイニウムの主要な研究用同位体の一つです。",
    },
  ],
  reliability: {
    level: "実測データあり",
    description:
      "アインスタイニウムの微量化学的特性については、初期的な実験測定があります。",
  },
},

Fm: {
  description:
    "フェルミウムは現代物理学の父と呼ばれるエンリコ・フェルミにちなむ人工放射性超ウラン金属で、原子炉または粒子加速器でごく微量にしか合成できません。",
  uses: [
    "基礎核物理学および超重元素の性質研究",
    "科学的探究用途",
  ],
  appearance:
    "金属状態と予想されていますが、生成量が数原子程度に限られるため、巨視的な実体にはできません。",
  safety: [
    {
      level: "高リスク",
      description:
        "フェルミウムは強い放射能をもちますが、半減期が短く生成量もごくわずかなため、一般の人が接触する実際的なリスクはありません。核実験室で厳格に管理されています。",
    },
  ],
  isotopes: [
    {
      notation: "²⁵⁷Fm",
      use: "核物理実験",
      description:
        "比較的寿命の長いフェルミウム同位体の一つで、半減期は約100.5日です。",
    },
  ],
  reliability: {
    level: "実測データあり",
    description:
      "フェルミウムの基礎的な化学イオン挙動には実験測定の記録があります。",
  },
},

Md: {
  description:
    "メンデレビウムは、元素周期表の発明者ドミトリ・メンデレーエフを記念して名付けられた人工放射性金属です。",
  uses: [
    "超重元素の化学的性質に関する基礎科学研究",
    "科学研究用途",
  ],
  appearance:
    "金属状態と予想されていますが、極度に希少なため実際の外観は観察できません。",
  safety: [
    {
      level: "高リスク",
      description:
        "メンデレビウムは強い放射能をもち、専門的な粒子物理実験室にのみ存在します。",
    },
  ],
  isotopes: [
    {
      notation: "²⁵⁸Md",
      use: "科学研究",
      description: "半減期が約51.5日の同位体です。",
    },
  ],
  reliability: {
    level: "実測データあり",
    description:
      "メンデレビウムのイオン交換クロマトグラフィー分析には実験データがあります。",
  },
},

No: {
  description:
    "ノーベリウムは、ノーベル賞の創設者アルフレッド・ノーベルを記念して名付けられた人工放射性超ウラン元素です。",
  uses: [
    "核物理学および超重元素の電子構造研究",
    "科学研究用途",
  ],
  appearance:
    "理論上は金属状態とされますが、半減期が非常に短いため塊状にはできません。",
  safety: [
    {
      level: "高リスク",
      description:
        "ノーベリウムは強い放射能をもち、生成される実験室環境でのみ監視下に置かれます。",
    },
  ],
  isotopes: [
    {
      notation: "²⁵⁹No",
      use: "核物理研究",
      description:
        "比較的安定したノーベリウム同位体で、半減期は約58分です。",
    },
  ],
  reliability: {
    level: "実測データあり",
    description:
      "ノーベリウムの崩壊様式および酸化状態に関する実験記録があります。",
  },
},

Lr: {
  description:
    "ローレンシウムはアクチノイド最後の元素（第103番元素）で、アーネスト・ローレンスにちなむ人工放射性金属です。",
  uses: [
    "超アクチノイド元素と周期表の境界を探る基礎物理研究",
    "科学研究用途",
  ],
  appearance: "理論上は銀白色の金属固体です。",
  safety: [
    {
      level: "高リスク",
      description:
        "ローレンシウムは強い放射能をもち半減期も短いため、最高水準の粒子加速器実験室でのみごく微量の観測が行われます。",
    },
  ],
  isotopes: [
    {
      notation: "²⁶²Lr",
      use: "超重元素研究",
      description:
        "比較的寿命の長いローレンシウム同位体の一つで、半減期は約3.6時間です。",
    },
  ],
  reliability: {
    level: "実測データあり",
    description:
      "ローレンシウムの第一イオン化エネルギーなどの基礎物理特性には実験測定記録があります。",
  },
},
  "Rf": {
    "description": "ラザホージウムは人工合成された放射性遷移金属であり、第4族元素に属する。半衰期が極めて短く、産量もごく微量であるため、現在は粒子物理学および超重元素化学の研究にのみ限られている。",
    "uses": [
      "超重元素の核物理研究",
      "相対論的量子化学実験",
      "元素周期表の境界と電子配置の探求"
    ],
    "appearance": "理論上は金属固体のハズだが、半衰期が極めて短く量が極微量であるため、巨視的な外観を実際に観測することはできない。",
    "safety": [
      {
        "level": "高リスク",
        "description": "極めて強い放射性を有しており、トップレベルの国家級加速器実験室において厳重な防護のもとでのみ操作できる。"
      }
    ],
    "isotopes": [
      {
        "notation": "²⁶⁷Rf",
        "use": "学術研究",
        "description": "比較的寿命の長い同位体のひとつであり、半衰期は数時間以内である。"
      }
    ],
    "reliability": {
      "level": "実測データあり",
      "description": "その合成および基礎的な核物理的性質については、すでに実験的な測定記録が存在する。"
    }
  },
  "Db": {
    "description": "ドブニウムは人工合成された放射性遷移金属であり、第5族元素に属する。粒子加速器内の核反応によってのみ微量に製造することができる。",
    "uses": [
      "超重元素の化学的性質の研究",
      "核物理的反応メカニズムの考察",
      "科学研究用途"
    ],
    "appearance": "理論上は金属固体であるが、巨視的実体を形成することはできない。",
    "safety": [
      {
        "level": "高リスク",
        "description": "強烈な放射性を有しており、専門的な核実験室でのみ操作が制限される。"
      }
    ],
    "reliability": {
      "level": "実測データあり",
      "description": "その合成および崩壊データについては、すでに実験的な測定記録が存在する。"
    }
  },
  "Sg": {
    "description": "シーボーギウムは人工合成された放射性遷移金属であり、現代化学の先駆者グレン・シーボーグにちなんで名付けられた。第6族の最も重いメンバーである。",
    "uses": [
      "超重元素の化学および気相クロマトグラフィー研究",
      "第6族元素の化学的相同性の考察",
      "核物理基礎研究"
    ],
    "appearance": "理論上は金属固体である。",
    "safety": [
      {
        "level": "高リスク",
        "description": "強烈な放射性を有しており、粒子物理実験室でのみ取り扱われる。"
      }
    ],
    "reliability": {
      "level": "実測データあり",
      "description": "その合成および予備的な気相化学的性質については、すでに実験的な測定記録が存在する。"
    }
  },
  "Bh": {
    "description": "ボーリウムは人工合成された放射性遷移金属であり、第7族元素に属する。その化学的性質はマンガンやレニウムと類似すると予想されている。",
    "uses": [
      "超重元素の周期表上の位置づけに関する研究",
      "核物理学および崩壊系列の分析",
      "科学研究用途"
    ],
    "appearance": "理論上は金属固体である。",
    "safety": [
      {
        "level": "高リスク",
        "description": "強烈な放射性を有しており、専門的な核実験室でのみ操作が制限される。"
      }
    ],
    "reliability": {
      "level": "実測データあり",
      "description": "その合成およびアルファ崩壊データについては、すでに実験的な測定記録が存在する。"
    }
  },
  "Hs": {
    "description": "ハッシウムは人工合成された放射性遷移金属であり、第8族元素に属する。オスミウムに類似した揮発性の四酸化物を形成することができる。",
    "uses": [
      "超重元素の揮発性化合物に関する化学研究",
      "核構造および超重核安定の島理論の検証",
      "科学研究用途"
    ],
    "appearance": "理論上は金属固体である。",
    "safety": [
      {
        "level": "高リスク",
        "description": "強烈な放射性を有しており、高度に防護された物理実験室でのみ操作される。"
      }
    ],
    "reliability": {
      "level": "実測データあり",
      "description": "その合成および揮発性酸化物に関する実験の実測記録が存在する。"
    }
  },
  "Mt": {
    "description": "マイトネリウムは人工合成された放射性遷移金属であり、著名な物理学者リーゼ・マイトナーにちなんで名付けられ、第9族元素に属する。",
    "uses": [
      "超重核物理研究",
      "第9族元素の金属結合と相対論的効果の考察",
      "科学研究用途"
    ],
    "appearance": "理論上は金属固体である。",
    "safety": [
      {
        "level": "高リスク",
        "description": "強烈な放射性を有しており、専門的な加速器実験室でのみ操作される。"
      }
    ],
    "reliability": {
      "level": "実測データあり",
      "description": "その合成および崩壊系列データについては、すでに実験的な測定記録が存在する。"
    }
  },
  "Ds": {
    "description": "ダームスタチウムは人工合成された放射性遷移金属であり、発見地であるドイツのダルムシュタットにちなんで名付けられ、第10族元素に属する。",
    "uses": [
      "超重元素の合成と核物理研究",
      "白金族に類似した化学的性質の考察",
      "科学研究用途"
    ],
    "appearance": "理論上は金属固体である。",
    "safety": [
      {
        "level": "高リスク",
        "description": "強烈な放射性を有しており、専門的な物理実験室でのみ操作される。"
      }
    ],
    "reliability": {
      "level": "実測データあり",
      "description": "その合成および基礎的な崩壊データについては、すでに実験的な測定記録が存在する。"
    }
  },
  "Rg": {
    "description": "レントゲニウムは人工合成された放射性遷移金属であり、X線の発見者レントゲンにちなんで名付けられ、第11族元素に属する。",
    "uses": [
      "超重元素の電子構造研究",
      "金族元素にみられる相対論的収縮効果の考察",
      "科学研究用途"
    ],
    "appearance": "理論上は金属固体である。",
    "safety": [
      {
        "level": "高リスク",
        "description": "強烈な放射性を有しており、トップレベルの核物理実験室でのみ操作される。"
      }
    ],
    "reliability": {
      "level": "実測データあり",
      "description": "その合成および基礎的な崩壊データについては、すでに実験的な測定記録が存在する。"
    }
  },
  "Cn": {
    "description": "コペルニシウムは人工合成された放射性遷移金属であり、第12族元素に属する。実験により、常温下で高度な揮発性を示し、希ガスに類似した一部の物理的特性さえも表す可能性があることが示されている。",
    "uses": [
      "超重元素の気相吸着および揮発性に関する研究",
      "相対論的量子化学実験",
      "核物理基礎研究"
    ],
    "appearance": "理論上は常温下で揮発性の液体あるいは気体金属である可能性がある。",
    "safety": [
      {
        "level": "高リスク",
        "description": "強烈な放射性を有しており、専門的な核実験室でのみ操作が制限される。"
      }
    ],
    "reliability": {
      "level": "実測データあり",
      "description": "その揮発性および吸着性質については、画期的な実験的測定記録が存在する。"
    }
  },
  "Nh": {
    "description": "ニホニウムは人工合成された放射性元素であり、第13族に属し、日本の理化学研究所のチームによって初めて発見・命名された。",
    "uses": [
      "超重元素の周期表上の位置づけに関する研究",
      "第13族重元素における相対論的効果の考察",
      "科学研究用途"
    ],
    "appearance": "理論上は金属固体である。",
    "safety": [
      {
        "level": "高リスク",
        "description": "強烈な放射性を有しており、専門的な加速器実験室でのみ操作される。"
      }
    ],
    "reliability": {
      "level": "実測データあり",
      "description": "その合成および崩壊系列データについては、すでに実験的な測定記録が存在する。"
    }
  },
  "Fl": {
    "description": "フレロビウムは人工合成された放射性元素であり、第14族に属する。その化学的性質は強い相対論的効果の影響を受け、希ガスのような不活性な挙動を示すと理論的に予測されている。",
    "uses": [
      "超重元素の気相化学と不活性挙動に関する研究",
      "「安定の島」理論の考察",
      "科学研究用途"
    ],
    "appearance": "理論上は金属固体あるいは揮発性物質である。",
    "safety": [
      {
        "level": "高リスク",
        "description": "強烈な放射性を有しており、専門的な核実験室でのみ操作が制限される。"
      }
    ],
    "reliability": {
      "level": "実測データあり",
      "description": "その予備的な揮発性および合成データについては、すでに実験的な測定記録が存在する。"
    }
  },
  "Mc": {
    "description": "モスコビウムは人工合成された放射性元素であり、第15族に属する。ターゲット材へのイオン照射によってのみ微量合成が可能である。",
    "uses": [
      "超重元素の核物理研究",
      "重い窒素族元素の化学的性質の考察",
      "科学研究用途"
    ],
    "appearance": "理論上は金属固体である。",
    "safety": [
      {
        "level": "高リスク",
        "description": "強烈な放射性を有しており、トップレベルの粒子物理実験室でのみ操作される。"
      }
    ],
    "reliability": {
      "level": "実測データあり",
      "description": "その合成およびアルファ崩壊データについては、すでに実験的な測定記録が存在する。"
    }
  },
  "Lv": {
    "description": "リバモリウムは人工合成された放射性元素であり、第16族に属する。",
    "uses": [
      "超重元素の核構造研究",
      "重い酸素族元素の化学的性質の考察",
      "科学研究用途"
    ],
    "appearance": "理論上は固体元素である。",
    "safety": [
      {
        "level": "高リスク",
        "description": "強烈な放射性を有しており、専門的な実験室でのみ操作される。"
      }
    ],
    "reliability": {
      "level": "実測データあり",
      "description": "その合成および崩壊系列データについては、すでに実験的な測定記録が存在する。"
    }
  },
  "Ts": {
    "description": "テネシンは人工合成された放射性ハロゲン元素である。原子序数が極めて高いため、顕著な相対論的効果の影響を受けると予想されている。",
    "uses": [
      "超重ハロゲンの化学的および物理的性質の研究",
      "元素周期表第7周期の終端特性の考察",
      "科学研究用途"
    ],
    "appearance": "理論上は固体のハロゲンであると予想されている。",
    "safety": [
      {
        "level": "高リスク",
        "description": "強烈な放射性と高エネルギー崩壊を有しており、トップレベルの国営実験室でのみ操作される。"
      }
    ],
    "reliability": {
      "level": "実測データあり",
      "description": "その合成および基礎的な核物理的性質については、すでに実験的な測定記録が存在する。"
    }
  },
  "Og": {
    "description": "オガネソンは現在知られている中で最大の原子番号（118番）を持つ元素であり、第18族に属する。不活性ガスに分類されるものの、強い相対論的効果により、常温下では気体ではなく半導体特性を持つ固体である可能性がある。",
    "uses": [
      "周期表の限界と相対論的効果を探索する物理研究",
      "超重核安定の島理論の検証",
      "科学研究用途"
    ],
    "appearance": "理論予測では常温下において独自の半導体特性を備えた固体状態である可能性がある。",
    "safety": [
      {
        "level": "高リスク",
        "description": "極めて強い放射性と極短の半衰期を有しており、トップレベルの国家級加速器実験室において防護下でのみ操作される。"
      }
    ],
    "reliability": {
      "level": "実測データあり",
      "description": "その合成および基礎的なアルファ崩壊データについては、すでに実験的な測定記録が存在する。"
    }
  }
  },
} as const;