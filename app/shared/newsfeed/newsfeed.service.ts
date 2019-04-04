import { Injectable } from "@angular/core";
import { Newsfeed } from "./newsfeed.model";
import { Newsfeeds } from "./mock-newsfeeds"

@Injectable()
export class NewsfeedService {
    private _selectedId = -1;

    getNewsFeeds(): Newsfeed[] {
        return Newsfeeds;
    }

    getNewsfeed(id: number): Newsfeed {
        return Newsfeeds.filter(newsfeed => newsfeed.id === id)[0];
    }

    setSelectedId(id: number) {
        if (id < Newsfeeds.length) {
            this._selectedId = id;
        }
    }

    getSelected(): Newsfeed {
        return this._selectedId < 0 ? null : this.getNewsfeed(this._selectedId);
    }
}