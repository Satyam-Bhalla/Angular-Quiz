/*
 * IIFE to avoid polution of the global namespace.
 */
(function(){
 
    angular
        .module("languageFacts")
        .controller("listCtrl", ListController);
    
    ListController.$inject = ['quizMetrics', 'DataService'];

    function ListController(quizMetrics, DataService){
        var vm = this;

        vm.quizMetrics = quizMetrics; // Controllers reference to the quiz data from factory
        vm.data = DataService.languageData; // Controller reference to the language info created in the factory
        vm.activeLanguage = {}; // will be used in the view to hold the data of currently active turtle
        vm.changeActiveLanguage = changeActiveLanguage; // reference to a named function below
        vm.activateQuiz = activateQuiz; // reference to named function below
        vm.search = ""; // will hold the search query when user uses search bar in view

        function changeActiveLanguage(index){
            vm.activeLanguage = index;
        }

        function activateQuiz(){
            quizMetrics.changeState("quiz", true);
        }
    }


})();
