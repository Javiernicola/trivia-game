$("#start").on('click',function(){
    game.start();
})


$(document).on('click','#end',function(){
	game.done();
})
var questions = [{

        question: "Who won France 1998?",
		choice: ["Peru", "France", "Italy", "Brasil"],
		answer: 1,
	 },
	 {
	 	question: "How many panaltys you need to win a shoot dead panalty?",
		choice: ["5", "8", "10", "20"],
		answer: 0,
	 },
	 {
	 	question: "Who won Mexico 86?",
		choice: ["Mexico", "Brasil", "Argentina", "Italy" ],
		answer: 2,
	},
	{
		question: "What is the Color of Nigerian football players?",
		choice: ["yellow", "blue", "green", "red" ],
		answer: 2,
	},
	{
		question: "What was the toy in Spain 82 ?",
		choice: ["an Apple", "a Jett", "a Dog", "an Orange" ],
		answer: 3,

	}];

     var game = {

        correct:0,
        incorrect: 0,
        counter: 15,
        countdown: function(){
            game.counter--;
            $("#counter").html(game.counter);
            if( game.counter<=0){
                console.log("Time is up!");
                game.done();
            }
        },
        start: function(){
            timer = setInterval(game.countdown,1000);
             $("#subwrapper").prepend('<h3>Time Remaining: <span id="counter">15</span> Seconds</h3>');
             $("#start").remove();
			 for(var i = 0; i <questions.length; i++){
                $("#subwrapper").append("<h4>" + questions[i].question + "</h4>");
                for(var j=0; j <questions[i].choice.length; j++){
                	$("#subwrapper").append("<div class='form-check'><input type= 'radio' class='form-check-input' name='question-"+i+"' value='" + questions[i].choice[j] + "'><label class='form-check-label'>"+questions[i].choice[j]);

            	}


			 }
			 $("#subwrapper").append('<br> <button id="end">DONE</button>');

        },
        done : function(){
            $.each($("input[name='question-0']:checked"),function(){
                if($(this).val()==questions[0].answer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
			 });
			 $.each($("input[name='question-1']:checked"),function(){
                if($(this).val()==questions[1].answer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
             });
			 $.each($("input[name='question-2']:checked"),function(){
                if($(this).val()==questions[2].answer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
             });
			 $.each($("input[name='question-3']:checked"),function(){
                if($(this).val()==questions[3].answer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
             });

			 $.each($("input[name='question-4']:checked"),function(){
                if($(this).val()==questions[4].answer){
                    game.correct++;
                } else{
                    game.incorrect++;
                }
             });

			 
             this.result();
             },
             result: function(){
                 clearInterval(timer);
				 $("#subwrapper h2").remove();
				 $("#subwrapper").html("<h2> All done! </h2>");
                 $("#subwrapper").append("<h3>Correct Answers: "+ this.correct + "</h3>");
                 $("#subwrapper").append("<h3>Incorrect Answers: "+ this.incorrect + "</h3>");
                 $("#subwrapper").append("<h3>Unanswered : "+(questions.length-(this.incorrect+this.correct))+"</h3>");
             }

    }