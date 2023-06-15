function subjectFinder(type){
	let icon = new String();
	switch(type){
		case "chara":
			icon = "H";
			break;
		case "event":
			icon = "C";
			break;
		case "skill":
			icon = "S";
			break;
		case "tip":
			icon = "T";
			break;
		case "race":
			icon = "R";
			break;
		default:
			icon = "?";
			break;
	}
	return `<span class='icon'>${icon}</span>`;
}

function inputFixIcon(fixed, id){
	let toggleFixIcon = document.querySelector("#toggle-fix-icon");
	if(toggleFixIcon.checked){
		if(fixed){
			return `<img src="./imgs/common/pin.png" class="fix-icon" id="${id}">`;
		} else{
			return `<img src="./imgs/common/pin2.png" class="fix-icon-off" id="${id}">`;
		}
	} else{
		if(fixed){
			return `<img src="./imgs/common/pin.png" class="fix-icon" id="${id}">`;
		} else{
			return ``;
		}
	}
}

function drawCard(val){
	return `<img class="card-img" src="./imgs/card/${val}.png">`;
}


function createItem(item){
	let e = document.createElement('div');
	e.className = "item";
	const content = document.querySelector('.content');
	let inner = "";
	
	switch(item['type']){
		case "chara":
			inner = createCharaItem(inner, item);
			break;
		case "event":
			inner = createEventItem(inner, item);
			break;
		case "skill":
			inner = createSkillItem(inner, item);
			break;
		case "tip":
			inner = createTipItem(inner, item);
			break;
		case "race":
			inner = createRaceItem(inner, item);
			break;
	}
	
	inner += `</div><div class="desc-bottom" title="ID: ${item['id']}">작성기준일: `;
	if(item['createDate']){
		inner += `${item['createDate']}`;
	} else{
		inner += `알 수 없음`;
	}
	inner += `</div></details>`;
	
	e.innerHTML = inner;
	content.appendChild(e);
}

function createCharaItem(inner, item){
	inner =  `<details id="${item['id']}"><summary class="title">`
		+ subjectFinder(item['type']);
	if(item['character']){
		let imgUrl = "./imgs/chara/" + item['character'] + ".png";
		inner += `<img class="title-img-chara" src="${imgUrl}">`;
	}
	inner += `<span class="${item['titleStyle']}"><span class="title-chara-name">${item['characterTitle']}</span> ${item['title']}</span>`;
	inner += inputFixIcon(item['fix'], item['id']);
	inner += `</summary><div class='desc'>`;
	if(item['descImg']){
		let imgUrl = "./imgs/desc/" + item['descImg'];
		inner += `<img src="${imgUrl}" class="desc-img">`;
	}
	
	if(item['performance']){
		inner += `<table class="desc-table"><tr><td nowrap class="td-label">성능</td><td nowrap class="td-desc">${item['performance']}</td>`;
		if(item['performanceComment']){
			inner += `<td class="td-desc font-small align-left">${item['performanceComment']}</td>`;
		}
	}
	if(!item['performance'] && item['difficulty']){
		inner += `<table class="desc-table"><tr><td nowrap class="td-label">육성<br>난이도</td><td nowrap class="td-desc">${item['difficulty']}</td>`;
		if(item['difficultyComment']){
			inner += `<td class="td-desc font-small align-left">${item['difficultyComment']}</td>`;
		}
		inner += `</tr></table>`;
	}
	if(item['performance'] && item['difficulty']){
		inner += `<td nowrap class="td-label">육성<br>난이도</td><td nowrap class="td-desc">${item['difficulty']}</td>`;
		if(item['difficultyComment']){
			inner += `<td class="td-desc font-small align-left">${item['difficultyComment']}</td>`;
		}
		inner += `</tr></table>`;
	}
	if(item['performance'] && !item['difficulty']){
		inner += `</tr></table>`;
	}
	
	
	inner += `<table class="desc-table"><tr><td nowrap class="td-label">추천<br>각질</td><td nowrap class="td-desc">${item['runningType']}</td><td nowrap class="td-label">추천<br>거리</td><td nowrap class="td-desc">${item['distanceType']}</td>`;
	if(item['typeComment']){
		inner += `<td class="td-desc font-small align-left">${item['typeComment']}</td>`;
	}
	inner += `</tr></table>`;
	
	if(item['feature']){
		inner += `<table class="desc-table"><tr><td class="td-label">특징</td><td class="td-desc font-small align-left">${item['feature']}</td></tr></table>`;
	}
	
	inner += `<table class="desc-table"><tr><td nowrap class="td-label">추천<br>서포트<br>조합</td><td class="td-desc align-left">${item['supportCardSetting']}</td>`;
	if(item['supportCardComment']){
		inner += `<td class="td-desc font-small align-left">${item['supportCardComment']}</td>`;
	}
	inner += `</tr></table>`;
	if(item['supportCardRecommend'].length > 0){
		inner += `<table class="desc-table"><tr><td class="td-label" colspan="4">추천 서포트 카드</td></tr>`;
		let counter = 0;
		for(let i = 0; i < item['supportCardRecommend'].length; i++){
			inner += `<td class="td-desc">` + drawCard(item['supportCardRecommend'][i]) + `</td>`;
			counter += 1;
			if(counter == 4 && i < item['supportCardRecommend'].length - 1){
				inner += `</tr><tr>`;
				counter = 0
			}
		}
		inner += `</tr></table>`;
	}
	
	inner += `<br><table class="desc-table"><tr><td class="td-label" colspan="5">URA 시나리오 이상적인 스탯 목표치`;
	if(item['idealStatTaget']){
		inner += ` (${item['idealStatTaget']} 기준)`;
	}
	inner += `</td></tr><tr><td class="td-label">스피드</td><td class="td-label">스태미나</td><td class="td-label">파워</td><td class="td-label">근성</td><td class="td-label">지능</td></tr><tr><td class="td-desc">${item['idealStat'][0]}</td><td class="td-desc">${item['idealStat'][1]}</td><td class="td-desc">${item['idealStat'][2]}</td><td class="td-desc">${item['idealStat'][3]}</td><td class="td-desc">${item['idealStat'][4]}</td></tr></table><br>`;
	
	inner += `<table class="desc-table"><tr><td class="td-label" colspan="2">히든미션</td></tr><tr><td class="td-label">조건</td><td class="td-label">보상</td></tr>`;
	if(!item['hiddenMissionCondition']){
		inner += `<tr><td class="td-desc" colspan="2">히든미션이 없습니다.</td></tr>`;
	} else{
		for(let i = 0; i < item['hiddenMissionCondition'].length; i++){
			inner += `<tr><td class="td-desc">${item['hiddenMissionCondition'][i]}</td><td class="td-desc">${item['hiddenMissionReward'][i]}</td>`;
		}
	}
	inner += `</table>`;
	
	return inner;
}

