import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ObjectInterface } from '../models/ObjectInterface';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() user!: ObjectInterface;
  @Input() index!: number;
  @Output() removeUser = new EventEmitter<ObjectInterface>();

  userRemove(user:ObjectInterface) {
    this.removeUser.emit(user)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
