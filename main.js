let getElement = node => `<li>${node.childs ? `

    <span id=#burg>${node.label}</span>
    <ul class="menu" id="tree">${node.childs.map(getElement).join('')}</ul>
  
  ` : node.label}</li>`;
    
    let tree = {
      label: 'Биология',
      childs: [
      {label: 'Животные',
        childs: [
          {label: 'Травоядные',
            childs: [
              {label: 'Коровы'},
              {label: 'Ослы'},
              {label: 'Лошади'},
              {label: 'Зебры'},
            ]
          },
          {label: 'Хищные',
            childs: [
              {label: 'Львы'},
              {label: 'Тигры'},
              {label: 'Леопарды'},
              {label: 'Волки (В цирке не выступают)'},
            ]
          },
          {label:'Другие',
            childs: [
              {label: 'Змеи'},
              {label: 'Птицы'},
              {label: 'Ящерицы'},
            ]
          }
        ]
      },
      {label: 'Рыбы',
        childs: [
          {label: 'Аквариумные',
            childs: [
              {label: 'Гупи'},
              {label: 'Скалярии'},
              {label: 'Расбора Хенгеля'},
            ]
          },
          {label: 'Морские',
            childs: [
              {label: 'Морская форель'},
              {label: 'Тунец'},
              {label: 'Ментай'},
            ]
          }
        ]
      }
    ]
  };
    
    document.querySelector('.tree-view').innerHTML = getElement(tree);
    
    console.log('Информация о дереве');
    console.log(document.getElementById('tree'));