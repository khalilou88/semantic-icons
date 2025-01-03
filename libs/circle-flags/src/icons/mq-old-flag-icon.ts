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
  selector: 'svg[si-mq-old-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#0052b4"
        d="M0 0h222.6l31 23.4L289.4 0H512v222.6l-21.5 31 21.5 35.8V512H289.4l-34.2-20.5-32.6 20.5H0V289.4l22.7-32.6L0 222.6z"
      />
      <svg:path
        fill="#eee"
        d="M222.6 0v222.6H0v66.8h222.6V512h66.8V289.4H512v-66.8H289.4V0z"
      />
      <svg:path
        fill="#eee"
        d="M343.4 162.4a6.2 6.2 0 0 1 6.2-6.1h13.2a38 38 0 0 0 0-75.9h-12.6c-4-3-9.6-5-15.6-5-12.7 0-23 8.3-23 18.4 0 10 10.1 18.2 22.6 18.3h28.6a6.2 6.2 0 0 1 0 12.4h-13.2a38 38 0 0 0 0 75.8h51.1v-31.7h-51.1a6.2 6.2 0 0 1-6.2-6.2zm-200.4 0a6.2 6.2 0 0 1 6.2-6.1h13.2a38 38 0 0 0 0-75.9H150c-4.1-3-9.6-5-15.7-5-12.6 0-22.9 8.3-22.9 18.4 0 10 10 18.2 22.6 18.3h28.5a6.2 6.2 0 0 1 0 12.4h-13.2a38 38 0 0 0 0 75.8h51.1v-31.7h-51a6.2 6.2 0 0 1-6.3-6.2zm200.4 236.2a6.2 6.2 0 0 1 6.2-6.2h13.2a38 38 0 0 0 0-75.8h-12.6c-4-3-9.6-5-15.6-5-12.7 0-23 8.3-23 18.4 0 10 10.1 18.1 22.6 18.3h28.6a6.2 6.2 0 0 1 6.2 6.2 6.2 6.2 0 0 1-6.2 6.2h-13.2a38 38 0 0 0 0 75.8h51v-31.7h-51a6.2 6.2 0 0 1-6.2-6.2zm-200.4 0a6.2 6.2 0 0 1 6.2-6.2h13.2a38 38 0 0 0 0-75.8H150c-4.1-3-9.6-5-15.7-5-12.6 0-22.9 8.3-22.9 18.4 0 10 10 18.1 22.6 18.3h28.5a6.2 6.2 0 0 1 6.2 6.2 6.2 6.2 0 0 1-6.2 6.2h-13.2a38 38 0 0 0 0 75.8h51.1v-31.7h-51a6.2 6.2 0 0 1-6.3-6.2z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMqOldFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}