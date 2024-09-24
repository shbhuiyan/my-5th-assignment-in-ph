//********** Donation Section **********
const donationBtn = document
  .getElementById("donation-tab")
  .addEventListener("click", function () {
    document.getElementById("donation-tab").classList.add("bg-lime-400");
    document
      .getElementById("donation-tab")
      .classList.remove("bg-white", "text-gray-500");

    document
      .getElementById("history-tab")
      .classList.add("bg-white", "text-gray-500");

    classRemove("donation-section");
    classAdd("history-list");
  });

// Card-1 Button ********
const card1Btn = document
  .getElementById("card-1-btn")
  .addEventListener("click", function () {
    const myDonationAmount = valueCollector("card-1-input");
    const myBalance = innerTextCollector("my-balance");
    const donationAmount = innerTextCollector("total-Donation-Amount-1");
    const modal = document.getElementById("my_modal_1");

    // Error Condition ***

    if (
      myDonationAmount <= 0 ||
      isNaN(myDonationAmount) ||
      myDonationAmount > myBalance
    ) {
      classRemove("Amount-error-1");
      return;
    } else {
      classAdd("Amount-error-1");
      modal.showModal();
    }

    const totalDonationAmount = myDonationAmount + donationAmount;
    const remainingBalance = myBalance - myDonationAmount;

    const updateTotalDonationAmount = document.getElementById(
      "total-Donation-Amount-1"
    );
    updateTotalDonationAmount.innerText = totalDonationAmount;
    const updateMyBalance = document.getElementById("my-balance");
    updateMyBalance.innerText = remainingBalance;

    document.getElementById('responsive').innerText = remainingBalance;

    document.getElementById("card-1-input").value = "";

    const date = new Date();
    const title1 = document.getElementById("card-1-title").innerText;
    const div = document.createElement("div");
    div.classList.add(
      "border",
      "shadow-md",
      "p-4",
      "rounded-lg",
      "lg:w-3/4",
      "mx-auto"
    );
    div.innerHTML = `
            <p class="text-md font-medium text-amber-500 p-1"><span class="text-black">Donation Amount : </span>${myDonationAmount} BDT</p>
            <p class="capitalize text-lg font-bold p-1">Donation Fund : <span class="text-gray-600">${title1}</span></p>
            <p class="bg-gray-100 p-1"><span class="font-semibold text-lime-700">Donation Time : </span>${date}</p>
        `;
    document.getElementById("history-list").prepend(div);
  });

// Card-2 Button ********
const card2btn = document
  .getElementById("card-2-btn")
  .addEventListener("click", function () {
    const myDonationAmount = valueCollector("card-2-input");
    const myBalance = innerTextCollector("my-balance");
    const donationAmount = innerTextCollector("total-Donation-Amount-2");
    const modal = document.getElementById("my_modal_2");

    // Error Condition ***

    if (
      myDonationAmount <= 0 ||
      isNaN(myDonationAmount) ||
      myDonationAmount > myBalance
    ) {
      classRemove("Amount-error-2");
      return;
    } else {
      classAdd("Amount-error-2");
      modal.showModal();
    }

    const totalDonationAmount = myDonationAmount + donationAmount;
    const remainingBalance = myBalance - myDonationAmount;

    const updateTotalDonationAmount = document.getElementById(
      "total-Donation-Amount-2"
    );
    updateTotalDonationAmount.innerText = totalDonationAmount;
    const updateMyBalance = document.getElementById("my-balance");
    updateMyBalance.innerText = remainingBalance;

    document.getElementById('responsive').innerText = remainingBalance;

    document.getElementById("card-2-input").value = "";

    const date = new Date();
    const title2 = document.getElementById("card-2-title").innerText;
    const div = document.createElement("div");
    div.classList.add(
      "border",
      "shadow-md",
      "p-4",
      "rounded-lg",
      "lg:w-3/4",
      "mx-auto"
    );
    div.innerHTML = `
            <p class="text-md font-medium text-amber-500 p-1"><span class="text-black">Donation Amount : </span>${myDonationAmount} BDT</p>
            <p class="capitalize text-lg font-bold p-1">Donation Fund : <span class="text-gray-600">${title2}</span></p>
            <p class="bg-gray-100 p-1"><span class="font-semibold text-lime-700">Donation Time : </span>${date}</p>
        `;
    document.getElementById("history-list").prepend(div);
  });

// Card-3 Button ********
const card3btn = document
  .getElementById("card-3-btn")
  .addEventListener("click", function () {
    const myDonationAmount = valueCollector("card-3-input");
    const myBalance = innerTextCollector("my-balance");
    const donationAmount = innerTextCollector("total-Donation-Amount-3");
    const modal = document.getElementById("my_modal_3");

    // Error Condition ***

    if (
      myDonationAmount <= 0 ||
      isNaN(myDonationAmount) ||
      myDonationAmount > myBalance
    ) {
      classRemove("Amount-error-3");
      return;
    } else {
      classAdd("Amount-error-3");
      modal.showModal();
    }

    const totalDonationAmount = myDonationAmount + donationAmount;
    const remainingBalance = myBalance - myDonationAmount;

    const updateTotalDonationAmount = document.getElementById(
      "total-Donation-Amount-3"
    );
    updateTotalDonationAmount.innerText = totalDonationAmount;
    const updateMyBalance = document.getElementById("my-balance");
    updateMyBalance.innerText = remainingBalance;

    document.getElementById('responsive').innerText = remainingBalance;

    document.getElementById("card-3-input").value = "";

    const date = new Date();
    const title3 = document.getElementById("card-3-title").innerText;
    const div = document.createElement("div");
    div.classList.add(
      "border",
      "shadow-md",
      "p-4",
      "rounded-lg",
      "lg:w-3/4",
      "mx-auto"
    );
    div.innerHTML = `
            <p class="text-md font-medium text-amber-500 p-1"><span class="text-black">Donation Amount : </span>${myDonationAmount} BDT</p>
            <p class="capitalize text-lg font-bold p-1">Donation Fund : <span class="text-gray-600">${title3}</span></p>
            <p class="bg-gray-100 p-1"><span class="font-semibold text-lime-700">Donation Time : </span>${date}</p>
        `;
    document.getElementById("history-list").prepend(div);
  });

// ************ History Section ***********
const historyBtn = document
  .getElementById("history-tab")
  .addEventListener("click", function () {
    document.getElementById("history-tab").classList.add("bg-lime-400");
    document
      .getElementById("history-tab")
      .classList.remove("bg-white", "text-gray-500");

    document
      .getElementById("donation-tab")
      .classList.add("bg-white", "text-gray-500");

    classAdd("donation-section");
    classRemove("history-list");
  });

// Blog Button *******
const blogButton = document
  .getElementById("blog-btn")
  .addEventListener("click", function () {
    window.location.href = "https://shbhuiyan.github.io/my-5th-assignment-in-ph/blog.html";
  });
