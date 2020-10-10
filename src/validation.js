exports.BgOpenerValidation = {
  width:{ optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl:
  { optional: false, type: "string" },
  timing:{ optional: false, type: "number" },
  easing:{ optional: false, type: "string" },
  exitStart:{ optional: false, type: "number" }
};

exports.TwoSidesRevealValidation = {
  width:{ optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl:{ optional: false, type: "string" },
  timing:{ optional: false, type: "number" },
  easing:{ optional: false, type: "string" },
}

exports.RowRevealValidation = {
  width:{ optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl:{ optional: false, type: "string" },
  timing:{ optional: false, type: "number" }, 
  easing:{ optional: false, type: "string" },
  exitStart:{ optional: false, type: "number" },
  bgOut:{optional: false, type: "boolean" }
}

exports.ColumnRevealValidation = {
  width:{ optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl:{ optional: false, type: "string" },
  timing:{ optional: false, type: "number" }, 
  easing:{ optional: false, type: "string" },
  exitStart:{ optional: false, type: "number" },
  bgOut:{optional: false, type: "boolean" }
}


exports.GridValidation = {
  width:{ optional: false, type: "number" },
  height: { optional: false, type: "number" },
  color: { optional: false, type: "color" },
  columns: { optional: false, type: "number" },
  rows : { optional: false, type: "number" },
  timing:{ optional: false, type: "number" },
}

exports.ThreeSidesRevealValidation ={
  width:{ optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl:{ optional: false, type: "string" },
  timing:{ optional: false, type: "number" }, 
  overlayColor: { optional: false, type: "color" },
  grid: {optional: false, type: "boolean" },
  gridTiming:{ optional: false, type: "number" }, 
  gridColor: { optional: false, type: "color" },
  columns: { optional: false, type: "number" }, 
  rows : { optional: false, type: "number" }, 
}