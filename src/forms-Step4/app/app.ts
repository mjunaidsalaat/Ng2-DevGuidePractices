/**
 * Created by junaid.salaat on 11/24/2015.
 */

import {bootstrap, Component} from 'angular2/angular2'
import {HeroFormComponent} from './hero-form.component'

@Component({
    selector: 'my-app',
    template: '<hero-form></hero-form>',
    directives: [HeroFormComponent]
})
class AppComponent{

}


bootstrap(AppComponent);
