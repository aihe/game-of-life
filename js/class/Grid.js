/**
 * Class representing a grid.
 * 
 * A grid is represented by a double array of Cells objects, and a turn field
 * which represents the advancement stage of the game of life.
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
		this.grid = new Array(GRID_HEIGHT);
		this.step = 0;
		for (let j = 0; j < GRID_HEIGHT; j++)
		{
			this.grid[j] = new Array(GRID_WIDTH);
			for (let i = 0; i < GRID_WIDTH; i++)
			{
				this.grid[j][i] = new Cell(i * CELL_LENGTH, j * CELL_LENGTH);
			}
		}
	}

	/**
	 * Returns the cell's (x;y) neighbors.
	 * @param		{number} x 
	 * @param		{number} y
	 * @returns		{number} neighbors
	 */
	get_neighbors(x, y)
	{
		let			neighbors;

		neighbors = 0;
		return (neighbors);
	}

	/**
	 * Displays the grid on the Canvas.
	 */
	display()
	{
		for (let j = 0; j < GRID_HEIGHT; j++)
		{
			for (let i = 0; i < GRID_WIDTH; i++)
			{
				this.grid[j][i].display();
			}
		}
	}

	/**
	 * Modifies the cell at the mouse position.
	 * @param		{number} mouse_x 
	 * @param		{number} mouse_y 
	 */
	update(mouse_x, mouse_y)
	{
		let			x;
		let			y;

		if ((typeof(mouse_x) === "number") && (typeof(mouse_y) === "number"))
		{
			x = Math.floor(mouse_x / 10);
			y = Math.floor(mouse_y / 10);
			if ((x >= 0 && x < GRID_WIDTH) && (y >= 0 && y < GRID_HEIGHT))
			{
				this.grid[y][x].is_alive = !(this.grid[y][x].is_alive);
			}
		}
	}
}
