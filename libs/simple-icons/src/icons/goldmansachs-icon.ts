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
  selector: 'svg[si-goldmansachs-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Goldman Sachs</svg:title>
    <svg:path
      d="M1.963 9.264h1.452v2.378c-.484.098-.855.148-1.262.148C.561 11.79 0 10.878 0 9.377c0-1.614.778-2.526 2.329-2.526.196 0 .567.014 1.03.084v1.522h-.336l-.19-.582c-.183-.553-.4-.827-.744-.827-.596 0-.912.806-.912 2.315 0 1.515.126 2.23.904 2.23.106 0 .231-.014.351-.048V9.776l-.469-.323v-.189Zm1.424 6.382c0 .954-.651 1.501-1.802 1.501-.315 0-.778-.048-1.213-.119v-1.865h.337l.14.441c.315 1.017.54 1.353.94 1.353.421 0 .722-.371.722-.862 0-.399-.189-.68-.595-.898l-.702-.378c-.541-.287-.835-.736-.835-1.283 0-.828.68-1.326 1.796-1.326.252 0 .547.022 1.016.085v1.521h-.337l-.188-.581c-.19-.618-.393-.842-.764-.842-.415 0-.66.266-.66.652 0 .343.19.589.561.799l.708.399c.596.337.876.786.876 1.403Zm3.101 1.102.14.211v.106H5.556l-.05-.407c-.112.308-.407.491-.786.491-.561 0-.912-.351-.912-.926 0-.561.315-.933 1.283-1.311l.414-.161v-.525c0-.463-.085-.652-.344-.652-.21 0-.329.112-.533.623l-.231.573h-.315v-1.144c.414-.126.828-.21 1.185-.21.792 0 1.221.378 1.221 1.066v2.266Zm.405-6.824c0 1.192-.637 1.866-1.459 1.866-.82 0-1.457-.674-1.457-1.866 0-1.193.637-1.866 1.459-1.866.82 0 1.457.673 1.457 1.866Zm-1.387 6.235v-1.213l-.133.056c-.414.169-.569.547-.569 1.101 0 .414.099.652.329.652.231 0 .373-.225.373-.596Zm.357-6.235c0-1.347-.112-1.704-.427-1.704s-.428.357-.428 1.704c0 1.346.113 1.704.428 1.704s.427-.358.427-1.704Zm3.521 6.269.126.064c-.224.646-.511.89-1.066.89-.904 0-1.409-.679-1.409-1.865 0-1.185.589-1.866 1.55-1.866.258 0 .603.042.897.16v1.193h-.329l-.132-.449c-.176-.596-.273-.75-.449-.75-.281 0-.505.365-.505 1.754 0 1.114.168 1.521.595 1.521.287.001.532-.181.722-.652Zm-.779-4.488H7.342v-.104l.141-.211V7.476l-.141-.21V7.16l1.123-.084v4.313l.14.211v.105Zm1.726.085c-.772 0-1.235-.702-1.235-1.901 0-1.192.483-1.83 1.227-1.83.379 0 .589.147.68.441V7.476l-.141-.21V7.16l1.123-.084v4.313l.14.211v.104h-.996l-.077-.533c-.111.457-.321.619-.721.619Zm2.461 4.958.14.211v.106H11.67v-.106l.14-.211v-2.525c0-.301-.091-.483-.309-.483-.26 0-.449.218-.449.645v2.363l.141.211v.106H9.93v-.106l.14-.211v-3.914l-.14-.21v-.105l1.122-.084v1.451c.127-.301.414-.469.82-.469.576 0 .919.365.919 1.073v2.258h.001Zm-2.664-6.846c0 1.263.112 1.648.421 1.648.385 0 .455-.554.455-1.662 0-1.073-.077-1.606-.449-1.606-.315 0-.427.379-.427 1.62Zm7.041 1.487.14.211v.104h-1.262V11.6l.14-.211V8.787c0-.252-.084-.407-.281-.407-.244 0-.441.219-.441.638v2.371l.14.211v.104h-1.262V11.6l.14-.211V8.787c0-.252-.084-.407-.28-.407-.245 0-.442.219-.442.638v2.371l.141.211v.104h-1.263V11.6l.14-.211V8.535l-.14-.169v-.104l1.01-.12h.084l.028.393c.119-.309.414-.477.814-.477.427 0 .708.21.834.589.105-.365.435-.589.856-.589.553 0 .904.365.904 1.072v2.259Zm-1.311 4.644c0 .609-.393 1.114-1.339 1.114-.245 0-.575-.028-1.087-.119v-1.304h.287l.091.281c.224.715.441.982.785.982.323 0 .533-.232.533-.59 0-.294-.147-.497-.497-.687l-.603-.323c-.385-.21-.596-.539-.596-.946 0-.638.499-1.024 1.325-1.024.239 0 .547.034.884.105v1.024h-.287l-.148-.373c-.168-.449-.329-.595-.595-.595-.287 0-.456.168-.456.449 0 .238.141.399.484.595l.595.337c.406.232.624.561.624 1.074Zm4.538-4.644.14.211v.104h-1.073l-.048-.407c-.112.309-.407.491-.786.491-.561 0-.911-.35-.911-.926 0-.561.315-.932 1.283-1.311l.413-.16v-.526c0-.463-.084-.652-.343-.652-.211 0-.329.113-.533.624l-.231.575h-.317V8.27c.415-.127.828-.211 1.185-.211.792 0 1.221.379 1.221 1.066v2.264Zm-.982-.589V9.587l-.133.056c-.413.168-.567.547-.567 1.101 0 .414.098.653.329.653.23 0 .371-.225.371-.597Zm4.586.8v.104h-1.263V11.6l.141-.211V8.864c0-.302-.091-.484-.309-.484-.26 0-.449.219-.449.646v2.363l.14.211v.104h-1.262V11.6l.14-.211V8.535l-.14-.169v-.104l1.01-.12h.084l.028.393c.119-.309.407-.477.82-.477.575 0 .918.365.918 1.072v2.259L24 11.6Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGoldmansachsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#7399C6');
  }
}
