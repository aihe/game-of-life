/*
	CREATION GRILLE :

	let arr = new Array(CANVAS_HEIGHT / CELL_LENGTH);

	for (let i = 0; i < arr.length; i++)
	{
		arr[i] = new Array(CANVAS_WIDTH / CELL_LENGTH);
	}

	INSTANCIATION VALEURS GRILLE :

	for (let j = 0; j < arr.length; j++)
	{
		for (let i = 0; i < arr[j].length; i++)
		{
			arr[j][i] = new Cell(i * CELL_LENGTH, j * CELL_LENGTH);
		}
	}

	AFFICHAGE GRILLE :

	for (let j = 0; j < arr.length; j++)
	{
		for (let i = 0; i < arr[j].length; i++)
		{
			arr[j][i].display();
		}
	}
*/

function setup()
{
	createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	background(BACKGROUND_COLOR);
}

function draw()
{
	
}
