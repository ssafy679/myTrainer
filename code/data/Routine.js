module.exports = [ //Routine Table
    //Start of 아침 루틴
  {
    rName: "아침",
    rNo: "R01",
    rTime: "아침",
    rDesc: "아침에 침대에서 일어나기 전에 누워서 하기 좋은 운동입니다.",
    rEffect: "코어 근육을 깨워 처져있는 몸에 활력을 불어넣어 줍니다.",
    formula: [
      {tNo: "T04"
      ,multiple: "1"
      ,seq: ["1","0"]},
      {tNo: "T11"
      ,multiple: "0.5"
      ,seq: ["1","0"]},
      {tNo: "T08"
      ,multiple: "0.5"
      ,seq: ["1","0"]},
    ],
    keywords: "아침,피곤,잠깨기,잠깨,잠깨는,잠에서깨는,침대에서,침대에서하기좋은,침대에서할수있는,누워서,누워서하기좋은,누운채로",
  },
  //End of 아침 루틴
  //Start of 점심 루틴
  {
    rName: "점심",
    rNo: "R02",
    rTime: "점심",
    rDesc: "점심에 노곤한 몸을 깨워주는 운동입니다.",
    rEffect: "밥먹고 난 후 소화에 도움을 주고, 노곤한 몸에 활기를 불어넣어 줍니다.",
    formula: [
      {tNo: "T19"
      ,multiple: "0.5"
      ,seq: ["2","0"]},
      {tNo: "T14"
      ,multiple: "1"
      ,seq: ["2","1"]},
    ],
    keywords: "점심먹고,점심,소화,밥먹고하기좋은,밥먹고,소화에좋은,소화시키기,졸릴때,잠올때,졸린시간에,소화잘되는,잠오는시간에",
  },
  //End of 아침 루틴
  {
    rName: "하루20분전신운동",
    rNo: "R03",
    rTime: "점심,아침",
    rDesc: "매일매일 20분씩 투자해서 건강을 유지하자!",
    rEffect: "만성피로가 해결되고 혈액순환에 도움을 줍니다.",
    formula: [
      {tNo: "T01"
      ,multiple: "1"
      ,seq: ["1","0"]},
      {tNo: "T05"
      ,multiple: "1"
      ,seq: ["1","0"]},
      {tNo: "T19"
      ,multiple: "1"
      ,seq: ["1","0"]},
    ],
    keywords: "전신운동,20분,전신,온몸,온몸운동,20분동안,자기전에",
  },
  {
    rName: "SLP챌린지",
    rNo: "R04",
    rTime: "저녁",
    rDesc: "쉽고 간편하게 할 수 있는 한달 도전!!",
    rEffect: "체지방 제거와 코어/하체 라인 생성에 도움이 됩니다.",
    formula: [
      {tNo: "T06"
      ,multiple: "1"
      ,seq: ["4","0"]},
      {tNo: "T06"
      ,multiple: "1"
      ,seq: ["4","1"]},
      {tNo: "T06"
      ,multiple: "1"
      ,seq: ["4","2"]},
      {tNo: "T06"
      ,multiple: "1"
      ,seq: ["4","3"]},
      {tNo: "T07"
      ,multiple: "1"
      ,seq: ["4","0"]},
      {tNo: "T07"
      ,multiple: "1"
      ,seq: ["4","1"]},
      {tNo: "T07"
      ,multiple: "1"
      ,seq: ["4","2"]},
      {tNo: "T07"
      ,multiple: "1"
      ,seq: ["4","3"]},
      {tNo: "T09"
      ,multiple: "0.5"
      ,seq: ["3","0"]},
      {tNo: "T09"
      ,multiple: "1"
      ,seq: ["3","1"]},
      {tNo: "T09"
      ,multiple: "1"
      ,seq: ["3","2"]},
    ],
    keywords: "스쿼트,런지,플랭크,플스런,SPL챌린지",
  },
  {
    rName: "비키니 30일 완성",
    rNo: "R05",
    rTime: "저녁",
    rDesc: "올 여름 바다에서 비키니에 도전한다면!",
    rEffect: "복부 라인과 힙 라인을 잡아 완벽한 비키니 라인을 만들어줍니다.",
    formula: [
      {tNo: "T04"
      ,multiple: "1"
      ,seq: ["3","0"]},
      {tNo: "T11"
      ,multiple: "1"
      ,seq: ["3","0"]},
      {tNo: "T18"
      ,multiple: "1"
      ,seq: ["3","1"]},
      {tNo: "T20"
      ,multiple: "1"
      ,seq: ["3","1"]},
      {tNo: "T05"
      ,multiple: "1"
      ,seq: ["3","2"]},
      {tNo: "T16"
      ,multiple: "1"
      ,seq: ["3","2"]},
    ],
    keywords: "여름,수영장,수영복,휴가,비키니,휴가운동,여름운동,바다에서,바다로,휴가때,연휴때,건강미,건강미넘치는",
  },
  {
    rName: "30일만에 식스팩 만들기 복근운동",
    rNo: "R06",
    rTime: "저녁",
    rDesc: "슬슬 나오기 시작하는 배가 신경쓰인다면!",
    rEffect: "복부 체지방을 컨트롤 할 수 있는 유산소 운동과 복근강화 운동을 통해 식스팩을 만드는데 효과적입니다.",
    formula: [
      {tNo: "T10"
      ,multiple: "1"
      ,seq: ["4","1"]},
      {tNo: "T04"
      ,multiple: "1"
      ,seq: ["4","1"]},
      {tNo: "T13"
      ,multiple: "1"
      ,seq: ["4","1"]},
      {tNo: "T10"
      ,multiple: "1"
      ,seq: ["4","1"]},
      {tNo: "T03"
      ,multiple: "1"
      ,seq: ["4","2"]},
      {tNo: "T04"
      ,multiple: "1"
      ,seq: ["4","2"]},
      {tNo: "T13"
      ,multiple: "1"
      ,seq: ["4","2"]},
      {tNo: "T10"
      ,multiple: "1"
      ,seq: ["4","2"]},
      {tNo: "T10"
      ,multiple: "1"
      ,seq: ["4","3"]},
      {tNo: "T04"
      ,multiple: "1"
      ,seq: ["4","3"]},
      {tNo: "T13"
      ,multiple: "1"
      ,seq: ["4","3"]},
      {tNo: "T10"
      ,multiple: "1"
      ,seq: ["4","3"]},
      {tNo: "T03"
      ,multiple: "1"
      ,seq: ["4","4"]},
      {tNo: "T04"
      ,multiple: "1"
      ,seq: ["4","4"]},
      {tNo: "T13"
      ,multiple: "1"
      ,seq: ["4","4"]},
      {tNo: "T10"
      ,multiple: "1"
      ,seq: ["4","4"]},
      
    ],
    keywords: "식스팩,복근,수영복,식스팩만들기,복근만들기,복근에좋은,초콜릿복근만드는,초콜릿복근,뱃살빼는,뱃살빠지는,뱃살관리하는,코어운동,코어,코어에좋은운동,코어에좋은,코어단련",
  },
  {
    rName: "사무실에서 하기 좋은 운동",
    rNo: "R07",
    rTime: "점심",
    rDesc: "사무실 좁은 공간 안에서 조용하고 간편하게 할 수 있는 운동입니다.",
    rEffect: "앉아있을 때 약해지기 쉬운 코어, 허리, 골반 쪽 근육을 잘 잡아주는 트레이닝으로 구성되어 있습니다.",
    formula: [
      {tNo: "T02"
      ,multiple: "1"
      ,seq: ["1","0"]},
      {tNo: "T15"
      ,multiple: "1"
      ,seq: ["1","0"]},
    ],
    keywords: "의자에서,의자,사무실,좁은공간에서,사무실에서,앉아서,의자로할수있는,의자로,10분동안할수있는,10분동안,10분만에,잠깐,잠깐하기좋은,잠깐할만한,짧게할수있는,간단한운동,간단한,쉬운,하기쉬운",
  },
  {
    rName: "칼로리 태우기 최고의 운동",
    rNo: "R08",
    rTime: "저녁",
    rDesc: "최단 시간에 최대의 칼로리 태우기!",
    rEffect: "칼로리 소모가 많은 전신,하체,상체 운동으로 단시간에 높은 운동효과를 보여줍니다.",
    formula: [
      {tNo: "T01"
      ,multiple: "1"
      ,seq: ["4","0"]},
      {tNo: "T01"
      ,multiple: "1"
      ,seq: ["4","1"]},
      {tNo: "T01"
      ,multiple: "1"
      ,seq: ["4","2"]},
      {tNo: "T01"
      ,multiple: "1"
      ,seq: ["4","3"]},
      {tNo: "T05"
      ,multiple: "1"
      ,seq: ["4","0"]},
      {tNo: "T05"
      ,multiple: "1"
      ,seq: ["4","1"]},
      {tNo: "T05"
      ,multiple: "1"
      ,seq: ["4","2"]},
      {tNo: "T05"
      ,multiple: "1"
      ,seq: ["4","3"]},
      {tNo: "T10"
      ,multiple: "0.5"
      ,seq: ["3","0"]},
      {tNo: "T10"
      ,multiple: "1"
      ,seq: ["3","1"]},
      {tNo: "T10"
      ,multiple: "1"
      ,seq: ["3","2"]},
       {tNo: "T19"
      ,multiple: "9"
      ,seq: ["3","0"]},
      {tNo: "T19"
      ,multiple: "1"
      ,seq: ["3","1"]},
      {tNo: "T19"
      ,multiple: "1"
      ,seq: ["3","2"]},
    ],
    keywords: "피티 점프,버피,윗몸 일으키기,쇼트피치,칼로리태우는운동,칼로리소모가많은,살빠지는,살빼는,날씬해지는운동,날씬해지는,힘든운동,힘든,빡센,살뺄때하는,살뺄때,다이어트하는,다이어트,재밌는운동,재밌는,재미있는,신나는,힘이나는,의욕이생기는,의욕넘치는,의욕",
  },
    {
    rName: "회사에서 몰래 할 수 있는 운동",
    rNo: "R09",
    rTime: "저녁",
    rDesc: "직장 동료들에게 안들키고 할 수 있는 운동!",
    rEffect: "하체라인과 어깨, 삼두를 수시로 자극시켜 최고의 suit fit을 만들어줍니다.",
    formula: [
      {tNo: "T05"
      ,multiple: "1"
      ,seq: ["3","0"]},
      {tNo: "T12"
      ,multiple: "1"
      ,seq: ["3","0"]},
      {tNo: "T06"
      ,multiple: "1"
      ,seq: ["3","1"]},
      {tNo: "T02"
      ,multiple: "1"
      ,seq: ["3","1"]},
      {tNo: "T14"
      ,multiple: "1"
      ,seq: ["3","2"]},
      {tNo: "T17"
      ,multiple: "1"
      ,seq: ["3","2"]},
    ],
    keywords: "직장,몰래,언제어디서든,간편,핏,남자는수트핏,수트근육,직장에서,몰래할수있는,조용한운동,조용한,조용히할수있는",
  },
  {
    rName: "서서 할 수 있는 운동",
    rNo: "R10",
    rTime: "점심",
    rDesc: "눕지 않고 밖에서 서서 할 수 있는 운동들입니다.",
    rEffect: "기본적으로 코어 운동과 하체위주의 운동 중 가볍게 할 수 있는 운동입니다.",
    formula: [
      {tNo: "T01"
      ,multiple: "1"
      ,seq: ["1","0"]},
      {tNo: "T07"
      ,multiple: "1"
      ,seq: ["1","0"]},
      {tNo: "T15"
      ,multiple: "1"
      ,seq: ["1","0"]},
    ],
    keywords: "서서, 스탠딩,서서할수있는,일어서서,눕지않고,앉지않고,앉지않고할수있는,서서하는,서있는채로,일어선채로,",
  },
  {
    rName: "하체운동 루틴",
    rNo: "R11",
    rTime: "저녁",
    rDesc: "누구보다 탄탄한 하체와 완벽한 바지 핏을 원한다면!",
    rEffect: "탄탄한 하체를 만들어주는 운동. 다리 혈액순환에도 도움이 됩니다.",
    formula: [
      {tNo: "T06"
      ,multiple: "1"
      ,seq: ["3","0"]},
      {tNo: "T14"
      ,multiple: "1"
      ,seq: ["3","0"]},
      {tNo: "T19"
      ,multiple: "1"
      ,seq: ["3","0"]},
      {tNo: "T07"
      ,multiple: "1"
      ,seq: ["3","1"]},
      {tNo: "T20"
      ,multiple: "1"
      ,seq: ["3","1"]},
      {tNo: "T17"
      ,multiple: "1"
      ,seq: ["3","1"]},
       {tNo: "T22"
      ,multiple: "1"
      ,seq: ["3","2"]},
      {tNo: "T15"
      ,multiple: "1"
      ,seq: ["3","2"]},
      {tNo: "T21"
      ,multiple: "1"
      ,seq: ["3","2"]},
      
    ],
    keywords: "하체운동,하체,하체에좋은,하체근육에좋은,하체근육키우는,하체키우는,다리근육,다리근육키우는,다리근육에좋은,다리운동에좋은,다리운동,다리예뻐지는,각선미,다리가늘어지는,다리혈액순환,다리붓기빼는,다리붓기,다리붓기에좋은,하체붓기,허벅지",
  },
  {
    rName: "상체운동 루틴",
    rNo: "R12",
    rTime: "저녁",
    rDesc: "하체에 비해 상체가 빈약하다면 상체운동을!",
    rEffect: "탄탄한 상체를 만들어주는 운동",
    formula: [
      {tNo: "T09"
      ,multiple: "1"
      ,seq: ["2","1"]},
      {tNo: "T02"
      ,multiple: "1"
      ,seq: ["2","1"]},
      {tNo: "T18"
      ,multiple: "1"
      ,seq: ["2","0"]},
      {tNo: "T11"
      ,multiple: "1"
      ,seq: ["2","0"]},
    ],
    keywords: "역삼각형몸매,상체운동,상체근육키우는운동,상체근육키우는,상체근육운동,어깨운동,어깨넓어지는운동,어깨넓어지는,어깨,가슴근육,가슴운동,가슴근육운동,가슴키우는,가슴키우는운동,가슴근육키우는은동,가슴근육키우는,손목,손목에좋은,손목강화,손목에무리안가는,팔,팔두꺼워지는,어깨강화되는,팔힘세지는,팔튼튼해지는,팔뚝튼튼해지는,팔뚝두꺼워지는"
  },
  {
    rName: "무릎과 허리에 부담 안가는 근력운동",
    rNo: "R13",
    rTime: "저녁",
    rDesc: "관절이 약하거나 체중이 많이 나가는 경우 손상되기 쉬운 무릎과 허리! 뼈에 부담이 덜 가면서도 근력을 키울 수 있는 운동 루틴입니다.",
    rEffect: "허벅지 주변 근육을 천천히 단련시키고 코어 근육을 잡아 전체적인 몸의 밸런스를 잡아줍니다.",
    formula: [
      {tNo: "T11"
      ,multiple: "1"
      ,seq: ["1","0"]},
      {tNo: "T09"
      ,multiple: "1"
      ,seq: ["1","0"]},
      {tNo: "T21"
      ,multiple: "1"
      ,seq: ["1","0"]},
    ],
    keywords: "무릎운동,무릎,무릎에좋은,무릎에자극없는,무릎에편한,무릎에자극이없는,무릎에자극이안가는,무릎에부담없는,무릎에부담이없는,무릎건강,허리에좋은,허리에부담이없는,허리에부담없는,허리에자극없는,허리안아픈,무릎안아픈,허리에자극이안가는,허리건강에좋은,무릎건강에좋은,허리건강,허리통증에좋은,허리통증,무릎통증에좋은,무릎관절에좋은,무릎관절에자극이안가는,무릎관절자극없는,무릎관절에자극이없는,허리디스크에좋은,무릎에자극이가지않는"
  },
]
/*
01 피티 점프
02 벤치 딥스
02 푸쉬업
04 크런치
05 버피
06 스쿼트
07 런지
08 브릿지
09 플랭크
10 윗몸일으키기
11 사이드플랭크
12 더블 니업
13 글루트 킥백
14 와이드 스쿼트
15 스탠딩 힙 어브덕션
16 오블리크 크런치
17 사이드런지
18 니 푸쉬업
19 쇼트 피치
20 스쿼트 점핑잭
21 라잉 힙 어브덕션
22 가벼운유산소운동
 */