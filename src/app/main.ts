import { bootstrap }    from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { Location, LocationStrategy, HashLocationStrategy} from '@angular/common';

enableProdMode();
bootstrap(AppComponent, [
  appRouterProviders,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/