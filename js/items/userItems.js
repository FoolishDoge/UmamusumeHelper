/*
# type: chara, event, skill, tip
# titleStyle: title-outline-blue title-outline-red title-red title-blue title-bold title-vibration title-background-lightyellow
*/

let items = [
	{ 	type: 'chara', id: 'chara_1', score: 0,
		createDate: "2022-08-13",
		titleStyle: null,
		hiddenTag: null,
		character: "메지로 맥퀸",
		characterTitle: "[엘레강스 라인] 메지로 맥퀸",
		title: "육성 가이드",
		descImg: null,
		performance: "좋음",
		performanceComment: "▶ 초반 희귀한 장거리 도주마. 고유기도 굳.",
		difficulty: "보통",
		difficultyComment: "▶ 도주마로 키우면 마군사 위험도 적고 목표 레이스 수 자체도 적지만, 목표 레이스에 장거리 레이스가 많고 경쟁상대가 강한 편이라 쉽지는 않음.",
		runningType: "도주(기본B)<br>선행(기본A)",
		distanceType: "장거리(기본A)",
		typeComment: "▶ 스태미너 성장 보너스가 달려있어 장거리 육성이 매우 쉽다.<br>▶ 각질은 선행, 도주 모두 좋지만 중장거리 도주마가 귀하므로 스탯을 충분히 키울 수 있다면 도주마로.",
		supportCardSetting: "정석적인 3스피드, 2스태미너, 1친구 조합 추천",
		supportCardComment: "▶ 도주마로 키울 거면 타즈나는 웬만하면 픽.<br>▶ 자력으로 얻는 회복기 성능이 구림. 슈퍼크릭도 웬만하면 픽.",
		supportCardRecommend: ["ssr_sp_2", "ssr_sp_9", "sr_sp_1", "ssr_st_5", "sr_in_8", "ssr_fr_1"],
		feature: "▶ 게임 초반 귀한 장거리 도주마.<br>▶ 3레벨 각성스킬은 구리고 4, 5레벨은 선행용이라 도주마로 쓸 거면 2렙까지만.<br>▶ 고유스킬 <span class='skill-info'>[일반] 존귀한 사명을 완수하기 위하여</span>는 좋은 계승고유기 중 하나임.",
		idealStatTaget: "장거리 도주마",
		idealStat: [1100, 1000, 900, 440, 400],
		hiddenMissionCondition: ["▶ 가을 시니어 삼관 달성<br>(1) 천황상 가을 (시니어 10월 후반)<br>(2) 재팬컵 (시니어 11월 후반, 기본 목표에 없음)<br>(3) 아리마기념 (시니어 12월 후반, 기본 목표에 없음)"],
		hiddenMissionReward: ["스피드·스태미너·근성 +15, 스킬Pt +15"]
	},
	{ 	type: 'chara', id: 'chara_2', score: 0,
		createDate: "2022-08-13",
		titleStyle: null,
		hiddenTag: null,
		character: "나이스 네이처",
		characterTitle: "[포인세티아 리본] 나이스 네이처",
		title: "육성 가이드",
		descImg: null,
		performance: "좋음",
		performanceComment: "▶ 팀전에서 디버프로 상대방을 담구는 역병마 메타의 핵심 캐릭터 중 하나.<br>▶ 고유스킬도 준수한 편.",
		difficulty: "보통",
		difficultyComment: "▶ 육성목표는 초반 이후엔 무난한 편.",
		runningType: "선입(기본A)",
		distanceType: "중거리(기본A)<br>마일(기본C)",
		typeComment: "▶ 핵심인 디버프 스킬들이 대부분 선입이라 선입 추천.<br>▶ 일반적으로 중거리에서 쓰이지만 네이처의 핵심 스킬들이나 고유기가 마일 거리에서 상당히 유용하다는 게 밝혀지면서 마일로 쓰는 경우도 생김.",
		supportCardSetting: "3스피드, 2지능, 1친구 조합 추천",
		supportCardComment: "▶ 파워 트레이닝 보정치 20%라 보통 인자계승으로 스태미나 받고 파워는 우정트레이닝 도움 없이 스피드랑 파워 훈련만으로 올림.",
		supportCardRecommend: ["ssr_sp_1", "sr_sp_1", "sr_sp_2", "ssr_in_1", "sr_in_7", "ssr_fr_1"],
		feature: "▶ 기본 보유 디버프기만 5개로 역병마 메타의 핵심 캐릭터임.<br>▶ R 심볼리 루돌프, SR 마블러스 선데이, SR 키류인 아오이 등 다른 디버프 스킬까지 주는 서포트카드를 편성해 극악의 역병마로 키울 수 있음.<br>▶ 근데 역병마 메타는 URA 시나리오 이후 스탯 인플레로 다들 능력치가 고만고만할 때 조커픽으로 기용되는 거지 게임 초반 시점에 쓸만한 건 아니라고 한다.",
		idealStatTaget: "중거리 선입마",
		idealStat: [1200, 800, 1000, 'x', 800],
		hiddenMissionCondition: ["▶ 히든1. 사츠키상 출전(클래식 4월 전반)", "▶ 히든2. 일본 더비 출전(클래식 5월 후반)", "▶ 히든3. 육성 목표 레이스 외 레이스에서 3착"],
		hiddenMissionReward: ["▶ 승리할 경우: 체력 -20, 랜덤스탯 +7~12, 스킬Pt +50~60, 시나리오NPC 우정도+4<br>▶ 2착 이하: 체력 -20, 랜덤스탯 +7, 스킬Pt +50, 시나리오NPC 우정도+4", "체력 -15, 랜덤스탯 +12, 스킬Pt +57, 시나리오NPC 우정도+4","체력 -11, 파워·근성·지능 +4, 스킬Pt +83"],
	},
	{ 	type: 'chara', id: 'chara_3', score: 0,
		createDate: "2022-08-13",
		titleStyle: null,
		hiddenTag: null,
		character: "사쿠라 바쿠신 오",
		characterTitle: "[사쿠라, 나아가라!] 사쿠라 바쿠신 오",
		title: "육성 가이드",
		descImg: null,
		performance: "좋음",
		performanceComment: "",
		difficulty: "개쉬움",
		difficultyComment: "▶ 도주에 단거리 캐릭터라 스피드, 지능만 약간 올려주면 육성중에는 다 씹어먹고 다닌다.<br>▶ 심지어 스피드랑 지능 훈련에 보너스까지 달림.<br>▶ 컨디션 하락도 적다.",
		runningType: "단거리(기본A)",
		distanceType: "도주(기본A)<br>선행(기본A)",
		typeComment: null,
		supportCardSetting: "4스피드, 2지능 추천",
		supportCardComment: "",
		supportCardRecommend: ["ssr_sp_1", "ssr_sp_4", "ssr_sp_7", "sr_sp_1", "sr_pw_4", "ssr_fr_1"],
		feature: "▶ 육성중에 마일 레이스가 있긴 한데 마일적성도 B라 그냥 해도 이긴다.<br>▶ '박신런'이라고 잔디 단거리, 마일 레이스란 레이스를 다 뛰면서 앵벌이하는 용도로 자주 쓰인다. 한 30경기 우승하면 육성 한 번에 만 원 ~ 2만 원 벌린다.",
		idealStatTaget: "단거리 도주마",
		idealStat: [1200, 410, 950, "x", 1100],
		hiddenMissionCondition: ["▶ 스프린터스 스테이크스 2연패(모두 육성목표에 있음)"],
		hiddenMissionReward: ["컨디션 +3, 스피드 +13, 스태미나·파워·근성·지능 +3, 스킬Pt +51, 시나리오NPC 우정도 +4<br><span class='skill-info'>[일반] 기세에 맡기기</span> 힌트Lv +1<br><span class='skill-info'>[일반] 나카야마 경기장○</span> 힌트Lv +1<br><span class='condition-info'>주목받는 신예</span> 획득"]
	},
	{ 	type: 'chara', id: 'chara_4', score: 0,
		createDate: "2022-08-13",
		titleStyle: null,
		hiddenTag: null,
		character: "아그네스 타키온",
		characterTitle: "[tach-nology] 아그네스 타키온",
		title: "육성 가이드",
		descImg: null,
		performance: "좋음",
		performanceComment: "",
		difficulty: "쉬움",
		difficultyComment: "▶ 경쟁상대가 약한 편이라 다 씹어먹고 다님.",
		runningType: "선행(기본A)<br>선입(기본B)",
		distanceType: "중거리(기본A)<br>장거리(기본B)",
		typeComment: "▶ 좋은 회복기를 2개나 가지고 있어서 장거리에도 나쁘지 않음.",
		supportCardSetting: "▶ 3스피드, 2스태, 타즈나<br>▶ 3스피드, 3스태",
		supportCardComment: "▶ 컨디션 하락 이벤트는 잦은 편이라 타즈나 있으면 좋음.",
		supportCardRecommend: ["ssr_sp_1", "ssr_sp_3", "sr_sp_1", "ssr_st_5", "sr_st_2", "ssr_fr_1"],
		feature: "▶ 3성 개화부터 고유기 성능이 갑자기 확 높아진다고 함.",
		idealStatTaget: "중거리 선행마",
		idealStat: [1000, 800, 1000, "x", 550],
		hiddenMissionCondition: ["▶ 사츠키상에서 1착(클래식 4월 전반)"],
		hiddenMissionReward: ["▶ 컨디션 '양호' 이상인 상태에서 우승시<br>지능 +5<br><br>▶ 컨디션 '보통' 이하인 상태에서 우승시<br>지능 +5, 목표 레이스에 NHK 마일컵이 추가됨."]
	},
	{ 	type: 'chara', id: 'chara_5', score: 0,
		createDate: "2022-08-13",
		titleStyle: null,
		hiddenTag: null,
		character: "킹 헤일로",
		characterTitle: "[킹 오브 에메랄드] 킹 헤일로",
		title: "육성 가이드",
		descImg: null,
		performance: "그닥?",
		performanceComment: "",
		difficulty: "어려운 편",
		difficultyComment: "▶ 육성 목표에 단거리, 마일, 중거리, 장거리 다 있다.<br>▶ 그래도 기본적으로 거리적성이 B 이상이라 목표 달성 자체가 어려운 건 아닌데, 중거리에서 1착해야 하는 조건도 있다보니 스태미나를 어느정도는 올려야 해서 단거리마 육성에서 쓸데없이 턴을 써야하는 게 문제.",
		runningType: "선입(기본A)",
		distanceType: "단거리(기본A)<br>마일(기본B)",
		typeComment: "▶ 희귀한 단거리 선입마",
		supportCardSetting: "2스피드, 2지능을 기본으로",
		supportCardComment: "▶ 단거리마로 쓸 거면 파워나 스태 카드를 아예 빼버려도 되는데 육성 중에 조금 후달릴 수도 있다.",
		supportCardRecommend: ["ssr_sp_2", "ssr_sp_8", "ssr_sp_5", "ssr_in_1", "sr_in_8", "ssr_fr_1"],
		feature: "▶ 에어 그루브와 단거리 선입 자리를 두고 자주 비교되는데, 안정적인 고유스킬 때문에 태생 중거리마임에도 에어 그루브가 확실하게 우세하다는 평가다. 다만 단거리 + 선입 자체가 조커역할로 활용되며 어차피 에이스는 도주캐릭터인 박신 등이 담당하기 때문에, 둘 중 잘 큰 캐릭터를 골라도 상관 없다.<br>▶ 킹 헤일로의 육성 스토리는 아그네스 타키온, 나이스 네이처와 함께 3대 갬동 스토리로 꼽힌다.",
		idealStatTaget: "단거리 선입마",
		idealStat: [1200, 500, 1000, 400, 700],
		hiddenMissionCondition: ["▶ 시니어급 아리마 기념에 출전(시니어 12월 후반)"],
		hiddenMissionReward: ["▶ 우승시<br>체력-15, 지능+5, 랜덤스탯+10, 스킬Pt+45, 시나리오NPC 우정도+4<br><br>▶ 2착 이하<br>체력-25, 스태미나+5, 스킬Pt+34, 시나리오NPC 우정도+4"]
	},
	{ 	type: 'chara', id: 'chara_6', score: 0,
		createDate: "2022-08-13",
		titleStyle: null,
		hiddenTag: null,
		character: "하루 우라라",
		characterTitle: "[화창한 일등상♪] 하루 우라라",
		title: "육성 가이드",
		descImg: null,
		performance: "구림",
		performanceComment: "▶ 단거리 + 선입이라는 최악의 조합에 고유기도 안 좋고 스탯 보정도 나쁘다.",
		difficulty: "보통",
		difficultyComment: "▶ 육성목표 자체는 대놓고 깍두기 취급이라 스탯 안 올리고 놀아도 달성한다.<br>▶ 근데 컨디션 하락이벤트 존나 많고 기본적으로 성능이 구려서 잘 키우기는 개빡셈.",
		runningType: "선입(기본A)",
		distanceType: "더트<br>단거리(기본A)<br>마일(기본B)",
		typeComment: "▶ 단거리 + 선입 조합이 기본적으로 좆구리기 때문에 육성 중에는 도주로 돌려서 쓰곤 함.",
		supportCardSetting: "스피드 3~4, 파워 0~1, 지능 1~2",
		supportCardComment: "",
		supportCardRecommend: ["ssr_sp_2", "ssr_sp_1", "sr_sp_2", "ssr_pw_2", "ssr_fr_1"],
		feature: "▶ 거의 모든 말딸과 계승 상성이 최악이다.<br>▶ 트레센은 만만한 곳이 아니야.",
		idealStatTaget: "단거리 더트 도주마",
		idealStat: [1000, 300, 600, 300, 300],
		hiddenMissionCondition: ["▶ 시니어급 아리마기념에서 우승(시니어 12월 후반)"],
		hiddenMissionReward: ["▶ 모든 스탯 +4, 스킬Pt +63, <span class='skill-info'>[일반] 복병○</span> 힌트Lv +1, 시나리오 NPC 우정도 +5"]
	},
	{ 	type: 'chara', id: 'chara_7', score: 0,
		createDate: "2022-08-13",
		titleStyle: null,
		hiddenTag: null,
		character: "골드 쉽",
		characterTitle: "[레드 스트라이프] 골드 쉽",
		title: "육성 가이드",
		descImg: null,
		performance: "좋음",
		performanceComment: "▶ 추입이라는 희귀한 각질에 장거리 커버까지 가능<br>▶ 고유기도 무난",
		difficulty: "보통",
		difficultyComment: "▶ 기복 이벤트가 조금 있으나 어렵진 않음.",
		runningType: "추입(기본A)",
		distanceType: "장거리(기본A)<br>중거리(기본A)",
		typeComment: "",
		supportCardSetting: "3스피드를 기본으로",
		supportCardComment: "▶ 컨디션 하락 이벤트가 많은 편이라 추입마라도 타즈나 가져가도 됨.",
		supportCardRecommend: ["ssr_sp_1", "sr_sp_1", "ssr_st_5", "sr_st_2", "sr_pw_1", "ssr_fr_1"],
		feature: "▶ 일부러 히든미션을 달성하고 아래 선택지를 골라 <span class='skill-info'>[일반] 게이트 난동</span>을 달고 늦게 출발해서 역분사를 막거나 후방에서 발동하는 스킬을 노리는 전략도 있다.",
		idealStatTaget: "장거리 추입마",
		idealStat: [1000, 1000, 1000, "x", 700],
		hiddenMissionCondition: ["▶ 타카라즈카 기념 2연패(클래식, 시니어 6월 후반)"],
		hiddenMissionReward: ["▶ [무지막지 대단하지] 선택 시<br>컨디션 +1, 모든 스탯 +3, 스킬Pt +45, 시나리오 NPC 우정도 +4<br><br>▶ [역사에 이름을 남길 정도로 대단하지] 선택 시<br>컨디션 +1, 모든 스탯 +3, 스킬Pt +45, <span class='condition-info'>애교○</span> 또는 <span class='skill-info'>[일반] 게이트 난동</span> 획득, 시나리오 NPC 우정도 +4"]
	},
	{ 	type: 'chara', id: 'chara_8', score: 0,
		createDate: "2022-08-13",
		titleStyle: null,
		hiddenTag: null,
		character: "보드카",
		characterTitle: "[와일드 톱 기어] 보드카",
		title: "육성 가이드",
		descImg: null,
		performance: "좋음",
		performanceComment: "",
		difficulty: "보통",
		difficultyComment: "▶ 육성 목표에 장거리가 있어서 간혹 쥐어터지고 디버프 스킬 다는 경우가 있음.",
		runningType: "선입(기본A)<br>선행(기본B)",
		distanceType: "마일(기본A)<br>중거리(기본A)",
		typeComment: "▶ 스킬은 마일, 선입에 최적화되어 있음.",
		supportCardSetting: "스피드3, 지능2, 친구1",
		supportCardComment: "▶ 육성이 어려우면 파워 카드 넣어도 됨",
		supportCardRecommend: ["ssr_sp_1", "ssr_sp_8", "sr_sp_1", "ssr_in_1", "sr_in_7", "ssr_fr_1"],
		feature: "▶ 작성시점을 기준으로 마일 레이스 픽률 1위라고 한다.",
		idealStatTaget: "마일 선행마",
		idealStat: [1200, 600, 900, "x", 500],
		hiddenMissionCondition: ["▶ 히든1. 클래식급 엘리자베스 여왕배 우승(클래식 11월 전반)", "▶ 히든2. 야스다 기념 2연패(클래식, 시니어 6월 전반)"],
		hiddenMissionReward: ["체력 -15, 컨디션 +1, 랜덤스탯 +9~12, 스킬Pt +53~54", "파워 +20, 모든 스탯 +1~3, 스킬Pt +58, <span class='skill-info'>[일반] 뒤처지기 방지</span> 힌트Lv +1, <span class='condition-info'>훈련 능숙○</span> 획득, 시나리오NPC 우정도 +4"]
	},
	{ 	type: 'chara', id: 'chara_9', score: 0,
		createDate: "2022-08-19",
		titleStyle: null,
		hiddenTag: null,
		character: "슈퍼 크릭",
		characterTitle: "[머머링 스트림] 슈퍼 크릭",
		title: "육성 가이드",
		descImg: null,
		performance: "좋음",
		performanceComment: "▶ 회복기가 좋다.",
		difficulty: "어려움",
		difficultyComment: "▶ 육성 중 <span class='condition-info'>작은 역경</span>을 일시적으로 달게되는데, 최소실패확률이 5%로 고정되기 때문에 폭사하기 쉽다.",
		runningType: "선행",
		distanceType: "장거리",
		typeComment: "▶ 회복스킬이 좋고 스태미너 보정이 달려 장거리마에 최적화.<br>▶ 다만 <span class='skill-info'>[레어] 원호의 마에스트로</span>만 배우면 스태 500 선에서도 장거리 육성목표 전부 달성이 가능하니 중거리마로 써도 무방함.",
		supportCardSetting: "▶ 3~4스피드, 2스태<br>▶ 3~4스피드, 2지능",
		supportCardComment: "▶ 스태미나 보정치가 높으니 자신 있으면 스태 빼도 된다.",
		supportCardRecommend: ["ssr_sp_1", "ssr_sp_2", "ssr_sp_3", "sr_sp_1", "ssr_st_1", "sr_st_1"],
		feature: "",
		idealStatTaget: "장거리 선행마",
		idealStat: [1100, 850, 1000, 'x', 800],
		hiddenMissionCondition: ["사츠키상 우승(클래식 4월 전반)", "일본더비 우승(클래식 5월 후반)", "국화상 우승(클래식 10월 후반)"],
		hiddenMissionReward: ["체력 -15, 랜덤스탯 +10, 스킬Pt +45, 시나리오NPC 우정도 +4", "체력 -15, 랜덤스탯 +10, 스킬Pt +45, 시나리오NPC 우정도 +4", "모든 스탯 +3, 스킬Pt +45, <span class='skill-info'>[일반] 양호한 경기장○</span> 힌트 +1, <span class='condition-info'>커다란 빛</span> 획득, <span class='condition-info'>작은 역경</span> 제거, 시나리오NPC 우정도 +4"]
	},
	{ 	type: 'chara', id: 'chara_10', score: 0,
		createDate: "2022-08-19",
		titleStyle: null,
		hiddenTag: null,
		character: "에어 그루브",
		characterTitle: "[엠프리스 로드] 에어 그루브",
		title: "육성 가이드",
		descImg: null,
		performance: "좋음",
		performanceComment: "▶ 선입마로 쓰면 고유기가 매우 좋다",
		difficulty: "몰?루",
		difficultyComment: "",
		runningType: "선입<br>선행",
		distanceType: "단거리(기본C)<br>마일(기본B)<br>중거리(기본A)",
		typeComment: "▶ 기본 거리적성은 중거리지만 단거리 적성이 상대적으로 높고(C), 스탯보정이 단거리마에 최적화되어 있어 단거리마가 귀한 초반에는 단거리 선입마로 활용된다.<br>▶ 중거리나 마일로 써도 상관없지만 경쟁자들이 너무 많다.<br>▶ 계승 상성도 좋기 때문에 개조는 어렵지 않은 편.",
		supportCardSetting: "▶ 3스피드, 3지능<br>▶ 4스피드, 2파워",
		supportCardComment: "인자 계승에 여유가 있다면 3스피드에 타즈나도 좋음.",
		supportCardRecommend: ["ssr_sp_1", "ssr_sp_5", "sr_sp_1", "sr_sp_2", "ssr_st_4", "ssr_fr_1"],
		feature: "▶ 킹 헤일로와 단거리 선입 자리를 두고 자주 비교되는데, 안정적인 고유스킬 때문에 에어 그루브가 확실하게 우세하다는 평가다. 다만 단거리 + 선입 자체가 조커역할로 활용되며 어차피 에이스는 도주캐릭터인 박신 등이 담당하기 때문에, 둘 중 잘 큰 캐릭터를 골라도 상관 없다.",
		idealStatTaget: "단거리 선입마",
		idealStat: [1100, 600, 1000, 'x', 600],
		hiddenMissionCondition: ["트리플 티아라 달성<br>▶ 벚꽃상(클래식 4월 전반)<br>▶ 오크스(클래식 5월 후반)<br>▶ 추화상(클래식 10월 후반)"],
		hiddenMissionReward: ["모든 스탯 +3, 스킬Pt +59, 시나리오NPC 우정도 +4"]
	},
	{ 	type: 'chara', id: 'chara_11', score: 0,
		createDate: "2022-08-19",
		titleStyle: null,
		hiddenTag: null,
		character: "엘 콘도르 파사",
		characterTitle: "[엘☆Número 1] 엘 콘도르 파사",
		title: "육성 가이드",
		descImg: null,
		performance: "좋음",
		performanceComment: "희귀한 더트마",
		difficulty: "보통",
		difficultyComment: "",
		runningType: "선행",
		distanceType: "더트(기본B)",
		typeComment: "▶ 잔디 마일, 중거리도 좋지만 더트마가 귀해서 보통 더트로 쓴다",
		supportCardSetting: "▶ 3스피드, 2스태, 타즈나<br>▶ 4스피드, 2지능",
		supportCardComment: "▶ 키우기 힘들면 파워카드 낑가넣자<br>▶ 마일마도 스태미나 훈련에 쓸 턴 아낄 겸 <span class='skill-info'>[레어] 원호의 마에스트로</span> 배우면 좋다",
		supportCardRecommend: ["ssr_sp_1", "ssr_sp_3", "sr_sp_1", "ssr_st_5", "sr_st_2", "ssr_fr_1"],
		feature: "▶ 챔스에서 마일 도주마로 활약한다고 함.",
		idealStatTaget: "더트 선행마",
		idealStat: [1200, 700, 900, 'x', 800],
		hiddenMissionCondition: ["마이니치 왕관 우승(클래식 10월 전반)"],
		hiddenMissionReward: ["모든 스탯 +3, 스킬Pt +51, 시나리오NPC 우정도 +4"]
	},
	{ 	type: 'chara', id: 'chara_12', score: 0,
		createDate: "2022-08-24",
		titleStyle: null,
		hiddenTag: null,
		character: "마루젠스키",
		characterTitle: "[포뮬러 오브 루주] 마루젠스키",
		title: "육성 가이드",
		descImg: null,
		performance: "좋음",
		performanceComment: "좋은 고유기, 쉬운 육성 난이도, 쉬운 인자 개조",
		difficulty: "쉬움",
		difficultyComment: "",
		runningType: "도주",
		distanceType: "마일",
		typeComment: "개조가 쉬워서 단거리 중거리 다 가능.",
		supportCardSetting: "2스피드, 2지능을 기본으로",
		supportCardComment: "",
		supportCardRecommend: ["ssr_sp_4", "ssr_sp_1", "ssr_sp_7", "ssr_in_1", "sr_in_7", "ssr_fr_1"],
		feature: "▶ 고유스킬인 <span class='skill-info'>[일반] 홍염 기어/LP1211-M</span>은 좋은 계승기 중 하나다.",
		idealStatTaget: "마일 도주마",
		idealStat: [1200, 600, 970, 'x', 1100],
		hiddenMissionCondition: ["라디오 NIKKEI상에서 승리(클래식 7월 전반)"],
		hiddenMissionReward: ["체력 -15, 컨디션 +1, 모든 스탯 +3, 스킬Pt +60, <span class='condition-info'>주목받는 신예</span> 획득"]
	},
	{ 	type: 'chara', id: 'chara_13', score: 0,
		createDate: "2022-08-24",
		titleStyle: null,
		hiddenTag: null,
		character: "미호노 부르봉",
		characterTitle: "[MB-19890425] 미호노 부르봉",
		title: "육성 가이드",
		descImg: null,
		performance: "보통",
		performanceComment: "고유기가 까다롭다",
		difficulty: "보통",
		difficultyComment: "라이벌이 강한 편",
		runningType: "도주",
		distanceType: "중거리<br>장거리(기본B)",
		typeComment: "스태미나에 보정이 달려서 장거리도 괜찮다.",
		supportCardSetting: "3스피드, 타즈나를 기본으로 하는 걸 추천",
		supportCardComment: "",
		supportCardRecommend: ["ssr_sp_1", "sr_sp_1", "ssr_sp_7", "ssr_st_5", "sr_in_7", "ssr_fr_1"],
		feature: "▶ 고유스킬에 늦은 출발, 흥분 상태가 없어야 하는 까다로운 조건이 달려있기 때문에 지능 스탯을 올려줘야 한다.",
		idealStatTaget: "중거리 도주마",
		idealStat: [1100, 700, 800, 'x', 1000],
		hiddenMissionCondition: ["클래식 3관 달성<br>(1) 사츠키상(클래식 4월 전반)<br>(2) 일본 더비(클래식 5월 후반)<br>(3) 국화상(클래식 10월 후반)"],
		hiddenMissionReward: ["근성 빼고 나머지 4스탯 +3<br>근성 +18, 스킬Pt +45<br><span class='skill-info'>[일반] 직선 가속</span> 힌트Lv +2<br>시나리오NPC 우정도 +4"]
	},
	{ 	type: 'chara', id: 'chara_14', score: 0,
		createDate: "2022-08-24",
		titleStyle: null,
		hiddenTag: null,
		character: "심볼리 루돌프",
		characterTitle: "[로드 오브 엠퍼러] 심볼리 루돌프",
		title: "육성 가이드",
		descImg: null,
		performance: "좋음",
		performanceComment: "기본스킬셋도 좋고 고유스킬도 1티어",
		difficulty: "몰?루",
		difficultyComment: "",
		runningType: "선입<br>선행",
		distanceType: "중거리<br>장거리",
		typeComment: "▶ 고유스킬 <span class='skill-info'>[고유] 그대, 황제의 신위를 보라</span> 발동에는 선입이 훨씬 유리하다.",
		supportCardSetting: "▶ 3스피드, 2스태, 타즈나<br>▶ 4스피드, 2스태<br>▶ 3스피드, 2스태, 1파워",
		supportCardComment: "",
		supportCardRecommend: ["ssr_sp_1", "ssr_sp_8", "sr_sp_1", "sr_sp_2", "ssr_st_5", "sr_st_2"],
		feature: "▶ 각성 3레벨까지는 무조건. 4레벨은 선행용이라 애매하고 5레벨 <span class='skill-info'>[레어] 호선의 프로페서</span>는 사실 서포트카드 고정자리인 SSR 키타산 블랙이 힌트를 주기 때문에 재화가 부족하면 뒷순위. 찍으면 키타산 블랙 3체인 이벤트 안 뜨는 경우도 커버가 가능해서 좋다.<br>▶ 키우기도 쉽고 기본 스킬도 좋으며 계승 상성도 매우 뛰어나 인자 계승마로 잘 쓰인다.<br>▶ 디버프 스킬을 많이 가지고 있어서 역병마로 쓸 수도 있다. 근데 PVP 씹어먹는 1티어 말을 역병마로 쓰기는 좀.<br>▶ 루돌프는 데뷔전부터 G1 7승을 상징하는 메달을 옷에 달고 달린다.<br>▶ 히든미션 중 G1 7승까지는 육성목표에 모두 있으니 다 이기기만 하면 달성.",
		idealStatTaget: "중·장거리 선입마",
		idealStat: [1100, 900, 1100, 'x', 600],
		hiddenMissionCondition: ["▶ 클래식 3관 달성<br>(1) 사츠키상(클래식 4월 전반)<br>(2) 일본 더비(클래식 5월 후반)<br>(3) 국화상(클래식 10월 후반)", "▶ G1 레이스 7승 달성", "▶ G1 레이스 8승 달성"],
		hiddenMissionReward: ["모든 스탯 +3, 스킬Pt +51, 시나리오NPC 우정도 +4", "컨디션 +1, 랜덤스탯 +10", "체력 +30, 컨디션 +3, 랜덤스탯 +15"]
	},
	{ 	type: 'chara', id: 'chara_15', score: 0,
		createDate: "2022-09-24",
		titleStyle: null,
		hiddenTag: null,
		character: "오구리 캡",
		characterTitle: "[스트라이트 비트] 오구리 캡",
		title: "육성 가이드",
		descImg: null,
		performance: "좋음",
		performanceComment: "",
		difficulty: "낮음",
		difficultyComment: "",
		runningType: "선행<br>선입",
		distanceType: "마일<br>중거리",
		typeComment: "▶ 단거리를 제외한 모든 거리와 각질에서 활용 가능.",
		supportCardSetting: "스피드:지능:친구 = 3:2:1 추천",
		supportCardComment: "",
		supportCardRecommend: ["ssr_sp_1", "sr_sp_2", "sr_sp_1", "ssr_st_4", "ssr_st_5", "ssr_fr_1"],
		feature: "▶ 잔디에서도 좋지만 더트마가 희귀하기 때문에 더트마 역할을 최우선적으로 맡음.",
		idealStatTaget: "더트(마일)마",
		idealStat: [1100, 600, 1000, 'x', 800],
		hiddenMissionCondition: ["시니어급 텐노상(봄) 우승(시니어급 4월 후반)"],
		hiddenMissionReward: ["체력 -15, 컨디션 +1, 파워 +13, 스킬Pt +60<br>※ 해당 레이스 미출주시, 컨디션 +1"]
	},
	{ 	type: 'chara', id: 'chara_16', score: 0,
		createDate: "2022-09-24",
		titleStyle: null,
		hiddenTag: null,
		character: "토카이 테이오",
		characterTitle: "[톱 오브 조이풀] 토카이 테이오",
		title: "육성 가이드",
		descImg: null,
		performance: "애매",
		performanceComment: "스피드, 스태미나에 보너스가 붙어있는 건 좋으나, 기본 적성이 애매하고 기본 각질론 고유기가 뒤지게 안 터진다는 평가<br>다만 몇 안 되는 '굉장히' 접두사가 붙은 고유기로 발동만 되면 성능은 좋다.",
		difficulty: "보통",
		difficultyComment: "장거리 육성목표가 있어서 삐끗하기 쉽다.",
		runningType: "선행<br>추입",
		distanceType: "장거리<br>중거리",
		typeComment: "▶ 선행으론 고유스킬이 잘 안 터져서 추입마로 마개조해서 사용됨.",
		supportCardSetting: "2스피드, 1친구, 3지능(선행용)<br>3스피드, 1친구, 2파워(추입용)",
		supportCardComment: "",
		supportCardRecommend: ["ssr_sp_1", "sr_sp_1", "ssr_st_5", "sr_st_2", "ssr_in_1", "ssr_fr_1"],
		feature: "▶ 귀엽다.",
		idealStatTaget: "장거리 선행마",
		idealStat: [1000, 1000, 900, 300, 550],
		hiddenMissionCondition: ["사츠키상 우승(클래식 4월 전반)", "일본더비 우승(클래식 5월 후반)", "클래식 3관 달성<br>- 사츠키상(클래식 4월 전반)<br>- 일본더비(클래식 5월 후반)<br>- 국화상(클래식 10월 후반)", "봄 시니어 3관 달성<br>- 오사카배(시니어 3월 후반)<br>- 텐노상(봄)(4월 후반)<br>- 타카라즈카 기념(시니어 6월 후반)"],
		hiddenMissionReward: ["모든 스탯 +3~4, 스킬Pt +50~60, 시나리오NPC 우정도 +4", "모든 스탯 +3~4, 스킬Pt +50~60, 시나리오NPC 우정도 +4, <span class='skill-info'>[일반] 뒤처지기 방지</span> 힌트 +1", "모든 스탯 +3~4, 스킬Pt +50~60, 시나리오NPC 우정도 +4", "스피드, 파워 +32"]
	},
	{ 	type: 'chara', id: 'chara_17', score: 0,
		createDate: "2022-09-24",
		titleStyle: null,
		hiddenTag: null,
		character: "티엠 오페라 오",
		characterTitle: "[오 솔레 수오!] 티엠 오페라 오",
		title: "육성 가이드",
		descImg: null,
		performance: "보통",
		performanceComment: "스탯 올리기 쉽고 각성 스킬도 괜찮지만, 고유스킬 발동 조건이 터무니 없어서 사실상 없는 취급",
		difficulty: "낮음",
		difficultyComment: "▶ 고유기 발동조건은 나중에 완화된다고 함",
		runningType: "선행",
		distanceType: "중거리<br>장거리",
		typeComment: "",
		supportCardSetting: "3스피드, 3스태<br>2스피드, 2스태, 2지능",
		supportCardComment: "",
		supportCardRecommend: ["ssr_sp_1", "ssr_sp_3", "sr_sp_1", "ssr_st_5", "sr_st_1", "ssr_fr_1"],
		feature: "▶ 3레벨 각성스킬 <span class='skill-info'>[레어] 스피드스터</span>가 핵심. 5레벨 각성스킬 <span class='skill-info'>[레어] 킬러 튠</span>도 중거리마에게 매우 좋은 스킬.<br>▶ 고유기가 없는 취급이므로 히든미션 보상을 두 번 받아 스탯을 최대한 올리는 게 육성 중 최우선 목표임. 총 120의 스탯을 획득할 수 있다.",
		idealStatTaget: "장거리 선행마",
		idealStat: [1000, 1000, 750, 'x', 500],
		hiddenMissionCondition: ["가을 3관 달성<br>- 텐노상(클래식/시니어 10월 후반)<br>- 재팬컵(클래식/시니어 11월 후반)<br>- 아리마기념(클래식/시니어 12월 후분)<br>※ 이 히든미션은 클래식급/시니어급에서 두 번 획득할 수 있다."],
		hiddenMissionReward: ["컨디션 +1, 모든 스탯 +12, 스킬Pt +24"]
	},


	
	
	/*
	{ 	type: 'chara', id: 'chara_', score: 0,
		createDate: "2022--",
		titleStyle: null,
		hiddenTag: null,
		character: "",
		characterTitle: "[] ",
		title: "육성 가이드",
		descImg: null,
		performance: "좋음",
		performanceComment: "",
		difficulty: "보통",
		difficultyComment: "▶ ",
		runningType: "",
		distanceType: "",
		typeComment: "▶ ",
		supportCardSetting: "",
		supportCardComment: "▶ ",
		supportCardRecommend: ["", "", "", "", "", ""],
		feature: "▶ ",
		idealStatTaget: "",
		idealStat: [, , , , ],
		hiddenMissionCondition: [""],
		hiddenMissionReward: [""]
	},
	*/

	
	
	
	{	type: 'tip', id: 'tip_1', score: 0,
		createDate: "2022-07-20",
		titleStyle: null,
		hiddenTag: null,
		character: null,
		title: "능력치(스탯)학개론",
		descImg: "machidance.gif",
		desc: `- 스피드: 최고속도 향상. 높을 수록 스태미너 소비량이 증가. （따라서, 스피드와 스태미너를 1.5:1 정도의 비율로 맞춰주는 것이 추천됨<br>- 스태미너: 페이스조절능력 향상 + 평균속도 향상（체력 향상） + 몸싸움, 추월 등 상황변수 계산에 영향.<br>- 파워: 가속력 향상 + 코너링 향상 + 자리싸움（몸싸움） 등 상황변수 계산에 영향. 특히 자리경합에서 가장 중요한 능력치로 경합에서 밀리면 스태미너 소비량이 늘어남.<br>- 근성: 스태미너 보조 + 라스트 스퍼트에 최고속도 유지. 1년차 패치로 좋은 보조능력치가 되나 아직까지는 가장 우선순위가 낮음.<br>- 지능: 스태미너 소비를 줄이는 좋은 위치를 선정하거나 스킬 발동률을 높이거나 늦은 출발, 흥분에 걸릴 확률을 줄여주는 등 전략적인 경기 운영과 관련됨. 추가로 내리막길에서 스태미너 소비량도 줄여줌.<br><br>※ 각 능력치가 300을 초과할 때마다 속도보너스가 붙음. 따라서 300의 배수로 목표를 잡고 육성.<br><br><br><b>[각질별 중요 능력치]</b><br>- 도주: 스피드, 지능 > 스태미너<br>- 선행: 스피드, 스태미너 > 파워, 지능<br>- 선입: 스피드, 파워<br>- 추입: 스피드, 파워<br><br><br><b>[거리별 이상적인 능력치 목표]</b><br>- 마일, 더트<br> 스피드 1100 / 스태 600 / 파워 1000 / 근성 300 / 지능 400<br>- 단거리<br> 스피드 1200 / 스태 500 / 파워 1100 / 근성 300 / 지능 400<br>- 중거리<br> 스피드 1000 / 스태 700 / 파워 900 / 근성 300 / 지능 400<br>- 장거리<br> 스피드 800 / 스태 800 / 파워 800 / 근성 300 / 지능 400<br><br>※ 이상적인 목표치이며 각질, 캐릭터에 맞추어 조정하면 됨. 육성과 PVP에서 모두 통하는 능력치.<br>※ 단거리 외엔 원호의마에스트로, 먹보 등 스태미너 회복스킬 하나 정도 갖추는 것이 추천됨<br>※ 근성은 서포트카드가 몰려있는 경우에만 한 번씩 찍어줘도 이벤트 상승량과 합하면 300을 무리없이 찍을 수 있음. 중, 장거리마 육성시엔 스태미너 훈련을 하면 같이 오르므로 따로 찍을 필요도 없음.`,
	},
	{	type: 'tip', id: 'tip_2', score: 0,
		createDate: "2022-07-20",
		titleStyle: null,
		hiddenTag: null,
		character: null,
		title: "서포트 카드, 어떻게 써야 하나?",
		descImg: null,
		desc: `1. 스피드, 스태미너같은 주요 능력치 훈련 상승량에 도움을 주는 카드들로 구성. 훈련은 반복할 경우 훈련레벨이 상승해 스탯 상승량이 증가하기 때문에 서포트카드 특성 능력치는 두 개 정도까지만 선택하는 것이 효율적임.<br>2. 서포트카드의 효과（추가 상승）로 올리기 힘든 능력치를 인자계승으로 얻어가는 것이 좋음.<br>&nbsp&nbsp(1) 단거리, 마일: 스피드, 파워는 훈련으로 올리고 스태미너는 인자계승으로.<br>&nbsp&nbsp(2) 중거리, 장거리: 스피드, 스태미너는 훈련으로 올리고 파워는 인자계승으로.<br>3. 서포트카드가 올려주는 스탯 상승량은 거기서 거기기 때문에 특화 능력치와 알려주는 스킬을 보고 판단하자.<br>4. 지능카드는 1~2장 넣는 것이 좋음. 지능도 높여야 할 뿐더러 지능훈련이 체력을 회복해주기 때문에 장기적으로 매우 중요함.<br>5. 타즈나처럼 특화능력치가 없고 대신 외출, 스킬용으로 쓰는 카드의 경우 지능 카드 대신 넣자. 지능카드의 역할의 상당부분이 체력관리기 때문에, 외출로 체력관리를 해주는 서포트카드는 지능카드를 대신할 수 있다.`,
	},
	{	type: 'tip', id: 'tip_3', score: 0,
		createDate: "2022-07-20",
		titleStyle: null,
		hiddenTag: null,
		character: null,
		title: "SSR 타즈나 서포트카드 동반 외출 효과",
		descImg: "machimoong.gif",
		desc: `1회:<br>체력+25~40, 스피드+5~6, 컨디션 +1, 타즈나 우정도 +5<br><br>2회:<br>체력+25~40, 타즈나 우정도 +5, 상태이상효과 제거 <br><br>3회:<br>- 위 선택지<br>체력+25~40, 스테미너 +5~6, 컨디션 +1, 타즈나 우정도 +5 <br>- 아래 선택지<br>스테미너+10~13, 근성+10~13, 컨디션 +1, 타즈나 우정도 +5 <br><br>4회:<br>체력+35~56, 지능+5~6, 컨디션 +1, 타즈나 우정도 +5, 상태이상효과 제거 <br><br>5회:<br>체력+35~56, 스킬포인트+30~40, 컨디션 +2, 타즈나 우정도 +5<br>다음 중 랜덤으로 하나 겟(완전 랜덤인 것 같기도 하고 아닌 것 같기도 하고)<br>- <span class='skill-info'>[일반] 집중력</span> 힌트Lv +1<br>- <span class='skill-info'>[레어] 컨센트레이션</span> 힌트Lv +1<br>`,
	},
	{	type: 'tip', id: 'tip_4', score: 0,
		createDate: "2022-07-21",
		titleStyle: null,
		hiddenTag: null,
		character: null,
		title: "한정미션: 트레센 학원 특별 명트레이너로 가는 길! 깨는 법",
		descImg: "mission01.jpg",
		desc: TIP4_DESC,
	},
	{	type: 'tip', id: 'tip_5', score: 0,
		createDate: "2022-07-21",
		titleStyle: null,
		hiddenTag: null,
		character: null,
		title: "회복스킬학개론",
		descImg: "machidance.gif",
		desc: TIP5_DESC,
	},
	{	type: 'tip', id: 'tip_6', score: 0,
		createDate: "2022-07-21",
		titleStyle: null,
		hiddenTag: null,
		character: null,
		title: "서포트카드의 가치는 무엇으로 결정될까?",
		descImg: null,
		desc: TIP6_DESC,
	},
	{	type: 'tip', id: 'tip_7', score: 0,
		createDate: "2022-07-21",
		titleStyle: null,
		hiddenTag: null,
		character: null,
		title: "인자계승학개론",
		descImg: null,
		desc: TIP7_DESC,
	},
	{	type: 'tip', id: 'tip_8', score: 0,
		createDate: "2022-07-21",
		titleStyle: null,
		hiddenTag: null,
		character: null,
		title: "레이스 제패 칭호 목록",
		descImg: null,
		desc: TIP8_DESC,
	},
	{	type: 'tip', id: 'tip_9', score: 0,
		createDate: "2022-07-27",
		titleStyle: null,
		hiddenTag: null,
		character: null,
		title: "육성 시나리오 중 얻을 수 있는 배드/굿 컨디션 목록",
		descImg: null,
		desc: TIP9_DESC,
	},
	{	type: 'tip', id: 'tip_10', score: 0,
		createDate: "2022-07-28",
		titleStyle: null,
		hiddenTag: null,
		character: null,
		title: "쓸만한 SR 카드 리스트",
		descImg: null,
		desc: TIP10_DESC,
	},
	{	type: 'tip', id: 'tip_11', score: 0,
		createDate: "2022-07-28",
		titleStyle: null,
		hiddenTag: null,
		character: null,
		title: "고유기 레벨 업 조건 및 URA 시나리오 히든 보상 조건",
		descImg: null,
		desc: TIP11_DESC,
	},
	{	type: 'tip', id: 'tip_12', score: 0,
		createDate: "2022-08-24",
		titleStyle: null,
		hiddenTag: null,
		character: null,
		title: "SSR 타즈나 좋아요?",
		descImg: null,
		desc: TIP12_DESC,
	},
	{	type: 'tip', id: 'tip_13', score: 0,
		createDate: "2022-09-30",
		titleStyle: null,
		hiddenTag: null,
		character: null,
		title: "직선 스킬이랑 코너 스킬 중에 뭐 찍어요?",
		descImg: null,
		desc: "<b>단거리를 제외하고</b> 경기장이 직선구간보다 코너구간이 더 많기 때문에 일반적으론 코너 스킬이 우선된다.<br>다만, 경기장의 모양에 따라 코너 스킬의 활용도가 떨어지는 경우가 있으므로 챔피언스미팅용 말을 육성하는 경우 경기장의 구조를 파악하고 찍도록 하자. (예컨대, 첫 번째 코너가 스타트 지점에서 멀어 코너 구간에 진입했을 때 이미 가속이 끝나는 경기장이라면, 첫 코너에서 터지거나 혹은 터질 가능성이 있는 코너 가속 스킬의 가치는 크게 떨어진다)",
	},
];


/*
	{ 	type: 'chara', id: 'chara_', score: 0,
		createDate: "2022-07-20",
		titleStyle: null,
		hiddenTag: null,
		character: "",
		title: "",
		descImg: null,
		runningType: "",
		distanceType: "",
		typeComment: "",
		supportCardSetting: "",
		supportCardComment: "",
		feature: "",
		idealStatTaget: "",
		idealStat: [, , , , ],
		hiddenMissionCondition: "",
		hiddenMissionReward: ""
	},
*/