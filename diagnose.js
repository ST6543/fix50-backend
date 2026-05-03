const diagnoseData = {

  "start_niet": {
    naam: "Scooter start niet",
    oorzaken: [
      "Geen vonk",
      "Geen brandstof",
      "Lage compressie",
      "Verkeerde timing",
      "Verstopte carburateur",
      "Startmotor draait niet of te langzaam"
    ],
    tests: [
      "Bougie eruit, vonk checken",
      "Brandstofslang los, flow check",
      "Compressietest",
      "Carburateur inspectie",
      "Startmotor op 12V testen"
    ],
    oplossingen: [
      "Bobine/CDI/bougie vervangen",
      "Carburateur reinigen",
      "Kleppen stellen (4T)",
      "Cilinder/zuiger vervangen",
      "Startmotor reviseren"
    ],
    blokinfo: "GY6: klepspeling, choke, vacuüm; Piaggio 2T: membraan, keerringen; AM6: keerring versnellingsbakzijde; Tomos: punten/condensator"
  },

  "slaat_af_bij_gas": {
    naam: "Slaat af bij gas geven",
    oorzaken: [
      "Te arm mengsel",
      "Vacuümlek",
      "Carburateur vervuild",
      "Te weinig brandstofaanvoer"
    ],
    tests: [
      "Remmenreiniger rond spruitstuk",
      "Sproeiers controleren",
      "Brandstofdoorstroming testen"
    ],
    oplossingen: [
      "Carburateur reinigen",
      "Spruitstuk vervangen",
      "Brandstofkraan/pomp vervangen"
    ],
    blokinfo: "GY6: vacuümpomp/choke; Piaggio 2T: membraanplaatjes; Tomos: sproeier verstopt door mengsmering"
  },

  "slecht_stationair": {
    naam: "Loopt slecht stationair",
    oorzaken: [
      "Te arm mengsel",
      "Valse lucht",
      "Stationair sproeier verstopt",
      "Slechte bougie"
    ],
    tests: [
      "Stationair schroef reactie",
      "Remmenreiniger rond spruitstuk",
      "Bougie kleur check"
    ],
    oplossingen: [
      "Carburateur reinigen",
      "Spruitstuk vervangen",
      "Bougie vervangen"
    ],
    blokinfo: "4T: klepspeling; 2T: keerringen; AM6: membraan"
  },

  "traag_20_30": {
    naam: "Rijdt niet harder dan 20–30 km/h",
    oorzaken: [
      "Variateur problemen",
      "V-snaar versleten",
      "Carburateur te arm",
      "Uitlaat verstopt"
    ],
    tests: [
      "Variateur inspectie",
      "Snaar meten",
      "Sproeier checken"
    ],
    oplossingen: [
      "Rollen/snaar vervangen",
      "Carburateur afstellen",
      "Uitlaat reinigen/vervangen"
    ],
    blokinfo: "GY6: variateurbus, snaar; Piaggio 2T: uitlaat verstopt; Tomos: koppeling slipt"
  },

  "tikkend_geluid": {
    naam: "Tikkend/ratelend geluid",
    oorzaken: [
      "Klepspeling fout (4T)",
      "Lagers versleten",
      "Koppeling versleten"
    ],
    tests: [
      "Klepspeling meten",
      "Zijdeksel eraf, speling controleren"
    ],
    oplossingen: [
      "Kleppen stellen",
      "Lagers/koppeling vervangen"
    ],
    blokinfo: "AM6: krukaslagers; GY6: kleppen tikken; Tomos: koppeling ratelt"
  },

  "rookt_extreem": {
    naam: "Rookt extreem",
    oorzaken: [
      "Te veel olie (2T)",
      "Versleten zuigerveren",
      "Oliepomp verkeerd afgesteld",
      "Klepseals (4T)"
    ],
    tests: [
      "Compressie",
      "Oliepomp markeringen",
      "Oliepeil"
    ],
    oplossingen: [
      "Oliepomp afstellen",
      "Zuiger/veren vervangen",
      "Klepseals vervangen"
    ],
    blokinfo: "Piaggio 2T: oliepomp tandwiel; Tomos: mengsmering te rijk"
  },

  "trilt_optrekken": {
    naam: "Trilt bij optrekken",
    oorzaken: [
      "Variateur",
      "Koppeling",
      "Snaar",
      "Motorsteunen"
    ],
    tests: [
      "Variateur/koppeling inspectie",
      "Snaarspanning",
      "Motorsteunen checken"
    ],
    oplossingen: [
      "Rollen/koppeling/snaar vervangen",
      "Motorsteunen vervangen"
    ],
    blokinfo: "GY6: koppeling ongelijk; Piaggio 2T: snaar slijt snel"
  },

  "backfire": {
    naam: "Ploffend geluid / backfire",
    oorzaken: [
      "Te arm mengsel",
      "Valse lucht",
      "Kleppen verkeerd afgesteld (4T)",
      "Uitlaatpakking lek"
    ],
    tests: [
      "Bougie kleur",
      "Remmenreiniger test",
      "Klepspeling meten"
    ],
    oplossingen: [
      "Mengsel afstellen",
      "Pakking vervangen",
      "Kleppen stellen"
    ],
    blokinfo: "GY6: choke blijft hangen; 4T: kleppen stellen"
  },

  "te_warm": {
    naam: "Scooter wordt te warm",
    oorzaken: [
      "Koelvloeistof laag",
      "Waterpomp defect",
      "Thermostaat vast",
      "Te arm mengsel"
    ],
    tests: [
      "Koelvloeistofniveau",
      "Waterpomp werking",
      "Bougie kleur"
    ],
     oplossingen: [
      "Bijvullen",
      "Waterpomp/thermostaat vervangen",
      "Mengsel afstellen"
    ],
    blokinfo: "Piaggio LC: waterpomp keerring; AM6: waterpomp tandwiel"
  },

  "valt_stationair": {
    naam: "Slaat af stationair maar rijdt goed",
    oorzaken: [
      "Stationair sproeier verstopt",
      "Valse lucht",
      "Klepspeling (4T)"
    ],
    tests: [
      "Stationair kanaal check",
      "Remmenreiniger test",
      "Klepspeling meten"
    ],
    oplossingen: [
      "Carburateur reinigen",
      "Spruitstuk vervangen",
      "Kleppen stellen"
    ],
    blokinfo: "GY6: veel voorkomend bij warme motor"
  },

  "verliest_warm": {
    naam: "Scooter verliest vermogen warm",
    oorzaken: [
      "Bobine/CDI defect warm",
      "Klepspeling te klein",
      "Keerringen lekken warm"
    ],
    tests: [
      "Vonk warm checken",
      "Klepspeling meten",
      "Compressie warm"
    ],
    oplossingen: [
      "Bobine/CDI vervangen",
      "Kleppen stellen",
      "Keerringen vervangen"
    ],
    blokinfo: "GY6: bobine warm defect; 2T: keerringen lekken warm"
  },

  "onregelmatige_vonk": {
    naam: "Onregelmatig vonkbeeld",
    oorzaken: [
      "Pickup sensor",
      "Massa",
      "Vliegwiel magneten"
    ],
    tests: [
      "Pickup weerstand",
      "Massa meten",
      "Vliegwiel inspectie"
    ],
    oplossingen: [
      "Pickup vervangen",
      "Massa verbeteren",
      "Vliegwiel vervangen"
    ],
    blokinfo: "Tomos: vliegwiel magneten zwak"
  },

  "koppeling_laat": {
    naam: "Koppeling pakt laat",
    oorzaken: [
      "Versleten koppelingsveren",
      "Gladde platen"
    ],
    tests: [
      "Koppeling demonteren",
      "Veerspanning meten"
    ],
    oplossingen: [
      "Koppelingsveren/platen vervangen"
    ],
    blokinfo: "Tomos: veelvoorkomend bij oudere modellen"
  },

  "schokt_optrekken": {
    naam: "Scooter schokt bij optrekken",
    oorzaken: [
      "Rollen plat",
      "Koppeling vervuild"
    ],
    tests: [
      "Variateur inspectie",
      "Koppelingshuis checken"
    ],
    oplossingen: [
      "Rollen vervangen",
      "Koppeling reinigen"
    ],
    blokinfo: "GY6: veelvoorkomend bij goedkope rollen"
  },

  "hoge_toeren_geen_snelheid": {
    naam: "Hoge toeren maar geen snelheid",
    oorzaken: [
      "Snaar slipt",
      "Koppeling slipt"
    ],
    tests: [
      "Snaar inspectie",
      "Koppeling checken"
    ],
    oplossingen: [
      "Snaar/koppeling vervangen"
    ],
    blokinfo: "GY6: snaar rekt snel uit"
  },

  "benzine_lekt": {
    naam: "Benzine loopt uit carburateur",
    oorzaken: [
      "Vlotternaald defect",
      "Vlotterkamer pakking lek"
    ],
    tests: [
      "Vlotterhoogte checken",
      "Pakking inspecteren"
    ],
    oplossingen: [
      "Vlotternaald/pakking vervangen"
    ],
    blokinfo: "Universeel probleem bij oudere carburateurs"
  },

  "houdt_in_half_gas": {
    naam: "Scooter houdt in bij half gas",
    oorzaken: [
      "Te arm mengsel",
      "Sproeier te klein",
      "Membraan lekt"
    ],
    tests: [
      "Sproeiermaat checken",
      "Membraan inspectie"
    ],
    oplossingen: [
      "Sproeier vergroten",
      "Membraan vervangen"
    ],
    blokinfo: "Piaggio 2T: membraanplaatjes vaak oorzaak"
  },

  "geen_reactie_gas": {
    naam: "Geen reactie op gas",
    oorzaken: [
      "Gaskabel los",
      "Carburateur vacuüm",
      "Choke blijft hangen"
    ],
    tests: [
      "Gaskabel checken",
      "Vacuüm meten",
      "Choke inspecteren"
    ],
    oplossingen: [
      "Kabel herstellen",
      "Choke vervangen"
    ],
    blokinfo: "GY6: automatische choke vaak oorzaak"
  },

  "valt_uit_regen": {
    naam: "Scooter valt uit bij regen",
    oorzaken: [
      "Bougiedop nat",
      "Bobine nat",
      "Slechte massa"
    ],
    tests: [
      "Bougiedop controleren",
      "Bobine schoonmaken",
      "Massa checken"
    ],
    oplossingen: [
      "Bougiedop/bobine vervangen",
      "Massa verbeteren"
    ],
    blokinfo: "Tomos: open ontsteking gevoelig voor vocht"
  }

};

