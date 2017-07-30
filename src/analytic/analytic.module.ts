import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
// External
import { ChartsModule } from 'ng2-charts/ng2-charts';

// Internal
import { AnalyticComponent } from './analytic.component';
import { AirbnbComponent } from './airbnb/airbnb.component';
import { BarChartComponent } from './airbnb/bar-chart/bar-chart.component';
import { PrivateRoomComponent } from './airbnb/private-room/private-room.component';
import { EntireHouseComponent } from './airbnb/entire-house/entire-house.component';
import { SharedRoomComponent } from './airbnb/shared-room/shared-room.component';
import { AveragePriceComponent } from './airbnb/average-price/average-price.component';

//import { AnalyticsSideMenuComponent } from './analytics/analytics-side-menu/analytics-side-menu.component';
import { CommonService } from './services/common.service';
import { RoomService } from './services/room.service';

// Routes
import { AnalyticRouting } from './analytic.route'

@NgModule({
    imports: [
        CommonModule,
        ChartsModule,
        AnalyticRouting
    ],
    declarations: [
        AnalyticComponent,
        AirbnbComponent,
        BarChartComponent,
        PrivateRoomComponent,
        EntireHouseComponent,
        SharedRoomComponent,
        AveragePriceComponent
    ],
    providers: [
        RoomService,
        CommonService
    ],
    exports: [
        AnalyticComponent
    ]

})

export class AnalyticModule {}