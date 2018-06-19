function	print_cells_generation()
{
	if (grid.step > 0)
	{
		textSize(20);
		fill(TXT_CELLS_GEN);
		text(grid.step, 10, 25);
	}
}

function	update_game()
{
	grid.next_state();
	grid.display();
	print_cells_generation();
}
