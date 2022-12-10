// initializing: sort > organize
// on action: score > sort > organize > highlight
var scale = 1.0;
var maxItemNum = 200;
let infoBoxCache = "";




// sorting
function sortItems(){
	items.sort(function(a,b){
		return b.score - a.score;
	});
}
function sortItemsByDate(){
	items.sort(function(a,b){
		return new Date(b.createDate) - new Date(a.createDate);
	});
}





// load user date
function loadUserData(){
	let toggleAccumulation = document.querySelector('#chkbox-toggle-accumulation');
	let searchDesc = document.querySelector('#chkbox-search-desc');
	let toggleHighlight = document.querySelector('#chkbox-toggle-highlight');
	let toggleEssential = document.querySelector('#chkbox-toggle-essential');
	let autoClear = document.querySelector('#chkbox-toggle-auto-clear');

	let excludeCharaItem = document.querySelector('#exclude-chara-item');
	let excludeEventItem = document.querySelector('#exclude-event-item');
	let excludeSkillItem = document.querySelector('#exclude-skill-item');
	let excludeTipItem = document.querySelector('#exclude-tip-item');
	let excludeRaceItem = document.querySelector('#exclude-race-item');

	
	if(localStorage.getItem('umaHelperToggleAccumulation') == 't'){ toggleAccumulation.checked = true; }
	if(localStorage.getItem('umaHelperSearchDesc') == 't'){ searchDesc.checked = true; }
	if(localStorage.getItem('umaHelperToggleHighlight') == 'f'){ toggleHighlight.checked = false; }
	if(localStorage.getItem('umaHelperToggleEssential') == 'f'){ toggleEssential.checked = false; }
	if(localStorage.getItem('umaHelperAutoClear') == 'f'){ autoClear.checked = false; }

	if(localStorage.getItem('umaHelperExcludeCharaItem') == 't'){ excludeCharaItem.checked = true }
	if(localStorage.getItem('umaHelperExcludeEventItem') == 't'){ excludeEventItem.checked = true }
	if(localStorage.getItem('umaHelperExcludeSkillItem') == 't'){ excludeSkillItem.checked = true }
	if(localStorage.getItem('umaHelperExcludeTipItem') == 't'){ excludeTipItem.checked = true }
	if(localStorage.getItem('umaHelperExcludeRaceItem') == 't'){ excludeRaceItem.checked = true }
	
	toggleAccumulation.addEventListener('change', function(){
		if(toggleAccumulation.checked == true){
			localStorage.setItem('umaHelperToggleAccumulation', 't');
		} else{
			localStorage.setItem('umaHelperToggleAccumulation', 'f');
		}
		search();
	});
	searchDesc.addEventListener('change', function(){
		if(searchDesc.checked == true){
			localStorage.setItem('umaHelperSearchDesc', 't');
		} else{
			localStorage.setItem('umaHelperSearchDesc', 'f');
		}
		search();
	});
	toggleHighlight.addEventListener('change', function(){
		if(toggleHighlight.checked == true){
			localStorage.setItem('umaHelperToggleHighlight', 't');
		} else{
			localStorage.setItem('umaHelperToggleHighlight', 'f');
		}
		search();
	});
	toggleEssential.addEventListener('change', function(){
		if(toggleEssential.checked == true){
			localStorage.setItem('umaHelperToggleEssential', 't');
		} else{
			localStorage.setItem('umaHelperToggleEssential', 'f');
		}
		search();
	});
	autoClear.addEventListener('change', function(){
		if(autoClear.checked == true){
			localStorage.setItem('umaHelperAutoClear', 't');
		} else{
			localStorage.setItem('umaHelperAutoClear', 'f');
		}
		search();
	});

	excludeCharaItem.addEventListener('change', function(){
		if(excludeCharaItem.checked == true){
			localStorage.setItem('umaHelperExcludeCharaItem', 't');
		} else{
			localStorage.setItem('umaHelperExcludeCharaItem', 'f');
		}
		search();
	});
	excludeEventItem.addEventListener('change', function(){
		if(excludeEventItem.checked == true){
			localStorage.setItem('umaHelperExcludeEventItem', 't');
		} else{
			localStorage.setItem('umaHelperExcludeEventItem', 'f');
		}
		search();
	});
	excludeSkillItem.addEventListener('change', function(){
		if(excludeSkillItem.checked == true){
			localStorage.setItem('umaHelperExcludeSkillItem', 't');
		} else{
			localStorage.setItem('umaHelperExcludeSkillItem', 'f');
		}
		search();
	});
	excludeTipItem.addEventListener('change', function(){
		if(excludeTipItem.checked == true){
			localStorage.setItem('umaHelperExcludeTipItem', 't');
		} else{
			localStorage.setItem('umaHelperExcludeTipItem', 'f');
		}
		search();
	});
	excludeRaceItem.addEventListener('change', function(){
		if(excludeRaceItem.checked == true){
			localStorage.setItem('umaHelperExcludeRaceItem', 't');
		} else{
			localStorage.setItem('umaHelperExcludeRaceItem', 'f');
		}
		search();
	});
}





