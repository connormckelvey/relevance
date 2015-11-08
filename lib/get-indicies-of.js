'use strict';

var getIndicesOf = function getIndicesOf(searchStr, str, caseSensitive) {
  var startIndex = 0;
  var searchStrLen = searchStr.length;
  var index, indices = [];

  if (!caseSensitive) {
      str = str.toLowerCase();
      searchStr = searchStr.toLowerCase();
  }
  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
  }
  return indices;
};

module.exports = getIndicesOf;
