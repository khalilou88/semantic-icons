import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-rubysinatra-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Ruby Sinatra</title>
      <path
        d="M5.224 10.525c-1.215.4-3.32 1.384-3.943 1.934-.069.06-.138.125-.207.194-.49.43-.76.851-.89 1.285A4.423 4.423 0 0 0 0 15.208c-.005.842.247 1.369.247 1.369.714 1.428 2.416 2.4 4.21 2.963 1.777.593 5.622.289 7.521.046 5.091-.684 8.389-1.657 10.319-3.237C23.924 15.042 24 13.644 24 13.127c0-.06-.007-.134-.02-.219-.032-.553-.258-1.62-1.49-2.38a2.96 2.96 0 0 0-.33-.197c-.125-.065-.25-.127-.375-.186l-.035-.027-.191-.078a12.313 12.313 0 0 0-.629-.264c-.515-.225-.971-.387-1.372-.477a69.929 69.929 0 0 1-.041-1.703c0-.7-.244-1.08-.441-1.277-.12-.119-.557-.265-.997-.4a19.118 19.118 0 0 0-.93-.287 4.657 4.657 0 0 0-.079-.027v.005l-.417-.12h-.001l-.448-.128a1.5 1.5 0 0 1-.094-.015l-.033-.01a2.161 2.161 0 0 0-.07-.02l-.028-.008a64.267 64.267 0 0 1-.641-.19 1.72 1.72 0 0 1-.091-.012v-.003a51.125 51.125 0 0 1-.213-.057v-.004a30.91 30.91 0 0 0-.32-.09v-.001a17.568 17.568 0 0 0-.669-.167 70.288 70.288 0 0 0-2.689-.502c-.182-.046-1.367-.152-1.367-.152a5.944 5.944 0 0 0-1.106.023 4.01 4.01 0 0 0-.779.19c-.113.024-.245.103-.383.216a1.363 1.363 0 0 0-.177.146l-.002.002a4.226 4.226 0 0 0-.125.12l-.007.008c-.217.217-.36.412-.454.584-.174.249-.304.479-.341.61-.032.119-.129.578-.228 1.044-.091.432-.184.871-.228 1.054-.048.2-.334.906-.601 1.567-.124.304-.243.598-.334.83Zm14.384.642c0-.06.076-.06.076.015 0 0 0 .016-.003.036a.092.092 0 0 1 .003.025c0 .03 0 .456-.03.957-.008.137-.02.281-.031.426-.011.144-.023.289-.03.425-.007.225-.008.431-.007.59.007.154.007.246.007.246v.106c0 .259-.152.593-.396.745l-.04.026h-.001l-.021.013c-.115.088-.251.166-.409.23-.22.106-.516.223-.942.339-.836.243-1.459.35-1.869.395-1.003.122-2.188.182-3.601.182-.29 0-1.414 0-1.687-.015-3.739-.106-5.988-1.23-5.988-2.036v-.106s.32-2.478.32-2.63c0-.151.09-.273.09-.182v.06c0 .03 0 .061.002.093.002.01.005.018.008.025.003.007.006.013.006.02.32 1.018 3.45 1.717 7.279 1.717h.638l.205-.003h.001c1.15-.012 3.818-.042 5.842-.954.35-.228.578-.456.578-.745z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgRubysinatraIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
