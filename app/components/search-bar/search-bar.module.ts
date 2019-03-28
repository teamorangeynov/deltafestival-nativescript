import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { SearchBarComponent } from "./search-bar.component";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule
	],
	declarations: [
		SearchBarComponent
	],
	exports: [
		SearchBarComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class SearchBarModule { }