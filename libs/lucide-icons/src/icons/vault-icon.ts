import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-vault-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect width="18" height="18" x="3" y="3" rx="2" />
    <svg:circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    <svg:path d="m7.9 7.9 2.7 2.7" />
    <svg:circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
    <svg:path d="m13.4 10.6 2.7-2.7" />
    <svg:circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />
    <svg:path d="m7.9 16.1 2.7-2.7" />
    <svg:circle cx="16.5" cy="16.5" r=".5" fill="currentColor" />
    <svg:path d="m13.4 13.4 2.7 2.7" />
    <svg:circle cx="12" cy="12" r="2" />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVaultIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  readonly class = input<string>('');

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
    this.render.setAttribute(svg, 'stroke', 'currentColor');
    this.render.setAttribute(svg, 'stroke-width', '2');
    this.render.setAttribute(svg, 'stroke-linecap', 'round');
    this.render.setAttribute(svg, 'stroke-linejoin', 'round');
  }
}
