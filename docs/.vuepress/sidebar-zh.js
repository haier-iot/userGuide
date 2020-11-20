module.exports ={
    '/guide/': [
      {
        title: '设备中心',
        collapsable: false,
       // path: '/FamilyCenter/',
        children: [
                'Introduce',
          ]
      },
      {
        title: '家庭中心',
        collapsable: false,
       // path: '/FamilyCenter/',
       sidebarDepth: 1, 
        children: [
                'FamilyCenter/Introduce',
                'FamilyCenter/FamilyManageAPI',
                'FamilyCenter/FamilyManage',
                'FamilyCenter/FamilyMembersManage',
                'FamilyCenter/FamilyRoomManage',
                'FamilyCenter/FamilyDeviceManage',
                'FamilyCenter/FamilySubDataManage',
                'FamilyCenter/UserRelationship',
                'FamilyCenter/BestPractices',
          ]
      },
      {
        title: '消息中心',
        collapsable: false,
       // path: '/FamilyCenter/',
        children: [
                'Introduce',
          ]
      },

      {
        title: '场景中心',
        collapsable: false,
       // path: '/FamilyCenter/',
        children: [
                'Introduce',
          ]
      }
    ],

    '/Standard/': [
      {
        title: '接入规范',
        collapsable: false,
        children: [
           'Basic',
          'Other',
          'Question',
        ]
      }
    ],

    '/solutions/car-home-internet/': [
      {
        title: '车家互联',
        collapsable: false,
        sidebarDepth: 2, 
        children: [
           'car-home-internet',
        ]
      }
    ],

  }
 