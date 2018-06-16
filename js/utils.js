function	print_game_step()
{
	if (grid.step > 0)
	{
		textSize(20);
		fill(TXT_STEP_COLOR);
		text(grid.step, 10, 25);
	}
}