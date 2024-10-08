import {Component, OnInit} from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  items: any[] = [];
  searchOrderId: string = ''; // Variable to hold the search input

  constructor(private orderItemsService: OrdersService) { }

  ngOnInit(): void {
    // Initially load items with a default status, if needed
    this.filterItems('Pending');
  }

  filterItems(status: string): void {
    this.orderItemsService.getOrderItemsByStatus(status).subscribe(
      data => {
        this.items = data.Items;
      },
      error => {
        console.error('Error fetching order items:', error);
        this.items = [];
      }
    );
  }

  searchItemsByOrderId(): void {
    if (this.searchOrderId.trim()) {
      this.orderItemsService.getOrderItemsByOrderId(this.searchOrderId).subscribe(
        data => {
          this.items = data.Items;
        },
        error => {
          console.error('Error fetching order items:', error);
          this.items = [];
        }
      );
    }
  }



}
