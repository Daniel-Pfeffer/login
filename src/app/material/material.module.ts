import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule, MatRadioModule,
    MatSelectModule,
    MatToolbarModule, MatTooltipModule
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatSelectModule,
        MatToolbarModule,
        MatInputModule,
        MatDividerModule,
        MatCardModule,
        MatTooltipModule,
        MatIconModule,
        MatRadioModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatSelectModule,
        MatToolbarModule,
        MatInputModule,
        MatDividerModule,
        MatCardModule,
        MatTooltipModule,
        MatIconModule,
        MatRadioModule
    ]
})
export class MaterialModule {
}
