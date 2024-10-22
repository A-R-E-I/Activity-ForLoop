window.addEventListener("load",addListener);
let Whatquestion = 0
function addListener()
{
	document.getElementById("txtDisplay").disabled = true;
	document.getElementById("btnAvg").addEventListener("click",QuestionSelect);
}

function QuestionSelect()
{ 
	if(Whatquestion < 2)
	{
		Whatquestion = Whatquestion + 1;
	}
	
	switch(Whatquestion)
	{
		case 1:
			GradeAmount = document.getElementById("txtInputnum").value;
			document.getElementById("txtInputnum").value = " ";
			document.getElementById("numofgrades").textContent = "Enter Grade:";
			break;
			
		case 2:
			let sum = 0
			for(let i=0; i < GradeAmount; i++)
				{	
					
					GradeInput = document.getElementById("txtInputnum").value;
					sum = parseInt(sum) + parseInt(GradeInput);
					GradeInput = 0;
					document.getElementById("txtInputnum").value = "";
					
				}
			document.getElementById("txtDisplay").value = sum;
			break;
	}
	
}

