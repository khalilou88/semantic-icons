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
  selector: 'svg[si-aeroplane-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.04 21.9877C15.94 21.9877 15.85 21.9677 15.76 21.9277L11.98 20.3777L8.2 21.9277C7.97 22.0177 7.71 21.9977 7.5 21.8577C7.29 21.7177 7.17 21.4877 7.17 21.2377V19.0577C7.17 18.8277 7.28 18.6077 7.46 18.4677L9.39 16.9677L9.27 14.5077L4.11 15.3277C3.9 15.3677 3.67 15.2977 3.51 15.1577C3.35 15.0177 3.25 14.8077 3.25 14.5877V12.0577C3.25 11.7677 3.42 11.5077 3.68 11.3777L9 8.8577C8.9 6.6077 9.57 4.3577 10.9 2.5377C11.41 1.8377 12.59 1.8377 13.1 2.5377C14.43 4.3577 15.11 6.5977 15 8.8577L20.32 11.3777C20.58 11.4977 20.75 11.7677 20.75 12.0577V14.5877C20.75 14.8077 20.65 15.0177 20.49 15.1577C20.32 15.2977 20.1 15.3677 19.89 15.3277L14.73 14.5077L14.61 16.9677L16.54 18.4677C16.72 18.6077 16.83 18.8277 16.83 19.0577V21.2377C16.83 21.4877 16.71 21.7177 16.5 21.8577C16.37 21.9377 16.23 21.9877 16.08 21.9877H16.04ZM8.67 19.4277V20.1177L11.7 18.8777C11.88 18.7977 12.09 18.7977 12.27 18.8777L15.3 20.1177V19.4177L13.35 17.8977C13.16 17.7477 13.05 17.5077 13.06 17.2677L13.24 13.5877C13.25 13.3777 13.35 13.1777 13.52 13.0477C13.69 12.9177 13.9 12.8577 14.11 12.8877L19.23 13.6977V12.5177L13.89 9.9877C13.62 9.8577 13.45 9.57769 13.46 9.26769L13.48 8.7977C13.57 6.9377 13.04 5.0877 11.98 3.5677C10.92 5.0877 10.39 6.9477 10.48 8.7977L10.5 9.26769C10.52 9.5677 10.35 9.8577 10.07 9.9877L4.73 12.5177V13.6977L9.85 12.8877C10.06 12.8577 10.27 12.9077 10.44 13.0477C10.61 13.1777 10.71 13.3777 10.72 13.5877L10.9 17.2677C10.91 17.5077 10.8 17.7477 10.61 17.8977L8.67 19.4177V19.4277Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAeroplane1Icon implements OnInit {
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