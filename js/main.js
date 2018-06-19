function	preload()
{
	grid = new Grid();
}

function	setup()
{
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	grid.display();
}

function	draw()
{
	keyPressedALot();
}
