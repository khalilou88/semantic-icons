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
  selector: 'svg[si-apachefreemarker-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Apache FreeMarker</svg:title>
    <svg:path
      d="M0 12.06v-.311l1.16-.538v.281l-.867.392v.027l.868.402v.281L0 12.059zm3.18-.252h-.266l-.071.409h.303l-.054.271h-.293l-.07.394h-.273l.069-.394h-.362l-.07.394h-.275l.069-.394h-.254l.054-.271h.247l.071-.41h-.281l.054-.27h.274l.071-.42h.274l-.072.42h.363l.071-.42h.276l-.076.42h.276l-.054.27zm-.537 0h-.362l-.074.409h.362l.074-.41zm1.134-.65h1.097v.181h-.9v.62h.806v.179h-.806v.744h-.197v-1.725zm2.695 1.724-.363-.552a1.625 1.625 0 0 1-.11.005H5.54v.547h-.197v-1.725h.655c.216 0 .382.051.5.153.12.1.18.242.18.426a.6.6 0 0 1-.1.355.54.54 0 0 1-.289.202l.407.59h-.224zm-.474-.73c.158 0 .279-.034.363-.103.085-.07.128-.173.128-.308 0-.131-.043-.23-.128-.298-.084-.069-.205-.104-.363-.104H5.54v.814h.458zm1.305-.995h1.17v.182H7.5v.58h.87v.18H7.5v.6h1.006v.183H7.303v-1.725zm1.782 0h1.171v.182h-.974v.58h.87v.18h-.87v.6h1.006v.183H9.085v-1.725zm1.782 0h.24l.658 1.257.65-1.257h.242v1.725h-.185l-.003-1.437-.65 1.255h-.114l-.655-1.255v1.437h-.183v-1.725zm3.774 1.725-.194-.44h-.94l-.192.44h-.21l.775-1.725h.204l.772 1.725h-.215zm-1.052-.623h.779l-.392-.887-.387.887zm2.848.623-.363-.552a1.625 1.625 0 0 1-.11.005h-.459v.547h-.197v-1.725h.655c.216 0 .382.051.5.153.12.1.18.242.18.426a.6.6 0 0 1-.1.355.54.54 0 0 1-.289.202l.407.59h-.224zm-.474-.73c.158 0 .279-.034.363-.103.085-.07.128-.173.128-.308 0-.131-.043-.23-.128-.298-.084-.069-.205-.104-.363-.104h-.458v.814h.458zm2.712.73h-.239l-.635-.82-.336.367v.453h-.197v-1.725h.197v1.013l.927-1.013h.237l-.688.752.734.973zm.496-1.725h1.17v.182h-.973v.58h.87v.18h-.87v.6h1.005v.183h-1.202v-1.725zm2.91 1.725-.362-.552a1.625 1.625 0 0 1-.11.005h-.459v.547h-.197v-1.725h.655c.216 0 .382.051.5.153.12.1.18.242.18.426 0 .142-.033.26-.1.355s-.164.163-.289.202l.407.59h-.224zm-.473-.73c.158 0 .279-.034.363-.103.085-.07.128-.173.128-.308 0-.131-.043-.23-.128-.298-.084-.069-.205-.104-.363-.104h-.458v.814h.458zM24 11.75v.31l-1.16.535v-.281l.867-.402v-.027l-.868-.392v-.28l1.161.537z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiApachefreemarkerIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#326CAC');
  }
}
