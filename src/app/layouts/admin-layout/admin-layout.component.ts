import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  showFiller = false;
  title;
  sidenavWidth = 4;
  constructor(titleService: Title, public router: Router, public activatedRoute: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title = this.getTitle(router.routerState, router.routerState.root).join('-');
        titleService.setTitle(this.title);
      }
    });
  }
  hasChild = (_: number, node: FlatNode) => node.expandable;
  ngOnInit() {

  }
  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
  increase() {
    this.sidenavWidth = 18;
  }
  decrease() {
    this.sidenavWidth = 4;
  }

}

