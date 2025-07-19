import { Component } from '@angular/core';
import { SecBody } from './sec-body/sec-body';

@Component({
  selector: 'app-main-body',
  imports: [SecBody],
  templateUrl: './main-body.html',
  styleUrl: './main-body.scss',
})
export class MainBody {}
