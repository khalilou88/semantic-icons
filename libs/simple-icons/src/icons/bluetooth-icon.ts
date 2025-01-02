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
  selector: 'svg[si-bluetooth-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Bluetooth</title>
    <svg:path
      d="M12 0C6.76 0 3.1484 2.4895 3.1484 12S6.76 24 12 24c5.24 0 8.8516-2.4895 8.8516-12S17.24 0 12 0zm-.7773 1.6816l6.2148 6.2149L13.334 12l4.1035 4.1035-6.2148 6.2149V14.125l-3.418 3.42-1.2422-1.2442L10.8515 12l-4.289-4.3008 1.2422-1.2441 3.418 3.4199V1.6816zm1.748 4.2442v3.9687l1.9844-1.9843-1.9844-1.9844zm0 8.1816v3.9668l1.9844-1.9844-1.9844-1.9824Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBluetoothIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
