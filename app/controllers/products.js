import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({

    baseapi: service(),

    nome: 'Jonatas',

    data: computed(function() {
        return this.get('model');
    }),

    actions: {
        
    }
})
