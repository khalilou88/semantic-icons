import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-wikiversity-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Wikiversity</title>
    <svg:path
      d="M0 20.462h24v.795H0zm19.974-8.692h3.205v8.256h-3.205zm-6.385 0h3.206v8.256h-3.206zm-6.384 0h3.205v8.256H7.205zm-6.385 0h3.205v8.256H.82zM0 10.539h24v.795H0zm7.615-6.436c1.103-.897 2.23-1.359 3.974-1.359-1.359.538-2.282 1.385-2.974 2.026-.41-.206-.692-.385-1-.667zm8.77 0c-1.103-.897-2.232-1.359-3.975-1.359 1.359.538 2.282 1.385 2.974 2.026.41-.206.693-.385 1-.667zm-4.616 1.436c-.923 0-1.744-.205-2.692-.59.948-.872 1.666-1.359 2.692-1.82zm.461 0c.924 0 1.744-.205 2.693-.59-.949-.872-1.667-1.359-2.693-1.82zm-3.897-.41A5.442 5.442 0 0 1 7.23 4.41C6.59 5 6.05 5.565 5.666 6.283c.436.384.795.64 1.334.897.359-.744.743-1.385 1.333-2.051zm7.333 0c.41-.205.77-.436 1.103-.718.641.59 1.18 1.154 1.564 1.872-.436.384-.795.64-1.333.897-.36-.744-.744-1.385-1.334-2.051zM11.77 6c-1 0-2.128-.282-3.026-.666a7.493 7.493 0 0 0-1.359 2.051c1.513.744 2.898 1.077 4.385 1.077zm.461 0c1 0 2.129-.282 3.026-.666a7.492 7.492 0 0 1 1.36 2.051c-1.514.744-2.898 1.077-4.386 1.077zm-6.82.693c.436.384.872.666 1.41.974-.256.564-.41 1.282-.513 1.975a12.27 12.27 0 0 1-1.564-.975c.129-.743.36-1.41.667-1.974zm13.179 0c-.436.384-.872.666-1.41.974.256.564.41 1.282.512 1.975a12.27 12.27 0 0 0 1.565-.975 6.396 6.396 0 0 0-.667-1.974zm-6.82 3.41H7.511C7.23 10 7 9.949 6.717 9.82a8.56 8.56 0 0 1 .487-1.974c1.41.743 2.898 1.076 4.564 1.076zm.461 0h4.256c.282-.103.513-.154.795-.282a8.56 8.56 0 0 0-.487-1.974c-1.41.743-2.897 1.076-4.564 1.076zm-7.667 0c0-.333.026-.615.077-.949.59.41.872.564 1.616.949zm14.872 0c0-.333-.025-.615-.077-.949-.59.41-.871.564-1.615.949z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiWikiversityIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}