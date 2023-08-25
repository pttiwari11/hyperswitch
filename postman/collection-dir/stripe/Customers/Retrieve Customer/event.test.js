// Validate status 2xx 
pm.test("[GET]::/customers/:id - Status code is 2xx", function () {
   pm.response.to.be.success;
});

// Validate if response header has matching content-type
pm.test("[GET]::/customers/:id - Content-Type is application/json", function () {
   pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});

// Validate if response has JSON Body 
pm.test("[GET]::/customers/:id - Response has JSON Body", function () {
    pm.response.to.have.jsonBody();
});


