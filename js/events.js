function	mousePressed()
{
	grid.toggle_cell(mouseX, mouseY);
	return (false);
}

function	keyReleased()
{
	if (keyCode === ENTER)
	{
		grid.next_state();
	}
	return (false);
}