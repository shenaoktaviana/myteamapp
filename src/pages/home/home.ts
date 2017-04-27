import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoDetailsPage } from '../video-details-page/video-details-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

Videos: Array<{title: string, imageurl:string, status:string, 
  uploadedDate:string, videoDesc:string,YoutubeLink:string, BitlyLink:string, CloudLink:string}>;

  constructor(public navCtrl: NavController) {

    this.Videos = [
          { 
            title: 'Thor (Movie)', 
            imageurl:'assets/image/movie/thor.jpg', 
            status:'Uploaded', 
            uploadedDate:'01 Jan 2017',
            videoDesc:'Film "Powers Rangers" akan menceritakan tentang asal mula Mighty Morphin Power Ranges. Dikisahkan sekelompok remaja yang mendapatkan kekuatan super sebagai pahlawan super. Dengan kekuatan itu, mereka diminta oleh Zorgon untuk menyelamatkan dunia dari alien jahat bernama Rita.',
            YoutubeLink:'www.youtube.com/thor',
            BitlyLink:'bit.ly/thor',
            CloudLink:'www.dropbox.com/thor'
          },
          { 
            title: 'Power Rangers (Movie)', 
            imageurl:'assets/image/movie/powerrangers.jpg', 
            status:'On Progress', 
            uploadedDate:'01 Jan 2017',
            videoDesc:'Film "Powers Rangers" akan menceritakan tentang asal mula Mighty Morphin Power Ranges. Dikisahkan sekelompok remaja yang mendapatkan kekuatan super sebagai pahlawan super. Dengan kekuatan itu, mereka diminta oleh Zorgon untuk menyelamatkan dunia dari alien jahat bernama Rita.' ,
            YoutubeLink:'www.youtube.com/powerrangers',
            BitlyLink:'bit.ly/powerrangers',
            CloudLink:'www.dropbox.com/powerrangers'
          },
          { 
            title: 'Ant Man (Movie)', 
            imageurl:'assets/image/movie/antman.jpg', 
            status:'On Progress', 
            uploadedDate:'01 Jan 2017' ,
            videoDesc:'Film "Powers Rangers" akan menceritakan tentang asal mula Mighty Morphin Power Ranges. Dikisahkan sekelompok remaja yang mendapatkan kekuatan super sebagai pahlawan super. Dengan kekuatan itu, mereka diminta oleh Zorgon untuk menyelamatkan dunia dari alien jahat bernama Rita.',
            YoutubeLink:'www.youtube.com/antman',
            BitlyLink:'bit.ly/antman',
            CloudLink:'www.dropbox.com/antman'
          },
          { 
            title: 'Avatar (Movie)', 
            imageurl:'assets/image/movie/avatar.jpg', 
            status:'On Progress', 
            uploadedDate:'01 Jan 2017',
            videoDesc:'Film "Powers Rangers" akan menceritakan tentang asal mula Mighty Morphin Power Ranges. Dikisahkan sekelompok remaja yang mendapatkan kekuatan super sebagai pahlawan super. Dengan kekuatan itu, mereka diminta oleh Zorgon untuk menyelamatkan dunia dari alien jahat bernama Rita.' ,
            YoutubeLink:'www.youtube.com/avatar',
            BitlyLink:'bit.ly/avatar',
            CloudLink:'www.dropbox.com/avatar'
          },
          { 
            title: 'Justice (Movie)', 
            imageurl:'assets/image/movie/justice.jpg', 
            status:'On Progress', 
            uploadedDate:'01 Jan 2017',
            videoDesc:'Film "Powers Rangers" akan menceritakan tentang asal mula Mighty Morphin Power Ranges. Dikisahkan sekelompok remaja yang mendapatkan kekuatan super sebagai pahlawan super. Dengan kekuatan itu, mereka diminta oleh Zorgon untuk menyelamatkan dunia dari alien jahat bernama Rita.' ,
            YoutubeLink:'www.youtube.com/justice',
            BitlyLink:'bit.ly/justice',
            CloudLink:'www.dropbox.com/justice'
          }
        ];

  }

  openVideoDetails(selectedVideo) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
     //this.navCtrl.setRoot(VideoDetailsPage,{video:selectedVideo});

     this.navCtrl.push(VideoDetailsPage, {video:selectedVideo});
  }

}
