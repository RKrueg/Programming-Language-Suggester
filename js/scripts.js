function languageSelector(event) {
  event.preventDefault();

  let ruby = document.querySelector("div#ruby");
  let cSharp = document.querySelector("div#cSharp");
  let swift = document.querySelector("div#swift");

   ruby.setAttribute("class", "hidden");
   cSharp.setAttribute('class', "hidden");
   swift.setAttribute("class", "hidden");

  let singer = document.querySelector("input[name='singer']:checked").value;
  let computer = document.querySelector("input[name='computer']:checked").value;
  let entertainment = document.querySelector("input[name='entertainment']:checked").value
  
  if (singer === "taylorSwift" && computer === "mac") {
    swift.removeAttribute("class", "hidden");
  } else if (singer === "taylorSwift" && computer === "windows") {
    swift.removeAttribute("class", "hidden");
   } else if (singer === "nirvana" && computer === "windows") {
    ruby.removeAttribute("class", "hidden");
  } else if (singer === "nirvana" && computer === "mac") {
    cSharp.removeAttribute("class", "hidden");
  } else if (singer === "eltonJohn" && computer === "mac") {
    cSharp.removeAttribute("class", "hidden");
  } else if (singer === "eltonJohn" && computer === "windows") {
    ruby.removeAttribute("class", "hidden");
  }
}

window.addEventListener("load", function() {
  const form = document.getElementById("language");
  form.addEventListener("submit", languageSelector)
});
