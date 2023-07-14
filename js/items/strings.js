const TIP0_DESC = `
[상단]<br>
<img src="./imgs/desc/tuto-1.PNG" class="desc-img" style="margin-top:10px; margin-bottom: 10px;">
(1) 설정창 열기.<br>
(2) UI 크기 설정. 설정값은 인터넷 브라우저에 저장됨.<br>
(3) 검색어 입력창.<br>
<ul style="margin-top:2px; margin-bottom:-5px;"><li>[1] 항목 태그 설정. 설정한 경우 해당 태그에 해당하는 항목만 검색됨. 태그 목록은 다음과 같음: 말딸(육성 정보) / 스킬(스킬 정보) / 커뮤(선택지 정보) / TIP(팁) / 경주(레이스 정보).</li>
<li>[2] 검색어 입력칸. 공백(스페이스바)로 검색어를 구분하고, ""로 검색어를 묶어 해당 검색어를 반드시 포함하는 항목만 검색할 수 있음.</li>
<li>[3] 검색어 지우기 버튼.</li></ul>
<br><br>
[설정창]<br>
<img src="./imgs/desc/tuto-2.PNG" class="desc-img" style="margin-top:10px; margin-bottom: 10px;">
모든 설정은 인터넷 브라우저에 저장됨.<br>
<ul style="margin-top:2px; margin-bottom:-5px;">
<li>아이템 표시 개수: 표시될 수 있는 최대 항목 수 설정. 표시되는 항목의 개수가 너무 많으면 렉걸림.</li>
<li>검색량 누적: 체크할 경우 각각의 검색어가 각 항목마다 몇 번이나 반복되는 지, 그 수에 따라 항목이 정렬됨. 체크하지 않았을 경우 공백(스페이스바)로 구분된 검색어를 몇 개나 포함하고 있는 지에 따라서만 정렬됨. 끄는 것을 추천.</li>
<li>내용도 검색: 체크할 경우 각 항목의 내용을 검색 대상에 포함함. 체크하지 않을 경우 항목의 내용을 제외한 제목, 히든태그 등으로만 검색됨.</li>
<li>하이라이트: 체크할 경우 각 항목에서 검색된 검색어를 하이라이트함.</li>
<li>모두 필수검색어: 체크할 경우 모든 검색어를 ""로 묶은 효과, 즉 반드시 모든 검색어를 포함하는 항목만 검색되도록 함.</li>
<li>검색어 자동 지우기: 체크할 경우 우마무스메HELPER에서 벗어났다가 돌아올 경우 자동으로 검색창을 지우고 바로 검색어를 입력할 수 있도록 자판을 엶. 기종에 따라 잘 작동하지 않을 수 있음.</li>
<li>하단 컨트롤 활성화: 체크할 경우 우측 하단에 항목 컨트롤 패널을 생성함.</li>
<li>아이템 고정기능: 체크할 경우 아이템마다 핀셋 아이콘이 활성화됨. 눌러서 색이 들어올 경우 '전체' 태그인 상태에서 검색화면이 비어있을 때 표시됨.</li>
<li>핵심 텍스트만 검색: 체크할 경우 검색시 우마무스메의 이름, 카드 또는 육성 우마무스메 타이틀, 스킬 등급, 경주 등급, 경주 날짜가 검색 대상에서 제외됨.</li>
<li>전체 검색시 제외 항목: 체크할 경우 '전체' 태그로 검색했을 때 여기서 체크한 항목은 검색되지 않음. '체크한 것만 검색'이 아니라 '체크한 것은 제외'임.</li>
</ul>
<br><br>
[하단 컨트롤 패널]<br>
<img src="./imgs/desc/tuto-3.PNG" class="desc-img" style="margin-top:10px; margin-bottom: 10px;">
▲, ▼ 버튼을 눌러 현재 열려있는 항목 중 최상단 항목의 위, 아래 항목을 열고<br>
SEARCH 버튼을 눌러 검색창으로 이동 후 자판을 엶. 설정창에서 '검색어 자동 지우기'가 체크된 경우 검색창을 지움.<br>
검색창이 상단에 있어서 손꾸락 움직이기 귀찮아서 만듦.<br>
<br><br>
[항목 보기 예시]
<img src="./imgs/desc/tuto-4.PNG" class="desc-img" style="margin-top:10px; margin-bottom: 10px;">
(1) 박스쳐진 것처럼 스킬, 시나리오 컨디션 항목은 각각 빨갛게, 파랗게 칠해지며 누를 경우 해당 스킬[컨디션]에 대한 정보창이 뜸.<br>
(2) 정보창은 다른 항목을 열거나, 정보창을 클릭해 지울 수 있음.
`;

const TIP1_DESC = `
<ul>
<li>스피드: 레이스 종반 최고 속도 상한 증가. 단순하지만 레이스는 결국 종반 최고 속도가 누가 더 높냐의 싸움이므로, 매우 중요하다.</li>
<li>스태미나: 충분해야 최고 속도까지 가속 + 높을 수록 페이스 조절 능력 향상, 몸싸움, 추월 등 상황변수 계산에 영향. 종반 시점에서 스태미나가 부족할 경우 최고 속도까지 가속하지 않기 때문에, 스피드와 더불어 매우 중요하다.</li>
<li>파워: 가속력 향상 + 코너링 향상 + 몸싸움 등 상황변수 계산에 영향.</li>
<li>근성: 스태미나 보조 + 라스트 스퍼트에서 최고속도 유지 등.</li>
<li>지능: 스태미나 소비를 줄이는 위치선정 + 스킬 발동률 증가 + 늦은 출발, 흥분 등의 이상상태 발생 확률 감소 + 오르막, 내리막에서 스태미나 소비량 감소 등.</li>
</ul>
※ 레이스마다 특정 능력치가 301, 601, 901을 넘길 때마다 속도 보정이 붙는 특성이 있다.<br>
※ 마군에 갇히거나 자리다툼을 하거나 오버페이스로 달리게 되면 그만큼 스태미나를 추가로 소모한다.<br>
※ 앞각질일 수록 선두권을 유지하면서 종반까지 달릴 수 있는 페이스 조절 능력이 중요하고, 따라서 지능이 더 요구된다.<br>
※ 뒷각질일 수록 몸싸움이 치열하고 종반에 접어들어 후위에서 선두까지 단숨에 달려나가야 하기 때문에, 파워와 스태미나가 더 요구된다.<br>
`;



