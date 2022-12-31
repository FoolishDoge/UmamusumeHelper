const TIP0_DESC = `
[상단]<br>
<img src="./imgs/desc/tuto-1.png" class="desc-img" style="margin-top:10px; margin-bottom: 10px;">
(1) 설정창 열기.<br>
(2) UI 크기 설정. 설정값은 인터넷 브라우저에 저장됨.<br>
(3) 검색어 입력창.<br>
<ul style="margin-top:2px; margin-bottom:-5px;"><li>[1] 항목 태그 설정. 설정한 경우 해당 태그에 해당하는 항목만 검색됨. 태그 목록은 다음과 같음: 말딸(육성 정보) / 스킬(스킬 정보) / 커뮤(선택지 정보) / TIP(팁) / 경주(레이스 정보).</li>
<li>[2] 검색어 입력칸. 공백(스페이스바)로 검색어를 구분하고, ""로 검색어를 묶어 해당 검색어를 반드시 포함하는 항목만 검색할 수 있음.</li>
<li>[3] 검색어 지우기 버튼.</li></ul>
<br><br>
[설정창]<br>
<img src="./imgs/desc/tuto-2.png" class="desc-img" style="margin-top:10px; margin-bottom: 10px;">
모든 설정은 인터넷 브라우저에 저장됨.<br>
<ul style="margin-top:2px; margin-bottom:-5px;">
<li>아이템 표시 개수: 표시될 수 있는 최대 항목 수 설정. 표시되는 항목의 개수가 너무 많으면 렉걸림.</li>
<li>검색량 누적: 체크할 경우 각각의 검색어가 각 항목마다 몇 번이나 반복되는 지, 그 수에 따라 항목이 정렬됨. 체크하지 않았을 경우 공백(스페이스바)로 구분된 검색어를 몇 개나 포함하고 있는 지에 따라서만 정렬됨. 끄는 것을 추천.</li>
<li>내용도 검색: 체크할 경우 각 항목의 내용을 검색 대상에 포함함. 체크하지 않을 경우 항목의 내용을 제외한 제목, 히든태그 등으로만 검색됨.</li>
<li>하이라이트: 체크할 경우 각 항목에서 검색된 검색어를 하이라이트함.</li>
<li>모두 필수검색어: 체크할 경우 모든 검색어를 ""로 묶은 효과, 즉 반드시 모든 검색어를 포함하는 항목만 검색되도록 함.</li>
<li>검색어 자동 지우기: 체크할 경우 우마무스메HELPER에서 벗어났다가 돌아올 경우 자동으로 검색창을 지우고 바로 검색어를 입력할 수 있도록 자판을 엶. 기종에 따라 잘 작동하지 않을 수 있음.</li>
<li>하단 컨트롤 활성화: 체크할 경우 우측 하단에 항목 컨트롤 패널을 생성함.</li>
<li>전체 검색시 제외 항목: 체크할 경우 '전체' 태그로 검색했을 때 여기서 체크한 항목은 검색되지 않음. '체크한 것만 검색'이 아니라 '체크한 것은 제외'임.</li>
</ul>
<br><br>
[하단 컨트롤 패널]<br>
<img src="./imgs/desc/tuto-3.png" class="desc-img" style="margin-top:10px; margin-bottom: 10px;">
▲, ▼ 버튼을 눌러 현재 열려있는 항목 중 최상단 항목의 위, 아래 항목을 열고<br>
SEARCH 버튼을 눌러 검색창으로 이동 후 자판을 엶. 설정창에서 '검색어 자동 지우기'가 체크된 경우 검색창을 지움.<br>
검색창이 상단에 있어서 손꾸락 움직이기 귀찮아서 만듦.<br>
<br><br>
[항목 보기 예시]
<img src="./imgs/desc/tuto-4.png" class="desc-img" style="margin-top:10px; margin-bottom: 10px;">
(1) 박스쳐진 것처럼 스킬, 시나리오 컨디션 항목은 각각 빨갛게, 파랗게 칠해지며 누를 경우 해당 스킬[컨디션]에 대한 정보창이 뜸.<br>
(2) 정보창은 다른 항목을 열거나, 정보창을 클릭해 지울 수 있음.
`;
const TIP4_DESC = `<br>
<b>[스킬 획득한 채로 육성 완료 미션]</b><br>
<br>
▶ <span class='skill-info'>[레어] 호선의 프로페서</span><br>
&nbsp&nbsp&nbsp&nbsp- 심볼리 루돌프 5레벨 각성시 힌트 획득.<br>
&nbsp&nbsp&nbsp&nbsp- 'SSR [다가오는 열기에 떠밀려] 키타산 블랙' 서포트 카드로부터 획득 가능<br>
<br>
▶ <span class='skill-info'>[레어] 원호의 마에스트로</span><br>
&nbsp&nbsp&nbsp&nbsp- 슈퍼 크릭 5레벨 각성시 힌트 획득.<br>
&nbsp&nbsp&nbsp&nbsp- 'SSR [한 알의 평온] 슈퍼 크릭' 서포트카드로부터 획득 가능 (연속 이벤트 3체인에서 100% 확률로 획득)<br>
<br>
▶ <span class='skill-info'>[레어] 전심전력</span><br>
&nbsp&nbsp&nbsp&nbsp- 스페셜 위크 5레벨 각성시 힌트 획득.<br>
&nbsp&nbsp&nbsp&nbsp- 'SSR [일본 최고의 무대를] 스페셜 위크' 서포트카드로부터 획득 가능 (연속 이벤트 3체인에서 그리 높지 않은 확률로 획득. 아게마셍!)<br>
<br>
▶ <span class='skill-info'>[레어] 호전일식</span><br>
&nbsp&nbsp&nbsp&nbsp- 마야노 탑건 3레벨 각성시 힌트 획득.<br>
&nbsp&nbsp&nbsp&nbsp- 보드카 3레벨 각성시 힌트 획득.<br>
&nbsp&nbsp&nbsp&nbsp- 'SSR [로드·오브·보드카] 보드카' 서포트카드로부터 획득 가능 (연속 이벤트 3체인에서 100% 확률로 획득)<br>
&nbsp&nbsp&nbsp&nbsp- 랜덤 발생하는 URA 시나리오 이벤트 '좋은 표정이로다!'에서 '그럼 당근을 나눠주실 수 있나요?' 선택지를 골라 획득 가능<br>
<br>
▶ <span class='skill-info'>[레어] 한줄기 질풍</span><br>
&nbsp&nbsp&nbsp&nbsp- 랜덤 발생하는 URA 시나리오 이벤트 '좋은 표정이로다!'에서 '그럼 새 훈련 도구를 부탁해도 될까요?' 선택지를 골라 획득 가능<br>
&nbsp&nbsp&nbsp&nbsp- 'SSR [아직 작은 꽃봉오리지만] 니시노 플라워' 서포트카드로부터 획득 가능 (연속 이벤트 3체인에서 랜덤하게 획득)<br>
<br>
▶ <span class='skill-info'>[레어] 일진광풍</span><br>
&nbsp&nbsp&nbsp&nbsp- 'SSR [꿈은 내걸으라고 있는 거야!] 토카이 테이오' 서포트카드로부터 획득 가능 (연속 이벤트 3체인에서 100% 확률로 획득)<br>
<br>
▶ <span class='skill-info'>[레어] 곡선의 소믈리에</span><br>
&nbsp&nbsp&nbsp&nbsp- 오구리 캡 5레벨 각성시 힌트 획득.<br>
&nbsp&nbsp&nbsp&nbsp- 'SSR [불침함의 진격] 골드 쉽' 서포트카드로부터 획득 가능 (연속 이벤트 3체인에서 100% 확률로 획득)<br>
<br>
▶ <span class='skill-info'>[레어] 컨센트레이션</span><br>
&nbsp&nbsp&nbsp&nbsp- 사일런스 스즈카 3레벨 각성시 힌트 획득.<br>
&nbsp&nbsp&nbsp&nbsp- 'SSR [트레센 학원에 어서 오세요!] 하야카와 타즈나' 서포트카드로부터 획득 가능 (5번째 외출에서 랜덤하게 획득. 하위스킬인 <span class='skill-info'>[일반] 집중력</span>과 50:50 확률로 알려져 있음.)<br>
<br>
※ 한 번의 육성에서 위 스킬들 중 여러 개를 동시에 획득해도 됩니다.<br>
<br>
<br>
<br>
<b>[스킬 n개 이상 획득한 채로 육성 완료 미션 & 레이스 n회 이상 출전한 채로 육성 완료 미션]</b><br>
<br>
밑으로는 평범하게 육성해도 깨지만, 레이스 18회, 스킬 12개는 무리를 좀 해야된다. 사쿠라 바쿠신 오로 거지런을 돌 때 겸사겸사 깨자.<br>
<br>
<br>
<br>
<b>[3관을 달성한 채로 육성 완료 미션(3관 칭호 미션)]</b><br>
<br>
▶ 트리플 티아라<br>
&nbsp&nbsp&nbsp&nbsp- 벚꽃상: 클래식 4월 전반 (잔디 / 마일)<br>
&nbsp&nbsp&nbsp&nbsp- 추화상: 클래식 5월 후반 (잔디 / 중거리)<br>
&nbsp&nbsp&nbsp&nbsp- 오크스: 클래식 10월 후반 (잔디 / 중거리)<br>
&nbsp&nbsp&nbsp&nbsp- 추천캐릭터: 다이와 스칼렛. 육성목표에 티아라 3관이 모두 들어있다.<br>
<br>
▶ 봄 시니어 3관<br>
&nbsp&nbsp&nbsp&nbsp- 오사카배: 시니어 3월 후반 (잔디 / 중거리)<br>
&nbsp&nbsp&nbsp&nbsp- 천황상 봄: 시니어 4월 후반 (잔디 / 장거리)<br>
&nbsp&nbsp&nbsp&nbsp- 타카라즈카 기념: 시니어 6월 후반 (잔디 / 중거리)<br>
&nbsp&nbsp&nbsp&nbsp- 추천캐릭터: 골드 쉽, 슈퍼 크릭. 육성목표에 오사카배, 천황상은 들어있다.<br>
<br>
▶ 가을 시니어 3관<br>
&nbsp&nbsp&nbsp&nbsp- 천황상 가을: 시니어 10월 후반 (잔디 / 중거리)<br>
&nbsp&nbsp&nbsp&nbsp- 재팬컵: 시니어 11월 후반 (잔디 / 중거리)<br>
&nbsp&nbsp&nbsp&nbsp- 아리마 기념: 시니어 12월 후반 (잔디 / 장거리)<br>
&nbsp&nbsp&nbsp&nbsp- 추천캐릭터: 슈퍼 크릭. 육성목표에 천황상, 아리마 기념은 들어있다.<br>
※ 사실 가을 '시니어' 삼관이지만 클래식에 따도 상관 없고 클래식, 시니어에 섞어서 따도 상관 없다.
<br>
▶ 천황상 봄 가을 연패<br>
&nbsp&nbsp&nbsp&nbsp- 천황상 봄: 클래식/시니어 4월 후반 (잔디 / 장거리)<br>
&nbsp&nbsp&nbsp&nbsp- 천황상 가을: 클래식/시니어 10월 후반 (잔디 / 중거리)<br>
&nbsp&nbsp&nbsp&nbsp- 추천캐릭터: 슈퍼 크릭. 육성목표에 모두 포함되어 있다.<br>
<br>
<br>
<br>
<b>[칭호 미션]</b><br>
<br>
▶ 그랑프리 2세<br>
부모 말딸 중 한 쪽 이상이 아리마 기념, 타카라즈카 기념에서 우승.<br>
그 부모를 계승한 말딸로 아리마 기념, 타카라즈카 기념에서 우승.<br>
<br>
▶ 더트 실력자<br>
육성 중 더트 경기에 총 10회 출전.<br>
하루 우라라로 깨면 된다.<br>
<br>
▶ 올 라운더<br>
G1 잔디, G1 더트 경기에서 각각 3번씩 우승.<br>
오구리 캡, 엘 콘도르 파사로 깨자.<br>
<br>
▶ 노력의 천재<br>
파워 트레이닝 레벨 5를 달성하고 육성 마무리.<br>
<br>
▶ 스피드 퀸<br>
스피드 1200 달성.`;

