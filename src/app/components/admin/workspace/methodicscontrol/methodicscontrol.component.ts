import { Component, OnInit } from '@angular/core';
import {DescriptionMethodics} from '../../../../domain/methodics/descriptionMethodics';

@Component({
  selector: 'app-methodicscontrol',
  templateUrl: './methodicscontrol.component.html',
  styleUrls: ['./methodicscontrol.component.css']
})
export class MethodicscontrolComponent implements OnInit {

  allMethodics: DescriptionMethodics[];
  constructor() { }

  ngOnInit() {
    this.allMethodics = [
      {
        name : 'Логики репродуктивных решений'
      },
      {
        name : 'Диагностика враждебности (по шкале Кука-Медлей)',
      },
      {
        name : 'Методика оценки эмоционального интеллекта',
      },
      {
        name : 'Методика определения уровня сексизма (женская)',
      },
      {
        name : 'Методика определения уровня сексизма (мужская)',
      }
    ];
  }

}
