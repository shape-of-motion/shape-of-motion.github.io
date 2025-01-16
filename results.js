const results = [
  [
    "Coffee Machine",
    [
      "https://shape-of-motion.github.io/build/",
      "?playbackPath=https://shape-of-motion.github.io/som_viser/sriracha-tree.viser",
      "&synchronizedVideoOverlay=/splash-results/feb28_coffeemachine.mp4",
      "&synchronizedVideoTimeOffset=-0.05",
      "&initialCameraPosition=0.681,-3.638,-0.231",
      "&initialCameraLookAt=0.055,1.067,-0.045",
      "&initialCameraUp=-0.000,-0.120,0.993",
    ],
    "./data/thumbnails/sriracha-tree.png",
  ],
  [
    "EgoExo4D IIITH Cooking 120",
    [
      "https://shape-of-motion.github.io/build/",
      "?playbackPath=https://shape-of-motion.github.io/som_viser/balloon1.viser",
      "&synchronizedVideoOverlay=/splash-results/iiith_cooking_120_2.mp4",
      "&initialCameraPosition=-0.070,-2.577,-0.124",
      "&initialCameraLookAt=0.000,0.000,0.052",
      "&initialCameraUp=0.000,0.000,1.000",
    ],
    "./data/thumbnails/baloon1.png",
  ],
  [
    "Refrigerator",
    [
      "/viser-embed/",
      "?playbackPath=/splash-results/feb13_interactions_4.viser",
      "&synchronizedVideoOverlay=/splash-results/feb13_interactions_4.mp4",
      "&initialCameraPosition=0.30,2.13,0.35",
      "&initialCameraLookAt=-0.60,0.73,-0.52",
      "&baseSpeed=1.5",
      "&darkMode",
    ],
    "./data/thumbnails/baby.png",
  ],
  [
    "Copy Machine",
    [
      "/viser-embed/",
      "?playbackPath=/splash-results/feb28_copymachine.viser",
      "&synchronizedVideoOverlay=/splash-results/feb28_copymachine.mp4",
      "&initialCameraPosition=-1.08,-1.49,1.18",
      "&initialCameraLookAt=-1.30,-2.18,-0.46",
      "&baseSpeed=1.5",
      "&darkMode",
    ],
    "./data/thumbnails/balloon2.png",
  ],
  [
    "Coke",
    [
      "/viser-embed/",
      "?playbackPath=/splash-results/coke.viser",
      "&synchronizedVideoOverlay=/splash-results/coke.mp4",
      "&initialCameraPosition=-0.41,0.26,1.31",
      "&initialCameraLookAt=0.84,-1.04,-0.73",
      "&baseSpeed=1.5",
      "&darkMode",
    ],
    "./data/thumbnails/handwavy.png",
  ],
  [
    "EgoExo4D Georgia Tech Bike",
    [
      "/viser-embed/",
      "?playbackPath=/splash-results/georgiatech_bike_14_6.viser",
      "&synchronizedVideoOverlay=/splash-results/georgiatech_bike_14_6.mp4",
      "&initialCameraPosition=-0.40,-1.14,0.98",
      "&initialCameraLookAt=-1.00,-0.08,-0.48",
      "&baseSpeed=2",
      "&darkMode",
    ],
    "./data/thumbnails/spin.png",
  ],
  [
    "EgoExo4D Georgia Tech Covid",
    [
      "/viser-embed/",
      "?playbackPath=/splash-results/georgiatech_covid_06_4.viser",
      "&synchronizedVideoOverlay=/splash-results/georgiatech_covid_06_4.mp4",
      "&initialCameraPosition=4.22,6.50,6.77",
      "&initialCameraLookAt=4.15,5.34,6.03",
      "&baseSpeed=2",
      "&darkMode",
    ],
    "./data/thumbnails/seal.png",
  ],
  [
    "Jog",
    [
      "/viser-embed/",
      "?playbackPath=/splash-results/feb28_jog.viser",
      "&synchronizedVideoOverlay=/splash-results/feb28_jog.mp4",
      "&initialCameraPosition=1.51,6.92,-0.24",
      "&initialCameraLookAt=1.10,6.97,-0.23",
      "&baseSpeed=1.5",
      "&darkMode",
    ],
    "./data/thumbnails/cat-piano.png",
  ],
  [
    "EgoExo4D IIITH Cooking 64",
    [
      "/viser-embed/",
      "?playbackPath=/splash-results/iiith_cooking_64_2.viser",
      "&synchronizedVideoOverlay=/splash-results/iiith_cooking_64_2.mp4",
      "&initialCameraPosition=0.06,-1.12,0.64",
      "&initialCameraLookAt=-0.70,-0.43,-0.41",
      "&baseSpeed=2",
      "&darkMode",
    ],
    "./data/thumbnails/dog-grass.png",
  ],
  [
    "EgoExo4D UPenn Piano",
    [
      "/viser-embed/",
      "?playbackPath=/splash-results/upenn_0710_Piano_1_3.viser",
      "&synchronizedVideoOverlay=/splash-results/upenn_0710_Piano_1_3.mp4",
      "&initialCameraPosition=2.53,-0.42,1.27",
      "&initialCameraLookAt=0.12,-0.55,-0.58",
      "&baseSpeed=2",
      "&darkMode",
    ],
    "./data/thumbnails/mochi-high-five.png",
  ],
];

