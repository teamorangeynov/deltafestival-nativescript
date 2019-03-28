import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { ListItemComponent } from "./list-item.component";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule
	],
	declarations: [
		ListItemComponent
	],
	exports: [
		ListItemComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class ListItemModule { }