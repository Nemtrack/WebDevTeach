import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styles: `.online {
    color: white;
  }`,
})
export class AppComponent {

  serverStatus = 'offline';
  previousServerStatus = 'online';
  showLegjobbRapper = false;
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
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
