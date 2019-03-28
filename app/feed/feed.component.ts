import { Component, ViewChild, ElementRef } from "@angular/core";
import { PlatformLocation } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Newsfeed } from "../shared/newsfeed/newsfeed.model";
import { RouterExtensions } from "nativescript-angular/router";
import { View } from "tns-core-modules/ui/core/view";
import { Page } from "tns-core-modules/ui/page";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { topmost } from "tns-core-modules/ui/frame";
import { Color } from "color";
import { android, ios } from "application";
import { device } from "platform";
import { AnimationsService } from "../shared/animations-service";
import { NewsfeedService } from "../shared/newsfeed/newsfeed.service";

import { Publication } from "~/services/models";
import { PublicationService } from "~/services/services";

@Component({
    selector: "Feed",
    moduleId: module.id,
    templateUrl: "./feed.component.html",
    styleUrls: ['./feed.component.css']
})
export class FeedComponent {
    private _newsfeeds: Newsfeed[];
    private _selectedView: View;
    private _adjustedOffset: number = 0;

    public me: String;
    public pub: Publication;
    public publications:Publication[];

    @ViewChild("search") _searchRef: ElementRef;
    @ViewChild("list") _listRef: ElementRef;
    @ViewChild("animatingImage") _imageRef: ElementRef;
    @ViewChild("animatingImageContainer") _imageContainerRef: ElementRef;

    constructor(private newfeedService: NewsfeedService,
        private animationsService: AnimationsService,
        private page: Page,
        private location: PlatformLocation,
        public publicationService: PublicationService,
        public router: Router) {

        this.page['scrollableContent'] = true;
        this._newsfeeds = this.newfeedService.getNewsFeeds();

        if (android) {
            this._updateStatusBarColor("#2B3238");
        }

        this.getAllMessage();
    }

    public getAllMessage() {
        console.log("on rentre là dedans");
        this.publications =  []
        this.publicationService.GetAll().subscribe((data: Array<Publication>) => {
        console.log(data);
        this.publications = data;
        this.publications.forEach(element => {
            console.log(element);
        });
      });
    }

    public goTakePicture(){
        this.router.navigate(["/takePicture"]);
    }

    ngOnInit() {
        this.location.onPopState(() => {
            this._onNavigatedTo();
        });

        if (ios) {
            topmost().ios.controller.navigationBar.barStyle = 1;
        }
    }

    get newsfeeds() {
        return this._newsfeeds;
    }

    private measureOffset(view1: View, view2: View) {
        let offset = view1.getLocationRelativeTo(view2).y;
        if (view2.ios && view2.ios.adjustedContentInset) {
            this._adjustedOffset = view2.ios.adjustedContentInset.top;
        }
        return offset - this._adjustedOffset;
    }

    private _onNavigatedTo() {
        let offset = this.animationsService.animationOffset + this._adjustedOffset;
        this._imageContainerRef.nativeElement.animate({
            translate: { x: 0, y: offset },
            duration: 200,
            curve: AnimationCurve.easeOut
        }).then(() => {
            this._selectedView.opacity = 1;
            this._imageContainerRef.nativeElement.animate({
                opacity: 0,
                duration: 400,
                curve: AnimationCurve.easeOut
            }).then(() => {
                this._imageContainerRef.nativeElement.translateY = 0;
            })
        }).catch(() => { });

        this._listRef.nativeElement.animate({
            opacity: 1,
            duration: 200
        }).catch(() => { });
        this._searchRef.nativeElement.animate({
            opacity: 1,
            duration: 200
        }).catch(() => { });
    }

    private _updateStatusBarColor(color: string) {
        if (device.sdkVersion >= "21" && android.foregroundActivity) {
            var nativeColor = new Color(color).android;
            var window = android.foregroundActivity.getWindow();
            window.setStatusBarColor(nativeColor);
        }
    }
}