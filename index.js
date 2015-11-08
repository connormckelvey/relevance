'use strict';

var getIndicesOf = require('./lib/get-indicies-of');

var relevance = function(settings) {
  return settings.data.sort(function(first, next) {
    var firstScore = 0;
    var nextScore = 0;

    settings.query.forEach(function(element, index, array){
      element = element.toLowerCase();
      for(var prop in settings.rankings) {
        var value = settings.rankings[prop];
        var firstSearch = getIndicesOf(element, first[prop], false);
        var nextSearch = getIndicesOf(element, next[prop], false);

        if(firstSearch.length) {
          firstScore += value * firstSearch.length;
        }
        if(nextSearch.length) {
          nextScore += value * nextSearch.length;
        }
      }
    });

    if(firstScore > nextScore) {
      return -1;
    } else if(firstScore < nextScore) {
      return 1;
    } else {
      return 0;
    }

  });
};

module.exports = relevance;
