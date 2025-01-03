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
  selector: 'svg[si-bm-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="M256 0h256v512H0V256z" />
      <svg:path
        fill="#eee"
        d="M0 0h33.4l31.8 16.4 35-16.4H256v133.6l-9.3 33.7 9.3 41.5V256h-47.2l-39.3-7-35.9 7.1L0 256V100.2l15.4-34.5L0 33.4z"
      />
      <svg:path fill="#496e2d" d="M445.2 256.1zm-155.8 0z" />
      <svg:path fill="#d80027" d="m267 235.5-102-102h-31.4L267 267z" />
      <svg:path
        fill="#d80027"
        d="M33.4 0v33.4H0v66.8h33.4v170.6h66.8V100.2h170.2V33.4H100.2V0z"
      />
      <svg:path
        fill="#0052b4"
        d="M180.8 133.6H256v75.2zm-47.2 47.2v75.3l75.2-.1z"
      />
      <svg:path
        fill="#eee"
        d="M289.4 133.6V256c0 59.6 155.8 59.6 155.8 0V133.6z"
      />
      <svg:path
        fill="#6da544"
        d="M289.4 256c0 59.6 77.9 78 77.9 78s78-18.4 78-78h-156z"
      />
      <svg:path
        fill="#a2001d"
        d="m367.3 207-36.2 15.6V256l36.2 22.3 36.2-22.3v-33.4z"
      />
      <svg:path fill="#338af3" d="M331.1 189.2h72.4v33.4H331z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBmFlagIcon implements OnInit {
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
