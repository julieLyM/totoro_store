import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  onBackToHome() {
    this.router.navigate([])
  }
}