const TIP5_DESC = `
현재까지 나온 모든 회복스킬의 스태미나 회복량은 다음과 같다<br>
- 일반 스킬 0.015 / 레어 스킬 0.055<br>
<br>
레어 스킬이 일반 스킬보다 약 3.7배나 높은 효과인데, 소모되는 스킬Pt 는 2배 정도밖에 차이나지 않는다.<br>
따라서 일반 스킬을 여러 개 찍는 것보다 레어 회복기를 배우는 게 훨씬 효율적이다.<br>
<br>
<br>
Q. 스태미나에는 최대치가 있다. 그럼 '초반'에 발동한다는 회복기들은 무용지물일까?<br>
&nbsp결론부터 말하면 효과가 아주 없지는 않다. 레이스는 '초반(스타트) / 초반(스퍼트) / 초반 / 중반 / 종반(최종코너) / 종반(최종직선) / 종반(라스트스퍼트)' 단계로 나뉘어진다. 여기서 초반 회복 스킬들은 3단계에 회복되는 스킬들로 1, 2단계인 스타트, 스퍼트 단계에서도 충분히 스태미나를 소모하기 때문에(약 12~14%) 효과가 있다.<br>
그런데 문제는 초반 회복 스킬에 붙은 조건문이다. 특정 페이즈에 한정되는 스킬들은 기본적으로 발동할 수 있는 시간 자체가 짧을 수밖에 없는데, '초반' 스킬들같은 경우 레이스가 시작하자마자 스킬이 터지는 것을 방지하겠다고 경기시간이 5초 경과한 시점부터 발동하도록 설계되어있다. 그만큼 발동할 수 있는 시간이 더욱 짧아진다는 것이다. 길어봐야 1~2분인 레이스를 n등분해 페이즈를 나누는데 5초는 굉장히 긴 시간이다.<br>
<br>
Q. <span class="skill-info">[레어] 호전일식</span>은 왜 쿠소스킬인가?<br>
&nbsp호전일식은 경기 중 단 한 번밖에 발동하지 않는데(쿨타임이 500초), 문제는 '직선'이라면 언제든 발동할 수 있게 되어있다는 것이다.<br>
레이스에선 게이트가 열리는 순간부터 '직선'으로 판정된다. 따라서 운이 나쁘다면 레이스가 시작하자마자 스태미나가 조금도 달지 않았는데 호전일식이 터질 수도 있다.<br>
뿐만 아니라, 만약 종반(최종직선) 페이즈에서 발동한다고 해도 이미 가속도와 속도가 한계까지 올라있는 상태라 거기서 스태미나를 회복한다고 별 영향이 없다.<br>
그리고 작성 기준일을 보자. 이걸 읽고 있는 시점에는 이미 패치되어 상향되었을 수도 있다.<br>
<br>
Q. 그럼 <span class="skill-info">[레어] 원호의 마에스트로</span>는 왜 적폐스킬인가?<br>
&nbsp다른 까다로운 조건이 안 붙고 레이스 내내 터질 수 있는 두 개의 회복스킬 중, 호전일식이 직선이라면 원호의 마에스트로는 코너에서 발동한다. 다시 말하면 반드시 스태미나가 어느정도 소모된 순간부터 발동한다는 것이고, 터지기만 하면 반드시 회복효과를 최대로 누릴 수 있다는 것이다. 이 이유만으로 현재까지 원호의 마에스트로보다 좋은 회복스킬은 없다.<br>
`;

