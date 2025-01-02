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
  selector: 'svg[si-sequelize-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Sequelize</title>
    <svg:path
      d="M12.0264 0 1.5947 5.9922v12.0156L12.0264 24l10.3789-5.9922V5.9922L12.0264 0zm-.0274 3.4844 7.4297 4.2266v8.5781l-7.4297 4.2266-7.3476-4.1817-.0801-8.623 7.4277-4.2266zm.0489.5898c-.9765.5627-1.9519 1.1274-2.9277 1.6914v.2539l2.6074 1.5234v.4824c.1355-.0781.2616-.1511.4023-.2324l.2559.1504v-.3359c.8844-.5068 1.8073-1.0412 2.5684-1.4805.0035-.1232.0027-.2534.0039-.373-.9703-.5596-1.9403-1.1197-2.9102-1.6797zM8.335 6.1387c-.9705.553-1.9312 1.1228-2.8926 1.6914v3.4023c.965.5553 1.9287 1.1127 2.8926 1.6699l.4023-.2324v-2.916c.8561-.4945 1.7522-1.0126 2.4902-1.4395v-.4843L8.335 6.1387zm7.4433.0879-2.8926 1.6699v.3379l2.6367 1.541v3.0664c.0854.0494.1705.0991.2559.1484l2.8926-1.6699V7.918l-2.8926-1.6914zm-3.6484 2.1445c-.9636.5584-1.9281 1.1151-2.8926 1.6719v3.4238c.965.5553 1.9287 1.1127 2.8926 1.6699l2.8926-1.6719v-3.4023l-2.8926-1.6914zm-6.1973 3.7227c-.1627.0962-.3275.1889-.4902.2852v3.4023c.9643.5571 1.9284 1.1145 2.8926 1.6719l.4023-.2324v-2.918c.1625-.0939.3086-.1787.4727-.2734-.1629-.0945-.3047-.1763-.4727-.2734v-.508l-.4023.2325c-.8251-.4771-1.6902-.976-2.4024-1.3867zm12.2481.0859-2.4023 1.3887c-.088-.0509-.1672-.0972-.2559-.1484v.334l-.4922.2852.4922.2871v3.0664c.0854.0494.1705.0991.2559.1484l2.8926-1.6719v-3.4023l-.4903-.2872zm-8.4688 2.1387c-.1581.0913-.3165.1821-.4746.2734v3.4238c.9637.5575 1.9282 1.1136 2.8926 1.6699l2.8926-1.6699v-3.4023l-.4902-.2871-2.4023 1.3887c-.8307-.4804-1.7013-.9829-2.4181-1.3965z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiSequelizeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
