import {Component} from 'angular2/core';
import {CoursesComponent} from '../courses/courses.component';
import {AuthorsComponent} from '../authors/authors.component';
import {HeadersComponent} from '../headers/Header.component';
import {SearchesComponent} from '../search/search.component';
const path = "./app/app/"
@Component({
    selector: 'my-app',
    templateUrl: path + "app.component.html",
    styleUrls: [path + "app.component.css"],
    directives: [CoursesComponent, AuthorsComponent, HeadersComponent, SearchesComponent]
})
export class AppComponent {
	title = `Hello`,
	name = `KK`
}