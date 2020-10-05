//variable for image classifier
let mobilenet;
let video;
let l1 = '';
let l2 = '';
let l1_cached = '';
let l2_cached = '';
let countdown = 0;

//callback and promise - "model ready" - name of a function
//model needs time to load - so need to mention that it is ready.
function modelReady() {
  console.log('Model is ready..!!');
  mobilenet.predict(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
  //  console.log(results);
    l1 = round(results[0].confidence * 10000)/100 + "% it is " + results[0].label;
    l2 = round(results[1].confidence * 10000)/100 + "% it is " + results[1].label;
  //  let prob = results[0].confidence;

  //  createP(l);
  //  createP(prob);

    mobilenet.predict(gotResults);
  }
}
function setup() {
  createCanvas(900, 590).parent("canvasContainer");
  video = createCapture(VIDEO);
  video.size(900, 675);
  video.hide();
  background(0);

//function to generate an image classification object - stored in the variable mobilenet
//argument in it is the mobilenet model
//the mobilenet acts on the 'video' continuously
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
  background(0);
  translate(width, 0); // move to far corner
  scale(-1.0, 1.0);    // flip x-axis backwards
  image(video, 0, 0, 900, 675);
  translate(width, 0); // move to far corner
  scale(-1.0, 1.0);    // flip x-axis backwards
  fill(255);
  textSize(32);
  strokeWeight(4);
  stroke(0);
  if (millis() - countdown > 500) {
    l1_cached = l1;
    l2_cached = l2;
    countdown = millis();
  } // so that it updates every 0.5s instead of every frame
  text(l1_cached, 10, height - 60);
  text(l2_cached, 10, height - 20);
}
