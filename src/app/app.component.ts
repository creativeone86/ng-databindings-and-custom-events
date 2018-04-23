import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public serverElements = [
    {
      type: 'server',
      name: 'My server',
      content: 'My server description'
    }
  ];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(bluePrintData: { bluePrintName: string, bluePrintContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.bluePrintName,
      content: bluePrintData.bluePrintContent
    })
  }

}
