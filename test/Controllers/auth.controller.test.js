
const chai = require("chai");
const expect = chai.expect; 
const request = require('request')

describe("AuthController", () => {
    describe('Api test', () => {
        describe("/POST /api/user/login", () => {
            it("it should POST return objectId when email and password are valid", (done) => {
                let data = {
                    "email": "mathieu@gmail.com",
                    "password": "mathieu"
                }
                request
                    .post({
                        url:'http://localhost:5000/api/user/login',
                        form: data
                    }, (err,response,body)=>{
                        expect(response.statusCode).to.equal(200)
                        expect(JSON.parse(body).user).to.equal("63060fe60a9cbcf6f9baeeff")
                        done()
                    })
            });
        
            it("it should POST return errors array when email is null", (done) => {
                let data = {
                    "email": null,
                    "password": "mathieu"
                }
                request
                    .post({
                        url:'http://localhost:5000/api/user/login',
                        form: data
                    }, (err,response,body)=>{
                        expect(response.statusCode).to.equal(400)
                        expect(JSON.parse(body).errors.email).to.equal("Email inconnu")
                        done()
                    })
            });

            it("it should POST return errors array when password is null", (done) => {
                let data = {
                    "email": "mathieu@gmail.com",
                    "password": null
                }
                request
                    .post({
                        url:'http://localhost:5000/api/user/login',
                        form: data
                    }, (err,response,body)=>{
                        expect(response.statusCode).to.equal(400)
                        expect(JSON.parse(body).errors.password).to.equal("Le mot de passe ne correspond pas")
                        done()
                    })
            });

            it("it should POST return errors array when email and password is null", (done) => {
                let data = {
                    "email": null,
                    "password": null
                }
                request
                    .post({
                        url:'http://localhost:5000/api/user/login',
                        form: data
                    }, (err,response,body)=>{
                        expect(response.statusCode).to.equal(400)
                        expect(JSON.parse(body).errors.email).to.equal("Email inconnu")
                        done()
                    })
            });
        });
    });

    describe('Api test', () => {
        describe("/POST /api/user/register", () => {
            it("it should POST return errors array when pseudo is null", (done) => {
                let data = {
                    "pseudo": null,
                    "email": "test@gmail.com",
                    "password" : "sdfsdfsdfsdfsf",
                    "status": true,
                    "role": "6sd5f4s6d5s6df54sdfs6df4"
                }
                request
                    .post({
                        url:'http://localhost:5000/api/user/register',
                        form: data
                    }, (err,response,body)=>{
                        expect(response.statusCode).to.equal(400)
                        expect(JSON.parse(body).errors.pseudo).to.equal('Pseudo incorrect ou déjà pris')
                        done()
                    })
            });
            it("it should POST return errors array when email is null", (done) => {
                let data = {
                    "pseudo": "test",
                    "email": null,
                    "password" : "sdfffs54ffdsf",
                    "role": "62e97b5950c2d1bcb4836dc2",
                    "status": true,
                }
                request
                    .post({
                        url:'http://localhost:5000/api/user/register',
                        form: data
                    }, (err,response,body)=>{
                        expect(response.statusCode).to.equal(400)
                        expect(JSON.parse(body).errors.email).to.equal('Email incorrect')
                        done()
                    })
            });
            it("it should POST return errors array when password is null", (done) => {
                let data = {
                    "pseudo": "test",
                    "email": "test@gmail.com",
                    "password" : null,
                    "role": "62e97b5950c2d1bcb4836dc2",
                    "status": true,
                }
                request
                    .post({
                        url:'http://localhost:5000/api/user/register',
                        form: data
                    }, (err,response,body)=>{
                        expect(response.statusCode).to.equal(400)
                        expect(JSON.parse(body).errors.password).to.equal('Le mot de passe doit faire 6 caractères minimum')
                        done()
                    })
            });
        });
    });


    describe('Api test', () => {
        describe("/GET /jwtid", () => {
            it("it should GET return errors array when cookies it doesn't exist", (done) => {
                request('http://localhost:5000/jwtid', (error, response) => {
                    expect(response.statusCode).to.equal(400)
                    done()
                });
            });
        });
    });
});

