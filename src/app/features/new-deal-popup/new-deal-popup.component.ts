import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AngularSvgIconModule, SvgIconComponent } from 'angular-svg-icon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SliderModule } from 'primeng/slider';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-new-deal-popup',
  standalone: true,
  imports: [
    AngularSvgIconModule,
    SvgIconComponent,
    IconFieldModule,
    InputIconModule,
    TranslateModule,
    SliderModule,
    FormsModule,
    ChipsModule,
    DropdownModule,
  ],
  templateUrl: './new-deal-popup.component.html',
  styleUrl: './new-deal-popup.component.scss',
})
export class NewDealPopupComponent {
  value: number = 50;
  projectData: SelectItem[];
  sourceData: SelectItem[];
  selectedCity: any;
  chipsValues: any;

  constructor(
    public __dialogRef: DynamicDialogRef,
    public translate: TranslateService
  ) {
    this.sourceData = [
      {
        label: translate.instant('popup.instagram'),
        value: 'Instagram',
        icon: 'assets/icons/Instagram.png',
      }
    ];
    this.projectData = [
      {
        label: translate.instant('popup.victoria'),
        value: 'Victoria de Mero',
        icon: 'assets/icons/Miro.png',
      },
    ];
    this.chipsValues = [
      translate.instant('popup.newDel'),
      translate.instant('popup.newDel'),
      translate.instant('popup.newDel'),
      translate.instant('popup.newDel'),
    ];
  }
}
