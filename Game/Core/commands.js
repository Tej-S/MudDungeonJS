(function(r) {
  "use strict";

  var modules = {
    helper: r('./helpers').helpers
  };

  var commands = {
    yes: function(string) {
      return string.toLowerCase().match(/^(y|yes|yea|yeah|sure|fine|okay|aye|yep|ok)$/)
    },
    no: function(string) {
      return string.toLowerCase().match(/^(n|no|never|nah|nay)$/)
    }
  };
exports.commands = commands;
})(require);