const TIP6_DESC = `
▶ 1순위: '트레이닝 효과 증가'와 스킬<br>
&nbsp트레이닝 효과 증가는 말 그대로 함께 훈련할 때 능력치 상승량이 보정되는 것.<br>
좋은 스킬을 주는 서포트 카드는 카드 자체의 성능이 구려도 기용할 가치가 충분하다.<br>
<br><br>
▶ 2순위: 특기율<br>
&nbsp특기율이 높으면 서포트 캐릭터가 훈련보너스를 높여주는 담당 훈련종목에 더 많이 배치된다. 자기 담당에 배치되어 무지개(우정보너스)를 얼마나 띄우느냐가 곧 최종 능력치를 결정하는 만큼 매우 중요한 스탯.<br>
담당종목에 배치될 확률은 '0.18 × (1 + (특기율 / 100))' 정도로 추정되고 있다.<br>
※ SSR 키타산 블랙같은 경우 풀돌시 특기율이 기본 80, 고유보너스로 20이 추가되어 100에 달하며, 이를 확률로 환산하면 대략 36% 정도의 확률로, 3번 중에 한 번은 담당 훈련장에 등장한다.<br>
<br><br>
▶ 3순위: 스탯 보너스와 초기 우정도<br>
&nbsp스탯 보너스는 말 그대로 훈련시 기본 스탯 상승량에 가산되는 것. 기본 상승량은 여러 계산식에 의해 곱연산되어 부풀려지므로, 1~2 정도 추가되는 수준이라도 실제로는 엄청난 차이를 만든다.<br>
초기 우정도는 육성 시작시 우정도를 이미 어느정도 채우고 시작한다. 빨리 우정도를 당근색까지 올려 우정 보너스를 띄우는 게 핵심이기 때문에, 빠른 우정도작은 엄청난 스노우볼링 효과를 낸다.<br>
<br><br>
※ 굳이 우선순위를 나눴지만 전부 다 중요하고 좋은 스탯이다.
`;

