function Niao(){
	this.x = 365;		//中点x
 	this.y = 200;		//中点y
  	this.rotate = 0;	//旋转角度
  	this.state = 0;		//0表示下落，1表示上升，这是自己的有限状态
  	this.dy = 0;		//下坠加速度
  	this.upF = 0;		//上升帧编号

	arr.push(this);
}
Niao.prototype.update = function(){
	if(this.state == 0){
		//旋转鸟头
		this.rotate += 0.08;
		//鸟头不能超过垂直
		if(this.rotate > 90 / 57.3){
			this.rotate = 90 / 57.3;
		}
	}else if(this.state == 1){
		this.upF++;		//上升帧编号上升

		//只能上升4帧
		if(this.upF > 4){
			this.state = 0;
		}
	}
	//下坠加速度变化
	this.dy += 1.3;
	//下坠
	this.y += this.dy;

	if(this.y < 0){
		this.y = 0;
	}

	
  	//小鸟的包裹盒
  	this.BBy1 = this.y - 10;
  	this.BBy2 = this.y + 10;
  	this.BBx1 = this.x - 17;
  	this.BBx2 = this.x + 17;
}
Niao.prototype.render = function(){
	//制作旋转的套路，稍微理解下就行。
	ctx.save();							//保存世界
	ctx.translate(this.x , this.y);		//移动世界的原点到自己的中心
	ctx.rotate(this.rotate);			//旋转世界
	ctx.drawImage(R.bird2_0 , -24,-24);	//画鸟，因为原点已经移动了，所以此时坐标-24，-24
	ctx.restore();						//恢复世界
}
//用户点击鼠标做的事情
Niao.prototype.fly = function(){
	//改变自己的状态
	this.state = 1;
	//让自己的y增量为负数，才能往上面飞
	this.dy = -16;
	//改变鸟头为扬起，这样漂亮，鸟有一个感觉
	this.rotate = -0.8;
	//自己的小帧编号清0，小帧编号用来统计向上飞了几帧，飞够帧数要自动下降
	this.upF = 0;
}