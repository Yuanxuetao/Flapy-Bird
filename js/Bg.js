function Bg(){
	this.x = 0;
	arr.push(this);
}
Bg.prototype.update = function(){
	//向左移动，和我们的跑马灯轮播一个意思，到一个克隆点就要拉回来。
	this.x -= 2;
	if(this.x < -288){
		this.x = 0;
	}
}
Bg.prototype.render = function(){
	//画背景，为啥画4次呢？因为防止空白穿帮
	ctx.drawImage(R.bg_day , this.x , 0);
	ctx.drawImage(R.bg_day , this.x + 288 , 0);
	ctx.drawImage(R.bg_day , this.x + 288 * 2 , 0);
	ctx.drawImage(R.bg_day , this.x + 288 * 3 , 0);

	//画大地，为啥画4次呢？因为防止空白穿帮
	ctx.drawImage(R.land , this.x + 0 , 512 - 112);
	ctx.drawImage(R.land , this.x + 336 , 512 - 112);
	ctx.drawImage(R.land , this.x + 336 * 2 , 512 - 112);
	ctx.drawImage(R.land , this.x + 336 * 3 , 512 - 112);
}