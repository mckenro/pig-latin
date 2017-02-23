//Backend
var pigLatin = function(sentence) {
  var newSentence = [];
  sentence.forEach(function(word){
    // for (var i = 0; i < word.length; i++) {
      if ((word.charAt(0) === "a")||(word.charAt(0) === "e")||(word.charAt(0) === "i")||(word.charAt(0) === "o")||(word.charAt(0) === "u")){
        return newSentence.push(word.concat("ay"));
        //return word.concat("ay");
      //}else if((word.charAt(0) !== "a")||(word.charAt(0) !== "e")||(word.charAt(0) !== "i")||(word.charAt(0) !== "o")||(word.charAt(0) !== "u") && (word.charAt(1) === "q")){
      //  return newSentence.push(word.replace(word.charAt(0),'').replace(word.charAt(1),'').replace(word.charAt(2),'').concat(word.charAt(0)) + "quay");
      }else if ((word.charAt(0) !== "a")||(word.charAt(0) !== "e")||(word.charAt(0) !== "i")||(word.charAt(0) !== "o")||(word.charAt(0) !== "u") && (word.charAt(1) !== "a")||(word.charAt(1) !== "e")||(word.charAt(1) !== "i")||(word.charAt(1) !== "o")||(word.charAt(1) !== "u")) {
        return newSentence.push(word.replace(word.charAt(0),'').replace(word.charAt(1),'').concat(word.charAt(0)).concat(word.charAt(1)) + "ay");
      }else if ((word.charAt(0) !== "a")||(word.charAt(0) !== "e")||(word.charAt(0) !== "i")||(word.charAt(0) !== "o")||(word.charAt(0) !== "u")) {
        return newSentence.push(word.replace(word.charAt(0),'').concat(word + "ay"));
      }
    // }
  });
  return newSentence;
};

//Frontend
$(document).ready(function() {
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var userInput = $("input#translate").val();
    var inputArray = userInput.split(" ");
    var result = pigLatin(inputArray);
    // var sentenceResult = fooBar(inputArray);
    $("#result").text(result);
    console.log(result);
  });
});