const TIP7_DESC = `
<br>
<span style="font-size:25px;">[개요]</span><br>
<br>
인자작은 우마무스메의 메인 컨텐츠이자 육성의 핵심 중 하나다. 인자계승을 통해 깡능력치를 올리 거나, 스킬힌트를 얻거나, 거리나 각질 적성을 높히는 게 가능하다.<br>
<br>
<br>
<br>
<span style="font-size:25px;">[인자의 종류]</span><br>
<br>
<img src="./imgs/desc/blue.PNG" style="height:25px;"> <span style="font-size:20px;">청인자</span><br>
능력치를 올려주는 인자이자 가장 중요한 인자다. 1성 +5, 2성 +12, 3성 +21로, 할아버지, 할머니, 아버지 모두 3성이면 육성 시작부터 스탯을 63만큼 올려주고 시작하며, 2번의 계승에서도 추가로 능력치를 올려주므로 이론상 최대치는 378(친가, 외가 각각 63 x 3번의 계승)이다.<br>
<span style="color: blue">왜 중요한가요?</span> 기본적으로 스탯을 올리는 게 가장 중요한 게임이고, 육성 시작시 반드시 모든 청인자를 계승하며 시작하는 것부터 육성 중 2번의 계승에서 매우 높은 확률로 계승할 수 있는, 계승 효과가 가장 확실하고 안정적인 인자이다.<br>
<span style="color: blue">어떻게 얻나요?</span> 5개 스탯 중 1/5 확률로 하나가 선택되며, 알려진 n성 확률은 다음과 같다.<br>
<table class="desc-table"><tr><td class="td-label">스탯</td><td class="td-label">★</td><td class="td-label">★★</td><td class="td-label">★★★</td></tr><tr><td class="td-label">600 미만</td><td class="td-desc">90%</td><td class="td-desc">10%</td><td class="td-desc">0%</td></tr><tr><td class="td-label">600 ~<br>1099</td><td class="td-desc">49.5%</td><td class="td-desc">44.5%</td><td class="td-desc">6%</td></tr><tr><td class="td-label">1100 ~</td><td class="td-desc">20%</td><td class="td-desc">70%</td><td class="td-desc">10%</td></tr></table>
<br>
<br>
<img src="./imgs/desc/red.PNG" style="height:25px;"> <span style="font-size:20px;">적인자</span><br>
마장적성(잔디, 더트), 거리적성(단거리~장거리), 각질적성(도주~추입) 레벨을 높여주는 인자다. 청, 녹인자와 마찬가지로 시작시 한 번은 무조건 전부 계승받고 시작한다. 시작시 계승을 포함해 한 번의 계승에서 누적 1성에 1레벨, 4성에 2레벨, 7성에 3레벨, 10성 이상부터 4레벨을 올려준다. 3번의 계승이 있으니, 이론적으로는 하루 우라라를 장거리 S 잔디 S마로 키울 수도 있다.<br>
<span style="color: blue">왜 중요한가요?</span> 우마무스메는 적성 패널티가 꽤나 크기 때문에(예컨대, 거리적성 B 미만으로는 스피드, 마장 적성은 파워, 각질 적성은 지능 스탯에 패널티가 붙는다. 반대로 A 이상부터는 보너스가 붙는다.), 적성개조가 중요하다. 적성 중에서도 스피드가 가장 중요한 스탯으로 여겨지기 때문에 거리적성 인자가 선호받는다. 기본 적성레벨이 B 이하인 거리나 각질로 쓸 때 유용한 말딸들이 주로 개조대상이 된다.<br>
<span style="color: blue">어떻게 얻나요?</span> A레벨 이상의 적성들 중 하나가 랜덤하게 붙는다(예컨대, 단거리S, 선행A, 잔디A인 말이면, 1/3확률로 하나가 붙는다). 유저들이 조사한 인자의 n성 확률은 다음과 같다.<br>
<table class="desc-table"><tr><td class="td-label">★</td><td class="td-label">★★</td><td class="td-label">★★★</td></tr><tr><td class="td-desc">10%</td><td class="td-desc">70%</td><td class="td-desc">20%</td></tr></table>
<br>
<br>
<img src="./imgs/desc/green.PNG" style="height:25px;"> <span style="font-size:20px;">녹인자</span><br>
고유스킬의 힌트를 주는 인자다. 청, 적인자와 마찬가지로 육성 시작시 부모(조부모는 x)의 녹인자를 무조건 계승받고 시작한다. 이후 육성 중의 계승에선 조부모, 부모의 녹인자를 모두 확률로 계승받는다.<br>
<span style="color: blue">왜 중요한가요?</span> 딱히 중요하진 않다. 심볼리 루돌프의 <span class="skill-info">[일반] 그대, 황제의 신위를 보라</span>나 마르젠스키의 <span class="skill-info">[일반] 홍염 기어/LP1211-M</span>처럼 좋은 고유기가 있긴 하지만 필수라고 할 만한 건 없다.<br>
<span style="color: blue">어떻게 얻나요?</span> 확률적으로 붙으며, 재능개화 레벨이 높을 수록, 육성 마무리시 육성랭크(점수)가 높을 수록 잘 붙는다고 알려져 있다. 육성랭크 기준으로 유저들이 조사한 대략적인 확률은 아래와 같다.<br>
<table class="desc-table"><tr><td class="td-label">육성랭크</td><td class="td-label">★</td><td class="td-label">★★</td><td class="td-label">★★★</td></tr><tr><td class="td-label">SS(17500점)<br>미만</td><td class="td-desc">50%</td><td class="td-desc">45%</td><td class="td-desc">5%</td></tr><tr><td class="td-label">SS(17500점)<br>이상</td><td class="td-desc">20%</td><td class="td-desc">70%</td><td class="td-desc">10%</td></tr></table>
<br>
<br>
<img src="./imgs/desc/white.PNG" style="height:25px;"> <span style="font-size:20px;">시나리오 백인자</span><br>
백인자부터는 시작시엔 못 받고 육성 중 두 번의 계승에서 확률적으로 받을 수 있다. 시나리오 인자는 해당 시나리오를 플레이할 경우 받을 수 있으며 1성당 스피드, 스태미나를 10씩 올려주는 개사기 인자다. 이론적으론 한 번의 계승에서 스피드, 스태미나를 최대 180씩 올릴 수 있다는 뜻인데, 청인자보다 계승확률이 훨씬 낮기 때문에 두 개 이상 터지기를 기대하기는 어렵다.<br>
<span style="color: blue">왜 중요한가요?</span> 깡스탯을 쥰내 많이 올려주니까.<br>
<span style="color: blue">어떻게 얻나요?</span> URA 시나리오 인자의 경우 URA 결승까지 전부 우승하면 확률적으로 붙는다. 부모인자에 같은 시나리오 인자가 붙어있으면 확률이 높아진다고 한다.<br>
<br>
<br>
<img src="./imgs/desc/white2.PNG" style="height:25px;"> <span style="font-size:20px;">스킬, 레이스 백인자</span><br>
스킬 백인자는 해당 스킬의 힌트를 주고, 레이스 백인자는 레이스마다 정해진 능력치나 스킬힌트를 준다.<br>
<span style="color: blue">왜 중요한가요?</span> 여기서부턴 있으면 좋고 없어도 그만이다. 다만 좋은 스킬이 백인자로 떴다면 상당히 가치가 높다.<br>
<span style="color: blue">어떻게 얻나요?</span> 스킬인자는 해당 스킬을 배운 채로 육성을 마무리했을 때, 레이스인자는 해당 레이스를 우승하고 육성을 마무리했을 때 매우매우 낮은 확률로 붙는다. 부모, 조부모가 같은 인자를 가지고 있을 때 확률이 높아지며, 유저들이 조사한 확률은 다음과 같다.<br>
<table class="desc-table"><tr><td class="td-label">가계도상<br>인자보유자 수</td><td class="td-label">0</td><td class="td-label">1</td><td class="td-label">2</td><td class="td-label">3</td><td class="td-label">4</td><td class="td-label">5</td><td class="td-label">6</td></tr>
<tr><td class="td-label">확률</td><td class="td-desc">20%</td><td class="td-desc">22%</td><td class="td-desc">24.2%</td><td class="td-desc">26.6%</td><td class="td-desc">29.3%</td><td class="td-desc">32.2%</td><td class="td-desc">35.4%</td></tr></table>
※ 스킬 백인자의 경우, 선대가 '상위 스킬'을 보유하고 있으면 이 확률에 또 가산이 붙는다. (◎ > ○, 금테두리 > 은테두리)<br>
<br>
모든 백인자들의 n성 확률은 다음과 같다.<br>
<table class="desc-table"><tr><td class="td-label">육성랭크</td><td class="td-label">★</td><td class="td-label">★★</td><td class="td-label">★★★</td></tr><tr><td class="td-label">SS(17500점)<br>미만</td><td class="td-desc">50%</td><td class="td-desc">45%</td><td class="td-desc">5%</td></tr><tr><td class="td-label">SS(17500점)<br>이상</td><td class="td-desc">20%</td><td class="td-desc">70%</td><td class="td-desc">10%</td></tr></table>
<br>
<br>
<br>
<span style="font-size:25px;">[인자의 계승]</span><br>
<br>
인자의 계승은 다음과 같은 성질을 같는다.<br>
- 육성 시작시 부모, 조부모의 청인자, 적인자를 계승받는다.<br>
- 육성 시작시 부모의 녹인자를 계승받는다.<br>
- 클래식급 4월 전반, 시니어급 4월 전반에 부모, 조부모의 인자들을 확률적으로 계승받는다.<br>
- 계승되는 인자의 개수 제한은 없으며, 확률은 모두 개별적으로 계산된다. 따라서 계승받을 수 있는 인자는 많으면 많을 수록 좋다.<br>
- 인자는 부계, 모계 라인과 육성말딸의 '상성'이 높을 수록 계승인자가 발현될 확률이 높아진다. 상성은 육성 시작 전 말딸의 부모를 고를 때 우측 상단에 뜨는 기호(△ < ○ < ◎)로 확인할 수 있다.<br>
- 조부모 중에 육성하려는 캐릭터와 같은 캐릭터가 있다면 상성점수는 반드시 0점이 된다(인자는 제대로 계승받을 수 있다). 만약 테이오를 육성하는데 친조부가 테이오라면, 부계의 상성점수는 부와 친조모의 상성점수만 들어간다. 한 명의 상섬점수가 0점이라도 나머지 두 명의 상성점수만으로 ◎를 띄우는 것도 가능하다.<br>
<br>
말딸의 상성은 다음과 같이 정해진다.<br>
- 원본마의 말관계: 기본적으로 친척이거나, 라이벌이거나, 동세대이거나 등등 원본마의 고증에 따라 기본 상성이 정해져있다.<br>
- 캐릭터의 적성: 각질, 경기장 적성이 같다면 상성 점수 보너스.<br>
- 중상보너스: 부모와 조부모 간에 동일한 중상(G3 이상 경기) 우승 업적이 있으면 상성 보너스가 생긴다. 친조부-부, 친조모-부, 외조부-모, 외조모-모 총 4가지 관계에서 공통된 우승마다 +1점(경기의 격에 따른 차이는 없다).<br>
※ 하나의 관계 안에서 같은 경기를 클래식, 시니어에 두 번 우승했다고 해도 최대 1점이다.<br>
- 제패 칭호: 중상보너스처럼 부모와 조부모 간에 동일한 '제패 칭호'를 가지고 있다면 보너스 +1점. 제패칭호에는 클래식 삼관, 트리플 티아라, 봄 시니어 삼관, 가을 시니어 삼관, 춘추 그랑프리, 춘추 마일, 춘추 스프린트, 춘추 더트 등이 있다('레이스 제패 칭호 목록' 항목 참고). 이것 때문에 이왕이면 중상보너스도 G1 경기로 노리는 게 좋다.<br>
※ 우마무스메의 n관 칭호는 클래식, 시니어에서 모두 딸 수 있고, 섞어서 따도 얻을 수 있다. '시니어 3관'칭호라도 클래식 때도 딸 수 있다. 육성 목표 때문에 1년 안에 칭호 경기를 모두 뛰기 힘들다면 2년동안 쓰까서 따자.<br>
`;

