var BemMixin = {
  getArray: function(modifiers) {

    // return empty array if no modifiers defined
    if (_.isUndefined(modifiers)) {
      return [];
    };

    // if is string then convert to array
    if (typeof modifiers === "string") {
      modifiers = modifiers.split(" ");
    };

    return modifiers;
  },
  getClassName: function(block) {
    var className = block;

    var modifierArray = this.getArray(this.props.modifiers);
    modifierArray.forEach((modifier) => {
      className = className + " " + block + "--" + modifier;
    });

    return className;
  },
  getInheritModifiers: function(target) {

    var parent = this.getArray(this.props.modifiers);
    var target = this.getArray(target);
    var child = _.intersection(parent, target);

    return child;
  }
};
