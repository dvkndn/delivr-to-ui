var TimeMixin = {
  formatTimeFromNow: function(time) {
    return moment.unix(time).fromNow();
  },
  formatTimeFull: function(time) {
    return moment.unix(time).format("MMM Do YYYY")
  }
};