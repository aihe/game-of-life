const	CANVAS_WIDTH		= 800;
const	CANVAS_HEIGHT		= 600;

const	CELL_LENGTH			= 10;

const	GRID_WIDTH			= CANVAS_WIDTH / CELL_LENGTH;
const	GRID_HEIGHT			= CANVAS_HEIGHT / CELL_LENGTH;

const	BACKGROUND_COLOR	= "#AACCFF";
const	CELLS_COLOR 		= 0;
const	TXT_CELLS_GEN		= "#e567b5";

const	KEY_C				= 67;

/** Array used to find the number of neighbours of a cell. See class/Grid.js */
const	DELTAS				= [ [-1, -1], [0, -1], [1, -1],
								[-1, 0],           [1, 0],
								[-1, 1],  [0, 1],  [1, 1] ];
