let			grid = new Grid();

function	setup()
{
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function	draw()
{
	background(BACKGROUND_COLOR);
	grid.display();
	print_game_step();
}
