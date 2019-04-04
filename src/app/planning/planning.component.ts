import { Component, OnInit, NgZone } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import * as app from "tns-core-modules/application";

@Component({
    selector: "Planning",
    moduleId: module.id,
    templateUrl: "./planning.component.html"
})
export class PlanningComponent implements OnInit {

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}
