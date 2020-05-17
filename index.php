<!DOCTYPE html>
<html lang="en">
  <head>
    <title>PlantAI</title>
    <meta charset="utf-8" />
    
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Acme">
   
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>


    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js" defer></script>
    <link rel="stylesheet" href="style.css" />
    <script src="script.js" defer></script>
  </head>
  <body>
    <div class="logo">
      <h1>PLANT  &ensp AI</h1>
    </div>

    <div class="tagline">
      <h2>Classifiy Plant Species</h2>
    </div>

    <img class="image" src="https://chamaileon.io/wp-content/uploads/2019/03/Drag-and-Drop-Email-Builders-1280x640.png" />

    <div class="result" >
        <div style=" float:left; margin:10px ; font-size: 30px; padding: 5px;">
            Results:
            </div>
            <h2 style=" float:left; margin:10px ; font-size: 30px; padding: 5px;">
              <p id="demo" style="padding: 10ex;"></p>
            </h2>
            <h3 style=" float:left; margin:10px ; font-size: 30px; padding: 5px;">
              
            </h3>
    </div>
    

    <div class="capture" onclick= "init()">
      <div class="record" onclick= "init()">
      <input onclick= "init()"
        class="input"
        type="file"
        accept="image/*"
        onchange="handleUpload(this.files)"
      />
    </div>
    <a href="#" class="btn btn-info btn-lg" style=" float:left; margin:70px ; font-size: 30px; padding: 10px;">
      Upload  <span class="glyphicon glyphicon-cloud-upload" style="color:rgb(0, 0, 0)";
      ></span> Image
    </a>
  </body>
  <footer style=" float:left; margin:1px ; font-size: 10px; padding: 1px;text:left;">
    <p>Created by: Abhishek Kumar</p>
    <p>Contact information: <a href="mailto:abhikk30@hotmail.com">
    abhikk30@hotmail.com</a>.</p>
  </footer>
</html>
<php

?>