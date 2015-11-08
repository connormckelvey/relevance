#Relevance [![Build Status: Linux](https://travis-ci.org/connormckelvey/relevance.svg?branch=master)](https://travis-ci.org/connormckelvey/relevance)

Relevance is a simple sorting module that sorts an array of objects by relevance. Relevance is determined by the number of occurrences of each element
in a query array. The order is ultimately determined by a score which is calculated with the number of occurrences found and a ranking integer based on the property.

##Installation

`npm install relevance --save`

##Usage

```javascript
  var relevance = require('relevance');
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
```

##Todo

 - Add more tests
