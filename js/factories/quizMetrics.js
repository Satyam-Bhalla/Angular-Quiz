/*
 * IIFE to avoid global namespace pollution and keep code safe.
 */
(function(){

    angular
        .module("languageFacts")
        .factory("quizMetrics", QuizMetrics);

        QuizMetrics.$inject = ['DataService'];

        /*
         * function definition for the factory
         */
        function QuizMetrics(DataService){

            var quizObj = {
                quizActive: false,
                resultsActive: false,
                changeState: changeState, // changeState is a named function below
                correctAnswers: [],
                markQuiz: markQuiz, // markQuiz is a named function below
                numCorrect: 0
            };

            return quizObj;

           
            function changeState(metric, state){
                if(metric === "quiz"){
                    quizObj.quizActive = state;
                }else if(metric === "results"){
                    quizObj.resultsActive = state;
                }else{
                    return false;
                }
            }
            
            function markQuiz(){
                quizObj.correctAnswers = DataService.correctAnswers;
                for(var i = 0; i < DataService.quizQuestions.length; i++){
                    if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
                        DataService.quizQuestions[i].correct = true;
                        quizObj.numCorrect++;
                    }else{
                        DataService.quizQuestions[i].correct = false;
                    }
                }
            }

        }

})();