// create content
function organizeContent(threshold){
	const content = document.querySelector(".content");
	//while (content.firstChild) content.removeChild(content.firstChild);
	content.innerHTML = ""; // This method is faster than the one above when there are many items.
	
	currentItemNum = 0;
	for(let i = 0, len = items.length; i < len; i++){
		if(currentItemNum >= maxItemNum){
			break
		}
		if(items[i]['score'] >= 1){
			createItem(items[i]);
			currentItemNum += 1;
		}
	}
	
	if(content.children.length == 1){
		let e = content.children[0].children[0];
		e.open = true;
	}
	if(content.children.length == 0){
		let e = document.createElement('div');
		let inner
			= "<div class='nothing-here'>"
			+ "<img src='./imgs/common/missing.png' width='100px'>"
			+ "<div style='margin-top:10px'>검색결과가 없습니다.</div>"
			+ "</div>";
		e.innerHTML = inner;
		content.appendChild(e);
	}
	
	//skill, condition info
	let ts = document.querySelectorAll(".skill-info");
	for(let i = 0, len = ts.length; i < len; i++){
		ts[i].addEventListener('click', function(){
			showSkillInfo(this);
		});
	}
	ts = document.querySelectorAll(".condition-info");
	for(let i = 0, len = ts.length; i < len; i++){
		ts[i].addEventListener('click', function(){
			showConditionInfo(this);
		});
	}
	let details = document.getElementsByTagName('details');
	for(let i = 0, len = details.length; i < len; i++){
		details[i].addEventListener('toggle', function(){
			let box = document.querySelector('.info-box');
			box.style.display = "none";
		});
	}
	
	//highlight
	let chkBox = document.querySelector("#chkbox-toggle-highlight");
	let val = document.querySelector("#value").value;
	if( chkBox.checked && val != "" ){
		highlight(val);
	}
	
	keydown = false; // prevent duplicating event
}
function highlight(val){
	let searchDesc = document.querySelector("#chkbox-search-desc");
	let keywords = val.split(" ");
	
	for( let i = 0; i < keywords.length; i++ ){
		let firstChar = keywords[i].substr(0,1);
		let lastChar = keywords[i].substr(-1,1);
		if( firstChar == '\"' && lastChar == '\"' ){
			keywords[i] = keywords[i].substr(1, keywords[i].length-2);
		}
	}
	
	for( let keyword of keywords ){
		if( keyword.length > 0 && keyword != " " ){
			let ts = document.getElementsByClassName("title");
			for( let i = 0, len = ts.length; i < len; i++ ){
				let content = ts[i];
				let instance = new Mark(content);
				instance.mark(keyword);
			}
		}
		
		if( searchDesc.checked ){
			if( keyword.length > 0 && keyword != " " ){
				let ds = document.getElementsByClassName("desc");
				for( let i = 0, len = ds.length; i < len; i++ ){
					let content = ds[i];
					let instance = new Mark(content)
					instance.mark(keyword);
				}
			}
		}
	}
}






