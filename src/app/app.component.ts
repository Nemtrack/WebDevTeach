import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styles: `.online {
    color: white;
  }`,
})
export class AppComponent {

  serverStatus = 'offline';
  previousServerStatus = 'online';
  showLegjobbRapper = false;
  newRapper = '';
  worstRappers: string[] = [];
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  onAddNewRapper(){
    this.worstRappers.push(this.newRapper);
  }

  onSwitchServer() {
    if (this.serverStatus === 'offline') {
      this.serverStatus = 'online';
      this.previousServerStatus = 'offline';
      this.showLegjobbRapper = true;
    } else {
      this.serverStatus = 'offline';
      this.previousServerStatus = 'online';
      this.showLegjobbRapper = false;
    }
  }
}
