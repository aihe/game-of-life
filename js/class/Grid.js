/**
 * Class representing a grid.
 * 
 * A grid is represented by a double array of Cells objects.
 * 
 * @author	aihe
 * @version	0.1
 */
class Grid
{
	/**
	 * Creates a Grid instance.
	 */
	constructor()
	{
		this.length_y = CANVAS_HEIGHT / CELL_LENGTH;
		this.length_x = CANVAS_WIDTH / CELL_LENGTH;
		this.grid = new Array(this.length_y);
		for (let j = 0; j < this.length_y; j++)
		{
			this.grid[j] = new Array(this.length_x);
			for (let i = 0; i < this.length_x; i++)
			{
				this.grid[j][i] = new Cell(i * CELL_LENGTH, j * CELL_LENGTH);
			}
		}
	}

	/**
	 * Displays the grid on the Canvas.
	 */
	display()
	{
		for (let j = 0; j < this.length_y; j++)
		{
			for (let i = 0; i < this.length_x; i++)
			{
				this.grid[j][i].display();
			}
		}
	}
}
