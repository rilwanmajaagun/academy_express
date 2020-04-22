// unit testing 
const request = require('supertest');
const expect = require('chai').expect   //from the chai we are importing exprect.
const app = require("../index");

const agent = request(app);    //creating an agent which package our req to make use of the server. (request(supertest) is a module for testing our app)

describe("Testing academy simple server", () => {       //we use describe to group our test together.

    it("should Get base url", (done) => {
        agent
            .get("/")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                expect(res.body.message).to.equal("Welcome to simple express server");
                expect(res.body.message).to.be.a("string");

                done();
            });
    });

    it("should Get academy name ", (done) => {
        agent
            .get("/academy/name")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                expect(res.body.message).to.equal("Success");
                expect(res.body.message).to.be.a("string");

                done();
            });
    });

    it("should Get test name ", (done) => {
        agent
            .get("/test/name")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                expect(res.body.message).to.equal("welcome to test route");
                expect(res.body.message).to.be.a("string");

                done();
            });
    });


});   
