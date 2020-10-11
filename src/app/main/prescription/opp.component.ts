import { FeatureService } from './../../_services/feature.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  itemList = [];
  total = 0;
  constructor(
    private rest: FeatureService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.products();
  }

  products(){
    this.rest.prescription().subscribe(
      data => {
        if (data.length === 0){
          this.router.navigate(['landing']);
        }
        this.itemList = data[0].items;
        for (const item of this.itemList ){
          this.total = this.total + item.price;
        }
        this.total = this.total + 20;
        console.log(this.itemList);
        if (typeof this.itemList === 'undefined'){
          this.router.navigate(['landing']);
        }
      });
  }

  pay(){
    const momo = require("mtn-momo");
    this.router.navigate(['momo']);
    const { Collections } = momo.create({
      callbackHost: process.env.CALLBACK_HOST
    });

    const collections = Collections({
      userSecret: process.env.COLLECTIONS_USER_SECRET,
      userId: process.env.COLLECTIONS_USER_ID,
      primaryKey: process.env.COLLECTIONS_PRIMARY_KEY
    });

    // Request to pay
    collections
      .requestToPay({
        amount: this.total.toString(),
        currency: 'ZAR',
        externalId: "123456",
        payer: {
          partyIdType: "MSISDN",
          partyId: "256774290781"
        },
        payerMessage: "testing",
        payeeNote: "hello"
      })
      .then(transactionId => {
        console.log({ transactionId });

        // Get transaction status
        return collections.getTransaction(transactionId);
      })
      .then(transaction => {
        console.log({ transaction });

        // Get account balance
        return collections.getBalance();
      })
      .then(accountBalance => console.log({ accountBalance }))
      .catch(error => {
        console.log(error);
      });
      }
  }
