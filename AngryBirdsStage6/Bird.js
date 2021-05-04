class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png")
    this.trejectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x>10 && this.body.position.x>200){
    var position = [this.body.position.x, this.body.position.y]
    this.trejectory.push(position)
    }

    for(var I = 0; I<this.trejectory.length; I++){
    image(this.smokeImage, this.trejectory[I][0], this.trejectory[I][1])
    }
}
}
