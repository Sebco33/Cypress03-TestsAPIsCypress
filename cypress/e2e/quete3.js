

import { faker } from '@faker-js/faker';

const userName = faker.internet.userName();
const userEmail = faker.internet.email();
const userPassword = faker.internet.password();
let userToken;
const badToken = "xxx"

describe("template spec"), () => {
    it("create user", () => {
      cy.request(
        method: "POST",
        url: 'https://practice.expandtesting.com/notes/app/users/register'
        headers: {
          accept: "application/json",
         },
        body: {
            name: 'seb123',
            email: "fghdhdhd@gmail.com",
            password: "cfgrt47df4",
        }),
    }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.message).to.eq(“User account created successfully”);
    expect(response.body.success).to.equal(true);
  });

  it("login user", () => {
    cy.request('POST','https://practice.expandtesting.com/notes/app/login',{
    headers:{
           accept: "application/json",
       },
           email: "fghdhdhd@gmail.com",
           password: "cfgrt47df4"
    }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.name).to.equal(“seb123”);
    expect(response.body.email).to.equal("fghdhdhd@gmail.com");       
    expect(response.body.password).to.equal("cfgrt47df4");       
   });

   it("login a note", () => {
    const token = "b8a733d34c5946158d94008b4a0199dab86425ce64294755901e4705d5d8dcd3"
    cy.request({
      url: "https://practice.expandtesting.com/notes/app/notes/",
      method: "POST",
          headers: {
           accept: "application/json",
           'x-auth-token': token,
       },
       body: {
        title: "fhfidiridjf",
        description: "notes",
        category: 'Home'
       },
    }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.message).to.eq("Note successfully");       
    expect(response.body.success).to.equal("cfgrt47df4");       
    });
  });
});
