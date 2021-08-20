class Iron{
	constructor(x,y){
	// assign options to iron
	var options = {
		restitution:0.8,
		friction:3,
		density:30
	}
	this.body=Bodies.rectangle(x,y,90,60, options)
	this.width=90;
	this.height=90;
	World.add(world, this.body);

	}
	display()
	{      
			var pos=this.body.position;	
			var angle = this.body.angle;	
			push()
			translate(pos.x,pos.y);
			rotate(angle);
			rectMode(CENTER);
			fill("brown");
			//draw the rectangle here to display the stone
			rect(0,0,this.width,this.height);

			pop()
	}

};