const TIP8_DESC = `
▶ 2관 우마무스메 (클래식 2관)<br>
사츠키상, 일본 더비, 국화상 중에서 2회 우승한다.<br>
▶ 3관 우마무스메 (클래식 3관)<br>
사츠키상, 일본 더비, 국화상에서 우승한다.<br>
▶ 더블 티아라<br>
벚꽃상, 오크스, 추화상 중에서 2회 우승한다.<br>
▶ 트리플 티아라<br>
벚꽃상, 오크스, 추화상에서 우승한다.<br>
▶ 변칙 2관왕 우마무스메<br>
NHK 마일컵, 일본 더비에서 우승한다.<br>
▶ 텐노상 봄 가을 연패<br>
텐노상(봄)과 텐노상(가을)에서 우승한다.<br>
▶ 봄 시니어 3관 우마무스메<br>
오사카배, 텐노상(봄), 타카라즈카 기념에서 우승한다.<br>
▶ 가을 시니어 3관 우마무스메<br>
텐노상(가을), 재팬컵, 아리마 기념에서 우승한다.<br>
▶ 춘추 그랑프리<br>
타카라즈카 기념, 아리마 기념에서 우승한다.<br>
▶ 춘추 스프린트<br>
타카마츠노미야 기념, 스프린터즈에서 우승한다.<br>
▶ 춘추 마일<br>
야스다 기념, 마일 챔피언십에서 우승한다.<br>
▶ 춘추 더트<br>
패브러리 스테이크스, 챔피언즈 컵에서 우승한다.<br>
`;

const TIP9_DESC = `
<table class="desc-table"><tr><td class="td-label">종류</td><td class="td-label">효과</td><td class="td-label">조건</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-bad'>훈련 미숙</span></td><td class="td-desc">${scenarioCondition['훈련 미숙']['effect']}</td><td class="td-desc">${scenarioCondition['훈련 미숙']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-bad'>편두통</span></td><td class="td-desc">${scenarioCondition['편두통']['effect']}</td><td class="td-desc">${scenarioCondition['편두통']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-bad'>피부 트러블</span></td><td class="td-desc">${scenarioCondition['피부 트러블']['effect']}</td><td class="td-desc">${scenarioCondition['피부 트러블']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-bad'>밤샘 습관</span></td><td class="td-desc">${scenarioCondition['밤샘 습관']['effect']}</td><td class="td-desc">${scenarioCondition['밤샘 습관']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-bad'>살찜 주의</span></td><td class="td-desc">${scenarioCondition['살찜 주의']['effect']}</td><td class="td-desc">${scenarioCondition['살찜 주의']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-bad'>땡땡이 기질</span></td><td class="td-desc">${scenarioCondition['땡땡이 기질']['effect']}</td><td class="td-desc">${scenarioCondition['땡땡이 기질']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-bad'>작은 역경</span></td><td class="td-desc">${scenarioCondition['작은 역경']['effect']}</td><td class="td-desc">${scenarioCondition['작은 역경']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-bad'>아직은 준비중</span></td><td class="td-desc">${scenarioCondition['아직은 준비중']['effect']}</td><td class="td-desc">${scenarioCondition['아직은 준비중']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-bad'>유리 다리</span></td><td class="td-desc">${scenarioCondition['유리 다리']['effect']}</td><td class="td-desc">${scenarioCondition['유리 다리']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-good'>훈련 능숙○</span></td><td class="td-desc">${scenarioCondition['훈련 능숙○']['effect']}</td><td class="td-desc">${scenarioCondition['훈련 능숙○']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-good'>애교○</span></td><td class="td-desc">${scenarioCondition['애교○']['effect']}</td><td class="td-desc">${scenarioCondition['애교○']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-good'>수완가</span></td><td class="td-desc">${scenarioCondition['수완가']['effect']}</td><td class="td-desc">${scenarioCondition['수완가']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-good'>주목받는 신예</span></td><td class="td-desc">${scenarioCondition['주목받는 신예']['effect']}</td><td class="td-desc">${scenarioCondition['주목받는 신예']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-good'>커다란 빛</span></td><td class="td-desc">${scenarioCondition['커다란 빛']['effect']}</td><td class="td-desc">${scenarioCondition['커다란 빛']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-good'>훈련 능숙◎</span></td><td class="td-desc">${scenarioCondition['훈련 능숙◎']['effect']}</td><td class="td-desc">${scenarioCondition['훈련 능숙◎']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-good'>팬과의 약속</span></td><td class="td-desc">${scenarioCondition['팬과의 약속']['effect']}</td><td class="td-desc">${scenarioCondition['팬과의 약속']['condition']}</td></tr>
<tr><td class="td-desc"><span class='scenario-condition-good'>정열 존</span></td><td class="td-desc">${scenarioCondition['정열 존']['effect']}</td><td class="td-desc">${scenarioCondition['정열 존']['condition']}</td></tr>
</table>
`;

