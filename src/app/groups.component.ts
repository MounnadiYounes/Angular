import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import { Group } from './group';
import { GroupService } from './group.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-my-groups',
  templateUrl: './groups.component.html',
  styleUrls: [ './groups.component.css' ]
})

export class GroupsComponent implements OnInit {
  groups: Group[];
  @ViewChild('groupName') groupName: ElementRef;
  @ViewChild('user') user: ElementRef;
  @ViewChild('id1') id1: ElementRef;
  @ViewChild('id2') id2: ElementRef;
  @ViewChild('id3') id3: ElementRef;
  @ViewChild('id4') id4: ElementRef;

  // dependency injection
  constructor(private groupService: GroupService) {
  }

  // Call subscribe() to start listening for updates
  getGroups(): void {
    // polling
    timer(0, 2500)
      .subscribe(() => {
        this.groupService.getGroups()
            .subscribe(data => this.groups = data);
    });
  }

  ngOnInit(): void {
    this.getGroups();
  }

  addGroup(): void {
    // tslint:disable-next-line:max-line-length
    this.groupService.addGroup(this.groupName.nativeElement.value, this.user.nativeElement.value, this.id1.nativeElement.value, this.id2.nativeElement.value, this.id3.nativeElement.value, this.id4.nativeElement.value).subscribe();
  }
  removeGroup(name: string): void {
    this.groupService.removeGroup(name).subscribe();
}
}
