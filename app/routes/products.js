import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

    baseapi: service(),

    model(){
        let url = 'http://localhost:3000/api/products';
        let data = this.baseapi.get(url).then(resp => resp.data);
        return data;
    }

});
