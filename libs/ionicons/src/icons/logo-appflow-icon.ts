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
  selector: 'svg[si-logo-appflow-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M198.626 28.424L8 484.423h114.376L256 164.779l133.624 319.645H504l-190.626-456H198.626z"
    />
    <svg:path
      d="M312 346.039c0 30.928-25.072 56-56 56s-56-25.072-56-56 25.072-56 56-56 56 25.072 56 56z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLogoAppflowIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
