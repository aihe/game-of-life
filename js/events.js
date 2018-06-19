function	mousePressed()
{
	grid.toggle_cell(mouseX, mouseY);
	return (false);
}

function	keyReleased()
{
	if (keyCode === ENTER)
	{
		update_game();
	}
	return (true);
}

function	keyPressedALot()
{
	if ((keyIsPressed === true) && (keyCode === SHIFT))
	{
		update_game();
	}
}
