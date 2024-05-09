import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SidenavComponent } from './components/sidenav';
import { HeaderComponent, MainComponent } from './components/main';
import { LayoutRoutingModule } from './layout.routing.module';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


const COMPONENTS = [
    LayoutComponent,
    SidenavComponent,
    HeaderComponent,
    MainComponent
];


@NgModule({
    imports: [
        LayoutRoutingModule,
        CommonModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [...COMPONENTS],
    providers: [],
})
export class LayoutModule { }
