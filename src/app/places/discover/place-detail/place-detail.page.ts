import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController, NavController} from '@ionic/angular';
import {PlacesService} from '../../places.service';
import {CreateBookingComponent} from '../../../bookings/create-booking/create-booking.component';
import {Place} from '../../place.model';

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

    place: Place;

    constructor(private router: Router,
                private navController: NavController,
                private modalController: ModalController,
                private activatedRoute: ActivatedRoute,
                private placesService: PlacesService) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('placeId')) {
                this.navController.navigateBack('places/tabs/offers');
                return;
            }
            this.place = this.placesService.getPlace(paramMap.get('placeId'));
        });
    }

    onBookPlace() {
        this.modalController.create({component: CreateBookingComponent, componentProps: {selectedPlace: this.place}}).then(modalEl => {
            modalEl.present();
            return modalEl.onDidDismiss();
        }).then(resultData => {
            console.log(resultData.data, resultData.role);
            if (resultData.role === 'confirm') {
                console.log('BOOKED!');
            }
        });
    }
}
