const chatEnd = (poke) => poke.at(-1);

const uniqueName = (name, index) => name.filter((pok) => !index.includes(pok));

const leadW = (name) => {
  const nameNew = new Map();
  name.forEach((e) => {
    const poke = e[0];
    nameNew.set(poke, [...(nameNew.get(poke) || []), e]);
  });
  return nameNew;
};

const Result = (pokes) => {
  const nameNew = leadW(pokes);
  let maxElemet = 0;
  let maxGroup = [];
  const clearData = (data) => {
    if (typeof data[0] === "object") {
      data.forEach((e) => clearData(e));
    } else {
      if (data.length > maxElemet) {
        maxElemet = data.length;
        maxGroup = [data];
      }
      if (data.length === maxElemet) {
        maxGroup.push(data);
      }
    }
  };

  const huntNames = (name, res) => {
    const pok = uniqueName(nameNew.get(chatEnd(name)) || [], res);
    return pok.length ? pok.map((e,_) => huntNames(e, [...res, e])) : res;
  };

  pokes.forEach((name) => {
    const res = huntNames(name, [name]);
    clearData(res);
  });

  console.log("Nombres", maxElemet);
  console.log("Muestra de elementos", maxGroup[0]);
  console.log("Total", maxGroup.length);
};
const poke = [
  "audino",
  "bagon",
  "baltoy",
  "banette",
  "bidoof",
  "braviary",
  "bronzor",
  "carracosta",
  "charmeleon",
  "cresselia",
  "croagunk",
  "darmanitan",
  "deino",
  "emboar",
  "emolga",
  "exeggcute",
  "gabite",
  "girafarig",
  "gulpin",
  "haxorus",
  "heatmor",
  "heatran",
  "ivysaur",
  "jellicent",
  "jumpluff",
  "kangaskhan",
  "kricketune",
  "landorus",
  "ledyba",
  "loudred",
  "lumineon",
  "lunatone",
  "machamp",
  "magnezone",
  "mamoswine",
  "nosepass",
  "petilil",
  "pidgeotto",
  "pikachu",
  "pinsir",
  "poliwrath",
  "poochyena",
  "porygon2",
  "porygonz",
  "registeel",
  "relicanth",
  "remoraid",
  "rufflet",
  "scolipede",
  "sableye",
  "scrafty",
  "seaking",
  "sealeo",
  "silcoon",
  "simisear",
  "snivy",
  "snorlax",
  "spoink",
  "starly",
  "tirtouga",
  "trapinch",
  "treecko",
  "tyrogue",
  "vigoroth",
  "vulpix",
  "wailord",
  "wartortle",
  "whismur",
  "wingull",
  "yamask",
];

Result(poke);
