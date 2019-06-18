/*
Exercise 3:

Given a sentence, move the first letter of each word to the end of it,
then add "ay" to the end of the word. Punctuation should be left unaffected.
*/
function pig_latin(str) {
  var res = str.split(" ");
  var pig_str = "";
  for (var i = 0; i < res.length; i++) {
    //regexp check for special characters
    if (/[~`!#$%\^&*+=\-\[\]\\';,./{}|\\":<>\?]/g.test(res[i])) {
      pig_str += res[i];
    } else {
      //create the new string and add it to the new sentence
      pig_str +=
        res[i].substring(1, res[i].length) + res[i].substring(0, 1) + "ay ";
    }
  }

  return pig_str;
}

console.log(pig_latin("Hello world !"));
