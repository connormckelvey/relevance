'use strict';
var expect = require('chai').expect;
var getIndicesOf = require('../lib/get-indicies-of');

describe('getIndicesOf', function(){
  it('should return an array of starting indicies of search in string',
    function(){
      var sentence = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas sagittis euismod pulvinar. Ut varius lacus eu
                      rutrum pretium. Nullam quis ex rhoncus, mollis felis nec,
                      egestas turpis`;

      var result = getIndicesOf('it', sentence, false);
      expect(result).to.deep.equal([19, 53, 91]);
    });

  it('should return an array of starting indicies of search in string, case sensitive',
    function(){
      var sentence = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas sagittis euismod pulvinar. Ut varius lacus eu
                      rutrum pretium. Nullam quis ex rhoncus, mollis felis nec,
                      egestas turpis`;

      var result = getIndicesOf('Lo', sentence, true);
      expect(result).to.deep.equal([0]);
    });

  it('should return an empty array',
    function(){
      var sentence = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas sagittis euismod pulvinar. Ut varius lacus eu
                      rutrum pretium. Nullam quis ex rhoncus, mollis felis nec,
                      egestas turpis`;

      var result = getIndicesOf('asd', sentence, false);      
      expect(result).to.deep.equal([]);
    });
});
