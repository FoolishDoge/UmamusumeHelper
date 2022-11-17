const supportEvents = [
//골드 쉽
{createDate:`2022-08-13`, character:`골드 쉽`, eventType:`support`, cardName: null, title: `모험가 골드 쉽`, choice: [`체, 체력 아냐……?`, `강한 끈기가 아닐까……?`], effect: [`스태미나+15<br>골드 쉽의 우정도+5`, `근성+10<br>스킬 Pt+15<br>골드 쉽의 우정도+5`]},
{createDate:`2022-08-13`, character:`골드 쉽`, eventType:`support`, cardName: null, title: `부활하라! 골쉽표 소스 야키소바!`, choice: [`……맛을 다시 연구해보는 건 어때?`, `……계란 타코야키를 팔아보면 어때?`], effect: [`컨디션 상승<br>스태미나+5`, `골드 쉽의 우정도+5<br><span class='skill-info'>[일반] 한신 경기장○</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`골드 쉽`, eventType:`support`, cardName: `[불침함의 진격] 골드 쉽`, title: `① 열혈! 에어 농구!`, choice: [`(선택지 없음)`], effect: [`체력-10<br>스태미너+25`]},
{createDate:`2022-08-13`, character:`골드 쉽`, eventType:`support`, cardName: `[불침함의 진격] 골드 쉽`, title: `② 연어를 리스펙트!`, choice: [`(선택지 없음)`], effect: [`체력-10<br>근성+25`]},
{createDate:`2022-08-13`, character:`골드 쉽`, eventType:`support`, cardName: `[불침함의 진격] 골드 쉽`, title: `③ 강적이라 쓰고 『친구』라 읽는다!!`, choice: [`(선택지 없음)`], effect: [`스태미너+10<br><span class='skill-info'>[레어] 곡선의 소믈리에</span> 힌트 LV+1`]},
{createDate:`2022-10-22`, character:`골드 쉽`, eventType:`support`,  cardName: `[우마왕 전설・최강이 된 썰] 골드 쉽`, title: `① 골쉽 님, 성을 세우다`, choice: [`자금을 모은다거나…?`, `성으로 쓸만한 것을 찾는다거나?`], effect: [`체력 최대치+4<br>골드 쉽의 우정도+5`, `스피드+10<br>골드 쉽의 우정도+5`]},
{createDate:`2022-10-22`, character:`골드 쉽`, eventType:`support`,  cardName: `[우마왕 전설・최강이 된 썰] 골드 쉽`, title: `② 골쉽 님, 던전을 찾다`, choice: [`(선택지 없음)`], effect: [`체력-15<br>스피드+5<br>스태미나+5<br><span class='skill-info'>[일반] 장거리 직선○</span> 힌트 LV+1`]},
{createDate:`2022-10-22`, character:`골드 쉽`, eventType:`support`,  cardName: `[우마왕 전설・최강이 된 썰] 골드 쉽`, title: `③ 골쉽 님, 부하를 모으다`, choice: [`사, 사천왕?`, `전혀 모르겠어…`], effect: [`<span class='skill-info'>[레어] 내적 체험</span> 힌트 LV+3<br>체력-10<br>스피드+10<br>스태미나+10<br>골드 쉽의 우정도+5<br>또는<br><span class='skill-info'>[일반] 안쪽 코너 여포</span> 힌트 LV+3<br>체력-10<br>스피드+5<br>스태미나+5<br>골드 쉽의 우정도+5`, `<span class='skill-info'>[일반] 단독○</span> 힌트 LV+1<br>체력+10`]},
//골드 시티
{createDate:`2022-08-13`, character:`골드 시티`, eventType:`support`, cardName: null, title: `08:36 / 아, 늦잠 잤네`, choice: [`이제 곧 수업 시작하는데……`, `서둘러도 별수 없지`], effect: [`컨디션 하락<br>스킬 Pt+45<br>골드 시티의 우정도+5`, `체력+10<br>지능+5<br>골드 시티의 우정도+5`]},
{createDate:`2022-08-13`, character:`골드 시티`, eventType:`support`, cardName: null, title: `13:12 / 점심시간, 기합 좀 넣어야지`, choice: [`우선은 눈앞의 일에 집중하자`, `에너지음료 마실래?`], effect: [`스킬 Pt+30<br>골드 시티의 우정도+5`, `<span class='skill-info'>[일반] 짧은 휴식</span> 힌트 LV+1<br>골드 시티의 우정도+5`]},
{createDate:`2022-08-13`, character:`골드 시티`, eventType:`support`, cardName: `[Run(my)way] 골드 시티`, title: `① Pride`, choice: [`(선택지 없음)`], effect: [`체력+20`]},
{createDate:`2022-08-13`, character:`골드 시티`, eventType:`support`, cardName: `[Run(my)way] 골드 시티`, title: `② Struggle`, choice: [`(선택지 없음)`], effect: [`체력+10<br>스태미너+10`]},
{createDate:`2022-08-13`, character:`골드 시티`, eventType:`support`, cardName: `[Run(my)way] 골드 시티`, title: `③ One Step`, choice: [`(선택지 없음)`], effect: [`스태미너+10<br><span class='skill-info'>[레어] 혜안</span> 힌트 LV+1`]},
//그래스 원더
{createDate:`2022-08-13`, character:`그래스 원더`, eventType:`support`, cardName: null, title: `낮 무렵에 이야기를 나누다`, choice: [`동요시켜서 페이스를 무너뜨리는 게 좋아`, `철저히 마크해서 마음대로 달리지 못하게 해`], effect: [`그래스 원더의 우정도+5<br><span class='skill-info'>[일반] 선행 심리전</span> 힌트 LV+1`, `<span class='skill-info'>[일반] 집중 마크○</span> 힌트 LV+1<br>그래스 원더의 우정도+5`]},
{createDate:`2022-08-13`, character:`그래스 원더`, eventType:`support`, cardName: null, title: `서고에서 고민하다`, choice: [`우선은 찾은 한 권을 자세히 읽자`, `같이 찾아볼까?`], effect: [`지능+10<br>그래스 원더의 우정도+5`, `근성+5<br>지능+5<br>그래스 원더의 우정도+5`]},
{createDate:`2022-08-13`, character:`그래스 원더`, eventType:`support`, cardName: `[천자만홍에 섞이지 않는 한 송이] 그래스 원더`, title: `① 은밀한 열정`, choice: [`(선택지 없음)`], effect: [`체력+10<br>지능+5<br>스킬 Pt+15<br>그래스 원더의 우정도+5`]},
{createDate:`2022-08-13`, character:`그래스 원더`, eventType:`support`, cardName: `[천자만홍에 섞이지 않는 한 송이] 그래스 원더`, title: `② 한때를, 화창하게`, choice: [`제대로 쉬고 있어?`, `무리하고 있지 않아?`], effect: [`체력+15<br>그래스 원더의 우정도+5`, `성공 시 :<br>근성+5<br>파워+5<br>지능+10<br>그래스 원더의 우정도+5<br>실패 시 :<br>체력-10<br>파워+5<br>근성+5<br>지능+5<br>그래스 원더의 우정도+5`]},
{createDate:`2022-08-13`, character:`그래스 원더`, eventType:`support`, cardName: `[천자만홍에 섞이지 않는 한 송이] 그래스 원더`, title: `③ 숨긴다면, 꽃이어라`, choice: [`(선택지 없음)`], effect: [`성공 시 :<br>체력-10<br>스피드+5<br>근성+5<br>지능+5<br>강인한 다리 힌트 LV+1~3<br>그래스 원더의 우정도+5<br>실패 시 :<br>체력-10<br>스피드+5<br>근성+5<br>지능+5<br><span class='skill-info'>[일반] 상승기류</span> 힌트 LV+1<br>그래스 원더의 우정도+5`]},
//나리타 브라이언
{createDate:`2022-11-08`, character:`나리타 브라이언`, eventType:`support`,  cardName: `[Two Pieces] 나리타 브라이언`, title: `① 레이스 플래너・브라이언`, choice: [`(선택지 없음)`], effect: [`체력 최대치+4<br>스피드+5`]},
{createDate:`2022-11-08`, character:`나리타 브라이언`, eventType:`support`,  cardName: `[Two Pieces] 나리타 브라이언`, title: `② 언니만이 아는`, choice: [`(선택지 없음)`], effect: [`체력-10<br>스피드+20`]},
{createDate:`2022-11-08`, character:`나리타 브라이언`, eventType:`support`,  cardName: `[Two Pieces] 나리타 브라이언`, title: `③ 이어지는 꿈을 향해 달려나가서`, choice: [`(선택지 없음)`], effect: [`체력-10<br>스피드+20<br><span class='skill-info'>[레어] 불굴의 정신</span> 힌트 LV+1`]},
{createDate:`2022-11-08`, character:`나리타 브라이언`, eventType:`support`,  cardName: null, title: `고독한 늑대`, choice: [`무리하진 마`, `혼자서 달리고 싶었구나`], effect: [`스피드+3<br>스태미나+3<br>파워+3<br>나리타 브라이언의 우정도+5`, `<span class='skill-info'>[일반] 고독한 늑대</span> 힌트 LV+1<br>나리타 브라이언의 우정도+5`]},
{createDate:`2022-11-08`, character:`나리타 브라이언`, eventType:`support`,  cardName: null, title: `학생회 임원!`, choice: [`도와줄까?`, `체력이 붙을 것 같아`], effect: [`컨디션 상승+1<br>스피드+5<br>나리타 브라이언의 우정도+5`, `체력 최대치+4<br>나리타 브라이언의 우정도+5`]},
//나리타 타이신
{createDate:`2022-08-13`, character:`나리타 타이신`, eventType:`support`, cardName: null, title: `딱히, 내버려 둬`, choice: [`응원은 하게 해줘!`, `하지만 힘이 되고 싶어`], effect: [`스태미나+5<br>스킬 Pt+15<br>나리타 타이신의 우정도+5`, `파워+5<br>스킬 Pt+15<br>나리타 타이신의 우정도+5`]},
{createDate:`2022-08-13`, character:`나리타 타이신`, eventType:`support`, cardName: null, title: `딱히, 방해하지 마`, choice: [`선택지가 없는 경우`, `늦지 않게 조심해`, `무리하는 건 좋지 않아`], effect: [`나리타 타이신의 우정도+5<br><span class='skill-info'>[일반] 추격</span> 힌트 LV+1`, `<span class='skill-info'>[일반] 추격</span> 힌트 LV+1<br>나리타 타이신의 우정도+5`, `스킬 Pt+30<br>나리타 타이신의 우정도+5`]},
{createDate:`2022-08-13`, character:`나리타 타이신`, eventType:`support`, cardName: `[물결치는 기분] 나리타 타이신`, title: `① 밤에 몰래…?`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>스태미너+5`]},
{createDate:`2022-08-13`, character:`나리타 타이신`, eventType:`support`, cardName: `[물결치는 기분] 나리타 타이신`, title: `② 인조이 뮤지컬!`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>스태미너+5<br>파워+5<br><span class='skill-info'>[일반] 간파</span> 힌트 LV+1`]},
//나리타 탑 로드
//나이스 네이처
{createDate:`2022-08-13`, character:`나이스 네이처`, eventType:`support`, cardName: null, title: `(맛있는) 참견`, choice: [`무를 갈아서 같이 먹으면 페이스 업!`, `기숙사에서 튀김 파티다!`], effect: [`<span class='skill-info'>[일반] 페이스 업</span> 힌트 LV+1<br>나이스 네이처의 우정도+5`, `컨디션 상승<br>체력 최대치+4<br>나이스 네이처의 우정도+5`]},
{createDate:`2022-08-13`, character:`나이스 네이처`, eventType:`support`, cardName: null, title: `(하냐도) 어울리지 않아`, choice: [`힐링하는 것도 중요하다고 전한다`, `현명하게 가게에 들어가는 방법을 전한다`], effect: [`체력+20<br>나이스 네이처의 우정도+5`, `체력+10<br>지능+5<br>나이스 네이처의 우정도+5`]},
{createDate:`2022-08-13`, character:`나이스 네이처`, eventType:`support`, cardName: `[순진천진난만] 나이스 네이처`, title: `① 뒤, 쫓아서`, choice: [`네이처도 젊구먼~`, `나도 기합이 들어갔어`], effect: [`체력+5<br>지능+3<br>나이스 네이처의 우정도+5`, `나이스 네이처의 우정도+20`]},
{createDate:`2022-08-13`, character:`나이스 네이처`, eventType:`support`, cardName: `[순진천진난만] 나이스 네이처`, title: `② 뒤, 순풍을 받고`, choice: [`(선택지 없음)`], effect: [`체력+10<br>지능+5<br><span class='skill-info'>[일반] 복병○</span> 힌트 LV+3<br>나이스 네이처의 우정도+5`]},
{createDate:`2022-08-13`, character:`나이스 네이처`, eventType:`support`, cardName: `[…그냥 물방울이라니까요] 나이스 네이처`, title: `① (노력을 잘해서) 적당히 잘하는`, choice: [`(선택지 없음)`], effect: [`스태미너+5<br>근성+5`]},
{createDate:`2022-08-13`, character:`나이스 네이처`, eventType:`support`, cardName: `[…그냥 물방울이라니까요] 나이스 네이처`, title: `② 결과는 뻔하지(그래도!)`, choice: [`(선택지 없음)`], effect: [`스태미너+5<br>근성+10<br><span class='skill-info'>[일반] 외장 탱크</span> 힌트 LV+1`]},
//나카야마 페스타
//니시노 플라워
{createDate:`2022-08-13`, character:`니시노 플라워`, eventType:`support`, cardName: null, title: `예쁘게 피우자♪`, choice: [`분담해서 효율적으로 진행하자!`, `서둘러 물뿌리개에 물을 담아올게!`], effect: [`지능+15<br>니시노 플라워의 우정도+5`, `스피드+10<br>파워+5<br>니시노 플라워의 우정도+5`]},
{createDate:`2022-08-13`, character:`니시노 플라워`, eventType:`support`, cardName: null, title: `온기가 담긴 애정 도시락`, choice: [`귀여운 반찬이다`, `영양가가 풍부할 것 같아`], effect: [`<span class='condition-info'>애교○</span> 상태 획득<br>니시노 플라워의 우정도+5`, `체력+20<br>니시노 플라워의 우정도+5`]},
{createDate:`2022-08-13`, character:`니시노 플라워`, eventType:`support`, cardName: `[당신에게 바친다] 니시노 플라워`, title: `① 쉬어줬으면 해서…!`, choice: [`(선택지 없음)`], effect: [`컨디션 상승<br>스피드+3<br>파워+3<br>지능+3`]},
{createDate:`2022-08-13`, character:`니시노 플라워`, eventType:`support`, cardName: `[당신에게 바친다] 니시노 플라워`, title: `② 고맙다는 말을 하고 싶어서…!`, choice: [`화관을 주려고 서둘렀구나`, `감사의 화관이라니 좋네`], effect: [`파워+5<br><span class='skill-info'>[일반] 직선 달인</span> 힌트 LV+1<br>니시노 플라워의 우정도+5`, `지능+5<br><span class='skill-info'>[일반] 직선 가속</span> 힌트 LV+1<br>니시노 플라워의 우정도+5`]},
{createDate:`2022-08-13`, character:`니시노 플라워`, eventType:`support`, cardName: `[아직 작은 꽃봉오리지만] 니시노 플라워`, title: `① 내가 할 수 있는 일`, choice: [`(선택지 없음)`], effect: [`체력 최대치+4<br>스킬 Pt+10`]},
{createDate:`2022-08-13`, character:`니시노 플라워`, eventType:`support`, cardName: `[아직 작은 꽃봉오리지만] 니시노 플라워`, title: `② 동경의…`, choice: [`굉장히 어른스러워`, `그, 그러니까…`], effect: [`체력-10<br>지능+20<br>니시노 플라워의 우정도+5`, `지능+5<br>스킬 Pt+15`]},
{createDate:`2022-08-13`, character:`니시노 플라워`, eventType:`support`, cardName: `[아직 작은 꽃봉오리지만] 니시노 플라워`, title: `③ 소중한 것은!`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>지능+10<br>한줄기 질풍 힌트 LV+1~3<br>또는<br>스피드+5<br>지능+10<br><span class='skill-info'>[일반] 직선 달인</span> 힌트 LV+1`]},
//다이와 스칼렛
{createDate:`2022-08-13`, character:`다이와 스칼렛`, eventType:`support`, cardName: null, title: `내일은 내가 이길 거야!`, choice: [`항상 이렇게 일찍 와?`, `2등도 정말 대단해`], effect: [`지능+10<br>다이와 스칼렛의 우정도+5`, `컨디션 상승<br>스킬 Pt+15<br>다이와 스칼렛의 우정도+5`]},
{createDate:`2022-08-13`, character:`다이와 스칼렛`, eventType:`support`, cardName: null, title: `이 정도는 괜찮다니까!`, choice: [`테이핑 해줄까?`, `혹시 모르니 양호실에 가자!`], effect: [`다이와 스칼렛의 우정도+5<br><span class='skill-info'>[일반] 스태미나 킵</span> 힌트 LV+1`, `체력+20<br>컨디션 상승<br>다이와 스칼렛의 우정도+5`]},
{createDate:`2022-08-13`, character:`다이와 스칼렛`, eventType:`support`, cardName: `[노력은 배신하지 않아!] 다이와 스칼렛`, title: `① 상대가 누구든 간에 질 수는 없지!`, choice: [`(선택지 없음)`], effect: [`체력+15<br>지능+5<br>다이와 스칼렛의 우정도+5`]},
{createDate:`2022-08-13`, character:`다이와 스칼렛`, eventType:`support`, cardName: `[노력은 배신하지 않아!] 다이와 스칼렛`, title: `② 청소도 질 수는 없지!`, choice: [`(선택지 없음)`], effect: [`지능+10<br><span class='skill-info'>[일반] 새 출발</span> 힌트 LV+1`]},
{createDate:`2022-11-17`, character:`다이와 스칼렛`, eventType:`support`,  cardName: `[트라이플☆버케이션] 다이와 스칼렛`, title: `① 리액션도 1등!?`, choice: [`리액션 연구, 좋을 것 같아`, `지금 그대로가 좋아`], effect: [`스피드+3<br>파워+3<br>지능+3<br>다이와 스칼렛의 우정도+5`, `체력+15<br>연속 이벤트 종료`]},
{createDate:`2022-11-17`, character:`다이와 스칼렛`, eventType:`support`,  cardName: `[트라이플☆버케이션] 다이와 스칼렛`, title: `② 호러로 배우자, 깜짝 놀란 얼굴`, choice: [`(선택지 없음)`], effect: [`파워+5<br>지능+5`]},
{createDate:`2022-11-17`, character:`다이와 스칼렛`, eventType:`support`,  cardName: `[트라이플☆버케이션] 다이와 스칼렛`, title: `③ 놀아 보자☆풀사이드`, choice: [`(선택지 없음)`], effect: [`체력-5<br>파워+10<br><span class='skill-info'>[레어] 레이스 플래너</span> 힌트 LV+3<br>또는<br>체력-5<br>파워+5<br><span class='skill-info'>[일반] 좋은 위치 뒤따르기</span> 힌트 LV+3`]},
//다이이치 루비
//다이타쿠 헬리오스
{createDate:`2022-08-13`, character:`다이타쿠 헬리오스`, eventType:`support`, cardName: null, title: `미소 포에버`, choice: [`기합으로 참아!`, `일단 진정하자`], effect: [`스피드+5<br>파워+10<br>다이타쿠 헬리오스의 우정도+5`, `다이타쿠 헬리오스의 우정도+5<br><span class='skill-info'>[일반] 복병○</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`다이타쿠 헬리오스`, eventType:`support`, cardName: null, title: `태양과 인카운터☆`, choice: [`각오하고 열창한다`, `추임새를 넣으며 분위기를 띄운다`], effect: [`파워+10<br>다이타쿠 헬리오스의 우정도+5`, `<span class='condition-info'>주목받는 신예</span> 상태 획득<br>다이타쿠 헬리오스의 우정도+5`]},
{createDate:`2022-08-13`, character:`다이타쿠 헬리오스`, eventType:`support`, cardName: `[파티 피플 · 파티 나이트!] 다이타쿠 헬리오스`, title: `① #bff #Party!`, choice: [`잘 부탁해! 웨~이!`, `뭐, 나도!?`], effect: [`파워+10<br>다이타쿠 헬리오스의 우정도+5`, `스피드+10<br>다이타쿠 헬리오스의 우정도+5`]},
{createDate:`2022-08-13`, character:`다이타쿠 헬리오스`, eventType:`support`, cardName: `[파티 피플 · 파티 나이트!] 다이타쿠 헬리오스`, title: `② #lol #Party!! #2nd`, choice: [`피해!`, `잡아!`], effect: [`파워+10<br><span class='skill-info'>[일반] 직활강</span> 힌트 LV+1<br>다이타쿠 헬리오스의 우정도+5<br>또는<br>스피드+10<br>파워+10<br><span class='skill-info'>[일반] 직활강</span> 힌트 LV+3<br>다이타쿠 헬리오스의 우정도+5`, `체력+20<br>다이타쿠 헬리오스의 우정도+5<br><span class='skill-info'>[일반] 전개 살피기</span> 힌트 LV+1`]},
//데어링 택트
//라이스 샤워
{createDate:`2022-08-13`, character:`라이스 샤워`, eventType:`support`, cardName: null, title: `꽃집에서의 1페이지`, choice: [`물 주는 거 도와줄까?`, `꽃 진열하고 올까?`], effect: [`컨디션 2단계 상승<br>라이스 샤워의 우정도+5`, `스태미나+10<br>라이스 샤워의 우정도+5`]},
{createDate:`2022-08-13`, character:`라이스 샤워`, eventType:`support`, cardName: null, title: `흐린 날의 1페이지`, choice: [`체육관을 빌려서 달리자!`, `햇빛 쨍쨍 인형을 만들자!`], effect: [`스피드+5<br>근성+5<br>라이스 샤워의 우정도+5`, `<span class='skill-info'>[일반] 양호한 경기장○</span> 힌트 LV+1<br>라이스 샤워의 우정도+5`]},
{createDate:`2022-08-13`, character:`라이스 샤워`, eventType:`support`, cardName: `[『행복』이 흩날릴 때] 라이스 샤워`, title: `① 바람이 강한 날의 1페이지`, choice: [`(선택지 없음)`], effect: [`근성+10<br>라이스 샤워의 우정도+5`]},
{createDate:`2022-08-13`, character:`라이스 샤워`, eventType:`support`, cardName: `[『행복』이 흩날릴 때] 라이스 샤워`, title: `② 친구와 노력한 날의 1페이지`, choice: [`(선택지 없음)`], effect: [`스태미너+10<br>라이스 샤워의 우정도+5`]},
{createDate:`2022-08-13`, character:`라이스 샤워`, eventType:`support`, cardName: `[『행복』이 흩날릴 때] 라이스 샤워`, title: `③ 둘이서 노력한 날의 1페이지`, choice: [`(선택지 없음)`], effect: [`성공 시 :<br>체력-10<br>스태미너+5<br>근성+5<br><span class='skill-info'>[레어] 위기 앞의 저력</span> 힌트 LV+3<br>라이스 샤워의 우정도+5<br>실패 시 :<br>체력-10<br><span class='skill-info'>[일반] 외장 탱크</span> 힌트 LV+1<br>라이스 샤워의 우정도+5`]},
//마루젠스키
{createDate:`2022-08-13`, character:`마루젠스키`, eventType:`support`, cardName: `[트레센 학원] 마루젠스키`, title: `귀여운 후배를 위해서인걸`, choice: [`무릎을 쓰는 방법을 가르쳐 준다`, `기초 체력을 늘린다`], effect: [`<span class='skill-info'>[일반] 앞장서기</span> 힌트 LV+1`, `체력+5<br>스피드+10`]},
{createDate:`2022-08-13`, character:`마루젠스키`, eventType:`support`, cardName: `[트레센 학원] 마루젠스키`, title: `알흠다운 드라이브랍니다~`, choice: [`해안`, `모르는 거리`], effect: [`<span class='skill-info'>[일반] 비오는 날○</span> 힌트 LV+1`, `컨디션 상승<br>지능+5`]},
//마블러스 선데이
{createDate:`2022-08-13`, character:`마블러스 선데이`, eventType:`support`, cardName: null, title: `Marvelous하게 만들려면☆`, choice: [`직접 전력을 다해서 부딪혀 본다든가…?`, `간사이 출신처럼 말해 본다든가…?`], effect: [`체력+10<br>컨디션 상승<br>마블러스 선데이의 우정도+5`, `<span class='skill-info'>[일반] 한신 경기장○</span> 힌트 LV+1<br>마블러스 선데이의 우정도+5`]},
{createDate:`2022-08-13`, character:`마블러스 선데이`, eventType:`support`, cardName: null, title: `문답무용 Marvelous☆`, choice: [`요즘 힘이 잘 안나`, `컨디션이 더 생겼으면 좋겠어`], effect: [`체력+10<br>스피드+5<br>마블러스 선데이의 우정도+5`, `컨디션 상승<br>스피드+5<br>마블러스 선데이의 우정도+5`]},
{createDate:`2022-08-13`, character:`마블러스 선데이`, eventType:`support`, cardName: `[마블러스☆대작전] 마블러스 선데이`, title: `① 세계 Marvelous 계획☆`, choice: [`(선택지 없음)`], effect: [`지능+5<br>근성+5`]},
{createDate:`2022-08-13`, character:`마블러스 선데이`, eventType:`support`, cardName: `[마블러스☆대작전] 마블러스 선데이`, title: `② 정말로 대단해 Marvelous☆`, choice: [`(선택지 없음)`], effect: [`지능+15<br>근성+15`]},
//마야노 탑건
{createDate:`2022-08-13`, character:`마야노 탑건`, eventType:`support`, cardName: null, title: `마야노식 간식 회의!`, choice: [`새로운 맛에 도전!`, `확실한 게 제일!`], effect: [`스태미나+5<br>근성+5<br>마야노 탑건의 우정도+5`, `스태미나+10<br>마야노 탑건의 우정도+5`]},
{createDate:`2022-08-13`, character:`마야노 탑건`, eventType:`support`, cardName: null, title: `마야노식 패션 회의!`, choice: [`최신 유행의 센스 극강 코디!`, `움직이기 편한 기능성 코디!`], effect: [`마야노 탑건의 우정도+5<br><span class='skill-info'>[일반] 직선 달인</span> 힌트 LV+1`, `스태미나+10<br>마야노 탑건의 우정도+5`]},
{createDate:`2022-08-13`, character:`마야노 탑건`, eventType:`support`, cardName: `[귀여움+귀여움은~?] 마야노 탑건`, title: `① 아직도 택싱 중?`, choice: [`(선택지 없음)`], effect: [`스킬 Pt+30<br>마야노 탑건의 우정도+5`]},
{createDate:`2022-08-13`, character:`마야노 탑건`, eventType:`support`, cardName: `[귀여움+귀여움은~?] 마야노 탑건`, title: `② 트렌드로 테이크 오프♪`, choice: [`(선택지 없음)`], effect: [`스태미너+10<br>스킬 Pt+15<br><span class='skill-info'>[일반] 집중력</span> 힌트 LV+1<br>마야노 탑건의 우정도+5`]},
//마치카네 탄호이저
{createDate:`2022-08-13`, character:`마치카네 탄호이저`, eventType:`support`, cardName: `[Just keep going.] 마치카네 탄호이저`, title: `① 필요해, 개성!`, choice: [`다른 우마무스메에게 상담하기?`, `이대로도 좋아.`], effect: [`컨디션 상승<br>마치카네 탄호이저의 우정도+5`, `체력+10~30<br>마치카네 탄호이저의 우정도+5`]},
{createDate:`2022-08-13`, character:`마치카네 탄호이저`, eventType:`support`, cardName: `[Just keep going.] 마치카네 탄호이저`, title: `② 목표는 장난꾸러기!`, choice: [`(선택지 없음)`], effect: [`파워+5<br>스킬 Pt+10<br>마치카네 탄호이저의 우정도+5`]},
{createDate:`2022-08-13`, character:`마치카네 탄호이저`, eventType:`support`, cardName: `[Just keep going.] 마치카네 탄호이저`, title: `③ 개성적인 달리기 방법?`, choice: [`(선택지 없음)`], effect: [`파워+5<br>스킬 Pt+10<br><span class='skill-info'>[일반] 마군 속 냉정</span> 힌트 LV+3<br>마치카네 탄호이저의 우정도+5<br>또는<br>파워+10<br>스킬 Pt+15<br><span class='skill-info'>[레어] 마이동풍</span> 힌트 LV+3<br>마치카네 탄호이저의 우정도+5`]},
{createDate:`2022-08-13`, character:`마치카네 탄호이저`, eventType:`support`, cardName: null, title: `이것도 평범한 노력이에요!`, choice: [`그 민첩함은 보통이 아닌 것 같아`, `평범하다고 말할 수 없는 힘이야`], effect: [`스피드+10<br>마치카네 탄호이저의 우정도+5`, `파워+10<br>마치카네 탄호이저의 우정도+5`]},
{createDate:`2022-08-13`, character:`마치카네 탄호이저`, eventType:`support`, cardName: null, title: `이것도 평범한 해프닝!?`, choice: [`힘찬 달리기였어!`, `망설임 없는 달리기였어!`], effect: [`스태미나+5<br>근성+10<br>마치카네 탄호이저의 우정도+5`, `마치카네 탄호이저의 우정도+5<br><span class='skill-info'>[일반] 도주 견제</span> 힌트 LV+1`]},
//마치카네 후쿠키타루
{createDate:`2022-08-13`, character:`마치카네 후쿠키타루`, eventType:`support`, cardName: null, title: `신앙심과 친절함이 교차할 때…`, choice: [`뭐든지 좋으니까 할 일을 찾아봐`, `자기 자신에게 친절하게 대하는 건 어때?`], effect: [`스킬 Pt+30<br>마치카네 후쿠키타루의 우정도+5`, `체력+20<br>마치카네 후쿠키타루의 우정도+5`]},
{createDate:`2022-08-13`, character:`마치카네 후쿠키타루`, eventType:`support`, cardName: null, title: `전력 스피리추얼`, choice: [`그냥 서두르고 있는 거 같은데…`, `기합도 아주 조금만 넣어 본다면?`], effect: [`지능+5<br>스킬 Pt+15<br>마치카네 후쿠키타루의 우정도+5`, `체력-10<br>스피드+5<br>스태미나+5<br>파워+5<br>마치카네 후쿠키타루의 우정도+5`]},
{createDate:`2022-08-13`, character:`마치카네 후쿠키타루`, eventType:`support`, cardName: `[운의 행방] 마치카네 후쿠키타루`, title: `① 도와주세요, 콧쿠리 님!`, choice: [`(선택지 없음)`], effect: [`체력+5<br>컨디션 상승<br>스킬 Pt+15<br>마치카네 후쿠키타루의 우정도+5`]},
{createDate:`2022-08-13`, character:`마치카네 후쿠키타루`, eventType:`support`, cardName: `[운의 행방] 마치카네 후쿠키타루`, title: `② 지도와 친구`, choice: [`모두를 믿어!`, `기분전환으로 한번 달릴래?`], effect: [`스킬 Pt+45<br>마치카네 후쿠키타루의 우정도+5`, `체력+10<br>컨디션 상승<br><span class='skill-info'>[일반] 시계 방향○</span> 힌트 LV+3<br>마치카네 후쿠키타루의 우정도+5<br>실패 시 :<br>체력-20<br><span class='skill-info'>[일반] 시계 방향○</span> 힌트 LV+1`]},
//맨하탄 카페
{createDate:`2022-08-13`, character:`맨하탄 카페`, eventType:`support`, cardName: null, title: `고요함을 즐기다`, choice: [`쉬는 시간이었어?`, `혼자 어두운 곳에 있어도 안 무섭나 보다`], effect: [`스태미나+5<br>스킬 Pt+15<br>맨하탄 카페의 우정도+5`, `<span class='skill-info'>[일반] 비근간거리○</span> 힌트 LV+1<br>맨하탄 카페의 우정도+5`]},
{createDate:`2022-08-13`, character:`맨하탄 카페`, eventType:`support`, cardName: null, title: `밤의 독주`, choice: [`…늘 이 시간까지 달려?`, `…굉장한 집중력이군`], effect: [`스태미나+10<br>맨하탄 카페의 우정도+5`, `체력+10<br>스태미나+5<br>맨하탄 카페의 우정도+5`]},
{createDate:`2022-08-13`, character:`맨하탄 카페`, eventType:`support`, cardName: `[비의 독주, 나의 독창] 맨하탄 카페`, title: `① 비의 유혹`, choice: [`(선택지 없음)`], effect: [`체력+15<br>스킬 Pt+15`]},
{createDate:`2022-08-13`, character:`맨하탄 카페`, eventType:`support`, cardName: `[비의 독주, 나의 독창] 맨하탄 카페`, title: `② 큰비의 유혹`, choice: [`(선택지 없음)`], effect: [`스태미너+15<br><span class='skill-info'>[일반] 독해력</span> 힌트 LV+1<br>맨하탄 카페의 우정도+5`]},
//메이쇼 도토
{createDate:`2022-08-13`, character:`메이쇼 도토`, eventType:`support`, cardName: null, title: `당근… 사 주세요`, choice: [`트레센 학원과 거래해 보자`, `사람이 많은 곳에서 홍보해 보자`], effect: [`체력+10<br>지능+5<br>메이쇼 도토의 우정도+5`, `<span class='skill-info'>[일반] 선행 코너○</span> 힌트 LV+1<br>메이쇼 도토의 우정도+5`]},
{createDate:`2022-08-13`, character:`메이쇼 도토`, eventType:`support`, cardName: null, title: `저… 개혁이에요`, choice: [`우선은 흔들리지 않는 자신감을 보고 배우자`, `우선은 저 넘치는 에너지를 보고 배우자`], effect: [`체력+10<br>컨디션 상승<br>메이쇼 도토의 우정도+5`, `근성+15<br>메이쇼 도토의 우정도+5`]},
{createDate:`2022-08-13`, character:`메이쇼 도토`, eventType:`support`, cardName: `[행복을 등지고] 메이쇼 도토`, title: `① 나의, 운세…`, choice: [`이대로 기다리면 될 것 같은데`, `큰 소리로 부르자!`], effect: [`체력+10<br>근성+5<br>메이쇼 도토의 우정도+5`, `체력 최대치+4<br>컨디션 상승<br>근성+5<br>지능+5<br>메이쇼 도토의 우정도+5<br>실패 시 :<br>체력-10<br>지능+5`]},
{createDate:`2022-08-13`, character:`메이쇼 도토`, eventType:`support`, cardName: `[행복을 등지고] 메이쇼 도토`, title: `② 내가, 바라는 것…`, choice: [`(선택지 없음)`], effect: [`체력+10<br>컨디션 상승<br>스킬 Pt+15<br><span class='skill-info'>[일반] 빠져나갈 준비</span> 힌트 LV+1`]},
//메지로 도베르
{createDate:`2022-08-13`, character:`메지로 도베르`, eventType:`support`, cardName: null, title: `기뻐해 줄까…`, choice: [`다른 선물을 찾아보는 건 어때?`, `각오를 다지고, 돌진하자!`], effect: [`스킬 Pt+45<br>메지로 도베르의 우정도+5`, `<span class='skill-info'>[일반] 오기</span> 힌트 LV+1<br>메지로 도베르의 우정도+5`]},
{createDate:`2022-08-13`, character:`메지로 도베르`, eventType:`support`, cardName: null, title: `해 봐도 좋아`, choice: [`몸을 단련해서 자신감을 키우자!`, `거울 앞에서 웃는 연습!`], effect: [`체력+15<br>메지로 도베르의 우정도+5`, `컨디션 상승<br>스킬 Pt+15<br>메지로 도베르의 우정도+5`]},
{createDate:`2022-08-13`, character:`메지로 도베르`, eventType:`support`, cardName: `[시선은 신경 쓰지 말고] 메지로 도베르`, title: `① 칭찬받았어도`, choice: [`(선택지 없음)`], effect: [`체력+10<br>근성+5`]},
{createDate:`2022-08-13`, character:`메지로 도베르`, eventType:`support`, cardName: `[시선은 신경 쓰지 말고] 메지로 도베르`, title: `② 보여졌대도`, choice: [`(선택지 없음)`], effect: [`체력+20<br>스태미너+15<br><span class='skill-info'>[일반] 추월 확정 태세</span> 힌트 LV+1<br>또는<br>체력+5<br>스태미너+5<br><span class='skill-info'>[일반] 추월 확정 태세</span> 힌트 LV+1`]},
{createDate:`2022-09-16`, character:`메지로 도베르`, eventType:`support`,  cardName: `[마음, 바라다] 메지로 도베르`, title: `① 내딛는, 한 걸음`, choice: [`전단지 하나 주세요!!`, `같이 나눠줄게!`], effect: [`체력-10<br>스킬 Pt+15~45<br>메지로 도베르의 우정도+5`, `근성+5<br>지능+5<br>메지로 도베르의 우정도+5`]},
{createDate:`2022-09-16`, character:`메지로 도베르`, eventType:`support`,  cardName: `[마음, 바라다] 메지로 도베르`, title: `② 서로를 향상하는, 두 걸음`, choice: [`(선택지 없음)`], effect: [`근성+3<br>지능+3<br>스킬 Pt+5`]},
{createDate:`2022-09-16`, character:`메지로 도베르`, eventType:`support`,  cardName: `[마음, 바라다] 메지로 도베르`, title: `③ 세 걸음 나아가, 두 걸음 물러서서, 한 걸음`, choice: [`(선택지 없음)`], effect: [`체력-10<br>근성+5<br>지능+5<br><span class='skill-info'>[레어] 대국관</span> 힌트 LV+1`]},
//메지로 라모누
//메지로 라이언
{createDate:`2022-08-13`, character:`메지로 라이언`, eventType:`support`, cardName: null, title: `근육과 함께 내일로!`, choice: [`한계까지 도전해 보자!`, `목표 달성 축하해!`], effect: [`체력-10<br>파워+15<br>메지로 라이언의 우정도+5`, `최대 체력 +4<br>파워+5<br>메지로 라이언의 우정도+5`]},
{createDate:`2022-08-13`, character:`메지로 라이언`, eventType:`support`, cardName: null, title: `어디까지나 추천받았을 뿐`, choice: [`페이스를 고려하는 게 좋아`, `몰아 읽는 건 체력이 꽤 드는데?`], effect: [`메지로 라이언의 우정도+5<br><span class='skill-info'>[일반] 페이스 킵</span> 힌트 LV+1`, `체력+30<br>메지로 라이언의 우정도+5`]},
{createDate:`2022-08-13`, character:`메지로 라이언`, eventType:`support`, cardName: `[단련하고, 화답하고!] 메지로 라이언`, title: `① 멋진 이유`, choice: [`(선택지 없음)`], effect: [`파워+5<br>스킬 Pt+15<br>메지로 라이언의 우정도+5`]},
{createDate:`2022-08-13`, character:`메지로 라이언`, eventType:`support`, cardName: `[단련하고, 화답하고!] 메지로 라이언`, title: `② 응원을 받아들이는 마음`, choice: [`(선택지 없음)`], effect: [`파워+15<br><span class='skill-info'>[일반] 뒤처지기 방지</span> 힌트 LV+1<br>메지로 라이언의 우정도+5`]},
{createDate:`2022-11-05`, character:`메지로 라이언`, eventType:`support`,  cardName: `[상쾌! 위닝 샷!] 메지로 라이언`, title: `① 허둥지둥 오후의 차!`, choice: [`너희가 나누어 먹으면 다 먹을 수 있어!`, `테이크아웃할래?`], effect: [`체력+10<br>컨디션 상승`, `<span class='skill-info'>[일반] 선행의 요령○</span> 힌트 LV+3<br>지능+10<br>스킬 Pt+15<br>※ 다음 이벤트가 발생하지 않음`]},
{createDate:`2022-11-05`, character:`메지로 라이언`, eventType:`support`,  cardName: `[상쾌! 위닝 샷!] 메지로 라이언`, title: `② 용솟음쳐라 홈런 더비!`, choice: [`(선택지 없음)`], effect: [`파워+10<br>근성+5`]},
{createDate:`2022-11-05`, character:`메지로 라이언`, eventType:`support`,  cardName: `[상쾌! 위닝 샷!] 메지로 라이언`, title: `③ 불굴의 버닝 하트!!`, choice: [`(선택지 없음)`], effect: [`<span class='skill-info'>[레어] 승리를 향한 집념</span> 힌트 LV+1<br>파워+10<br>근성+5`]},
//메지로 맥퀸
{createDate:`2022-08-13`, character:`메지로 맥퀸`, eventType:`support`, cardName: null, title: `몸무게를 유지하기 위해`, choice: [`레이스가 끝날 때까지 열심히 버티자`, `먹은 만큼 달리면 문제없어`], effect: [`체력-10<br>스태미나+15<br>메지로 맥퀸의 우정도+5`, `체력 최대치+4<br>스태미나+5<br>메지로 맥퀸의 우정도+5`]},
{createDate:`2022-08-13`, character:`메지로 맥퀸`, eventType:`support`, cardName: null, title: `정점에 다다르기 위해`, choice: [`스태미나와 근성을 키우자`, `스타트 대시를 의식하자`], effect: [`스태미나+5<br>근성+5<br>메지로 맥퀸의 우정도+5`, `<span class='skill-info'>[일반] 앞장서기</span> 힌트 LV+1<br>메지로 맥퀸의 우정도+5`]},
{createDate:`2022-08-13`, character:`메지로 맥퀸`, eventType:`support`, cardName: `[『에이스』로서] 메지로 맥퀸`, title: `① '기대'는 힘`, choice: [`(선택지 없음)`], effect: [`스태미너+10`]},
{createDate:`2022-08-13`, character:`메지로 맥퀸`, eventType:`support`, cardName: `[『에이스』로서] 메지로 맥퀸`, title: `② '기대'는 호의`, choice: [`(선택지 없음)`], effect: [`컨디션 상승<br>스태미너+10`]},
{createDate:`2022-08-13`, character:`메지로 맥퀸`, eventType:`support`, cardName: `[『에이스』로서] 메지로 맥퀸`, title: `③ '기대'에 부응하다`, choice: [`(선택지 없음)`], effect: [`체력-10<br>스태미너+10<br><span class='skill-info'>[레어] 쿨다운</span> 힌트 LV+3<br>또는<br>체력-10<br><span class='skill-info'>[일반] 심호흡</span> 힌트 LV+1`]},
//메지로 브라이트
//메지로 아르당
{createDate:`2022-11-05`, character:`메지로 아르당`, eventType:`support`,  cardName: `[그 마음에 휘몰아치다] 메지로 아르당`, title: `① 다 함께 만드는 특제 드링크♪`, choice: [`그만큼 둘을 좋아한다는 뜻이지`, `라이벌을 잘 체크하고 있군`], effect: [`성공 시 :<br>체력+10<br>스피드+5<br>지능+5<br>스킬 Pt+10<br>실패 시 :<br>지능+10`, `컨디션 상승<br>스피드+10`]},
{createDate:`2022-11-05`, character:`메지로 아르당`, eventType:`support`,  cardName: `[그 마음에 휘몰아치다] 메지로 아르당`, title: `② 서고 싶은 장소는 오직 하나`, choice: [`(선택지 없음)`], effect: [`체력+30<br>컨디션 상승`]},
{createDate:`2022-11-05`, character:`메지로 아르당`, eventType:`support`,  cardName: null, title: `유리 소녀는 놀고 싶다`, choice: [`『카루타』는 어때?`, `영상을 찍어서 우마톡에 올려보는 건 어때?`], effect: [`스피드+10<br>지능+10<br>메지로 아르당의 우정도+5`, `<span class='skill-info'>[일반] 선행 주저</span> 힌트 LV+1<br>메지로 아르당의 우정도+5`]},
{createDate:`2022-11-05`, character:`메지로 아르당`, eventType:`support`,  cardName: null, title: `유리 소녀는 배우고 싶다`, choice: [`『3분이면 완성! 건강한 운동용 요리 레시피』`, `『뇌를 바꾸는 쾌면 노하우』`], effect: [`스피드+10<br>메지로 아르당의 우정도+5`, `체력+10<br>지능+5<br>메지로 아르당의 우정도+5`]},
//메지로 파머
{createDate:`2022-08-13`, character:`메지로 파머`, eventType:`support`, cardName: null, title: `도망칠 수 없는 선택?`, choice: [`끈질기게 쓰는 쪽으로!`, `파워를 살린 쪽으로!`], effect: [`체력-15<br>근성+20<br>메지로 파머의 우정도+5`, `파워+5<br>스킬 Pt+15<br>메지로 파머의 우정도+5`]},
{createDate:`2022-08-13`, character:`메지로 파머`, eventType:`support`, cardName: null, title: `포지티브한 도주`, choice: [`고마워. 그렇지만 아직 더 노력하고 싶어.`, `그럼 나도 도주해 볼게!`], effect: [`근성+15<br>메지로 파머의 우정도+5`, `메지로 파머의 우정도+5<br><span class='skill-info'>[일반] 진창길○</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`메지로 파머`, eventType:`support`, cardName: `[바보라고 비웃어 봐] 메지로 파머`, title: `① 낫 아웃 런 어웨이`, choice: [`오늘만이라도 실컷 도망치자`, `자기 방식대로 하는 것도 중요할지 몰라`], effect: [`체력-15<br>스태미나+10<br>근성+10<br>메지로 파머의 우정도+5`, `체력-15<br>근성+10<br>지능+10<br>메지로 파머의 우정도+5`]},
{createDate:`2022-08-13`, character:`메지로 파머`, eventType:`support`, cardName: `[바보라고 비웃어 봐] 메지로 파머`, title: `② 사랑의 도주 이스케이프`, choice: [`사랑은 중요하지!`, `일상과는 다른 체험을 통해 성장하는 건 맞을지도`], effect: [`체력+10<br>근성+5<br>지능+5<br>메지로 파머의 우정도+5`, `체력+10<br>메지로 파머의 우정도+5<br><span class='skill-info'>[일반] 도주 요령○</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`메지로 파머`, eventType:`support`, cardName: `[바보라고 비웃어 봐] 메지로 파머`, title: `③ 포지티브 도주 네버 기브업!`, choice: [`좋은 콤비구나`, `너의 “도주”는 성장욕구구나`], effect: [`성공 시 :<br>체력-10<br>스태미나+20<br>근성+20<br><span class='skill-info'>[레어] 선봉의 마음가짐</span> 힌트 LV+3<br>메지로 파머의 우정도+5<br>실패 시 :<br>체력-10<br>스태미나+5<br>근성+5<br><span class='skill-info'>[일반] 리드 킵</span> 힌트 LV+3<br>메지로 파머의 우정도+5`, `체력+10<br><span class='skill-info'>[일반] 고독한 늑대</span> 힌트 LV+1`]},
//미스터 시비
//미호노 부르봉
{createDate:`2022-08-13`, character:`미호노 부르봉`, eventType:`support`, cardName: null, title: `명령은 지켜야만 한다`, choice: [`문 열기 전부터 기다리자`, `점심시간 종 치자마자 달려!`], effect: [`미호노 부르봉의 우정도+5<br><span class='skill-info'>[일반] 집중력</span> 힌트 LV+1`, `스피드+10<br>스킬 Pt+15<br>미호노 부르봉의 우정도+5`]},
{createDate:`2022-08-13`, character:`미호노 부르봉`, eventType:`support`, cardName: null, title: `타인에게 위해를 끼쳐서는 안 된다`, choice: [`꽤 무겁겠다…`, `밤에는 소리가 좀 울리겠어`], effect: [`체력-10<br>스태미나+5<br>파워+15<br>미호노 부르봉의 우정도+5`, `체력+10<br>지능+5<br>미호노 부르봉의 우정도+5`]},
{createDate:`2022-08-13`, character:`미호노 부르봉`, eventType:`support`, cardName: `[친구를 철저히 단련] 미호노 부르봉`, title: `① 사이보그가 아닙니다`, choice: [`표정 훈련을 하자!`, `억양을 붙여서 말하자!`], effect: [`근성+10<br>스킬 Pt+15<br>미호노 부르봉의 우정도+5`, `체력-10<br><span class='skill-info'>[일반] 코너 회복○</span> 힌트 LV+1<br>랜덤으로 미호노 부르봉의 우정도-5<br>※다음 이벤트가 발생하지 않음`]},
{createDate:`2022-08-13`, character:`미호노 부르봉`, eventType:`support`, cardName: `[친구를 철저히 단련] 미호노 부르봉`, title: `② 새로운 가치관 인스톨`, choice: [`(선택지 없음)`], effect: [`체력-10<br>파워+5<br>근성+5<br><span class='skill-info'>[일반] 도주 직선○</span> 힌트 LV+1<br>미호노 부르봉의 우정도+5`]},
//뱀부 메모리
{createDate:`2022-10-11`, character:`뱀부 메모리`, eventType:`support`,  cardName: `[Head-on fight!] 뱀부 메모리`, title: `① 목표는 득점왕임다!`, choice: [`(선택지 없음)`], effect: [`체력-10<br>스태미나+3<br>파워+3<br>근성+3<br><span class='skill-info'>[일반] 대항 의식○</span> 힌트 LV+1`]},
{createDate:`2022-10-11`, character:`뱀부 메모리`, eventType:`support`,  cardName: `[Head-on fight!] 뱀부 메모리`, title: `② 상대가 누구든 교칙은 절대적임다!`, choice: [`아무튼 이제 안심이군`, `명콤비였군`, `……만약 유령이 겁내지 않으면?`], effect: [`체력 최대치+4<br>체력-10<br>스태미나+10<br>파워+10<br>근성+5<br>뱀부 메모리의 우정도+5<br><br>또는<br><br>체력-20<br>스태미나+10<br>파워+10<br>근성+5<br>뱀부 메모리의 우정도+5<br><br>또는<br><br>체력-20<br>스태미나+10<br>근성+10<br><span class='skill-info'>[일반] 공회전</span> 획득<br><span class='skill-info'>[일반] 뒷심</span> 힌트 LV+1`, `체력-10<br>컨디션 상승<br>스태미나+5<br>파워+5<br>뱀부 메모리의 우정도+5`, `체력+30<br><span class='skill-info'>[일반] 선입 주저</span> 힌트 LV+1<br>연속 이벤트 종료`]},
{createDate:`2022-10-11`, character:`뱀부 메모리`, eventType:`support`,  cardName: `[Head-on fight!] 뱀부 메모리`, title: `③ 언젠가 강적이라 부를 수 있는 날을 위해! 임다!`, choice: [`(선택지 없음)`], effect: [`체력 최대치+4<br>스태미나+10<br>파워+15<br><span class='skill-info'>[레어] 승천하는 용</span> 힌트 LV+3<br>뱀부 메모리의 우정도+5<br><br>또는<br><br>체력-15<br>스태미나+10<br>파워+15<br><span class='skill-info'>[일반] 외곽 추월 준비</span> 힌트 LV+3`]},
{createDate:`2022-10-11`, character:`뱀부 메모리`, eventType:`support`,  cardName: null, title: `라이벌, 타도임다!`, choice: [`라이벌 너무 많은데!?`, `무조건 연승!`], effect: [`근성+10<br>뱀부 메모리의 우정도+5`, `체력 최대치+4<br>체력-5<br>뱀부 메모리의 우정도+5`]},
{createDate:`2022-10-11`, character:`뱀부 메모리`, eventType:`support`,  cardName: null, title: `트러블, 문제없슴다!`, choice: [`교칙 단속도 힘들구나`, `현장으로 출동!`], effect: [`스태미나+5<br>근성+5<br>뱀부 메모리의 우정도+5`, `<span class='skill-info'>[일반] 근간거리○</span> 힌트 LV+5<br>체력-10<br>뱀부 메모리의 우정도+5`]},
//보드카
{createDate:`2022-08-13`, character:`보드카`, eventType:`support`, cardName: null, title: `길거리의 강적`, choice: [`샛길로 간다`, `전력 질주로 지나간다`], effect: [`<span class='skill-info'>[일반] 뒤처지기 방지</span> 힌트 LV+1<br>보드카의 우정도+5`, `파워+5<br>스킬 Pt+15<br>보드카의 우정도+5`]},
{createDate:`2022-08-13`, character:`보드카`, eventType:`support`, cardName: null, title: `동경하는 대사`, choice: [`겉모습을 와일드하게 바꿔보면 어때?`, `와일드한 포즈를 잡아보면 어때?`], effect: [`파워+10<br>보드카의 우정도+5`, `파워+5<br>스킬 Pt+15<br>보드카의 우정도+5`]},
{createDate:`2022-08-13`, character:`보드카`, eventType:`support`, cardName: `[로드 · 오브 · 보드카] 보드카`, title: `① 따라야 할 것은 자신의 마음`, choice: [`(선택지 없음)`], effect: [`파워+5<br>스킬 Pt+15`]},
{createDate:`2022-08-13`, character:`보드카`, eventType:`support`, cardName: `[로드 · 오브 · 보드카] 보드카`, title: `② 석양에 맹세한 빛`, choice: [`(선택지 없음)`], effect: [`파워+5<br>스킬 Pt+15`]},
{createDate:`2022-08-13`, character:`보드카`, eventType:`support`, cardName: `[로드 · 오브 · 보드카] 보드카`, title: `③ 기록으로 남겨둬`, choice: [`(선택지 없음)`], effect: [`파워+5<br>스킬 Pt+30<br><span class='skill-info'>[레어] 호전일식</span> 힌트 LV+1`]},
//비와 하야히데
{createDate:`2022-08-13`, character:`비와 하야히데`, eventType:`support`, cardName: null, title: `아슬아슬 양상론`, choice: [`한계 직전까지 트레이닝`, `이전 레이스 관찰하기`], effect: [`파워+15<br>비와 하야히데의 우정도+5`, `스피드+10<br>스킬 Pt+15<br>비와 하야히데의 우정도+5`]},
{createDate:`2022-08-13`, character:`비와 하야히데`, eventType:`support`, cardName: null, title: `탈 무난론`, choice: [`머리로 생각하기보다 먼저 행동해 보자`, `다치면 다 소용없어`], effect: [`체력-10<br>비와 하야히데의 우정도+5<br><span class='skill-info'>[일반] 안쪽 코너 여포</span> 힌트 LV+1`, `체력+10<br>스태미나+10<br>비와 하야히데의 우정도+5`]},
{createDate:`2022-08-13`, character:`비와 하야히데`, eventType:`support`, cardName: `[검증, 개시] 비와 하야히데`, title: `① 참견쟁이 언니`, choice: [`(선택지 없음)`], effect: [`체력-10<br>파워+15`]},
{createDate:`2022-08-13`, character:`비와 하야히데`, eventType:`support`, cardName: `[검증, 개시] 비와 하야히데`, title: `② 트레이닝은 이론적으로`, choice: [`(선택지 없음)`], effect: [`체력-10<br>스태미너+5<br>파워+15<br><span class='skill-info'>[일반] 추격</span> 힌트 LV+3<br>또는<br>체력-20<br>파워+5<br><span class='skill-info'>[일반] 추격</span> 힌트 LV+1`]},
//비코 페가수스
{createDate:`2022-08-13`, character:`비코 페가수스`, eventType:`support`, cardName: null, title: `필살기를 손에 넣어라!`, choice: [`스트라이크, 멋있겠다`, `무리는 하지 마`], effect: [`비코 페가수스의 우정도+5<br><span class='skill-info'>[일반] 단거리 직선○</span> 힌트 LV+1`, `체력+30<br>비코 페가수스의 우정도+5`]},
{createDate:`2022-08-13`, character:`비코 페가수스`, eventType:`support`, cardName: null, title: `히어로의 고뇌`, choice: [`나중을 위해 힘을 아끼자`, `이럴 때 단련하자!`], effect: [`체력+15<br>비코 페가수스의 우정도+5`, `체력+5<br>파워+5<br>비코 페가수스의 우정도+5`]},
{createDate:`2022-08-13`, character:`비코 페가수스`, eventType:`support`, cardName: `[필살! 더블 캐럿 펀치!] 비코 페가수스`, title: `① 뜨거운 맹세! 나는 히어로가 될 거야!`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>근성+5`]},
{createDate:`2022-08-13`, character:`비코 페가수스`, eventType:`support`, cardName: `[필살! 더블 캐럿 펀치!] 비코 페가수스`, title: `② 맹특훈! 나타난 캐럿맨!?`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>근성+5`]},
{createDate:`2022-08-13`, character:`비코 페가수스`, eventType:`support`, cardName: `[필살! 더블 캐럿 펀치!] 비코 페가수스`, title: `③ 결전! 영광의 승리를 이 손에!`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>파워+5<br>근성+5<br><span class='skill-info'>[일반] 플랜X</span> 힌트 LV+1`]},
//사일런스 스즈카
{createDate:`2022-08-13`, character:`사일런스 스즈카`, eventType:`support`, cardName: null, title: `어디까지든지`, choice: [`알았어`, `전력으로 달려봐`], effect: [`스피드+10<br>스태미나+5<br>사일런스 스즈카의 우정도+5`, `스피드+15<br>사일런스 스즈카의 우정도+5`]},
{createDate:`2022-08-13`, character:`사일런스 스즈카`, eventType:`support`, cardName: null, title: `어쩌면 좋지`, choice: [`함께 병합 훈련해주는 건 어때?`, `그 좌회전에 비결이 숨겨져 있을지도 몰라`], effect: [`스피드+5<br>스태미나+5<br>지능+5<br>사일런스 스즈카의 우정도+5`, `<span class='skill-info'>[일반] 반시계 방향○</span> 힌트 LV+1<br>사일런스 스즈카의 우정도+5`]},
{createDate:`2022-08-13`, character:`사일런스 스즈카`, eventType:`support`, cardName: `[빛나는 경치, 그 너머에] 사일런스 스즈카`, title: `① 편지→?`, choice: [`(선택지 없음)`], effect: [`스피드+10`]},
{createDate:`2022-08-13`, character:`사일런스 스즈카`, eventType:`support`, cardName: `[빛나는 경치, 그 너머에] 사일런스 스즈카`, title: `② 편지→모두의 마음→?`, choice: [`(선택지 없음)`], effect: [`스피드+10<br>파워+10`]},
{createDate:`2022-08-13`, character:`사일런스 스즈카`, eventType:`support`, cardName: `[빛나는 경치, 그 너머에] 사일런스 스즈카`, title: `③ 편지→모두의 마음→기다리고 있어줘`, choice: [`(선택지 없음)`], effect: [`스피드+10<br><span class='skill-info'>[레어] 도망자</span> 힌트 LV+1`]},
//사쿠라 로렐
//사쿠라 바쿠신 오
{createDate:`2022-08-13`, character:`사쿠라 바쿠신 오`, eventType:`support`, cardName: null, title: `뛰고 싶어질 정도로!!`, choice: [`다 읽으면 빌려도 될까?`, `참고하게 달리기를 보여줄 있어?`], effect: [`사쿠라 바쿠신 오의 우정도+5<br><span class='skill-info'>[일반] 바짝 붙기</span> 힌트 LV+1`, `체력-10<br>스피드+10<br>파워+5<br>사쿠라 바쿠신 오의 우정도+5`]},
{createDate:`2022-08-13`, character:`사쿠라 바쿠신 오`, eventType:`support`, cardName: null, title: `우등생의 일거양득!!`, choice: [`걸레질로 스피드 강화!`, `자료실 정리로 파워 강화!`], effect: [`스피드+15<br>사쿠라 바쿠신 오의 우정도+5`, `스피드+5<br>파워+10<br>사쿠라 바쿠신 오의 우정도+5`]},
{createDate:`2022-08-13`, character:`사쿠라 바쿠신 오`, eventType:`support`, cardName: `[빠르다! 맛있다! 빠르다!] 사쿠라 바쿠신 오`, title: `① 바쿠신의 요리!!`, choice: [`(선택지 없음)`], effect: [`스피드+10`]},
{createDate:`2022-08-13`, character:`사쿠라 바쿠신 오`, eventType:`support`, cardName: `[빠르다! 맛있다! 빠르다!] 사쿠라 바쿠신 오`, title: `② 바쿠신의 마음!!`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>파워+5`]},
{createDate:`2022-08-13`, character:`사쿠라 바쿠신 오`, eventType:`support`, cardName: `[빠르다! 맛있다! 빠르다!] 사쿠라 바쿠신 오`, title: `③ 바쿠신의 대성공!!`, choice: [`(선택지 없음)`], effect: [`스피드+10<br>파워+5<br><span class='skill-info'>[레어] 스프린트 터보</span> 힌트 LV+1`]},
//사쿠라 치요노 오
{createDate:`2022-09-05`, character:`사쿠라 치요노 오`, eventType:`support`,  cardName: `[바야흐로 한창인 벚꽃] 사쿠라 치요노 오`, title: `① 꽃 피는, 한 걸음!`, choice: [`(선택지 없음)`], effect: [`스킬 Pt+15`]},
{createDate:`2022-09-05`, character:`사쿠라 치요노 오`, eventType:`support`,  cardName: `[바야흐로 한창인 벚꽃] 사쿠라 치요노 오`, title: `② 꽃 피는, 희망!`, choice: [`이왕이면 마음껏 즐기자!`, `느긋하게 하자`], effect: [`스태미나+15<br>사쿠라 치요노 오의 우정도+5<br>배드 컨디션 회복<br>체력-10<br>근성+15<br>사쿠라 치요노 오의 우정도+5`, `체력+10<br>컨디션 상승<br>사쿠라 치요노 오의 우정도+5`]},
{createDate:`2022-09-05`, character:`사쿠라 치요노 오`, eventType:`support`,  cardName: `[바야흐로 한창인 벚꽃] 사쿠라 치요노 오`, title: `③ 꽃 피는, 언젠가!`, choice: [`결과는 금방 나오지 않아`, `이제 극복하는 건 포기할까?`], effect: [`성공 시 :<br>체력-15<br>스태미나+30<br>스킬 Pt+20<br><span class='skill-info'>[레어] 스피드스터</span> 힌트 LV+3<br>사쿠라 치요노 오의 우정도+5<br>실패 시 :<br>체력-15<br>스태미나+10<br>스킬 Pt+5<br><span class='skill-info'>[일반] 빠져나갈 준비</span> 힌트 LV+3<br>사쿠라 치요노 오의 우정도+5`, `스피드+5<br>스태미나+10<br>파워+5<br>스킬 Pt+30<br>사쿠라 치요노 오의 우정도+5`]},
{createDate:`2022-09-05`, character:`사쿠라 치요노 오`, eventType:`support`,  cardName: null, title: `언젠가 피는, 그날까지…`, choice: [`자신다움도 중요하지 않을까`, `꼭 될 수 있어!`], effect: [`체력+5<br>스태미나+5<br>사쿠라 치요노 오의 우정도+5`, `<span class='skill-info'>[일반] 봄 우마무스메○</span> 힌트 LV+1<br>사쿠라 치요노 오의 우정도+5`]},
{createDate:`2022-09-05`, character:`사쿠라 치요노 오`, eventType:`support`,  cardName: null, title: `오늘의 격언!`, choice: [`한 가지를 철저하게 한다든가?`, `여러 가지 시도를 해본다든가?`], effect: [`체력-10<br>파워+20<br>사쿠라 치요노 오의 우정도+5`, `체력+5<br>스킬 Pt+10<br>사쿠라 치요노 오의 우정도+5`]},
//사토노 다이아몬드
{createDate:`2022-08-13`, character:`사토노 다이아몬드`, eventType:`support`, cardName: `[그 뒷모습을 넘어서] 사토노 다이아몬드`, title: `① 『비원의』 우마무스메`, choice: [`(선택지 없음)`], effect: [`체력+10<br>스태미너+2<br>근성+2<br>지능+2`]},
{createDate:`2022-08-13`, character:`사토노 다이아몬드`, eventType:`support`, cardName: `[그 뒷모습을 넘어서] 사토노 다이아몬드`, title: `② 다이아의 고집`, choice: [`되도록 얌전히 있자….`, `불행한 일이 생기는지 확인하러 가자!`], effect: [`지능+10<br>사토노 다이아몬드의 우정도+5`, `체력+15<br>스태미나+10<br>사토노 다이아몬드의 우정도+5<br>컨디션 하락<br>근성+20`]},
{createDate:`2022-08-13`, character:`사토노 다이아몬드`, eventType:`support`, cardName: `[그 뒷모습을 넘어서] 사토노 다이아몬드`, title: `③ 당신에게만큼은 절대로`, choice: [`소등시간까지 지켜본다`, `살며시 그 장소에서 떠난다`], effect: [`체력-20<br>스태미나+30<br><span class='skill-info'>[레어] 강철 같은 의지</span> 힌트 LV+1<br>사토노 다이아몬드의 우정도+5`, `체력+5<br>근성+5<br>사토노 다이아몬드의 우정도+5<br><span class='skill-info'>[레어] 강철 같은 의지</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`사토노 다이아몬드`, eventType:`support`, cardName: null, title: `새로운 거, 정말 좋아해요!`, choice: [`찻잔으로 마시게?`, `멜론 소다는 처음이야?`], effect: [`근성+10<br>사토노 다이아몬드의 우정도+5`, `체력-10<br>스태미나+20<br>사토노 다이아몬드의 우정도+5`]},
{createDate:`2022-08-13`, character:`사토노 다이아몬드`, eventType:`support`, cardName: null, title: `어려운 일, 정말 좋아해요!`, choice: [`좋아, 해보자!`, `우선 어떤 건지 한번 보고 결정하자`], effect: [`스태미나+5<br>근성+10<br>사토노 다이아몬드의 우정도+5`, `사토노 다이아몬드의 우정도+5<br><span class='skill-info'>[일반] 도주 주저</span> 힌트 LV+1`]},
//사토노 크라운
//세이운 스카이
{createDate:`2022-08-13`, character:`세이운 스카이`, eventType:`support`, cardName: null, title: `느긋하게 모집, 고양이 잡는 법`, choice: [`양지에서 기다린다`, `전력으로 쫓아간다!`], effect: [`체력+10<br>지능+5<br>세이운 스카이의 우정도+5`, `체력-10<br>스피드+15<br>스태미나+5<br>세이운 스카이의 우정도+5`]},
{createDate:`2022-08-13`, character:`세이운 스카이`, eventType:`support`, cardName: null, title: `느긋하게 모집, 조언자`, choice: [`자리가 안 좋은 걸지도`, `낚싯대 쓰는 방식을 바꿔 보면 어떨까?`], effect: [`지능+15<br>세이운 스카이의 우정도+5`, `<span class='skill-info'>[일반] 리드 킵</span> 힌트 LV+1<br>세이운 스카이의 우정도+5`]},
{createDate:`2022-10-22`, character:`세이운 스카이`, eventType:`support`,  cardName: `[내일은 전국이 저기압이겠습니다♪] 세이운 스카이`, title: `① 갑작스러운 머더 미스터리! 1`, choice: [`세이운 스카이는 저녁 식사 때도 청소를?`, `달걀찜, 맛있어 보였는데…`], effect: [`지능+5<br>스킬 Pt+10<br>세이운 스카이의 우정도+5`, `체력+10<br>세이운 스카이의 우정도+5`]},
{createDate:`2022-10-22`, character:`세이운 스카이`, eventType:`support`,  cardName: `[내일은 전국이 저기압이겠습니다♪] 세이운 스카이`, title: `② 갑작스러운 머더 미스터리! 2`, choice: [`청소도구를 들고 있었다든가?`, `그건 그렇고, 정말로 평범한 청소부…?`], effect: [`<span class='skill-info'>[일반] 선행 심리전</span> 힌트 LV+1<br>지능+5<br>세이운 스카이의 우정도+5`, `체력+5<br>스킬 Pt+10<br>세이운 스카이의 우정도+5`]},
{createDate:`2022-10-22`, character:`세이운 스카이`, eventType:`support`,  cardName: `[내일은 전국이 저기압이겠습니다♪] 세이운 스카이`, title: `③ 갑작스러운 머더 미스터리! 3`, choice: [`세이운 스카이가 범인`, `그래스 원더가 범인`], effect: [`성공시:<br><span class='skill-info'>[레어] 선봉의 마음가짐</span> 힌트 LV+3<br>지능+10<br><br>실패시:<br><span class='skill-info'>[레어] 선봉의 마음가짐</span> 힌트 LV+1<br>세이운 스카이의 우정도+5<br>지능+5<br>세이운 스카이의 우정도+5`, `체력+10<br>스태미나+10<br>스킬 Pt+15`]},
{createDate:`2022-08-13`, character:`세이운 스카이`, eventType:`support`, cardName: `[대망의 큰 그림] 세이운 스카이`, title: `① 이용은 전략적으로☆`, choice: [`세이운 스카이한테 동의한다`, `궤변이라고 말한다`], effect: [`체력+10<br>지능+5<br>세이운 스카이의 우정도+5`, `스킬 Pt+30<br>세이운 스카이의 우정도-5<br>연속 이벤트 종료<br><span class='skill-info'>[일반] 두 번째 화살</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`세이운 스카이`, eventType:`support`, cardName: `[대망의 큰 그림] 세이운 스카이`, title: `② 트랩에 주의`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>스태미너+5`]},
{createDate:`2022-08-13`, character:`세이운 스카이`, eventType:`support`, cardName: `[대망의 큰 그림] 세이운 스카이`, title: `③ 모든 것은 이기기 위해서`, choice: [`(선택지 없음)`], effect: [`체력+10<br>컨디션 상승<br>스피드+5<br>스태미너+5<br>지능+5<br>스킬 Pt+5<br><span class='skill-info'>[레어] 탈출술</span> 힌트 LV+1~3<br>또는<br>체력+10<br>컨디션 상승<br>스피드+5<br>스태미너+5<br>지능+5<br>스킬 Pt+5<br><span class='skill-info'>[일반] 빠른 걸음</span> 힌트 LV+1`]},
//슈발 그랑
//슈퍼 크릭
{createDate:`2022-08-13`, character:`슈퍼 크릭`, eventType:`support`, cardName: null, title: `도와드릴 일이 있으면 맡겨주세요♪`, choice: [`트레이닝 요령을 알려줘`, `같이 트레이닝하지 않을래?`], effect: [`체력+15<br>슈퍼 크리크의 우정도+5`, `스태미나+10<br>슈퍼 크리크의 우정도+5`]},
{createDate:`2022-08-13`, character:`슈퍼 크릭`, eventType:`support`, cardName: null, title: `배려도 맡겨주세요♪`, choice: [`더 응원한다`, `음료수를 건넨다`], effect: [`슈퍼 크릭의 우정도+5<br><span class='skill-info'>[일반] 심호흡</span> 힌트 LV+1`, `체력+10<br>스태미나+5<br>슈퍼 크리크의 우정도+5`]},
{createDate:`2022-08-13`, character:`슈퍼 크릭`, eventType:`support`, cardName: `[한 알의 평온] 슈퍼 크릭`, title: `① 갓 만든 음식을 냠냠, 듬뿍`, choice: [`(선택지 없음)`], effect: [`체력+10<br>스태미너+5`]},
{createDate:`2022-08-13`, character:`슈퍼 크릭`, eventType:`support`, cardName: `[한 알의 평온] 슈퍼 크릭`, title: `② 푹 끓여서 걸쭉하고 부드러운 맛으로`, choice: [`(선택지 없음)`], effect: [`스태미너+5<br>파워+5`]},
{createDate:`2022-08-13`, character:`슈퍼 크릭`, eventType:`support`, cardName: `[한 알의 평온] 슈퍼 크릭`, title: `③ 더 드셔도 돼요, 착하지 착해!`, choice: [`(선택지 없음)`], effect: [`스태미너+10<br>파워+5<br><span class='skill-info'>[레어] 원호의 마에스트로</span> 힌트 LV+1`]},
//스마트 팔콘
{createDate:`2022-08-13`, character:`스마트 팔콘`, eventType:`support`, cardName: null, title: `귀여웠으면 보러 와 줘☆`, choice: [`도망친다`, `다운로드 해본다`], effect: [`체력-10<br>파워+10<br>스마트 팔콘의 우정도+5<br><span class='skill-info'>[일반] 굳히기 준비</span> 힌트 LV+1`, `체력+10<br>지능+5<br>스마트 팔콘의 우정도+5`]},
{createDate:`2022-08-13`, character:`스마트 팔콘`, eventType:`support`, cardName: null, title: `라이브는 호응이 중요해☆`, choice: [`팔~코~~~!!`, `좀 창피해…`], effect: [`스태미나+5<br>근성+10<br>스마트 팔콘의 우정도+5`, `지능+15<br>스마트 팔콘의 우정도+5`]},
{createDate:`2022-08-13`, character:`스마트 팔콘`, eventType:`support`, cardName: `[이것이 나의 우마돌의 길☆] 스마트 팔콘`, title: `① 항상 마음에 무대를☆`, choice: [`공부도 열심히 하자`, `꿈을 위해 힘내라!`], effect: [`지능+10<br>스마트 팔콘의 우정도+5`, `체력+25<br>스마트 팔콘의 우정도+5<br>연속 이벤트 종료<br><span class='skill-info'>[일반] 집중력</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`스마트 팔콘`, eventType:`support`, cardName: `[이것이 나의 우마돌의 길☆] 스마트 팔콘`, title: `② 언제 어디서나 반짝일 거야☆`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>파워+5`]},
{createDate:`2022-08-13`, character:`스마트 팔콘`, eventType:`support`, cardName: `[이것이 나의 우마돌의 길☆] 스마트 팔콘`, title: `③ 이것이 나의 우마돌 길☆`, choice: [`(선택지 없음)`], effect: [`체력 최대치+4<br>스태미너+5<br>파워+5<br>지능+5<br><span class='skill-info'>[레어] 주목 받는 댄서</span> 힌트 LV+3<br>또는<br>체력 최대치+4<br>스태미너+5<br>파워+5<br>지능+5<br><span class='skill-info'>[일반] 포지션 센스</span> 힌트 LV+1`]},
//스윕 토쇼
{createDate:`2022-08-13`, character:`스윕 토쇼`, eventType:`support`, cardName: null, title: `미라클☆이스케이프!`, choice: [`보충 수업을 받자`, `뛰어서 도망가자!`], effect: [`체력+10<br>스피드+5<br>스윕 토쇼의 우정도+5`, `체력-10<br>스피드+20<br>스윕 토쇼의 우정도+5`]},
{createDate:`2022-08-13`, character:`스윕 토쇼`, eventType:`support`, cardName: null, title: `원더풀☆미스테이크!`, choice: [`대신 굉장한 주문을 알려줄게`, `다시 참새를 찾으러 가자`], effect: [`체력-20<br>스킬 Pt+40<br>스윕 토쇼의 우정도+5`, `<span class='condition-info'>애교○</span>상태 획득<br>스윕 토쇼의 우정도+5`]},
{createDate:`2022-08-13`, character:`스윕 토쇼`, eventType:`support`, cardName: `[견습 마녀와 긴 밤] 스윕 토쇼`, title: `① 비장의 친구?`, choice: [`야채는 먹는 게 좋아`, `하고 싶은 대로 하면 돼`], effect: [`스피드+5<br>스킬 Pt+10<br>스윕 토쇼의 우정도+5<br><span class='skill-info'>[일반] 럭키 세븐</span> 힌트 LV+1`, `컨디션 하락<br><span class='skill-info'>[일반] 단독○</span> 힌트 LV+5`]},
{createDate:`2022-08-13`, character:`스윕 토쇼`, eventType:`support`, cardName: `[견습 마녀와 긴 밤] 스윕 토쇼`, title: `② 장난은 계획적으로`, choice: [`후지 키세키를 생각해서 한 일이지?`, `솔직히 말하고 사과하는 편이 좋을걸`], effect: [`스피드+10<br>스킬 Pt+20<br>스윕 토쇼의 우정도+5<br><span class='skill-info'>[일반] 냉정</span> 힌트 LV+1`, `컨디션 하락<br><span class='skill-info'>[일반] 고독한 늑대</span> 힌트 LV+1`]},
{createDate:`2022-11-17`, character:`스윕 토쇼`, eventType:`support`,  cardName: `[차가운 독점?] 스윕 토쇼`, title: `① 변덕쟁이 천재 마법소녀 스위피☆`, choice: [`좋아, 가라!`, `잠깐…!!`], effect: [`성공 시 :<br><span class='skill-info'>[일반] 직선 주파</span> 힌트 LV+2<br>컨디션 상승<br>스윕 토쇼의 우정도+5<br>실패 시 :<br>컨디션 하락<br>지능+5<br>스윕 토쇼의 우정도+5`, `스킬 Pt+15<br>스윕 토쇼의 우정도+5`]},
{createDate:`2022-11-17`, character:`스윕 토쇼`, eventType:`support`,  cardName: `[차가운 독점?] 스윕 토쇼`, title: `② 달콤달콤☆노맛노맛☆흑마법`, choice: [`그럼… 받아볼까`, `아니, 이젠 괜찮아!`], effect: [`성공 시 :<br>체력+10<br>스킬 Pt+20<br>스윕 토쇼의 우정도+5<br>실패 시 :<br>체력-10<br>스킬 Pt+15<br>스윕 토쇼의 우정도+5`, `지능+10<br>스윕 토쇼의 우정도+5`]},
{createDate:`2022-11-17`, character:`스윕 토쇼`, eventType:`support`,  cardName: `[차가운 독점?] 스윕 토쇼`, title: `③ 소녀의 기분은 꽃처럼 변한다☆彡`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>지능+5<br><span class='skill-info'>[레어] 천명을 받은 자</span> 힌트 LV+1`]},
//스페셜 위크
{createDate:`2022-08-13`, character:`스페셜 위크`, eventType:`support`, cardName: null, title: `모퉁이에선 조심할게요!`, choice: [`지금 힘을 다 안 쓰는 게 좋아`, `서둘러 가봐`], effect: [`스페셜 위크의 우정도+5<br><span class='skill-info'>[일반] 외장 탱크</span> 힌트 LV+1`, `근성+15<br>스페셜 위크의 우정도+5`]},
{createDate:`2022-08-13`, character:`스페셜 위크`, eventType:`support`, cardName: null, title: `뭘 할까 싶어서 고민돼요!`, choice: [`맛있는 걸 먹어야지`, `떠오르는 곳 전부 가자!`], effect: [`체력+10<br>컨디션 상승<br>스페셜 위크의 우정도+5`, `스태미나+15<br>스킬 Pt+15<br>스페셜 위크의 우정도+5`]},
{createDate:`2022-08-13`, character:`스페셜 위크`, eventType:`support`, cardName: `[일본 최고의 무대를] 스페셜 위크`, title: `① 편자로 스텝을!`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>스태미너+5<br>스페셜 위크의 우정도+5`]},
{createDate:`2022-08-13`, character:`스페셜 위크`, eventType:`support`, cardName: `[일본 최고의 무대를] 스페셜 위크`, title: `② 마음은 롤러코스터!`, choice: [`세계 최장 롤러코스터네!`, `회전컵이네!`], effect: [`체력-10<br>스피드+5<br>스태미나+5<br>근성+10<br>스페셜 위크의 우정도+5`, `체력+20<br>지능+10<br>스페셜 위크의 우정도+5<br>연속 이벤트 종료`]},
{createDate:`2022-08-13`, character:`스페셜 위크`, eventType:`support`, cardName: `[일본 최고의 무대를] 스페셜 위크`, title: `③ 우리의 빅토리 스탠드!`, choice: [`(선택지 없음)`], effect: [`성공 시 :<br>체력-10<br>스피드+5<br>스태미너+5<br>근성+15<br><span class='skill-info'>[레어] 전심전력</span> 힌트 LV+3<br>스페셜 위크의 우정도+5<br>실패 시 :<br>체력-10<br>스피드+5<br>스태미너+5<br>근성+5<br><span class='skill-info'>[일반] 뒷심</span> 힌트 LV+1<br>스페셜 위크의 우정도+5`]},
{createDate:`2022-08-13`, character:`스페셜 위크`, eventType:`support`, cardName: `[저녁놀은 동경의 색] 스페셜 위크`, title: `① 언젠가는 동경하는 우마무스메가!`, choice: [`(선택지 없음)`], effect: [`체력+10<br>스피드+5`]},
{createDate:`2022-08-13`, character:`스페셜 위크`, eventType:`support`, cardName: `[저녁놀은 동경의 색] 스페셜 위크`, title: `② 조금이라도 비슷해지기 위해서`, choice: [`역시 머리일까?`, `과묵한 점이라든가?`, `없지 않을까…`], effect: [`체력-10<br>스피드+15<br>스페셜 위크의 우정도+5`, `체력-10<br>스킬 Pt+20<br>스페셜 위크의 우정도+5`, `체력-10<br>스페셜 위크의 우정도+5<br><span class='skill-info'>[일반] 쥐어짜기</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`스페셜 위크`, eventType:`support`, cardName: `[저녁놀은 동경의 색] 스페셜 위크`, title: `③ 동경의 형태`, choice: [`(선택지 없음)`], effect: [`성공 시 :<br>체력+10<br>스피드+10<br>스킬 Pt +10<br><span class='skill-info'>[레어] 먹보</span> 힌트 LV+3<br>실패 시 :<br>체력+10<br>스피드+5<br><span class='skill-info'>[일반] 영양 보급</span> 힌트 LV+1`]},
//시리우스 심볼리
//시킹 더 펄
{createDate:`2022-09-05`, character:`시킹 더 펄`, eventType:`support`,  cardName: null, title: `전력으로 씽킹!`, choice: [`실제로 하긴 힘들 것 같은데…`, `재미있는 아이디어가 나왔군!`], effect: [`지능+20<br>시킹 더 펄의 우정도+5`, `체력-10<br><span class='skill-info'>[일반] 우마무스메 애호가</span> 힌트 LV+3<br>시킹 더 펄의 우정도+5`]},
{createDate:`2022-09-05`, character:`시킹 더 펄`, eventType:`support`,  cardName: null, title: `전력으로 패션!`, choice: [`그건 좀…`, `그럼 마음껏 즐길게`], effect: [`체력+10<br>컨디션 상승`, `파워+5<br>근성+5<br>시킹 더 펄의 우정도+5`]},
{createDate:`2022-09-05`, character:`시킹 더 펄`, eventType:`support`,  cardName: `[세계의 진주, 그 이름은] 시킹 더 펄`, title: `① 말은 논논♪ 바디로 표현하는 거야!`, choice: [`소리 높여 노래한다`, `스트레스를 발산하며 춤춘다`, `만족스러운 포즈를 취한다`], effect: [`컨디션 상승<br><span class='skill-info'>[일반] 럭키 세븐</span> 힌트 LV+1<br>시킹 더 펄의 우정도+5`, `파워+10<br>근성+10<br>시킹 더 펄의 우정도+5`, `체력+30<br>※다음 이벤트가 발생하지 않음`]},
{createDate:`2022-09-05`, character:`시킹 더 펄`, eventType:`support`,  cardName: `[세계의 진주, 그 이름은] 시킹 더 펄`, title: `② 포기하지 마! 가능성은 무한대!`, choice: [`(선택지 없음)`], effect: [`파워+5<br>근성+5<br><span class='skill-info'>[일반] 기어 시프트</span> 힌트 LV+1`]},
//신코 윈디
{createDate:`2022-10-11`, character:`신코 윈디`, eventType:`support`,  cardName: `[///WARNING GATE///] 신코 윈디`, title: `① 여길 파, 윈디!`, choice: [`뒷일은 부하에게 맡겨줘`, `끝까지 힘내자!`], effect: [`스피드+10<br>신코 윈디의 우정도+5`, `체력-5<br>스킬 Pt+30<br>신코 윈디의 우정도+5`]},
{createDate:`2022-10-11`, character:`신코 윈디`, eventType:`support`,  cardName: `[///WARNING GATE///] 신코 윈디`, title: `② 게이트여, 열려라!`, choice: [`(선택지 없음)`], effect: [`스피드+10<br>스킬 Pt+15<br><span class='skill-info'>[일반] 기어 시프트</span> 힌트 LV+3<br>신코 윈디의 우정도+5<br>또는<br>스피드+5<br>스킬 Pt+10<br>신코 윈디의 우정도+5`]},
{createDate:`2022-10-11`, character:`신코 윈디`, eventType:`support`,  cardName: null, title: `덥석, 돌격!`, choice: [`내 말대로 됐군`, `패배를 인정해?`], effect: [`스킬 Pt+15<br>신코 윈디의 우정도+5`, `스피드+3<br><span class='skill-info'>[일반] 오기</span> 힌트 LV+1<br>신코 윈디의 우정도+5`]},
{createDate:`2022-10-11`, character:`신코 윈디`, eventType:`support`,  cardName: null, title: `덥석, 박멸!`, choice: [`빨리 솔직히 대답하자!`, `피로, 줄여줘`], effect: [`스피드+3<br>컨디션 상승<br>신코 윈디의 우정도+5`, `체력+10<br>스킬 Pt+5<br>신코 윈디의 우정도+5`]},
//심볼리 루돌프
{createDate:`2022-08-13`, character:`심볼리 루돌프`, eventType:`support`, cardName: `[트레센 학원] 심볼리 루돌프`, title: `'황제'의 격려`, choice: [`레이스를 대비해 가벼운 스피드 훈련 중심`, `힘든 전개를 대비해, 일부러 더 무겁게 조정`], effect: [`스피드+10`, `체력-10<br>스킬 Pt+30`]},
{createDate:`2022-08-13`, character:`심볼리 루돌프`, eventType:`support`, cardName: `[트레센 학원] 심볼리 루돌프`, title: `학생회장의 마음`, choice: [`고마워, 덕분에 비 오는 날에도 안심이야`, `학원을 위해 수고가 많네`], effect: [`<span class='skill-info'>[일반] 비오는 날○</span> 힌트 LV+1`, `스태미나+15`]},
//심볼리 크리스 에스
//아그네스 디지털
{createDate:`2022-08-13`, character:`아그네스 디지털`, eventType:`support`, cardName: null, title: `감동적인 걸 위해서라면 빗속이라도!`, choice: [`무리하다가 감기 걸린다`, `진지하구나!`], effect: [`아그네스 디지털의 우정도+5<br><span class='skill-info'>[일반] 비오는 날○</span> 힌트 LV+1`, `<span class='skill-info'>[일반] 진창길○</span> 힌트 LV+1<br>아그네스 디지털의 우정도+5`]},
{createDate:`2022-08-13`, character:`아그네스 디지털`, eventType:`support`, cardName: null, title: `우마무스메 결핍증!`, choice: [`몸 상태를 생각해서 돌아가는 건 어때?`, `지금이라도 참가할 수 있을 거야!`], effect: [`체력+5<br>스피드+5<br>아그네스 디지털의 우정도+5`, `스피드+5<br>파워+5<br>아그네스 디지털의 우정도+5`]},
{createDate:`2022-08-13`, character:`아그네스 디지털`, eventType:`support`, cardName: `[디지털 충전 중+] 아그네스 디지털`, title: `① 행복한 오타쿠 라이프`, choice: [`(선택지 없음)`], effect: [`파워+10`]},
{createDate:`2022-08-13`, character:`아그네스 디지털`, eventType:`support`, cardName: `[디지털 충전 중+] 아그네스 디지털`, title: `② 우마무스메를 향한 사랑은 영원해요!`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>파워+10<br><span class='skill-info'>[일반] 추입 심리전</span> 힌트 LV+1`]},
//아그네스 타키온
{createDate:`2022-08-13`, character:`아그네스 타키온`, eventType:`support`, cardName: null, title: `검증 필요・수면 시간과 작업 능률`, choice: [`힘이 넘치네`, `어려운 논문을 쓰는 모양이군`], effect: [`파워+5<br>지능+5<br>아그네스 타키온의 우정도+5`, `지능+10<br>아그네스 타키온의 우정도+5`]},
{createDate:`2022-08-13`, character:`아그네스 타키온`, eventType:`support`, cardName: null, title: `검증 필요・타인의 개입으로 촉발된 우발성`, choice: [`주법`, `판단력`], effect: [`아그네스 타키온의 우정도+5<br><span class='skill-info'>[일반] 선입의 요령○</span> 힌트 LV+1`, `지능+10<br>아그네스 타키온의 우정도+5`]},
{createDate:`2022-08-13`, character:`아그네스 타키온`, eventType:`support`, cardName: `[생체 A에 관한 실험적 연구] 아그네스 타키온`, title: `① Report『특화 단련에 의한 가능성』`, choice: [`(선택지 없음)`], effect: [`지능+5<br>스킬 Pt+15`]},
{createDate:`2022-08-13`, character:`아그네스 타키온`, eventType:`support`, cardName: `[생체 A에 관한 실험적 연구] 아그네스 타키온`, title: `② Report『미정 (휴식도 중요)』`, choice: [`(선택지 없음)`], effect: [`지능+10<br>스킬 Pt+15<br><span class='skill-info'>[일반] 도주 견제</span> 힌트 LV+1`]},
//아이네스 후진
{createDate:`2022-08-13`, character:`아이네스 후진`, eventType:`support`, cardName: null, title: `술래잡기야!`, choice: [`느긋하게 즐긴다`, `전력을 다해 논다!`], effect: [`체력+10<br>스피드+5<br>아이네스 후진의 우정도+5`, `<span class='skill-info'>[일반] 빠른 걸음</span> 힌트 LV+1<br>아이네스 후진의 우정도+5`]},
{createDate:`2022-08-13`, character:`아이네스 후진`, eventType:`support`, cardName: null, title: `앞으로 10분이야!`, choice: [`고민되면 일단 뛰어보자!`, `자세를 확인하는 건 어때?`], effect: [`근성+15<br>아이네스 후진의 우정도+5`, `아이네스 후진의 우정도+5<br>랜덤으로 지능+15<br>스태미나+5<br>근성+10`]},
{createDate:`2022-08-13`, character:`아이네스 후진`, eventType:`support`, cardName: `[뛰쳐나와, 반짝여라] 아이네스 후진`, title: `① 언니의 순발력`, choice: [`(선택지 없음)`], effect: [`체력-10<br>스피드+5<br>스태미너+5<br>근성+10`]},
{createDate:`2022-08-13`, character:`아이네스 후진`, eventType:`support`, cardName: `[뛰쳐나와, 반짝여라] 아이네스 후진`, title: `② 해피해피한 전진`, choice: [`(선택지 없음)`], effect: [`체력-10<br>근성+10<br>스킬 Pt+30<br>아이네스 후진의 우정도+5`]},
{createDate:`2022-08-13`, character:`아이네스 후진`, eventType:`support`, cardName: `[뛰쳐나와, 반짝여라] 아이네스 후진`, title: `③ 목표는 반짝이는 순간!`, choice: [`(선택지 없음)`], effect: [`성공 시 :<br>체력-10<br>근성+20<br>지능+5<br><span class='skill-info'>[레어] 말괄량이 우마무스메</span> 힌트 LV+3<br>또는<br>체력-10<br>근성+10<br>지능+5<br><span class='skill-info'>[레어] 말괄량이 우마무스메</span> 힌트 LV+1<br>실패 시 :<br>체력-10<br>근성+10<br><span class='skill-info'>[일반] 기세로 밀어붙이기</span> 힌트 LV+1`]},
//애스턴 마짱
//야마닌 제퍼
//야에노 무테키
{createDate:`2022-08-19`, character:`야에노 무테키`, eventType:`support`, cardName: `[누르고 참으려 해도 계속 불타는 것] 야에노 무테키`, title: `① 전뇌 오의 작렬! 야에노 출장 지도 수행`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>파워+5<br>스킬 Pt+10`]},
{createDate:`2022-08-19`, character:`야에노 무테키`, eventType:`support`, cardName: `[누르고 참으려 해도 계속 불타는 것] 야에노 무테키`, title: `② 이성의 식 VS 난폭의 식`, choice: [`마음껏 먹어 치워!`, `각자 맞는 양을 먹는 게 더 좋아…`], effect: [`체력+10<br>스킬 Pt+10<br>야에노 무테키의 우정도+5`, `체력+10<br>지능+10<br>스킬 Pt+10<br><span class='skill-info'>[일반] 장난은 끝이야!</span> 힌트 LV+3<br>※다음 이벤트가 발생하지 않음`]},
{createDate:`2022-08-19`, character:`야에노 무테키`, eventType:`support`, cardName: `[누르고 참으려 해도 계속 불타는 것] 야에노 무테키`, title: `③ 야에노 무테키 연가지옥변`, choice: [`(선택지 없음)`], effect: [`체력-10<br>스피드+5<br>스태미나+5<br>파워+5<br><span class='skill-info'>[레어] 텐션 오르는데!</span> 힌트 LV+3<br><br>체력-10<br>스피드+5<br>스태미나+5<br><span class='skill-info'>[레어] 텐션 오르는데!</span> 힌트 LV+1`]},
{createDate:`2022-08-19`, character:`야에노 무테키`, eventType:`support`, cardName: null, title: `강인하고 꾸밈없는 사람은, 인에 가깝다`, choice: [`주먹 스피드 강화에 집중하는 건 어때?`, `주먹 파워 강화에 집중하는 건 어때?`], effect: [`스피드+10`, `컨디션 상승<br>파워+5`]},
{createDate:`2022-08-19`, character:`야에노 무테키`, eventType:`support`, cardName: null, title: `아아, 지키고 싶어…!`, choice: [`혹독하게 수행하는 것 같은 표정이었어`, `재미있는 면도 있구나`], effect: [`스태미나+10<br>파워+10`, `<span class='skill-info'>[일반] 중거리 코너○</span> 힌트 LV+1`]},
//어드마이어 베가
//에어 그루브
{createDate:`2022-08-13`, character:`에어 그루브`, eventType:`support`, cardName: null, title: `날렵하고도 강인하게`, choice: [`혼자서 이걸 옮기려면 힘이 들겠어`, `이 양을 다 치우려면 상당히 서둘러야겠는데…`], effect: [`파워+15<br>에어 그루브의 우정도+5`, `스피드+10<br>스태미나+5<br>에어 그루브의 우정도+5`]},
{createDate:`2022-08-13`, character:`에어 그루브`, eventType:`support`, cardName: null, title: `준엄하고도 은혜롭게`, choice: [`항상 엄하게 대해?`, `상대를 잘 관찰하고 있구나`], effect: [`에어 그루브의 우정도+5<br><span class='skill-info'>[일반] 임기응변</span> 힌트 LV+1`, `체력+10<br>지능+10`]},
{createDate:`2022-08-13`, character:`에어 그루브`, eventType:`support`, cardName: `[부회장의 일침] 에어 그루브`, title: `① 늠름한 호접란`, choice: [`(선택지 없음)`], effect: [`파워+5<br>근성+5`]},
{createDate:`2022-08-13`, character:`에어 그루브`, eventType:`support`, cardName: `[부회장의 일침] 에어 그루브`, title: `② 떡갈나무에 피어라`, choice: [`(선택지 없음)`], effect: [`체력-10<br>파워+5<br>근성+5<br><span class='skill-info'>[일반] 직선 가속</span> 힌트 LV+3<br>에어 그루브의 우정도+5<br>또는<br>체력-20<br>파워+5<br>근성+5<br><span class='skill-info'>[일반] 직선 가속</span> 힌트 LV+1<br>에어 그루브의 우정도+5`]},
//에어 샤커
{createDate:`2022-08-13`, character:`에어 샤커`, eventType:`support`, cardName: null, title: `//검증 필요`, choice: [`식을 다시 짜보면 어떠냐고 말한다`, `끈기 있게 계속하면 결과가 나온다고 말한다`], effect: [`체력+10<br>근성+5<br>에어 샤커의 우정도+5`, `체력-10<br>스태미나+5<br>근성+10<br>에어 샤커의 우정도+5`]},
{createDate:`2022-08-13`, character:`에어 샤커`, eventType:`support`, cardName: null, title: `//꼭 가지고 싶다`, choice: [`본인한테 맞는 수단을 찾아보는 건 어때?`, `직접 손에 넣어야지`], effect: [`에어 샤커의 우정도+5<br><span class='skill-info'>[일반] 페이스 킵</span> 힌트 LV+1`, `체력 최대치+4<br>근성+5<br>에어 샤커의 우정도+5`]},
{createDate:`2022-08-13`, character:`에어 샤커`, eventType:`support`, cardName: `[7cm의 너머로] 에어 샤커`, title: `① 노이즈는 불필요`, choice: [`(선택지 없음)`], effect: [`스태미너+5<br>지능+5`]},
{createDate:`2022-08-13`, character:`에어 샤커`, eventType:`support`, cardName: `[7cm의 너머로] 에어 샤커`, title: `② 리얼리스트의 열정`, choice: [`(선택지 없음)`], effect: [`스태미너+5<br>지능+5<br>스킬 Pt+5`]},
{createDate:`2022-08-13`, character:`에어 샤커`, eventType:`support`, cardName: `[7cm의 너머로] 에어 샤커`, title: `③ 내가 최강`, choice: [`(선택지 없음)`], effect: [`스태미너+5<br>지능+10<br><span class='skill-info'>[레어] 승리를 향한 집념</span> 힌트 LV+1`]},
//에이신 플래시
{createDate:`2022-08-13`, character:`에이신 플래시`, eventType:`support`, cardName: null, title: `예상 밖의 대응`, choice: [`아예 직접 만드는 건 어떨까?`, `다른 가게를 찾아보는 건 어떨까?`], effect: [`근성+10<br>에이신 플래시의 우정도+5`, `<span class='skill-info'>[일반] 집중 마크○</span> 힌트 LV+1<br>에이신 플래시의 우정도+5`]},
{createDate:`2022-08-13`, character:`에이신 플래시`, eventType:`support`, cardName: null, title: `예상 밖의 점심`, choice: [`이번 기회에 새로운 음식을 먹어보는 건 어때?`, `그럼 얼른 다른 메뉴를 생각해야겠네`], effect: [`체력+15<br>에이신 플래시의 우정도+5`, `스피드+5<br>근성+5<br>에이신 플래시의 우정도+5`]},
{createDate:`2022-08-13`, character:`에이신 플래시`, eventType:`support`, cardName: `[0500 · 정각대로] 에이신 플래시`, title: `① 좋은 관리자로서`, choice: [`(선택지 없음)`], effect: [`체력 최대치+4<br>체력+10<br>컨디션 상승`]},
{createDate:`2022-08-13`, character:`에이신 플래시`, eventType:`support`, cardName: `[0500 · 정각대로] 에이신 플래시`, title: `② 좋은 친구로서`, choice: [`(선택지 없음)`], effect: [`체력+20<br><span class='skill-info'>[일반] 뒷심</span> 힌트 LV+1`]},
//엘 콘도르 파사
{createDate:`2022-08-13`, character:`엘 콘도르 파사`, eventType:`support`, cardName: null, title: `시크릿 노트!`, choice: [`엘 식 파워 트레이닝 메뉴`, `맑은 날 레이스에서 달리는 요령`], effect: [`파워+10<br>엘 콘도르 파사의 우정도+5`, `<span class='skill-info'>[일반] 맑은 날○</span> 힌트 LV+1<br>엘 콘도르 파사의 우정도+5`]},
{createDate:`2022-08-13`, character:`엘 콘도르 파사`, eventType:`support`, cardName: null, title: `활활 파이어!`, choice: [`스태미나 정식을 먹어보면 어때?`, `타이어를 끌면서 전력질주는 어때?`], effect: [`스태미나+10<br>엘 콘도르 파사의 우정도+5`, `체력-10<br>파워+20<br>엘 콘도르 파사의 우정도+5`]},
{createDate:`2022-08-13`, character:`엘 콘도르 파사`, eventType:`support`, cardName: `[패션 챔피오나!] 엘 콘도르 파사`, title: `① 세계적인…!?`, choice: [`(선택지 없음)`], effect: [`파워+5<br>근성+5`]},
{createDate:`2022-08-13`, character:`엘 콘도르 파사`, eventType:`support`, cardName: `[패션 챔피오나!] 엘 콘도르 파사`, title: `② 국물이 중요해!!`, choice: [`그래, 너만의 맛이야!`, `아니, 조리법이지!`], effect: [`체력+30<br>엘 콘도르 파사의 우정도+5`, `엘 콘도르 파사의 우정도+5<br>연속 이벤트 종료<br><span class='skill-info'>[일반] 스태미나 킵</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`엘 콘도르 파사`, eventType:`support`, cardName: `[패션 챔피오나!] 엘 콘도르 파사`, title: `③ 루차도라・엘!!`, choice: [`(선택지 없음)`], effect: [`파워+10<br><span class='skill-info'>[레어] 킬러 튠</span> 힌트 LV+1`]},
//오구리 캡
{createDate:`2022-08-13`, character:`오구리 캡`, eventType:`support`, cardName: null, title: `뭐라고 대답하지…`, choice: [`트레이닝을 실제로 보여주는 건 어때?`, `잘 못하겠으면 조금씩 극복해보자`], effect: [`체력+5<br>파워+5`, `체력-10<br>근성+15`]},
{createDate:`2022-08-13`, character:`오구리 캡`, eventType:`support`, cardName: null, title: `인파가 붐비는 곳은 힘들어…`, choice: [`흐름에 휩쓸리지 않도록 버티며 나아가자`, `흐름을 지켜보고 나아가자`], effect: [`파워+5<br>스킬 Pt+15`, `<span class='skill-info'>[일반] 나카야마 경기장○</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`오구리 캡`, eventType:`support`, cardName: `[『사랑받는 존재가 되어다오』] 오구리 캡`, title: `① 인형이라…`, choice: [`(선택지 없음)`], effect: [`체력 최대치+4<br>파워+5`]},
{createDate:`2022-08-13`, character:`오구리 캡`, eventType:`support`, cardName: `[『사랑받는 존재가 되어다오』] 오구리 캡`, title: `② 정말로 응해야 하는 건…`, choice: [`그때는 어른을 의지해`, `마법의 말을 가르쳐줄게`], effect: [`파워+5<br>스킬 Pt+10<br>오구리 캡의 우정도+5<br><span class='skill-info'>[일반] 스태미나 킵</span> 힌트 LV+1`, `스태미나+5<br>스킬 Pt+10<br>오구리 캡의 우정도+5<br><span class='skill-info'>[일반] 외곽 추월 준비</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`오구리 캡`, eventType:`support`, cardName: `[『사랑받는 존재가 되어다오』] 오구리 캡`, title: `③ 내가 하고 싶은 말은…`, choice: [`지금의 너라면 문제없어`, `넌 어떻게 하고 싶어?`], effect: [`성공 시 :<br>파워+15<br>근성+10<br>스킬 Pt+15<br><span class='skill-info'>[레어] 강인한 다리</span> 힌트 LV+3<br>실패 시 :<br>파워+10<br>근성+5<br>스킬 Pt+10<br><span class='skill-info'>[레어] 강인한 다리</span> 힌트 LV+1<br>오구리 캡의 우정도+5`, `체력+30`]},
//원더 어큐트
//위닝 티켓
{createDate:`2022-08-13`, character:`위닝 티켓`, eventType:`support`, cardName: null, title: `전・력・경・주!!`, choice: [`손잡이 지름길이야!`, `상대의 움직임을 예상해 보는 건 어때?`], effect: [`위닝 티켓의 우정도+5<br><span class='skill-info'>[일반] 선입 코너○</span> 힌트 LV+1`, `스킬 Pt+30<br>위닝 티켓의 우정도+5`]},
{createDate:`2022-08-13`, character:`위닝 티켓`, eventType:`support`, cardName: null, title: `전・력・복・근!!`, choice: [`알지! 끝없이 하고 싶어!`, `스포츠 드링크를 준다`], effect: [`스태미나+5<br>스킬 Pt+15<br>위닝 티켓의 우정도+5`, `컨디션 상승<br>스킬 Pt+15<br>위닝 티켓의 우정도+5`]},
{createDate:`2022-08-19`, character:`위닝 티켓`, eventType:`support`, cardName: `[꿈은 정말로 이루어지는구나!] 위닝 티켓`, title: `① 밀착! 정열 더비 특집!`, choice: [`(선택지 없음)`], effect: [`스태미나+5<br>파워+5`]},
{createDate:`2022-08-19`, character:`위닝 티켓`, eventType:`support`, cardName: `[꿈은 정말로 이루어지는구나!] 위닝 티켓`, title: `② 특훈! 라이벌이니까!`, choice: [`(선택지 없음)`], effect: [`체력-10<br>스태미나+5<br>파워+5`]},
{createDate:`2022-08-19`, character:`위닝 티켓`, eventType:`support`, cardName: `[꿈은 정말로 이루어지는구나!] 위닝 티켓`, title: `③ 도전! 꿈은 이루기 위해 있다!`, choice: [`(선택지 없음)`], effect: [`체력-30<br>스태미나+5<br>파워+5<br><span class='skill-info'>[레어] 전심전력</span> 힌트 LV+2`]},
{createDate:`2022-08-13`, character:`위닝 티켓`, eventType:`support`, cardName: `[B · N · Winner!!] 위닝 티켓`, title: `① 유저 네임 『W&T』`, choice: [`(선택지 없음)`], effect: [`근성+10`]},
{createDate:`2022-08-13`, character:`위닝 티켓`, eventType:`support`, cardName: `[B · N · Winner!!] 위닝 티켓`, title: `② 다음날 전원 근육통!`, choice: [`(선택지 없음)`], effect: [`스태미너+5<br>근성+5`]},
{createDate:`2022-08-13`, character:`위닝 티켓`, eventType:`support`, cardName: `[B · N · Winner!!] 위닝 티켓`, title: `③ We are BNW!!`, choice: [`(선택지 없음)`], effect: [`근성+10<br><span class='skill-info'>[레어] 능숙한 환승</span> 힌트 LV+1`]},
{createDate:`2022-11-17`, character:`위닝 티켓`, eventType:`support`,  cardName: `[전력! 탠트럼!] 위닝 티켓`, title: `① 티케조☆탐험대!`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>스태미너+5`]},
{createDate:`2022-11-17`, character:`위닝 티켓`, eventType:`support`,  cardName: `[전력! 탠트럼!] 위닝 티켓`, title: `② 티케조☆프렌드십!`, choice: [`웃어 웃어!`, `일단 어디서 진정 좀 할래?`], effect: [`<span class='skill-info'>[일반] 십만 마력</span> 힌트 LV+1<br>스태미나+3<br>근성+3<br>위닝 티켓의 우정도+10`, `<span class='skill-info'>[일반] 단독○</span> 힌트 LV+3<br>체력+25<br>위닝 티켓의 우정도-5<br>연속 이벤트 종료`]},
{createDate:`2022-11-17`, character:`위닝 티켓`, eventType:`support`,  cardName: `[전력! 탠트럼!] 위닝 티켓`, title: `③ 티케조☆나이트 피버!`, choice: [`(선택지 없음)`], effect: [`<span class='skill-info'>[레어] 노력가</span> 힌트 LV+1<br>스피드+8<br>스태미나+8<br>근성+8`]},
//유키노 비진
{createDate:`2022-08-13`, character:`유키노 비진`, eventType:`support`, cardName: `[고향 직송 응원!] 유키노 비진`, title: `① 포근한 추억의 왕코소바`, choice: [`예를 들면 뭐가 있어?`, `왕코소바가 먹고 싶어졌어`], effect: [`컨디션 상승<br>유키노 비진의 우정도+5`, `체력 최대치+4<br>유키노 비진의 우정도+5`]},
{createDate:`2022-08-13`, character:`유키노 비진`, eventType:`support`, cardName: `[고향 직송 응원!] 유키노 비진`, title: `② 학급 반장의 대단한 특훈`, choice: [`그래! 반장 같은 배짱을 배우자!`, `그래! 반장 같은 달리기를 배우자!`], effect: [`컨디션 상승<br>파워+5<br>유키노 비진의 우정도+5`, `파워+3<br>근성+3<br>지능+3<br>유키노 비진의 우정도+5`]},
{createDate:`2022-08-13`, character:`유키노 비진`, eventType:`support`, cardName: `[고향 직송 응원!] 유키노 비진`, title: `③ 저, 이기고 싶어요!`, choice: [`멋있는 모습을 보여주자!`, `특훈의 성과를 보여주자!`], effect: [`컨디션 상승<br><span class='skill-info'>[레어] 논스톱 걸</span> 힌트 LV+1<br>유키노 비진의 우정도+5`, `파워+3<br>근성+3<br>지능+3<br><span class='skill-info'>[레어] 논스톱 걸</span> 힌트 LV+1<br>유키노 비진의 우정도+5`]},
{createDate:`2022-08-13`, character:`유키노 비진`, eventType:`support`, cardName: null, title: `'시티스폿'을 목표로`, choice: [`이 지도를 보면, 현재 위치와 목적지는…`, `지도 앱을 쓰면 편해`], effect: [`체력-10<br>컨디션 상승<br>근성+10<br>유키노 비진의 우정도+5`, `<span class='skill-info'>[일반] 코너 가속○</span> 힌트 LV+1<br>유키노 비진의 우정도+5`]},
{createDate:`2022-08-13`, character:`유키노 비진`, eventType:`support`, cardName: null, title: `멋진 라이브를 위해`, choice: [`격렬한 스텝을 넣어보면 어때?`, `아크로바틱한 안무를 해보면 어때?`], effect: [`근성+10<br>유키노 비진의 우정도+5`, `체력-10<br>근성+15<br>유키노 비진의 우정도+5`]},
{createDate:`2022-08-13`, character:`유키노 비진`, eventType:`support`, cardName: `[시티걸 입문#] 유키노 비진`, title: `① 오더 트레이닝`, choice: [`(선택지 없음)`], effect: [`컨디션 상승<br>파워+5`]},
{createDate:`2022-08-13`, character:`유키노 비진`, eventType:`support`, cardName: `[시티걸 입문#] 유키노 비진`, title: `② 내추럴 시티 걸`, choice: [`(선택지 없음)`], effect: [`컨디션 상승<br>지능+25`]},
//이나리 원
//이쿠노 딕터스
{createDate:`2022-08-13`, character:`이쿠노 딕터스`, eventType:`support`, cardName: null, title: `이쿠노식 만전 메서드`, choice: [`전부 혼자서 해?`, `정말 열심히 하는구나`], effect: [`지능+10<br>이쿠노 딕터스의 우정도+5`, `스킬 Pt+30<br>이쿠노 딕터스의 우정도+5`]},
{createDate:`2022-08-13`, character:`이쿠노 딕터스`, eventType:`support`, cardName: null, title: `이쿠노식 매니지먼트론`, choice: [`내 스케줄도 봐줄래?`, `비법 좀 가르쳐줘`], effect: [`스태미나+20<br>이쿠노 딕터스의 우정도+5`, `이쿠노 딕터스의 우정도+5<br><span class='skill-info'>[일반] 트릭(뒤)</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`이쿠노 딕터스`, eventType:`support`, cardName: `[준비운동은 게을리하지 말 것] 이쿠노 딕터스`, title: `① 이쿠노식 우정 매서드`, choice: [`(선택지 없음)`], effect: [`지능+10<br>스킬 Pt+20`]},
{createDate:`2022-08-13`, character:`이쿠노 딕터스`, eventType:`support`, cardName: `[준비운동은 게을리하지 말 것] 이쿠노 딕터스`, title: `② 이쿠노식 서포트 메서드`, choice: [`심폐기능을 단련해서 도주에 특화!`, `다릿심을 강화하는 추입으로!`], effect: [`지능+15<br><span class='skill-info'>[일반] 도주 심리전</span> 힌트 LV+3<br>이쿠노 딕터스의 우정도+5`, `지능+15<br>이쿠노 딕터스의 우정도+5<br><span class='skill-info'>[일반] 추입 심리전</span> 힌트 LV+3`]},
//젠노 롭 로이
{createDate:`2022-08-19`, character:`젠노 롭 로이`, eventType:`support`, cardName: `[추천하는 책이 있어요!] 젠노 롭 로이`, title: `① 독서 소녀와 마법 소녀?`, choice: [`독서로 지식을 넓히자`, `우선 근력 증강부터!`], effect: [`스태미나+5<br>지능+5<br>젠노 롭 로이의 우정도+5`, `체력+20<br>파워+10<br>젠노 롭 로이의 우정도+5<br>연속 이벤트 종료`]},
{createDate:`2022-08-19`, character:`젠노 롭 로이`, eventType:`support`, cardName: `[추천하는 책이 있어요!] 젠노 롭 로이`, title: `② 언젠가, 『이야기』의 주인공이`, choice: [`(선택지 없음)`], effect: [`스태미나+10<br>지능+10<br><span class='skill-info'>[일반] 날카로운 눈빛</span> 힌트 LV+1`]},
{createDate:`2022-08-19`, character:`젠노 롭 로이`, eventType:`support`, cardName: null, title: `독서가의 공감 이야기`, choice: [`클라이맥스의 자동차 추격 신이 굉장했어`, `영상이 예쁘더라`], effect: [`스피드+5<br>지능+5<br>젠노 롭 로이의 우정도+5`, `체력+10<br>파워+5<br>젠노 롭 로이의 우정도+5`]},
{createDate:`2022-08-19`, character:`젠노 롭 로이`, eventType:`support`, cardName: null, title: `맡겨진 이야기`, choice: [`도서부원한테 물어보는 게 좋겠네`, `그 책은 무슨 스토리인데?`], effect: [`스태미나+10<br>지능+10<br>젠노 롭 로이의 우정도+5`, `<span class='skill-info'>[일반] 중거리 직선○</span> 힌트 LV+1<br>젠노 롭 로이의 우정도+5`]},
//츠루마루 츠요시
//카렌짱
//카와카미 프린세스
{createDate:`2022-09-16`, character:`카와카미 프린세스`, eventType:`support`,  cardName: null, title: `프린세스, 도주!`, choice: [`다음은 술래 교대!`, `핸디캡을 좀 주는 게 어때?`], effect: [`체력+10<br>카와카미 프린세스의 우정도+5`, `카와카미 프린세스의 우정도+5`]},
{createDate:`2022-09-16`, character:`카와카미 프린세스`, eventType:`support`,  cardName: null, title: `프린세스, 때리다!`, choice: [`다음을 마지막 한 방이라고 생각해 봐!`, `쓰러트릴 상대를 떠올려 보는 건 어때?`], effect: [`근성+10<br>카와카미 프린세스의 우정도+5`, `컨디션 상승<br>카와카미 프린세스의 우정도+5`]},
{createDate:`2022-09-16`, character:`카와카미 프린세스`, eventType:`support`,  cardName: `[신부라면!!] 카와카미 프린세스`, title: `① 조신하게! 호쾌하게!`, choice: [`『공주된 자의 포즈』로`, `『굴하지 않는 자의 포즈』로?`], effect: [`컨디션 상승<br>스피드+5<br>카와카미 프린세스의 우정도+5`, `<span class='skill-info'>[일반] 속박</span> 힌트 LV+1<br>스킬 Pt+10<br>카와카미 프린세스의 우정도+5`]},
{createDate:`2022-09-16`, character:`카와카미 프린세스`, eventType:`support`,  cardName: `[신부라면!!] 카와카미 프린세스`, title: `② 프린세스 파워☆풀 맥스!`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>근성+5`]},
{createDate:`2022-09-16`, character:`카와카미 프린세스`, eventType:`support`,  cardName: `[신부라면!!] 카와카미 프린세스`, title: `③ 공격해라! 공주님 로드!`, choice: [`분명 왕자님이 먼저 나타날 거야`, `너 자신이 왕자님이 될 가능성도 있어`], effect: [`<span class='skill-info'>[레어] 주목 받는 댄서</span> 힌트 LV+1<br>스피드+15<br>근성+15<br>카와카미 프린세스의 우정도+5`, `체력+25<br>스킬 Pt+25`]},
//케이에스 미라클
//코파노 리키
//키류인 아오이
{createDate:`2022-08-13`, character:`키류인 아오이`, eventType:`support`, cardName: `[함께 같은 길을!] 키류인 아오이`, title: `1권째는 꼭 당신에게`, choice: [`(선택지 없음)`], effect: [`※ 모든 육성 목표 완료 후에 육성 종료시, 키류인 아오이와의 외출 횟수가 4회 이상이면 이벤트 발생<br>모든 능력치+5<br>추입 주저 힌트 LV+1~3`]},
{createDate:`2022-08-13`, character:`키류인 아오이`, eventType:`support`, cardName: `[함께 같은 길을!] 키류인 아오이`, title: `⑤ 꿈을 계속해서 쫓는 한`, choice: [`(선택지 없음)`], effect: [`스태미너+6<br>스킬 Pt+19<br>키류인 아오이의 우정도+5<br>랜덤으로<br><span class='skill-info'>[일반] 도주 견제</span> 힌트 LV+1<br>또는<br>스태미너+6<br>파워+6<br>근성+6<br>스킬 Pt+58<br><span class='skill-info'>[일반] 도주 견제</span> 힌트 LV+3<br>키류인 아오이의 우정도+5`]},
{createDate:`2022-08-13`, character:`키류인 아오이`, eventType:`support`, cardName: null, title: `1권째는 꼭 당신에게`, choice: [`(선택지 없음)`], effect: [`※ 모든 육성 목표 완료 후에 육성 종료시, 키류인 아오이와의 외출 횟수가 4회 이상이면 이벤트 발생<br>모든 능력치+5<br>추입 주저 힌트 LV+1~3`]},
{createDate:`2022-08-13`, character:`키류인 아오이`, eventType:`support`, cardName: null, title: `① 몸으로 직접 익힐 지어다!`, choice: [`(선택지 없음)`], effect: [`체력+25<br>스킬 Pt+30<br>컨디션 2단계 상승<br>키류인 아오이의 우정도+5`]},
{createDate:`2022-08-13`, character:`키류인 아오이`, eventType:`support`, cardName: null, title: `② 공원에서 노는 법`, choice: [`혼자서 시소를 탄다고요…?`, `잘하는 철봉 기술이 있나요?`], effect: [`체력+25~35<br>지능+5~6<br>키류인 트레이너의 우정도+5<br>랜덤으로 컨디션 상승<br>※ 서포트 효과에 따라 수치 변동`, `컨디션 상승<br>스피드+5~6<br>스킬 Pt+45~56<br>키류인 트레이너의 우정도+5<br>또는<br>스킬 Pt+15~18<br>키류인 트레이너의 우정도+5<br>※ 서포트 효과에 따라 수치 변동`]},
{createDate:`2022-08-13`, character:`키류인 아오이`, eventType:`support`, cardName: null, title: `③ 폭주 트레이닝`, choice: [`(선택지 없음)`], effect: [`체력+20<br>컨디션 상승<br>스킬 Pt+37<br>키류인 아오이의 우정도+5`]},
{createDate:`2022-08-13`, character:`키류인 아오이`, eventType:`support`, cardName: null, title: `④ 존중이라는 행복`, choice: [`(선택지 없음)`], effect: [`컨디션 상승<br>파워+10<br>스킬 Pt+45<br>키류인 아오이의 우정도+5`]},
{createDate:`2022-08-13`, character:`키류인 아오이`, eventType:`support`, cardName: null, title: `동기, 키류인 트레이너`, choice: [`(선택지 없음)`], effect: [`※ 처음 함께 트레이닝 할 경우 한 번에 한하여 이벤트 발생<br>컨디션 상승<br>스킬 Pt+15<br>키류인 아오이의 우정도+5`]},
{createDate:`2022-08-13`, character:`키류인 아오이`, eventType:`support`, cardName: null, title: `수고하셨습니다!`, choice: [`(선택지 없음)`], effect: [`※ 함께 트레이닝 할 경우 랜덤하게 이벤트 발생<br>랜덤하게 컨디션 상승<br>지능+3<br>키류인 아오이의 우정도+5`]},
{createDate:`2022-08-13`, character:`키류인 아오이`, eventType:`support`, cardName: null, title: `아오이와의 인연・좋은 지도자가 되어라`, choice: [`(선택지 없음)`], effect: [`※ 키류인 아오이와 외출할 수 있는 상태이면 클래식 급 1월 전반에 이벤트 발생<br>컨디션 상승<br>지능+15<br>스킬 Pt+15<br><span class='skill-info'>[일반] 쥐어짜기</span> 힌트 LV+3<br>키류인 아오이의 우정도+5`]},
{createDate:`2022-08-13`, character:`키류인 아오이`, eventType:`support`, cardName: null, title: `취미를 찾아서`, choice: [`좋아합니다!!`, `특별히......`], effect: [`체력+20~28<br>컨디션 상승<br>스킬 Pt+15~18<br>키류인 트레이너의 우정도+5<br>키류인 트레이너와 외출 가능<br>※ 서포트 효과에 따라 수치 변동<br>※발동 조건 : 우정도 초록색 이상`, `컨디션 하락<br>키류인 트레이너의 우정도-5<br><span class='skill-info'>[일반] 단독○</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`키류인 아오이`, eventType:`support`, cardName: null, title: `트레이너 마음가짐 『지도법은 상시 개선하라』`, choice: [`너무 무리하지는 마세요`, `『트레이너 백서』는 한번 보고 싶네요`], effect: [`체력+10~14<br>스킬 Pt+15~18<br>키류인 트레이너의 우정도+5<br>※ 서포트 효과에 따라 수치 변동`, `스피드+5~6<br>지능+5~6<br>키류인 트레이너의 우정도+5`]},
{createDate:`2022-08-13`, character:`키류인 아오이`, eventType:`support`, cardName: null, title: `파티는 그곳에서`, choice: [`(선택지 없음)`], effect: [`스피드+5~6<br>스태미나+5~6<br>파워+5~6<br>※ 서포트 효과에 따라 수치 변동`]},
//키타산 블랙
{createDate:`2022-08-13`, character:`키타산 블랙`, eventType:`support`, cardName: `[다가오는 열기에 떠밀려] 키타산 블랙`, title: `① 빛을 쫓아서`, choice: [`(선택지 없음)`], effect: [`컨디션 상승<br>스피드+2<br>파워+2<br>지능+2<br>키타산 블랙의 우정도+5`]},
{createDate:`2022-08-13`, character:`키타산 블랙`, eventType:`support`, cardName: `[다가오는 열기에 떠밀려] 키타산 블랙`, title: `② 정을 베푸는 건 남을 위해서만이 아니야`, choice: [`빨리 나아야겠다`, `건강함에서 지고 들어갈 순 없지!`], effect: [`체력+10<br>컨디션 상승<br>키타산 블랙의 우정도+5`, `스피드+5~10<br><span class="skill-info">[일반] 직선 달인</span> 힌트 LV+1~3<br>키타산 블랙의 우정도+5`]},
{createDate:`2022-08-13`, character:`키타산 블랙`, eventType:`support`, cardName: `[다가오는 열기에 떠밀려] 키타산 블랙`, title: `③ 둘이서 가는 이 꽃길`, choice: [`(선택지 없음)`], effect: [`스피드+10<br>파워+10<br><span class='skill-info'>[레어] 호선의 프로페서</span> 힌트 LV+3<br>키타산 블랙의 우정도+5<br>또는<br>스피드+5<br>파워+5<br><span class='skill-info'>[레어] 호선의 프로페서</span> 힌트 LV+1<br>키타산 블랙의 우정도+5`]},
{createDate:`2022-08-13`, character:`키타산 블랙`, eventType:`support`, cardName: null, title: `아아, 고향`, choice: [`질 좋은 운동화가 좋겠어`, `트레이닝 교본이 좋을 것 같아`], effect: [`스피드+5<br>파워+10<br>키타산 블랙의 우정도+5`, `<span class='condition-info'>훈련 능숙○</span> 상태 획득<br>키타산 블랙의 우정도+5`]},
{createDate:`2022-08-13`, character:`키타산 블랙`, eventType:`support`, cardName: null, title: `아아, 우정`, choice: [`무척 힘찬 소리였어!`, `이제 실전만 남았네!`], effect: [`컨디션 상승<br>파워+5<br>키타산 블랙의 우정도+5`, `체력+10<br>키타산 블랙의 우정도+5`]},
//킹 헤일로
{createDate:`2022-08-13`, character:`킹 헤일로`, eventType:`support`, cardName: null, title: `조언할 권리를 주겠어!`, choice: [`최신 근성론에 대하여 토론한다`, `스퍼트 타이밍에 대하여 이야기한다`], effect: [`근성+10<br>지능+5<br>킹 헤일로의 우정도+5`, `<span class='skill-info'>[일반] 뒷심</span> 힌트 LV+1<br>킹 헤일로의 우정도+5`]},
{createDate:`2022-08-13`, character:`킹 헤일로`, eventType:`support`, cardName: null, title: `함께 할 권리를 주겠어!`, choice: [`그럼 병합 훈련`, `그럼 킹 구호 연습`], effect: [`체력-20<br>스피드+10<br>파워+10<br>지능+5<br>킹 헤일로의 우정도+5`, `컨디션 하락<br>근성+25<br>킹 헤일로의 우정도+5`]},
{createDate:`2022-08-13`, character:`킹 헤일로`, eventType:`support`, cardName: `[일류 플래닝] 킹 헤일로`, title: `① 일류의 지도`, choice: [`(선택지 없음)`], effect: [`스피드+10`]},
{createDate:`2022-08-13`, character:`킹 헤일로`, eventType:`support`, cardName: `[일류 플래닝] 킹 헤일로`, title: `② 일류의 상담 상대`, choice: [`(선택지 없음)`], effect: [`스피드+15<br>스킬 Pt+15`]},
{createDate:`2022-10-22`, character:`킹 헤일로`, eventType:`support`,  cardName: `[오늘 밤, 왈츠를 타고] 킹 헤일로`, title: `① 매혹의 초대장`, choice: [`시선을 사로잡는 춤 특훈`, `궁극의 의상 준비`], effect: [`파워+10<br>킹 헤일로의 우정도+5`, `근성+10<br>킹 헤일로의 우정도+5`]},
{createDate:`2022-10-22`, character:`킹 헤일로`, eventType:`support`,  cardName: `[오늘 밤, 왈츠를 타고] 킹 헤일로`, title: `② 무도가의 프라이드`, choice: [`브라보! 브라보!`, `슬슬 생활관 통금시간이다`], effect: [`체력-5<br>스태미나+10<br>파워+5<br>스킬 Pt+5<br>킹 헤일로의 우정도+5`, `체력+15<br>스킬 Pt+5<br>킹 헤일로의 우정도+5`]},
{createDate:`2022-10-22`, character:`킹 헤일로`, eventType:`support`,  cardName: `[오늘 밤, 왈츠를 타고] 킹 헤일로`, title: `③ 무도회의 기라성`, choice: [`(선택지 없음)`], effect: [`성공 시 :<br>체력-10<br>파워+25<br><span class='skill-info'>[레어] 번갯불의 번뜩임</span> 힌트 LV+3<br>실패 시 :<br>체력-10<br>파워+20<br><span class='skill-info'>[일반] 바짝 붙기</span> 힌트 LV+3`]},
//타니노 김렛
//타마모 크로스
{createDate:`2022-08-13`, character:`타마모 크로스`, eventType:`support`, cardName: null, title: `질 수 없는 싸움!`, choice: [`인파를 파악해!`, `라이벌을 잘 관찰하자`], effect: [`타마모 크로스의 우정도+5<br><span class='skill-info'>[일반] 마군 속 냉정</span> 힌트 LV+1`, `스태미나+5<br>지능+5<br>타마모 크로스의 우정도+5`]},
{createDate:`2022-08-13`, character:`타마모 크로스`, eventType:`support`, cardName: null, title: `타마모 선배의 학원 안내`, choice: [`안내라면, 도서관 말이야?`, `안내라면, 헬스장 말이야?`], effect: [`지능+10<br>타마모 크로스의 우정도+5`, `스태미나+5<br>근성+5<br>타마모 크로스의 우정도+5`]},
{createDate:`2022-08-13`, character:`타마모 크로스`, eventType:`support`, cardName: `[하늘도 갈라버리는 번개 소녀!] 타마모 크로스`, title: `① 소・돼지・닭・카레!`, choice: [`(선택지 없음)`], effect: [`스태미너+5<br>파워+5`]},
{createDate:`2022-08-13`, character:`타마모 크로스`, eventType:`support`, cardName: `[하늘도 갈라버리는 번개 소녀!] 타마모 크로스`, title: `② 없는 형편 나름대로의 레이트 쇼`, choice: [`(선택지 없음)`], effect: [`스태미너+5<br>파워+5<br>근성+5`]},
{createDate:`2022-08-13`, character:`타마모 크로스`, eventType:`support`, cardName: `[하늘도 갈라버리는 번개 소녀!] 타마모 크로스`, title: `③ 가난함은 친구다!`, choice: [`(선택지 없음)`], effect: [`<span class='skill-info'>[레어] 신속 과감</span> 힌트 LV+1`]},
//타이키 셔틀
{createDate:`2022-08-13`, character:`타이키 셔틀`, eventType:`support`, cardName: `[트레센 학원] 타이키 셔틀`, title: `Oh! Tonight Party☆`, choice: [`멀리 돌아서 전력 대시다!`, `집단을 헤친다는 이미지로 달리자!`], effect: [`체력-10<br>스피드+5<br>파워+10`, `<span class='skill-info'>[일반] 빠져나갈 준비</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`타이키 셔틀`, eventType:`support`, cardName: `[트레센 학원] 타이키 셔틀`, title: `Yes! Let's hug☆`, choice: [`스피드라고 생각해`, `파워라고 생각해`], effect: [`스피드+10`, `스피드+5<br>파워+5`]},
//토센 조던
//토카이 테이오
{createDate:`2022-08-13`, character:`토카이 테이오`, eventType:`support`, cardName: null, title: `나의 무기`, choice: [`전부 할 수 있게 되면 멋있겠네!`, `지금도 충분히 멋진 무기를 갖고 있어.`], effect: [`컨디션 상승<br>근성+10<br>토카이 테이오의 우정도+5`, `<span class='skill-info'>[일반] 선행 직선○</span> 힌트 LV+1<br>토카이 테이오의 우정도+5`]},
{createDate:`2022-08-13`, character:`토카이 테이오`, eventType:`support`, cardName: null, title: `나의 방식`, choice: [`자기한테 맞는 방법이 제일이지!`, `참은 뒤 달리면 좀 더 기분 좋을 거야.`], effect: [`컨디션 상승<br>스킬 Pt+15<br>토카이 테이오의 우정도+5`, `근성+15<br>토카이 테이오의 우정도+5`]},
{createDate:`2022-08-13`, character:`토카이 테이오`, eventType:`support`, cardName: `[꿈은 내걸으라고 있는 거야!] 토카이 테이오`, title: `① 개막의 예감`, choice: [`(선택지 없음)`], effect: [`체력+10<br>스피드+5`]},
{createDate:`2022-08-13`, character:`토카이 테이오`, eventType:`support`, cardName: `[꿈은 내걸으라고 있는 거야!] 토카이 테이오`, title: `② 한때의 막간`, choice: [`(선택지 없음)`], effect: [`체력+10<br>스피드+5<br>지능+5`]},
{createDate:`2022-08-13`, character:`토카이 테이오`, eventType:`support`, cardName: `[꿈은 내걸으라고 있는 거야!] 토카이 테이오`, title: `③ 전설의 일막`, choice: [`(선택지 없음)`], effect: [`체력+10<br>스피드+5<br><span class='skill-info'>[레어] 일진광풍</span> 힌트 LV+1<br>토카이 테이오의 우정도+7`]},
//트윈 터보
{createDate:`2022-08-13`, character:`트윈 터보`, eventType:`support`, cardName: null, title: `뜨거워지기 시작했어!`, choice: [`쉬운 곡을 해서 실수를 줄이는 건 어때?`, `최고 난이도에 도전해서 점수를 따자!`], effect: [`체력+15<br>트윈 터보의 우정도+5`, `트윈 터보의 우정도+5<br><span class='skill-info'>[일반] 앞장서기</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`트윈 터보`, eventType:`support`, cardName: null, title: `마음을 먹었으면 일직선으로!`, choice: [`그렇다면 스피드를 우선하는 게 좋아`, `확실히 힘이 중요해!`], effect: [`컨디션 하락<br>스피드+20`, `체력-10<br>파워+20`]},
{createDate:`2022-08-13`, character:`트윈 터보`, eventType:`support`, cardName: `[터보 엔진 전개 선언!] 트윈 터보`, title: `① 무섭지 않다니까!`, choice: [`둘이서 달리면 순식간일 거야.`, `귀신이 숨어있을지도?`], effect: [`성공 시 :<br>스피드+10<br>트윈 터보의 우정도+5<br>실패 시 :<br>체력-10<br>※성공 시에만 다음 이벤트가 발생<br>스피드+10<br>※연속 이벤트 종료`, `체력+20<br>※다음 이벤트가 발생하지 않음`]},
{createDate:`2022-08-13`, character:`트윈 터보`, eventType:`support`, cardName: `[터보 엔진 전개 선언!] 트윈 터보`, title: `② 안 잡힐 거라니까!`, choice: [`좋아 다녀와!`, `지금은 참아야 해.`], effect: [`성공 시 :<br>스피드+15<br>선두 프라이드 힌트 LV+1~3<br>트윈 터보의 우정도+5<br>실패 시 :<br>체력-10<br>※연속 이벤트 종료`, `체력+25<br>※다음 이벤트가 발생하지 않음`]},
{createDate:`2022-08-13`, character:`트윈 터보`, eventType:`support`, cardName: `[터보 엔진 전개 선언!] 트윈 터보`, title: `③ 터보는 강하다니까!`, choice: [`터보 엔진 전개다!`, `숨을 돌려!`], effect: [`성공 시 :<br>체력-10<br>스피드+25<br><span class='skill-info'>[레어] 선수 필승</span> 힌트 LV+3<br>실패 시 :<br>체력-10<br>스피드+5<br><span class='skill-info'>[일반] 앞장서기</span> 힌트 LV+3`, `체력+15<br><span class='skill-info'>[일반] 전개 살피기</span> 힌트 LV+1`]},
//티엠 오페라 오
{createDate:`2022-08-13`, character:`티엠 오페라 오`, eventType:`support`, cardName: `[트레센 학원] 티엠 오페라 오`, title: `승자가 되는 에튀드`, choice: [`평범한 위닝 런이 낫지 않을까…?`, `나쁘지 않은 퍼포먼스였어`], effect: [`컨디션 하락<br>스피드+5<br>스킬 Pt+30`, `파워+5<br>스킬 Pt+15`]},
{createDate:`2022-08-13`, character:`티엠 오페라 오`, eventType:`support`, cardName: `[트레센 학원] 티엠 오페라 오`, title: `유한한 시간을 초월하여`, choice: [`한정된 시간에 최선을 다하자`, `틀에 얽매이지 않는 사고방식은 중요하지`], effect: [`체력+10<br>스킬 Pt+15`, `<span class='skill-info'>[일반] 비근간거리○</span> 힌트 LV+1`]},
//파인 모션
{createDate:`2022-08-13`, character:`파인 모션`, eventType:`support`, cardName: null, title: `설레는 운동화`, choice: [`가볍고 빨리 달릴 수 있는 운동화`, `무겁지만 단련이 되는 운동화`], effect: [`스피드+5<br>스킬 Pt+10<br>파인 모션의 우정도+5`, `체력-10<br>스태미나+5<br>스킬 Pt+20<br>파인 모션의 우정도+5`]},
{createDate:`2022-08-13`, character:`파인 모션`, eventType:`support`, cardName: null, title: `추억 클로버`, choice: [`최종 코너`, `마지막 직선`], effect: [`파인 모션의 우정도+5<br><span class='skill-info'>[일반] 코너 달인○</span> 힌트 LV+1`, `근성+15<br>파인 모션의 우정도+5`]},
{createDate:`2022-08-13`, character:`파인 모션`, eventType:`support`, cardName: `[감사는 손끝까지 담아서] 파인 모션`, title: `① 멋진♪ 연습하기 좋은 날`, choice: [`함께 달리면 더 즐거워`, `연습은 진지하게 해야 해`, `즐겁게 연습하는 건 중요하지`], effect: [`지능+5<br>스킬 Pt+20<br>파인 모션의 우정도+5`, `스피드+10<br>스태미나+5`, `<span class='condition-info'>훈련 능숙○</span>상태 획득<br>파인 모션의 우정도+5`]},
{createDate:`2022-08-13`, character:`파인 모션`, eventType:`support`, cardName: `[감사는 손끝까지 담아서] 파인 모션`, title: `② 멋진♪ 라이브 하기 좋은 날`, choice: [`(선택지 없음)`], effect: [`체력+10<br>스킬 Pt+10`]},
{createDate:`2022-08-13`, character:`파인 모션`, eventType:`support`, cardName: `[감사는 손끝까지 담아서] 파인 모션`, title: `③ 멋진♪ 레이스 하기 좋은 날`, choice: [`(선택지 없음)`], effect: [`성공 시 :<br>체력-10<br>근성+5<br>지능+10<br>스킬 Pt+15<br><span class='skill-info'>[레어] 스피드스터</span> 힌트 LV+1~3<br>실패 시 :<br>체력-10<br>근성+5<br>지능+5<br>스킬 Pt+5<br><span class='skill-info'>[일반] 빠져나갈 준비</span> 힌트 LV+1`]},
//하루 우라라
{createDate:`2022-08-13`, character:`하루 우라라`, eventType:`support`, cardName: null, title: `우라랑☆복병 대시!`, choice: [`복병의 제대로 된 의미를 알려준다`, `쉬는 편이 좋다고 말한다`], effect: [`<span class='skill-info'>[일반] 복병○</span> 힌트 LV+1`, `컨디션 상승<br>체력+10<br>하루 우라라의 우정도+5`]},
{createDate:`2022-08-13`, character:`하루 우라라`, eventType:`support`, cardName: null, title: `우라랑☆시험공부`, choice: [`리듬을 맞추면 외우기 쉬워`, `상이 있으면 컨디션이 나지`], effect: [`체력+10<br>지능+5`, `컨디션 상승<br>지능+5`]},
{createDate:`2022-08-13`, character:`하루 우라라`, eventType:`support`, cardName: `[화창~한 휴일] 하루 우라라`, title: `① 라이스짱이랑 힘낼게!`, choice: [`(선택지 없음)`], effect: [`체력+10`]},
{createDate:`2022-08-13`, character:`하루 우라라`, eventType:`support`, cardName: `[화창~한 휴일] 하루 우라라`, title: `② 킹이랑 힘낼게!`, choice: [`(선택지 없음)`], effect: [`체력+10<br>컨디션 상승<br>하루 우라라의 우정도+5`]},
{createDate:`2022-08-13`, character:`하루 우라라`, eventType:`support`, cardName: `[화창~한 휴일] 하루 우라라`, title: `③ 모두의 응원으로 힘낼게!`, choice: [`(선택지 없음)`], effect: [`체력+15<br><span class='skill-info'>[레어] 마이동풍</span> 힌트 LV+1<br>하루 우라라의 우정도+5`]},
//하야카와 타즈나
{createDate:`2022-08-13`, character:`하야카와 타즈나`, eventType:`support`, cardName: `[트레센 학원에 어서 오세요!] 하야카와 타즈나`, title: `⑤ 재충전 서프라이즈`, choice: [`(선택지 없음)`], effect: [`체력+56<br>스킬 Pt+40<br>컨디션 2단계 상승<br><span class='skill-info'>[레어] 컨센트레이션</span> 힌트 LV+1<br>하야카와 타즈나의 우정도+5<br>또는<br>체력+56<br>스킬 Pt+40<br>컨디션 2단계 상승<br><span class='skill-info'>[일반] 집중력</span> 힌트 LV+1<br>하야카와 타즈나의 우정도+5`]},
{createDate:`2022-08-13`, character:`하야카와 타즈나`, eventType:`support`, cardName: null, title: `① 우유 때때로 사과`, choice: [`(선택지 없음)`], effect: [`체력+25<br>컨디션 상승<br>스피드+5<br>하야카와 타즈나의 우정도+5`]},
{createDate:`2022-08-13`, character:`하야카와 타즈나`, eventType:`support`, cardName: null, title: `② 경이로운 도주 실력?`, choice: [`(선택지 없음)`], effect: [`체력+25<br>배드 컨디션 치료<br>하야카와 타즈나의 우정도+5`]},
{createDate:`2022-08-13`, character:`하야카와 타즈나`, eventType:`support`, cardName: null, title: `③ 시네마의 추억`, choice: [`『200억의 여자 ~위험한 전업주부~』`, `『흰 공만을 쫓아 하늘로… 열혈 야구부 이야기!』`], effect: [`체력+25~35<br>스태미나+5~6<br>컨디션 상승<br>하야카와 타즈나의 우정도+5<br>※ 서포트 효과에 따라 수치 변동`, `스태미나+10~12<br>근성+10~12<br>컨디션 상승<br>하야카와 타즈나의 우정도+5<br>※ 서포트 효과에 따라 수치 변동`]},
{createDate:`2022-08-13`, character:`하야카와 타즈나`, eventType:`support`, cardName: null, title: `④ 한숨과 반창고`, choice: [`(선택지 없음)`], effect: [`체력+35<br>지능+5<br>컨디션 상승<br>배드 컨디션 치료<br>하야카와 타즈나의 우정도+5`]},
{createDate:`2022-08-13`, character:`하야카와 타즈나`, eventType:`support`, cardName: null, title: `『항상 먹는 그거』 주세요!`, choice: [`(선택지 없음)`], effect: [`※ URA 파이널즈 진출 이후 육성 종료시, 하야카와 타즈나의 우정도가 MAX가 아니면 이벤트 발생<br>모든 능력치+5<br>스킬 Pt+10`]},
{createDate:`2022-08-13`, character:`하야카와 타즈나`, eventType:`support`, cardName: null, title: `선택한 삶의 방식`, choice: [`이사장실에 다녀오겠습니다!`, `유인물 준비, 도와드리겠습니다`], effect: [`체력+10~14<br>컨디션 상승<br>하야카와 타즈나의 우정도+5<br>※ 서포트 효과에 따라 수치 변동`, `지능+5~6<br>컨디션 상승<br>하야카와 타즈나의 우정도+5<br>※서포트 효과에 따라 수치 변동`]},
{createDate:`2022-08-13`, character:`하야카와 타즈나`, eventType:`support`, cardName: null, title: `수고하셨어요♪`, choice: [`(선택지 없음)`], effect: [`※ 함께 트레이닝 할 경우 랜덤하게 이벤트 발생<br>확률로 컨디션 상승<br>스피드+3<br>하야카와 타즈나의 우정도+5`]},
{createDate:`2022-08-13`, character:`하야카와 타즈나`, eventType:`support`, cardName: null, title: `열정적인 두 사람`, choice: [`더 이야기하고 싶습니다!`, `그럼, 일이 있어서 슬슬...`], effect: [`체력+10~14<br>지능+5~6<br>컨디션 상승<br>하야카와 타즈나의 우정도+5<br>하야카와 타즈나와 외출 가능<br>※ 서포트 효과에 따라 수치 변동<br>※발동 조건 : 우정도 초록색 이상`, `컨디션 하락<br>하야카와 타즈나의 우정도-5<br><span class='skill-info'>[일반] 전개 살피기</span> 힌트 LV+1<br>※ 이후 외출 불가`]},
{createDate:`2022-08-13`, character:`하야카와 타즈나`, eventType:`support`, cardName: null, title: `이사장 비서 타즈나 씨`, choice: [`(선택지 없음)`], effect: [`※ 처음 함께 트레이닝 할 경우 한 번에 한하여 이벤트 발생<br>컨디션 상승<br>스킬 Pt+15~18<br>하야카와 타즈나의 우정도+5`]},
{createDate:`2022-08-13`, character:`하야카와 타즈나`, eventType:`support`, cardName: null, title: `조금 더 가까운 곳에서`, choice: [`(선택지 없음)`], effect: [`※ URA 파이널즈 진출 이후 육성 종료시, 하야카와 타즈나의 우정도가 MAX이면 이벤트 발생<br>모든 능력치+5<br>스킬 Pt+25`]},
{createDate:`2022-08-13`, character:`하야카와 타즈나`, eventType:`support`, cardName: null, title: `타즈나와의 인연・동경을 맡기고`, choice: [`(선택지 없음)`], effect: [`※ 하야카와 타즈나와 외출할 수 있는 상태이면 클래식 급 1월 전반에 이벤트 발생<br>체력+10<br>컨디션 상승<br>스피드+15<br><span class='skill-info'>[일반] 꼬리 올리기</span> 힌트 LV+3<br>하야카와 타즈나의 우정도+5`]},
//홋코 타루마에
//후지 키세키
{createDate:`2022-08-13`, character:`후지 키세키`, eventType:`support`, cardName: null, title: `미스디렉션`, choice: [`마지막 코너링 요령`, `달리기 테크닉`], effect: [`후지 키세키의 우정도+5<br><span class='skill-info'>[일반] 빠져나갈 준비</span> 힌트 LV+1`, `스킬 Pt+30<br>후지 키세키의 우정도+5`]},
{createDate:`2022-08-13`, character:`후지 키세키`, eventType:`support`, cardName: null, title: `슬라이트 오브 핸드`, choice: [`아까 살짝 넣…`, `굉장한 매직 파워야…!`], effect: [`지능+5<br>스킬 Pt+15<br>후지 키세키의 우정도+5`, `파워+5<br>스킬 Pt+15<br>후지 키세키의 우정도+5`]},
{createDate:`2022-08-13`, character:`후지 키세키`, eventType:`support`, cardName: `[나 참, 어서 와] 후지 키세키`, title: `① 아브라카다브라`, choice: [`(선택지 없음)`], effect: [`지능+10`]},
{createDate:`2022-08-13`, character:`후지 키세키`, eventType:`support`, cardName: `[나 참, 어서 와] 후지 키세키`, title: `② 아웃 오브 디스 월드`, choice: [`(선택지 없음)`], effect: [`지능+10<br>스킬 Pt+15<br><span class='skill-info'>[일반] 추입 긴장</span> 힌트 LV+1`]},
//히시 아마존
{createDate:`2022-08-13`, character:`히시 아마존`, eventType:`support`, cardName: `[정점에 서라!] 히시 아마존`, title: `① 나는 나답게`, choice: [`(선택지 없음)`], effect: [`스피드+5<br>파워+5<br>히시 아마존의 우정도+5`]},
{createDate:`2022-08-13`, character:`히시 아마존`, eventType:`support`, cardName: `[정점에 서라!] 히시 아마존`, title: `② 언니식 해결법`, choice: [`(선택지 없음)`], effect: [`스피드+10<br><span class='skill-info'>[일반] 뛰어난 작전</span> 힌트 LV+1`]},
{createDate:`2022-08-13`, character:`히시 아마존`, eventType:`support`, cardName: null, title: `히시아마 언니 분투기 ~문제아 편~`, choice: [`좌우에서 협공하자`, `운동장으로 유도하자`], effect: [`체력+10<br>지능+5<br>히시 아마존의 우정도+5`, `체력-10<br>스피드+10<br>근성+5<br>히시 아마존의 우정도+5`]},
{createDate:`2022-08-13`, character:`히시 아마존`, eventType:`support`, cardName: null, title: `히시아마 언니 분투기 ~추입 편~`, choice: [`기백으로 라이벌을 압도한다`, `바깥쪽으로 크게 돌아 치고 나가본다`], effect: [`히시 아마존의 우정도+5<br><span class='skill-info'>[일반] 추입 주저</span> 힌트 LV+1`, `파워+5<br>스킬 Pt+15<br>히시 아마존의 우정도+5`]},
//히시 아케보노
{createDate:`2022-09-16`, character:`히시 아케보노`, eventType:`support`,  cardName: null, title: `얼마든지☆드세요♪`, choice: [`좀 쉬는 게 어때?`, `굉장히 힘을 싣고 있기도 하고…`], effect: [`체력+10<br>히시 아케보노의 우정도+5`, `체력-5<br>파워+15<br>히시 아케보노의 우정도+5`]},
{createDate:`2022-09-16`, character:`히시 아케보노`, eventType:`support`,  cardName: null, title: `얼마든지☆맡기세요♪`, choice: [`차량을 밀어서 이동시킬 수 있겠어?`, `코스를 달려서 평탄화를 부탁해!`], effect: [`스태미나+10<br>히시 아케보노의 우정도+5`, `체력-15<br>히시 아케보노의 우정도+5`]},
{createDate:`2022-09-16`, character:`히시 아케보노`, eventType:`support`,  cardName: `[드세요, 퍼스트 Bite!] 히시 아케보노`, title: `① 있는 그대로의 자신으로 보노보노♪`, choice: [`(선택지 없음)`], effect: [`체력 최대치+4<br>근성+5<br>히시 아케보노의 우정도+5`]},
{createDate:`2022-09-16`, character:`히시 아케보노`, eventType:`support`,  cardName: `[드세요, 퍼스트 Bite!] 히시 아케보노`, title: `② 시작 하기요…보노☆`, choice: [`너무 많은 거 아니야…?`, `본격적으로 스모 기술도 배우는 게 어떨까?`], effect: [`체력+30<br>근성+5<br>히시 아케보노의 우정도+5<br>랜덤으로 <span class='condition-info'>살찜 주의</span> 획득`, `스태미나+5<br>파워+5<br>히시 아케보노의 우정도+5`]},
{createDate:`2022-09-16`, character:`히시 아케보노`, eventType:`support`,  cardName: `[드세요, 퍼스트 Bite!] 히시 아케보노`, title: `③ 당신에게 보노, 나도 보노☆`, choice: [`(선택지 없음)`], effect: [`스태미나+5<br>근성+10<br><span class='skill-info'>[레어] 식스 센스</span> 힌트 LV+3<br>또는<br>스태미나+5<br>근성+10<br><span class='skill-info'>[일반] 위험 회피</span> 힌트 LV+3`]},
];