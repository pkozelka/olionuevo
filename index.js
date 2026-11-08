// Texty stránky jsou soustředěné tady, aby se daly jednoduše upravovat.
const content = {
  heroEyebrow: "Z Greve in Chianti",
  heroTitle: "Náš oblíbený\nolej z Toskánska.",
  heroLead: "Každý rok si z Toskánska přivezeme olej pro sebe a rodinu. Začali jsme vozit i pro kamarády — jestli chceš taky, napiš mi.",
  heroPhotoCaption: "Sklizeň v olivovém háji · Chianti",
  heroPhotoAlt: "Sběrači sklízejí olivy pod stromy na svahu v Chianti.",
  storyKicker: "NÁŠ PŘÍBĚH",
  storyTitle: "Do Itálie se rádi vracíme. Pro olej taky.",
  storyBody: "<p>Každý rok jezdíme do Itálie na dovolenou. Máme rádi moře, ale nejvíc nás to táhne do vnitrozemí — za dobrým jídlem, vínem, grappou a olivovým olejem.</p><p>Časem jsme poznali lidi, kteří olej vyrábějí. Nejdřív jsme si ho začali vozit domů pro sebe a rodinu, pak i pro kamarády. Jezdíme na konci sklizně, takže olej bývá čerstvý. Nám chutná víc než ten, který běžně kupujeme doma.</p>",
  location: "Greve in Chianti · Toskánsko",
  tastingTitle: "Čerstvý olej z konce sklizně.",
  tastingBody: "Pro olej jezdíme do oblasti Chianti na konci sklizně. Je tedy čerstvý a nám chutná víc než oleje, které běžně koupíme doma.",
  price: "22 EUR / litr",
  priceDetails: "Ročník 2026 · olej, balení i doprava",
  contactTitle: "Chceš taky trochu?",
  contactIntro: "Napiš mi přibližné množství. Většinou vozíme 3 nebo 5 litrů, ale menší množství můžu přelít — klidně do lahviček, které už máš doma.",
  contactName: "Petr Kozelka",
  contactEmail: "pkozelka@gmail.com",
  contactPhone: "+420 603 448 262",
  orderNote: "Cenu další sklizně budu znát až od producenta. Pak ji napíšu do naší WhatsApp skupiny. Nám doma 10 litrů většinou nevydrží — jsme čtyři.",
  recipesIntro: "Pár jednoduchých italských jídel, u kterých je dobrý olej opravdu znát. U salátů a chleba ho přidáváme až na konec; do teplých jídel trochu při vaření a ještě trochu na talíř.",
  recipes: [
    {
      id: "fettunta", title: "Fettunta", subtitle: "Toskánský chléb s olejem", serves: "4 krajíce",
      image: {
        src: "assets/recipes/fettunta-5216927761.jpg",
        alt: "Plátky toskánského chleba s česnekem a čerstvým olivovým olejem.",
        title: "Fettunta with new olive oil extra virgin — Gabriele Cantini / Flickr (CC BY 2.0)",
        credit: "Fettunta with new olive oil extra virgin — Gabriele Cantini",
        authorUrl: "https://www.flickr.com/photos/letorri/",
        photoUrl: "https://www.flickr.com/photos/letorri/5216927761/",
        licenseUrl: "https://creativecommons.org/licenses/by/2.0/"
      },
      description: "Teplý opečený chléb, česnek, sůl a čerstvý olivový olej. Jednoduchá svačina, na které je olej nejvíc znát.",
      ingredients: ["4 silnější krajíce venkovského chleba", "1 stroužek česneku", "Extra panenský olivový olej", "Hrubší sůl"],
      steps: ["Chléb opeč nasucho na grilu nebo pánvi, aby byl na povrchu křupavý a uvnitř stále měkký.", "Ještě teplé krajíce zlehka potřete rozkrojeným stroužkem česneku.", "Bohatě zakápni olejem, osol a jez hned."],
      oilNote: "Tady je olej hlavní surovinou. Začni s menším množstvím česneku a olejem nešetři."
    },
    {
      id: "caprese", title: "Caprese", subtitle: "Rajčata, mozzarella a bazalka", serves: "2–3 porce",
      image: {
        src: "assets/recipes/caprese-2491985875.jpg",
        alt: "Salát Caprese z rajčat, mozzarelly a bazalky.",
        title: "Insalata Caprese — WordRidden / Flickr (CC BY 2.0)",
        credit: "Insalata Caprese — WordRidden",
        authorUrl: "https://www.flickr.com/photos/wordridden/",
        photoUrl: "https://www.flickr.com/photos/wordridden/2491985875/",
        licenseUrl: "https://creativecommons.org/licenses/by/2.0/"
      },
      description: "Pár dobrých surovin, které spolu fungují nejlíp, když mají pokojovou teplotu.",
      ingredients: ["3 zralá rajčata", "250 g mozzarelly, ideálně buvolí", "Hrst čerstvé bazalky", "2–3 lžíce extra panenského olivového oleje", "Sůl a čerstvě mletý pepř"],
      steps: ["Rajčata a mozzarellu nakrájej na plátky.", "Střídej je na talíři s lístky bazalky.", "Osol, opepři a těsně před podáváním přelij olejem.", "Přines na stůl i chleba — dobře se jím vytírá šťáva s olejem."],
      oilNote: "Přidej ho syrový až nakonec. Rajčatová šťáva a olej se na talíři spojí v tu nejlepší zálivku."
    },
    {
      id: "pappa-al-pomodoro", title: "Pappa al pomodoro", subtitle: "Hustá rajčatová polévka s chlebem", serves: "4 porce",
      image: {
        src: "assets/recipes/pappa-al-pomodoro-2830796123.jpg",
        alt: "Pappa al pomodoro, hustá toskánská rajčatová polévka s chlebem.",
        title: "pappa al pomodoro — fugzu / Flickr (CC BY 2.0)",
        credit: "pappa al pomodoro — fugzu",
        authorUrl: "https://www.flickr.com/photos/70253321@N00/",
        photoUrl: "https://www.flickr.com/photos/70253321@N00/2830796123/",
        licenseUrl: "https://creativecommons.org/licenses/by/2.0/"
      },
      description: "Toskánská polévka, která promění zralá rajčata a starší chléb v syté jídlo.",
      ingredients: ["700 g zralých nebo konzervovaných rajčat", "250 g den starého bílého chleba", "1 menší cibule", "2 stroužky česneku", "700 ml zeleninového vývaru nebo vody", "Bazalka, sůl a pepř", "3 lžíce olivového oleje na vaření a další na dokončení"],
      steps: ["Cibuli nakrájej najemno a na dvou lžících oleje pomalu zahřívej, dokud nezměkne. Přidej nasekaný česnek.", "Přidej rajčata, osol a vař asi 10 minut.", "Přilij vývar a přidej natrhaný chléb. Vař dalších 15–20 minut a občas promíchej.", "Vmíchej bazalku, dochuť a nech chvíli odpočinout. Podávej s čerstvým olejem na každé porci."],
      oilNote: "Trochu oleje použij při vaření, ale nejvíc chuti dodá závěrečné zakápnutí na talíři."
    },
    {
      id: "ribollita", title: "Ribollita", subtitle: "Toskánská fazolová polévka", serves: "4 porce",
      image: {
        src: "assets/recipes/ribollita-15149543769.jpg",
        alt: "Miska ribollity s fazolemi, rajčaty, zeleninou a chlebem.",
        title: "Making ribollita — Joy / Flickr (CC BY 2.0)",
        credit: "Making ribollita — Joy",
        authorUrl: "https://www.flickr.com/photos/joyosity/",
        photoUrl: "https://www.flickr.com/photos/joyosity/15149543769/",
        licenseUrl: "https://creativecommons.org/licenses/by/2.0/"
      },
      description: "Hustá polévka z fazolí, zeleniny a chleba. Druhý den bývá ještě lepší.",
      ingredients: ["400 g vařených bílých fazolí", "1 cibule, 1 mrkev a 2 řapíky celeru", "300 g kapusty nebo kadeřávku", "400 g krájených rajčat", "700 ml zeleninového vývaru nebo vody", "200 g den starého chleba", "3 lžíce olivového oleje a další na dokončení", "Sůl a pepř"],
      steps: ["Cibuli, mrkev a celer nakrájej nadrobno. V hrnci je na oleji pomalu opékej asi 8 minut.", "Přidej kapustu, rajčata a vývar. Osol, opepři a vař asi 20 minut.", "Vmíchej fazole; třetinu můžeš rozmačkat, aby polévku zahustily. Vař dalších 10 minut.", "Přidej natrhaný chléb, krátce povař a nech odpočinout. Na talíři přidej syrový olej."],
      oilNote: "Závěrečná dávka syrového oleje zvýrazní zeleninu i fazole. Polévka má být opravdu hustá."
    },
    {
      id: "panzanella", title: "Panzanella", subtitle: "Salát z chleba a rajčat", serves: "4 porce",
      image: {
        src: "assets/recipes/panzanella-4783195124.jpg",
        alt: "Barevný toskánský salát z rajčat, paprik, cibule a chleba.",
        title: "Proper Panzanella Salad, Jamies Italian, Leeds — thefoodplace.co.uk / Flickr (CC BY 2.0)",
        credit: "Proper Panzanella Salad — thefoodplace.co.uk",
        authorUrl: "https://www.thefoodplace.co.uk/",
        photoUrl: "https://www.flickr.com/photos/thefoodplace/4783195124/",
        licenseUrl: "https://creativecommons.org/licenses/by/2.0/"
      },
      description: "Letní salát, ve kterém chléb nasaje rajčatovou šťávu, olej a trochu vinného octa.",
      ingredients: ["300 g den starého venkovského chleba", "500 g zralých rajčat", "1 menší červená cibule", "1 okurka", "Hrst bazalky", "4 lžíce extra panenského olivového oleje", "1–2 lžíce vinného octa, sůl a pepř"],
      steps: ["Chléb natrhej na sousta. Je-li ještě měkký, krátce ho opeč.", "Cibuli nakrájej na tenké plátky, rajčata a okurku na větší kousky.", "V míse promíchej chléb, zeleninu, bazalku, olej a lžíci octa. Osol a opepři.", "Nech 15–20 minut odležet. Ochutnej a případně přidej trochu octa nebo oleje."],
      oilNote: "Olej je v zálivce i v chlebu. S octem začni opatrně, aby nepřekryl rajčata."
    },
    {
      id: "aglio-olio", title: "Spaghetti aglio, olio e peperoncino", subtitle: "Špagety s česnekem a chilli", serves: "2 porce",
      image: {
        src: "assets/recipes/spaghetti-5512066970.jpg",
        alt: "Špagety s česnekem, olivovým olejem, sušenými rajčaty a bylinkami.",
        title: "Spaghetti aglio, olio e pomodoro seco — Lablascovegmenu / Flickr (CC BY 2.0)",
        credit: "Spaghetti aglio, olio e pomodoro seco — Lablascovegmenu",
        authorUrl: "https://www.flickr.com/photos/lablasco/",
        photoUrl: "https://www.flickr.com/photos/lablasco/5512066970/",
        licenseUrl: "https://creativecommons.org/licenses/by/2.0/"
      },
      description: "Rychlé těstoviny s jednoduchou omáčkou z oleje. Česnek nech jen lehce zezlátnout.",
      ingredients: ["200 g špaget", "3 stroužky česneku", "1 sušená chilli paprička nebo špetka chilli vloček", "5 lžic extra panenského olivového oleje", "Hrst nasekané petrželky, podle chuti", "Sůl"],
      steps: ["Špagety uvař v osolené vodě. Před slitím odlož hrnek vody z vaření.", "Česnek nakrájej na plátky a s chilli pomalu zahřívej v oleji. Jakmile zavoní a začne lehce zlátnout, stáhni pánev z ohně.", "Přidej špagety a několik lžic vody z vaření. Promíchej, aby vznikla lehká omáčka; podle potřeby přilij další vodu.", "Vmíchej petrželku a podávej. Na závěr můžeš přidat ještě trochu čerstvého oleje."],
      oilNote: "Zahřívej olej pozvolna a česnek nenech zhnědnout. Trocha syrového oleje navrch osvěží chuť."
    }
  ],
  harvestPhotos: [
    { src: "assets/harvest/olive-grove.jpg", alt: "Olivovníky na svahu nad toskánskou krajinou, pod stromy jsou rozprostřené sklizňové sítě.", caption: "Olivový háj v Chianti" },
    { src: "assets/harvest/harvest-by-hand.jpg", alt: "Sběrač sklízí olivy dlouhým nástrojem z větví olivovníku.", caption: "Sklizeň ručně, strom po stromu" },
    { src: "assets/harvest/olives-at-mill.jpg", alt: "Čerstvě sklizené olivy v přepravní bedně v lisovně.", caption: "Čerstvá úroda míří do lisovny" }
  ]
};

