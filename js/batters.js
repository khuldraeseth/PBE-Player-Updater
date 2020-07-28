//declare global variables

var banked;
var hitArch;
var fieldArch;
var fError;
var range;
var arm;
var turnDP;
var catchAB;
var babipVsLHP;
var babipVsRHP;
var avoidKLHP;
var avoidKRHP;
var gapVsLHP;
var gapVsRHP;
var powerVsLHP;
var powerVsRHP;
var eyeVsRHP;
var eyeVsLHP;
var speed;
var steal;
var bunt;
var tpeEarned;
var tpeToSpend;
var pitchesBought = 0;
var mins=[];
var max=[];
//pitchesBought variable declared to stop NaN on updateStats()

const battingAttrs = [
    "BABIP vs LHP",
    "BABIP vs RHP",
    "Avoid K's vs LHP",
    "Avoid K's vs RHP",
    "Gap vs LHP",
    "Gap vs RHP",
    "Power vs LHP",
    "Power vs RHP",
    "Eye/Patience vs LHP",
    "Eye/Patience vs RHP",
    "Speed (Base & Run)",
    "Stealing Ability",
    "Bunting (Both)",
    "Fielding Range",
    "Fielding Error",
    "Fielding/Catching Arm",
    "Turn Double Play",
    "Catcher Ability"
];

//receives longString from pullData.js
//gets Banked TPE in one of three ways
function getStats(longString){
    banked = getAttrs(longString, /Bank(?:ed(?: TPE)?)?: (\d+)/)[0];

    if (isNaN(banked)) {
        $("#error").html("oopsie woopsie");
    }

	if(!isNaN(banked)){
	    $('#error').html("");
	    $('#putBNK').html("Banked: " + banked);
	    getStatsBatter(longString);
    	getStatsFielding(longString);
		minMax(longString);
    	//Launches the smooth scrolling down to Step 2 in moveSteps.js
		
    	stepTwo();
	}
}

//experimental function to get mins/maxes WITHOUT archetype

function minMax(str){
	var toSearch = "MIN:";
	var indices = [];
    for(var pos = str.indexOf(toSearch); pos !== -1; pos = str.indexOf(toSearch, pos + 1)) {
        indices.push(pos);
    }

	mins = [];
	for(var uses = 0 ; uses < indices.length ; uses++){
		var number = parseInt(str.substring(indices[uses]+4,indices[uses]+8));
		mins.push(number);
	}
	
	toSearch = "MAX:";
	indices = [];
    for(var pos = str.indexOf(toSearch); pos !== -1; pos = str.indexOf(toSearch, pos + 1)) {
        indices.push(pos);
    }
	
	max = [];
	for(var uses = 0 ; uses < indices.length ; uses++){
		var number = parseInt(str.substring(indices[uses]+4,indices[uses]+8));
		max.push(number);
	}
	
}

const getAttrs = function(pull, re) {
    return pull.match(re).slice(1).map(s => parseInt(s));
}

