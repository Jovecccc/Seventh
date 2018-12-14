//level1
function sayInfo(age) {
	sayInfo.prototype.call2 = function(user,age){
  console.log("name:"+user.name)
  console.log("age:"+age)
	}
}
var user = {
  name: "zzx"
}
var sayInfo = new sayInfo();
sayInfo.call2(user,100)



//level2
function addSum(a, b) {
	var c = a + b;
	return function(d) {
		c += d;
		return c;
	}
}