// zoom
function zoomIn(){
	scale += 0.1;
	scale = Math.round(scale*10)/10;
	setScale();
}
function zoomOut(){
	scale -= 0.1;
	scale = Math.round(scale*10)/10;
	setScale();
}
function setScale(){
	document.body.style.zoom = scale;
	document.querySelector(".zoom-value").innerHTML = Math.round(scale*100) + "%";
	localStorage.setItem('umaHelperScale', scale);
}
if( localStorage.getItem('umaHelperScale') !== null ){
	scale = parseFloat(localStorage.getItem('umaHelperScale'));
	if( isNaN(scale) || scale < 0.3 || scale > 2.6 ){
		scale = 1.0;
	}
} else{
	scale = 1.0;
}
setScale();






// modifying items
function modifySkills(){
	cnt = 1;
	for(let [key, val] of Object.entries(skills)){
		dict = {};
		dict['type'] = 'skill';
		dict['id'] = 'skill_' + String(cnt);
		dict['score'] = 0;
		if(val['createDate']){
			dict['createDate'] = val['createDate'];
		} else{
			dict['createDate'] = null
		}
		dict['titleStyle'] = null;
		dict['img'] = val['img'];
		dict['hiddenTag'] = null;
		dict['title'] = key;
		dict['descImg'] = null;
		dict['cost'] = val['cost'];
		dict['condition'] = val['condition'];
		dict['effect'] = val['effect'];
		dict['duration'] = val['duration'];
		dict['comment'] = val['comment'];
		dict['recommend'] = val['recommend'];
		items.push(dict);
		cnt++;
	}
}
function modifyEvents(){
	cnt = 1;
	for(let [key, val] of Object.entries(scenarioEvents)){
		dict = {};
		dict['type'] = 'event';
		dict['id'] = 'event_' + String(cnt);
		dict['score'] = 0;
		if(val['createDate']){
			dict['createDate'] = val['createDate'];
		} else{
			dict['createDate'] = null
		}
		dict['titleStyle'] = null;
		dict['hiddenTag'] = null;
		dict['character'] = val['character'];
		dict['eventType'] = val['eventType'];
		dict['cardName'] = val['cardName'];
		dict['title'] = val['title'];
		dict['descImg'] = null;
		dict['choice'] = val['choice'];
		dict['effect'] = val['effect'];
		items.push(dict);
		cnt++;
	}
	for(let [key, val] of Object.entries(characterEvents)){
		dict = {};
		dict['type'] = 'event';
		dict['id'] = 'event_' + String(cnt);
		dict['score'] = 0;
		if(val['createDate']){
			dict['createDate'] = val['createDate'];
		} else{
			dict['createDate'] = null
		}
		dict['titleStyle'] = null;
		dict['hiddenTag'] = null;
		dict['character'] = val['character'];
		dict['eventType'] = val['eventType'];
		dict['cardName'] = val['cardName'];
		dict['title'] = val['title'];
		dict['descImg'] = null;
		dict['choice'] = val['choice'];
		dict['effect'] = val['effect'];
		items.push(dict);
		cnt++;
	}
	for(let [key, val] of Object.entries(supportEvents)){
		dict = {};
		dict['type'] = 'event';
		dict['id'] = 'event_' + String(cnt);
		dict['score'] = 0;
		if(val['createDate']){
			dict['createDate'] = val['createDate'];
		} else{
			dict['createDate'] = null
		}
		dict['titleStyle'] = null;
		dict['hiddenTag'] = null;
		dict['character'] = val['character'];
		dict['eventType'] = val['eventType'];
		dict['cardName'] = val['cardName'];
		dict['title'] = val['title'];
		dict['descImg'] = null;
		dict['choice'] = val['choice'];
		dict['effect'] = val['effect'];
		items.push(dict);
		cnt++;
	}
}
function modifyRaces(){
	cnt = 1;
	for(let [key, val] of Object.entries(races)){
		dict = {};
		dict['type'] = 'race';
		dict['id'] = 'race_' + String(cnt);
		dict['score'] = 0;
		if(val['createDate']){
			dict['createDate'] = val['createDate'];
		} else{
			dict['createDate'] = null
		}
		dict['titleStyle'] = null;
		dict['hiddenTag'] = null;
		dict['title'] = val['raceName'];
		dict['descImg'] = val['raceImg'];
		dict['raceGrade'] = val['raceGrade'];
		dict['raceDate'] = val['raceDate'];
		dict['raceBasic'] = val['raceBasic'];
		dict['raceNumber'] = val['raceNumber'];
		dict['raceCondition'] = val['raceCondition'];
		dict['raceFan'] = val['raceFan'];
		dict['comment'] = val['comment'];
		items.push(dict);
		cnt++;
	}
}





