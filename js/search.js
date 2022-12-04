function search(){
	let searchValue = document.querySelector("#value").value.toLowerCase();
	let toggleAccumulation = document.querySelector("#chkbox-toggle-accumulation");
	let toggleEssential = document.querySelector("#chkbox-toggle-essential");
	let searchDesc = document.querySelector("#chkbox-search-desc");
	let keywords = searchValue.split(" ");
	
	keywords = keywords.filter(function(e){
		return e != '';
	});
	
	for(let i in items){
		items[i]['score'] = 0;
		let subjectBool = isCorrectSubject(items[i]);
		if(!subjectBool){ // hide if subject is not same.
			continue;
		}
		if( keywords == false ){ // show everything if value is empty.
			if(items[i]['fix']){ // only show fixed items for reducing load weight.
				items[i]['score'] = 1;
			} else if(subjectBool == 2){ // In case of skill and event item, it only be shown when subject is correct.
				items[i]['score'] = 1;
			}
			continue;
		}
		
		for(let j in keywords){
			let isEssential = isEssentialKeyword(keywords[j])
			let tempScore = 0
			if(isEssential){
				tempScore = filter(items[i], keywords[j].slice(1,-1), isEssential, toggleAccumulation.checked, toggleEssential.checked, searchDesc.checked);
			} else{
				tempScore = filter(items[i], keywords[j], isEssential, toggleAccumulation.checked, toggleEssential.checked, searchDesc.checked);
			}
			
			if(tempScore == -1){
				items[i]['score'] = 0;
				break;
			} else{
				items[i]['score'] += tempScore;
			}
		}
	}
	
	if(keywords == false){
		//sortItemsByDate();
		organizeContent(1);
	} else{
		sortItems();
		organizeContent(1);
	}
}

function filter(item, keyword, isEssential, toggleAcc, toggleEss, searchDesc){
	let searchTarget = "";
	
	if(item['type'] == "chara"){
		searchTarget += `${item['characterTitle']} ${item['title']} ${item['hiddenTag']}`.toLowerCase();
		if(searchDesc){
		searchTarget += `${item['runningType']} ${item['distanceType']} ${item['typeComment']} ${item['feature']} ${item['hiddenMissionCondition']} ${item['hiddenMissionReward']}`;
		}
	} else if(item['type'] == "event"){
		searchTarget += `${item['title']} ${item['hiddenTag']} ${item['cardName']} ${item['character']}`.toLowerCase();
		if(searchDesc){
		searchTarget += `${item['choice']} ${item['effect']}`.toLowerCase();
		}
	} else if(item['type'] == "skill"){
		searchTarget += `${item['title']} ${item['hiddenTag']}`.toLowerCase();
		if(searchDesc){
			searchTarget += `${item['condition']} ${item['effect']}`.toLowerCase();
		}
	} else if(item['type'] == "tip"){
		searchTarget += `${item['title']} ${item['hiddenTag']}`.toLowerCase();
		if(searchDesc){
			searchTarget += `${item['desc']}`;
		}
	} else if(item['type'] == "race"){
		searchTarget += `${item['raceGrade']} ${item['title']} ${item['hiddenTag']} ${item['raceDate']}`.toLowerCase();
		if(searchDesc){
			searchTarget += `${item['raceBasic']} ${item['comment']}`;
		}
	}
	searchTarget = searchTarget.replace(/(<([^>]+)>)/gi, " ");
	
	// I have no idea what if someone type multiple times with the same keyword.
	// Should I prevent it?
	let tempScore = searchTarget.split(keyword).length - 1;
	if( !toggleAcc ){
		if( (isEssential || toggleEss) && tempScore == 0 ){
			return -1; // if failed to search essential keyword.
		} else if( tempScore > 0 ){
			return 1;
		} else{
			return 0;
		}
	} else{
		if( (isEssential || toggleEss) && tempScore == 0 ){
			return -1;
		} else if( tempScore > 0 ){
			return tempScore;
		} else{
			return 0;
		}
	}
}

function isEssentialKeyword(keyword){
	if(keyword.substr(0,1) == '\"' && keyword.substr(-1,1) == '\"' && keyword.length > 2){
		return true;
	}
	return false;
}

function isCorrectSubject(item){
	var optionValue = document.querySelector("#select-subject").options[document.querySelector("#select-subject").selectedIndex].value;
	
	if(optionValue == "all"){
		return 1;
	} else if(optionValue == item['type']){
		return 2;
	} else{
		return false;
	}
}