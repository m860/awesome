require('./index.sass')

let assets={
	background:require('./assets/background.png')
	,plane:require('./assets/plane.png')
};

let scale=window.innerHeight/931;

class Main extends Phaser.State{
	preload(){
		for(let name in assets){
			this.load.image(name,assets[name]);
		}
	}
	create(){
		let background=this.add.sprite(0,0,'background');
		background.scale.x=scale;
		background.scale.y=scale;

		let plane=this.add.sprite(0,0,'plane');
		plane.scale.x=plane.scale.y=scale;
		plane.anchor.set(0.5);
		plane.inputEnabled=true;

		this.plane=plane;
	}
	update(){
		if(this.input.keyboard.isDown(Phaser.Keyboard.W)){
			this.plane.y-=4;
		}
		if(this.input.keyboard.isDown(Phaser.Keyboard.S)){
			this.plane.y+=4;
		}
		if(this.input.keyboard.isDown(Phaser.Keyboard.A)){
			this.plane.x-=4;
		}
		if(this.input.keyboard.isDown(Phaser.Keyboard.D)){
			this.plane.x+=4;
		}
	}
}

let game=new Phaser.Game(1440*scale,931*scale,Phaser.AUTO,'game');
game.state.add(Main.name,new Main(),true);




