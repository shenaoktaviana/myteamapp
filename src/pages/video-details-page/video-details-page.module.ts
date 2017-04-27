import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoDetailsPage } from './video-details-page';

@NgModule({
  declarations: [
    VideoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoDetailsPage),
  ],
  exports: [
    VideoDetailsPage
  ]
})
export class VideoDetailsPageModule {}
