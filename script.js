document.querySelector("#button1").addEventListener("click", loadCustomer);
document.querySelector("#button2").addEventListener("click", loadCustomers);

// Load customer
function loadCustomer(e) {
  // Instantiate xhr request
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseText);
      const customer = JSON.parse(this.responseText)
      const output = `
      <ul>
        <li>${customer.id}</li>
        <li>${customer.name}</li>
        <li>${customer.company}</li>
        <li>${customer.phone}</li>
      </ul>
      `;
      document.querySelector("#customer").innerHTML = output;
    }
  };

  xhr.send();
}

// Load customers
function loadCustomers(e) {
  // Instantiate xhr request
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      const customers = JSON.parse(this.responseText)

      let output = '';
      customers.forEach(function(customer) {
        output += 
        `<ul>
          <li>${customer.id}</li>
          <li>${customer.name}</li>
          <li>${customer.company}</li>
          <li>${customer.phone}</li>
        </ul>`;
      })

      document.querySelector("#customers").innerHTML = output;

    }
  };

  xhr.send();
}