const TIP10_DESC = `
※ 모든 내용은 풀돌(4레벨) 기준으로 작성되었음.<br>
※ 우마무스메는 기본적으로 좋은 SR 카드가 안 좋은 SSR 카드보다 성능이 좋다. 명함만 있는 SSR 들고 애쓰지 말고 과감하게 SR 카드를 쓰자.<br><br>

[스피드]<br><br>
<table class="desc-table">
<tr>
<td class="td-blank"></td>
<td class="td-label"><img class="card-img" src="./imgs/card/sr_sp_1.png"></td>
<td class="td-label"><img class="card-img" src="./imgs/card/sr_sp_4.png"></td>
<td class="td-label"><img class="card-img" src="./imgs/card/sr_sp_2.png"></td>
</tr>
<tr>
<td nowrap class="td-label">카드명</td>
<td class="td-label">[견습 마녀와 긴 밤] 스윕 토쇼</td>
<td class="td-label">[일류 플래닝] 킹 헤일로</td>
<td class="td-label">[0500 · 정각대로] 에이신 플래시</td>
</tr>
<tr>
<td class="td-label">각질</td>
<td class="td-desc">추입</td>
<td class="td-desc">단거리</td>
<td class="td-desc">선입</td>
</tr>
<tr>
<td class="td-label">강점</td>
<td class="td-desc">- 트레이닝 효과 매우 높음<br>- 특기율 50<br>- 낮은 확률로 <span class="condition-info">애교○</span>를 확정적으로 얻을 수 있는 이벤트<br>- 체인이벤트에서 스킬 <span class="skill-info">[일반] 고독한 늑대</span> 확정 획득</td>
<td class="td-desc">- 특기율 60<br>- 힌트 레벨 상승량 3<br>- 파워 보너스 존재<br>- <span class="skill-info">[일반] 코너 회복○</span> 힌트 획득 가능</td>
<td class="td-desc">- 선입 각질에 도움이 되는 스킬이 매우 많음<br>- 범용 스킬도 좋음<br>- 힌트 레벨 상승량 2<br>- 의욕 상승, 체력 최대치 증가 이벤트</td>
</tr>
<tr>
<td class="td-label">코멘트</td>
<td class="td-desc"> 키타산 블랙 정도를 제외하면 SSR 카드 중에서도 훈련 보너스로 이길 카드가 거의 없다.<br><span class="skill-info">[일반] 고독한 늑대</span>는 육성 중에 사실상 스피드 확정 펑핑.</td>
<td class="td-desc">특기율 미쳤고 <span class="skill-info">[일반] 코너 회복○</span>이나 <span class="skill-info">[일반] 뒷심</span>같은 범용 스킬도 힌트 3레벨씩 준다.</td>
<td class="td-desc">체력 최대치 증가 이벤트는 증가량은 4밖에 안 되지만 육성 안정성을 많이 높여주므로 도움이 됨.</td>
</tr>
</table>

<br><br>
[스태미나]<br><br>
<table class="desc-table">
<tr>
<td class="td-blank"></td>
<td class="td-label"><img class="card-img" src="./imgs/card/sr_st_1.png"></td>
<td class="td-label"><img class="card-img" src="./imgs/card/sr_st_2.png"></td>
</tr>
<tr>
<td nowrap class="td-label">카드명</td>
<td class="td-label">[비의 독주, 나의 독창] 맨하탄 카페</td>
<td class="td-label">[귀여움+귀여움은~?] 마야노 탑건</td>
</tr>
<tr>
<td class="td-label">각질</td>
<td class="td-desc">장거리 선입</td>
<td class="td-desc">딱히 없음</td>
</tr>
<tr>
<td class="td-label">강점</td>
<td class="td-desc">- 스탯 상승량 매우 높음<br>- 장거리 선입마에게 국밥같은 스킬들<br>- 특기율 70<br>- 레이스 보너스 10%</td>
<td class="td-desc">- 특기율 55<br>- 좋은 범용 스킬을 다수 보유</td>
</tr>
<tr>
<td class="td-label">코멘트</td>
<td class="td-desc"></td>
<td class="td-desc">힌트를 주는 스킬만 <span class="skill-info">[일반] 집중력</span>, <span class="skill-info">[일반] 직선 달인</span>, <span class="skill-info">[일반] 코너 달인○</span>, <span class="skill-info">[일반] 뒤처지기 방지</span>, <span class="skill-info">[일반] 임기응변</span> 등등...</td>
</tr>
</table>

<br><br>
[파워]<br><br>
<table class="desc-table">
<tr>
<td class="td-blank"></td>
<td class="td-label"><img class="card-img" src="./imgs/card/sr_pw_3.png"></td>
<td class="td-label"><img class="card-img" src="./imgs/card/sr_pw_4.png"></td>
</tr>
<tr>
<td nowrap class="td-label">카드명</td>
<td class="td-label">[검증, 개시] 비와 하야히데</td>
<td class="td-label">[친구를 철저히 단련] 미호노 부르봉</td>
</tr>
<tr>
<td class="td-label">각질</td>
<td class="td-desc">장거리</td>
<td class="td-desc">도주</td>
</tr>
<tr>
<td class="td-label">강점</td>
<td class="td-desc">- 트레이닝 효과 증가 +15%<br>- 특기율 60<br>- 스태미나 보너스</td>
<td class="td-desc">- 도주마에게 국밥같은 스킬<br>- 특기율 50</td>
</tr>
<tr>
<td class="td-label">코멘트</td>
<td class="td-desc">스탯 상승량이 1티어 SSR 카드 급으로 높다. 밸런스 맞춘다고 그랬는지 스킬들은 쓰레기를 넣어놨다.</td>
<td class="td-desc"><span class="skill-info">[일반] 집중력</span>, <span class="skill-info">[일반] 코너 회복○</span>처럼 비싼 스킬 주는 서포트카드 드물다.</td>
</tr>
</table>

<br><br>
[지능]<br><br>
<table class="desc-table">
<tr>
<td class="td-blank"></td>
<td class="td-label"><img class="card-img" src="./imgs/card/sr_in_5.png"></td>
<td class="td-label"><img class="card-img" src="./imgs/card/sr_in_7.png"></td>
<td class="td-label"><img class="card-img" src="./imgs/card/sr_in_8.png"></td>
</tr>
<tr>
<td nowrap class="td-label">카드명</td>
<td class="td-label">[노력은 배신하지 않아!] 다이와 스칼렛</td>
<td class="td-label">[마블러스☆대작전] 마블러스 선데이</td>
<td class="td-label">[운의 행방] 마치카네 후쿠키타루</td>
</tr>
<tr>
<td class="td-label">각질</td>
<td class="td-desc">마일, 중거리, 선행</td>
<td class="td-desc">딱히 없음</td>
<td class="td-desc">선입</td>
</tr>
<tr>
<td class="td-label">강점</td>
<td class="td-desc">- 초기 우정도가 높음<br>- 특기율 50<br>- 풀돌 아니어도 고성능</td>
<td class="td-desc">- 뛰어난 범용성<br>- 디버프 스킬 보유<br>- 특기율 50<br>- 컨디션 상승 이벤트</td>
<td class="td-desc">- 트레이닝 효과 좋음<br>- <span class="skill-info">[일반] 시계 방향○</span><br>- 이벤트로 스킬Pt를 많이 얻을 수 있음</td>
</tr>
<tr>
<td class="td-label">코멘트</td>
<td class="td-desc"></td>
<td class="td-desc">인성 새하얘 네이처한테 이쁜 말 하는 거 짱조음 ^u^ 기분이 좋아지는 이벤트</td>
<td class="td-desc"></td>
</tr>
</table>

<br><br>
- 근성은 '[부회장의 일침] 에어 그루브'가 좋은데 솔직히 근성카드 쓸 사람이 누가 있나<br>
- 친구카드 키류인 아오이는 쓸모가 없진 않은데 추입 디버프가 필요한 게 아니면 굳이. SSR 타즈나가 역할상 상위호환이고 타즈나가 없어도 차라리 지능카드로 대체하는 게 낫다.
`;

