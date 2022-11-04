// USER DEFINED VARIABLES
let departments = 3;	//Change the departments value to how many departments are being used in the 'Ongoing Projects' section.
						//Be sure and add the corresponding Dates.csv files to accomodate your selection.

var fadeTime = 3000;	//How long to show each group of ongoing projects, in milliseconds

var department1Name = "1st Dep";	//Name to show up before each ongoing project. Contain the name in quotes, ex. "Human Resources". If no name is to be used, leave var as ex. var department1Name;
var department2Name = "2nd Dep";
var department3Name = "3rd Dep";
var department4Name;
var department5Name;
var department6Name;
var department7Name;
var department8Name;
var department9Name;
var department10Name;

// *** DO NOT EDIT THESE VARS OR STATEMENTS ***
if (departments == 10) {console.log("10 departments used.");var csvSheets = ['Dates.csv','Dates2.csv','Dates3.csv','Dates4.csv','Dates5.csv','Dates6.csv','Dates7.csv','Dates8.csv','Dates9.csv','Dates10.csv'];uploadCsv(csvSheets[0]);uploadCsv(csvSheets[1]);uploadCsv(csvSheets[2]);uploadCsv(csvSheets[3]);uploadCsv(csvSheets[4]);uploadCsv(csvSheets[5]);uploadCsv(csvSheets[6]);uploadCsv(csvSheets[7]);uploadCsv(csvSheets[8]);uploadCsv(csvSheets[9]);}
if (departments == 9) {console.log("9 departments used.");var csvSheets = ['Dates.csv','Dates2.csv','Dates3.csv','Dates4.csv','Dates5.csv','Dates6.csv','Dates7.csv','Dates8.csv','Dates9.csv'];uploadCsv(csvSheets[0]);uploadCsv(csvSheets[1]);uploadCsv(csvSheets[2]);uploadCsv(csvSheets[3]);uploadCsv(csvSheets[4]);uploadCsv(csvSheets[5]);uploadCsv(csvSheets[6]);uploadCsv(csvSheets[7]);uploadCsv(csvSheets[8]);}
if (departments == 8) {console.log("8 departments used.");var csvSheets = ['Dates.csv','Dates2.csv','Dates3.csv','Dates4.csv','Dates5.csv','Dates6.csv','Dates7.csv','Dates8.csv'];uploadCsv(csvSheets[0]);uploadCsv(csvSheets[1]);uploadCsv(csvSheets[2]);uploadCsv(csvSheets[3]);uploadCsv(csvSheets[4]);uploadCsv(csvSheets[5]);uploadCsv(csvSheets[6]);uploadCsv(csvSheets[7]);}
if (departments == 7) {console.log("7 departments used.");var csvSheets = ['Dates.csv','Dates2.csv','Dates3.csv','Dates4.csv','Dates5.csv','Dates6.csv','Dates7.csv'];uploadCsv(csvSheets[0]);uploadCsv(csvSheets[1]);uploadCsv(csvSheets[2]);uploadCsv(csvSheets[3]);uploadCsv(csvSheets[4]);uploadCsv(csvSheets[5]);uploadCsv(csvSheets[6]);}
if (departments == 6) {console.log("6 departments used.");var csvSheets = ['Dates.csv','Dates2.csv','Dates3.csv','Dates4.csv','Dates5.csv','Dates6.csv'];uploadCsv(csvSheets[0]);uploadCsv(csvSheets[1]);uploadCsv(csvSheets[2]);uploadCsv(csvSheets[3]);uploadCsv(csvSheets[4]);uploadCsv(csvSheets[5]);}
if (departments == 5) {console.log("5 departments used.");var csvSheets = ['Dates.csv','Dates2.csv','Dates3.csv','Dates4.csv','Dates5.csv'];uploadCsv(csvSheets[0]);uploadCsv(csvSheets[1]);uploadCsv(csvSheets[2]);uploadCsv(csvSheets[3]);uploadCsv(csvSheets[4]);}
if (departments == 4) {console.log("4 departments used.");var csvSheets = ['Dates.csv','Dates2.csv','Dates3.csv','Dates4.csv'];uploadCsv(csvSheets[0]);uploadCsv(csvSheets[1]);uploadCsv(csvSheets[2]);uploadCsv(csvSheets[3]);}
if (departments == 3) {console.log("3 departments used.");var csvSheets = ['Dates.csv','Dates2.csv','Dates3.csv'];uploadCsv(csvSheets[0]);uploadCsv(csvSheets[1]);uploadCsv(csvSheets[2]);}
if (departments == 2) {console.log("2 departments used.");var csvSheets = ['Dates.csv','Dates2.csv'];uploadCsv(csvSheets[0]);uploadCsv(csvSheets[1]);}
if (departments == 1) {console.log("1 department used.");var csvSheets = ['Dates.csv'];uploadCsv(csvSheets[0]);}

