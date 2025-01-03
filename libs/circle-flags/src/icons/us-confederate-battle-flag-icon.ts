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
  selector: 'svg[si-us-confederate-battle-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#d80027" d="M0 68 68 0h376l68 68v376l-68 68H68L0 444Z" />
      <svg:path
        fill="#eee"
        d="M0 50v18l188 188L0 444v18l50 50h18l188-188 188 188h18l50-50v-18L324 256 512 68V50L462 0h-18L256 188 68 0H50Z"
      />
      <svg:path
        fill="#0052b4"
        d="M0 0v50l206 206L0 462v50h50l206-206 206 206h50v-50L306 256 512 50V0h-50L256 206 50 0H0z"
      />
      <svg:path
        fill="#eee"
        d="m307 274 19 57-49-35h60l-48 35zm-51-51 19 57-49-35h60l-48 35zm103 103 19 57-49-35h60l-48 35zm51 51 19 57-49-35h60l-48 35zM153 120l19 57-49-35h60l-48 35zm-51-51 19 57-49-35h60l-48 35zm103 103 19 57-49-35h60l-48 35zm0 102-18 57 48-35h-60l49 35zm-52 52-18 57 48-35h-60l49 35zm-51 51-18 57 48-35H72l49 35zm257-257-18 57 48-35h-60l49 35zm51-51-18 57 48-35h-60l49 35zM307 172l-18 57 48-35h-60l49 35z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiUsConfederateBattleFlagIcon implements OnInit {
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