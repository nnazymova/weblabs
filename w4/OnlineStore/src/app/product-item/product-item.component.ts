import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product;

  constructor() { }

  ngOnInit(): void {
  }

  share() {
    this.product.share = 'https://telegram.me/share/url?url=' + this.product.link 
      + '&text=Hey, check out the ' + this.product.name + '!';
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  switch(img) {
    this.product.main = img;
  }
}
