import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1><img src = "http://drive.google.com/uc?export=view&id=1-2pZTvPBDFjiz0S8N5LYJKIQ4NU_-x75" width="350" height="350"></h1>
  `,
})
export class App {
  name = 'All Aire';
}


bootstrapApplication(App);