// organize UI
function changePlaceholder(){
	let ph = document.querySelector('#value');
	let lst = ["돌고래가 좋으면 돌고 올래?", "소다를 자판기에서 뽑았소다", "중앙을 우습게 보지마", "'동경'하는 분들께, 일'동경'례!", "카를 톡 치면 카톡", "생강이 없다니 생각이 없군", "벌레 오른쪽에 인형을 두면 좌충우돌", "실수로 생수를 사버렸군", "자판기에서 콜라를 골라버려"]
	let rd = Math.floor((Math.random()*lst.length));
	
	ph.placeholder = lst[rd]
}
function enableHelpIcon(){
	let helpIcon = document.querySelector(".help");
	let box = document.querySelector('.info-box');
	helpIcon.addEventListener('click', function(){
		const helpIconRect = helpIcon.getBoundingClientRect();
		let posX = helpIconRect.left + 5;
		let posY = helpIconRect.top + 25;
		
		if(box.style.display == "block"){
			box.style.display = "none";
		} else{
			let inner = `우마무스메 HELPER<br>▶ 검색창에 키워드를 넣어 검색하세요. 띄어쓰기로 키워드를 구분하고 ""로 묶어 반드시 해당 키워드가 포함되어야지만 표시되게 할 수 있습니다.<br>▶ 검색창 좌측에서 종류를 선택하세요. (전체 → 모든 정보 / 말딸 → 캐릭터 육성정보 / 스킬 → 스킬 정보 / 커뮤 → 선택지 정보 / 경주 → 레이스 정보)<br>▶ 빨갛게 혹은 파랗게 칠해져있는 스킬과 시나리오 컨디션을 누르면 정보창이 열립니다. 정보창을 다시 누르면 사라집니다.<br><br>▶ 우측 톱니바퀴를 눌러 설정창을 여세요.<br>&nbsp▷ 아이템 표시 개수: 표시될 수 있는 최대 아이템 개수를 설정합니다. 너무 많은 아이템이 표시되도록 하면 렉이 걸릴 수 있습니다.<br>&nbsp▷ 검색량 누적: 각 키워드마다 검색된 양을 합산한 숫자를 기준으로 정렬합니다. 끌 경우 각 검색 키워드들이 검색 되었는지 혹은 안 되었는지 여부에 따라서 정렬됩니다.<br>&nbsp▷ 내용도 검색: 내용까지 검색대상에 추가합니다. 꺼진 상태에선 제목만 검색됩니다<br>&nbsp▷ 하이라이트: 검색된 키워드를 하이라이팅합니다. 끌 경우 속도가 향상됩니다.<br>&nbsp▷ 모두 필수검색어: 모든 키워드를 ""로 묶은 것으로 인식합니다. 즉, 타이핑된 키워드들 중 하나라도 없는 아이템은 검색되지 않습니다.<br>&nbsp▷ 검색어 자동 지우기: 다른 작업을 하다가 페이지로 돌아왔을 때 검색창을 자동으로 초기화하고 키패드가 열리게 합니다.`;
			box.innerHTML = inner;
			infoBoxPositioning(box, posX, posY);
		}
	});
}
function enableSettingIcon(){
	let settingIcon = document.querySelector(".open-setting");
	let settingBox = document.querySelector(".setting");
	settingBox.style.display = 'none';
	let itemNumInput = document.querySelector(".itemNumInput");
	
	maxItemNum = localStorage.getItem('umaHelperMaxItemNum');
	if( maxItemNum == null || maxItemNum == undefined || isNaN(maxItemNum) || maxItemNum < 0 || maxItemNum > 9999 ){
		maxItemNum = 200;
		localStorage.setItem('umaHelperMaxItemNum', maxItemNum);
	}
	itemNumInput.placeholder = maxItemNum;
	
	itemNumInput.addEventListener('change', function(){
		if(itemNumInput.value != "" && itemNumInput.value != null && itemNumInput.value > 0 && itemNumInput.value < 10000){
			maxItemNum = itemNumInput.value
			localStorage.setItem('umaHelperMaxItemNum', maxItemNum);
			itemNumInput.value = "";
			itemNumInput.placeholder = maxItemNum;
		} else{
			itemNumInput.value = "";
			itemNumInput.placeholder = maxItemNum;
		}
	});
	
	settingIcon.addEventListener('click', function(){
		if(settingBox.style.display == 'block'){
			settingBox.style.display = 'none';
		} else{
			const settingIconRect = settingIcon.getBoundingClientRect();
			let posX = settingIconRect.left + 30;
			let posY = settingIconRect.top + 0;
			let clientWidth = document.body.clientWidth;
			let clientHeight = document.body.clientHeight;
			settingBox.style.display = 'block';
			let boxWidth = settingBox.offsetWidth;
			let boxHeight = settingBox.offsetHeight;
			if(posX + boxWidth > clientWidth){
				posX += (clientWidth - (posX + boxWidth)) - 40;
			}
			if(posY + boxHeight > clientHeight){
				posY += (clientHeight - (posY + boxHeight)) - 20;
			}
			settingBox.style.left = posX + "px";
			settingBox.style.top = posY + "px";
		}
	});
}





