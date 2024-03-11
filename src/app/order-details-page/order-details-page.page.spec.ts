import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderDetailsPagePage } from './order-details-page.page';

describe('OrderDetailsPagePage', () => {
  let component: OrderDetailsPagePage;
  let fixture: ComponentFixture<OrderDetailsPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrderDetailsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
