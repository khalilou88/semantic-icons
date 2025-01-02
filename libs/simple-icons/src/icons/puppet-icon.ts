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
  selector: 'svg[si-puppet-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Puppet</title>
    <svg:path
      d="M8.984 21.611H6.595v-2.388h2.39zM6.595 2.39h2.39v2.388h-2.39zm13.198 6.028h-5.48l.001-.002-2.941-2.941V0H4.207v7.166h5.48l2.938 2.938.002-.001v3.794l-.003-.003-2.94 2.94H4.207V24h7.166v-5.477l2.94-2.94h5.48V8.417"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPuppetIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
