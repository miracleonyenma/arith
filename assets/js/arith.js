$(".main-btn, .output-container").ripple({
	scaleMode: false,
	maxDiameter: "100%"
}); 		

		var userx, usery, x, y, a, b, b2, c, d;
		
		
		const inputx = document.getElementById("inputx");
		const inputy = document.getElementById("inputy");
		const runBtn = document.getElementById("run");
		
		runBtn.addEventListener("click", function(){
			

			userx = inputx.value;
			usery = inputy.value;		
			x= parseInt(userx);	//dividend
			y= parseInt(usery);	//divisor
			a= Math.floor(x/y);	//quotient
			b= x%y;	//remainder
	/*		alert( "before loop b= " + b);   */
			//(dividend) = (divisor) * (quotient) + (remainder) 
				x = y * a + b;
				
			function euclidean(){
			var factorsArr = [];
			
			var factorsArrSize; //length of array
			var choice; // this is place value of the 2nd to the last item in array
			var choiceitem; //this is the 2nd to the last item in array
			
			/////////////this loop1() will generate the values of b and push it to factorsArr///////////// 
			function loop1(){
				while(b > 0){
				x=y;
				y=b;
				b=x%y;
				
				factorsArr.push(b);
				}
				}
			/////////////////////////////end of function//////////////////////////
			
			loop1();//excecute the function
			
			
			factorsArrSize = factorsArr.length;
			choice = factorsArrSize-2;
			choiceitem = factorsArr[choice];
			
			////these values have to be re-declared////
			x= parseInt(userx);	//dividend
			y= parseInt(usery);	//divisor
			a= Math.floor(x/y);	//quotient
			b2= x%y;	//remainder
			
			//(dividend) = (divisor) * (quotient) + (remainder) 
				x = y * a + b;
			
			
			
			//// this loop will use the b2 variable as the b variable has already been altered ////
				while(b2 > choiceitem){
				x=y;
				y=b2;
				b2=x%y;
				}
		/*		alert("factorsArr = " + factorsArr );
				alert("factorsArrSize = " + factorsArrSize );
				alert("choice = " + choice );
				alert("choiceitem = " + choiceitem );
				alert(b2);        */
			//// end of loop ////
			
			//GCD cleared
			
			c = parseInt(userx);
			d = parseInt(usery);
			
				var output;
				var r1;
				var r2;
				var result;
				 r1 = c/b2;
				 r2 = d/b2;
				 result = (r1 + " : " + r2);
			
			 
			if (r1&&r2 == "Infinity"){
				alert("working on a fix. the values equal infinity, that's wrong");
			}
			else{
		/*		alert( result);   */
				 
				output = document.getElementById("ratio");
				output.innerHTML = result;
			}
					
					
			}
			
			/////////b equals 0 error solution////////
			if(b == 0){
				c = parseInt(userx);
				d = parseInt(usery);
			
				var output;
				var r1;
				var r2;
				var result;
				 r1 = c/d;
				 r2 = d/d;
				 result = (r1 + ":" + r2);
				 
		/*		 alert(result);			*/
				 
				 output = document.getElementById("ratio");
				 output.innerHTML = result;
			}
			
			else{
				euclidean();
			}
			
			
			

					});
			

    
	var valA;
	var valB;
	var valC;
	var valD;
	
	var evalA;
	var evalB;
	var evalc;
	var evalD;

	const inputa = document.getElementById("inputa");
	const inputb = document.getElementById("inputb");
	const inputc = document.getElementById("inputc");
	const inputd = document.getElementById("inputd");
	const runBtn2 = document.getElementById("run2");
	inputd.disabled = true;

	runBtn2.addEventListener("click", function(){
		inputd.disabled = false;
		valA = parseInt(inputa.value);
		valB = parseInt(inputb.value);
		valC = parseInt(inputc.value);
		valD = parseInt(inputd.value);
		
		evalA = (valB * valC)/valD;
		evalB = (valA * valD)/valC;
		evalC = (valA * valD)/valB;
		evalD = (valC * valB)/valA;
		
		inputd.value = evalD;
		inputd.disabled = true;
		
		
	});
	

			

		
 
		
		//documented trail 1 (failed)
		/*
		do{
		x2 = y;
		y2 = b;
		b2 = x2%y2;
		}
		while (b>=0);
		
		*/
		
		//documented trail2 (inefficient)
		
		/*
		x=y;
		y=b;
		b=x%y;
		
		x=y;
		y=b;
		b=x%y;
		alert(b);
		*/
		
    