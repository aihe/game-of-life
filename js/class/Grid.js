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
		/** Grid containing all Cell's instances. */
		this.grid = new Array(GRID_HEIGHT);

		/** Current cell generation. */
		this.step = 0;
	
		/* Instanciation of cell objects. */
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
	 * Returns the cell's (x;y) neighbours.
	 * @param		{number} x 
	 * @param		{number} y
	 * @returns		{number} neighbours
	 */
	get_neighbours(x, y)
	{
		let			neighbours;

		neighbours = 0;
		DELTAS.forEach((cell) => {
			if (((x + cell[0]) >= 0) && ((x + cell[0]) < GRID_WIDTH)
				&& ((y + cell[1]) >= 0) && ((y + cell[1]) < GRID_HEIGHT)
				&& this.grid[y + cell[1]][x + cell[0]].is_alive)
			{
				neighbours++;
			}
		});
		return (neighbours);
	}

	/**
	 * Determines the next cell generation from the number of neighbours.
	 */
	next_state()
	{
		let			ret;
		let			change_list;

		change_list = [];
		for (let j = 0; j < GRID_HEIGHT; j++)
		{
			for (let i = 0; i < GRID_WIDTH; i++)
			{
				ret = this.grid[j][i].next_state(this.get_neighbours(i, j));
				if (ret >= 0)
				{
					change_list.push([i, j, ret == 1]);
				}
			}
		}
		if (change_list.length > 0)
		{
			this.step++;
			change_list.forEach((elt) => {
				this.grid[elt[1]][elt[0]].is_alive = elt[2];
			});
		}
	}

	/**
	 * Modifies the cell at the mouse position.
	 * @param		{number} mouse_x 
	 * @param		{number} mouse_y 
	 */
	toggle_cell(mouse_x, mouse_y)
	{
		let			x;
		let			y;

		if ((typeof(mouse_x) === "number") && (typeof(mouse_y) === "number"))
		{
			x = Math.floor(mouse_x / CELL_LENGTH);
			y = Math.floor(mouse_y / CELL_LENGTH);
			if ((x >= 0 && x < GRID_WIDTH) && (y >= 0 && y < GRID_HEIGHT))
			{
				this.grid[y][x].is_alive = !(this.grid[y][x].is_alive);
				this.grid[y][x].display();
			}
		}
	}

	/**
	 * Kills all the cells.
	 */
	kill()
	{
		for (let j = 0; j < GRID_HEIGHT; j++)
		{
			for (let i = 0; i < GRID_WIDTH; i++)
			{
				this.grid[j][i].is_alive = false;
			}
		}
		this.step = 0;
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
}