const regexen = {
    "BABIP vs LHP": /\(MIN: (\d+)\) \(MAX: (\d+)\) BABIP vs LHP: (\d+)/,
    "BABIP vs RHP": /\(MIN: (\d+)\) \(MAX: (\d+)\) BABIP vs RHP: (\d+)/,
    "Avoid K's vs LHP": /\(MIN: (\d+)\) \(MAX: (\d+)\) Avoid K&#39;s vs LHP: (\d+)/,
    "Avoid K's vs RHP": /\(MIN: (\d+)\) \(MAX: (\d+)\) Avoid K&#39;s vs RHP: (\d+)/,
    "Gap vs LHP": /\(MIN: (\d+)\) \(MAX: (\d+)\) Gap vs LHP: (\d+)/,
    "Gap vs RHP": /\(MIN: (\d+)\) \(MAX: (\d+)\) Gap vs RHP: (\d+)/,
    "Power vs LHP": /\(MIN: (\d+)\) \(MAX: (\d+)\) Power vs LHP: (\d+)/,
    "Power vs RHP": /\(MIN: (\d+)\) \(MAX: (\d+)\) Power vs RHP: (\d+)/,
    "Eye/Patience vs LHP": /\(MIN: (\d+)\) \(MAX: (\d+)\) Eye\/Patience vs LHP: (\d+)/,
    "Eye/Patience vs RHP": /\(MIN: (\d+)\) \(MAX: (\d+)\) Eye\/Patience vs RHP: (\d+)/,
    "Speed (Base & Run)": /\(MIN: (\d+)\) \(MAX: (\d+)\) Speed \(Base &amp; Run\): (\d+)/,
    "Stealing Ability": /\(MIN: (\d+)\) \(MAX: (\d+)\) Stealing Ability: (\d+)/,
    "Bunting (Both)": /\(MIN: (\d+)\) \(MAX: (\d+)\) Bunting \(Both\): (\d+)/,
    "Fielding Range": /\(MIN: (\d+)\) \(MAX: (\d+)\) Fielding Range: (\d+)/,
    "Fielding Error": /\(MIN: (\d+)\) \(MAX: (\d+)\) Fielding Error: (\d+)/,
    "Fielding/Catching Arm": /\(MIN: (\d+)\) \(MAX: (\d+)\) Fielding\/Catching Arm: (\d+)/,
    "Turn Double Play": /\(MIN: (\d+)\) \(MAX: (\d+)\) Turn Double Play: (\d+)/,
    "Catcher Ability": /\(MIN: (\d+)\) \(MAX: (\d+)\) Catcher Ability: (\d+)/
};

//Function designed to pull fielding and hitting archetypes from the string in getStats()
//Also pulls all fielding stats

