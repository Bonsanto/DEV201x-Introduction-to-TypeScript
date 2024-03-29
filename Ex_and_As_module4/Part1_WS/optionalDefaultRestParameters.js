(function () {
    //Optional parameter
    function buildAddressOptional(address1, city, state, address2) {
        var addr2 = (address2) ? ' Address2: ' + address2 : '';
        displayAddress(address1 + addr2 + ", " + state + ', ' + city);
    }
    //Default parameter
    function buildAddressDefault(address1, city, address2) {
        if (address2 === void 0) { address2 = 'N/A'; }
        displayAddress('Address: ' + address1 + ' Address2: ' + address2 + ' City: ' + city);
    }
    //Rest parameters
    function buildAddressRest(city, state) {
        var restOfAddress = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            restOfAddress[_i - 2] = arguments[_i];
        }
        var address = '';
        restOfAddress.forEach(function (addr) { return address += ' ' + addr; });
        displayAddress(restOfAddress + ", " + state + ', ' + city);
    }
    function displayAddress(msg) {
        result.innerHTML = msg;
    }
    var $ = function (id) { return document.getElementById(id); };
    var addressButton = $('addressButton'), address = $('address'), address2 = $('address2'), city = $('city'), state = $('state'), result = $('result');
    //Call function with optional parameter
    addressButton.addEventListener('click', function (e) { return buildAddressOptional(address.value, city.value, state.value); });
    //Call function with default parameter
    //addressButton.addEventListener('click',(e) => buildAddressDefault(address.value, city.value));
    //Call function with Rest parameters
    //addressButton.addEventListener('click', (e) => buildAddressRest(city.value, address.value, address2.value));
}());
//# sourceMappingURL=optionalDefaultRestParameters.js.map