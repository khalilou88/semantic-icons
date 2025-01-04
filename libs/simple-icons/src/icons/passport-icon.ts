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
  selector: 'svg[si-passport-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Passport</svg:title>
    <svg:path
      d="M11.875 0A9.6 9.6 0 0 0 2.4 9.475h4.8A4.81 4.81 0 0 1 11.875 4.8zm.25 0v4.8A4.81 4.81 0 0 1 16.8 9.475h4.8A9.6 9.6 0 0 0 12.125 0zM2.4 9.725V24H12v-4.8H7.2V9.724zm9.6 9.474a9.599 9.599 0 0 0 9.6-9.474h-4.8A4.807 4.807 0 0 1 12 14.4z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPassportIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