// info box
document.querySelector(".info-box").onclick = function(){
	let box = document.querySelector('.info-box');
	box.style.display = "none";
};

function infoBoxPositioning(box, posX, posY){
		let clientWidth = document.body.clientWidth;
		let clientHeight = document.body.clientHeight;
		box.style.display = "block";
		let boxWidth = box.offsetWidth;
		let boxHeight = box.offsetHeight;
		
		if(boxWidth > 240){ // max-width
			if(clientWidth < 240){
				boxWidth = clientWidth - 10;
			} else{
				boxWidth = 240;
			}
		}
		
		if(posX + boxWidth > clientWidth){
			posX += (clientWidth - (posX + boxWidth)) - 40;
		}
		if(posY + boxHeight > clientHeight){
			posY += (clientHeight - (posY + boxHeight)) - 20;
		}
	
		box.style.left = posX + "px";
		box.style.top = posY + "px";
		box.style.width = boxWidth + "px";
}
function showSkillInfo(e){
	let box = document.querySelector('.info-box');
	let inner = "";
	let name = e.innerText;
	
	const eRect = e.getBoundingClientRect();
	let posX = eRect.left;
	let posY = eRect.top + 20;
	
	if(box.style.display == "block" && name == infoBoxCache){
		box.style.display = "none";
	} else{
		infoBoxCache = name;
		if(skills[name]['img']){
			inner += `<img class="skill-info-box-img" src="./imgs/skill/${skills[name]['img']}.png">`;
		}
		inner += `<span class="skill-info-box-title">${name}</span><br><br>`;
		if(skills[name]['cost']){
			inner += `▶ 필요 스킬Pt: ${skills[name]['cost']}<br>`;
		}
		inner += `▶ 발동조건: ${skills[name]['condition']}<br>▶ 효과: ${skills[name]['effect']}<br>▶ ${skills[name]['duration']}`;
		
		if(skills[name]['recommend'][0] || skills[name]['recommend'][1] || skills[name]['recommend'][2] || skills[name]['recommend'][3]){ //If any data exist
			inner += `<br>▶ 각질별 추천도:`;
			let typeArr = ['추입', '선입', '선행', '도주'];
			for(let i = 0; i < 4; i++){
				inner += ` ${typeArr[i]}:`;
				switch(skills[name]['recommend'][i]){
					case 0:
						inner += `?`;
						break
					case 1:
						inner += `1티어`;
						break
					case 2:
						inner += `2티어`;
						break
					case 3:
						inner += `3티어`;
						break
					case 4:
						inner += `4티어`;
						break
					case 9:
						inner += `지뢰`;
						break
				}
				if(i < 3){
					inner += ` /`;
				}
			}
		}

		box.innerHTML = inner;
		infoBoxPositioning(box, posX, posY);
	}
}
function showConditionInfo(e){
	let box = document.querySelector('.info-box');
	let inner = "";
	let name = e.innerText;
	
	const eRect = e.getBoundingClientRect();
	let posX = eRect.left;
	let posY = eRect.top + 20;
	
	if(box.style.display == "block" && name == infoBoxCache){
		box.style.display = "none";
	} else{
		infoBoxCache = name;
		
		if(scenarioCondition[name]['type'] == 'bad'){
			inner += `<span class="scenario-condition-bad">${name}</span><br><br>`;
		} else if(scenarioCondition[name]['type'] == 'good'){
			inner += `<span class="scenario-condition-good">${name}</span><br><br>`;
		}
		
		inner += `▶ 효과: ${scenarioCondition[name]['effect']}<br><br>▶ 조건: ${scenarioCondition[name]['condition']}`;
		box.innerHTML = inner;
		
		infoBoxPositioning(box, posX, posY);
	}
}