function createEventItem(inner, item){
	inner =  `<details id="${item['id']}"><summary class="title">`
		+ subjectFinder(item['type']);
	if(item['character']){
		let imgUrl = "./imgs/chara/" + item['character'] + ".png";
		inner += `<img class="title-img-chara" src="${imgUrl}">`;
	}
	inner += `<span class="${item['titleStyle']}">${item['title']}`;
	if(item['cardName']){
		inner += ` <span class="title-card-name">${item['cardName']}</span>`;
	} else{ // Print character name only when the event is binding for character not such card.
		switch(item['eventType']){
			case 'chara':
				inner += ` <span class="title-card-name">[육성캐릭터 공용이벤트] ${item['character']}</span>`;
				break
			case 'support':
				inner += ` <span class="title-card-name">[서포트캐릭터 공용이벤트] ${item['character']}</span>`;
				break
			case 'scenario':
				inner += ` <span class="title-card-name">[시나리오 공용이벤트] ${item['character']}</span>`;
				break
			default:
				inner += ` <span class="title-card-name">${item['character']}</span>`;
				break
		}
	}
	inner += `</span>`;
	inner += inputFixIcon(item['fix'], item['id']);
	inner += `</summary><div class='desc'>`;
	if(item['descImg']){
		let imgUrl = "./imgs/desc/" + item['descImg'];
		inner += `<img src="${imgUrl}" class="desc-img">`;
	}
	
	inner += `<table class="desc-table">`;
	for(let i = 0; i < item['choice'].length; i++){
		inner += `<tr><td class="td-label">${item['choice'][i]}</td><td class="td-desc">${item['effect'][i]}</td></tr>`;
	}
	inner += `</table>`;
	
	return inner;
}

