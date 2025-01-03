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
  selector: 'svg[si-antena3-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Antena 3</title>
    <svg:path
      d="M12.997 10.755a7.222 7.222 0 00-.997-.083c-.111 0-.497.008-.998.083-2.919.438-4.948 2.08-6.201 4.695-.641 1.336-.357 2.255.8 3.166.068.054.137.106.205.158.213.143.423.28.627.414 3.026 1.975 4.133 2.676 4.58 2.881.186.085.512.244.962.255h.048c.45-.011.777-.17.963-.255.446-.205 1.553-.907 4.579-2.882.205-.134.415-.272.629-.415a22.7 22.7 0 00.203-.156c1.157-.911 1.441-1.83.8-3.166-1.251-2.614-3.281-4.257-6.2-4.695zm7.252 4.36c.637.774 1.205.834 1.843.387.85-.597 1.894-2.857 1.908-4.724-.05-5.112-5.337-8.666-10.648-9.093-.212-.02-.534-.026-.777.153-.247.182-.292.457-.113.812.305.603.708 1.147 1.092 1.7 1.928 2.77 3.56 5.72 5.298 8.607.442.734.85 1.492 1.397 2.157zM5.148 12.956c1.738-2.886 3.37-5.837 5.297-8.607.385-.553.787-1.097 1.092-1.7.18-.355.135-.63-.113-.812-.243-.18-.565-.173-.777-.153C5.337 2.112.05 5.665 0 10.778c.013 1.867 1.057 4.128 1.908 4.724.638.447 1.206.387 1.843-.388.546-.665.954-1.423 1.397-2.157Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAntena3Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
