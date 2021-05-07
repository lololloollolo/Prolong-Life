/**
 * SberbankmobilcartController
 */
App.config(function($stateProvider, HomepageLayoutProvider) {

    $stateProvider.state('sberbank-payment', {
        url: BASE_PATH+"/sberbankmobilcart/mobile_sberbank/index/value_id/:value_id",
        controller: 'SberbankmobilcartController',
        templateUrl: "modules/sberbankmobilcart/templates/l1/payment.html"
    });

}).controller('SberbankmobilcartController', function ($scope, $state, $stateParams,Loader,$timeout,$translate,SberbankmobilcartFactory,$location) {
    
	console.log("SberbankmobilcartController fired.");
	Loader.show();
	$scope.is_loading = true;
	$scope.has_error = false;
	$scope.error_message = "";
	$scope.feature_location = window.location.href;
	$scope.value_id = $stateParams.value_id;
    $scope.page_title = $translate.instant("Payment");
	SberbankmobilcartFactory.value_id = $scope.value_id;
	
	/*check order status timer*/
	$scope.OrderStatus = function() {
		console.log("SberbankmobilcartFactory.checkorder start");
		SberbankmobilcartFactory.checkorder().then(function (data) {
			console.log("SberbankmobilcartFactory.checkorder return:");
			console.log(data);
			$scope.CheckOrderStatus(data);	
		}, function (error_data) {
			console.log("SberbankmobilcartFactory.checkorder return error:");
			console.log(error_data);
			$scope.CheckOrderStatus(error_data);	
		});

	};
	
	/*chec bank responce and restart timer*/
	$scope.CheckOrderStatus = function (bank_responce) {
		if (bank_responce) {
			if (bank_responce.payment_status) {
				//Goto success
				console.log("SberbankmobilcartFactory.checkorder return success, goto close payment.");
				SberbankmobilcartFactory.validatePayment()
					.then(function (data) {
						$state.go('mmobilcart-sales-success', {
							value_id: $stateParams.value_id
						});
						//console.log(data);
					}, function (data) {
						Dialog.alert('', data.message, 'OK');
					}).then(function () {
						$scope.is_loading = false;
						Loader.hide();
					});
			} else {
				console.log("SberbankmobilcartFactory.checkorder timer start again");
				
				if (bank_responce.empty_token) {
					//Wron situation - exit;
					//$location.path(bank_responce.return_url);
					$state.go("mmobilcart-sales-error", {
						"value_id":$scope.value_id
					});
				} else {			
					OrderStatusTimer = $timeout(function(){
						$scope.OrderStatus();
					}, 3000);
				}
			}
		}
	
	};
	
	//Start timer
	console.log("SberbankmobilcartFactory.checkorder timer start");
	var OrderStatusTimer = $timeout(function(){
		$scope.OrderStatus();
	}, 5000);
	
	/*start */
	$scope.loadContent = function() {
		console.log("SberbankmobilcartFactory.formrequest start");
		SberbankmobilcartFactory.formrequest().then(function (formData) {
			console.log("SberbankmobilcartFactory.formrequest return:");
			console.log(formData);
			Loader.hide();
			if (formData.error) {
				$scope.is_loading = false;
				$scope.has_error = true;
				$scope.error_message = formData.error_message + "("+formData.error_code+")";
				
			} else {
				$scope.has_error = false;
				$scope.error_message = "";		
				//Open iframe
				document.getElementById('ifrbox').src=formData.form_url;
				document.getElementById('ifrboxdiv').style.display="block";
				$scope.is_loading = false;
			
			}
			
		}, function (error_data) {
			Loader.hide();
			$scope.is_loading = false;
			console.log("SberbankmobilcartFactory.formrequest return error:");
			console.log(error_data);	
			$scope.has_error = true;
			$scope.error_message = error_data.error_message + " ("+error_data.error_code+")";	
		});
		
		Loader.hide();
	};
	
	
	
	$scope.loadContent();
	
});