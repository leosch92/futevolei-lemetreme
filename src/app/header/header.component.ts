import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('futevolei-ball', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/futevolei-ball.svg'));
  }

  ngOnInit() {
  }

}
