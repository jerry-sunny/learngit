// Simple async test for HTTP 200 response code using supertest and mocha
'use strict';

var request = require("supertest"),
    app = require("../Server").getApp;

describe('GET /', function(){
  it('expects HTTP response 200', function(done){
    request(app)
     .get('/')
	 .expect(200, done); 
  });
});