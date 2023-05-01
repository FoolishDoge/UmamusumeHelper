// initializing: sort > organize
// on action: score > sort > organize > highlight
var scale = 1.0;
var maxItemNum = 200;
let infoBoxCache = "";

// Set up localStorage for the first time
if( localStorage.getItem('umaFixList') == null ){
	// tip_0 - 우마무스메HELPER 사용법
	// tip_4 - 각질별 좋은 계승고유기
	// tip_14 - 스콜피온배 대비 육성 팁
	// tip_15 - 아오하루배 팁 모음
	fixedByDefaultItems = ["tip_0", "tip_4", "tip_14", "tip_15"]
	localStorage.setItem('umaFixList', JSON.stringify(fixedByDefaultItems));
}


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
	let toggleBottomControl = document.querySelector('#toggle-bottom-control');
	let toggleFixIcon = document.querySelector('#toggle-fix-icon');
	let toggleSearchOnlyCore = document.querySelector('#toggle-search-only-core');

	let excludeCharaItem = document.querySelector('#exclude-chara-item');
	let excludeEventItem = document.querySelector('#exclude-event-item');
	let excludeSkillItem = document.querySelector('#exclude-skill-item');
	let excludeTipItem = document.querySelector('#exclude-tip-item');
	let excludeRaceItem = document.querySelector('#exclude-race-item');
	let excludeCharaEventItem = document.querySelector('#exclude-charaEvent-item');
	let excludeSupportEventItem = document.querySelector('#exclude-supportEvent-item');
	let excludeScenarioEventItem = document.querySelector('#exclude-scenarioEvent-item');

	
	if(localStorage.getItem('umaHelperToggleAccumulation') == 't'){ toggleAccumulation.checked = true; }
	if(localStorage.getItem('umaHelperSearchDesc') == 't'){ searchDesc.checked = true; }
	if(localStorage.getItem('umaHelperToggleHighlight') == 'f'){ toggleHighlight.checked = false; }
	if(localStorage.getItem('umaHelperToggleEssential') == 'f'){ toggleEssential.checked = false; }
	if(localStorage.getItem('umaHelperAutoClear') == 'f'){ autoClear.checked = false; }
	if(localStorage.getItem('umaToggleBottomControl') == 'f'){
		toggleBottomControl.checked = false
		document.querySelector('.open-upper-item').style.display = 'none';
		document.querySelector('.open-lower-item').style.display = 'none';
		document.querySelector('.goto-search-btn').style.display = 'none';
	}
	if(localStorage.getItem('umaToggleFixIcon') == 'f'){ toggleFixIcon.checked = false; }
	if(localStorage.getItem('umaToggleSearchOnlyCore') == 'f'){ toggleSearchOnlyCore.checked = false; }

	if(localStorage.getItem('umaHelperExcludeCharaItem') == 't'){ excludeCharaItem.checked = true }
	if(localStorage.getItem('umaHelperExcludeEventItem') == 't'){ excludeEventItem.checked = true }
	if(localStorage.getItem('umaHelperExcludeSkillItem') == 't'){ excludeSkillItem.checked = true }
	if(localStorage.getItem('umaHelperExcludeTipItem') == 't'){ excludeTipItem.checked = true }
	if(localStorage.getItem('umaHelperExcludeRaceItem') == 't'){ excludeRaceItem.checked = true }
	if(localStorage.getItem('umaHelperCharaEventItem') == 't'){ excludeCharaEventItem.checked = true }
	if(localStorage.getItem('umaHelperSupportEventItem') == 't'){ excludeSupportEventItem.checked = true }
	if(localStorage.getItem('umaHelperScenarioEventItem') == 't'){ excludeScenarioEventItem.checked = true }
	
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
	toggleBottomControl.addEventListener('change', function(){
		if(toggleBottomControl.checked == true){
			localStorage.setItem('umaToggleBottomControl', 't');
			document.querySelector('.open-upper-item').style.display = 'block';
			document.querySelector('.open-lower-item').style.display = 'block';
			document.querySelector('.goto-search-btn').style.display = 'block';
		} else{
			localStorage.setItem('umaToggleBottomControl', 'f');
			document.querySelector('.open-upper-item').style.display = 'none';
			document.querySelector('.open-lower-item').style.display = 'none';
			document.querySelector('.goto-search-btn').style.display = 'none';
		}
		search();
	});
	toggleFixIcon.addEventListener('change', function(){
		if(toggleFixIcon.checked == true){
			localStorage.setItem('umaToggleFixIcon', 't');
		} else{
			localStorage.setItem('umaToggleFixIcon', 'f');
		}
		search();
	});
	toggleSearchOnlyCore.addEventListener('change', function(){
		if(toggleSearchOnlyCore.checked == true){
			localStorage.setItem('umaToggleSearchOnlyCore', 't');
		} else{
			localStorage.setItem('umaToggleSearchOnlyCore', 'f');
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
	excludeCharaEventItem.addEventListener('change', function(){
		if(excludeCharaEventItem.checked == true){
			localStorage.setItem('umaHelperCharaEventItem', 't');
		} else{
			localStorage.setItem('umaHelperCharaEventItem', 'f');
		}
		search();
	});
	excludeSupportEventItem.addEventListener('change', function(){
		if(excludeSupportEventItem.checked == true){
			localStorage.setItem('umaHelperSupportEventItem', 't');
		} else{
			localStorage.setItem('umaHelperSupportEventItem', 'f');
		}
		search();
	});
	excludeScenarioEventItem.addEventListener('change', function(){
		if(excludeScenarioEventItem.checked == true){
			localStorage.setItem('umaHelperScenarioEventItem', 't');
		} else{
			localStorage.setItem('umaHelperScenarioEventItem', 'f');
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
	else if(content.children.length == 0){
		if( document.querySelector("#value").value == "" && document.querySelector("#select-subject").options[document.querySelector("#select-subject").selectedIndex].value == 'all' ){
			let e = document.createElement('div');
			let inner
				= "<div class='nothing-here'>"
				+ "<img src='./imgs/common/missing2.png' width='100px'>"
				+ "<div style='margin-top:10px'>고정된📌 아이템이 없습니다.</div>"
				+ "<div style='font-size:13px;'>태그가 '전체'로 설정된 상태에서 검색어를 아무것도 입력하지 않으면<br>고정된📌 아이템만 표시됩니다.<br>옵션을 열어 '아이템 고정기능'을 켠 상태로<br>아이템 타이틀 옆에 표시된 📌 아이콘을 눌러 고정하세요.</div>"
				+ "</div>";
			e.innerHTML = inner;
			content.appendChild(e);
		} else{
			let e = document.createElement('div');
			let inner
				= "<div class='nothing-here'>"
				+ "<img src='./imgs/common/missing.png' width='100px'>"
				+ "<div style='margin-top:10px'>검색결과가 없습니다.</div>"
				+ "<div style='font-size:13px;'>우마무스메 HELPER는 유사한 키워드 검색 기능을 지원하지 않습니다.<br>정확한 키워드로 검색해주세요.</div>"
				+ "</div>";
			e.innerHTML = inner;
			content.appendChild(e);
		}
	}
	
	//skill, condition info
	let ts = document.querySelectorAll(".skill-info");
	for(let i = 0, len = ts.length; i < len; i++){
		ts[i].addEventListener('click', function(){
			showSkillInfo(this, this.getAttribute('code'));
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


	//fix icon
	let toggleFixIcon = document.querySelector('#toggle-fix-icon');
	if( toggleFixIcon.checked ){
		let fixed = document.querySelectorAll(".fix-icon");
		for(let i = 0, len = fixed.length; i < len; i++){
			fixed[i].addEventListener('click', function(){
				let arr = JSON.parse(localStorage.getItem('umaFixList'));
				arr = arr.filter(item => item !== fixed[i].id);
				localStorage.setItem('umaFixList', JSON.stringify(arr));
	
				let targetIndex = items.findIndex(dict => dict.id === fixed[i].id);
				items[targetIndex].fix = false;
				search();
			});
		}
		let unfixed = document.querySelectorAll(".fix-icon-off");
		for(let i = 0, len = unfixed.length; i < len; i++){
			unfixed[i].addEventListener('click', function(){
				let arr = JSON.parse(localStorage.getItem('umaFixList'));
				arr.push(unfixed[i].id);
				localStorage.setItem('umaFixList', JSON.stringify(arr));
	
				let targetIndex = items.findIndex(dict => dict.id === unfixed[i].id);
				items[targetIndex].fix = true;
				search();
			});
		}
	}
	//fix icon


	
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
	scale += 0.05;
	scale = Math.round(scale*100)/100;
	setScale();
}
function zoomOut(){
	scale -= 0.05;
	scale = Math.round(scale*100)/100;
	setScale();
}
function setScale(){
	document.body.style.zoom = scale;
	document.querySelector(".zoom-value").innerHTML = Math.round(scale*100) + "%";
	localStorage.setItem('umaHelperScale', scale);
}
if( localStorage.getItem('umaHelperScale') !== null ){
	scale = parseFloat(localStorage.getItem('umaHelperScale'));
	if( isNaN(scale) || scale < 0.3 || scale > 2.0 ){
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
		dict['id'] = "s_" + key;
		dict['fix'] = false;
		dict['score'] = 0;
		if(val['createDate']){
			dict['createDate'] = val['createDate'];
		} else{
			dict['createDate'] = null;
		}
		dict['titleStyle'] = null;
		dict['img'] = val['icon'];
		if(val['hiddenTag']){
			dict['hiddenTag'] = val['hiddenTag'];
		} else{
			dict['hiddenTag'] = null;
		}
		if(val['owner']){
			dict['owner'] = val['owner'];
		} else{
			dict['owner'] = null;
		}
		dict['title'] = val['name'];
		dict['descImg'] = null;
		dict['grade'] = val['grade'];
		dict['cost'] = val['cost'];
		dict['condition'] = val['condition'];
		dict['effect'] = val['effect'];
		dict['duration'] = val['duration'];
		dict['rel'] = val['rel'];
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
		dict['typeDetail'] = 'scenario';
		dict['id'] = val['id']
		dict['fix'] = false;
		dict['score'] = 0;
		if(val['createDate']){
			dict['createDate'] = val['createDate'];
		} else{
			dict['createDate'] = null;
		}
		dict['titleStyle'] = null;
		if(val['hiddenTag']){
			dict['hiddenTag'] = val['hiddenTag'];
		} else{
			dict['hiddenTag'] = null;
		}
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
		dict['typeDetail'] = 'chara';
		dict['id'] = val['id']
		dict['fix'] = false;
		dict['score'] = 0;
		if(val['createDate']){
			dict['createDate'] = val['createDate'];
		} else{
			dict['createDate'] = null;
		}
		dict['titleStyle'] = null;
		if(val['hiddenTag']){
			dict['hiddenTag'] = val['hiddenTag'];
		} else{
			dict['hiddenTag'] = null;
		}
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
		dict['typeDetail'] = 'support';
		dict['id'] = val['id']
		dict['fix'] = false;
		dict['score'] = 0;
		if(val['createDate']){
			dict['createDate'] = val['createDate'];
		} else{
			dict['createDate'] = null;
		}
		dict['titleStyle'] = null;
		if(val['hiddenTag']){
			dict['hiddenTag'] = val['hiddenTag'];
		} else{
			dict['hiddenTag'] = null;
		}
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
		dict['id'] = val['id'];
		dict['fix'] = false;
		dict['score'] = 0;
		if(val['createDate']){
			dict['createDate'] = val['createDate'];
		} else{
			dict['createDate'] = null;
		}
		dict['titleStyle'] = null;
		if(val['hiddenTag']){
			dict['hiddenTag'] = val['hiddenTag'];
		} else{
			dict['hiddenTag'] = null;
		}
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
function applyUmaFixList(){
	let fixed = JSON.parse(localStorage.getItem('umaFixList'));
	if(fixed.length == 0){ return; }
	
	for(let i = 0; i < fixed.length; i++){
		let index = items.findIndex(dict => dict.id === fixed[i]);
		items[index].fix = true;
	}
}



// organize UI
function changePlaceholder(){
	let ph = document.querySelector('#value');
	let lst = ["돌고래가 좋으면 돌고 올래?", "소다를 자판기에서 뽑았소다", "중앙을 우습게 보지마", "'동경'하는 분들께, 일'동경'례!", "카를 톡 치면 카톡", "생강이 없다니 생각이 없군", "벌레 오른쪽에 인형을 두면 좌충우돌", "실수로 생수를 사버렸군", "자판기에서 콜라를 골라버려"]
	let rd = Math.floor((Math.random()*lst.length));
	
	ph.placeholder = lst[rd]
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
function enableBottomControl(){
	let goToSearchBtn = document.querySelector(".goto-search-btn");
	let openUpperItemBtn = document.querySelector('.open-upper-item');
	let openLowerItemBtn = document.querySelector('.open-lower-item');

	goToSearchBtn.addEventListener('click', function(){
		let autoClear = document.querySelector("#chkbox-toggle-auto-clear");
		if(autoClear.checked){
			document.querySelector('#value').value = "";
			document.querySelector('#value').blur();
			document.querySelector('#value').focus();
			search();
		} else{
			document.querySelector('#value').blur();
			document.querySelector('#value').focus();
		}
	});

	openUpperItemBtn.addEventListener('click', function(){
		const content = document.querySelector(".content");
		const contentLen = document.querySelector(".content").children.length;
		if(contentLen == 1){
			content.children[0].children[0].open = true;
		}
		if(contentLen > 1){
			let cur = -1;
			for(let i = 0; i < contentLen; i++){
				if(content.children[i].children[0].open == true){
					cur = i;
					break
				}
			}
			if(cur == -1){ // if nothing opened
				cur = 0;
			}
			if(cur-1 < 0){ // prevent underflow
				content.children[cur].children[0].open = true;
			} else{
				content.children[cur].children[0].open = false;
				content.children[cur-1].children[0].open = true;
			}
		}
	});
	openLowerItemBtn.addEventListener('click', function(){
		const content = document.querySelector(".content");
		const contentLen = document.querySelector(".content").children.length;
		if(contentLen == 1){
			content.children[0].children[0].open = true;
		}
		if(contentLen > 1){
			let cur = -1;
			for(let i = 0; i < contentLen; i++){
				if(content.children[i].children[0].open == true){
					cur = i;
					break
				}
			}
			if(cur == -1){ // if nothing opened
				cur = 0;
				content.children[cur].children[0].open = true;
			} else{
				if(cur+1 > contentLen-1){ // prevent overflow
					content.children[cur].children[0].open = true;
				} else{
					content.children[cur].children[0].open = false;
					content.children[cur+1].children[0].open = true;
				}
			}
		}
	});
}




// info box
document.querySelector(".info-box").onclick = function(){
	let box = document.querySelector('.info-box');
	box.style.display = "none";
};

function infoBoxPositioning(box, posX, posY){
	// "clientWidth" does not consider scale. Therefore, you need to divide value by current scale to get the exact size of the client.
	// On the other hand, "getBoundingClientRect()" returns the exact coordinates and sizes which actually rendered.
	let clientWidth = document.body.clientWidth / scale;
	let clientHeight = document.body.clientHeight / scale;
	box.style.display = "block";
	let boxWidth = box.offsetWidth;
	let boxHeight = box.offsetHeight;
	let maxWidth = 260;
	
	if(boxWidth > maxWidth){
		if(clientWidth < maxWidth){
			boxWidth = clientWidth - 10;
		} else{
			boxWidth = maxWidth;
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
function showSkillInfo(e, code){
	let box = document.querySelector('.info-box');
	let inner = "";
	let item = skills[code]
	const eRect = e.getBoundingClientRect();
	let posX = eRect.left;
	let posY = eRect.top + 20;
	
	if(box.style.display == "block" && code == infoBoxCache){
		box.style.display = "none";
	} else{
		infoBoxCache = code;
		if(item['icon']){
			inner += `<img class="skill-info-box-img" src="./imgs/skill/${item['icon']}">`;
		}
		inner += `<span class="skill-info-box-title">[${item['grade']}] ${item['name']}</span><br><br>`;
		if(item['grade'] == "고유" || item['grade'] == "계승"){
			inner += `▶ 계승: ${item['owner']}<br>`;
		}
		if(item['cost']){
			inner += `▶ 필요 스킬Pt: ${item['cost']}<br>`;
		}
		inner += `▶ 발동조건: ${item['condition']}<br>▶ 효과: ${item['effect']}<br>▶ ${item['duration']}`;
		
		if(item['recommend'][0] || item['recommend'][1] || item['recommend'][2] || item['recommend'][3]){ //If any data exist
			inner += `<br>▶ 각질별 추천도:`;
			let typeArr = ['추입', '선입', '선행', '도주'];
			for(let i = 0; i < 4; i++){
				inner += ` ${typeArr[i]}:`;
				switch(item['recommend'][i]){
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
		if(item['rel']){
			inner += `<br>▶ 관련스킬: `;
			for(let i = 0; i < item['rel'].length; i++){
				inner += `${skillName(item['rel'][i])}`;
				if(i < item['rel'].length-1){
					inner += ` / `;
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
		// It seems to be because of the mobile web browser's way of handling input values. When a user inputs something into an element, the browser loads it into a buffer and it is not cleared until a series of actions is completed.
		// One of a simple trick to make a circuit from the problem is, using out-focus input tag to make browser believe that a series of action was completed.
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
	let autoClear = document.querySelector("#chkbox-toggle-auto-clear");
	
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
applyUmaFixList();
enableSettingIcon();
enableBottomControl();
changePlaceholder();
loadUserData();
search();