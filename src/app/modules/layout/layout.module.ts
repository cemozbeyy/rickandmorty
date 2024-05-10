import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SidenavComponent } from './components/sidenav';
import { HeaderComponent } from './components/main';
import { LayoutRoutingModule } from './layout.routing.module';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { CharacterDetailComponent, CharactersComponent } from './components/main/container-viewer';



const COMPONENTS = [
    LayoutComponent,
    SidenavComponent,
    HeaderComponent,

    CharactersComponent,
    CharacterDetailComponent
];


@NgModule({
    imports: [
        LayoutRoutingModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [...COMPONENTS],
    providers: [],
})
export class LayoutModule { }
