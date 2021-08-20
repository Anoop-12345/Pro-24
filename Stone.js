class Stone{
	constructor(x,y)
	{
	// assign options to the stone
	var options = {
		restitution:0.8,
		friction:0.9,
		density:12
	
	}
	    this.body=Bodies.rectangle(x,y,100,100, options);
		this.width=100;
		this.height=100;
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;
			var angle=this.body.angle;		
			push()
			translate(pos.x,pos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("blue");
			//draw the rectangle here to display the stone
			rect(0,0,this.width,this.height);

			pop()
	}

};