import { Component } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent {
  LoanCardloops=[
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp2KF7Lbb5cI6DW7HWAsmz6XIEFYR3lIiPlXL1smeIZCfZHckQD8MTv3f1_gBBbGXgmF4&usqp=CAU',
      title:'Multiple &',
      title2:'Customised offering',
      title1:'Get the best offers from top lenders based on your profile',
      img1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaf_Bx6GdRUkOHtqvZllqyT13NRTZX-FHHUw&usqp=CAU',

    },
    {
      img:'data:image/png;base64,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',
      title:'Safe & Secure',
      title1:'JS adapts the highest level cyber security thereby ensuring the privacy of applicants',
      img1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpD_y7JxYPYfR2dP64UaMYZqQA66DLV_5SMA&usqp=CAU',

    },
    {
      img:'data:image/png;base64,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',
      title:'Quick loan disbursal',
      title1:'If you fit the eligibility criteria of the lender you will get the loan at the earliest 10',
      img1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHlI8-YXGoTqVvlyaiKyvKljPUkq00muhGw&usqp=CAU',

    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLI1ScblWFNWTVofbZc_G6x5bs2bmC0Hw2Og&usqp=CAU',
      title:'5555555555',
      title2:'Assistance',
      title1:'The customer service team is one click away to serve you at any instant',
      
      img1:'data:image/png;base64,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',

    }
  ]
  images = [

    {
      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/loans/loans_home_loan_hotkey.svg?w=64&q=75',
      title: 'Home Loan'
    },
    {
      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/loans/loans_personal_loan_hotkey.svg?w=64&q=75',
      title: 'Personal Loan'
    },
    {
      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/loans/loans_creditcard_loan_hotkey.svg?w=64&q=75',
      title: 'Credit Cardx'
    },
    {
      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/loans/loans_business_loan_hotkey.svg?w=64&q=75',
      title: 'Business Loan'
    },
    {
      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/loans/loans_car_loan_hotkey.svg?w=64&q=75',
      title: 'Car Loan'
    },
    {
      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/loans/loans_twowheeler_loan_hotkey.svg?w=64&q=75',
      title: 'Two Wheeler Loan'
    },
    {
      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/loans/gold-loan.svg?w=64&q=75',
      title: 'Gold Loan'
    },
    {
      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/loans/Mortgageloan.svg?w=64&q=75',
      title: 'Mortgage Loan'
    },
    {
      img: 'https://akam.cdn.jdmagicbox.com/images/icontent/loans/loans_education_loan_hotkey.svg?w=64&q=75',
      title: 'Education Loan'
    },
  ]
  cp = [
    {
      title: '1. What different types of loans can be availed online?',
      Des: 'The various types of loans which can be availed online are car loans, personal loans, home loans, two-wheeler loans, business loans, education loans, shopping loans, credit cards, etc.'
    },
    {
      title: '2. What is the difference between a secured and unsecured loan?',
      Des: 'Secured loans need collateral in which the applicant has to pledge an asset as security so that the lender has some means to get back their money. Unsecured loans do not need collateral. The money is lent based on the credit score and past associations of the applicant.'
    },
    {
      title: '3. How to avail of a loan online?',
      Des: 'You have to check your eligibility, select a loan that serves your needs, fill up the application form, submit the needed documents and finally get funds in the bank account.'
    },
    {
      title: '4. What factors determine the eligibility for a loan?',
      Des: 'Some of the factors that determine the eligibility of an individual for a loan are the individuals age, the monthly income of the person, years of employment, etc.'
    },
    {
      title: '5. What are the advantages of an online loan application?',
      Des: 'Some of the major advantages of online loan applications are convenience, simple application, speedy approval, comprehensive loan information, no physical submission, low-interest rates, minimal documentation, and quick disbursal.'
    },
    {
      title: '6. Is it possible to get a personal loan instantly?',
      Des: 'People can get a personal loan almost instantly if they have an existing relationship with the bank and are pre-approved customers.'
    },
  ]
}