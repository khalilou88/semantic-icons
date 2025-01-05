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
  selector: 'svg[si-mulesoft-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Mulesoft</svg:title>
    <svg:path
      d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.373 12-12S18.627 0 12 0zm0 1.055c6.045 0 10.945 4.9 10.945 10.945S18.045 22.945 12 22.945 1.055 18.045 1.055 12c0-6.044 4.9-10.945 10.945-10.945zM7.33 4.364s-2.993 1.647-3.96 5.25c-.647 2.224-.39 4.702.903 6.914a8.957 8.957 0 0 0 3.95 3.596l.802-3.062c-1.801-.85-3.11-2.571-3.11-4.79a5.647 5.647 0 0 1 .943-3.141l3.752 5.866h2.792l3.753-5.866a5.647 5.647 0 0 1 .943 3.14c0 2.22-1.308 3.94-3.109 4.791l.802 3.062a8.957 8.957 0 0 0 3.948-3.594c1.294-2.213 1.551-4.692.904-6.916l.002.003c-.966-3.603-3.96-5.251-3.96-5.251l-.336.527-4.341 6.797h-.003L7.656 4.876z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMulesoftIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '00A0DF');
  }
}
