import {Injectable} from '@angular/core';
import {Booking} from "./booking.module";

@Injectable({
    providedIn: 'root'
})
export class BookingService {

    private bookings: Booking[] = [
        {
            id: 'xyz',
            placeId: 'p1',
            placeTitle: 'Manhattan Mansion',
            guestNumber: 2,
            userId: 'abc'
        }
    ];

    get getBookings() {
        return [...this.bookings];
    }

    removeBooking(id: string) {
        this.bookings = this.getBookings.filter(booking => {
            return booking.id !== id;
        });
    }

    constructor() {
    }
}
