(function() {

  // An Arc represents a quarter of an ellipse.
  //
  // If the width and the height of an Arc are equal, the arc represents a
  // quarter of a circle.
  function Arc(width, height) {
    this.width = width;
    this.height = height;
  }

  // A RoundedRectSticker is a rectangular sticker with arcs at the corners.
  //
  // Imagine the face of a cube:
  // -------------------------
  // |  |  |  |  |  |  |  |  |
  // -------------------------
  // |  |  |  |  |  |  |  |  |
  // -------------------------
  // |  |  |  |  |  |  |  |  |
  // -------------------------
  // |  |  |  |  |  |  |  |  |
  // -------------------------
  // |  |  |  |  |  |  |  |  |
  // -------------------------
  // |  |  |  |  |  |  |  |  |
  // -------------------------
  // |  |  |  |  |  |  |  |  |
  // -------------------------
  //
  // This face has four corners, 24 edges and 36 centers. On certain cube
  // brands, all types of stickers are rounded differently.  On others, no
  // stickers are rounded and they are all square.  In order to make a virtual
  // puzzle reflect all of these brands, it is necessary to define various ways
  // of customizing a sticker.
  //
  // For a sticker, there are four corners and thus four potentially different
  // arcs to consider.  These arcs are represented as an array of four Arc
  // objects which correspond to the top left, top right, bottom right, and
  // bottom left corners respectively.
  //
  // In addition to the corner arcs, a sticker has a width and a height.  These
  // are floating point values.  For a typical sticker, it is suggested that the
  // longer side of the sticker be 1 unit long.
  function RoundedRectSticker(arcs, width, height) {
    this.arcs = arcs;
    this.width = width;
    this.height = height;
  }

})();