const TIP2_DESC = `
<ul>
<li>레이스 구간은 다음과 같다: <초반(0%~17%): 스타트-가속구간-경합구간>, 중반(17%~67%), <종반(67%~100%): 가속구간-가속이후-라스트스퍼트></li>
<li>각 구간별로 최고속도에 제한이 있으며, 이 최고속도는 경기장의 거리 및 특성(초반~중반), 스탯(주로 스피드와 지능, 종반) 등에 따라 변동한다. '가속 상승' 스킬은 가속하고 있는 말딸의 가속도에 보정을, '속도 상승' 스킬은 여기서 말한 최고속도 상한을 상승시킨다.</li>
<li>밸런스 패치 이전까지는 '포지션 킵' 시스템이라고 하여 약 4% ~ 42% 구간에서 도주 - 선행 - 선입 - 추입 순이 되도록 보정을 건다.</li>
<li>포지션 킵 시스템에 의해, 도주마나 도주마가 없을 경우 그 역할을 대신 하는 각질이 선두가 아닐 때, 도주 이외의 모든 말딸들의 속도가 떨어지는 보정이 걸리며, 어떤 말딸이 자기 각질에 알맞는 자리에서 벗어나 '최선두에 가까워졌을 때' 강제로 강력한 속도 저하 보정이 걸려 갑작스럽게 뒤로 밀려나는 것을 역분사라고 부른다.</li>
<li>도주마는 선두를 차지하는 것이 목표기 때문에 포지션 킵의 영향을 받지 않으며, 만약 도주마가 없다면 선행마가 최선두에 서서 도주마의 역할을 대신하는데, 이를 플레이메이커 역할이라고 부른다.</li>
<li>경기 초반의 최고속도는 보통 거리에 의해 고정되어 있다고 알려져 있으며, 포지션 킵 시스템도 있기 때문에 초반 가속기는 크게 효과적이지 않다. 만약 초반 최고속도에 이미 도달했다면 이후 발동한 가속 스킬은 아무 의미가 없다.</li>
<li>경기 중반의 최고속도 역시 경기장의 특성에 의해 고정되어 있다고 알려져 있으며, 일반적으로 감속원이 없는 이상 초반 구간에서 최고속도에 도달한 상태로 진입하기 때문에, 이 때 발동한 가속 스킬이 무효가 될 가능성이 높다.</li>
<li>경기 종반에 접어들면 각 말딸의 스탯(주로 스피드, 높은 지능도 여기에 보정을 더한다)에 따라 최고속도가 변하고, 그 속도까지 빠르게 가속하게 된다. <b>빠르게 가속해 최고속도에 도달할 수록 다른 말딸보다 이득을 얻게 되는 셈이니, 종반 가속기는 매우 중요하다.</b> 반면, 종반 속도 상승 스킬은 '아직 최고속도에 도달하지도 않은' 가속 구간에서 멋대로 터져 최고속도에 다다르기 전에 효과가 끝나버려 의미가 없어질 수도 있기 때문에 가속 상승 스킬보다는 중요도가 떨어진다.</li>
<li>스태미나가 부족할 경우 '지금 체력으로 완주가 가능한 수준'까지만 가속한다. 즉, 최고속도에 도달하지 않는다.</li>
</ul>
핵심만 요약하자면 다음과 같다:<br>
1. 포지션 킵 구간에서는 최대한 몸을 사리자. <b>높은 지능 스탯은 좋은 위치를 선점하도록 도와준다.</b><br>
2. 중반의 최고속도는 스탯과 상관이 없다. <b>중반에는 속도 상승기를 많이 발동시켜 '최고속도'를 높여 각질 내 순위를 높여야 한다.</b><br>
3. <b>종반에 접어들면 최대한 빠르게 가속 상승기를 발동시켜 남들보다 빨리 '최고속도'에 도달</b>, 이득을 봐야 한다.<br>
4. 이미 <b>최고속도에 도달했다면, 속도 상승기를 발동시켜 속도 제한을 뚫고</b> 다른 말을 따돌려야 한다.<br>
5. 스태미나가 부족하다면 다 헛짓거리가 되니, 스태미나는 반드시 충분히 높아야 한다.<br>
<br>
Q. ${skill(200361)}같은 스킬은 왜 좋은 스킬이 아닐까?<br>
위에서 설명했지만 어느 구간에서든 발동할 수 있는 스킬은 우마무스메 시스템 상 제 효과를 발휘하지 못 하는 타이밍에 터질 가능성이 상당히 높다. 우마무스메는 근본적으로 운빨 좆망겜이지만, 그래도 조금이라도 더 안정적으로 의도된 레이스를 할 수 있도록 육성하는 것이 장기적으로 승률을 높힌다. 따라서 내재적으로 위험성을 가진 스킬보다는 효과는 다소 떨어질 지라도 안정적으로 제 효과를 발휘할 수 있는 스킬이 추천되는 것이다.<br>
<br>
Q. 도주 우라라 전략이란?<br>
도주마가 존재하는 한 포지션 킵 시스템은 도주마를 기준으로 다른 각질이 도주마를 추월하지 못 하도록 보정을 건다. 이 때 열등인자 우라라가 도주마로 뛰고 있으면 당연히 모든 말딸이 우라라를 추월하게 될 테고, 역분사가 일어날 위험도 없이 공평하게 모든 말딸에게 속도저하 보정이 걸린다. 이후 포지션 킵 구간을 벗어나는 시점에선 보정으로 천천히 달린 탓에 스태미나 소모도 적은 상태에서 초반에 강력한 각질들이 우라라 보정으로 힘을 쓰지 못 한 탓에 중, 후반에 강력한 뒷각질에게 매우 유리해진다. 물론 도주 우라라가 아닌 다른 '정상적인' 도주마가 있다면 그 도주마가 기준이 되어버려 효과가 없다.<br>
장거리 추입 우라라 전략도 있다. 열등인자 우라라를 꼴찌로 확정시켜 나리타 타이신의 ${skill(200621)} 발동을 막는 것.<br>
<br>
Q. 늦은 출발의 조건은?<br>
레이스 스타트시 0~1 사이의 난수값이 배정되며, 0에 가까울 수록 늦은 출발, 1에 가까울 수록 좋은 출발이 된다. 작성 시점을 기준으로 0.2 미만일 경우 '늦은 출발' 알림이 뜨고, 0.8 초과일 경우 팀레이스에서 '좋은 출발' 보너스 점수를 얻는다. ${skill(200432)}, ${skill(200431)} 스킬은 이 난수 값에 일정 수준의 보정치를 더해준다.<br>
<br>
Q. 좋은 회복기는 무엇?<br>
현재까지 나온 모든 회복스킬의 스태미나 회복량은 일반 0.015, 레어 0.055로 같다. 레어 회복기가 일반 회복기의 약 3.7배나 높은 효과인 반면 소모되는 스킬Pt는 2배 정도밖에 되지 않기 때문에, 무조건 레어 회복기를 배우는 게 효율적이다. 또한 앞서 말했듯이 어디서든 발동할 수 있는 스킬보다는 스킬의 효과를 온전히 누릴 수 있는 타이밍, 즉 스태미나가 그만큼 소모된 타이밍에 발동하면서 동시에 라스트 스퍼트 단계처럼 그 때부터 가속한다고 경기에 영향을 줄 리가 없는 타이밍에 발동되는 것을 방지할 수 있는 스킬이 좋다.<br>
예컨대, ${skill(200351)}는 힌트를 얻기 쉽다는 점도 있지만, 반드시 코너에서 발동하기 때문에 레이스 스타트 후 첫 코너까지 가는 동안 스태미나를 충분히 소모한다는 점, 그리고 최종 직선 이전에 발동하기 때문에 무효가 되지 않는다는 점 때문에 1티어 회복기로 취급된다.<br>
반대로 ${skill(200381)}은 스태미나가 충분히 소모되지 않았음에도 발동하거나, 최종 직선에서 발동할 수 있어 쓰레기 스킬 취급이다.<br>
`;


const TIP4_DESC = `
※ 기본적으로 스킬 가성비는 레어스킬 > 고유스킬 >= 일반스킬이다. 어쩔 땐 계승고유기보다 비슷한 일반스킬을 찍는 게 더 좋다.<br>
※ 그럼에도 계승고유기가 중요하게 여겨지는 이유는 타이밍을 특정하는 것이 쉬워 보다 안정적으로 의도된 레이스를 할 수 있기 때문이다.<br>
※ 아래 목록은 1주년 패치 이전을 기준으로 이견의 여지가 없이 좋은 계승고유기에 대해 다룬다. 목록에 기재된 고유기 말고 다른 고유기들도 조건만 조금 더 까다로울 뿐 효과는 거의 동일하므로, 계승 상성 등을 고려했을 때 더 유리하다고 판단되는 걸 고르는 것이 좋다. '스킬' 태그를 설정하고 '계승' 키워드로 검색하면 모든 계승고유기를 볼 수 있으니 이를 참고할 것.<br>
<br>
<table class="desc-table">
<tr><td class="td-label">스킬명</td><td class="td-label">각질</td><td class="td-label">설명</td></tr>
<tr><td class="td-desc">${skill(900201)}</td><td class="td-desc" nowrap>도주</td><td class="td-desc">종반 가속기. 빠르게 종반 최고속도에 도달, 그대로 상대를 따돌리는 도주마 핵심 스킬. 거의 대부분의 경기장이 종반구간의 초입에 코너가 있기 때문에 조건이 사기적이다.</td></tr>
<tr><td class="td-desc">${skill(900041)}</td><td class="td-desc" nowrap>도주<br>선행</td><td class="td-desc">종반 가속기. 단, 조건이 '최종 코너'라 최종 코너가 중반~종반에 걸쳐있는 경기장에선 중반에 터져 무효가 될 가능성이 있다.</td></tr>
<tr><td class="td-desc">${skill(900101)}</td><td class="td-desc" nowrap>단거리<br>마일<br>선행</td><td class="td-desc">선행용 종반 가속기.</td></tr>
<tr><td class="td-desc">${skill(900061)}</td><td class="td-desc" nowrap>선행<br>선입<br>추입<br></td><td class="td-desc">종반 속도기. 골까지 200m 남은 시점으로 확정되기 때문에 매우 안정적이다. 단, 장거리 경기장에선 200m 시점에서 발동하면 다소 늦은 감이 있다.</td></tr>
<tr><td class="td-desc">${skill(900271)}</td><td class="td-desc" nowrap>선입<br>추입</td><td class="td-desc">종반 가속기. 순위에 따라 발동하지 않거나 늦게 발동할 수 있다는 위험성은 있으나, 여전히 좋은 스킬이다.</td></tr>
<tr><td class="td-desc">${skill(900591)}</td><td class="td-desc" nowrap>선입<br>추입</td><td class="td-desc">종반 가속기2. 선, 추입마를 육성할 때 ${skill(900271)}과 함께 찍는 '카나볼릭' 메타가 매우 강하다고 알려져있다.</td></tr>
<tr><td class="td-desc">${skill(900171)}</td><td class="td-desc" nowrap>선입<br>추입</td><td class="td-desc">종반 속도기. 선입, 추입마일 경우 조건이 매우 쉽다.</td></tr>
</table>
`;

