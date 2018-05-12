import { Component, OnInit } from '@angular/core';
import { } from 'jquery';
import { } from 'morris.js';
import { } from 'jquery-knob';
import { } from 'bootstrap-datepicker';
import { } from 'jqueryui';
import { } from 'daterangepicker';
import { } from 'jquery.slimscroll';
import * as moment from 'moment';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-dashboard1',
  templateUrl: './admin-dashboard1.component.html',
  styleUrls: ['./admin-dashboard1.component.css']
})
export class AdminDashboard1Component implements OnInit {

  knob: JQuery;
  calendar: JQuery;

  constructor() { }
  ngOnInit() {
     // Update the AdminLTE layouts
    AdminLTE.init();
    // Make the dashboard widgets sortable Using jquery UI
    jQuery('.connectedSortable').sortable({
      placeholder: 'sort-highlight',
      connectWith: '.connectedSortable',
      handle: '.box-header, .nav-tabs',
      forcePlaceholderSize: true,
      zIndex: 999999
    });
    jQuery('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');

    // jQuery UI sortable for the todo list
    jQuery('.todo-list').sortable({
      placeholder: 'sort-highlight',
      handle: '.handle',
      forcePlaceholderSize: true,
      zIndex: 999999
    });

    // bootstrap WYSIHTML5 - text editor
    // jQuery('.textarea').wysihtml5();

    jQuery('.daterange').daterangepicker({
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      startDate: moment().subtract(29, 'days'),
      endDate: moment()
    }, function (start, end) {
      // window.alert('You chose:  ' + this.start.format('MMMM D, YYYY') + ' - ' + this.end.format('MMMM D, YYYY'));
    });


    this.knob = jQuery('.knob').knob();
    this.calendar = jQuery('#calendar').datepicker();

    // SLIMSCROLL FOR CHAT WIDGET
   
    /* The todo list plugin */
    /*
    jQuery('.todo-list').todolist({
      onCheck: function (ele) {
        window.console.log('The element has been checked');
        return ele;
      },
      onUncheck: function (ele) {
        window.console.log('The element has been unchecked');
        return ele;
      }
    });*/

  }

}
