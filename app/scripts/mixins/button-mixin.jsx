var ButtonMixin = {
  getButton: function(type) {
    return BUTTONS[type];
  },
  getButtonGroup: function(type) {
    return BUTTON_GROUPS[type].map(function(button) {
      return BUTTONS[button];
    })
  }
};