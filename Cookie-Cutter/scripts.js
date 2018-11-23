/********************************

        COOKIE clicker
        - Asim Zaidi : FEW 1.1
********************************/

//set default values
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;

let cookieCount = 0;
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

//DOM decleration
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');
console.log(cookieClicker);


let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');
let grandmaAuto = false;

let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

/********************************

        Cookie Clicker

********************************/
//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
//Setting up e-listener for cookie clicker btn
cookieCounter.innerHTML = cookieCount;
cookieClicker.addEventListener("click", (e) => {
  cookieCount = cookieCount + clickPower;
  refreshCookieCount()
});

///refresh cookie count function
let refreshCookieCount = function() {
  cookieCounter.innerHTML = cookieCount;
}

/********************************

        Click Power

********************************/
//Buy click power
buyClickPower.addEventListener("click", (e) => {
    
    //check if user has enough cookies to purchase item
    if (cookieCount >= clickPowerPriceAmount) {
        console.log("Item succesfully bought.");
        //subtract cookies from the price of the item
        cookieCount -= clickPowerPriceAmount;
        //update cookie counter.
        refreshCookieCount();
        clickPowerLevelNumber += 1;
        //update price
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);
        //update click power
        clickPower += 1 * Math.floor(clickPowerLevelNum * 1.05);
        // refresh click power
        refreshClickPower();
        // cookieCounter.innerHTML = cookieCount;
    } else {
        console.log("You don't have enough cookies!");
    }
});
// refresh the power click level
let refreshPowerClick = function() {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
}

/********************************

          Grandmas

********************************/
//turn autoGrandma on!

//buy a grandma
buyGrandma.addEventListener("click", () => {
    autoGrandma = false;
    // Make sure we have enough cookies and subtract our cookies from the price.
    if (cookieCount >= grandmaPriceAmount) {
        // Subtract cookies from the price of the item.
        cookieCount +=  - grandmaPriceAmount;
        refreshCookieCount()
        //upgrade power level
        grandmaLevelNumber += 1;
        // Update price.
        grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
        //update grandma power
        grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);
        //turn autoGrandma on!
        autoGrandma = true
        autoGrandmaStart();
        //refresh shop item
        refreshGrandma();
    } else {
        console.log('You do not have enough cookies for this purchase.')
    }
});

let autoGrandmaStart = function() {
    let grandmaInt = window.setInterval(function() {
        cookieCount += grandmaPower;
        refreshCookieCount();
    }, 1000);
}

let refreshGrandma = function() {
    grandmaLevel.innerHTML = grandmaLevelNumber
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower - 10;
}

/********************************

          Grandmas

********************************/

//buy a facility
buyFacility.addEventListener("click", function() {
    //set autoLoop to false
    facilityAuto = false;

    //make sure we have enough cookies
    //make sure user have enough cookies
    if (cookieCount >= facilityPriceAmount) {
        //refresh cookie count
        cookieCount -= facilityPriceAmount;
        refreshCookieCount();
        //upgrade power level
        facilityLevelNumber += 1;

        //update price
        facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);

        //update facility power
        facilityPower += 600  + Math.floor(facilityLevelNumber * 1.33);

        //turn autoFacility on!
        facilityAuto = true
        autoFacilityStart();

        //refresh shop item
        refreshFacility();
    } else {
        console.log('You do not have enough cookies to purchase this item.');
    }

    //refresh shop
    let refreshFacility = function() {
        facilityLevel.innerHTML = facilityLevelNumber
        facilityPrice.innerHTML = facilityPriceAmount;
        facilityMultiple.innerHTML = facilityPower - 600;
    }

    //game loop
    let autoFacilityStart = function() {
        let facilityInt = window.setInterval(function(){
        cookieCount += facilityPower;
        refreshCookieCount();
        }, 1000);
    }

});