const TIP11_DESC = `
<table class="desc-table"><tr><td class="td-label" colspan="2">고유기 레벨 업 조건</td></tr><tr>
<td class="td-label">1</td><td class="td-desc">
시니어급(3년차) 1월 후반까지 팬 수 6만명 이상 쌓기 → 시니어급 2월 전반 들어가면서 레벨업 이벤트 발동</td></tr>
<tr><td class="td-label">2</td><td class="td-desc">
시니어급(3년차) 3월 후반까지 팬 수 7만명 이상, NPC 이사장과의 우정도 60%(초록색) 이상 쌓기 → 시니어급 4월 전반 들어가면서 레벨업 이벤트 발동</td></tr>
<tr><td class="td-label">3</td><td class="td-desc">
시니어급(3년차) 12월 전반까지 팬 수 12만명 이상 쌓기 → 시니어급 12월 후반 들어가면서 레벨업 이벤트 발동</td></tr>
<tr><td class="td-desc" colspan="2">※ 고유기 1레벨로 시작시 시나리오 이벤트로 4레벨까지 올릴 수 있음. 그 이상은 캐릭터별로 각성Lv을 높여 시작시 레벨을 높여야 함.</td></tr>
<tr><td class="td-desc" colspan="2">※ 단거리 더트 캐릭터인 하루 우라라의 경우 팬 수 올리기가 매우 힘들기 때문에 1번 조건 팬 수 4만, 2번 조건 팬 수 6만에 이사장 우정도 초록칸, 3번 조건 팬 수 9만으로 다소 완화되어 적용된다. 하루 우라라를 제외한 다른 더트 캐릭터의 경우에도 완화된 조건이 적용되는 지는 확인이 필요함.</td></tr></table>
<br><br>
<table class="desc-table"><tr><td class="td-label" colspan="2">URA 시나리오 히든 보상 조건</td></tr><tr>
<td class="td-label">1</td><td class="td-desc">
'2인3각' 이벤트: 클래식급(2년차) 11월 전반 팬 수 5만 이상일 경우 지능 +20, 스킬Pt +20, <span class="skill-info">[레어] 강철 같은 의지</span> 힌트+1 (11월 전반 행동 후 이벤트 발생)</td></tr>
<tr><td class="td-label">2</td><td class="td-desc">
'당근 대농원에서' 이벤트: 클래식급(2년차) 12월 후반 팬 수 10만 이상일 경우 스킬Pt +30 (12월 후반 행동 후 이벤트 발생)</td></tr>
<tr><td class="td-label">3</td><td class="td-desc">
'URA파이널스 출장 결정' 이벤트: 시니어급(3년차) 12월 후반 팬 수 24만 이상일 경우 스킬Pt +30</td></tr></table>
`;

const TIP12_DESC = `
<img src="./imgs/tip/tazuna.png">
<br><br>
※ 이 글은 타즈나 찬양론자의 입장대로 작성되었습니다.<br>
<br>
<br>
1. 체력 회복<br>
타즈나와 외출을 나가면 확정적으로 5번 나쁜 컨디션에 걸릴 걱정 없이 체력을 회복할 수 있다. 풀돌 타즈나 기준으로 1~3회는 40, 4~5회는 56을 회복시켜주는데, 회복양도 양이지만 배드 컨디션 한 번 뜨면 잘 나가다가 그대로 말아먹을 수도 있는 개씹억까운빨좆망겜 우마무스메에서 걱정없이 체력회복을 할 수 있다는 건 운영에 상당한 안정감을 부여한다.<br>
<br>
2. 스킬<br>
5번째 외출에서 확률적으로 주는 <span class='skill-info'>[레어] 컨센트레이션</span>은 도주마라면 필수 취급이니 말할 것도 없고, 주니어급(1년차) 기간 중 우정도를 초록칸 이상으로 올리고 열정적인 두 사람 이벤트를 띄우면 클래식급 1월 전반에 <span class='skill-info'>[일반] 꼬리 올리기</span>의 힌트와 소량의 체력, 스피드를 올려주는데, 여기서 <span class='skill-info'>[일반] 꼬리 올리기</span>도 상당히 좋은 스킬이다.<br>
<br>
3. 사실상 컨디션 최상으로 고정<br>
타즈나와 외출을 나가면 두 번째 외출을 제외하고 무조건 컨디션을 올려주며, 타즈나와 같이 트레이닝을 하면 확률적으로 컨디션을 높혀주는데, 그 횟수가 어마어마해서 스페셜 위크나 마야노 탑건처럼 육성 중 컨디션 하락이 10번씩 뜨기도 하는 지랄마들조차 멱살을 잡고 끌어올려 컨디션 최상을 유지할 수 있게 해준다. 컨디션은 최상인 경우 훈련 보정에 +20%가 들어가는 만큼 매우 중요하기 때문에 컨디션 관리를 위해서라도 컨디션 기복이 심한 말딸 육성에서 타즈나는 필수로 꼽힌다.<br>
<br>
4. 트레이닝 보정 +10%와 체력소모 감소<br>
이것 역시 핵심 중 하나라고 생각하는데, 타즈나는 2돌부터 트레이닝 훈련 보정 +10%가 붙는다. 타즈나 비판론자들의 주요 논거 중 하나가 서포트카드 한 칸을 타즈나가 차지하며 그만큼 우정트레이닝의 기회가 날아가 성장 한계가 낮아진다는 것인데, 특기율 50이 넘는 서폿들이 툭하면 실종되고 트레이닝 보정 10% 이상이 붙은 쓸만한 서포트카드가 몇 장 없다는 걸 생각하면 타즈나를 기용하는 것을 결코 '한계돌파보다 안정성 추구'라고만 볼 수가 없다.<br>
또한, 풀돌 기준으로 체력 소모량을 25% 감소시켜주는데, 이는 어마어마한 수치로 타즈나가 훈련에 잘 떠줬다는 가정 하에 장기적으로 지능 우정트레이닝 수 회, 휴식 수 회를 한 것과 동일한 효과를 가져온다. 따라서 '잘만 뜬다면' 타즈나 역시도 한계돌파의 주축으로 쓰일 수 있다는 것이다.<br>
<br>
결론: 최소한 URA시나리오에서 만큼은 타즈나는 0티어 서폿이 맞다. 컨디션 기복이 심한 말딸한테는 -1티어 서폿이다.
`;

