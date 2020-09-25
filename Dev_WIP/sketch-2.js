
let mobilenet;
let predictor;
let video;
let value = 0;
let slider;
let addButton;
let trainButton;
let samples = 0;  //calculate training images captured

function modelReady() {
  console.log('Model is ready!!!');
}

function videoReady() {
  console.log('Video is ready!!!');
}

function whileTraining(loss) {
  if (loss == null) {
    console.log('Training Complete');
    predictor.predict(gotResults);
  } else {
    console.log(loss);
  }
}

function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    // updated to work with newer version of ml5
    // value = result;
    value = result.value;
    predictor.predict(gotResults);
  }
}

function setup() {
  createCanvas(900, 500).parent("canvasContainer");
  video = createCapture(VIDEO);
  video.size(640, 590);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  predictor = mobilenet.regression(video, videoReady);

  slider = createSlider(0, 1, 0.5, 0.01).parent("slider");

  addButton = createButton('Capture Training Image').parent("addButton");
  addButton.mousePressed(function () {

    predictor.addImage(slider.value());
    samples++    //calculate training images captured
  });


  trainButton = createButton('Train').parent("trainButton");
  trainButton.mousePressed(function () {
    predictor.train(whileTraining);
  });
}

function draw() {
  background(0);
  translate(width, 0); // move to far corner
  scale(-1.0, 1.0);    // flip x-axis backwards
  image(video, 0, 0, 640, 590).resize(900, 0);

  translate(width, 0); // move to far corner
  scale(-1.0, 1.0);    // flip x-axis backwards
  ellipseMode(CENTER);
  fill(255, 204, 0);
  ellipse(value * width, height / 2, 100, 100);

  //display training images captured
  fill(255);
  textSize(24);
  text("Captured training images: " + samples, 10, height - 10);

}
