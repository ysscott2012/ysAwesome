import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
// Internal
import { ResumeComponent } from './resume.component';

// Routes
import { ResumeRouting } from './resume.route'

@NgModule({
    imports: [
        CommonModule,
        ResumeRouting
    ],
    declarations: [
        ResumeComponent,
    ],
    providers: [
    ],
    exports: [
        ResumeComponent
    ]

})

export class ResumeModule {}