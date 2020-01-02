import {Injectable} from '@angular/core';
import {Place} from './place.model';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {

    private places: Place[] = [
        new Place('p1',
            'Manhattan Mansion',
            'In the heart of the city',
            'https://media.architecturaldigest.com/photos/57fb9bcc06d6622c7c27fc1c/master/w_1600%2Cc_limit/pineapple_st.jpg',
            149.99),
        new Place('p2',
            'L\'amour Toujoure',
            'Romantic place in Paris',
            'http://www.woburnvillage.co.uk/images/eat-and-drink/Paris%20House%20Exterior.jpg',
            189.99),
        new Place('p3',
            'Foggy Palace',
            'Not your average trip',
            'https://external-preview.redd.it/p-oSFQmw3XAjDQ0MjmGI10smVZ52uLeo1jpmcpAm2lU.jpg?auto=webp&s=a539148b61f251f20bddcd5ebf4bcbc2c08afdf6',
            99.99)
    ];

    get getPlaces() {
        return [...this.places];
    }

    getPlace(id: string) {
        return {...this.places.find(p => p.id === id)};
    }

    constructor() {
    }
}
