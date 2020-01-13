import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  marked = false;
  msn = false;
  email = false;
  constructor() {}

  toggleVisibility(e) {
    this.marked = e.target.checked;
  }

  ngOnInit() {}
}
