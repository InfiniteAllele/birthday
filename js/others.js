 var i = 0;
 var j = 0;
 var k = 0;
 var l = 0;
 var z = 0;
 var txt =
     "The bestest friend to the one who is dearest to me. ";
 var story =
     "From someone who hasn't met you yet, but still knows you pretty well to wish you a lifetime of happiness and good health.";
 var speed = 80;

 function message() {
     if (i < txt.length) {
         document.getElementById("she").innerHTML += txt.charAt(i);
         i++;
         setTimeout(message, speed);

         if (i == txt.length) {
             from();
         }
     }

 }

 function from() {
     if (j < story.length) {
         document.getElementById("from").innerHTML += story.charAt(j);
         j++;
         setTimeout(from, speed - 10);

     }
 }