var endDates0 = [];
var endDates1 = [];
var endDates2 = [];
var endDates3 = [];
var endDates4 = [];
var endDates5 = [];
var endDates6 = [];
var endDates7 = [];
var endDates8 = [];
var endDates9 = [];

var projectNames0 =[];
var projectNames1 =[];
var projectNames2 =[];
var projectNames3 =[];
var projectNames4 =[];
var projectNames5 =[];
var projectNames6 =[];
var projectNames7 =[];
var projectNames8 =[];
var projectNames9 =[];

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var seconds = [];
var days = [];
var distance = []
var timer;

var switchCounter = 0;

$.ajax({
   async: false   
});
////////////////
////////////////-- Splitting CSV by the comma delimiter - The Crappy Prequel
////////////////
function uploadCsv(e) {
	var s = new XMLHttpRequest;
	s.onreadystatechange = function() {
		if (4 == this.readyState && 200 == this.status) {
			csvData = this.responseText, newline = csvData.split("\n");
			for (let s = 0; s < csvSheets.length; s++) e == csvSheets[0] ? sheet0 = newline : e == csvSheets[1] ? sheet1 = newline : e == csvSheets[2] ? sheet2 = newline : e == csvSheets[3] ? sheet3 = newline : e == csvSheets[4] ? sheet4 = newline : e == csvSheets[5] ? sheet5 = newline : e == csvSheets[6] ? sheet6 = newline : e == csvSheets[7] ? sheet7 = newline : e == csvSheets[8] ? sheet8 = newline : e == csvSheets[9] && (sheet9 = newline)
		}
	}, s.open("GET", e), s.send()
}////////////////
////////////////-- Splitting CSV by the comma delimiter - Part 1
////////////////
function getDate(e) {
	endDates = [], endDatesTemp = [], commaSplit = [];
	for (let t = 0; t < e.length; t++) commaSplit[t] = e[t].split(",");
	results = [].concat(...commaSplit);
	for (let e = 0; e < results.length; e++) e % 2 && (endDatesTemp[e] = new Date(results[e]));
	for (let e = 1; e < endDatesTemp.length; e += 2) endDates.push(endDatesTemp[e]);
	return endDates
}////////////////
////////////////-- Splitting CSV by the comma delimiter - Part 2: The Return
////////////////
function getProjectName(e) {
	projectNames = [], endDatesTemp = [], projectNamesTemp = [], commaSplit = [];
	for (let t = 0; t < e.length; t++) commaSplit[t] = e[t].split(",");
	results = [].concat(...commaSplit);
	for (let e = 0; e < results.length; e++) e % 2 || (projectNamesTemp[e] = results[e]);
	for (let e = 0; e < projectNamesTemp.length; e += 2) projectNames.push(projectNamesTemp[e]);
	return projectNames
}////////////////
////////////////-- Timer determinations
////////////////
function addItem(container, template, endDatesF, projectNamesF) {
	var now = new Date();

	for (let i = 0; i < endDatesF.length; i++) {
		distance[i] = endDatesF[i].getTime() - now.getTime();
	}
	for (let x = 0; x < endDatesF.length; x++) {
		days[x] = Math.floor(distance[x] / _day);
		seconds[x] = Math.floor((distance[x] % _minute) / _second);
		let num = days[x];
		let sec = seconds[x];
		let project = projectNamesF[x];
		container.append(Mustache.render(template, {
			project,
			num,
			sec
		}));
	}
}
////////////////
////////////////-- Section declares what and where information will be written in the HTML
////////////////
function update(){const tmpl=$('#item_template0').html()
const container=$('#app0');for(let i=0;i<endDates0.length;i++){container.html("");addItem(container,tmpl,endDates0,projectNames0)}}
function update1(){const tmpl1=$('#item_template0').html()
const container1=$('#app1');for(let i=0;i<endDates1.length;i++){container1.html("");addItem(container1,tmpl1,endDates1,projectNames1)}}
function update2(){const tmpl2=$('#item_template0').html()
const container2=$('#app2');for(let i=0;i<endDates2.length;i++){container2.html("");addItem(container2,tmpl2,endDates2,projectNames2)}}
function update3(){const tmpl3=$('#item_template0').html()
const container3=$('#app3');for(let i=0;i<endDates2.length;i++){container3.html("");addItem(container3,tmpl3,endDates3,projectNames3)}}
function update4(){const tmpl4=$('#item_template0').html()
const container4=$('#app4');for(let i=0;i<endDates2.length;i++){container4.html("");addItem(container4,tmpl4,endDates4,projectNames4)}}
function update5(){const tmpl5=$('#item_template0').html()
const container5=$('#app5');for(let i=0;i<endDates2.length;i++){container5.html("");addItem(container5,tmpl5,endDates5,projectNames5)}}
function update6(){const tmpl6=$('#item_template0').html()
const container6=$('#app6');for(let i=0;i<endDates2.length;i++){container6.html("");addItem(container6,tmpl6,endDates6,projectNames6)}}
function update7(){const tmpl7=$('#item_template0').html()
const container7=$('#app7');for(let i=0;i<endDates2.length;i++){container7.html("");addItem(container7,tmpl7,endDates7,projectNames7)}}
function update8(){const tmpl8=$('#item_template0').html()
const container8=$('#app8');for(let i=0;i<endDates2.length;i++){container8.html("");addItem(container8,tmpl8,endDates8,projectNames8)}}
function update9(){const tmpl9=$('#item_template0').html()
const container9=$('#app9');for(let i=0;i<endDates2.length;i++){container9.html("");addItem(container9,tmpl9,endDates9,projectNames9)}}
////////////////
////////////////-- This is some dirty dog scripting that refreshes the page if any of the sheet variables are undefined until they are defined. Don't ask.
////////////////
$(document).ready(function(){

const result = waitForElement();
function waitForElement(){
if(departments==1){if((typeof sheet0==='undefined')){location.reload(!0)}}
if(departments==2){if((typeof sheet0==='undefined')||(typeof sheet1==='undefined')){location.reload(!0)}}
if(departments==3){if((typeof sheet0==='undefined')||(typeof sheet1==='undefined')||(typeof sheet2==='undefined')){location.reload(!0)}}
if(departments==4){if((typeof sheet0==='undefined')||(typeof sheet1==='undefined')||(typeof sheet2==='undefined')||(typeof sheet3==='undefined')){location.reload(!0)}}
if(departments==5){if((typeof sheet0==='undefined')||(typeof sheet1==='undefined')||(typeof sheet2==='undefined')||(typeof sheet3==='undefined')||(typeof sheet4==='undefined')){location.reload(!0)}}
if(departments==6){if((typeof sheet0==='undefined')||(typeof sheet1==='undefined')||(typeof sheet2==='undefined')||(typeof sheet3==='undefined')||(typeof sheet4==='undefined')||(typeof sheet5==='undefined')){location.reload(!0)}}
if(departments==7){if((typeof sheet0==='undefined')||(typeof sheet1==='undefined')||(typeof sheet2==='undefined')||(typeof sheet3==='undefined')||(typeof sheet4==='undefined')||(typeof sheet5==='undefined')||(typeof sheet6==='undefined')){location.reload(!0)}}
if(departments==8){if((typeof sheet0==='undefined')||(typeof sheet1==='undefined')||(typeof sheet2==='undefined')||(typeof sheet3==='undefined')||(typeof sheet4==='undefined')||(typeof sheet5==='undefined')||(typeof sheet6==='undefined')||(typeof sheet7==='undefined')){location.reload(!0)}}
if(departments==9){if((typeof sheet0==='undefined')||(typeof sheet1==='undefined')||(typeof sheet2==='undefined')||(typeof sheet3==='undefined')||(typeof sheet4==='undefined')||(typeof sheet5==='undefined')||(typeof sheet6==='undefined')||(typeof sheet7==='undefined')||(typeof sheet8==='undefined')){location.reload(!0)}}
if(departments==10){if((typeof sheet0==='undefined')||(typeof sheet1==='undefined')||(typeof sheet2==='undefined')||(typeof sheet3==='undefined')||(typeof sheet4==='undefined')||(typeof sheet5==='undefined')||(typeof sheet6==='undefined')||(typeof sheet7==='undefined')||(typeof sheet8==='undefined')||(typeof sheet9==='undefined')){location.reload(!0)}}
}
////////////////
////////////////-- Declaring enddates, projectnames and sheets
////////////////
if (departments == 1) {endDates0 = getDate(sheet0);projectNames0  = getProjectName(sheet0);}
if (departments == 2) {endDates0 = getDate(sheet0);projectNames0  = getProjectName(sheet0);endDates1 = getDate(sheet1);projectNames1  = getProjectName(sheet1);}
if (departments == 3) {endDates0 = getDate(sheet0);projectNames0  = getProjectName(sheet0);endDates1 = getDate(sheet1);projectNames1  = getProjectName(sheet1);endDates2 = getDate(sheet2);projectNames2  = getProjectName(sheet2);}
if (departments == 4) {endDates0 = getDate(sheet0);projectNames0  = getProjectName(sheet0);endDates1 = getDate(sheet1);projectNames1  = getProjectName(sheet1);endDates2 = getDate(sheet2);projectNames2  = getProjectName(sheet2);endDates3 = getDate(sheet3);projectNames3  = getProjectName(sheet3);}
if (departments == 5) {endDates0 = getDate(sheet0);projectNames0  = getProjectName(sheet0);endDates1 = getDate(sheet1);projectNames1  = getProjectName(sheet1);endDates2 = getDate(sheet2);projectNames2  = getProjectName(sheet2);endDates3 = getDate(sheet3);projectNames3  = getProjectName(sheet3);endDates4 = getDate(sheet4);projectNames4  = getProjectName(sheet4);}
if (departments == 6) {endDates0 = getDate(sheet0);projectNames0  = getProjectName(sheet0);endDates1 = getDate(sheet1);projectNames1  = getProjectName(sheet1);endDates2 = getDate(sheet2);projectNames2  = getProjectName(sheet2);endDates3 = getDate(sheet3);projectNames3  = getProjectName(sheet3);endDates4 = getDate(sheet4);projectNames4  = getProjectName(sheet4);endDates5 = getDate(sheet5);projectNames5  = getProjectName(sheet5);}
if (departments == 7) {endDates0 = getDate(sheet0);projectNames0  = getProjectName(sheet0);endDates1 = getDate(sheet1);projectNames1  = getProjectName(sheet1);endDates2 = getDate(sheet2);projectNames2  = getProjectName(sheet2);endDates3 = getDate(sheet3);projectNames3  = getProjectName(sheet3);endDates4 = getDate(sheet4);projectNames4  = getProjectName(sheet4);endDates5 = getDate(sheet5);projectNames5  = getProjectName(sheet5);endDates6 = getDate(sheet6);projectNames6  = getProjectName(sheet6);}
if (departments == 8) {endDates0 = getDate(sheet0);projectNames0  = getProjectName(sheet0);endDates1 = getDate(sheet1);projectNames1  = getProjectName(sheet1);endDates2 = getDate(sheet2);projectNames2  = getProjectName(sheet2);endDates3 = getDate(sheet3);projectNames3  = getProjectName(sheet3);endDates4 = getDate(sheet4);projectNames4  = getProjectName(sheet4);endDates5 = getDate(sheet5);projectNames5  = getProjectName(sheet5);endDates6 = getDate(sheet6);projectNames6  = getProjectName(sheet6);endDates7 = getDate(sheet7);projectNames7  = getProjectName(sheet7);}
if (departments == 9) {endDates0 = getDate(sheet0);projectNames0  = getProjectName(sheet0);endDates1 = getDate(sheet1);projectNames1  = getProjectName(sheet1);endDates2 = getDate(sheet2);projectNames2  = getProjectName(sheet2);endDates3 = getDate(sheet3);projectNames3  = getProjectName(sheet3);endDates4 = getDate(sheet4);projectNames4  = getProjectName(sheet4);endDates5 = getDate(sheet5);projectNames5  = getProjectName(sheet5);endDates6 = getDate(sheet6);projectNames6  = getProjectName(sheet6);endDates7 = getDate(sheet7);projectNames7  = getProjectName(sheet7);endDates8 = getDate(sheet8);projectNames8  = getProjectName(sheet8);}
if (departments == 10) {endDates0 = getDate(sheet0);projectNames0  = getProjectName(sheet0);endDates1 = getDate(sheet1);projectNames1  = getProjectName(sheet1);endDates2 = getDate(sheet2);projectNames2  = getProjectName(sheet2);endDates3 = getDate(sheet3);projectNames3  = getProjectName(sheet3);endDates4 = getDate(sheet4);projectNames4  = getProjectName(sheet4);endDates5 = getDate(sheet5);projectNames5  = getProjectName(sheet5);endDates6 = getDate(sheet6);projectNames6  = getProjectName(sheet6);endDates7 = getDate(sheet7);projectNames7  = getProjectName(sheet7);endDates8 = getDate(sheet8);projectNames8  = getProjectName(sheet8);endDates9 = getDate(sheet9);projectNames9  = getProjectName(sheet9);}
})
////////////////
////////////////-- Determines fade timing for ongoing projects
////////////////
$(document).ready(function(){
	setInterval(
		function(){if(departments==1){if(switchCounter==0){$("#departmentName").text(department1Name+":");update()}}
		if(departments==2){if(switchCounter==0){$('.container2,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department1Name+":");$('.container1,#departmentName').delay(500).fadeIn(250)});update();switchCounter++}else if(switchCounter==1){$('.container1,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department2Name+":");$('.container2,#departmentName').delay(500).fadeIn(250)});update1();switchCounter=0}}
		if(departments==3){if(switchCounter==0){$('.container3,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department1Name+":");$('.container1,#departmentName').delay(500).fadeIn(250)});update();switchCounter++}else if(switchCounter==1){$('.container1,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department2Name+":");$('.container2,#departmentName').delay(500).fadeIn(250)});update1();switchCounter++}else if(switchCounter==2){$('.container2,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department3Name+":");$('.container3,#departmentName').delay(500).fadeIn(250)});update2();switchCounter=0}}
		if(departments==4){if(switchCounter==0){$('.container4,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department1Name+":");$('.container1,#departmentName').delay(500).fadeIn(250)});update();switchCounter++}else if(switchCounter==1){$('.container1,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department2Name+":");$('.container2,#departmentName').delay(500).fadeIn(250)});update1();switchCounter++}else if(switchCounter==2){$('.container2,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department3Name+":");$('.container3,#departmentName').delay(500).fadeIn(250)});update2();switchCounter++}else if(switchCounter==3){$('.container3,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department4Name+":");$('.container4,#departmentName').delay(500).fadeIn(250)});update3();switchCounter=0}}
		if(departments==5){if(switchCounter==0){$('.container5,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department1Name+":");$('.container1,#departmentName').delay(500).fadeIn(250)});update();switchCounter++}else if(switchCounter==1){$('.container1,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department2Name+":");$('.container2,#departmentName').delay(500).fadeIn(250)});update1();switchCounter++}else if(switchCounter==2){$('.container2,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department3Name+":");$('.container3,#departmentName').delay(500).fadeIn(250)});update2();switchCounter++}else if(switchCounter==3){$('.container3,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department4Name+":");$('.container4,#departmentName').delay(500).fadeIn(250)});update3();switchCounter++}else if(switchCounter==4){$('.container4,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department5Name+":");$('.container5,#departmentName').delay(500).fadeIn(250)});update4();switchCounter=0}}
		if(departments==6){if(switchCounter==0){$('.container6,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department1Name+":");$('.container1,#departmentName').delay(500).fadeIn(250)});update();switchCounter++}else if(switchCounter==1){$('.container1,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department2Name+":");$('.container2,#departmentName').delay(500).fadeIn(250)});update1();switchCounter++}else if(switchCounter==2){$('.container2,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department3Name+":");$('.container3,#departmentName').delay(500).fadeIn(250)});update2();switchCounter++}else if(switchCounter==3){$('.container3,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department4Name+":");$('.container4,#departmentName').delay(500).fadeIn(250)});update3();switchCounter++}else if(switchCounter==4){$('.container4,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department5Name+":");$('.container5,#departmentName').delay(500).fadeIn(250)});update4();switchCounter++}else if(switchCounter==5){$('.container5,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department6Name+":");$('.container6,#departmentName').delay(500).fadeIn(250)});update5();switchCounter=0}}
		if(departments==7){if(switchCounter==0){$('.container7,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department1Name+":");$('.container1,#departmentName').delay(500).fadeIn(250)});update();switchCounter++}else if(switchCounter==1){$('.container1,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department2Name+":");$('.container2,#departmentName').delay(500).fadeIn(250)});update1();switchCounter++}else if(switchCounter==2){$('.container2,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department3Name+":");$('.container3,#departmentName').delay(500).fadeIn(250)});update2();switchCounter++}else if(switchCounter==3){$('.container3,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department4Name+":");$('.container4,#departmentName').delay(500).fadeIn(250)});update3();switchCounter++}else if(switchCounter==4){$('.container4,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department5Name+":");$('.container5,#departmentName').delay(500).fadeIn(250)});update4();switchCounter++}else if(switchCounter==5){$('.container5,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department6Name+":");$('.container6,#departmentName').delay(500).fadeIn(250)});update5();switchCounter++}else if(switchCounter==6){$('.container6,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department7Name+":");$('.container7,#departmentName').delay(500).fadeIn(250)});update6();switchCounter=0}}
		if(departments==8){if(switchCounter==0){$('.container8,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department1Name+":");$('.container1,#departmentName').delay(500).fadeIn(250)});update();switchCounter++}else if(switchCounter==1){$('.container1,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department2Name+":");$('.container2,#departmentName').delay(500).fadeIn(250)});update1();switchCounter++}else if(switchCounter==2){$('.container2,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department3Name+":");$('.container3,#departmentName').delay(500).fadeIn(250)});update2();switchCounter++}else if(switchCounter==3){$('.container3,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department4Name+":");$('.container4,#departmentName').delay(500).fadeIn(250)});update3();switchCounter++}else if(switchCounter==4){$('.container4,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department5Name+":");$('.container5,#departmentName').delay(500).fadeIn(250)});update4();switchCounter++}else if(switchCounter==5){$('.container5,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department6Name+":");$('.container6,#departmentName').delay(500).fadeIn(250)});update5();switchCounter++}else if(switchCounter==6){$('.container6,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department7Name+":");$('.container7,#departmentName').delay(500).fadeIn(250)});update6();switchCounter++}else if(switchCounter==7){$('.container7,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department8Name+":");$('.container8,#departmentName').delay(500).fadeIn(250)});update7();switchCounter=0}}
		if(departments==9){if(switchCounter==0){$('.container9,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department1Name+":");$('.container1,#departmentName').delay(500).fadeIn(250)});update();switchCounter++}else if(switchCounter==1){$('.container1,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department2Name+":");$('.container2,#departmentName').delay(500).fadeIn(250)});update1();switchCounter++}else if(switchCounter==2){$('.container2,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department3Name+":");$('.container3,#departmentName').delay(500).fadeIn(250)});update2();switchCounter++}else if(switchCounter==3){$('.container3,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department4Name+":");$('.container4,#departmentName').delay(500).fadeIn(250)});update3();switchCounter++}else if(switchCounter==4){$('.container4,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department5Name+":");$('.container5,#departmentName').delay(500).fadeIn(250)});update4();switchCounter++}else if(switchCounter==5){$('.container5,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department6Name+":");$('.container6,#departmentName').delay(500).fadeIn(250)});update5();switchCounter++}else if(switchCounter==6){$('.container6,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department7Name+":");$('.container7,#departmentName').delay(500).fadeIn(250)});update6();switchCounter++}else if(switchCounter==7){$('.container7,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department8Name+":");$('.container8,#departmentName').delay(500).fadeIn(250)});update7();switchCounter++}else if(switchCounter==8){$('.container8,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department9Name+":");$('.container9,#departmentName').delay(500).fadeIn(250)});update8();switchCounter=0}}
		if(departments==10){if(switchCounter==0){$('.container10,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department1Name+":");$('.container1,#departmentName').delay(500).fadeIn(250)});update();switchCounter++}else if(switchCounter==1){$('.container1,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department2Name+":");$('.container2,#departmentName').delay(500).fadeIn(250)});update1();switchCounter++}else if(switchCounter==2){$('.container2,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department3Name+":");$('.container3,#departmentName').delay(500).fadeIn(250)});update2();switchCounter++}else if(switchCounter==3){$('.container3,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department4Name+":");$('.container4,#departmentName').delay(500).fadeIn(250)});update3();switchCounter++}else if(switchCounter==4){$('.container4,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department5Name+":");$('.container5,#departmentName').delay(500).fadeIn(250)});update4();switchCounter++}else if(switchCounter==5){$('.container5,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department6Name+":");$('.container6,#departmentName').delay(500).fadeIn(250)});update5();switchCounter++}else if(switchCounter==6){$('.container6,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department7Name+":");$('.container7,#departmentName').delay(500).fadeIn(250)});update6();switchCounter++}else if(switchCounter==7){$('.container7,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department8Name+":");$('.container8,#departmentName').delay(500).fadeIn(250)});update7();switchCounter++}else if(switchCounter==8){$('.container8,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department9Name+":");$('.container9,#departmentName').delay(500).fadeIn(250)});update8();switchCounter++}else if(switchCounter==9){$('.container9,#departmentName').delay(0).fadeOut(250,function(){$("#departmentName").text(department10Name+":");$('.container10,#departmentName').delay(500).fadeIn(250)});update9();switchCounter=0}}},
	fadeTime);	//See user vars at top for this value
});