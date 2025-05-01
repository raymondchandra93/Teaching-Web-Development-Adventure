
// -- Sprint 1 --
function buildOrder() {

    // -- Sprint 1A --
    /* Start with empty object */
    var order = {};

    order.size = parseInt(document.getElementById('size-input').value);
    order.crust = document.getElementById('crust-input').value;

    /* Get radio button input */
    var sauceRadios = document.getElementsByName('sauce');
    for (var i = 0; i < sauceRadios.length; i++) {
        if (sauceRadios[i].checked) {
            order.sauce = sauceRadios[i].value;
            break;
        }
    }

    // -- Sprint 1B --
    /* Get topings as an array */
    order.toppings = []; /* Start with empty array */
    var toppingCheckboxes = document.getElementsByName('topping');
    for (i = 0; i < toppingCheckboxes.length; i++) {
        if (toppingCheckboxes[i].checked) {
            order.toppings.push(toppingCheckboxes[i].value);
        }
    }

    /* Lets get the extras individually */
    order.extraCheese = document.getElementById('extra-cheese-input').checked;
    order.extraSauce = document.getElementById('extra-sauce-input').checked;

    order.zip = parseInt(document.getElementById('zip-input').value);

    return order;
}

// -- Sprint 2C --
/* Returns false when order is invalid, else returns true */
function validate(order) {
    /* # of toppings must be 3 or less */
    if (order.toppings.length > 3) {
        alert("Error, you must have 3 or fewer toppings!");
        return false;
    }

    /* Check for valid zip code - assuming 5 digits */
    else if (order.zip !== 98101) {
        alert("Error, we only deliver to zip code 98101!");
        return false;
    }

    else {
        return true;
    }
}

// -- Phase 2D --
function makeInvoice(order) {
    var price = order.size;
    price = price + (order.toppings.length * 1.5);
    if (order.extraCheese) {
        price = price + 1;
    }
    console.log(price);

    var toppingString = "";
    for (var i = 0; i < order.toppings.length; i++) {
        toppingString = toppingString + order.toppings[i] + ", ";
    }

    var extraCheese = "";
    if (order.extraCheese) {
        extraCheese = "extra cheese, "
    }

    var extraSauce = "";
    if (order.extraSauce) {
        extraSauce = "extra sauce, "
    }

    var invoice = "Your total is $"
        + price.toFixed(2)
        + " for a "
        + order.size
        + " inch pizza with "
        + order.crust
        + " crust, "
        + order.sauce
        + " sauce, "
        + toppingString
        + extraCheese
        + extraSauce
        + "and free delivery.\nThanks for ordering from Slice of Pi!";

    return invoice;
}

// -- Phase 2A --
function handleOrderClick() {
    var order = buildOrder();

    // -- Phase 2C --
    if (validate(order)) {
        alert(makeInvoice(order));
    }
}