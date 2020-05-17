const { ml5 } = window;
const classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UrAe_YQWp/model.json", console.log);


// Use the link below instead of "MobileNet" to turn Seefood into Hotdog or not.
// "https://teachablemachine.withgoogle.com/models/-JrVsmzr/model.json"

const result = document.querySelector(".result h2");
const percent = document.querySelector(".result h3");
const image = document.querySelector(".image");


async function classifyImage() {
  const results = await classifier.classify(image);
  result.innerText = results[0].label;

}

function handleUpload(files) {
  image.src = URL.createObjectURL(files[0]);
  setTimeout(classifyImage, 50);
}
function init(){
  document.getElementById("demo").innerHTML = "<div class='lds-facebook'><div></div><div></div><div></div></div>";
  }