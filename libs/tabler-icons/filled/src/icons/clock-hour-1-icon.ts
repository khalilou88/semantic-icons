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
  selector: 'svg[si-clock-hour-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5.401 9.576l.052 .021l.08 .026l.08 .019l.072 .011l.117 .007l.076 -.003l.135 -.02l.082 -.02l.103 -.039l.073 -.035l.078 -.046l.06 -.042l.08 -.069l.083 -.088l.062 -.083l2 -3a1 1 0 1 0 -1.664 -1.11l-.168 .251v-1.696a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1v5.026l.009 .105l.02 .107l.04 .129l.048 .102l.046 .078l.042 .06l.069 .08l.088 .083l.083 .062l.09 .053z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiClockHour1Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
