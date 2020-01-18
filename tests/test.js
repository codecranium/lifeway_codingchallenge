var supertest = require("supertest");
var should = require("should");
const conf = require('../globalConfigFactory');
// This agent refers to PORT where program is runninng.

var server = supertest.agent(`http://localhost:${conf.node_port}`);

// UNIT test begin

describe("Unit Test for testing API POST",function(){

  // #1 should POST to the API
  it("Should POST request to API with expected body",function(done){
    server
    .post('/increment')
    .send({id:'321', message: 'Hello LifeWay'})
    .set('Accept', 'application/json')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);  // HTTP status should be 200
      res.body.count.should.equal(2)  // Check Result Body details to match up with expected.
      done();
    });
  });

  // #2 should NOT allow POST that is not unique
  it("Should NOT allow POST that is not unique",function(done){
    server
    .post('/increment')
    .send({id:'321', message: 'Hello LifeWay'})
    .set('Accept', 'application/json')
    .expect("Content-type",/json/)
    .expect(405)
    .end(function(err,res){
        done();
      });
  });
  
  // #3 should allow an additional POST that is unique
  it("Should allow an additional POST that IS unique",function(done){
    server
    .post('/increment')
    .send({id:'789', message: 'Thank you for considering me for the opportunity.'})
    .set('Accept', 'application/json')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);  // HTTP status should be 200
      res.body.count.should.equal(10)  // Check Result Body details to ensure it matches the accumlated total count.
      done();
    });
  });

  // #4 Should result in the total accumlated count state detail.
  it("Should result in the total accumlated count state detail (for optional endpoint)",function(done){
    server
    .get("/increment")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);  // HTTP status should be 200
      res.body.currentIncrementValue.should.equal(10)  // Check Result Body details to match up with expected.
      done();
    });
  });

});
