const MotorCortex = require("@kissmybutton/motorcortex");
const Player = require("@kissmybutton/motorcortex-player/");
const BackgroundsDefinition = require("../dist/motorcortex-backgrounds.umd");
const Plugin = MotorCortex.loadPlugin(BackgroundsDefinition);

const css = `
.container {
  overflow: hidden;
  width:512px;
  height:288px;
}
.wrapper{
  width:1728px;
  height:872px;
  display:flex;
  font-family: 'Poppins', sans-serif;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
}
.flex{
  display: flex;
  justify-content: center;
  background-color: #bfbfbf;
  height: 100%;
  width: 100%;
}
  
`;

const html = ` 
  <div class="flex">
    <div class="wrapper">
      <div class="container container1"></div>
      <div class="container container2"></div>
      <div class="container container3"></div>
      <div class="container container4"></div>
      <div class="container container5"></div>
      <div class="container container6"></div>

    </div>
  </div>
`;

const host = document.getElementById("clip");

const containerParams = {
  width: "100%",
  height: "100%"
};

const clip = new MotorCortex.Clip({
  css,
  html,
  host,
  containerParams,
  id: "root",
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
    }
  ]
});

const overlayColor = ["#BB00FF91", "#00FFE791", "#FFD70091"];

const BgOpener = new Plugin.BgOpener(
  {
    width: 512,
    height: 288,
    bgUrl:
      "https://kissmybutton.github.io/motorcortex-slides/demo/kissmybutonbg.jpg",
    timing: 0.3,
    easing: "easeInQuad",
    exitStart: 2000
  },
  {
    selector: ".container1"
  }
);
const TwoSidesReveal = new Plugin.TwoSidesReveal(
  {
    width: 512,
    height: 288,
    bgUrl:
      "https://kissmybutton.github.io/motorcortex-slides/demo/kissmybutonbg.jpg",
    timing: 1,
    easing: "easeInQuad"
  },
  {
    selector: ".container2"
  }
);

const RowReveal = new Plugin.RowReveal(
  {
    width: 512,
    height: 288,
    bgUrl:
      "https://kissmybutton.github.io/motorcortex-slides/demo/kissmybutonbg.jpg",
    timing: 1,
    easing: "easeOutQuart",
    exitStart: 2000,
    bgOut: true
  },
  {
    selector: ".container3"
  }
);

const ColumnReveal = new Plugin.ColumnReveal(
  {
    width: 512,
    height: 288,
    bgUrl:
      "https://kissmybutton.github.io/motorcortex-slides/demo/kissmybutonbg.jpg",
    timing: 1,
    easing: "easeOutQuart",
    exitStart: 2000,
    bgOut: true
  },
  {
    selector: ".container4"
  }
);

const ThreeSidesReveal = new Plugin.ThreeSidesReveal(
  {
    width: 512,
    height: 288,
    bgUrl: "https://kissmybutton.github.io/motorcortex-slides/demo/bg3.jpg",
    timing: 1,
    overlayColor: "#ff0000",
    grid: true,
    gridTiming: 1,
    gridColor: "#000",
    columns: 6,
    rows: 4
  },
  {
    selector: ".container5"
  }
);

const Grid = new Plugin.Grid(
  {
    width: 512,
    height: 288,
    color: "#000",
    columns: 6,
    rows: 4,
    timing: 1
  },
  {
    selector: ".container6"
  }
);

clip.addIncident(BgOpener, 0);
clip.addIncident(TwoSidesReveal, 0);
clip.addIncident(RowReveal, 0);
clip.addIncident(ColumnReveal, 0);
clip.addIncident(ThreeSidesReveal, 0);
clip.addIncident(Grid, 0);

new Player({ clip, timeFormat: "ms" });