const TIP6_DESC = `
서포트 카드에서 중요한 스탯들은 다음과 같다.<br>
<ul>
<li>특기율: 담당 훈련에 배치될 확률이 보정되는 스탯. 육성은 우정 트레이닝을 얼마나 띄우느냐가 핵심이므로 매우 중요하다. 참고로 담당 훈련에 배치될 확률은 '0.18 × (1 + (특기율 / 100))' 정도로 추정되고 있다. 특기율이 100인 SSR 키타산 블랙 풀돌의 경우 대략 3번 중 1번은 출석한다는 뜻.</li>
<li>우정 보너스: 우정 트레이닝으로 상승하는 스탯량을 높인다. 곱연산이기 때문에 우정 트레이닝이 중첩되는 것이 매우 중요하다. 예컨대 30% 카드와 20% 카드가 동시에 우정트레이닝이 떴다면 상승량은 1.3*1.2 = 1.56. 156%.</li>
<li>트레이닝 보너스: 특정 스탯에만 보너스를 주는 효과(XXX 보너스)와 모든 스탯에 보너스가 붙는 효과(트레이닝 효과 증가)로 나뉜다. 전자의 경우 해당 스탯의 기초 상승량에 가산되고, 후자의 경우 곱연산(20%일 경우 *1.2) 보정이 들어간다. 참고로, 모든 서포트 카드는 기본적으로 트레이닝 효과 증가 5% 스탯이 달려있다. 따로 서포트 카드가 트레이닝 효과 증가 스탯을 가지고 있지 않더라도 일단 배치된 훈련에 *1.05 보정을 건다는 것.</li>
<li>좋은 스킬을 가지고 있는 지의 여부: 좋은 스킬은 레이스의 승패를 결정짓기 때문에 매우 중요하다.</li>
<li>훈련 기초 능력치: 훈련을 통한 스탯 상승량은 '기초 상승량 * 각종 보정'으로 정해진다. 때문에 기초 상승량이 1~2 차이만 나더라도 곱연산을 통해 큰 차이를 만들 수 있다.</li>
</ul>
<br>
애매한 스탯들은 다음과 같다.<br>
<ul>
<li>컨디션 효과 증가: 컨디션에 따라 스탯의 상승량은 -20% ~ 20%만큼 보정이 가해지는데, 만약 컨디션이 최상(20% 보정)일 때 컨디션 효과 증가 스탯이 50%라면, 20% * 1.5 = 30%로 보정치가 늘어난다. 반대로, 컨디션이 최악(-20%)일 때도 1.5가 곱해져 -30%로 늘어난다. 컨디션이 최악 ~ 보통일 땐 효과가 없고, 다른 스탯 상승량 보정 스탯에 비해 가성비도 그리 좋지 않으며, 무엇보다 컨디션 효과 증가 스탯이 중첩되어도 합연산으로 들어가기 때문에(50%, 20%가 있으면 1+0.5+0.2 = 1.7만큼 곱해짐) 2순위로 밀려나는 스탯.</li>
<li>힌트 발생율, 힌트 레벨 상승: 육성 중 느낌표가 뜰 확률, 힌트를 줄 때 몇 레벨의 힌트를 주는 지에 관한 스탯.</li>
<li>초기 우정도: 빠르게 우정작을 하는데 도움이 되지만 그 뿐.</li>
</ul>
<br>
일반적으로 없어도 되는 스탯들은 다음과 같다.<br>
<ul>
<li>스킬 Pt 보너스: 높아서 나쁠 건 없지만 스킬Pt가 많다고 무조건 좋은 스킬을 많이 찍을 수 있는 것도 아니고, 레이스 한 번 더 뛰면 되는 수준이라 중요도가 크게 떨어진다.</li>
<li>레이스 보너스: 레이스 후 스탯 상승량과 관련. 레이스 보너스가 34% 이상이 되어야 기본 상승량 3에 고작 +1이 붙는 수준이다. 단, 3번째 시나리오인 뉴트랙 시나리오에서 레이스 메타가 도입되며 1티어가 된다고 한다.</li>
<li>팬 수 보너스: 사실상 팬 수 작업을 하거나, 클래식, 시니어 종료 시점에서 일정 팬 수를 넘겨 스탯Pt 30을 받는 용도 외에는 쓸모가 없다.</li>
</ul>
`;

