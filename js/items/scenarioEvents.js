const scenarioEvents = [
{createDate:`2022-11-17`, character:`모든 캐릭터`, eventType:`chara`, cardName: null, title: `레이스 우승!`, choice: [`위 선택지`, `아래 선택지`], effect: [`G1：<br>5개 스테이터스 중 랜덤으로 1개+10<br>스킬 Pt+45<br>G2~G3：<br>5개 스테이터스 중 랜덤으로 1개+8<br>스킬 Pt+35<br>op：<br>5개 스테이터스 중 랜덤으로 1개+5<br>스킬 Pt+30<br>공통：<br>체력-15<br>랜덤으로 『마장 상태 및 출장 레이스장과 관계있는 스킬』 힌트 획득`, `G1：<br>5개 스테이터스 중 랜덤으로 1개+10<br>스킬 Pt+45<br>G2~G3：<br>5개 스테이터스 중 랜덤으로 1개+8<br>스킬 Pt+35<br>op：<br>5개 스테이터스 중 랜덤으로 1개+5<br>스킬 Pt+30<br>공통：<br>체력-30~-5<br>랜덤으로 『마장 상태 및 출장 레이스장과 관계있는 스킬』 힌트 획득`]},
{createDate:`2022-11-17`, character:`모든 캐릭터`, eventType:`chara`, cardName: null, title: `레이스 입상`, choice: [`위 선택지`, `아래 선택지`], effect: [`G1：<br>5개 스테이터스 중 랜덤으로 1개+5~8<br>스킬 Pt+40~45<br>G2~G3：<br>5개 스테이터스 중 랜덤으로 1개+4~6<br>스킬 Pt+30~45<br>op：<br>5개 스테이터스 중 랜덤으로 1개+2~4<br>스킬 Pt+20~45<br>공통：<br>체력-20<br>랜덤으로 『마장 상태 및 출장 레이스장과 관계있는 스킬』 힌트 획득`, `G1：<br>5개 스테이터스 중 랜덤으로 1개+5~8<br>스킬 Pt+40~45<br>G2~G3：<br>5개 스테이터스 중 랜덤으로 1개+4~6<br>스킬 Pt+30~45<br>op：<br>5개 스테이터스 중 랜덤으로 1개+2~4<br>스킬 Pt+20~45<br>공통：<br>체력-30~-10<br>랜덤으로 『마장 상태 및 출장 레이스장과 관계있는 스킬』 힌트 획득`]},
{createDate:`2022-11-17`, character:`모든 캐릭터`, eventType:`chara`, cardName: null, title: `레이스 패배`, choice: [`위 선택지`, `아래 선택지`], effect: [`G1：<br>5개 스테이터스 중 랜덤으로 1개+4<br>스킬 Pt+25<br>G2~G3：<br>5개 스테이터스 중 랜덤으로 1개+3<br>스킬 Pt+20<br>op：<br>스킬 Pt+10<br>공통：<br>체력-25<br>랜덤으로 『마장 상태 및 출장 레이스장과 관계있는 스킬』 힌트 획득`, `G1：<br>5개 스테이터스 중 랜덤으로 1개+4<br>스킬 Pt+25<br>G2~G3：<br>5개 스테이터스 중 랜덤으로 1개+3<br>스킬 Pt+20<br>op：<br>스킬 Pt+10<br>공통：<br>체력-35~-15<br>랜덤으로 『마장 상태 및 출장 레이스장과 관계있는 스킬』 힌트 획득`]},
{createDate:`2022-11-17`, character:`모든 캐릭터`, eventType:`chara`, cardName: null, title: `몸조심!`, choice: [`위 선택지`, `아래 선택지`], effect: [`컨디션 하락<br>직전에 한 트레이닝에 따른 스테이터스-5<br>랜덤으로 <span class='condition-info'>훈련 미숙</span> 획득`, `컨디션 하락<br>직전에 한 트레이닝에 따른 스테이터스-10<br>랜덤으로 <span class='condition-info'>훈련 미숙</span> 또는 <span class='condition-info'>훈련 능숙○</span> 획득`]},
{createDate:`2022-11-17`, character:`모든 캐릭터`, eventType:`chara`, cardName: null, title: `무리는 금물!`, choice: [`위 선택지`, `아래 선택지`], effect: [`체력+10<br>컨디션 3단계 하락<br>직전에 한 트레이닝에 따른 스테이터스-10<br>5개 스테이터스 중 랜덤으로 2개-10<br>랜덤으로 <span class='condition-info'>훈련 미숙</span> 획득`, `컨디션 3단계 하락<br>직전에 한 트레이닝에 따른 스테이터스-10<br>5개 스테이터스 중 랜덤으로 2개-10<br>랜덤으로 <span class='condition-info'>훈련 미숙</span> 또는 <span class='condition-info'>훈련 능숙○</span> 획득<br>체력+10`]},
{createDate:`2022-11-17`, character:`모든 캐릭터`, eventType:`chara`, cardName: null, title: `다음번엔 지지 않아!`, choice: [`위 선택지`, `아래 선택지`], effect: [`컨디션 상승<br>스킬 Pt+10`, `스킬 Pt+10<br>랜덤으로 마이너스 스킬을 획득<br><span class='skill-info'>[일반] 복병○</span> 힌트 LV+1`]},
{createDate:`2022-11-17`, character:`모든 캐릭터`, eventType:`chara`, cardName: null, title: `추가 자율 트레이닝`, choice: [`위 선택지`, `아래 선택지`], effect: [`체력-5<br>직전에 한 트레이닝에 따른 스테이터스+5<br>시나리오에 따른 NPC의 우정도+5<br>URA 아키카와 이사장<br>아오하루 오토나시 기자`, `체력+5`]},



{createDate:`2022-08-13`, character:`안심자와 사사미`, eventType:`scenario`, cardName: null, title: `안심~ 세침사 등☆장`, choice: [`강한 우마무스메가 되는 혈을 찌른다`, `레이스에서 이기는 혈을 찌른다`, `힘이 넘치고 건강해지는 혈을 찌른다`, `매력이 커지는 혈을 찌른다`, `불안하니까 포기한다`], effect: [`성공시(약 20%) :<br>5개 스테이터스+20<br><br>실패시(약 80%) :<br>컨디션 하락<br>5개 스테이터스-15<br><span class='condition-info'>밤샘 습관</span> 상태 획득`, `성공시(약 50%) :<br><span class="skill-info">[일반] 코너 회복○</span> 즉시 획득<br><span class="skill-info">[일반] 직선 회복</span> 즉시 획득<br><br>실패시(약 50%) :<br>체력-20<br>컨디션 하락`, `성공시(약 70%) :<br>체력 최대치+12<br>체력+40<br>배드 컨디션 회복<br><br>실패시(약 30%):<br>체력-20<br>컨디션 하락<br><span class='condition-info'>훈련 미숙</span> 상태 획득`, `성공시(약 90%) :<br>체력+20<br>컨디션 상승<br><span class='condition-info'>애교○</span>상태가 된다<br><br>실패시(약 10%):<br>체력-10<br>컨디션 하락`, `체력+10`]},
{createDate:`2022-08-13`, character:`아키카와 야요이`, eventType:`scenario`, cardName: null, title: `좋은 표정이로다!`, choice: [`그럼 새 훈련 도구를 부탁해도 될까요?`, `그럼 당근을 나눠주실 수 있나요?`, `선택지 없는 경우`], effect: [`체력-10<br>파워+20<br>근성+20<br><span class='skill-info'>[레어] 한줄기 질풍</span> 힌트 LV+1`, `체력+30<br>스태미나+20<br><span class='skill-info'>[레어] 호전일식</span> 힌트 LV+1`, `컨디션 하락`]},
{createDate:`2022-08-13`, character:`오토나시 에츠코`, eventType:`scenario`, cardName: null, title: `트레이너 수준의 지식`, choice: [`파워가 과제입니다만….`, `스피드가 과제입니다만….`], effect: [`파워+10<br>오토나시 기자의 우정도+5`, `스피드+10<br>오토나시 기자의 우정도+5`]},
{createDate:`2022-08-13`, character:`오토나시 에츠코`, eventType:`scenario`, cardName: null, title: `오토나시 기자의 철저한 취재`, choice: [`현재 상황을 진지하게 받아들이겠습니다.`, `이대로 밀고 나가겠습니다!!`], effect: [`성공 시 :<br>체력-15<br>컨디션 상승<br>5개 스테이터스 중 랜덤으로 1개+0~4<br>스킬 Pt+10~25<br>오토나시 기자의 우정도  (※상승치는 출주 레이스에 따라 변동)+15<br>실패시：<br>체력-25<br>컨디션 하락<br>스킬 Pt+10~30<br>5개 스테이터스 중 랜덤으로 1개+0~4<br>오토나시 기자의 우정도  (※상승치는 출주 레이스에 따라 변동)-10<br>소심한 성격 획득`, `체력-30~-15<br>5개 스테이터스 중 랜덤으로 1개+0~4<br>스킬 Pt+10~25<br>오토나시 기자의 우정도 상승  (※상승치는 출주 레이스에 따라 변동)`]},
{createDate:`2022-08-13`, character:`오토나시 에츠코`, eventType:`scenario`, cardName: null, title: `유쾌! 밀착 취재!`, choice: [`존경스러운 이사장님입니다.`, `자주 폭주하시는 듯한….`], effect: [`스태미나+10<br>오토나시 기자의 우정도+5`, `근성+10<br>오토나시 기자의 우정도+5`]},
];