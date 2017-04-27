import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

Projects: Array<{title: string, imageurl:string}>;

  constructor(public navCtrl: NavController) {

    this.Projects = [
          { title: 'Thor', imageurl:'assets/image/movie/thor.jpg' },
          { title: 'Power Rangers', imageurl:'assets/image/movie/powerrangers.jpg' },
          { title: 'Ant Man', imageurl:'assets/image/movie/antman.jpg' },
          { title: 'Avatar', imageurl:'assets/image/movie/avatar.jpg' },
          { title: 'Justice', imageurl:'assets/image/movie/justice.jpg' },
        ];

  }

  openProjectDetails(project) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
  }

}
