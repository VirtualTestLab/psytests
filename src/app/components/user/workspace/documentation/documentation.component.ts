import { Component, OnInit } from '@angular/core';
import {FileDescription} from './filedescription';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  files: FileDescription[] = [
    { downloadUrl: 'http://www.axmag.com/download/pdfurl-guide.pdf',
      expansion: 'pdf',
      name: 'Соглашение сторон.pdf',
      description: 'Документ, описывающий основные права и обязанности сторон'
    },
    { downloadUrl: 'http://oochechersk.gov.by/sites/default/files/procedura_provedeniya_i_pravila_povedeniya_uchastnika_.doc',
      expansion: 'word',
      name: 'Согласие на обработку данных.doc',
      description: 'Согласие на обработку персональных данных'
    },
    { downloadUrl: 'http://oochechersk.gov.by/sites/default/files/procedura_provedeniya_i_pravila_povedeniya_uchastnika_.doc',
      expansion: 'archive',
      name: 'Порядок предосталения услуг.doc',
      description: 'Порядок предоставления услуг'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
