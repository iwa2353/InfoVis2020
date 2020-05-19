//Class
class Vec3
{
    constructor(x,y,z)
    {
	this.x = x;
	this.y = y;
	this.z = z;
    }

    add(v){
	this.x += v.x;
	this.y += v.y;
	this.z += v.z;
	return this;
    }
    
    sum(){
	this.x + this.y + this.z;
	return this;
    }
    
    min(){
	var min = Math.min(this.x,this.y,this.z)// Math method
	//var min = this.x<this.y?(this.x<this.z?this.x:this.z):(this.y<this.z?this.y:this.z);//三項演算子

	/*if(this.x<this./y){  //if and else
	    if(this.x<this.z){
		min = this.x;
	    }else{
		min = this.z;
	    }
	}else if(this.y<this.z){
	    min = this.y;
	}else{
	    min = this.z;
	}*/
	
	return min;
    }
  
    max(){
	return  this.x>this.y?(this.x>this.z?this.x:this.z):(this.y>this.z?this.y:this.z)
    }
    
    mid(){
	return (this.x!=this.min())&&(this.x!=this.max())?this.x:(this.y!=this.min())&&(this.y!=this.max())?this.y:this.z//見にくい
    }
}