// ------------------------------
// 2. Variabelen voor de wizard
// ------------------------------
let huidigSymptoom = null;
let huidigeTestIndex = 0;
let userAnswers = [];


// ------------------------------
// 3. Symptomen laden in scherm 1
// ------------------------------
window.onload = () => {
    const grid = document.getElementById("symptomenGrid");

    Object.keys(diagnoseData).forEach(key => {
        const btn = document.createElement("div");
        btn.className = "symptoomBtn";
        btn.innerText = diagnoseData[key].naam;
        btn.onclick = () => startDiagnose(key);
        grid.appendChild(btn);
    });
};


// ------------------------------
// 4. Diagnose starten
// ------------------------------
function startDiagnose(key) {
    huidigSymptoom = key;
    huidigeTestIndex = 0;
    userAnswers = [];

    showScreen(2);
    loadTest();
}


// ------------------------------
// 5. Test tonen
// ------------------------------
function loadTest() {
    const data = diagnoseData[huidigSymptoom];

    document.getElementById("testTitle").innerText =
        `Stap ${huidigeTestIndex + 1} van ${data.tests.length}`;

    document.getElementById("testText").innerText =
        data.tests[huidigeTestIndex];
}


// ------------------------------
// 6. Test resultaat opslaan
// ------------------------------
function testResult(success) {
    const data = diagnoseData[huidigSymptoom];

    userAnswers.push({
        test: data.tests[huidigeTestIndex],
        success: success
    });

    huidigeTestIndex++;

    if (huidigeTestIndex >= data.tests.length) {
        berekenResultaat();
    } else {
        loadTest();
    }
}


