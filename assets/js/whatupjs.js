
document.addEventListener("DOMContentLoaded", function () {
console.log("v1")
  const form = document.getElementById("bookingForm");

  form.addEventListener("submit", function (event) {
  
    event.preventDefault();

    const name = document.getElementById("name").value;
    const petname=document.getElementById("name").value;
    const service = document.getElementById("service").value;
    console.log(service);

    console.log(service);

    const message =
      "New Booking:%0A" +
      "Name: " + name + "%0A" +
      "Pet Name: " + petname + "%0A" +
      "Service: " + service;

    const whatsappNumber = "+919944592807"; 
    const url = "https://wa.me/" + whatsappNumber + "?text=" + message;

    window.open(url, "_blank");
  });

});