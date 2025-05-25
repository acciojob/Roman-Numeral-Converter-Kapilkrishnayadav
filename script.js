function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
let ans="";
	while(num>0)
	if(num>=1000)
	{
		ans=ans+'M';
		num=num-1000;
	}
	else
	if(num>=900)
	{
		ans=ans+"CM";
		num=num-900;
	}
	else
	if(num>=500)
	{
		ans=ans+'D'
		num=num-500;
	}
	else
	if(num>=400)
	{
		ans=ans+"CD";
		num=num-400;
	}
	else
	if(num>=100)
	{
		ans=ans+'C';
		num=num-100;
	}
	else
	if(num>=90)
	{
		ans=ans+"XC";
		num=num-90;
	}
	else
	if(num>=50)
	{
		ans=ans+"L";
		num=num-50;
	}
	else
	if(num>=40)
	{
		ans=ans+"XL"
		num=num-40;
	}
	else
	if(num>=10)
	{
		ans=ans+'X';
		num=num-10;
	}
	else
	if(num>=9)
	{
		ans=ans+"IX";
		num=num-9;
	}
	else
	if(num>=5)
	{
		ans=ans+'V';
		num=num-5;
	}
	else
	if (num>=4) {
		ans=ans+"IV";
		num=num-4;
	}
	else
	if(num>=1)
	{
		ans=ans+"I";
		num=num-1;
	}
	
	return ans;
  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
