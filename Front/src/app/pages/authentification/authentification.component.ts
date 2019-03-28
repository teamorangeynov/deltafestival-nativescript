import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
    selector: 'authentification',
    templateUrl: './authentification.component.html',
    styleUrls: ['./authentification.component.scss'],
})
export class AuthentificationComponent {
    title = 'Connexion';

    elementType = 'url';
    value = 'https://assets.econsultancy.com/images/resized/0002/4236/qr_code-blog-third.png';
    @ViewChild('result') resultElement: ElementRef;
    showQRCode: boolean = true;
    constructor(private renderer: Renderer2) {

    }
    render(e) {
        console.log(e.result);
        let element: Element = this.renderer.createElement('p');
        element.innerHTML = e.result;
        this.renderElement(element);
    }

    renderElement(element) {
        for (let node of this.resultElement.nativeElement.childNodes) {
            this.renderer.removeChild(this.resultElement.nativeElement, node);
        }
        this.renderer.appendChild(this.resultElement.nativeElement, element);
    }

}

