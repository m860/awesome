require('./index.sass')
import ball from './assets/ball.png'

let game=new Phaser.Game(800,600,Phaser.AUTO,'demo-1',{
	preload:()=>{
		game.load.image('ball',ball);
	},
	create:()=>{
		game.add.sprite(0,0,'ball');
	}
});




