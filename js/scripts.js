function languageSelector(event) {
  event.preventDefault();

  // create variables for results
  let ruby = document.querySelector("div#ruby");
  let cSharp = document.querySelector("div#cSharp");
  let swift = document.querySelector("div#swift");

   //setting the attribute to the results to hidden
   ruby.setAttribute("class", "hidden");
   cSharp.setAttribute('class', "hidden");
   swift.setAttribute("class", "hidden");

  //value from user input
  const singer = document.querySelector("input[name='singer']:checked").value;
  const entertainment = document.querySelector("input[name='entertainment']:checked").value;
  const computer = document.querySelector("input[name='computer']:checked").value;

  //if and else if statements...remove attribute to display results
  if (singer === "tayloSwift" && entertainment === "reading" ) {
    ruby.removeAttribute("class", "hidden");
  } else if (singer === "tayloSwift" && entertainment === "movies") {
    cSharp.removeAttribute("class", "hidden");
  }
}

window.addEventListener("load", function() {
  const form = document.getElementById("language");
  form.addEventListener("submit", languageSelector)
});
