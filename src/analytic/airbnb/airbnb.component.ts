import { Component, OnInit } from '@angular/core';


import { CommonService } from '../services/common.service';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-airbnb',
  templateUrl: './airbnb.component.html',
  styleUrls: ['./airbnb.component.css']
})
export class AirbnbComponent implements OnInit {

  constructor(private roomService: RoomService,
    private commonService: CommonService) { }
  public rooms: any;
  public roomsByNeighborhood: any;
  public totalNumber = 0;
  public city;
  public cities;
  public title = "";


  ngOnInit() {
    this.GetCity();
  }

  GetRoomsByNeighborhood(neighborhood) {
    this.roomService.getFilteredRooms({ neighborhood: neighborhood }).subscribe(
      data => {
        this.roomsByNeighborhood = data;
        this.title = this.city + " - " + neighborhood;
        this.totalNumber = data.length;
      }
    )
  }

  GetRoomsByCity(city) {
    this.roomService.getFilteredRooms({ city: city }).subscribe(
      data => {
        this.rooms = data;
        this.roomsByNeighborhood = data;
        this.title = city + " - All neighborhoods";
        this.totalNumber = data.length;
      }
    )
  }

  GetRoom() {
    this.roomService.getRooms().subscribe(
      data => {
        this.rooms = data;
      },
      error => console.log(error)
    )
  }

  GetCity() {
    this.commonService.getCity().subscribe(
      data => {
        debugger
        this.cities = data;
        console.log(data);
      },
      error => console.log(error)
    )
  }

  changeCity(element) {
    // clear result
    this.roomsByNeighborhood = null;
    this.rooms = null;

    this.city = element.currentTarget.value;
    this.GetRoomsByCity(this.city);
  }

}
