import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ContentCentralComponent } from './component/content-central/content-central.component';


export const routes: Routes = [
    {path:'ayuda',component:AyudaComponent},
    {path:'',component:ContentCentralComponent},
];
