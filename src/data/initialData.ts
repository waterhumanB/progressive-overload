export const initialData = {
  categories: {
    byId: {
      category1: {
        name: '맨몸운동',
      },
      category2: {
        name: '바벨',
      },
      category3: {
        name: '덤벨',
      },
      category4: {
        name: '머신',
      },
      category5: {
        name: '케이블',
      },
    },
    allIds: ['category1', 'category2', 'category3', 'category4', 'category5'],
  },
  types: {
    byId: {
      type1: {
        name: '플랫 벤치프레스',
      },
      type2: {
        name: '인클라인 벤치프레스',
      },
      type3: {
        name: '체스트 프레스',
      },
      type4: {
        name: '푸쉬업',
      },
      type5: {
        name: '딥스',
      },
      type6: {
        name: '플라이',
      },
      type7: {
        name: '랫 풀 다운',
      },
      type8: {
        name: '로우',
      },
      type9: {
        name: '시티드 로우',
      },
      type10: {
        name: '풀업',
      },
      type11: {
        name: '친업',
      },
      type12: {
        name: '컨센트레이션 컬',
      },
      type13: {
        name: '바이셉 컬',
      },
      type14: {
        name: '해머 컬',
      },
      type15: {
        name: '인클라인 컬',
      },
      type16: {
        name: '인클라인 해머 컬',
      },
      type17: {
        name: '트라이셉 익스텐션',
      },
      type18: {
        name: '트라이셉 푸시 다운',
      },
      type19: {
        name: '프론트 레이즈',
      },
      type20: {
        name: '사이드 레터럴 레이즈',
      },
      type21: {
        name: '벤트 오버 레터럴 레이즈',
      },
      type22: {
        name: '리버스 플라이',
      },
      type23: {
        name: '숄더 프레스',
      },
      type24: {
        name: '스쿼트',
      },
      type25: {
        name: '데드리프트',
      },
      type26: {
        name: '런지',
      },
      type27: {
        name: '레그 익스텐션',
      },
      type28: {
        name: '레그 컬',
      },
      type29: {
        name: '레그 프레스',
      },
      type30: {
        name: '크런치',
      },
      type31: {
        name: '싯업',
      },
      type32: {
        name: '행잉 레그 레그즈',
      },
      type33: {
        name: '리버스 크런치',
      },
      type34: {
        name: '플랭크',
      },
      type35: {
        name: 'L-싯업',
      },
      type36: {
        name: 'V-싯업',
      },
    },
    allIds: [
      'type1',
      'type2',
      'type3',
      'type4',
      'type5',
      'type6',
      'type7',
      'type8',
      'type9',
      'type10',
      'type11',
      'type12',
      'type13',
      'type14',
      'type15',
      'type16',
      'type17',
      'type18',
      'type19',
      'type20',
      'type21',
      'type22',
      'type23',
      'type24',
      'type25',
      'type26',
      'type27',
      'type28',
      'type29',
      'type30',
      'type31',
      'type32',
      'type33',
      'type34',
      'type35',
      'type36',
    ],
  },
  targets: {
    byId: {
      target1: {
        name: '가슴',
      },
      target2: {
        name: '등',
      },
      target3: {
        name: '이두',
      },
      target4: {
        name: '삼두',
      },
      target5: {
        name: '어깨',
      },
      target6: {
        name: '대퇴 사두',
      },
      target7: {
        name: '대퇴 이두',
      },
      target8: {
        name: '복근',
      },
    },
    allIds: ['target1', 'target2', 'target3', 'target4', 'target5', 'target6', 'target7', 'target8'],
  },
  routine: {
    byId: {},
    allIds: [],
  },
  exercises: {
    byId: {
      exercise1: {
        id: 'exercise1',
        typeId: 'type1',
        categoryId: 'category2',
        custom: false,
        favorite: false,
        mainTarget: 'target1',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise2: {
        id: 'exercise2',
        typeId: 'type1',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target1',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise3: {
        id: 'exercise3',
        typeId: 'type1',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target1',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise4: {
        id: 'exercise4',
        typeId: 'type2',
        categoryId: 'category2',
        custom: false,
        favorite: false,
        mainTarget: 'target1',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise5: {
        id: 'exercise5',
        typeId: 'type2',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target1',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise6: {
        id: 'exercise6',
        typeId: 'type2',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target1',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise7: {
        id: 'exercise7',
        typeId: 'type3',
        categoryId: 'category2',
        custom: false,
        favorite: false,
        mainTarget: 'target1',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise8: {
        id: 'exercise8',
        typeId: 'type3',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target1',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise9: {
        id: 'exercise9',
        typeId: 'type3',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target1',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise10: {
        id: 'exercise10',
        typeId: 'type4',
        categoryId: 'category1',
        custom: false,
        favorite: false,
        mainTarget: 'target1',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise11: {
        id: 'exercise11',
        typeId: 'type5',
        categoryId: 'category1',
        custom: false,
        favorite: false,
        mainTarget: 'target1',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise12: {
        id: 'exercise12',
        typeId: 'type5',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target1',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise13: {
        id: 'exercise13',
        typeId: 'type6',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target1',
        secondaryTarget: 'target5',
        record: [],
      },
      exercise14: {
        id: 'exercise14',
        typeId: 'type6',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target1',
        secondaryTarget: 'target5',
        record: [],
      },
      exercise15: {
        id: 'exercise15',
        typeId: 'type6',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target1',
        secondaryTarget: 'target5',
        record: [],
      },
      exercise16: {
        id: 'exercise16',
        typeId: 'type7',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target2',
        secondaryTarget: 'target3',
        record: [],
      },
      exercise17: {
        id: 'exercise17',
        typeId: 'type7',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target2',
        secondaryTarget: 'target3',
        record: [],
      },
      exercise18: {
        id: 'exercise18',
        typeId: 'type8',
        categoryId: 'category2',
        custom: false,
        favorite: false,
        mainTarget: 'target2',
        secondaryTarget: 'target3',
        record: [],
      },
      exercise19: {
        id: 'exercise19',
        typeId: 'type8',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target2',
        secondaryTarget: 'target3',
        record: [],
      },
      exercise20: {
        id: 'exercise20',
        typeId: 'type8',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target2',
        secondaryTarget: 'target3',
        record: [],
      },
      exercise21: {
        id: 'exercise21',
        typeId: 'type8',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target2',
        secondaryTarget: 'target3',
        record: [],
      },
      exercise22: {
        id: 'exercise22',
        typeId: 'type9',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target2',
        secondaryTarget: 'target3',
        record: [],
      },
      exercise23: {
        id: 'exercise23',
        typeId: 'type9',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target2',
        secondaryTarget: 'target3',
        record: [],
      },
      exercise24: {
        id: 'exercise24',
        typeId: 'type10',
        categoryId: 'category1',
        custom: false,
        favorite: false,
        mainTarget: 'target2',
        secondaryTarget: 'target3',
        record: [],
      },
      exercise25: {
        id: 'exercise25',
        typeId: 'type10',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target2',
        secondaryTarget: 'target3',
        record: [],
      },
      exercise26: {
        id: 'exercise26',
        typeId: 'type11',
        categoryId: 'category1',
        custom: false,
        favorite: false,
        mainTarget: 'target2',
        secondaryTarget: 'target3',
        record: [],
      },
      exercise27: {
        id: 'exercise27',
        typeId: 'type11',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target2',
        secondaryTarget: 'target3',
        record: [],
      },
      exercise28: {
        id: 'exercise28',
        typeId: 'type12',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise29: {
        id: 'exercise29',
        typeId: 'type12',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise30: {
        id: 'exercise30',
        typeId: 'type12',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise31: {
        id: 'exercise31',
        typeId: 'type13',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise32: {
        id: 'exercise32',
        typeId: 'type13',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise33: {
        id: 'exercise33',
        typeId: 'type13',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise34: {
        id: 'exercise34',
        typeId: 'type14',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise35: {
        id: 'exercise35',
        typeId: 'type14',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise36: {
        id: 'exercise36',
        typeId: 'type14',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise37: {
        id: 'exercise37',
        typeId: 'type15',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise38: {
        id: 'exercise38',
        typeId: 'type15',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise39: {
        id: 'exercise39',
        typeId: 'type15',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise40: {
        id: 'exercise40',
        typeId: 'type16',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise41: {
        id: 'exercise41',
        typeId: 'type16',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise42: {
        id: 'exercise42',
        typeId: 'type16',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise43: {
        id: 'exercise43',
        typeId: 'type17',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target4',
        secondaryTarget: '',
        record: [],
      },
      exercise44: {
        id: 'exercise44',
        typeId: 'type17',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target4',
        secondaryTarget: '',
        record: [],
      },
      exercise45: {
        id: 'exercise45',
        typeId: 'type17',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target3',
        secondaryTarget: '',
        record: [],
      },
      exercise46: {
        id: 'exercise46',
        typeId: 'type18',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target4',
        secondaryTarget: '',
        record: [],
      },
      exercise47: {
        id: 'exercise47',
        typeId: 'type19',
        categoryId: 'category2',
        custom: false,
        favorite: false,
        mainTarget: 'target5',
        secondaryTarget: '',
        record: [],
      },
      exercise48: {
        id: 'exercise48',
        typeId: 'type19',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target5',
        secondaryTarget: '',
        record: [],
      },
      exercise49: {
        id: 'exercise49',
        typeId: 'type19',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target5',
        secondaryTarget: '',
        record: [],
      },
      exercise50: {
        id: 'exercise50',
        typeId: 'type20',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target5',
        secondaryTarget: '',
        record: [],
      },
      exercise51: {
        id: 'exercise51',
        typeId: 'type20',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target5',
        secondaryTarget: '',
        record: [],
      },
      exercise52: {
        id: 'exercise52',
        typeId: 'type20',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target5',
        secondaryTarget: '',
        record: [],
      },
      exercise53: {
        id: 'exercise53',
        typeId: 'type21',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target5',
        secondaryTarget: '',
        record: [],
      },
      exercise54: {
        id: 'exercise54',
        typeId: 'type21',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target5',
        secondaryTarget: '',
        record: [],
      },
      exercise55: {
        id: 'exercise55',
        typeId: 'type22',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target5',
        secondaryTarget: '',
        record: [],
      },
      exercise56: {
        id: 'exercise56',
        typeId: 'type22',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target5',
        secondaryTarget: '',
        record: [],
      },
      exercise57: {
        id: 'exercise57',
        typeId: 'type23',
        categoryId: 'category2',
        custom: false,
        favorite: false,
        mainTarget: 'target5',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise58: {
        id: 'exercise58',
        typeId: 'type23',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target5',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise59: {
        id: 'exercise59',
        typeId: 'type23',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target5',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise60: {
        id: 'exercise60',
        typeId: 'type23',
        categoryId: 'category5',
        custom: false,
        favorite: false,
        mainTarget: 'target5',
        secondaryTarget: 'target4',
        record: [],
      },
      exercise61: {
        id: 'exercise61',
        typeId: 'type24',
        categoryId: 'category1',
        custom: false,
        favorite: false,
        mainTarget: 'target6',
        secondaryTarget: 'target7',
        record: [],
      },
      exercise62: {
        id: 'exercise62',
        typeId: 'type24',
        categoryId: 'category2',
        custom: false,
        favorite: false,
        mainTarget: 'target6',
        secondaryTarget: 'target7',
        record: [],
      },
      exercise63: {
        id: 'exercise63',
        typeId: 'type24',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target6',
        secondaryTarget: 'target7',
        record: [],
      },
      exercise64: {
        id: 'exercise64',
        typeId: 'type24',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target6',
        secondaryTarget: 'target7',
        record: [],
      },
      exercise65: {
        id: 'exercise65',
        typeId: 'type25',
        categoryId: 'category2',
        custom: false,
        favorite: false,
        mainTarget: 'target7',
        secondaryTarget: 'target6',
        record: [],
      },
      exercise66: {
        id: 'exercise66',
        typeId: 'type25',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target7',
        secondaryTarget: 'target6',
        record: [],
      },
      exercise67: {
        id: 'exercise67',
        typeId: 'type26',
        categoryId: 'category1',
        custom: false,
        favorite: false,
        mainTarget: 'target6',
        secondaryTarget: 'target7',
        record: [],
      },
      exercise68: {
        id: 'exercise68',
        typeId: 'type26',
        categoryId: 'category2',
        custom: false,
        favorite: false,
        mainTarget: 'target6',
        secondaryTarget: 'target7',
        record: [],
      },
      exercise69: {
        id: 'exercise69',
        typeId: 'type26',
        categoryId: 'category3',
        custom: false,
        favorite: false,
        mainTarget: 'target6',
        secondaryTarget: 'target7',
        record: [],
      },
      exercise70: {
        id: 'exercise70',
        typeId: 'type27',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target6',
        secondaryTarget: '',
        record: [],
      },
      exercise71: {
        id: 'exercise71',
        typeId: 'type28',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target7',
        secondaryTarget: '',
        record: [],
      },
      exercise72: {
        id: 'exercise72',
        typeId: 'type29',
        categoryId: 'category4',
        custom: false,
        favorite: false,
        mainTarget: 'target6',
        secondaryTarget: 'target7',
        record: [],
      },
      exercise73: {
        id: 'exercise73',
        typeId: 'type30',
        categoryId: 'category1',
        custom: false,
        favorite: false,
        mainTarget: 'target8',
        secondaryTarget: '',
        record: [],
      },
      exercise74: {
        id: 'exercise74',
        typeId: 'type31',
        categoryId: 'category1',
        custom: false,
        favorite: false,
        mainTarget: 'target8',
        secondaryTarget: '',
        record: [],
      },
      exercise75: {
        id: 'exercise75',
        typeId: 'type32',
        categoryId: 'category1',
        custom: false,
        favorite: false,
        mainTarget: 'target8',
        secondaryTarget: '',
        record: [],
      },
      exercise76: {
        id: 'exercise76',
        typeId: 'type33',
        categoryId: 'category1',
        custom: false,
        favorite: false,
        mainTarget: 'target8',
        secondaryTarget: '',
        record: [],
      },
      exercise77: {
        id: 'exercise77',
        typeId: 'type34',
        categoryId: 'category1',
        custom: false,
        favorite: false,
        mainTarget: 'target8',
        secondaryTarget: 'target5',
        record: [],
      },
      exercise78: {
        id: 'exercise78',
        typeId: 'type35',
        categoryId: 'category1',
        custom: false,
        favorite: false,
        mainTarget: 'target8',
        secondaryTarget: '',
        record: [],
      },
      exercise79: {
        id: 'exercise79',
        typeId: 'type36',
        categoryId: 'category1',
        custom: false,
        favorite: false,
        mainTarget: 'target8',
        secondaryTarget: '',
        record: [],
      },
    },
    allIds: [
      'exercise1',
      'exercise2',
      'exercise3',
      'exercise4',
      'exercise5',
      'exercise6',
      'exercise7',
      'exercise8',
      'exercise9',
      'exercise10',
      'exercise11',
      'exercise12',
      'exercise13',
      'exercise14',
      'exercise15',
      'exercise16',
      'exercise17',
      'exercise18',
      'exercise19',
      'exercise20',
      'exercise21',
      'exercise22',
      'exercise23',
      'exercise24',
      'exercise25',
      'exercise26',
      'exercise27',
      'exercise28',
      'exercise29',
      'exercise30',
      'exercise31',
      'exercise32',
      'exercise33',
      'exercise34',
      'exercise35',
      'exercise36',
      'exercise37',
      'exercise38',
      'exercise39',
      'exercise40',
      'exercise41',
      'exercise42',
      'exercise43',
      'exercise44',
      'exercise45',
      'exercise46',
      'exercise47',
      'exercise48',
      'exercise49',
      'exercise50',
      'exercise51',
      'exercise52',
      'exercise53',
      'exercise54',
      'exercise55',
      'exercise56',
      'exercise57',
      'exercise58',
      'exercise59',
      'exercise60',
      'exercise61',
      'exercise62',
      'exercise63',
      'exercise64',
      'exercise65',
      'exercise66',
      'exercise67',
      'exercise68',
      'exercise69',
      'exercise70',
      'exercise71',
      'exercise72',
      'exercise73',
      'exercise74',
      'exercise75',
      'exercise76',
      'exercise77',
      'exercise78',
      'exercise79',
    ],
  },
  records: {
    byId: {},
    allIds: [],
  },
  user: {},
}
