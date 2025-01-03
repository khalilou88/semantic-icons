import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-it-65-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
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
    </svg:defs>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="M0 0h512v512H0V0Z" />
      <svg:path
        fill="#0052b4"
        d="M256 404.4S368 378.7 368 293v-77l-88 80-78 86c27.3 16.3 54 22.4 54 22.4Z"
      />
      <svg:path
        fill="#eee"
        d="M144 152v141a97 97 0 0 0 1.6 17.4L224 240l80-88H144Z"
      />
      <svg:path
        fill="#6da544"
        d="M304 152 145.5 310.5c6.5 34 31.7 57 56.4 71.6l166-166v-64h-64Z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiIt65FlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
  }
}
