function Guanzi(){
	this.shangguanzigao = parseInt(Math.random() * 200); 		//上管子高
	this.feng = 150;											//缝高
	this.xiaguanzigao = 400 - this.shangguanzigao - this.feng;	//下管子高

	//x
	this.x = 750;

	guanziArr.push(this);
}
Guanzi.prototype.update = function(){
	this.x -= 2;
}
Guanzi.prototype.render = function(){
	ctx.drawImage(R.pipe_chongxia , 0 , 320 - this.shangguanzigao , 52 , this.shangguanzigao , this.x , 0 , 52 , this.shangguanzigao);
	ctx.drawImage(R.pipe_chongshang , 0 , 0 , 52 , this.xiaguanzigao , this.x , this.shangguanzigao + this.feng , 52 , this.xiaguanzigao);
}