// ------------------------------
// 7. Automatische diagnose berekening
// ------------------------------
function berekenResultaat() {
    const data = diagnoseData[huidigSymptoom];

    let scores = {};
    data.oorzaken.forEach(o => scores[o] = 0);

    userAnswers.forEach((ans) => {
        if (!ans.success) {
            data.oorzaken.forEach(o => scores[o]++);
        }
    });

    const sorted = Object.entries(scores)
        .sort((a, b) => b[1] - a[1]);

    const besteOorzaak = sorted[0][0];
    const oplossing = data.oplossingen[0];

    toonResultaat(besteOorzaak, oplossing, data.blokinfo);
}


// ------------------------------
// 8. Resultaat tonen
// ------------------------------
function toonResultaat(oorzaak, oplossing, blokinfo) {
    document.getElementById("oorzaakBox").innerHTML =
        `<b>Waarschijnlijke oorzaak:</b><br>${oorzaak}`;

    document.getElementById("oplossingBox").innerHTML =
        `<b>Oplossing:</b><br>${oplossing}`;

    document.getElementById("blokinfoBox").innerHTML =
        `<b>Blok-specifieke info:</b><br>${blokinfo}`;

    showScreen(3);
}


// ------------------------------
// 9. Scherm wisselen
// ------------------------------
function showScreen(n) {
    document.getElementById("screen1").classList.remove("active");
    document.getElementById("screen2").classList.remove("active");
    document.getElementById("screen3").classList.remove("active");

    document.getElementById("screen" + n).classList.add("active");
}
