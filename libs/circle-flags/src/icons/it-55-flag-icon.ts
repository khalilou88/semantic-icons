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
  selector: 'svg[si-it-55-flag-icon]',
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
      <svg:path fill="#6da544" d="M0 0h512v512H0V0Z" />
      <svg:path fill="#eee" d="M152 72h208v384H152z" />
      <svg:path
        fill="#d80027"
        d="M232 136h16l-16 16v96l16 16h-16v48h16l-16 16v96l16 16h16l16-16v-96l-16-16h16v-48h-16l16-16v-96l-16-16h16V88h-48v48zm112-48h-48v48h16l-16 16v96l16 16h-16v48h16l-16 16v96l16 16h16l16-16v-96l-16-16h16v-48h-16l16-16v-96l-16-16h16V88zm-176 48h16l-16 16v96l16 16h-16v48h16l-16 16v96l16 16h16l16-16v-96l-16-16h16v-48h-16l16-16v-96l-16-16h16V88h-48v48z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiIt55FlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
  }
}
