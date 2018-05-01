import { Component, OnInit, AfterContentInit } from '@angular/core';
// import * as Parallax from 'parallax-js';

// declare var Parallax: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    './home.component.css',
    '../app.component.css'
  ]
})

export class HomeComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
    startTime();
  }

  ngAfterContentInit() {
    // const scene = document.getElementById("main-container");
    // new Parallax(scene, {
    //   relativeInput: true,
    //   hoverOnly: true
    // });
  }
}

var weekday = new Array(7);
weekday[0] = "Minggu";
weekday[1] = "Senin";
weekday[2] = "Selasa";
weekday[3] = "Rabu";
weekday[4] = "Kamis";
weekday[5] = "Jumat";
weekday[6] = "Sabtu";

var month = new Array(7);
month[0] = "Januari";
month[1] = "Februari";
month[2] = "Maret";
month[3] = "April";
month[4] = "Mei";
month[5] = "Juni";
month[6] = "Juli";
month[7] = "Agustus";
month[8] = "September";
month[9] = "Oktober";
month[10] = "November";
month[11] = "Desember";

function startTime() {

  var today = new Date();
  var hh = today.getHours();
  var mm = today.getMinutes();
  var ddd = weekday[today.getDay()]
  var dd = today.getDate();
  var mmm = month[today.getMonth()]
  mm = checkTime(mm);
  document.getElementById('mainClockTime').innerHTML =
    hh + ":" + mm + "<br>" + ddd + ", " + dd + " " + mmm;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}