import {Component, OnInit} from '@angular/core';
import {BookingService} from './booking.service';
import {Booking} from './booking.module';
import {IonItemSliding} from '@ionic/angular';

@Component({
    selector: 'app-bookings',
    templateUrl: './bookings.page.html',
    styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

    loadedBookings: Booking[];

    constructor(private bookingService: BookingService) {
    }

    ngOnInit() {
    }

    onViewWillEnter() {
        this.loadedBookings = this.bookingService.getBookings;
    }

    onCancel(id: string, itemSliding: IonItemSliding) {
        itemSliding.close();
        this.bookingService.removeBooking(id);
        // cancel booking with offerID
    }
}
