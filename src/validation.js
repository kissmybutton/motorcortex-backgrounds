export const BgOpenerValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl: { optional: false, type: "string" },
  easing: { optional: false, type: "string" },
  exitStart: { optional: false, type: "number" }
};

export const TwoSidesRevealValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl: { optional: false, type: "string" },
  easing: { optional: false, type: "string" }
};

export const RowRevealValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl: { optional: false, type: "string" },
  easing: { optional: false, type: "string" },
  exitStart: { optional: false, type: "number" },
  bgOut: { optional: false, type: "boolean" }
};

export const ColumnRevealValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl: { optional: false, type: "string" },
  easing: { optional: false, type: "string" },
  exitStart: { optional: false, type: "number" },
  bgOut: { optional: false, type: "boolean" }
};

export const GridValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  color: { optional: false, type: "color" },
  columns: { optional: false, type: "number" },
  rows: { optional: false, type: "number" }
};

export const ThreeSidesRevealValidation = {
  width: { optional: false, type: "number" },
  height: { optional: false, type: "number" },
  bgUrl: { optional: false, type: "string" },
  overlayColor: { optional: false, type: "color" },
  grid: { optional: false, type: "boolean" },
  gridDuration: { optional: true, type: "number" },
  gridColor: { optional: false, type: "color" },
  columns: { optional: false, type: "number" },
  rows: { optional: false, type: "number" }
};
