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
  selector: 'svg[si-it-67-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <svg:mask
        id="a"
        width="512"
        height="512"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <svg:circle cx="256" cy="256" r="256" fill="#fff" />
      </svg:mask>
    </defs>
    <svg:g mask="url(#a)">
      <svg:path fill="#338af3" d="M0 0h512v512H0V0Z" />
      <svg:path
        fill="#d80027"
        d="M344 152H144v141c0 18 5 33.3 12.7 46.3l30.9 33.1c31.4 23.5 68.4 32 68.4 32S368 378.7 368 293V192l-24-40Z"
      />
      <svg:path
        fill="#eee"
        fill-rule="evenodd"
        d="m202.4 210.3-14.2-4.7-6.7 13.4-6.7-13.4-14.2 4.7 4.8-14.2-13.4-6.6 13.4-6.7-4.8-14.2 14.2 4.8 6.7-13.4 6.7 13.4 14.2-4.8-4.8 14.2 13.4 6.7-13.4 6.6 4.8 14.2Z"
      />
      <svg:path
        fill="#eee"
        d="M344 152 156.6 339.4a117 117 0 0 0 30.9 33.1L368 192v-40h-24Z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiIt67FlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
  }
}