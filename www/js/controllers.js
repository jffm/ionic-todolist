angular.module('starter.controllers', [])
    .controller('ToDoListCtrl', function ($scope, $ionicModal) {
    $scope.toDoListItems = [];
    $ionicModal.fromTemplateUrl('modal.html', function (modal) {
    	$scope.modal = modal;
    }, {
    	scope: $scope,
    	animation: 'slide-in-up'
    });
    // function to open the modal
    $scope.openModal = function () {
    	$scope.modal.show();
    };
    // function to close the modal
    $scope.closeModal = function () {
    	$scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
    	$scope.modal.remove();
    });
    // function to add items to the existing list
    $scope.AddItem = function (data) {
    	$scope.toDoListItems.push({
    		task: data.newItem,
    		status: 'not done'
    	});
    	$scope.modal.hide();
    	data.newItem = '';
    };
});
