var request = require('request');
var expect = require('mocha').expect;
var axios = require('axios');

describe('Combos', function() {
  
  describe('fetch combos', function() {
    it('returns status code 200', function() {
      request('http://localhost:5000/api/combos', function(error, res, body) {
        expect(res.statusCode).to.equal(200);
      })
    })

    it('returns an Array', function() {
      request('http://localhost:5000/api/combos', function(error, res, body) {
        expect(typeof(body)).to.equal(String);
      })
    })

  })
})