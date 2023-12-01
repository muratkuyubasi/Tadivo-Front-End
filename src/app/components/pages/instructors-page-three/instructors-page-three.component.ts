import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GalleryModel } from '../../models/galleryModel';
import { Lightbox } from 'ngx-lightbox';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-instructors-page-three',
  templateUrl: './instructors-page-three.component.html',
  styleUrls: ['./instructors-page-three.component.scss']
})
export class InstructorsPageThreeComponent implements OnInit {

  path = environment.serverUrl;

  ngOnInit(): void {
  }

  public _album = [];
  constructor(public _lightbox: Lightbox) {
      for (let i = 1; i <= 6; i++) {
          const src = 'assets/img/gallery/gallery' + i + '.jpg';
          const caption = 'Image ' + i;
          const thumb = 'assets/img/gallery/gallery' + i + '.jpg';
          const album = {
              src: src,
              caption: caption,
              thumb: thumb
          };
          this._album.push(album);
      }
  }

  open(index: number): void {
      // open lightbox
      this._lightbox.open(this._album, index);
  }
  
  close(): void {
      // close lightbox programmatically
      this._lightbox.close();
  }

}