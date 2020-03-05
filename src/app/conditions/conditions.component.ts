import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ColorService } from '../color.service';
import { NgForm } from '@angular/forms';
import { ICondition, Condition } from '../model/conditions';
import { BoogService } from '../boog.service';

@Component({
  selector: 'app-conditions',
  templateUrl: '/conditions.component.html',
  styleUrls: ['/conditions.component.scss'],
})

export class ConditionsComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  blower: ICondition = {};
  basket: ICondition = {};

  delivery: ICondition = {};
  conditions: ICondition[] = [];
  total = 0;
  isCustomColorChecked: any;
  isChangeChecker: any;
  whichVelcroChecked: string;
  basketChecked = true;
  blowerChecked = true;
  whichCustomColor = '';
  isUploadImageSelected;
  scene;
  priceByWidth;

  conditionsAdded = {
    blower: false,
    basket: false,
    delivery: false
  }

  constructor(private service: ColorService,
    private boog: BoogService) { }

  ngOnInit() {
    this.service.getConditionsDetails().subscribe((response) => {
      (response.results).forEach((item: any) => {
        this.conditions.push({
          id: { ...item }.id,
          createdate: { ...item }.createdate,
          label: { ...item }.label,
          description: { ...item }.description,
          tooltip: { ...item }.tooltip,
          image: { ...item }.image,
          limit: { ...item }.limit,
          price: parseFloat({ ...item }.price)
        });
      });
      this.initConditionValues();
    })


    this.boog.changeChecker.subscribe(res => {
      this.isChangeChecker = res;
    })

    this.boog.velcroChecker.subscribe(res => {
      this.whichVelcroChecked = res;
    })

    this.service.changeCustomColor.subscribe(res => {
      this.isCustomColorChecked = res;
      this.customColorAdded();
    })

    this.service.choosedCustomColor.subscribe(res => {
      this.whichCustomColor = res;
    })

    this.boog.uploadImageSelected.subscribe(res => {
      this.isUploadImageSelected = res;
      this.uploadingImageAdded();
    })

    this.boog.sliderChecker.subscribe(res => {
      this.priceByWidth = res;
      this.priceByWidthTotal();
    })
  }

  initConditionValues() {
    this.blower = this.conditions.find(cond => cond.label === Condition.Blower)
    this.basket = this.conditions.find(cond => cond.label === Condition.Basket)
    this.delivery = this.conditions.find(cond => cond.label === Condition.Delivery)
  }

  onSubmit() {
    this.conditionsAdded.blower = this.signupForm.value.blower;
    this.conditionsAdded.basket = this.signupForm.value.basket;
    this.conditionsAdded.delivery = this.signupForm.value.delivery;
  }

  buildingCustomColor() {
    if (this.isCustomColorChecked) {
      return this.whichCustomColor = '#' + this.whichCustomColor;
    } else {
      return this.whichCustomColor = '';
    }
  }

  quotationRequest() {
    var me = this;

    this.boog.SendBoogObject({
      description: 'string',
      price: me.total,
      model_id: 1,
      model_design: '',
      model_snapshot: 'any',
      custom_color: this.buildingCustomColor(),
      velcro: me.whichVelcroChecked,
      checker: me.isChangeChecker ? 1 : 0,
      basket: me.basketChecked === true ? 1 : 0,
      blower: me.blowerChecked === true ? 1 : 0,
    });

    // blowerChange(event) {
    //   if (event.currentTarget.checked) {
    //     this.total += this.blower.price;
    //   } else {
    //     this.total -= this.blower.price;
    //   }
    // }

    // basketChange(event) {
    //   if (event.currentTarget.checked) {
    //     this.total += this.basket.price;
    //   }
    //   else {
    //     this.total -= this.basket.price;
    //   }
    // }

    // deliveryChange(event) {
    //   if (event.currentTarget.checked) {
    //     this.total += this.delivery.price;
    //   }
    //   else {
    //     this.total -= this.delivery.price;
    //   }
    // }
  }
  extraPrice=0;
  customColorAdded() {
    if (this.isCustomColorChecked) {
      this.total += 200;
      this.extraPrice +=200;
    }
    else {
      this.total -= 200;
      this.extraPrice -=200;
    }
  }

  uploadingImageAdded() {
    if (this.isUploadImageSelected) {
      this.total += 200;
      this.extraPrice +=200;
    }
    else {
      this.total -= 200;
      this.extraPrice -=200;
    }
  }

  priceByWidthTotal() {
    this.total = +this.priceByWidth + this.extraPrice;
  }
}