import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommunicationForm } from '../../models/communicationForm';
import { ContactService } from '../../services/contact.service';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
    form!: FormGroup;

    constructor(private contactService:ContactService,private formBuilder: FormBuilder) { }
    
    ngOnInit(): void {
        this.communicationForm();
    }
    //İletişim Form
    communicationForm() {
        this.form = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', Validators.compose([Validators.required, Validators.email])],
          subject: ['', Validators.required],
          message: ['', Validators.required],
          phone:['', Validators.required]
        })
      }
    submitForm() {
        // console.log(this.form)
        if (this.form.valid) {   
          const communicationForm: CommunicationForm = Object.assign(this.form.value);
          Swal.fire({
            title: 'Talebiniz gönderilsin mi?',
            showDenyButton: true, 
            confirmButtonText: 'Evet',confirmButtonColor:"#238dc1",
            denyButtonText: `Hayır`, denyButtonColor:"#b47f00",
          }).then((response) => {
            if (response.isConfirmed) {
              this.contactService.contactSend(communicationForm).subscribe((data: any) => {
                if (data) {
                  Swal.fire({
                    title: 'Başarılı',
                    text: 'İletişim talebiniz alınmıştır...',
                    icon: 'success',iconColor:"#89dc65",
                    confirmButtonText: 'Tamam',  confirmButtonColor:"#89dc65" ,
                   }  ).then(function (result) {
                    if (result.value) {
                      window.location.href = 'contact';
                    }
                   })
                }
              }); 
            } 
          } );
        } else {
          Swal.fire({
            title: 'İletişim bilgilerini doldurun',
            icon: 'warning',iconColor:"#d4c201",
            confirmButtonText: 'Tamam', confirmButtonColor:"#89dc65",
           }  )
        }
      }
    // submit(form){
    //     var name = form.name;
        
    //     var email = form.email;

    //     var number = form.number;
        
    //     var subject = form.subject;
        
    //     var message = form.message;
    // }
}