const TIP7_DESC = `
<br>
<span style="font-size:25px;">[개요]</span><br>
인자작은 육성의 핵심이다. 인자계승을 통해 스탯을 올리 거나, 스킬힌트를 얻거나, 거리나 각질 적성을 높히는 게 가능하다.<br>
<br>
<br>
<span style="font-size:25px;">[인자의 종류]</span><br>
<br>
<img src="./imgs/desc/blue.PNG" style="height:25px;"> <span style="font-size:20px;">청인자</span><br>
스탯을 높여주는 인자로, 1성 +5, 2성 +12, 3성 +21 만큼 올려준다. 조부, 부가 모두 3성이면 최대 63만큼 올릴 수 있다. 육성 시작부터 한 번 올려주고, 이후 육성 중 두 번의 계승에서 높은 확률로 계승받는다. 이론상 청인자를 계승해서 올릴 수 있는 스탯의 최대치는 378(3성 인자 9개)이다.<br>
<span style="color: blue">왜 중요한가요?</span> 기본적으로 스탯을 올리는 게 가장 중요한 게임이고, 육성 시작시 반드시 모든 청인자를 계승하며 시작하는 것부터 육성 중 2번의 계승에서 매우 높은 확률로 계승할 수 있는, 계승 효과가 가장 확실하고 안정적인 인자이다.<br>
<span style="color: blue">어떻게 얻나요?</span> 5개 스탯 중 1/5 확률로 하나가 선택되며, 알려진 n성 확률은 다음과 같다.<br>
<table class="desc-table"><tr><td class="td-label">스탯</td><td class="td-label">★</td><td class="td-label">★★</td><td class="td-label">★★★</td></tr><tr><td class="td-label">600 미만</td><td class="td-desc">90%</td><td class="td-desc">10%</td><td class="td-desc">0%</td></tr><tr><td class="td-label">600 ~<br>1099</td><td class="td-desc">49.5%</td><td class="td-desc">44.5%</td><td class="td-desc">6%</td></tr><tr><td class="td-label">1100 ~</td><td class="td-desc">20%</td><td class="td-desc">70%</td><td class="td-desc">10%</td></tr></table>
<br>
<br>
<img src="./imgs/desc/red.PNG" style="height:25px;"> <span style="font-size:20px;">적인자</span><br>
마장적성(잔디, 더트), 거리적성(단거리~장거리), 각질적성(도주~추입) 레벨을 높여주는 인자다. 청인자, 녹인자와 마찬가지로 시작부터 한 번은 무조건 전부 계승받는다. 높아지는 레벨은 계승받은 인자의 별의 합계에 따라 다르며, 다음의 표와 같다. 각각의 계승에서 독립적으로 시행된다.
<table class="desc-table"><tr><td class="td-label">별 합계</td><td class="td-label">1성</td><td class="td-label">4성</td><td class="td-label">7성</td><td class="td-label">10성 이상</td></tr>
<tr><td class="td-label">상승치</td><td class="td-desc">1레벨</td><td class="td-desc">2레벨</td><td class="td-desc">3레벨</td><td class="td-desc">4레벨</td></tr></table>
<span style="color: blue">왜 중요한가요?</span> 경주에 출주한 말딸의 거리적성이 B 미만일 경우 스피드에 패널티, 마장적성이 B 미만일 경우 파워에 패널티, 각질 적성이 B 미만일 경우 지능 스탯에 패널티가 붙는다. 반대로 A 이상부터는 각 스탯에 보너스가 붙는다. 이 수치가 매우 크기 때문에(예컨대, A 적성일 경우 스탯에 10% 추가 보정이 붙는다.) 경주의 승패를 좌우한다.<br>
<span style="color: blue">어떻게 얻나요?</span> 육성 완료 시점에서 A레벨 이상의 적성들 중 하나가 랜덤하게 붙는다(예컨대, 단거리S, 선행A, 잔디A인, 이외 적성 모두 A 미만인 말이면, 단거리, 선행, 잔디 인자 중 하나가 붙는다). 인자의 별 개수는 순전히 랜덤이며, 유저들이 조사한 인자의 n성 확률은 다음과 같다.<br>
<table class="desc-table"><tr><td class="td-label">★</td><td class="td-label">★★</td><td class="td-label">★★★</td></tr><tr><td class="td-desc">10%</td><td class="td-desc">70%</td><td class="td-desc">20%</td></tr></table>
<br>
<br>
<img src="./imgs/desc/green.PNG" style="height:25px;"> <span style="font-size:20px;">녹인자</span><br>
고유스킬의 힌트를 주는 인자다. 청, 적인자와 마찬가지로 육성 시작시 부(조부는 x)의 녹인자를 무조건 계승받고 시작한다.<br>
<span style="color: blue">왜 중요한가요?</span> 고유스킬들은 성능은 높지 않지만 발동 타이밍을 의도적으로 조정하기가 쉽고, 무엇보다 결정적인 순간에 발동하는 것들이 대부분이다. 따라서 계승고유기가 승부에 결정적인 역할을 하는 경우가 많다.<br>
<span style="color: blue">어떻게 얻나요?</span> 확률적으로 붙으며, 재능개화 레벨이 높을 수록, 육성 마무리시 육성랭크(점수)가 높을 수록 잘 붙는다고 알려져 있다. 육성랭크 기준으로 유저들이 조사한 대략적인 확률은 아래와 같다.<br>
<table class="desc-table"><tr><td class="td-label">육성랭크</td><td class="td-label">★</td><td class="td-label">★★</td><td class="td-label">★★★</td></tr><tr><td class="td-label">SS(17500점)<br>미만</td><td class="td-desc">50%</td><td class="td-desc">45%</td><td class="td-desc">5%</td></tr><tr><td class="td-label">SS(17500점)<br>이상</td><td class="td-desc">20%</td><td class="td-desc">70%</td><td class="td-desc">10%</td></tr></table>
<br>
<br>
<img src="./imgs/desc/white.PNG" style="height:25px;"> <span style="font-size:20px;">시나리오 백인자</span><br>
백인자부터는 시작부터 받지 못 하고 육성 중의 계승에서만 받을 수 있다. 시나리오 백인자의 효과는 다음과 같다.
<table class="desc-table"><tr><td class="td-label">URA 시나리오</td><td class="td-label">아오하루 시나리오</td></tr>
<tr><td class="td-desc">1성당<br>스피드 +10<br>스태미나 +10</td><td class="td-desc">1성당<br>파워 +10<br>지능 +10</td></tr></table>
<span style="color: blue">왜 중요한가요?</span> 청인자가 올려주는 스탯 상승분과 별개로 추가 상승한다.<br>
<span style="color: blue">어떻게 얻나요?</span> 해당 시나리오를 완주(아오하루배처럼 시나리오 레이스가 있는 경우에도, 시나리오 레이스 결승과 별개로 시나리오 완주 조건(URA 결승 우승)을 만족하면 얻어진다)하면 확률적으로 붙는다. 부모 말에게 같은 시나리오 인자가 붙어있다면 확률이 높아진다고 알려져 있다.<br>
<br>
<br>
<img src="./imgs/desc/white2.PNG" style="height:25px;"> <span style="font-size:20px;">스킬, 레이스 백인자</span><br>
스킬 백인자는 해당 스킬의 힌트를 주고, 레이스 백인자는 레이스마다 정해진 능력치나 스킬힌트를 준다.<br>
<span style="color: blue">왜 중요한가요?</span> 레이스 백인자는 중요도가 떨어지지만, 스킬 백인자의 경우 핵심적인 스킬 힌트를 얻을 수 있는 주요 경로이므로 중요하다.<br>
<span style="color: blue">어떻게 얻나요?</span> 스킬인자는 해당 스킬을 배운 채로 육성을 마무리했을 때, 레이스인자는 해당 레이스를 우승하고 육성을 마무리했을 때 매우 낮은 확률로 붙는다. 조부, 부가 같은 인자를 가지고 있을 때 확률이 높아지며, 유저들이 조사한 확률은 다음과 같다.<br>
<table class="desc-table"><tr><td class="td-label">계승마중<br>인자보유마</td><td class="td-label">0명</td><td class="td-label">1명</td><td class="td-label">2명</td><td class="td-label">3명</td></tr>
<tr><td class="td-label">확률</td><td class="td-desc">20%</td><td class="td-desc">22%</td><td class="td-desc">24.2%</td><td class="td-desc">26.6%</td><td class="td-blank"></td></tr>
<tr><td class="td-label">계승마중<br>인자보유마</td><td class="td-label">4명</td><td class="td-label">5명</td><td class="td-label">6명</td></tr>
<tr><td class="td-label">확률</td><td class="td-desc">29.3%</td><td class="td-desc">32.2%</td><td class="td-desc">35.4%</td></tr></table>
※ 스킬 백인자의 경우, 선대가 '상위 스킬'을 보유하고 있으면 이 확률에 또 가산이 붙는다. (◎ > ○, 금테두리 > 은테두리)<br>
<br>
인자의 별 개수는 순전히 랜덤이며, 유저들이 조사한 인자의 n성 확률은 다음과 같다.<br>
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
<td class="td-desc">- 트레이닝 효과 매우 높음<br>- 특기율 50<br>- 낮은 확률로 <span class="condition-info">애교○</span>를 확정적으로 얻을 수 있는 이벤트<br>- 체인이벤트에서 스킬 ${skill(201641)} 확정 획득</td>
<td class="td-desc">- 특기율 60<br>- 힌트 레벨 상승량 3<br>- 파워 보너스 존재<br>- ${skill(200352)} 힌트 획득 가능</td>
<td class="td-desc">- 선입 각질에 도움이 되는 스킬이 매우 많음<br>- 범용 스킬도 좋음<br>- 힌트 레벨 상승량 2<br>- 의욕 상승, 체력 최대치 증가 이벤트</td>
</tr>
<tr>
<td class="td-label">코멘트</td>
<td class="td-desc"> 키타산 블랙 정도를 제외하면 SSR 카드 중에서도 훈련 보너스로 이길 카드가 거의 없다.<br>${skill(201641)}는 육성 중에 사실상 스피드 확정 펑핑.</td>
<td class="td-desc">특기율 미쳤고 ${skill(200352)}이나 ${skill(200512)}같은 범용 스킬도 힌트 3레벨씩 준다.</td>
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
<td class="td-desc">힌트를 주는 스킬만 ${skill(200432)}, ${skill(200362)}, ${skill(200332)}, ${skill(200492)}, ${skill(200502)} 등등...</td>
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
<td class="td-desc">${skill(200432)}, ${skill(200352)}처럼 비싼 스킬 주는 서포트카드 드물다.</td>
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
<td class="td-desc">- 트레이닝 효과 좋음<br>- ${skill(200012)}<br>- 이벤트로 스킬Pt를 많이 얻을 수 있음</td>
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
'2인3각' 이벤트: 클래식급(2년차) 11월 전반 팬 수 5만 이상일 경우 지능 +20, 스킬Pt +20, ${skill(200441)} 힌트+1 (11월 전반 행동 후 이벤트 발생)</td></tr>
<tr><td class="td-label">2</td><td class="td-desc">
'당근 대농원에서' 이벤트: 클래식급(2년차) 12월 후반 팬 수 10만 이상일 경우 스킬Pt +30 (12월 후반 행동 후 이벤트 발생)</td></tr>
<tr><td class="td-label">3</td><td class="td-desc">
'URA파이널스 출장 결정' 이벤트: 시니어급(3년차) 12월 후반 팬 수 24만 이상일 경우 스킬Pt +30</td></tr></table>
`;



