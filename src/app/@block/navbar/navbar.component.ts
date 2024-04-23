import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import {
  DialogService,
  DynamicDialogModule,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { NewDealPopupComponent } from '../../features/new-deal-popup/new-deal-popup.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

export enum Language {
  Arabic = 'ar',
  English = 'en',
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule, DynamicDialogModule, CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [DialogService],
})
export class NavbarComponent {
  ref: DynamicDialogRef | undefined;
  lang!: string;

  constructor(
    private dialogService: DialogService,
    public translate: TranslateService
  ) {
    (this.lang = localStorage.getItem('lang') || 'en'),
      this.translate.use(this.lang);
    document.documentElement.dir = this.lang == 'en' ? 'ltr' : 'rtl';
  }

  changeLang(language: string) {
    this.translate.use(language);
    localStorage.setItem('lang', language);
    window.location.reload();
  }


  show() {
    this.ref = this.dialogService.open(NewDealPopupComponent, {
      width: '58vw',
      height: '90vh',
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
      showHeader: false,
    });
  }
}
