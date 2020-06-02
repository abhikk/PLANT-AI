const { ml5 } = window;
const classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LILYnK8KB/model.json", console.log);

// Use the link below instead of "MobileNet" to turn Seefood into Hotdog or not.
// "https://teachablemachine.withgoogle.com/models/-JrVsmzr/model.json"


const result = document.querySelector(".result h2");
const percent = document.querySelector(".result h3");
const demo2 = document.querySelector(".result h4");

const image = document.querySelector(".image");


async function classifyImage() {
    const results = await classifier.classify(image);
    result.innerText = results[0].label;
    percent.innerText = results[0].confidence.toFixed(3) * 84 + '%';
    demo2.innerHTML = "<button onclick='myClone()'>More Info</button>";
}

function handleUpload(files) {
    image.src = URL.createObjectURL(files[0]);
    setTimeout(classifyImage, 50);
}

function init() {
    document.querySelector(".result h3").innerHTML = " <div class='progress'><div class='indeterminate'></div></div> ";
    document.querySelector(".result h2").innerHTML = "";
    document.getElementById("demo1").innerHTML = "";
    document.querySelector(".result h4").innerHTML = "";
}

function myClone() {
    var x = document.querySelector(".result h2").innerText;
    var str = "ROSES";
    var str1 = "SUNFLOWER";
    var str2 = "DAISY";
    var str3 = "DANDELION";
    var str4 = "TULIP";
    if (x.localeCompare(str) == 0) {
        document.getElementById("demo1").innerHTML = "<p>A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears</p>";
    } else if (x.localeCompare(str1) == 0) {
        document.getElementById("demo1").innerHTML = "Helianthus is a genus of plants comprising about 70 species. Except for three species in South America, all Helianthus species are native to North America and Central America";
    } else if (x.localeCompare(str2) == 0) {
        document.getElementById("demo1").innerHTML = "Bellis perennis is a common European species of daisy, of the family Asteraceae, often considered the archetypal species of that name";
    } else if (x.localeCompare(str3) == 0) {
        document.getElementById("demo1").innerHTML = "Taraxacum is a large genus of flowering plants in the family Asteraceae, which consists of species commonly known as dandelions";
    } else if (x.localeCompare(str4) == 0) {
        document.getElementById("demo1").innerHTML = "Tulips form a genus of spring-blooming perennial herbaceous bulbiferous geophytes. The flowers are usually large, showy and brightly colored, generally red, pink, yellow, or white.";
    }
}