const TIP14_DESC = `
[기본 정보]<br>
- 2023년 1월 10일 ~ 1월 16일<br>
- 한신 / 잔디 / 1600m(마일) / 우, 외측 / 가을 / 맑음 / 양호<br>
- 최종 코너 후 가속스킬 매우 효과적: <span class="skill-info">[레어] 강인한 다리</span>, <span class="skill-info">[레어] 능숙한 환승</span>, <span class="skill-info">[일반] 레츠 아나볼릭!</span> 등 채용.<br>
- 일섭 유저들은 '2도주, 1선입' 선호.<br>
- 내리막길 없음.<br>
- 오르막과 급경사 구간이 있어 파워 소모가 심함 → 높은 파워와 가속스킬 유리.<br>
- 선행마의 경우 좋은 고유가속기가 부족하고, 도주마가 많을 것으로 예상되는 반면 도주마가 많을 수록 힘을 쓰기 어렵기 때문에 추천되지 않음.<br>
- 파워 301, 601, 901 이상부터 스피드 보너스가 달림.<br>
<br>
[필요 스태미너]
<table class="desc-table"><tr>
<td class="td-label">도주</td><td class="td-label">선행</td><td class="td-label">선입</td><td class="td-label">추입</td></tr><tr>
<td class="td-desc">592</td><td class="td-desc">683</td><td class="td-desc">636</td><td class="td-desc">649</td></tr></table>
※ 근성301, 디버프 없음으로 가정(일반 디버프 -38, 레어 디버프 -113)한 최소치. 여유있게 더 챙기는 걸 추천함.<br>
<br>
[추천 육성마]
<table class="desc-table">
<tr><td class="td-label">도주</td><td class="td-desc"><b>마루젠스키(수영복)</b><br><b>스마트 팔콘</b><br>세이운 스카이<br>마루젠스키</td></tr>
<tr><td class="td-label">선행</td><td class="td-desc">마루젠스키<br>오구리 캡</td></tr>
<tr><td class="td-label">선입</td><td class="td-desc"><b>보드카</b><br>오구리 캡<br>그래스 원더</td></tr>
<tr><td class="td-label">추입</td><td class="td-desc">나리타 타이신<br></td></tr>
</table>
`;

const TIP15_DESC = `
1. 핵심은 아오하루 특훈 -> 팀원 스탯 높이기 -> 훈련 레벨 높이기 -> 스탯작.<br>
2. 클래식까지 팀 랭크 높여서 훈련 레벨작 해놓고, 시니어부터 본격적으로 무지개 위주로 챙기면서 스탯작.<br>
3. 클래식 합숙 시점에서 C~B랭크, 시니어 초반에 A랭크, 시니어 합숙에서 S랭크면 순조로운 육성이라고 할 수 있음.<br>
<br><br>
[팀명별 획득 스킬]<br>
<table class="desc-table">
<tr><td class="td-label">제안자</td><td class="td-label">팀명</td><td class="td-label">획득 스킬</td></tr>
<tr><td class="td-desc">타이키 셔틀</td><td class="td-desc">HOP CHEERS</td><td class="td-desc"><span class="skill-info">[레어] 마일의 지배자</span></td></tr>
<tr><td class="td-desc">라이스 샤워</td><td class="td-desc">블룸스</td><td class="td-desc"><span class="skill-info">[레어] 쿨다운</span></td></tr>
<tr><td class="td-desc">하루 우라라</td><td class="td-desc">당근 푸딩</td><td class="td-desc"><span class="skill-info">[레어] 꺾이지 않는 마음</span></td></tr>
<tr><td class="td-desc">마치카네 후쿠키타루</td><td class="td-desc">경삿날 러너스</td><td class="td-desc"><span class="skill-info">[레어] 천리안</span></td></tr>
<tr><td class="td-desc">(기본)</td><td class="td-desc">팀 캐럿츠</td><td class="td-desc"><span class="skill-info">[레어] 논스톱 걸</span></td></tr>
</tr></table>
<br><br>
[팀레이스 랭킹별 기초 능력치 보너스]<br>
<table class="desc-table"><tr>
<td class="td-label">랭킹</td><td class="td-desc">1~5위</td>
<td class="td-desc">6~10위</td><td class="td-desc">11~15위</td>
<td class="td-desc">16~20위</td><td class="td-desc">21~30위</td></tr>
<tr><td class="td-label">보너스</td><td class="td-desc">+50</td>
<td class="td-desc">+30</td><td class="td-desc">+20</td>
<td class="td-desc">+10</td><td class="td-desc">없음</td></tr></table>
<br><br>
[팀 랭크별 트레이닝 레벨]<br>
<table class="desc-table">
<tr><td class="td-label">스탯 랭크</td><td class="td-label">트레이닝Lv</td></tr>
<tr><td class="td-desc">G ~ F</td><td class="td-desc">Lv.1</td></tr>
<tr><td class="td-desc">E ~ D</td><td class="td-desc">Lv.2</td></tr>
<tr><td class="td-desc">C ~ B</td><td class="td-desc">Lv.3</td></tr>
<tr><td class="td-desc">A</td><td class="td-desc">Lv.4</td></tr>
<tr><td class="td-desc">S</td><td class="td-desc">Lv.5</td></tr>
</tr></table>
<br><br>
[기타]<br>
1. 팀 랭크에는 제한이 걸려있으며, 아오하루배 레이스를 진행할 때마다 상한이 높아진다.<br>
2. URA시나리오보다 훈련비중이 훨씬 커지는 반면 따로 스킬Pt를 챙겨주는 이벤트가 없다. 결론만 말해서 URA시나리오보다 스탯 고점은 확실히 높지만, 스킬Pt는 적게 얻을 수밖에 없다.<br>
3. 어떤 트레이닝에서 아오하루 특훈을 진행했느냐에 따라 팀원들의 스탯 상승량에 차이가 있다(예컨대 스태미너 훈련에서 특훈시 스태미너, 근성이 가장 많이 오르고 나머지 스탯은 상대적으로 소폭 상승). 물론 특훈이 뜨는 것도 완전히 랜덤이기 때문에 제어는 사실상 불가능하다.<br>
4. 아오하루 시나리오에만 있는 능력치 상승(아오하루 특훈, 팀원 보너스, 혼 폭발 보너스)은 컨디션이나 서포트 카드의 푼련 효과 증가 등의 영향을 받지 않는 상수이며, 중첩시에도 합연산으로 올라간다. 따라서 중첩 보너스에 너무 신경쓸 필요는 없다.<br>
5. 혼 폭발은 능력치 상승분이 가장 크기 때문에 육성 우마무스메에게 유리한 훈련에서 터트리는 것이 제일 좋지만, 일단 혼 폭발을 하게 되면 팀 스탯은 물론 아오하루 특훈으로 얻을 수 있는 능력치 상승분도 높아지기 때문에 원하는 훈련에 뜰 때까지 존버하는 건 오히려 손해일 수도 있다.
6. 시나리오 마지막에 주는 '아오하루'류  스킬 힌트는 혼폭발 누적횟수에 따라 다르게 준다: 13회 이상 레어(힌트Lv3), 10회 이상 레어(힌트Lv1), 4회 이상 노말(힌트Lv3)
`;