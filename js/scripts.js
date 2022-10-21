function languageSelector(event) {
  event.preventDefault();

  let ruby = document.querySelector('div#ruby');
  let cSharp = document.querySelector('div#cSharp');
  let swift = document.querySelector('div#swift');

  let singer = document.querySelector("input[name='singer']:checked").value;
  let entertainment = document.querySelector("input[name='entertainment']:checked").value;
  let computer = document.querySelector("input[name='computer']:checked").value;

  ruby.setAttribute("class", "hidden");
  cSharp.setAttribute('class', "hidden");
  swift.setAttribute("class", "hidden");

  if (singer === 'tayloSwift' && entertainment === 'reading' ) {
    ruby.removeAttribute("class", "hidden");
  }
  else if (singer === "tayloSwift" && entertainment === "movies") {
    cSharp.removeAttribute("class", "hidden");
  }
}

window.addEventListener("load", function() {
  const form = document.getElementById("language");
  form.addEventListener("submit", languageSelector)
});
