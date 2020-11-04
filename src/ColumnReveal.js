const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class ColumnReveal extends MotorCortex.API.Clip {
  get font() {
    return [
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,800;1,700;1,800;1,900&display=swap`
      }
    ];
  }

  get html() {
    return `
    <div class="wrapper">
      <div class="bg-wrapper">
        <div class="bg bg-0"></div>
      </div>
      <div class="bg-wrapper">
        <div class="bg bg-1"></div>
      </div>
      <div class="bg-wrapper">
        <div class="bg bg-2"></div>
      </div>
      <div class="bg-wrapper">
        <div class="bg bg-3"></div>
      </div>
	  </div>
    `;
  }

  get css() {
    return `
    .wrapper{
      width: ${this.attrs.width}px;
      height: ${this.attrs.height}px;
      display:flex;
      font-family: 'Poppins', sans-serif;
      
    }
    .bg-wrapper{
      width: ${this.attrs.width / 4}px;
      height: ${this.attrs.height}px;
      display:flex;
      font-family: 'Poppins', sans-serif;
      position: relative;
      overflow: hidden;
      top: -${this.attrs.height}px;
    }
    .bg{
      width: ${this.attrs.width}px;
      height: ${this.attrs.height}px;
      background:url(${this.attrs.bgUrl}) no-repeat;
      background-size: cover;
      position: absolute;
    }
    .bg-0{
      left:0
    }
    .bg-1{
      left:-${this.attrs.width - (this.attrs.width / 4) * 3}px;
    }
    .bg-2{
      left:-${this.attrs.width - (this.attrs.width / 4) * 2}px;
    }
    .bg-3{
      left:-${this.attrs.width - this.attrs.width / 4}px;
    }
      
  `;
  }

  buildTree() {
    const bgPositionOneIn = new Anime.Anime(
      {
        animatedAttrs: {
          top: `${0}px`
        }
      },
      {
        duration: 1000 * this.attrs.timing,
        selector: ".bg-wrapper",
        easing: this.attrs.easing,
        delay: `@expression(randomInt(0,${Math.floor(
          500 * this.attrs.timing
        )}))`
      }
    );
    this.addIncident(bgPositionOneIn, 0);
    if (this.attrs.bgOut === true) {
      const bgPositionOneOut = new Anime.Anime(
        {
          animatedAttrs: {
            top: `${this.attrs.height}px`
          }
        },
        {
          duration: 1000 * this.attrs.timing,
          selector: ".bg-wrapper",
          easing: this.attrs.easing,
          delay: `@expression(randomInt(0,${Math.floor(
            500 * this.attrs.timing
          )}))`
        }
      );
      this.addIncident(bgPositionOneOut, this.attrs.exitStart);
    }
  }
}

module.exports = ColumnReveal;
