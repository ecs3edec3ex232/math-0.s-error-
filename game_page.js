player1 =localStorage.getItem("player1");
player2 =localStorage.getItem("player2");

score1 =0;
score2 =0;

document.getElementById("Username1").innerHTML = player1 +" :";
document.getElementById("Username2").innerHTML = player2 +" :";

document.getElementById("score1").innerHTML = score1 ;
document.getElementById("score2").innerHTML = score2 ;

document.getElementById("player_question").innerHTML = "Player Answer -"+ player2;
document.getElementById("player_answer").innerHTML = "Player question -"+ player1;

function send(){
    n1 =document.getElementById("n1").value;
    n2 =document.getElementById("n2").value;
    actual_answer = parseInt(n1) * parseInt(n2);
    question_number = "<h4>"+ n1 + " x " + n2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' oneclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row; 
    document.getElementById("n1").value ="";
    document.getElementById("n2").value ="";
    console.log(row);
    
}

question_turn ="player1";
answer_turn ="player2";

function Check(){
    get_answer =document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        
        if(answer_turn == "player1"){
            player1_score = score1 +1;
            document.getElementById("score1").innerHTML = player1_score;
            console.log(answer_turn);
        }
        else{
            player2_score = score2 +1;
            document.getElementById("score2").innerHTML = player2_score;  
            console.log(answer_turn);
        }
    }


    if(answer_turn =="player1"){
        answer_turn ="player2";
        document.getElementById("player_answer").innerHTML = "Answer turn-" + player2;
        console.log("player_answer");
    }
    else{
        answer_turn ="player1";
        document.getElementById("player_answer").innerHTML = "Answer turn-" + player1;
        console.log("player_answer");
    }

   
        
        if(question_turn =="player1"){
            question_turn ="player2";
            document.getElementById("player_question").innerHTML = "Question turn-" + player2;
            console.log("player_question");
        }
        else{
            question_turn ="player1";
            document.getElementById("player_question").innerHTML = "Question turn-" + player1;
            console.log("player_question");
        }
    
        document.getElementById("output").innerHTML = ""; 
    }