const TIP15_DESC = `
1. 핵심은 아오하루 특훈 -> 팀원 스탯 높이기 -> 훈련 레벨 높이기 -> 스탯작.<br>
2. 클래식까지 팀 랭크 높여서 훈련 레벨작 해놓고, 시니어부터 본격적으로 무지개 위주로 챙기면서 스탯작.<br>
3. 클래식 합숙 시점에서 C~B랭크, 시니어 초반에 A랭크, 시니어 합숙에서 S랭크면 순조로운 육성이라고 할 수 있음.<br>
<br><br>
[팀명별 획득 스킬]<br>
<table class="desc-table">
<tr><td class="td-label">제안자</td><td class="td-label">팀명</td><td class="td-label">획득 스킬</td></tr>
<tr><td class="td-desc">타이키 셔틀</td><td class="td-desc">HOP CHEERS</td><td class="td-desc">${skill(200681)}</td></tr>
<tr><td class="td-desc">라이스 샤워</td><td class="td-desc">블룸스</td><td class="td-desc">${skill(200741)}</td></tr>
<tr><td class="td-desc">하루 우라라</td><td class="td-desc">당근 푸딩</td><td class="td-desc">${skill(200471)}</td></tr>
<tr><td class="td-desc">마치카네 후쿠키타루</td><td class="td-desc">경삿날 러너스</td><td class="td-desc">${skill(201121)}</td></tr>
<tr><td class="td-desc">(기본)</td><td class="td-desc">팀 캐럿츠</td><td class="td-desc">${skill(200491)}</td></tr>
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

const TIP16_DESC = `
인자계승용 말을 육성하는 방법은 다음과 같다.<br>
<br>
1. 상성 계산하기<br>
<a href="https://gametora.com/ko/umamusume/compatibility">GameTora 상성 계산기</a> 접속 후 메인 캐릭터 선택, 좌측의 '추천'을 눌러 상성점수가 좋은 말딸 중에서 부모와 조부모를 고른다.<br>
총 상성점수가 150점을 넘으면 매우 높은 것. 실제로는 중상보너스, 제패 칭호 등의 상성 보너스가 더해져 더 높아진다.<br>
필수적으로 계승해야 하는 고유기가 있는 말은 부모에 배치하여 확정적으로 계승받는 것이 좋다.<br>
계산이 끝났다면, 조부모 말부터 깎기 시작한다.<br>
<br>
2. 서포트 선정하기<br>
필요한 스킬을 주는 서포트 카드 위주로 편성해 백인자를 확보한다.<br>
<a href="https://uma.inven.co.kr/db/skill">우마무스메 인벤 스킬</a> 페이지에서 원하는 스킬을 검색하면 해당 스킬을 주는 서포트 카드 목록을 확인할 수 있다.<br>
<br>
3. 육성하기<br>
육성법에는 다음의 두 가지 방법이 있다.<br>
(1) 원하는 청인자(스탯)가 3성이 뜰 확률을 높이기 위해 해당 스탯을 1100 이상으로 올리기<br>
(2) 3성이 뜰 최저컷인 600 이상으로만 올리고 레이스를 많이 뛰어 스킬Pt를 많이 얻어 백인자를 최대한 확보하기<br>
스탯이 600 이상일 경우 원하는 3성 청인자를 얻을 확률은 1/5 * 6/100 = 1.2%, 스탯이 1100 이상일 경우는 2%다.<br>
1.2%던 2%던 체감상 큰 차이는 없고, 필수라고 할 만한 스킬은 있어도 청인자가 꼭 3개가 뜰 필요는 없기 때문에 일반적으론 (2)번의 방법이 선호된다.<br>
<br>
몇 가지 팁<br>
(1) 육성 중 레이스를 뛰거나 아오하루 훈련 등을 해서 얻는 스킬 힌트들은 이미 배운 스킬 이외의 것으로 주어진다. 따라서 육성 중 이미 힌트 3레벨을 달성했다면 미리 찍는 것이 좋다. 육성이 보다 안정적임은 물론 다른 스킬의 힌트를 얻을 가능성도 높아진다.<br>
(2) 부모, 조부모와 같은 스킬을 보유할 경우 해당 스킬의 백인자가 뜰 확률이 높아진다.<br>
(3) ○ < ◎ < 레어 순으로 백인자가 달릴 확률이 높아진다. 중요한 스킬이라면 쌍원 또는 레어까지 찍어주자.<br>
(4) 말악귀가 아니면 시도하지 말자. 어차피 새 카드가 나오거나 새 시나리오가 열리면 고점이 높아져서 기존의 육성마들은 말고기가 되지 않는가?
`;

const TIP17_DESC = `
1. 모든 각질 모든 거리에 다 좋은 범용 스킬을 주는 서포트 카드 편성하기<br>
${skill(200331)} ${skill(200351)} ${skill(200431)} ${skill(200451)} ${skill(200461)} ${skill(200511)} 등등..<br>
<br>
2. 거리별로 좋은 녹딱 스킬
<ul style="margin-top:0px;">
<li>모든 거리 공통: ${skill(200152)} ${skill(200212)}</li>
<li>마일: ${skill(200012)} ${skill(200132)}</li>
<li>중거리: ${skill(200132)}</li>
<li>장거리: ${skill(200012)} ${skill(200142)}</li>
<li>더트: ${skill(200012)} ${skill(200142)}</li>
</ul>
3. ◎까지 찍어도 점수 더 안 주니 ○까지만 찍고 다른 스킬 찍기
`;

const TIP18_DESC = `
(A) 경기 중반 구간까지 모든 말딸은 속도 한계를 가진다.<br>
(B) 이 때, 속도를 상승시키는 스킬이 발동되면, 해당 스킬의 발동 시간동안 속도 한계가 그만큼 올라간다.<br>
(C) 종반 구간에 접어드는 순간부터 속도 한계가 해제되고, 최고속도(스피드 스탯)까지 가속(파워 스탯)하게 된다.<br>
<br>
여기서 (C) 종반구간에 도달하기 직전에 (B) 속도가 상승되는 스킬이 발동될 경우, 스킬에 의해 최고 속도가 더 높아진 상태로 종반구간에 진입, 그 속도에서부터 종반 최종속도까지 가속하게 된다.<br>
<br>
즉, '속도상승 스킬 발동 -> 가속 -> 스킬에 의해 높아진 속도 한계 도달, 일정시간 유지 -> 스킬 발동 종료 후 원래 속도로 감속'의 절차를 거치는 속도 상승 스킬에서, '감속' 단계가 사라진다는 것을 의미하며, 이는 종반 빠른 가속으로 먼저 최고속도에 도달해 이득을 보는 것이 가장 중요한 우마무스메에서 매우 큰 효과를 가져온다.<br>
<br>
이를 접속이라고 부른다. 특정 거리의 마장에서 ${skill(201571)} 스킬로 접속을 확정적으로 발동할 수 있는 크리스마스 오구리 캡이 사기라고 불리는 이유이기도 하다.
`;

const TIP19_DESC = `
1. 팀레이스엔 모브 말딸이 많이 출전하기 때문에 특정 순위여야 발동하는 스킬은 노리기가 쉽지 않다.<br>
2. 레어스킬은 1200점, 일반스킬은 500점 가산된다.<br>
3. 팀레이스용 말딸을 깎을 땐 언제나 스킬이 우선이다. 깡스탯만 높은 말딸은 강한 상대와 매칭되게 만들어 점수도 못 벌고 질 확률만 높인다.<br>
4. ○, ◎으로 나누어지는 스킬은 ◎을 찍어도 일반 스킬 500점만 가산되므로 ○까지만 찍자.<br>
<br>
<br>
<br>
[패시브 스킬]<br>
${skill(201641)} (한 명만), ${skill(201631)}, 각질 별 요령류 스킬<br>
<br>
- 아래 스킬은 관련 아이템 사용시 확정 발동 -<br>
햇빛 쨍쨍 인형: ${skill(200152)}, ${skill(200212)}<br>
비 주룩주룩 인형: ${skill(200162)}, ${skill(200232)}<br>
안쪽 그룹 추천공: ${skill(200262)}<br>
바깥쪽 그룹 추천공: ${skill(200252)}<br>
<br>
<br>
<br>
[일반 스킬]<br>
<br>
- 1티어: 중거리 이상에서 두 번까지 발동할 수 있는 스킬<br>
${skill(201651)}, ${skill(201661)}, ${skill(200362)},<br>
${skill(200372)}, ${skill(200462)}, ${skill(200342)},<br>
${skill(200332)}<br>
<br>
- 1티어: 발동이 쉽고 가성비가 좋은 스킬<br>
각질별 직선, 코너 스킬,<br>
각질별 견제, 긴장 스킬<br>
${skill(201611)}, ${skill(201472)}, ${skill(201372)},<br>
${skill(201232)}, ${skill(201502)}, ${skill(201332)},<br>
${skill(201432)}, ${skill(201412)}, ${skill(200532)},<br>
${skill(201072)}, ${skill(200502)}, ${skill(201342)},<br>
${skill(200452)},<br>
<br>
- 2티어: 힌트가 있으면 나쁘지 않은 스킬<br>
- 128pt 이하<br>
${skill(201192)} (도주),<br>
${skill(201082)} (도주),<br>
${skill(200682)} (도주),<br>
${skill(200712)} (도주),<br>
${skill(201052)} (도주, 선행),<br>
${skill(200722)} (도주, 선행),<br>
${skill(201062)} (도주 제외),<br>
${skill(201212)} (도주 제외),<br>
${skill(200992)} (선행),<br>
${skill(200672)} (선입, 추입),<br>
${skill(200702)} (선입, 추입),<br>
${skill(200662)} (선입, 추입),<br>
${skill(201152)} (선입, 추입),<br>
${skill(201222)} (선입, 추입),<br>
${skill(201142)}, ${skill(201581)}, ${skill(201571)},<br>
${skill(200652)}, ${skill(200742)}<br>
- 126pt 이하<br>
${skill(201682)}, ${skill(201002)}, ${skill(200432)},<br>
${skill(201132)}, ${skill(200552)}, ${skill(201282)},<br>
${skill(201442)}, ${skill(201672)}, ${skill(200542)},<br>
${skill(200582)}, ${skill(201272)}, ${skill(201512)},<br>
${skill(201352)}, ${skill(200592)}, ${skill(201902)},<br>
${skill(200572)}, ${skill(200642)}, ${skill(201422)},<br>
${skill(200602)},<br>
- 120pt 이하<br>
아오하루 스킬들<br>
${skill(200472)} (도주 제외),<br>
${skill(200512)}, ${skill(200382)}, ${skill(200352)},<br>
${skill(201482)}<br>
`;

const TIP20_DESC = `
챔피언스 미팅처럼 상대말들이 디버프기를 줄줄 달고 나오지 않기 때문에 '목표 거리 / 3' 보다 살짝 높은 수준이면 됨<br>
예시:<br>
단거리 1400m / 3 = 450 + a<br>
마일 1800m / 3 = 600 + a<br>
중거리 2400m / 3 = 800 + a<br>
장거리 3200m / 3 = 1100 + a
`;

const TIP21_DESC = `
[뉴트랙 레이스 족보]<br>
※ 레이스 보너스, 스킬 힌트, 칭호로 얻는 보너스 스탯 등의 효율을 최대화하는 루트임.<br>
<a target="_blank" href="https://gall.dcinside.com/mgallery/board/view/?id=umamusu&no=2036494">말딸갤: 뉴트랙 출주표 정리</a><br>
<br>
[상점 아이템의 가치]<br>
<a target="_blank" href="https://www.inven.co.kr/webzine/news/?news=285622&site=uma">인벤: 상점 아이템 공략</a><br>
※ 요약하자면 다음과 같다.<br>
1. 체력 회복 아이템, 스탯 증가 아이템, 트레이닝 효율 상승 아이템, 훈련 Lv을 높여주는 탄원서가 육성의 핵심이다. 괜찮은 조건의 훈련이 가능할 때, 메가폰과 앵클을 중첩 사용하여 최대한 많은 스탯을 얻어야 한다.<br>
2. 레이스 효율 상승 아이템은 G1 레이스 위주로, 팬 수 증가 아이템은 G1 중에서도 획득 팬 수가 많은 레이스 위주로 사용한다.<br>
3. <span class='condition-info'>수완가</span> 등의 굿 컨디션 획득 아이템, 3연속 레이스 출주시 발생할 수 있는 <span class='condition-info'>피부 트러블</span> 제거 아이템도 매우 중요하다.<br>
4. 빠른 우정작은 여전히 중요하니 게임 초반 당근 BBQ 세트는 반드시 구입한다.<br>
5. 리셋 휘슬은 한 두개 정도 가지고 있어야 중요한 순간에 우정트레이닝이 안 뜨는 참사를 막을 수 있다.<br>
6. 시나리오 특성상 파워, 지능을 얻기가 힘드므로, 파워, 지능 아이템의 가치가 더 높으며, 지능 훈련의 경우 지능 앵클 아이템이 없기 때문에 다른 훈련보다 탄원서가 중요하다.<br>
7. 최대체력과 체력을 소량 올려주는 에너지 드링크 MAX도 효율이 좋은데, 체력이 0인 상태로 레이스 출주시 나쁜 이벤트가 발생할 확률이 높아 이를 방지하는데 쓰인다.<br>
<br>
[기타 팁]<br>
- '니이가타' 경기장은 도주마에게 매우 불리하다. 선입으로 각질을 바꿔 나가는 것이 좋다.<br>
- 무조건 레이스에 많이 나가는 건 효율이 나쁘다. 일섭에서 검증받은 족보를 따라 예약된 레이스에 나가되, 상황에 따라 조금씩 변형을 가하면 된다.<br>
- 탄원서가 중요한 것은 맞으나, 코인이 부족할 경우 다른 핵심 아이템보다 우선순위는 낮다. 대부분의 턴을 레이스로 소모하기 때문에 훈련에 사용되는 턴은 얼마 되지 않고, 합숙 기간에는 어차피 훈련레벨이 5로 고정되기 때문이다.<br>
- 최종 클라이맥스 레이스는 스탯 보상이 매우 높다. 편자 망치를 사용 가능하므로 레이스 보상 35% 증가 편자 망치 세 개는 마지막에 가지고 있어야 한다.<br>
- 훈련에 임하는 턴 자체가 매우 적다보니 특정 훈련 전용인 앵클 아이템은 많이 쓰이지 않는다. 무지성 구매는 자제하자. 메가폰은 항상 부족하니 무조건 풀매수 하자.<br>
- 고유기 레벨업 이벤트 발동 조건은 다음과 같다.<br>
<table class="desc-table">
<tr><td class="td-label">시점</td><td class="td-label">이사장 우정도</td><td class="td-label">팬 수</td></tr>
<tr><td class="td-desc">주니어 말</td><td class="td-desc">19 이상</td><td class="td-desc">5000</td></tr>
<tr><td class="td-desc">클래식 말</td><td class="td-desc">31 이상</td><td class="td-desc">60000</td></tr>
<tr><td class="td-desc">시니어 말</td><td class="td-desc">51 이상</td><td class="td-desc">120000</td></tr>
</tr></table>
<br>
<br>
<a target="_blank" href="https://gall.dcinside.com/umamusme/953929">말딸갤: 뉴트랙 시나리오 시스템과 운영법 v1.1</a><br>
<a target="_blank" href="https://gall.dcinside.com/umamusu/1828095">말딸갤: 뉴트랙 서폿풀 (무소과금 기준)</a><br>
<a target="_blank" href="https://gall.dcinside.com/umamusu/2054848">말딸갤: 다시 써보는 뉴트랙 서폿 편성 (무소과금편)</a></br>
<a target="_blank" href="https://gall.dcinside.com/umamusu/2055884">말딸갤: 근성 카드의 분류</a></br>
<br>
<a target="_blank" href="https://gall.dcinside.com/umamusu/1997864">말딸갤: 뉴트랙 정보글 모음</a><br>
`;

const TIP23_DESC = `
<table class="desc-table">
<tr><td class="td-label">칭호명</td><td class="td-label">조건Lv</td><td class="td-label">보상</td></tr>
<tr><td class="td-desc"><span style="color:#decf00">레전드 우마무스메</span></td><td class="td-desc">카리스마 우마무스메, 히로인 우마무스메 중 하나를 달성하고 봄의 패자 및 가을의 패자를 달성</td><td class="td-desc">${skill(200512)}</td></tr>
<tr><td class="td-desc"><span style="color:#decf00">신속 마일러</span></td><td class="td-desc">NHK 마일컵, 벚꽃상, 야스다 기념, 빅토리아 마일, 마일 CS에서 우승하고 한신JF, 아사히배FS 중 하나 우승</td><td class="td-desc">${skill(201032)}</td></tr>
<tr><td class="td-desc"><span style="color:#decf00">고속 마일러</span></td><td class="td-desc">NHK 마일컵, 야스다 기념, 마일 CS에서 승리</td><td class="td-desc">랜덤한 스탯 2종+15</td></tr>
<tr><td class="td-desc"><span style="color:#decf00">베스트 우마무스메</span></td><td class="td-desc">카리스마 우마무스메를 달성하고 텐노상(봄), 타카라즈카 기념, 재팬컵, 텐노상(가을), 오사카배, 아리마 기념 중에서 2회 우승</td><td class="td-desc">랜덤한 스탯 2종+15</td></tr>
<tr><td class="td-desc"><span style="color:#decf00">원더풀 우마무스메</span></td><td class="td-desc">카리스마 우마무스메를 달성하고 재팬컵(클래식급), 아리마 기념(클래식급) 중 하나를 우승</td><td class="td-desc">랜덤한 스탯 2종+15</td></tr>
<tr><td class="td-desc"><span style="color:#decf00">퀸 우마무스메</span></td><td class="td-desc">히로인 우마무스메를 달성하고 빅토리아 마일, 한신JF를 우승하고 엘리자베스 여왕배를 2연패</td><td class="td-desc">랜덤한 스탯 2종+15</td></tr>
<tr><td class="td-desc"><span style="color:#decf00">프린세스 우마무스메</span></td><td class="td-desc">히로인 우마무스메를 달성하고, 엘리자배스 여왕배(클래식급)에서 우승</td><td class="td-desc">랜덤한 스탯 2종+10</td></tr>
<tr><td class="td-desc"><span style="color:#decf00">더트 G1 패자</span></td><td class="td-desc">더트 G1 레이스 9회 우승</td><td class="td-desc">${skill(201672)}</td></tr>
<tr><td class="td-desc"><span style="color:#decf00">더트 달인</span></td><td class="td-desc">더트 레이스에서 15회 우승</td><td class="td-desc">랜덤한 스탯 2종+10</td></tr>

