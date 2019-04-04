import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";
import { FeedComponent } from "./feed/feed.component";
import { TinderLikeComponent } from "./tinderLike/tinderLike.component";
import { LikesListComponent } from "./likesList/likesList.component";
import { TakePicturesComponent } from "./takePicture/takePicture.component";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "list", component: ListComponent },
    { path: "feed", component: FeedComponent },
    { path: "tinderLike", component: TinderLikeComponent },
    { path: "favorites", component: LikesListComponent},
    { path: "takePicture", component: TakePicturesComponent}
];

export const navigatableComponents = [
    LoginComponent,
    ListComponent,
    FeedComponent,
    TinderLikeComponent,
    LikesListComponent,
    TakePicturesComponent
];