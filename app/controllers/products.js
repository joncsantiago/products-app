import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductsController extends Controller {

    @service('baseapi') baseapi;

    @action
    listItens() {
        let url = 'http://localhost:3000/api/products';
        let data = this.baseapi.get(url);

        data.then(
            response => {
                console.log('response data', response.data)
            },
            error => {
                console.error(error);
            }
        );
    }
}
