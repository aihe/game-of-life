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
	else if (keyCode === KEY_C)
	{
		grid.kill();
		update_game();
	}
	return (false);
}

function	keyPressedALot()
{
	if ((keyIsPressed === true) && (keyCode === SHIFT))
	{
		update_game();
	}
}
