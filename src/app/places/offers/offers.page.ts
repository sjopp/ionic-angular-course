import {Component, OnInit} from '@angular/core';
import {Place} from '../place.model';
import {PlacesService} from '../places.service';
import {IonItemSliding} from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
    selector: 'app-offers',
    templateUrl: './offers.page.html',
    styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

    offers: Place[];

    constructor(private placesService: PlacesService,
                private router: Router) {
    }

    ngOnInit() {
        this.offers = this.placesService.getPlaces;
    }

    onEdit(offerId: string, slidingItem: IonItemSliding) {
        slidingItem.close();
        this.router.navigateByUrl('places/tabs/offers/edit/' + offerId);
        console.log(offerId);
    }
}
