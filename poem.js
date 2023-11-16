//Part 1 - Define the extra information section for the poem
$("#info").html("<p>Extra info will go here.</p>");

// Part 2 - Display the first line of the poem and access info from the poem object if it exists
/*let line1, line1Text;
line1 = [{text:  "What", info: "Anaphora: The repetition of a word or phrase at the beginning of (usually successive) lines. For example, the use of What in the first four lines."}, 
    {text: "hurrying"}, {text: "human"}, {text: "tides,"}, 
    {text: "or"}, {text: "day"}, {text: "or"}, {text: "night!"}];
line1Text = "<blockquote><p>"; 
line1.map(function(word){
  let wordString;
  wordString = word.text;
  if (word.info){
    wordString = "<a href='#' data-info='"+ word.info + "'>" + wordString + "</a>";
  }
  line1Text = line1Text + wordString + " ";
});
line1Text = line1Text + "</p></blockquote>";

$("#poem").html(line1Text);*/


$.getJSON("poem.json", function(data) {}

// Part 3 - Add the click event to the poem
$("#poem a").click(function(){
    let infoText, clickedWord, clickedInfo;
    clickedWord = $( this ).text();
    clickedInfo = $( this ).data("info");
    infoText = clickedInfo;
    $("#info").html(infoText);
  });