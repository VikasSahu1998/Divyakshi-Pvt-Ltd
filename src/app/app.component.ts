import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { FromComponent } from './from/from.component';
import { JobFromComponent } from './job-from/job-from.component';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  contactForm: FormGroup | any;

  constructor(private formbuilder: FormBuilder, private api: ApiService,public dialog: MatDialog) { }




  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.nullValidator]),
      PhoneNumber: new FormControl('', [Validators.required, Validators.nullValidator]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required, Validators.nullValidator]),
      msg: new FormControl('', [Validators.required, Validators.nullValidator]),
    },
    );
  }

  adddetail() {
    if (this.contactForm.valid) {
      this.api.PostContact(this.contactForm.value)
        .subscribe({
          next: (res) => {
            alert("details added successfully");
            this.contactForm.reset();
          },
          error: () => {
            alert("Something went wrong ")
          }
        })
    }
  }




  cards = [
    {
      Title: 'WEDDING VIDEOGRAPHY',
      Description: 'Wedding videography is the art of capturing the special moments of a wedding day ina moving visual medium. A well-executed wedding video has the power to preservememories that can be cherished for a lifetime. We put you  heart into creating anamazing wedding videography for you.',
    },
    {
      Title: 'EVENT VIDEOGRAPHY',
      Description: 'We provide a wide range of videography services, including filming, editing, and post-production, to create a polished and professional video that captures theessence of an event.',
    },
    {
      Title: 'DRONE VIDEOGRAPHY BRAND',
      Description: 'Our team understands our clients goals and we aim to provide you with the bestdrone videography services.',
    },
    {
      Title: 'PROMOTIONAL VIDEOS',
      Description: 'Our company provides promotional videography services that specializes in creatingvideos that highlight your business unique selling points and effectivelycommunicate their brand message.',
    },
    {
      Title: 'WEBSEMINARS VIDEOGRAPHY',
      Description: 'We produce high-quality video content for webinars that will help your business toincrease its reach and target audience',
    },
    {
      Title: ' AWARENESS VIDEOS',
      Description: 'Our company provides brand awareness video services specializes in creating videos that are tailored to meet the specific needs and goals of your business.',
    }
  ]
  cards1 = [
    {
      image: '/assets/wedding.jpeg',
      Title: 'WEDDING PHOTOGRAPHY',
      Description: 'We specialize in capturing the memories of our client special day. We will ask youfor your preferences for photography styles, and the specific details of the weddingday schedule and give you the best outcome of our work.',
    },
    {
      image: '/assets/fashion.jpeg',
      Title: 'FASHION PHOTOGRAPHY',
      Description: 'We have a unique set of skills, knowledge, and expertise. We capture the beauty andart of fashion, clothing, and accessories in a way that showcases their uniquequalities and designs that you would love.',
    },
    {
      image: '/assets/travel.jpeg',
      Title: 'TRAVEL PHOTOGRAPHY',
      Description: 'Travelling is somethig we all love a lot. And to capture theses beautiful moments, wecombine are skills and dedication to make our clients cherish their love for travelling',},
    {
      image: '/assets/lifestyle.jpeg',
      Title: 'LIFESTYLE PHOTOGRAPHY',
      Description: 'We captures candid, unposed moments that reflect the personality and lifestyle of the subject that tells a story and present it to you with our work.',
    },
    {
      image: '/assets/event.jpeg',
      Title: 'EVENT PHOTOGRAPHY',
      Description: 'We capturing images of various events such as weddings, corporate events, and social gatherings. We do high-quality photography that will make you go wow!',
    },
    {
      image: '/assets/birthday.jpeg',
      Title: 'BIRTHDAY PHOTOGRAPHY ',
      Description: 'Birthday is an important day for us and to capture those important moment is our work. We capture those heartfelt moments with our heart. ',
    }
  ]


  designing = [
    {
      Title: 'LOGO DESIGN ',
      Description: 'Logo design is a critical component of branding and is essential for all kinds of businesses and to give your business a face, we designs logos for your business.',
    },
    {
      Title: 'BUSINESS CARD DESIGN ',
      Description: 'Our business card design service specializes in creating unique and professional business cards that represent your brand and leave a lasting impression.',
    },
    {
      Title: 'WEDDING CARD DESIGN ',
      Description: 'We create unique and creative wedding cards with the help of our creative team.',
    },
    {
      Title: 'BROCHURE DESIGN',
      Description: 'We create attractive and wonderful brochure desings that would attract audiences toward your business.',
    },
    {
      Title: 'NEWSPAPER AND MAGAZINE ADVERTISEMENTS',
      Description: 'We create attractive newspaper and magazine ads that will surely attract the targeted audiences ',
    },
    {
      Title: 'SOCIAL MEDIA GRAPHICS',
      Description: 'Creating Unique and stylish social media graphics for your social media handles.',
    },
    {
      Title: 'DIGITAL ADVERTISEMENTS',
      Description: 'We help you market your business through various social media channels which will make your business reach to a large number of audiences. ',
    },
    {
      Title: 'EMAIL MARKETING TEMPLATES',
      Description: 'We customize email templates that will best suit your business to make it look professional and attractive Catalogs',
    },
    {
      Title: 'CATALOGS',
      Description: 'We create a systematic catalogue that will contain all the information that you would want us to carry in your catalogs with the touch of creativity.',
    },
    {
      Title: 'CORPORATE DESIGN',
      Description: 'Corporate Designs are the visual and linguistic staging of the brand and we offer this service for the clients who are seeking for amazing corporate designs.',
    },
    {
      Title: 'PRODUCT DESIGNER',
      Description: 'We design products according to the niche and give it a royal touch and make it look unique.Web Page Design',
    },
    {
      Title: 'WEB PAGE DESIGN',
      Description: 'Our web design team creates attractive and user-friendly designs with variety of themes that will attract customers to your site.',
    }
  ]


  AboutPage = [
    {
      Title: 'About page',
      Description: 'We are one of the top wedding photographer & Videographer  in Northeast India including Jharkhand and Bihar Weddings are a time of customs, rituals and important events as well as a journey of discovery and the start of a new partnership. To capture these moments something beautiful and timeless is needed. With our professional  photographer & Videographer Divyakshi will create lovely memories that will last forever',
      Description1: 'Name: DilRanjan Saw',
      Description2: 'Age: 30',
      Description3: 'Occupation: Professional Photographer, videographer, Graphic Designer',
      
    }
  ]


  // loop = [
  //   {
  //     img: "/assets/wed3.jpg",
  //     head1: "HIRE PROFESSIONAL PHOTOGRAPHER",
  //     head2: "EVERYTIME EVERYWHERE ",
  //     li: "Wedding Photography",
  //     li1: "Fashion Photography",
  //     li2: "Travel Photography",
  //     li3: "Lifestyle Photography",
  //     btn:"Book Now"
  //   },
  //   {
  //     img: "/assets/wedd.jpg",
  //     head1: "HIRE  VIDEOGRAPHER EVERYTIME",
  //     head2: " EVERYWHERE WEDDING VIDEOGRAPHY",
  //     li: "EVENT VIDEOGRAPHY",
  //     li1: "BRAND AWARENESS VIDEOS",
  //     li2: "PROMOTIONAL VIDEOS",
  //     li3: "WEBINARS",
  //     li4: "DRONE VIDEOGRAPHY",
  //     btn:"Book Now"
  //   },
  //   {
  //     img: "/assets/designer.jpeg",
  //     head1: "HIRE PROFESSIONAL DESIGNER",
  //     head2: "EVERYTIME EVERYWHERE",
  //     li: "LOGO DESIGN",
  //     li1: "BUSINESS CARD DESIGN",
  //     li2: "WEDDING CARD DESIGN",
  //     li3: "WEB PAGE DESIGN",
  //     li4: "PRODUCT DESIGNER",
  //     btn:"Book Now"
  //   },
  // ]


  openDialog() {
    this.dialog.open(FromComponent, {
      width: 'auto',
    }).afterClosed()
  }


  openDialogJobFrom() {
    this.dialog.open(JobFromComponent, {
      width: 'auto',
    }).afterClosed()
  }
}

