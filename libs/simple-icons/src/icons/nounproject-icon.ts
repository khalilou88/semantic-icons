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
  selector: 'svg[si-nounproject-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Noun Project</title>
    <svg:path
      d="M17.672 8.846H24v6.327h-6.328zM6.328 11.99a3.164 3.164 0 0 1-3.164 3.163A3.164 3.164 0 0 1 0 11.991a3.164 3.164 0 0 1 3.164-3.164 3.164 3.164 0 0 1 3.164 3.164m5.504 1.142l2.04 2.021 1.142-1.16-2.022-2.003 2.022-2.003-1.142-1.142-2.04 2.003L9.81 8.846 8.649 9.988l2.022 2.003-2.022 2.003 1.16 1.16Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNounprojectIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
