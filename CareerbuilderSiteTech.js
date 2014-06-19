var name = prompt("What is your name?");

var startScreen = (function(input) {

	var hue = 0; 
	var direction = 1;
	var transitioning = false;

	var wasButtonDown = false;

	function centerText(ctx, text, y) {
		var measurement = ctx.measuretext(text);
		var x = (ctx.canvas.width - measurement.width) / 2;
		ctx.filltext(text, x, y);
	}
	function draw(ctx, elapse) {
		var y= ctx.canvas.height / 2
		var color = 'rgb(' + hue +',0,0)';
		ctx.clearrect(0,0, ctx.canvas.width. ctx.canvas.height);

		ctx.fillstyle = 'white';
		ctx.font = '48px monospace';
		centertext(ctx, 'CB Site Technology Teams', y);

		ctx.fillstyle = 'color';
		ctx.font = '24px monospace';
		centertext(ctx, 'click to begin', y + 30);
	}

	function update () {
		hue += 1 * direction;
		if (hue > 255) direction = -1;
		if (hue < 0) direction = 1;

		var isbuttondown = input. isbuttondown();

		var mousejustclicked = !isbuttondown && wasButtonDown;

		if (mousejustclicked && !transitioning) {
			transitioning = true;
		}

		wasButtonDown = isbuttondown;

		return {
			draw: draw,
			update: update
		};

	}
	
}());