<tr><td class="td-desc"><span style="color:#8f8f8f">카리스마 우마우스메</span></td><td class="td-desc">사츠키상, 일본 더비, 국화상 우승</td><td class="td-desc">랜덤한 스탯 2종+10</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">수완 스프린터</span></td><td class="td-desc">타카마츠노미야 기념, 스프린터즈 S 우승</td><td class="td-desc">랜덤한 스탯 2종+15</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">히로인 우마무스메</span></td><td class="td-desc">벚꽃상, 오크스, 추화상 우승</td><td class="td-desc">랜덤한 스탯 2종+10</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">광속 스프린터</span></td><td class="td-desc">타카마츠노미야 기념, 스프린터즈 S, 야스다 기념, 마일 CS 우승</td><td class="td-desc">랜덤한 스탯 2종+15</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">표창패의 패자</span></td><td class="td-desc">텐노상(봄)과 텐노상(가을) 우승</td><td class="td-desc">랜덤한 스탯 2종+10</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">봄의 패자</span></td><td class="td-desc">오사카배, 텐노상(봄), 타카라즈카 기념 우승</td><td class="td-desc">랜덤한 스탯 2종+10</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">가을의 패자</span></td><td class="td-desc">텐노상(가을), 재팬컵, 아리마 기념 우승</td><td class="td-desc">랜덤한 스탯 2종+10</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">근간거리의 패자</span></td><td class="td-desc">근간거리(마장 거리가 4의 배수) 레이스 10회 우승</td><td class="td-desc">랜덤한 스탯 2종+10</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">비근간거리의 패자</span></td><td class="td-desc">비근간거리(마장 거리가 4의 배수가 아닌 경우) 레이스 10회 우승</td><td class="td-desc">랜덤한 스탯 2종+10</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">귀여운 우마무스메</span></td><td class="td-desc">'우마무스메 스테이크스' 이름이 들어간 레이스를 3회 우승</td><td class="td-desc">랜덤한 스탯 2종+5</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">월드 우마무스메</span></td><td class="td-desc">이름에 나라 이름이 들어간 레이스 3회 우승 (아메리카JCC, 재팬컵 등)</td><td class="td-desc">랜덤한 스탯 2종+5</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">주니어 우마무스메</span></td><td class="td-desc">'주니어 스테이크스' 이름이 붙은 레이스 3회 우승</td><td class="td-desc">랜덤한 스탯 2종+5</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">명인 우마무스메</span></td><td class="td-desc">잔디의 단거리, 마일, 중거리, 장거리 레이스에서 각각 1회 우승</td><td class="td-desc">랜덤한 스탯 2종+5</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">달인 우마무스메</span></td><td class="td-desc">더트의 단거리, 마일, 중거리 레이스에서 각각 1회 우승</td><td class="td-desc">랜덤한 스탯 2종+5</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">더트 G1 제왕</span></td><td class="td-desc">더트 G1 레이스 5회 우승</td><td class="td-desc">랜덤한 스탯 2종+15</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">더트 G1 괴물</span></td><td class="td-desc">더트 G1 레이스 4회 우승</td><td class="td-desc">랜덤한 스탯 2종+10</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">더트 G1 강자</span></td><td class="td-desc">더트 G1 레이스 3회 우승</td><td class="td-desc">랜덤한 스탯 2종+10</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">더트 전문가</span></td><td class="td-desc">더트 레이스 10회 우승</td><td class="td-desc">랜덤한 스탯 2종+10</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">더트 고수</span></td><td class="td-desc">더트 레이스 5회 우승</td><td class="td-desc">랜덤한 스탯 2종+5</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">더트 스프린터</span></td><td class="td-desc">JBC 스프린트를 2연패</td><td class="td-desc">랜덤한 스탯 2종+10</td></tr>
<tr><td class="td-desc"><span style="color:#8f8f8f">더트의 신성</span></td><td class="td-desc">유니콘 스테이크스, 레오파드 스테이크스, 재팬 더트 더비에서 우승</td><td class="td-desc">랜덤한 스탯 2종+5</td></tr>



