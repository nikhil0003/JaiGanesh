import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function() {
      $("#sidebarCollapse").on("click", function() {
        $("#sidebar").addClass("active");
      });
    
      $("#sidebarCollapseX").on("click", function() {
        $("#sidebar").removeClass("active");
      });
    
      $("#sidebarCollapse").on("click", function() {
        if ($("#sidebar").hasClass("active")) {
          $(".overlay").addClass("visible");
          console.log("it's working!");
        }
      });
    
      $("#sidebarCollapseX").on("click", function() {
        $(".overlay").removeClass("visible");
      });
    });
  }

}