function initializeResultSelector(resultsElement) {
  const selectorElement = resultsElement.querySelector(".results-selector");
  const resultsThumbnails = selectorElement.querySelector(
    ".results-thumbnails",
  );
  const prevButton = selectorElement.querySelector(".results-prev");
  const nextButton = selectorElement.querySelector(".results-next");
  let currentIndex = 0;

  function createIframe(src) {
    const iframe = document.createElement("iframe");
    console.log("Creating iframe with src", src);
    iframe.src = src;
    iframe.style.backgroundColor = "white";
    return iframe;
  }

  function showIframe(src) {
    const wrapper = resultsElement.querySelector(".iframe-wrapper");
    wrapper.innerHTML = "";
    const iframe = createIframe(Array.isArray(src) ? src.join("") : src);
    wrapper.background = "white";
    wrapper.appendChild(iframe);
  }

  function updateSelection(index) {
    currentIndex = index;
    resultsThumbnails
      .querySelectorAll("a")
      .forEach((a, i) =>
        a.setAttribute("data-selected", i === index ? "true" : "false"),
      );
    showIframe(results[index][1]);
    const selectedThumbnail = resultsThumbnails.children[index];

    // Scroll the selected thumbnail into view
    const thumbnailsContainer = resultsThumbnails;
    const scrollLeft =
      selectedThumbnail.offsetLeft -
      (thumbnailsContainer.clientWidth - selectedThumbnail.clientWidth) / 2;
    thumbnailsContainer.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });

    // Update URL with the selected result
    const resultName = results[index][0].toLowerCase().replace(/\s+/g, "-");
    const currentPath = window.location.pathname;
    const newUrl = `${currentPath}?result=${resultName}`;
    history.pushState(null, "", newUrl);
  }

  results.forEach(([label, src, thumbnail], index) => {
    const link = document.createElement("a");
    link.href = "#";
    link.setAttribute("data-selected", index === 0 ? "true" : "false");
    link.addEventListener("click", (e) => {
      e.preventDefault();
      updateSelection(index);
    });

    const img = document.createElement("img");
    img.src = thumbnail;
    img.alt =
      "Thumbnail that can be clicked to show a result of our method: " + label;
    img.title = label;

    link.appendChild(img);
    resultsThumbnails.appendChild(link);
  });

  prevButton.addEventListener("click", () => {
    updateSelection((currentIndex - 1 + results.length) % results.length);
  });

  nextButton.addEventListener("click", () => {
    updateSelection((currentIndex + 1) % results.length);
  });

  // Check URL for initial result selection
  const urlParams = new URLSearchParams(window.location.search);
  const initialResult = urlParams.get("result");
  if (initialResult) {
    const index = results.findIndex(
      (result) =>
        result[0].toLowerCase().replace(/\s+/g, "-") === initialResult,
    );
    if (index !== -1) {
      updateSelection(index);
    } else {
      showIframe(results[0][1]);
    }
  } else {
    showIframe(results[0][1]);
  }
}

// Initialize all result on the page
document.querySelectorAll(".results").forEach(initializeResultSelector);
