(function() {

  var DEFAULT_CUBE_DESIGN = {
    edgeWidth: 1,
    edgeHeight: 1,
    edgeTopRadius: 0.1,
    edgeBottomRadius: 0.1,
    cornerSize: 1,
    cornerOuterRadius: 0.1,
    cornerSideRadius: 0.1,
    cornerInnerRadius: 0.1,
    centerSize: 1,
    centerRadius: 0.1
  };

  var DESIGN_ATTRIBUTES = Object.keys(DEFAULT_CUBE_DESIGN);

  function CubeDesign(attrs) {
    for (var i = 0, len = DESIGN_ATTRIBUTES.length; i < len; ++i) {
      var attr = DESIGN_ATTRIBUTES[i];
      this[attr] = (attrs[attr] || DEFAULT_CUBE_DESIGN[attr]);
    }
  }

})();
