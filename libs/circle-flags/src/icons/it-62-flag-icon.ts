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
  selector: 'svg[si-it-62-flag-icon]',
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
        fill="#6da544"
        d="M310.9 146.9H209.1l17 16.9 39.6 5.7 28.2-5.7 17-16.9z"
      />
      <svg:path
        fill="#ffda44"
        d="m203.4 141.2 175.4 175.4-62.2 62.2-175.4-175.4z"
      />
      <svg:path
        fill="#ffda44"
        d="m316.6 141.2 62.2 62.2-175.4 175.4-62.2-62.2z"
      />
      <svg:path fill="#d80027" d="m260 209 51 51-51 51-51-51z" />
      <svg:path
        fill="#338af3"
        d="m316.6 367.5-34-34 21.4-29.3 29.5-21.6 34 34-50.9 50.9z"
      />
      <svg:path fill="#d80027" d="m203.4 265.7 50.9 50.9-51 50.9-50.8-51z" />
      <svg:path
        fill="#338af3"
        d="m203.4 152.5 51 50.9-51 50.9-50.9-51zM310.9 260 260 209.1v101.8l50.9-50.9z"
      />
      <svg:path fill="#d80027" d="m316.6 265.7 17 17-51 50.8-17-17z" />
      <svg:path
        fill="#0052b4"
        d="m299.6 169.5-33.9 33.9 33.9 34 11.3-34-11.3-33.9z"
      />
      <svg:path
        fill="#338af3"
        d="m333.5 237.4 34-34-34-33.9-11.3 33.9 11.3 34z"
      />
      <svg:path
        fill="#6da544"
        d="m316.6 152.5-17 17v67.9l17 16.9 16.9-16.9v-67.9l-16.9-17z"
      />
      <svg:path fill="#ffda44" d="M203.4 141.2h113.1v8H203.4z" />
      <svg:path
        fill="#eee"
        d="M293.9 163.8h-67.8l16.9 17 17 5.7 17-5.7 16.9-17z"
      />
      <svg:path fill="#d80027" d="m260 197.8 17-17h-34l17 17z" />
      <svg:path
        fill="#6da544"
        d="M373.1 310.9V209.1l-16.9 17-5.7 39.6 5.7 28.2 16.9 17z"
      />
      <svg:path
        fill="#eee"
        d="M356.2 293.9v-67.8l-17 16.9-5.7 17 5.7 17 17 16.9z"
      />
      <svg:path fill="#d80027" d="m322.2 260 17 17v-34l-17 17z" />
      <svg:path
        fill="#6da544"
        d="M209.1 373.1h101.8l-17-16.9-39.6-5.7-28.2 5.7-17 16.9z"
      />
      <svg:path
        fill="#eee"
        d="M226.1 356.2h67.8l-16.9-17-17-5.7-17 5.7-16.9 17z"
      />
      <svg:path fill="#d80027" d="m260 322.2-17 17h34l-17-17z" />
      <svg:path
        fill="#6da544"
        d="M146.9 209.1v101.8l16.9-17 5.7-39.6-5.7-28.2-16.9-17z"
      />
      <svg:path
        fill="#eee"
        d="M163.8 226.1v67.8l17-16.9 5.7-17-5.7-17-17-16.9z"
      />
      <svg:path fill="#d80027" d="m197.8 260-17-17v34l17-17z" />
      <svg:path
        fill="#ffda44"
        d="M203.4 370.8h113.1v8H203.4zm167.4-54.2V203.5h8v113zm-229.6 0v-113h8v113z"
      />
      <svg:g fill="#ffda44">
        <svg:path d="m202.9 189.4 27.1 27.1-13.6 13.6-27.1-27.2z" />
        <svg:circle cx="196.1" cy="196.1" r="9.6" />
      </svg:g>
      <svg:path
        fill="#ffda44"
        d="m340.6 332.1 2.1.7 9.2-9.2-.7-2-11.3-11.4c2.1-2.1 2.1-5 0-7-1.4-1.5-5-2.2-7 0l-11.4 11.2-2.1.8v-2.9l11.3-11.3-2.1-2.1-11.3 11.3a5 5 0 0 0 0 7c1.4 1.5 5 2.2 7 0l11.4-11.2 2-.7v2.8l-12.6 12.7a6 6 0 0 1-9.2-.7 7 7 0 0 0-9.2.7 7 7 0 0 0 0 8.5l3.5 3.5 5 5a6 6 0 0 0 9.1.7l1.5 1.4-2.2 2.1a5 5 0 0 0 .7 7.8h1.5l8.4-8.5.8-2.1-5.7-5.7 11.3-12.7 2.1 2.1-2 2.2a5 5 0 0 0 0 7Z"
      />
      <svg:path
        fill="#eee"
        d="M284 248a8 8 0 0 1-8 8 8 8 0 0 1-8 8v8h-4l4 8-8 8-8-8 4-8h-4v-8a8 8 0 0 1-8-8 8 8 0 0 1-8-8h16a8 8 0 1 1 16 0h16Z"
      />
      <svg:path
        fill="#ffda44"
        d="M360 64v48H168V64a16 16 0 0 1 16 16h16a16 16 0 1 1 32 0h16a16 16 0 1 1 32 0h16a16 16 0 1 1 32 0h16a16 16 0 0 1 16-16Z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiIt62FlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
  }
}