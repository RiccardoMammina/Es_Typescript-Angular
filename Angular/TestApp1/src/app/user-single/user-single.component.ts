import { Component, Input, OnInit } from '@angular/core';
import { ObjectInterface } from '../models/ObjectInterface';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() user!: ObjectInterface;
  @Input() index!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
