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
  });

// Card-1 Button ********

const card1Btn = document
  .getElementById("card-1-btn")
  .addEventListener("click", function () {
    const myDonationAmount = valueCollector("card-1-input");
    const myBalance = innerTextCollector("my-balance");
    const donationAmount = innerTextCollector("total-Donation-Amount-1");

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
    }

    const totalDonationAmount = myDonationAmount + donationAmount;
    const remainingBalance = myBalance - myDonationAmount;

    const updateTotalDonationAmount = document.getElementById(
      "total-Donation-Amount-1"
    );
    updateTotalDonationAmount.innerText = totalDonationAmount;
    const updateMyBalance = document.getElementById("my-balance");
    updateMyBalance.innerText = remainingBalance;

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
            <p class="capitalize text-lg font-bold">${myDonationAmount} Taka is Donated for ${title1}</p>
            <p class="bg-gray-100 p-1">${date}</p>
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
    }

    const totalDonationAmount = myDonationAmount + donationAmount;
    const remainingBalance = myBalance - myDonationAmount;

    const updateTotalDonationAmount = document.getElementById(
      "total-Donation-Amount-2"
    );
    updateTotalDonationAmount.innerText = totalDonationAmount;
    const updateMyBalance = document.getElementById("my-balance");
    updateMyBalance.innerText = remainingBalance;

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
            <p class="capitalize text-lg font-bold">${myDonationAmount} Taka is Donated for ${title2}</p>
            <p class="bg-gray-100 p-1">${date}</p>
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
    }

    const totalDonationAmount = myDonationAmount + donationAmount;
    const remainingBalance = myBalance - myDonationAmount;

    const updateTotalDonationAmount = document.getElementById(
      "total-Donation-Amount-3"
    );
    updateTotalDonationAmount.innerText = totalDonationAmount;
    const updateMyBalance = document.getElementById("my-balance");
    updateMyBalance.innerText = remainingBalance;

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
            <p class="capitalize text-lg font-bold">${myDonationAmount} Taka is Donated for ${title3}</p>
            <p class="bg-gray-100 p-1">${date}</p>
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
  });