<tr><td class="td-desc"><span style="color:#ba8f32">베테랑 우마무스메</span></td><td class="td-desc">오픈 이상의 레이스에서 10회 우승</td><td class="td-desc">랜덤한 스탯 2종+5</td></tr>
<tr><td class="td-desc"><span style="color:#ba8f32">홋카이도 마스터</span></td><td class="td-desc">삿포로, 하코다테 개최 대상경주(=중상, G3 이상) 3회 우승</td><td class="td-desc">랜덤한 스탯 2종+5</td></tr>
<tr><td class="td-desc"><span style="color:#ba8f32">토호쿠 마스터</span></td><td class="td-desc">후쿠시마, 니이가타, 모리오카 개최 대상경주 3회 우승</td><td class="td-desc">랜덤한 스탯 2종+5</td></tr>
<tr><td class="td-desc"><span style="color:#ba8f32">칸토 마스터</span></td><td class="td-desc">도쿄, 나카야마, 오이, 카와사키, 후나바시 개최 대상경주 3회 우승</td><td class="td-desc">랜덤한 스탯 2종+5</td></tr>
<tr><td class="td-desc"><span style="color:#ba8f32">서일본 마스터</span></td><td class="td-desc">츄쿄, 한신, 교토 개최 대상경주 3회 우승</td><td class="td-desc">랜덤한 스탯 2종+5</td></tr>
<tr><td class="td-desc"><span style="color:#ba8f32">코쿠라 마스터</span></td><td class="td-desc">코쿠라 개최 대상경주 2회 우승</td><td class="td-desc">랜덤한 스탯 2종+5</td></tr>

