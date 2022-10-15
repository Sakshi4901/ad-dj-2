function draw() {
	image(video, 0, 0, 600, 500);

	fill("#FF0000");
	stroke("#FF0000");
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
}

song=""
function preload()
{
	song = loadSound("music.mp3");
    song = loadSound("music2.mp3");
    
}
