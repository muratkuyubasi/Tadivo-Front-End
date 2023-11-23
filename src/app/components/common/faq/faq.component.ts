import { Component, OnInit } from '@angular/core';
import lgVideo from 'lightgallery/plugins/video';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { FaqService } from '../../services/faq.service';
import { FaqModel } from '../../models/faqModel';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

    faqModel:FaqModel;

    constructor(private faqService:FaqService) { }

    ngOnInit(): void {
        this.faqlist();
    }
    settings = {
        counter: false,
        plugins: [lgVideo]
    };
  
    faqlist() {
        this.faqService.getList().subscribe(data => {
            this.faqModel = data;
            // console.log("Sık Sorulan Sorular",this.faqModel)
        })
    }
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };
    selectedItem = null;
    toggleAccordionItem(item) {
        item.open = !item.open;
        if (this.selectedItem && this.selectedItem !== item) {
            this.selectedItem.open = false;
        }
        this.selectedItem = item;
    }

}