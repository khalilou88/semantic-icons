import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hungryjacks-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Hungry Jack's</title>
      <path
        d="M2.868.215C1.284.215 0 1.476 0 3.032v17.936c0 1.555 1.284 2.817 2.868 2.817h18.264c1.584 0 2.868-1.262 2.868-2.817V3.032C24 1.476 22.716.215 21.132.215zm9.033 1.82c6.143 0 9.46 2.233 9.743 4.487.043.333.016 1.012.016 1.012v10.585s-.03.612-.325 1.112c-1.067 1.808-4.108 2.674-9.434 2.674s-8.367-.866-9.434-2.674c-.295-.5-.324-1.112-.324-1.112s0-10.679-.003-10.813v-.532c.003-.093.009-.18.018-.252.283-2.254 3.6-4.488 9.743-4.488zm-.13.537c-5.685 0-8.714 1.97-9.08 3.953-.086.455.197.611.48.611H20.37c.283 0 .566-.156.48-.611-.366-1.983-3.395-3.953-9.08-3.953zM6.692 8.21c-.19 0-.47.098-.47.325v1.917c0 .525.658.895 1.232.895s1.233-.37 1.233-.895V8.536c0-.227-.28-.325-.47-.325-.192 0-.471.098-.471.325v1.73c0 .127-.154.2-.292.2-.138 0-.29-.073-.29-.2v-1.73c0-.227-.28-.325-.471-.325zm2.75 0c-.195 0-.482.134-.482.38v2.531c0 .246.287.362.483.362s.481-.147.481-.362v-.943c0-.069.09-.055.132 0 0 0 .611.786.814 1.044.203.257.316.26.484.26.196 0 .482-.116.482-.36V8.59c0-.245-.286-.38-.482-.38s-.483.135-.483.38v.935c0 .07-.087.058-.148-.02l-.766-.996c-.117-.156-.265-.298-.514-.298zm4.325 0c-.978 0-1.658.666-1.658 1.628 0 1.133.725 1.645 1.649 1.645.715 0 1.364-.278 1.364-.789v-.89c0-.234-.152-.329-.396-.329h-.69c-.346 0-.422.228-.422.405 0 .177.06.419.413.419.097 0 .126.007.126.07.012.167-.1.266-.42.266-.392 0-.615-.354-.615-.784 0-.43.18-.815.699-.815.185 0 .275.003.58.141.307.138.475-.022.55-.126.077-.104.158-.332-.036-.504-.264-.23-.644-.337-1.144-.337zm-10.08.136c-.194 0-.477.11-.477.346v2.445c0 .234.283.346.476.346.194 0 .476-.112.476-.346v-.713c0-.076.054-.097.114-.097h.474c.06 0 .11.021.11.097v.713c0 .234.282.346.475.346.194 0 .476-.112.476-.346V8.693c0-.235-.282-.346-.476-.346-.193 0-.476.11-.476.346v.653c0 .073-.041.1-.105.1h-.486c-.056 0-.106-.027-.106-.1v-.653c0-.235-.282-.346-.476-.346zm12.185 0c-.23 0-.477.12-.477.345v2.465c0 .225.283.322.477.322.193 0 .475-.097.475-.322v-.638c0-.06.055-.079.093-.033l.677.862c.138.177.486.163.648.062.18-.111.313-.358.174-.534l-.53-.678c-.022-.03-.027-.056.018-.09.333-.222.417-.55.417-.836 0-.319-.274-.925-1.074-.925zm4.293 0c-.174-.008-.384.052-.463.2l-.36.566c-.029.05-.062.049-.09.004l-.358-.57c-.105-.197-.441-.233-.619-.168-.232.084-.343.337-.239.535l.706 1.154c.053.092.077.144.076.236v.834c0 .235.285.346.48.346s.48-.111.48-.346v-.834c0-.092.006-.133.074-.233l.707-1.157c.105-.198-.012-.445-.239-.535a.49.49 0 0 0-.155-.031zm-3.636.545c.305 0 .372.133.372.344 0 .21-.161.338-.354.338-.124 0-.193.003-.193-.056V8.96c.035-.046.063-.068.175-.068zM5.163 12.166c-.264 0-.649.164-.649.51v2.599c.028.413-.244.52-.349.214-.15-.367-.526-.287-.67-.214-.144.072-.351.26-.264.615.153.543.543.907 1.291.913 1 0 1.284-.625 1.284-1.297l.005-.07v-2.76c0-.346-.384-.51-.648-.51zm2.634 0c-.246.008-.654.115-.75.458L5.97 16.122c-.108.336.188.629.447.675.232.042.633-.132.702-.435l.062-.206c.017-.065.046-.08.1-.08h1.034c.074 0 .08.03.095.08l.062.206c.07.303.47.477.702.435.259-.046.556-.339.447-.675l-1.075-3.498c-.1-.349-.504-.45-.75-.458zm3.833 0c-1.252 0-2.122.949-2.122 2.318 0 1.37.87 2.32 2.122 2.32.542 0 .898-.152 1.148-.41.248-.244.143-.544.046-.692-.097-.149-.308-.366-.704-.18-.225.104-.248.128-.427.128-.663 0-.895-.548-.895-1.16h-.001c0-.613.233-1.175.896-1.175.187 0 .225.034.427.128.396.186.607-.031.704-.18.097-.148.202-.444-.046-.688-.279-.287-.618-.41-1.148-.41zm2.347 0c-.258 0-.635.164-.635.512v3.613c0 .348.377.512.635.512s.635-.164.635-.512V15.3l-.001.014c0-.213.12-.096.12-.096l1.173 1.428s.28.375.774-.06c.494-.437.014-.897.014-.897s-.721-.849-.883-1.064c-.145-.194.04-.387.04-.387l.908-1.115c.22-.275.167-.545-.087-.763-.286-.246-.639-.238-.875.067l-1.057 1.277c-.05.068-.12.062-.126-.047v.003l-.001-.013.001.01v-.978c0-.348-.377-.512-.635-.512zm3.254 0c-.182 0-.33.138-.33.31.007.21.132.273.173.288.041.016.03.047.026.066a.342.342 0 0 1-.116.17c-.14.086-.002.266.113.257.128-.01.644-.452.443-.892a.34.34 0 0 0-.31-.2zm1.979 0c-.996 0-1.608.678-1.61 1.684-.001.61.525 1.019 1.052 1.126l.27.055c.123.029.29.097.29.289 0 .191-.103.372-.334.372-.155 0-.197.04-.526-.13-.37-.19-.573.032-.665.175-.092.145-.19.433.045.67.3.282.66.396 1.266.396 1.102 0 1.609-.668 1.6-1.594-.006-.72-.502-1.133-1.073-1.28l-.305-.079c-.104-.028-.276-.105-.276-.263 0-.174.103-.317.301-.317.126 0 .178-.02.449.128.366.199.574-.031.666-.175.091-.143.19-.424-.045-.66-.308-.31-.565-.397-1.105-.397zM7.725 14.212c.027-.002.054.022.068.075l.202.668c.02.062-.001.075-.071.075H7.51c-.038 0-.07-.026-.05-.075l.202-.666c.01-.048.036-.076.062-.077zm-4.554 3.665c-.283 0-.566.11-.48.473.516 1.98 3.395 3.018 9.08 3.018 5.684 0 8.563-1.037 9.08-3.018.085-.363-.198-.473-.48-.473h-8.6zm17.161 2.685c.288 0 .534.228.534.536a.531.531 0 0 1-.534.538.532.532 0 0 1-.536-.538c0-.308.246-.536.536-.536zm0 .09a.431.431 0 0 0-.43.446c0 .259.189.45.43.45.239 0 .428-.191.428-.45a.43.43 0 0 0-.428-.446zm-.21.128h.232c.144 0 .216.055.216.177 0 .11-.07.159-.159.17l.174.273h-.104l-.16-.269h-.107v.269h-.092zm.092.08v.192h.11c.079 0 .149-.006.149-.101 0-.077-.069-.09-.133-.09Z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgHungryjacksIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