const heroImage = document.querySelector("[data-hero-image]");
if (heroImage) heroImage.alt = content.heroPhotoAlt;

document.querySelectorAll("[data-content]").forEach((element) => {
  const key = element.dataset.content;
  if (!(key in content)) return;
  if (key === "storyBody") element.innerHTML = content[key];
  else element.textContent = content[key];
});

document.querySelectorAll("[data-contact-email]").forEach((link) => {
  link.href = `mailto:${content.contactEmail}`;
});

document.querySelectorAll("[data-contact-whatsapp]").forEach((link) => {
  link.href = `https://wa.me/${content.contactPhone.replace(/\D/g, "")}`;
});

const gallery = document.querySelector("[data-harvest-gallery]");
if (gallery) {
  gallery.innerHTML = content.harvestPhotos.map((photo) => `
    <figure class="harvest-photo">
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
      <figcaption>${photo.caption}</figcaption>
    </figure>
  `).join("");
}

const recipeIndex = document.querySelector("[data-recipe-index]");
const recipeList = document.querySelector("[data-recipe-list]");
if (recipeIndex && recipeList) {
  recipeIndex.innerHTML = content.recipes.map((recipe, index) => `
    <a href="#${recipe.id}"><span>${String(index + 1).padStart(2, "0")}</span>${recipe.title}</a>
  `).join("");
  recipeList.innerHTML = content.recipes.map((recipe, index) => `
    <article class="recipe-card${recipe.image ? " has-image" : ""}" id="${recipe.id}">
      ${recipe.image ? `<figure class="recipe-photo"><img src="${recipe.image.src}" alt="${recipe.image.alt}" title="${recipe.image.title}" loading="lazy"><figcaption><a href="${recipe.image.authorUrl}" target="_blank" rel="noopener noreferrer">${recipe.image.credit}</a> · <a href="${recipe.image.photoUrl}" target="_blank" rel="noopener noreferrer">Flickr photo</a> · <a href="${recipe.image.licenseUrl}" target="_blank" rel="noopener noreferrer">CC BY 2.0</a></figcaption></figure>` : ""}
      <div class="recipe-copy">
        <p class="recipe-number">${String(index + 1).padStart(2, "0")} · ${recipe.serves}</p>
        <h3>${recipe.title}</h3>
        <p class="recipe-subtitle">${recipe.subtitle}</p>
        <p class="recipe-description">${recipe.description}</p>
        <details class="recipe-details">
          <summary>Ingredience a postup</summary>
          <div class="recipe-detail-grid">
            <div><h4>Co budeš potřebovat</h4><ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}</ul></div>
            <div><h4>Jak na to</h4><ol>${recipe.steps.map(step => `<li>${step}</li>`).join("")}</ol></div>
          </div>
        </details>
        <p class="recipe-oil-note"><strong>Olej v tomhle jídle</strong> ${recipe.oilNote}</p>
      </div>
    </article>
  `).join("");
}
