'use strict';
var expect = require('chai').expect;
var relevance = require('../index.js');



describe('relevance', function(){
  it('should return an empty array of objects sorted by relevance',
    function(){
      var data = [
        {
          title: 'Front end developer',
          description: 'Looking for a front end developer who works with HTML, CSS, Javascript, Angular, Node, NPM'
        },
        {
          title: 'Front end Engineer',
          description: 'Looking for a front end developer who works with HTML, HTML, HTML, CSS, Javascript, Angular, Node, NPM'
        },
        {
          title: 'Back end developer developer developer developer developer developer',
          description: 'Looking for a front end developer developer developer developer developer developer who works with Ruby, Python, Javascript, Rails, Node, NPM Developer Developer'
        },
        {
          title: 'Full Stack developer',
          description: 'Looking for a front end developer who works with Ruby, Python, Javascript, Rails, Node, NPM Developer, HTML, CSS, Front end, back end'
        }
      ];

      var result = relevance({
        query: ['html', 'css'],
        data: data,
        rankings: {
          title: 5,
          description: 1
        }
      });

      expect(result[0].title).to.equal('Front end Engineer');
    });
});
