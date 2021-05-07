App.factory('SberbankmobilcartFactory', function($http, Url, $session, $window,$pwaRequest) {

    var factory = {};
    factory.value_id = null;

	
    factory.formrequest = function(clientID,bindingID) {

        if(!this.value_id) {
            return $pwaRequest.reject("[SberbankmobilcartFactory::formrequest] missing value_id.");
        }

        return $pwaRequest.get("sberbankmobilcart/mobile_sberbank/formrequest", {
            urlParams: {
                value_id: this.value_id,
				client_id: clientID,
				binding_id: $window.localStorage.getItem('sberbank_binding_id')				
            },
			cache: false,
			refresh: true			
        });
    };	
	
    factory.checkorder = function() {

        if(!this.value_id) {
            return $pwaRequest.reject("[SberbankmobilcartFactory::checkorder] missing value_id.");
        }

        return $pwaRequest.get("sberbankmobilcart/mobile_sberbank/check", {
            urlParams: {
                value_id: this.value_id
            },
			cache: false,
			refresh: true			
        });
    };	
	
    factory.validatePayment = function () {
        if (!this.value_id) {
            return $pwaRequest.reject('[SberbankmobilcartFactory::validatePayment] missing value_id.');
        }

        return $pwaRequest.post('mmobilcart/mobile_sales_payment/validatepayment', {
            urlParams: {
                value_id: this.value_id
            },
            data: {
                validate_payment: 1,
                customer_uuid: $session.getDeviceUid(),
                notes: factory.notes || ''
            }
        });
    }	

    return factory;
}); 


