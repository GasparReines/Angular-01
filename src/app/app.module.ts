import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './views/toolbar/toolbar.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { HomeComponent } from './views/home/home.component';
import { PageWrapperComponent } from './views/page-wrapper/page-wrapper.component';
import { SelectableListComponent } from './shared/components/selectable-list/selectable-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    HomeComponent,
    PageWrapperComponent,
    SelectableListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
