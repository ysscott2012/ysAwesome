import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AirbnbComponent } from './analytics/airbnb/airbnb.component';

import { CommonService } from './services/common.service';
import { RoomService } from './services/room.service';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BarChartComponent } from './analytics/airbnb/bar-chart/bar-chart.component';
import { PrivateRoomComponent } from './analytics/airbnb/private-room/private-room.component';
import { EntireHouseComponent } from './analytics/airbnb/entire-house/entire-house.component';
import { SharedRoomComponent } from './analytics/airbnb/shared-room/shared-room.component';
import { AveragePriceComponent } from './analytics/airbnb/average-price/average-price.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    AirbnbComponent,
    BarChartComponent,
    PrivateRoomComponent,
    EntireHouseComponent,
    SharedRoomComponent,
    AveragePriceComponent,
    HeaderComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [
    RoomService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
