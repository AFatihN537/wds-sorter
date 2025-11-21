dataSetVersion = "2025-11-21";

dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Theater",
    key: "theater",
    tooltip: "Check this to restrict to characters from certain theaters.",
    checked: false,
    sub: [
      { name: "Sirius", key: "sirius" },
      { name: "Gingaza", key: "gingaza" },
      { name: "Eden", key: "eden" },
      { name: "Gekidan Denki", key: "denki" },
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  // --- Sirius ---
  {
    name: "Otori Kokona",
    img: "kokona.png",
    opts: {
      theater: ["sirius"],
    }
  },
  {
    name: "Shizuka",
    img: "shizuka.png",
    opts: {
      theater: ["sirius"],
    }
  },
  {
    name: "Kathrina Griebel",
    img: "kathrina.png",
    opts: {
      theater: ["sirius"],
    }
  },
  {
    name: "Yanagiba Panda",
    img: "panda.png",
    opts: {
      theater: ["sirius"],
    }
  },
  {
    name: "Sasuga Chisa",
    img: "chisa.png",
    opts: {
      theater: ["sirius"],
    }
  },
  {
    name: "Niizuma Yae",
    img: "yae.png",
    opts: {
      theater: ["sirius"],
    }
  },

  // --- Gingaza ---
  {
    name: "Senju Koyomi",
    img: "koyomi.png",
    opts: {
      theater: ["gingaza"],
    }
  },
  {
    name: "Ramona Wolf",
    img: "ramona.png",
    opts: {
      theater: ["gingaza"],
    }
  },
  {
    name: "Xue Wang",
    img: "xue.png",
    opts: {
      theater: ["gingaza"],
    }
  },
  {
    name: "Lilja Kurtbay",
    img: "lilja.png",
    opts: {
      theater: ["gingaza"],
    }
  },
  {
    name: "Yonaguni Hikari",
    img: "hikari.png",
    opts: {
      theater: ["gingaza"],
    }
  },

  // --- Eden ---
  {
    name: "Renjakuno Hatsumi",
    img: "hatsumi.png",
    opts: {
      theater: ["eden"],
    }
  },
  {
    name: "Karasumori Daikoku",
    img: "daikoku.png",
    opts: {
      theater: ["eden"],
    }
  },
  {
    name: "Toneri Nikako",
    img: "nikako.png",
    opts: {
      theater: ["eden"],
    }
  },
  {
    name: "Yorozu Iruru",
    img: "iruru.png",
    opts: {
      theater: ["eden"],
    }
  },
  {
    name: "Fudeshima Shigure",
    img: "shigure.png",
    opts: {
      theater: ["eden"],
    }
  },

  // --- Gekidan Denki ---
  {
    name: "Senju Iroha",
    img: "iroha.png",
    opts: {
      theater: ["denki"],
    }
  },
  {
    name: "Shiromaru Mito",
    img: "mito.png",
    opts: {
      theater: ["denki"],
    }
  },
  {
    name: "Akiru Kamira",
    img: "kamira.png",
    opts: {
      theater: ["denki"],
    }
  },
  {
    name: "Nekoashi Tsubomi",
    img: "tsubomi.png",
    opts: {
      theater: ["denki"],
    }
  },
  {
    name: "Motosu Towa",
    img: "towa.png",
    opts: {
      theater: ["denki"],
    }
  }
];