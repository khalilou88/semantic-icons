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
  selector: 'svg[si-cloud-check-circle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.38688 7.48329C6.45702 4.44302 8.94354 2 12.0007 2C15.0578 2 17.5444 4.44308 17.6144 7.48338C20.0688 7.67706 22.0001 9.7301 22.0001 12.2342C22.0001 12.2685 21.9997 12.3027 21.999 12.3368C21.4783 11.685 20.8414 11.13 20.1197 10.7032C19.571 9.67117 18.4847 8.96844 17.2343 8.96844H16.866C16.4518 8.96844 16.116 8.63266 16.116 8.21844V7.6153C16.116 5.34248 14.2735 3.5 12.0007 3.5C9.72784 3.5 7.88536 5.34248 7.88536 7.6153V8.21844C7.88536 8.63266 7.54957 8.96844 7.13536 8.96844H6.76578C4.96214 8.96844 3.5 10.4306 3.5 12.2342C3.5 14.0379 4.96214 15.5 6.76577 15.5H9.84159C9.78134 15.8661 9.75 16.2419 9.75 16.625C9.75 16.7508 9.75338 16.8758 9.76005 17H6.76577C4.13371 17 2 14.8663 2 12.2342C2 9.72969 3.93195 7.67638 6.38688 7.48329Z"
      fill="#323544"
    />
    <svg:path
      d="M18.6553 15.1408C18.9482 15.4337 18.9482 15.9086 18.6553 16.2015L16.7477 18.1092C16.607 18.2498 16.4163 18.3288 16.2173 18.3288C16.0184 18.3288 15.8277 18.2498 15.687 18.1092L14.5947 17.0168C14.3018 16.7239 14.3018 16.2491 14.5947 15.9562C14.8876 15.6633 15.3625 15.6633 15.6553 15.9562L16.2173 16.5182L17.5947 15.1408C17.8876 14.8479 18.3625 14.8479 18.6553 15.1408Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.25 16.625C11.25 13.6565 13.6565 11.25 16.625 11.25C19.5935 11.25 22 13.6565 22 16.625C22 19.5935 19.5935 22 16.625 22C13.6565 22 11.25 19.5935 11.25 16.625ZM16.625 12.75C14.4849 12.75 12.75 14.4849 12.75 16.625C12.75 18.7651 14.4849 20.5 16.625 20.5C18.7651 20.5 20.5 18.7651 20.5 16.625C20.5 14.4849 18.7651 12.75 16.625 12.75Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCloudCheckCircleIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}