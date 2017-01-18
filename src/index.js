require('./index.sass')
import ball from './assets/ball.png'

let game=new Phaser.Game(800,600,Phaser.AUTO,'demo-1',{
	preload:()=>{
		game.load.image('ball',ball);
	},
	create:()=>{
		let ballSprite=game.add.sprite(0,0,'ball');
		ballSprite.anchor.set(0.5);
		ballSprite.position.x=50;
		ballSprite.position.y=50;

		// apply velocity
		// game.physics.enable(ballSprite,Phaser.Physics.ARCADE);
		// ballSprite.body.velocity.x=100;

		// listener sprite input
		// ballSprite.inputEnabled=true;
		// let textSprite=game.add.text(50,0,'',{fill:'#ffffff'});
		// ballSprite.events.onInputDown.add(()=>{
		// 	textSprite.text=`i am clicked ${new Date()}`;
		// })

		// sprite follow input

	}
});




