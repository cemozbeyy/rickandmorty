import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CharacterDetailComponent, CharactersComponent, MainPageComponent } from './components/main/container-viewer';


const ROUTES: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: '/mainPage', pathMatch: 'full' },
            { path: 'mainPage', component: MainPageComponent },
            {
                path: 'charactersPage',
                component: CharactersComponent,
                children: [
                    { path: 'characterDetails/:id', component: CharacterDetailComponent }
                ]
            }
        ]
    },


]

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class LayoutRoutingModule { }