// search delay
let timeout;
let delay = 100;
let keydown = false // prevent event duplicating
let inputBox = document.querySelector("#value");
inputBox.addEventListener('keyup', function(){
	if(keydown) return;
	keydown = true;
	if( timeout ){
		clearTimeout(timeout);
	}
	timeout = setTimeout(function(){
		search();
	}, delay);
});
inputBox.addEventListener('search', function(){
	if(keydown) return;
	keydown = true;
	if( timeout ){
		clearTimeout(timeout);
	}
	timeout = setTimeout(function(){
		// In case of mobile chrome, there is a bug that x button doesn't clear the value.
		// It seems to because of mobile web browser's way of handle input value. When user input something at element, browser load it on the buffer and it is not cleared untill a series of action done.
		// One of a simple trick to make a circuit from the problem is, out-focus input tag to make browser believe that a series of action is done.
		inputBox.blur();
		search();
		inputBox.focus();
	}, delay);
});


/*
let keydown = false;
let inputBox = document.querySelector("#value");
inputBox.addEventListener('keyup', function(){
	if(keydown) return; // prevent duplicating event
	else{
		keydown = true;
		search();
	}
});
inputBox.addEventListener('search', function(){
	if(keydown) return; // prevent duplicating event
	else{
		keydown = true;
		search();
	}
});
*/





// Autofocusing when user return.
window.addEventListener('focus', function(){
	let autoClear = document.querySelector("#chkbox-toggle-auto-clear")
	
	changePlaceholder();
	if(autoClear.checked){
		document.querySelector('#value').value = "";
		document.querySelector('#value').blur();
		document.querySelector('#value').focus();
		search();
	}
}, false);


modifySkills();
modifyEvents();
modifyRaces();
enableHelpIcon();
enableSettingIcon();
changePlaceholder();
loadUserData();
search();

console.log('build 2210111831');