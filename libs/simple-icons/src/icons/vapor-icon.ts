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
  selector: 'svg[si-vapor-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Vapor</svg:title>
    <svg:path
      d="M22.75 13.908v1.56L12 24 1.25 15.468v-1.56L12 22.44l10.75-8.532zM12 17.267L1.25 8.824 12 0l10.75 8.824L12 17.267zm.356-4.635a3.193 3.193 0 0 0 3.193-3.193 3.185 3.185 0 0 0-3.029-3.176l.001-.016-4.514-.427 1.205 4.102a3.184 3.184 0 0 0 3.144 2.71zM12 20.269L1.25 11.737v1.533L12 21.802l10.75-8.532v-1.533L12 20.269zm0-2.366L1.25 9.46v1.64L12 19.63l10.75-8.532V9.46L12 17.903z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiVaporIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '0D0D0D');
  }
}
