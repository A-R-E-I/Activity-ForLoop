window.addEventListener("load",addListener);
let Whatquestion = 0, tally = 0, sum = 0 
var GradeAmount, GradeInput	
function addListener()
{
	document.getElementById("txtDisplay").disabled = true;
	document.getElementById("btnAvg").addEventListener("click",QuestionSelect);
}

function QuestionSelect()
{ 
	document.getElementById("txtInputnum").focus();
	if(Whatquestion < 2)
	{
		Whatquestion = Whatquestion + 1;
	}
	
	switch(Whatquestion)
	{
		case 1:
			GradeAmount = document.getElementById("txtInputnum").value;
			Check(GradeAmount);
			break;
			
		case 2:
			GradeInput = document.getElementById("txtInputnum").value;
			Check(GradeInput);
			
			for(let i=0; i < GradeAmount; i++)
				{	
					sum = parseInt(sum) + parseInt(GradeInput);
					GradeInput = 0;
					document.getElementById("txtInputnum").value = null;
				}
				
			ResultAvg(GradeAmount)
			break;
	}
	
}

function ResultAvg(Gradenum)
{
	tally = tally + 1;
	if(tally == Gradenum)
		{
			Calculate = sum / Gradenum
			Average = Calculate / 100
			Average = Average * 4
			document.getElementById("txtDisplay").value = Average;
		}
}

function Check(numEnter)
{
	Modnum = numEnter % 1
	if(Modnum != 0 || numEnter < 0 || numEnter > 100 || numEnter == "")
	{
		numEnter = " ";
		document.getElementById("txtInputnum").value = " ";
		alert("Please enter a whole number from 0 - 100")	
	}
	else
	{
		document.getElementById("numofgrades").textContent = "Enter Grade:";
		document.getElementById("txtInputnum").value = " ";
	}
}