function getStatsFielding(postGET){
    let min = {};
    let max = {};
    let current = {};

    const arch = postGET.match(/Hitting Archetype:<\/b> (.+?)(?= \(e\.g\.)/)[1];
	$('#putHAR').html("Hitting Archetype: " + arch);

    const fieldArch = "foo";
	$('#putFAR').html("Fielding Archetype: " + fieldArch);
		     
    for (const attr of ["Fielding Range", "Fielding Error", "Fielding/Catching Arm", "Turn Double Play", "Catcher Ability"]) {
        const minMaxCurrent = getAttrs(postGET, regexen[attr]);
        min[attr] = minMaxCurrent[0];
        max[attr] = minMaxCurrent[1];
        current[attr] = minMaxCurrent[2];
    }

    const fError = current["Fielding Error"];
	$('#putERR').html("Fielding Error: " + fError);
    
    const range = current["Fielding Range"];
	$('#putRNG').html("Fielding Range: " + range);
	
    const arm = current["Fielding/Catching Arm"];
	$('#putARM').html("Fielding/Catching Arm: " + arm);

    const turnDP = current["Turn Double Play"];
	$('#putTDP').html("Turn Double Play: " + turnDP);
	
    const catchAB = current["Catcher Ability"];
	$('#putCAB').html("Catcher Ability: " + catchAB);
}

//Function designed to pull batting stats from the string in GetStats()

function getStatsBatter(postGET){
    let min = {};
    let max = {};
    let current = {};

    for (const attr of battingAttrs) {
        const minMaxCurrent = getAttrs(postGET, regexen[attr]);
        min[attr] = minMaxCurrent[0];
        max[attr] = minMaxCurrent[1];
        current[attr] = minMaxCurrent[2];
    }

    const babipVsLHP = current["BABIP vs LHP"];
	$('#putBVL').html("BABIP VS LHP: " + babipVsLHP);
		     
	const babipVsRHP = current["BABIP vs RHP"];
    $('#putBVR').html("BABIP VS RHP: " + babipVsRHP);
		     
	const avoidKLHP = current["Avoid K's vs LHP"];
    $('#putAKL').html("Avoid K's vs LHP: " + avoidKLHP);
		     
	const avoidKRHP = current["Avoid K's vs RHP"];
    $('#putAKR').html("Avoid K's vs RHP: " + avoidKRHP);
	
	const gapVsLHP = current["Gap vs LHP"];
    $('#putGVL').html("Gap vs LHP: " + gapVsLHP);
	
	const gapVsRHP = current["Gap vs RHP"];
    $('#putGVR').html("Gap vs RHP: " + gapVsRHP);
	
	const powerVsLHP = current["Power vs LHP"];
    $('#putPVL').html("Power vs LHP: " + powerVsLHP);
	
	const powerVsRHP = current["Power vs RHP"];
    $('#putPVR').html("Power vs RHP: " + powerVsRHP);
	
	const eyeVsLHP = current["Eye/Patience vs LHP"];
    $('#putEVL').html("Eye/Patience vs LHP: " + eyeVsLHP);
	
	const eyeVsRHP = current["Eye/Patience vs RHP"];
    $('#putEVR').html("Eye/Patience vs RHP: " + eyeVsRHP);
	
	const speed = current["Speed (Base & Run)"];
    $('#putSPD').html("Speed: " + speed);
	
	const steal = current["Stealing Ability"];
    $('#putSTL').html("Stealing Ability: " + steal);
	
	const bunt = current["Bunting (Both)"];
    $('#putBNT').html("Bunting (Both): " + bunt);
}

//Using the data pulled from getStatsFielding() and getStatsBatter() fills in the table for step4
//Also fills in minimums and maximums for each archetype
//EDIT THIS SECTION IF ARCHETYPE MINS/MAXS ARE CHANGED

function fillStats(){
    $('#bankedTPE').html("Banked TPE: " + banked);
    $('#tpeEarn').html("Earned TPE: " + tpeEarned);
    tpeToSpend = banked + tpeEarned;
    $('#tpeToUse').html("TPE to Spend: " + tpeToSpend);
    
    $('#stat1').html(babipVsLHP);
    $('#stat2').html(babipVsRHP);
    $('#stat3').html(avoidKLHP);
    $('#stat4').html(avoidKRHP);
    $('#stat5').html(gapVsLHP);
    $('#stat6').html(gapVsRHP);
    $('#stat7').html(powerVsLHP);
    $('#stat8').html(powerVsRHP);
    $('#stat9').html(eyeVsLHP);
    $('#stat10').html(eyeVsRHP);
    $('#stat11').html(speed);
    $('#stat12').html(steal);
    $('#stat13').html(bunt);
    $('#stat14').html(range);
    $('#stat15').html(fError);
    $('#stat16').html(arm);
    $('#stat17').html(turnDP);
    $('#stat18').html(catchAB);
    
	for(var goThrough = 0; goThrough < mins.length ; goThrough++){
		var goThroughOne = goThrough + 1;
		$('#minStat' + goThroughOne).html(mins[goThrough]);
		$('#maxStat' + goThroughOne).html(max[goThrough]);
	}
	$('#newStat1').attr({min: mins[0],max: max[0],value: babipVsLHP});
    $('#newStat2').attr({min: mins[1],max: max[1],value: babipVsRHP});
    $('#newStat3').attr({min: mins[2],max: max[2],value: avoidKLHP});
    $('#newStat4').attr({min: mins[3],max: max[3],value: avoidKRHP});
    $('#newStat5').attr({min: mins[4],max: max[4],value: gapVsLHP});
    $('#newStat6').attr({min: mins[5],max: max[5],value: gapVsRHP});
    $('#newStat7').attr({min: mins[6],max: max[6],value: powerVsLHP});
    $('#newStat8').attr({min: mins[7],max: max[7],value: powerVsRHP});
    $('#newStat9').attr({min: mins[8],max: max[8],value: eyeVsLHP});
    $('#newStat10').attr({min: mins[9],max: max[9],value: eyeVsRHP});
    $('#newStat11').attr({min: mins[10],max: max[10],value: speed});
    $('#newStat12').attr({min: mins[11],max: max[11],value: steal});
    $('#newStat13').attr({min: mins[12],max: max[12],value: bunt});
	$('#newStat14').attr({min: mins[13],max: max[13],value: range});
    $('#newStat15').attr({min: mins[14],max: max[14],value: fError});
    $('#newStat16').attr({min: mins[15],max: max[15],value: arm});
    $('#newStat17').attr({min: mins[16],max: max[16],value: turnDP});
    $('#newStat18').attr({min: mins[17],max: max[17],value: catchAB});
	
    //calls tpespent.js
    updateTPESpent();
}