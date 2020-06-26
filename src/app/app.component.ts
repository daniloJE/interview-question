import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements = [];
  activeServerElements = [];
  newServerName = [];
  completedServerElements = [];
  newServerContent = '';
  active = '';
  index = 1;


  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent,
      active: this.active
    });
    this.index = 1;
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }


  addActive(): any {
    this.activeServerElements = this.serverElements.filter((v, i, a) => a.indexOf(v) === i && v.active === 'active');
    this.index = 2;
    return this.activeServerElements;
  }
  completed(): any {
    this.completedServerElements = this.serverElements.filter((value, index, array) => array.indexOf(value) === index && value.active === 'completed');
    this.index = 4;
    return this.completedServerElements;
  }
  all(): string[]{
    this.index = 3;
    return this.serverElements;
  }

}
