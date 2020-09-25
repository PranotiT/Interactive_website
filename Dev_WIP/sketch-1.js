//variable for image classifier
let mobilenet;
let video;
let l = '';

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
    l = results[0].label;
  //  let prob = results[0].confidence;

  //  createP(l);
  //  createP(prob);

    mobilenet.predict(gotResults);
  }
}



function setup() {
  createCanvas(900, 830).parent("canvasContainer");
  video = createCapture(VIDEO);
  video.hide();
  background(0);

//function to generate an image classification object - stored in the variable mobilenet
//argument in it is the mobilenet model
//the mobilenet acts on the 'video' continuously
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
  background(0);
  image(video, 0, 0, 900, 830);

  fill(255);
  textSize(64);
  text(l, 10, height - 20);
}
