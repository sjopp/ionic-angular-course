import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionSheetController, ModalController, NavController} from '@ionic/angular';
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
                private placesService: PlacesService,
                private actionSheetController: ActionSheetController) {
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

        this.actionSheetController.create({
            header: 'Choose an action',
            buttons: [
                {
                    text: 'Select date',
                    handler: () => {
                        this.openBookingModal('select');
                    }
                },
                {
                    text: 'Random date',
                    handler: () => {
                        this.openBookingModal('random');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        }).then(actionSheetEl => {
            actionSheetEl.present();
        });
    }

    openBookingModal(mode: 'select' | 'random') {
        console.log(mode);

        this.modalController.create({component: CreateBookingComponent, componentProps: {selectedPlace: this.place}})
            .then(modalEl => {
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
