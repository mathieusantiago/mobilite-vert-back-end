
const chai = require("chai");
const expect = chai.expect; 
const {signUpErrors, signInErrors} = require("../../utils/errors.utils");
let errors;
describe("ErrorsUtils", () => {
    describe("test utils signUpErrors", () => {
        it("it should errors pseudo return message errors Pseudo incorrect ou déjà pris", (done) => {
            errors = {
                message:"pseudo"
            }
            const res = signUpErrors(errors)
            expect(res.pseudo).to.equal('Pseudo incorrect ou déjà pris')
            done()
        });
        it("it should errors email return message errors Email incorrect", (done) => {
            errors = {
                message:"email"
            }
            const res = signUpErrors(errors)
            expect(res.email).to.equal('Email incorrect')
            done()
        });
        it("it should errors password return message errors Le mot de passe doit faire 6 caractères minimum", (done) => {
            errors = {
                message:"password"
            }
            const res = signUpErrors(errors)
            expect(res.password).to.equal('Le mot de passe doit faire 6 caractères minimum')
            done()
        });
        it("it should errors password return message errors Le mot de passe doit faire 6 caractères minimum", (done) => {
            errors = {
                message:"password"
            }
            const res = signUpErrors(errors)
            expect(res.password).to.equal('Le mot de passe doit faire 6 caractères minimum')
            done()
        });
    });
    describe("test utils signInErrors", () => {
        it("it should errors email return message errorsEmail inconnu", (done) => {
            errors = {
                message:"email"
            }
            const res = signInErrors(errors)
            expect(res.email).to.equal('Email inconnu')
            done()
        });
        it("it should errors password return message errors Le mot de passe ne correspond pas", (done) => {
            errors = {
                message:"password"
            }
            const res = signInErrors(errors)
            expect(res.password).to.equal('Le mot de passe ne correspond pas')
            done()
        });
    });
});