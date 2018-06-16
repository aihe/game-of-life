/*
	CREATION GRILLE :

	let arr = new Array(CANVAS_HEIGHT / 10);

	for (let i = 0; i < arr.length; i++)
	{
		arr[i] = new Array(CANVAS_WIDTH / 10);
	}

	INSTANCIATION VALEURS GRILLE :

	for (let j = 0; j < arr.length; j++)
	{
		for (let i = 0; i < arr[j].length; i++)
		{
			arr[j][i] = new Cell(i * 10, j * 10);
			if (i % 2 == 0)
			{
				arr[j][i].is_alive = false;
			}
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