function createSkillItem(inner, item){
	function skillRecommend(val){
			switch(val){
				case 0:
					return `데이터가 없습니다.`;
					break
				case 1:
					return `1티어: 힌트 있으면 꼭.`;
					break
				case 2:
					return `2티어: 있으면 좋다`;
					break
				case 3:
					return `3티어: 정말 달리 찍을 게 없을 때`;
					break
				case 4:
					return `4티어: 포인트 낭비`;
					break
				case 9:
					return `지뢰: 찍으면 오히려 성능을 떨어트릴 수도 있다`;
					break
			}
	}
	
	inner =  `<details id="${item['id']}"><summary class="title">`
		+ subjectFinder(item['type']);
	if(item['img']){
		let imgUrl = "./imgs/skill/" + item['img'];
		inner += `<img class="title-img-skill" src="${imgUrl}">`;
	}
	inner += `<span class="${item['titleStyle']}">[${item['grade']}] ${item['title']}</span>`;
	inner += inputFixIcon(item['fix'], item['id']);
	inner += `</summary><div class='desc'>`;

	// 1주년 패치 관련
	let dateFirstAniv = new Date('2023-06-15');
	let curItemDate = new Date(item.createDate);
	if(curItemDate < dateFirstAniv ){
		inner += `<span style="font-size:12px; color:red">※ 이 항목은 1주년 패치 이전에 작성되었음.</span><br><br>`;
	}

	if(item['descImg']){
		let imgUrl = "./imgs/desc/" + item['descImg'];
		inner += `<img src="${imgUrl}" class="desc-img">`;
	}
	
	inner += `<table class="desc-table">`;
	if(item['owner']){
		inner += `<tr><td nowrap class="td-label">보유자</td><td class="td-desc">${item['owner']}</td></tr>`;
	}
	if(item['cost']){
		inner += `<tr><td nowrap class="td-label">스킬Pt비용</td><td class="td-desc">${item['cost']}</td></tr>`;
	}
	inner += `</tr><tr><td nowrap class="td-label">발동조건</td><td class="td-desc">${item['condition']}</td></tr><tr><td nowrap class="td-label">효과</td><td class="td-desc">${item['effect']}</td></tr><tr><td nowrap class="td-label">지속시간</td><td class="td-desc">${item['duration']}</td></tr>`;
	if(item['rel']){
		if(item['rel'].length > 0){
			inner += `<tr><td class="td-label">관련스킬</td><td class="td-desc">`;
			for(let i = 0; i < item['rel'].length; i++){
				inner += `${skill(item['rel'][i])}`;
				if(i < item['rel'].length-1){
					inner += ` / `;
				}
			}
		}
	}
	if(item['comment']){
		inner += `<tr><td class="td-desc align-left" colspan="2">${item['comment']}</td></tr>`;
	}
	inner += `</table>`;
	
	inner += `<br><table class="desc-table"><tr><td class="td-label" colspan="2">각질별 추천도</td></tr><tr><td class="td-label">추입</td><td class="td-desc">`;
	inner += skillRecommend(item['recommend'][0]);
	inner += `</td></tr><tr><td class="td-label">선입</td><td class="td-desc">`;
	inner += skillRecommend(item['recommend'][1]);
	inner += `</td></tr><tr><td class="td-label">선행</td><td class="td-desc">`;
	inner += skillRecommend(item['recommend'][2]);
	inner += `</td></tr><tr><td class="td-label">도주</td><td class="td-desc">`;
	inner += skillRecommend(item['recommend'][3]);
	inner += `</td></tr></table>`;
	
	return inner;
}

function createTipItem(inner, item){
	inner =  `<details id="${item['id']}"><summary class="title">`
		+ subjectFinder(item['type']);
	if(item['character']){
		let imgUrl = "./imgs/chara/" + item['character'] + ".png";
		inner += `<img class="title-img-chara" src="${imgUrl}">`;
	}
	inner += `<span class="${item['titleStyle']}">${item['title']}</span>`;
	inner += inputFixIcon(item['fix'], item['id']);
	inner += `</summary><div class='desc'>`;

	// 1주년 패치 관련
	let dateFirstAniv = new Date('2023-06-15');
	let curItemDate = new Date(item.createDate);
	if(curItemDate < dateFirstAniv ){
		inner += `<span style="font-size:12px; color:red">※ 이 항목은 1주년 패치 이전에 작성되었음.</span><br><br>`;
	}

	if(item['descImg']){
		let imgUrl = "./imgs/desc/" + item['descImg'];
		inner += `<img src="${imgUrl}" class="desc-img">`;
	}
	inner += `${item['desc']}`;
	
	return inner;
}

function createRaceItem(inner, item){
	inner =  `<details id="${item['id']}"><summary class="title">`
		+ subjectFinder(item['type']);
	inner += `<span class="${item['titleStyle']}">[${item['raceGrade']}] ${item['title']} (${item['raceDate']})</span>`;
	inner += inputFixIcon(item['fix'], item['id']);
	inner += `</summary><div class='desc'>`;
	if(item['descImg']){
		let imgUrl = "./imgs/desc/" + item['descImg'];
		inner += `<img src="${imgUrl}" class="desc-img">`;
	}

	inner += `<table class="desc-table"><tr><td class="td-label" colspan="2">${item['title']}</td></tr>`;
	if(item['raceDate']){
		inner += `<tr><td class="td-label">시기</td><td class="td-desc">${item['raceDate']}</td></tr>`;
	}
	if(item['raceBasic']){
		inner += `<tr><td class="td-label">비고</td><td class="td-desc">${item['raceBasic']}</td></tr>`;
	}
	if(item['raceNumber']){
		inner += `<tr><td class="td-label">인원</td><td class="td-desc">${item['raceNumber']}</td></tr>`;
	}
	if(item['raceCondition']){
		inner += `<tr><td class="td-label">조건</td><td class="td-desc">${item['raceCondition']}</td></tr>`;
	}
	if(item['raceFan']){
		inner += `<tr><td class="td-label">획득<br>팬수</td><td class="td-desc">${item['raceFan']}</td></tr>`;
	}
	if(item['comment']){
		inner += `<tr><td class="td-label">코멘트</td><td class="td-desc">${item['comment']}</td></tr>`;
	}
	inner += `</table>`;
	
	return inner;
}