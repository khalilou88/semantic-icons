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
  selector: 'svg[si-database-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.28636 3.71264C4.853 4.09212 4.5 4.60958 4.5 5.25V18.75C4.5 19.3904 4.853 19.9079 5.28636 20.2874C5.7212 20.6681 6.30718 20.9769 6.96654 21.2211C8.29107 21.7116 10.0708 22 12 22C13.9292 22 15.7089 21.7116 17.0335 21.2211C17.6928 20.9769 18.2788 20.6681 18.7136 20.2874C19.147 19.9079 19.5 19.3904 19.5 18.75V5.25C19.5 4.60958 19.147 4.09212 18.7136 3.71264C18.2788 3.33187 17.6928 3.02313 17.0335 2.77892C15.7089 2.28836 13.9292 2 12 2C10.0708 2 8.29107 2.28836 6.96654 2.77892C6.30718 3.02313 5.7212 3.33187 5.28636 3.71264ZM6.27454 4.84114C6.52284 4.62371 6.92537 4.39375 7.48751 4.18554C8.60601 3.77129 10.2013 3.5 12 3.5C13.7987 3.5 15.394 3.77129 16.5125 4.18554C17.0746 4.39375 17.4772 4.62371 17.7255 4.84114C17.9752 5.05985 18 5.20007 18 5.25C18 5.29993 17.9752 5.44015 17.7255 5.65886C17.4772 5.87629 17.0746 6.10625 16.5125 6.31446C15.394 6.72871 13.7987 7 12 7C10.2013 7 8.60601 6.72871 7.48751 6.31446C6.92537 6.10625 6.52284 5.87629 6.27454 5.65886C6.02476 5.44015 6 5.29993 6 5.25C6 5.20007 6.02476 5.05985 6.27454 4.84114ZM18 9.75C18 9.79993 17.9752 9.94015 17.7255 10.1589C17.4772 10.3763 17.0746 10.6063 16.5125 10.8145C15.394 11.2287 13.7987 11.5 12 11.5C10.2013 11.5 8.60601 11.2287 7.48751 10.8145C6.92537 10.6063 6.52284 10.3763 6.27454 10.1589C6.02476 9.94015 6 9.79993 6 9.75V7.28202C6.29445 7.44688 6.62039 7.59287 6.96654 7.72108C8.29107 8.21164 10.0708 8.5 12 8.5C13.9292 8.5 15.7089 8.21164 17.0335 7.72108C17.3796 7.59287 17.7055 7.44688 18 7.28202V9.75ZM6 11.782C6.29445 11.9469 6.62039 12.0929 6.96654 12.2211C8.29107 12.7116 10.0708 13 12 13C13.9292 13 15.7089 12.7116 17.0335 12.2211C17.3796 12.0929 17.7055 11.9469 18 11.782V14.25C18 14.2999 17.9752 14.4402 17.7255 14.6589C17.4772 14.8763 17.0746 15.1063 16.5125 15.3145C15.394 15.7287 13.7987 16 12 16C10.2013 16 8.60601 15.7287 7.48751 15.3145C6.92537 15.1063 6.52284 14.8763 6.27454 14.6589C6.02476 14.4402 6 14.2999 6 14.25V11.782ZM6 18.75V16.282C6.29445 16.4469 6.62039 16.5929 6.96654 16.7211C8.29107 17.2116 10.0708 17.5 12 17.5C13.9292 17.5 15.7089 17.2116 17.0335 16.7211C17.3796 16.5929 17.7055 16.4469 18 16.282V18.75C18 18.7999 17.9752 18.9401 17.7255 19.1589C17.4772 19.3763 17.0746 19.6063 16.5125 19.8145C15.394 20.2287 13.7987 20.5 12 20.5C10.2013 20.5 8.60601 20.2287 7.48751 19.8145C6.92537 19.6063 6.52284 19.3763 6.27454 19.1589C6.02476 18.9401 6 18.7999 6 18.75Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDatabase2Icon implements OnInit {
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
