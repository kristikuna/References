//LOOPS

//do..while

var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

//while
var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x +=n;
}

//for
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//jQuery GET request log the data from the request
$(function(){
  $.get('https://www.reddit.com/r/aww/.json', function(data){
    console.log(data);
  });
});

//OR

$.get("https://www.reddit.com/r/aww/.json", function(responseBody) {
// Put all your code to handle the response inside this function.
console.log(responseBody);
});

//ASYNCHRONOUS
var message = "before";
$.get("https://www.reddit.com/r/aww/.json", function(responseBody) {
message = "success";
});
console.log(message); // > "before"

//OR
var message;
$.get("https://www.reddit.com/r/aww/.json", function(responseBody) {
message = responseBody;
});
console.log(message); // > undefined
console.log(responseBody); // > undefined

//SUCEES AND FAILURE THEN() for success and catch() failure
$.get("https://www.reddit.com/r/aww/.json").then(function(responseBody) {
console.log("THEN", responseBody.data.children[0].data.title);
}).catch(function() {
console.log("CATCH");
}).always(function() {
console.log("ALWAYS");
});
