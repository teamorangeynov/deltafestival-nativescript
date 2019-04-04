import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter, map } from "rxjs/operators";

export interface IDataItem {
    author: string;
    caption?: string;
    date: Date | string;
    description: string;
    id: number;
    image: string;
    liked?: boolean;
    location: string;
    popularity?: string | number;
    title: string;
    viewed?: boolean;
}

@Injectable()
export class DataService {

    private _items$: BehaviorSubject<Array<IDataItem>>;
    private _items = new Array<IDataItem>(
        {
            id: 1,
            image: "~/imageProfilTinderLike/toto10_opt.jpg",
            title: "Thomas",
            author: "Jacek Malinowski",
            location: "Gallerystore",
            description: "Obraz jest wyjÄtkowÄ ekspresjÄ artysty. Praca jest dedykowanym portretem Cmili Cobello. Abstrakcyjna gra ÅwiateÅ i cienia za pomocÄ 4 kolorÃ³w oddaje zÅoÅ¼onoÅÄ jakie chciaÅ osiÄgnÄÄ artysta oraz prosty panton barw ktÃ³re budujÄ caÅÄ narracjÄ. DuÅ¼Ä wagÄ moÅ¼na zaobserwowaÄ w detalu, poniewaÅ¼ jest to grafika wektorowa moÅ¼emy dostrzec nietypowy detal wÅosÃ³w oraz ÅwiatÅo, ktÃ³re rozÅwietla koÅcÃ³wki. Obraz przedstawia piÄkno kobiety, oraz drzemiÄcÄ magiÄ jej temperamentu. Zimne barwy oddajÄ chÅÃ³d ktÃ³ry symbolizuje Å¼al miÄdzy uczuciem wynikajÄcym z rozstania.",
            date: "1995",
            popularity: 82,
            viewed: false,
            liked: false
        },
        {
            id: 2,
            image: "~/imageProfilTinderLike/toto9_opt.jpg",
            title: "Tomy",
            author: "Joanna SuÅek-Malinowska",
            location: "Gallerystore",
            description: "Cykl abstrakcji âChromosferyâ inspirowany jest sÅoÅcem, przestrzeniÄ kosmicznÄ oraz zjawiskami meteorologicznymi. Czarne pasy sugerujÄ ograniczenie mieszkaÅca ziemskiego, ktÃ³ry nie moÅ¼e wznieÅÄ siÄ ponad to co widzi z doÅu. Barwny Årodek z symbolicznym sÅoÅcem lub planetÄ zmienia formy oraz kolory w zaleÅ¼noÅci od pory dnia. Obrazy budowane sÄ za pomocÄ pÅynnych linii, przenikajÄcych siÄ na pÅaszczyÅºnie. CzÄsto ukÅady przestrzenne rozÅwietlane sÄ ÅwiatÅem padajÄcym z nieoczywistego ÅºrÃ³dÅa. UwydatniajÄ siÄ aby za chwilÄ zapaÅÄ siÄ w czerÅ. Powierzchnia obrazÃ³w poprzez wielokrotne, precyzyjne nakÅadanie pÅaskiej plamy, zdaje siÄ byÄ idealnie gÅadka. Delikatne linie podkreÅlajÄ kruchoÅÄ zjawiska a jednoczeÅnie sÄ ÅÄcznikiem pasa barw z czarnÄ przestrzeniÄ.",
            date: "1994",
            popularity: 41,
            viewed: false,
            liked: false
        },
        {
            id: 3,
            image: "~/imageProfilTinderLike/toto8_opt.jpg",
            title: "Francky",
            author: "PaweÅ GÃ³rski",
            location: "Gallerystore",
            description: "Abstrakcyjna przyroda, piekno otaczajÄcego nas Åwiata, wspÃ³Åistnienie. Akstrakcyjny, peÅen kolorÃ³w obraz akrylowy na pÅÃ³tnie lnianym wykonany w technice enkaustyki. Enkaustyka to technika pracochÅonna, ktÃ³ra wymaga od twÃ³rcy nakÅadania farb na gorÄco w spoiwie wosku pszczelego lub oleju. DziÄki takim zabiegom pozwala uzyskaÄ trwaÅe i odporne na wilgoÄ rezultaty, a takÅ¼e zachowaÄ gÅÄbiÄ i blask zastosowanej palety kolorystycznej. Praca doda chatakteru przestronnym wnetrzom. Obraz sprawdzi siÄ w biurze oraz w duÅ¼ym, jasnym salonie.",
            date: "1993",
            popularity: 55,
            viewed: false,
            liked: false
        },
        {
            id: 4,
            image: "~/imageProfilTinderLike/toto7_opt.jpg",
            title: "Lucas",
            author: "PaweÅ Porada",
            location: "Gallerystore",
            description: "Obraz \"dama\" zostaÅ namalowany na pÅÃ³tnie 3D - grubsza rama, o wymiarach 50x50cm, farbami olejnymi. MalowidÅo przedstawia kobietÄ z klasÄ na tle z bogatÄ ornamentykÄ. Bardzo kolorowy, zbudowany z prostych form i ksztaÅtÃ³w. Klimatem lekko nawiÄzuje do dawniejszych epok lub do damy z talii kart. Portret idealnie zagra w kaÅ¼dym wnÄtrzu ale i rÃ³wnieÅ¼ podkreÅli karciane upodobania, hobby historyczne lub rozrywkowy charakter osoby ktÃ³ra go zakupi. Sygnowany z przodu nazwiskiem i datÄ powstania. Wykonany w pojedynczym egzemplarzu co zwiÄksza jego wartoÅÄ kolekcjonerskÄ.",
            date: "1996",
            popularity: 63,
            viewed: false,
            liked: false
        },
        {
            id: 5,
            image: "~/imageProfilTinderLike/toto6_opt.jpg",
            title: "Momo",
            author: "Iza Kostiukow",
            location: "Gallerystore",
            description: "Abstrakcyjny obraz namalowany w technice olejnej. praca nie wymaga ramy , krawÄdzie pÅÃ³tna sÄ zamalowane. Praca jest zabezpieczona werniksem satynowym. obraz jest sygnowany z tyÅu obraz jest czÄÅciÄ cyklu malarskiego \" Ålady\", powstaÅego w 2014 roku. Praca moÅ¼e byÄ dobrym prezentem np. na Ålub.",
            date: "1985",
            popularity: 15,
            viewed: false,
            liked: false
        },
        {
            id: 6,
            image: "~/imageProfilTinderLike/toto5_opt.jpg",
            title: "Camille",
            author: "Zbigniew Rogalski",
            location: "Raster gallery",
            description: "Obraz zainspirowany autentycznym zdarzeniem - ÅmierciÄ sÄsiada malarza. CiaÅo zmarÅego zostaÅo odnalezione dopiero po kilku dniach od zgonu w mieszkaniu, ktÃ³re przylegaÅo do pracowni i mieszkania Rogalskiego.",
            date: "1992",
            popularity: 21,
            viewed: false,
            liked: false
        },
        {
            id: 7,
            image: "~/imageProfilTinderLike/toto4_opt.jpg",
            title: "FATHER",
            author: "Jan MÅodoÅ¼eniec",
            location: "Ostoya",
            description: "Obraz \"dama\" zostaÅ namalowany na pÅÃ³tnie 3D - grubsza rama, o wymiarach 50x50cm, farbami olejnymi. MalowidÅo przedstawia kobietÄ z klasÄ na tle z bogatÄ ornamentykÄ. Bardzo kolorowy, zbudowany z prostych form i ksztaÅtÃ³w. Klimatem lekko nawiÄzuje do dawniejszych epok lub do damy z talii kart. Portret idealnie zagra w kaÅ¼dym wnÄtrzu ale i rÃ³wnieÅ¼ podkreÅli karciane upodobania, hobby historyczne lub rozrywkowy charakter osoby ktÃ³ra go zakupi. Sygnowany z przodu nazwiskiem i datÄ powstania. Wykonany w pojedynczym egzemplarzu co zwiÄksza jego wartoÅÄ kolekcjonerskÄ.",
            date: "1993",
            popularity: 98,
            viewed: false,
            liked: false
        },
        {
            id: 8,
            image: "~/imageProfilTinderLike/toto3_opt.jpg",
            title: "Johny",
            author: "Wilhelm Sasnal",
            location: "Whitechapel Gallery",
            description: "Obraz \"dama\" zostaÅ namalowany na pÅÃ³tnie 3D - grubsza rama, o wymiarach 50x50cm, farbami olejnymi. MalowidÅo przedstawia kobietÄ z klasÄ na tle z bogatÄ ornamentykÄ. Bardzo kolorowy, zbudowany z prostych form i ksztaÅtÃ³w. Klimatem lekko nawiÄzuje do dawniejszych epok lub do damy z talii kart. Portret idealnie zagra w kaÅ¼dym wnÄtrzu ale i rÃ³wnieÅ¼ podkreÅli karciane upodobania, hobby historyczne lub rozrywkowy charakter osoby ktÃ³ra go zakupi. Sygnowany z przodu nazwiskiem i datÄ powstania. Wykonany w pojedynczym egzemplarzu co zwiÄksza jego wartoÅÄ kolekcjonerskÄ.",
            date: "1994",
            popularity: 45,
            viewed: false,
            liked: false
        },
        {
            id: 9,
            image: "~/imageProfilTinderLike/toto2_opt.jpg",
            title: "Mathieux",
            author: "Wilhelm Sasnal",
            location: "Foksal Gallery Foundation Varsovie",
            description: "Obraz \"dama\" zostaÅ namalowany na pÅÃ³tnie 3D - grubsza rama, o wymiarach 50x50cm, farbami olejnymi. MalowidÅo przedstawia kobietÄ z klasÄ na tle z bogatÄ ornamentykÄ. Bardzo kolorowy, zbudowany z prostych form i ksztaÅtÃ³w. Klimatem lekko nawiÄzuje do dawniejszych epok lub do damy z talii kart. Portret idealnie zagra w kaÅ¼dym wnÄtrzu ale i rÃ³wnieÅ¼ podkreÅli karciane upodobania, hobby historyczne lub rozrywkowy charakter osoby ktÃ³ra go zakupi. Sygnowany z przodu nazwiskiem i datÄ powstania. Wykonany w pojedynczym egzemplarzu co zwiÄksza jego wartoÅÄ kolekcjonerskÄ.",
            date: "1994",
            popularity: 81,
            viewed: false,
            liked: false
        },
        {
            id: 10,
            image: "~/imageProfilTinderLike/toto1_opt.jpg",
            title: "Bastien",
            author: "Adam Twardowski",
            location: "Gallerystore",
            description: "Obraz jest wyjÄtkowÄ ekspresjÄ artysty. Praca jest dedykowanym portretem Cmili Cobello. Abstrakcyjna gra ÅwiateÅ i cienia za pomocÄ 4 kolorÃ³w oddaje zÅoÅ¼onoÅÄ jakie chciaÅ osiÄgnÄÄ artysta oraz prosty panton barw ktÃ³re budujÄ caÅÄ narracjÄ. DuÅ¼Ä wagÄ moÅ¼na zaobserwowaÄ w detalu, poniewaÅ¼ jest to grafika wektorowa moÅ¼emy dostrzec nietypowy detal wÅosÃ³w oraz ÅwiatÅo, ktÃ³re rozÅwietla koÅcÃ³wki. Obraz przedstawia piÄkno kobiety, oraz drzemiÄcÄ magiÄ jej temperamentu. Zimne barwy oddajÄ chÅÃ³d ktÃ³ry symbolizuje Å¼al miÄdzy uczuciem wynikajÄcym z rozstania.",
            date: "1991",
            popularity: 63,
            viewed: false,
            liked: false
        }
    );

