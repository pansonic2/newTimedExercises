listQ = ["1. Who ... you?", "2. What ... your name?", "3. Where ... you from?", "4. How old ... you?", "5. I ... Maria.", "6. I ... 20.", "7. I ... a consultant.", "8. They ... at work.", "9. \n I \n ... \n f \n i \n n \n e \n .", "10. Where ... your parents?"];

function timedText() {
  i = 0;
  setTimeout(myTimeout, 20);
  }
  function myTimeout() {
    if (listQ[i]){ 
    document.getElementById("demo").innerHTML = listQ[i];
    i += 1;
    setTimeout(myTimeout, 1800);
    }
    else {
      document.getElementById("demo").innerHTML = "End of List.";
    }
  }
  
  listQQuestions = ["1. There is a guy.", 
  "2. He gave me a ride.", 
  "3. He was making $50,000 a year.", 
  "4. I agree.", 
  "5. It's very confusing.", 
  "6. It's a hot topic on Twitter.",
  "7. They don't have a lot of savings.", 
  "8. Then I went to various politicians.", 
  "9. I am perfectly happy.", 
  "10. I would actually help improve it."];
  
  function timedTextQQuestions() {
    i = 0;
    setTimeout(myTimeout1, 20);
    }
    function myTimeout1() {
      if (listQQuestions[i]){ 
      document.getElementById("demo").innerHTML = listQQuestions[i];
      i += 1;
      setTimeout(myTimeout1, 2500);
      }
      else {
        document.getElementById("demo").innerHTML = "End of List.";
      }
    }
    


