const BgOpener = require("./BgOpener");
const TwoSidesReveal = require("./TwoSidesReveal")
const ColumnReveal = require("./ColumnReveal")
const RowReveal =require("./RowReveal")
const ThreeSidesReveal = require("./ThreeSidesReveal")
const Grid =require("./Grid")
const {
  BgOpenerValidation,
  TwoSidesRevealValidation,
  RowRevealValidation,
  ColumnRevealValidation,
  GridValidation,
  ThreeSidesRevealValidation
} = require("./validation");

module.exports = {
  npm_name: "@kissmybutton/motorcortex-backgrounds",
  incidents: [
    {
      exportable: BgOpener,
      name: "BgOpener",
      attributesValidationRules: { ...BgOpenerValidation }
    },
    {
      exportable: TwoSidesReveal,
      name: "TwoSidesReveal",
      attributesValidationRules: { ...TwoSidesRevealValidation }
    },
    {
      exportable: ColumnReveal,
      name: "ColumnReveal",
      attributesValidationRules: { ...ColumnRevealValidation }
    },
    {
      exportable: RowReveal,
      name: "RowReveal",
      attributesValidationRules: { ...RowRevealValidation }
    },
    {
      exportable: ThreeSidesReveal,
      name: "ThreeSidesReveal",
      attributesValidationRules: { ...ThreeSidesRevealValidation }
    },
    {
      exportable: Grid,
      name: "Grid",
      attributesValidationRules: { ...GridValidation }
    },
  ]
};
