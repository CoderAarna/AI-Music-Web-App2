song = "";
song1 = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function preload(){
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Pose Net is initialized!');
}
function draw(){
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + "Right Wrist Y = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + "Left Wrist Y = " + leftWristY);
    }
}