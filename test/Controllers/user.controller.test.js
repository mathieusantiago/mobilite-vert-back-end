
const chai = require("chai");
const expect = chai.expect; 
const request = require('request')

describe("UserController", () => {
    describe('Api test', () => {
        describe("/GET /api/user", () => {
            it("it should GET return an array with only one user info", (done) => {
                request('http://localhost:5000/api/user',  (error, response, body)=> {
                    expect(response.statusCode).to.equal(200)
                    expect(JSON.parse(body)).to.be.an('array');
                    done()
                });
            });
        });
        describe("/GET /api/user/:id", () => {
            it("it should GET return object with users info", (done) => {
                const objectId = '63060fe60a9cbcf6f9baeeff'
                request(`http://localhost:5000/api/user/${objectId}`,  (error, response, body)=> {
                    expect(response.statusCode).to.equal(200)
                    expect(JSON.parse(body)).to.be.an('object');
                    expect(JSON.parse(body).email).to.equal('mathieu@gmail.com');
                    done()
                });
            });
        });
        describe("/PUT /api/user/", () => {
            it("it should GET return object with users info updated", (done) => {
                let objectId = '6340357d57927c9d7ecde97b'
                let data =  {
                    "pseudo": "test",
                    "email": "test@gmail.com"
                } 
                request
                    .put({
                        url:`http://localhost:5000/api/user/${objectId}`,
                        form: data
                    }, (err,response,body)=>{
                        expect(response.statusCode).to.equal(200)
                        expect(JSON.parse(body)._id).to.equal("6340357d57927c9d7ecde97b")
                        done()
                    })
            });
        });
        describe("/DELETE /api/user/", () => {
            it("it should DELETE return message success", (done) => {
                let objectId = '6340357d57927c9d7ecde97b'
                request
                    .delete({url:`http://localhost:5000/api/user/${objectId}`,}, (err,response,body)=>{
                        expect(response.statusCode).to.equal(200)
                        expect(JSON.parse(body).message).to.equal("Successfully deleted")
                        done()
                    })
            });
        });
        describe("/GET /api/user/logout", () => {
            it("it should GET return message success", (done) => {
                request('http://localhost:5000/api/user/logout',  (error, response, body)=> {
                    expect(response.statusCode).to.equal(200)
                    expect(body).to.equal('user logout');
                    done()
                });
                
            });
        });
    });
});