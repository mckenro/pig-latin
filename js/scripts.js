//Backend

var pigLatin = function(sentence) {
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < sentence.length; i++) {
    for (var j = 0; j < vowels.length; j++){
    if (sentence[i] === "a" || sentence[i] === "i") {
      return sentence.concat("ay");
    }else if ((sentence.charAt(0) !== vowels[j])&&(sentence.charAt(1) !== vowels[j])) {
      return sentence.replace(sentence.charAt(0),'').replace(sentence.charAt(1),'').concat(sentence.charAt(0)).concat(sentence.charAt(1)) + "ay";
    }else if ((sentence[i]) !== vowels[j]) {
      return sentence.replace(sentence[i],'').concat(sentence[i] + "ay");
    }
    // }else if (sentence[i] === vowels[j]){
    //   return sentence.concat("ay");
    // }
  }
  };
console.log(sentence);

};

//Frontend
$(document).ready(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var userInput = $("input#translate").val();
    var result = pigLatin(userInput);
    $("#result").text(result);
    console.log(userInput);
  });
});
