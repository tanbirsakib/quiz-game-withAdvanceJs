(function(){
    function Question(question, answers, correctAns) {
        this.question =  question;
        this.answers = answers;
        this.correctAns = correctAns;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for( var i = 0; i < this.answers.length; i++){
            console.log(i + ' : ' + this.answers[i]);
        }
    }
    Question.prototype.checkAns = function(ans, callBack){
        var sc;
        if(ans === this.correctAns){
            console.log('Correct ans');
          sc =  callBack(true);
        }else{
            console.log('Wrong Ans');
            sc = callBack(false);
        }
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score){
        console.log('Your current score is ' + score);
        console.log('--------------------------------')
    }

    q1 = new Question("Is football is very enjoyable game for you?", ['Yes', 'No'], 0);
    q2 = new Question("Who is your favourite player?", ['Messi', 'Ronaldo', 'Neymar'], 2);
    q3 = new Question('Which position you want to play?', ['Midfield', 'Centerback', 'Striker'], 1);
    
    var questions = [q1, q2, q3];
    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++
            }
            return sc;
        }
    }
    var keepScore = score();


    function nextQuestion(){
        var n =Math.floor(Math.random() * questions.length);
    
        questions[n].displayQuestion();
        
        var ans =prompt('Please ans the correct one.');
       

        if(ans !== 'exit'){
            questions[n].checkAns(parseInt(ans), keepScore);
            nextQuestion();
        }
        
    }
    nextQuestion();
  

})();