</tr></table>
`;

const TIP24_DESC = `
단거리<br>
<img src="./imgs/desc/teamrace1.png"/><br><br>
마일<br>
<img src="./imgs/desc/teamrace2.png"/><br><br>
중거리<br>
<img src="./imgs/desc/teamrace3.png"/><br><br>
장거리<br>
<img src="./imgs/desc/teamrace4.png"/><br><br>
더트<br>
<img src="./imgs/desc/teamrace5.png"/><br><br>
`;
const TIP25_DESC = `
<img src="./imgs/desc/race.jpg">
<br>
<ul>
<li>중간에 있는 선을 기준으로 '초반 - 중반 - 종반'으로 구분</li>
<li>50% 지점에서 반으로 나누어 '전반 - 후반'으로 구분</li>
</ul>
<br>
<span style="font-size:26; font-weight:bold">[초반]</span><br>
<ul>
<li>레이스 스타트시 0.01~0.1초 사이의 랜덤한 출발 지연시간을 갖고, 20% 확률로 0.05초보다 지연시간이 길 경우 '늦은 출발'이 됨. 순전히 랜덤이며 영향을 주는 스탯은 없음.</li>
<li>이 지연시간에 ${skill(200431)}은 0.4를, ${skill(200432)}은 0.9를 곱해줌. (예컨대, 지연시간이 0.1초라도 ${skill(200431)}을 가지고 있다면 0.04초로 줄어듦). 단, 스킬 자체가 발동하지 않을 수 있음.</li>
<li>대부분의 도주마는 최선두 혹은 선두 그룹에 들어가야 발동하는 고유기를 가지고 있고, 거의 모든 도주 스킬도 선두 그룹에서 발동하기 때문에, 초반에 선두를 잡고 선두에서 발동하는 스킬로 순위를 굳히는 것이 주요한 전략임.</li>
</ul>
<br>
<span style="font-size:26; font-weight:bold">[중반]</span><br>
<ul>
<li>10/24 (42%) 지점 이전까진 '포지션 킵' 시스템에 의해 뒷각질은 자신보다 앞각질 말을 추월할 수 없음. 이 때 스킬이 발동해 앞각질을 제쳤다가 강제로 뒷각질로 밀려나는 것을 역분사라고 함. (단, 1주년 패치 이후 ${skill(201591)} 스킬은 포지션 킵 시스템을 무시한다)</li>
<li>10/24 지점 이후 포지션 킵이 해제됨. 포지션 킵이 해제된 이후 중반 스킬을 발동해 앞으로 치고 나가는 것이 주요한 전략임.</li>
</ul>
<br>
<span style="font-size:26; font-weight:bold">[종반]</span><br>
<ul>
<li>종반 진입과 동시에 가속을 시작해 최고속도까지 도달함. 이 때 완주에 필요한 스태미나가 부족하다면 그만큼 최고속도가 낮아짐. 반대로 스태미나가 남는다고 좋아지는 건 없음.</li>
<li>최고속도는 스피드스탯(스피드 녹딱 스킬 포함) + 거리적성 + 각질적성 + 각질보정(뒷각질일 수록 높음)으로 정해지며, 가속도는 파워스탯(파워 녹딱 스킬 포함) + 마장적성 + 각질보정(뒷각질일 수록 높음)으로 정해짐.</li>
<li>가장 중요한 것은 종반에 진입하는 구간에서 가속스킬을 발동해 빠르게 최고속도까지 가속하고, 속도 스킬을 발동해 최고속도 상한을 높히는 것임.</li>
<li>중반 막바지에 속도 스킬을 발동하고 높아진 최고속도까지 가속한 상태에서 종반에 진입하면 해당 속도를 유지하며 종반 최고속도까지 가속을 시작하는데, 이를 접속이라고 부름. 크리스마스 오구리 캡은 특정 시점에 발동하는 회복스킬로 속도 + 가속도 복합 고유기를 발동할 수 있어 특정 마장에서 확정적으로 접속이 가능함.</li></ul>
<br>
<span style="font-size:26; font-weight:bold">[기타]</span><br>
<ul>
<li>결론적으로 레이스에서 가장 중요한 스킬은 종반 가속기. 얼마나 빨리 최고속도까지 가속하느냐로 판가름이 남.</li>
<li>장거리에서 추입이 강한 이유는 긴 종반 구간동안 강력한 뒷각질 보정을 받을 수 있고, ${skill(200642)}라는 '조건 없이 종반 진입 즉시 발동' 스킬을 찍을 수 있기 때문.</li>
<li>선입의 안전성이 떨어지는 이유는 대표적인 선입용 가속기 ${skill(200601)}이 순위조건 + 종반 랜덤 발동이기 때문.</li>
</ul>
`;








const TIP14_DESC = `
[기본 정보]<br>
- 2023년 7월 11일 ~ 7월 17일<br>
<table class="desc-table"><tr>
<td class="td-label">경기장</td><td class="td-label">거리</td><td class="td-label">방향</td><td class="td-label">계절</td><td class="td-label">날씨</td><td class="td-label">상태</td></tr><tr>
<td class="td-desc">한신<br>잔디</td><td class="td-desc">3200m<br>장거리</td><td class="td-desc">우, 외측 -> 내측</td><td class="td-desc">봄</td><td class="td-desc">비</td><td class="td-desc">불량</td></tr></table>
<br>
[추천 스태미너]<br>
1100 이상 + 금딱힐<br>
`
/*
<table class="desc-table"><tr>
<td class="td-blank"></td>
<td class="td-label">도주</td><td class="td-label">선행</td><td class="td-label">선입</td><td class="td-label">추입</td></tr><tr>
<td class="td-label" nowrap>2금힐</td>
<td class="td-desc">700</td><td class="td-desc">800</td><td class="td-desc">760</td><td class="td-desc">780</td></tr>
<td class="td-label" nowrap>1금힐</td>
<td class="td-desc">850</td><td class="td-desc">950</td><td class="td-desc">910</td><td class="td-desc">930</td>
</tr></table>
*/
+ `
<br>
[추천 육성마]
<table class="desc-table">
<tr><td class="td-label">도주</td><td class="td-desc">
<b>발렌타인 미호노 부르봉</b><br>
<b>키타산 블랙</b><br>
수영복 마루젠스키
</td></tr>
<tr><td class="td-label">선행</td><td class="td-desc">
<b>크리스마스 오구리 캡</b><br>
</td></tr>
<tr><td class="td-label">추입</td><td class="td-desc">
<b>나리타 타이신</b><br>
<b>타마모 크로스</b><br>
골드 쉽
</td></tr>
</table>
<br>
[참고용 사이트]<br>
<a target="_blank" href="https://gall.dcinside.com/umamusu/1972520">말딸갤 피스케스배 관련 공략 모음.ZIP</a><br>
<a target="_blank" href="https://gall.dcinside.com/umamusu/2005547">피스케스배 마신표</a><br>
<br>
<a target="_blank" href="http://race.wf-calc.net/">(일본어) 레이스 시뮬레이터</a><br>
<a target="_blank" href="http://dfset.me/maumau/">레이스 플래너</a><br>
<a target="_blank" href="https://gametora.com/ko/umamusume/compatibility">상성 계산기</a><br>
<a target="_blank" href="https://uma.inven.co.kr/dataninfo/friends/">인벤 친구찾기</a><br>
<a target="_blank" href="https://m.inven.co.kr/uma/compare/">인벤 서포트 비교</a>
`;