    constructor() {
        this._items$ = new BehaviorSubject<Array<IDataItem>>(this.cloneItems());
    }

    getItems(): Array<IDataItem> {
        return this._items$.getValue();
    }

    getItem(id: number): IDataItem {
        return this._items$.getValue().find((data) => {
            return data.id == id;
        });
    }

    getIndex(item: IDataItem): number {
        return this.getItems().findIndex((element) => element.id === item.id);
    }

    getUnseenItems$(): Observable<Array<IDataItem>> {
        return this._items$.asObservable()
            .pipe(map((items: Array<IDataItem>) => items.filter((item: IDataItem) => !item.viewed)));
    }

    getUnseenItems(): Array<IDataItem> {
        return this._items$.getValue().filter((item: IDataItem) => !item.viewed);
    }

    getLikedItems$(): Observable<Array<IDataItem>> {
        return this._items$.asObservable()
            .pipe(map((items: Array<IDataItem>) => items.filter((item: IDataItem) => item.liked === true)));
    }

    getLikedItems(): Array<IDataItem> {
        return this._items$.getValue().filter((item: IDataItem) => item.liked);
    }

    updateItem(item: IDataItem): void {
        const items = this.getItems();
        items[this.getIndex(item)] = item;
        this._items$.next(items);
    }

    dislike(item: IDataItem): void {
        item.liked = false;
        const items = this.getItems();
        items[this.getIndex(item)] = item;
        this._items$.next(items);
    }

    resetItems(): void {
        this._items$.next(this.cloneItems());
    }

    private cloneItems(): Array<IDataItem> {
        return JSON.parse(JSON.stringify(this._items));
    }
}
