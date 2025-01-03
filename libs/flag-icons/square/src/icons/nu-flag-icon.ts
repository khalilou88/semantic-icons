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
  selector: 'svg[si-nu-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fedd00" d="M0 0h512v512H0z" />
    <svg:path fill="#012169" d="M0 0h256v256H0z" />
    <svg:path
      fill="#fff"
      d="M256 0v32l-95 96 95 93.5V256h-33.5L127 162l-93 94H0v-34l93-93.5L0 37V0h31l96 94 93-94z"
    />
    <svg:path
      fill="#c8102e"
      d="m92 162 5.5 17L21 256H0v-1.5zm62-6 27 4 75 73.5V256zM256 0l-96 98-2-22 75-76zM0 .5 96.5 95 67 91 0 24.5z"
    />
    <svg:path fill="#fff" d="M88 0v256h80V0zM0 88v80h256V88z" />
    <svg:path fill="#c8102e" d="M0 104v48h256v-48zM104 0v256h48V0z" />
    <svg:circle cx="128" cy="128" r="43.6" fill="#012169" />
    <svg:path
      fill="#fedd00"
      d="m128 84.4 25.6 78.8-67-48.7h82.8l-67 48.7m-49.1-58.3 15 46.3L29 122.6h48.7l-39.4 28.6m164.4-46.3 15 46.3-39.4-28.6H227l-39.4 28.6m-59.6 39 15 46.3-39.3-28.6h48.6L113 236.5m15-217L143 66l-39.3-28.7h48.6L113 66"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNuFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
