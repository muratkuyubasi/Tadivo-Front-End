import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { GalleryService } from '../../services/gallery.service';
import { GalleryModel } from '../../models/galleryModel';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-gallery-page',
    templateUrl: './gallery-page.component.html',
    styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {
    path = environment.serverUrl;

    public _album = [];
   public galleryModel:GalleryModel
    constructor(public _lightbox: Lightbox, private galleryService:GalleryService) {
       
    }

    ngOnInit(): void {
        this.galleryGeneralList();
    }

     galleryGeneralList(){
        this.galleryService.getList().subscribe(data => {
            this.galleryModel = data;
            for (let i = 1; i <= 9; i++) {
                const src = this.path+'/WebImages/Galleries/' + this.galleryModel[i].imagePath;
                const caption = this.galleryModel[i].order;
                const thumb = this.path+'/WebImages/Galleries/' + this.galleryModel[i].imagePath;
                const album = {
                    src: src,
                    caption: caption,
                    thumb: thumb
                };
                this._album.push(album);
            }
            // console.log("Resimler",this.galleryModel)
        })
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