import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VideoDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-video-details-page',
  templateUrl: 'video-details-page.html',
})
export class VideoDetailsPage {

selectedVideo: any;
Videos: Array<{title: string, imageurl:string, status:string, 
  uploadedDate:string, videoDesc:string,YoutubeLink:string, BitlyLink:string, CloudLink:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedVideo = navParams.get('video');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoDetailsPage');
  }

}
