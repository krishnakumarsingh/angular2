import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
	selector: '[autoGrow]',
	host: {
		'(focus)': 'onFocus()',
		'(blur)': 'onBlur()'
	}
})
export class AutoGrowDirective {
	constructor(private el: ElementRef, private renderer: Renderer) {

	}

	onFocus(){
		console.log(this.el, this.renderer);
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
	}
	onBlur(){
		console.log("Bye");
		this.renderer.setElementStyle(this.el.nativeElement, 'width', '120');
	}
}