import { Component, OnInit } from '@angular/core';
declare var Razorpay: any; 
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testRazorpay(){
    

    var options = {
      "key": "rzp_test_AaXffewaoNdRBy", // Enter the Key ID generated from the Dashboard
      "amount": "1000000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Acme Corp",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "order_HBUccdNgW5M01H", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response : any){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9999999999"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };

  var rzp1 = new Razorpay(options);
  rzp1.on('payment.failed', function (response : any){
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
});
rzp1.open();
  }

}
