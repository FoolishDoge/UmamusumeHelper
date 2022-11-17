const scenarioCondition = {
	'훈련 미숙':{ type:'bad', condition:`지능을 제외한 훈련 실패시 확률적으로 획득(위 선택지 확률 낮음, 아래 선택지 확률 높음)`, effect:`트레이닝 실패확률 +2%, 최소 실패율 1%로 고정` },
	'편두통':{ type:'bad', condition:`랜덤으로 발생하는 두통 이벤트에서 확률적으로 획득`, effect:`의욕이 상승하지 않음` },
	'피부 트러블':{ type:'bad', condition:`체력이 0일때 레이스 출주, 혹은 체력이 0이 아니더라도 3경기 이상 연속으로 출주할때 확률적으로 발생(단, 목표 레이스인 경우에는 발생하지 않는다)`, effect:`랜덤하게 의욕이 하락` },
	'밤샘 습관':{ type:'bad', condition:`휴식시에 제대로 쉬지 못한 경우(체력이 30 회복되는 경우)에 확률적으로 발생`, effect:`랜덤하게 체력 -10, 낮은 확률로 의욕도 하락` },
	'살찜 주의':{ type:'bad', condition:`식사 이벤트에서 아래쪽 선택지를 고르면 확률적으로 발생`, effect:`트레이닝시 스피드가 오르지 않음(스태미나, 파워 트레이닝시 낮은 확률로 '다이어트' 이벤트 발생하며 사라짐)` },
	'땡땡이 기질':{ type:'bad', condition:`턴 시작시 랜덤으로 발생하는 게으름 이벤트(체력 +15 / 의욕 하락 / 근성 -5)에서 확률적으로 발생`, effect:`랜덤하게 트레이닝을 건너뜀<br>아키카와 야요이 혹은 카시모토 리코의 인연치 감소 ` },
	'작은 역경':{ type:'bad', condition:`슈퍼 크릭 전용. 목표2 직후 ~ 목표3 기간 한정`, effect:`트레이닝 실패율 +5%, 최소 실패율 5% 고정` },
	'아직은 준비중':{ type:'bad', condition:`메이쇼 도토 전용. 목표1 직후 ~ 목표3 기간 한정`, effect:`레이스 출주시마다 체력 -5, 랜덤하게 의욕도 하락` },
	'유리 다리':{ type:'bad', condition:`메지로 아르당 전용. 데뷔전 직후 ~ 목표 9까지 지속`, effect:`2연속 출주시 레이스 출주시 체력-10, 연습에 서툼 획득` },
	'훈련 능숙○':{ type:'good', condition:`키타산 블랙, 파인 모션 서포트 카드 등에서 획득`, effect:`트레이닝 실패율 -2%` },
	'애교○':{ type:'good', condition:`니시노 플라워, 스윕 토쇼 서포트 카드 등에서 획득<br>랜덤 발생하는 안심자와 사사미 이벤트에서 '매력이 커지는 혈' 선택지를 골라 획득`, effect:`서포트 우마무스메 및 하야카와 타즈나와 키류인 아오이의 인연 게이지 획득량 증가` },
	'수완가':{ type:'good', condition:`육성 중 각성 이벤트에서 매우 낮은 확률로 획득<br>마야노 탑건의 경우 '마야의 연애상담' 이벤트 발생 시점에서 지능이 500을 넘으면 확정적으로 획득하는 것이 확인되었음. 다른 캐릭터의 경우에도 이런 조건이 있을 것으로 예상됨.`, effect:`스킬 습득에 필요한 Pt 10% 감소` },
	'주목받는 신예':{ type:'good', condition:`다이타쿠 헬리오스 서포트 카드 등에서 획득`, effect:`아키카와 야요이 이사장, 카시모토 리코 이사장 대리, 오토나시 에츠코 기자의 인연 게이지 획득량 증가` },
	'커다란 빛':{ type:'good', condition:`슈퍼 크릭 전용. 목표3 이후`, effect:`트레이닝 실패율 감소` },
	'훈련 능숙◎':{ type:'good', condition:`나리타 타이신 육성 중 목표5에서 강제적으로 걸린 훈련 미숙 배드컨디션을 미리 해제해둘 경우 목표6 이후 획득`, effect:`트레이닝 실패율 -4%` },
	'팬과의 약속':{ type:'good', condition:`스마트 팔콘 전용`, effect:`해당 지역의 레이스를 승리시 단 한번 보상 획득` },
	'정열 존':{ type:'good', condition:`그룹 서포터 전용. 랜덤 턴이 지나면 집중력 구분(集中力の区切り)이라는 이벤트로 해제된다.`, effect:`(그룹 카드)와 우정 트레이닝 가능<br>배드 컨디션 '밤샘 습관', '떙떙이 기질' 무효<br>해당 그룹 카드와 외출이 가능해진다.(턴 제한 존재)` }
};