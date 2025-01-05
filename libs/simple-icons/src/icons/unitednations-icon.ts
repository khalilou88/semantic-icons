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
  selector: 'svg[si-unitednations-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>United Nations</svg:title>
    <svg:path
      d="M19.024 20.255a3.123 3.123 0 0 1-2.048.242 7.117 7.117 0 0 1-1.366-.463l-.968-.396a4.736 4.736 0 0 0-2.599-.066h-.088a4.357 4.357 0 0 0-2.598.066c-.33.11-.639.264-.969.396-.44.199-.903.375-1.365.485a3.14 3.14 0 0 1-2.048-.242l-.088-.044c-.022 0-.022 0-.022.022a3.335 3.335 0 0 0 2.752.991 3.998 3.998 0 0 0 1.718-.661l.925-.617a1.57 1.57 0 0 1 1.167-.22c.22.022.044.132.022.154a8.807 8.807 0 0 0-1.564.97c-.33.241-.925.814-.925.814l.44.374.485-.528a8.741 8.741 0 0 1 2.026-1.564.165.165 0 0 1 .198 0 8.741 8.741 0 0 1 2.026 1.564l.485.528.44-.374-.925-.815a8.808 8.808 0 0 0-1.563-.969c-.044-.022-.198-.132.022-.154.396-.088.814 0 1.167.22l.925.617a3.998 3.998 0 0 0 1.717.66c.397.045.815.023 1.211-.088a3.761 3.761 0 0 0 1.542-.902s-.022-.022-.044-.022l-.088.022m2.157-1.916a3.1 3.1 0 0 1-.924.484c-.463.133-.97.22-1.454.22-.638.023-1.255.067-1.893.155-.044 0-.066 0-.044-.022.55-.22.99-.66 1.233-1.19l.616-1.254v-.045c-.044.022-.66.551-.947.815l-1.035 1.013a4.02 4.02 0 0 1-1.607.837h-.022l-.022.022 1.189.286a7.522 7.522 0 0 0 1.563.286 3.669 3.669 0 0 0 3.392-1.585c0-.022-.023-.022-.045-.022m1.938-2.95a4.643 4.643 0 0 1-1.1.968c-.353.242-.727.44-1.124.617a5.472 5.472 0 0 0-1.387.814l-.088.067c-.022 0-.022 0-.022-.023 0-.022.66-.682.859-2.07.022-.506.11-.99.22-1.475v-.044a6.42 6.42 0 0 0-1.057 1.894l-.396 1.123c-.155.506-.44.969-.815 1.343l-.044.044v.022c.044 0 .088-.022.132-.022l1.277-.264a4.454 4.454 0 0 0 1.938-.815 4.491 4.491 0 0 0 1.387-1.63c.088-.175.154-.352.22-.528.044-.044.022-.044 0-.022m.837-3.303a3.917 3.917 0 0 1-1.013 1.586 14.717 14.717 0 0 0-1.453 1.651c0 .022-.044 0-.022-.022a4.45 4.45 0 0 0 .132-1.871c-.088-.529-.308-1.101-.374-1.74l-.023-.022c0 .022-.022.044-.022.066a6.27 6.27 0 0 0-.264 1.277c-.022.529.066 1.211.022 1.74-.044.616-.088 1.255-.374 1.805v.044l1.321-.814a4.959 4.959 0 0 0 1.387-1.322A3.947 3.947 0 0 0 24 12.151v-.088c-.022 0-.044.022-.044.022m-1.41.353c.023 0 .023 0 0 0 0 .022 0 0 0 0 0-.177 0-.353-.021-.529-.044-.616-.419-1.123-.749-1.651a8.184 8.184 0 0 1-.595-1.057s-.022-.022-.044-.022c0 .044 0 .242.022.352.11.88.33 1.762.661 2.598.198.529.264 1.08.22 1.63 0 .044 0 .044.022.066.198-.286.595-.683.837-.991.242-.308 1.563-1.806.925-3.875-.022-.089-.066-.177-.11-.265l-.022.022c0 1.498-.727 2.136-1.013 3.15a4.91 4.91 0 0 0-.132.572m.022-3.083-.132-.352-.088-.199a3.062 3.062 0 0 0-.903-1.013 4.289 4.289 0 0 1-.793-.88h-.066c.022.066.22.726.352 1.035.22.418.485.836.793 1.189l.066.088c.374.506.66 1.057.859 1.651 0 .022.022.022.022.022l.374-1.145c.132-.396.242-.815.33-1.233.133-.99-.176-2.246-.748-2.95 0 0-.022.021-.022.044l.022.088.044.132c.11.528.132 1.1.022 1.63-.088.418-.11.858-.11 1.298 0 .066.044.617.044.639s-.022 0-.044 0m-1.784-5.571c.176.176.33.374.419.616.154.375.198.925.308 1.344l.198.726c0 .022-.022.044-.044.022a4.326 4.326 0 0 0-1.19-.99c-.307-.177-.55-.419-.77-.683l-.11-.154s-.022-.022-.044 0v.066c.11.484.33.947.683 1.32.286.265.594.507.88.75a9.58 9.58 0 0 1 1.057 1.057s.022.022.022 0v-.353l.022-1.057V6.14c0-.352-.066-.727-.198-1.057-.22-.55-.638-.99-1.145-1.255-.022-.022-.066-.022-.11-.044 0 0 0 .022.022.044M18.54 2.793c.308.286.573.617.815.969.22.352.462.66.77.947.199.198.793.66.947.792-.022-.176-.308-1.43-1.079-2.047a3.93 3.93 0 0 0-1.519-.75v.045l.066.044M6.208 19.946a7.118 7.118 0 0 0 1.52-.286l1.188-.286h.022s0-.022-.022-.022h-.022a4.258 4.258 0 0 1-1.63-.837l-1.034-.99-.947-.816v.045c.088.132.419.858.617 1.255.242.55.682.969 1.233 1.189.022.022 0 .022-.044.022a17.804 17.804 0 0 0-1.894-.154c-.484 0-.99-.088-1.453-.22a3.102 3.102 0 0 1-.925-.485h-.044a3.843 3.843 0 0 0 1.761 1.365 4.808 4.808 0 0 0 1.674.22m-.506-1.299c.044 0 .066.022.132.022v-.022l-.044-.044a3.502 3.502 0 0 1-.815-1.343l-.396-1.123a6.42 6.42 0 0 0-1.057-1.894v.044c.132.485.198.97.242 1.476.198 1.365.859 2.025.859 2.047 0 .022 0 .045-.022.022l-.089-.066a5.472 5.472 0 0 0-1.387-.814 6.931 6.931 0 0 1-1.123-.617 4.643 4.643 0 0 1-1.1-.969H.878c.066.176.132.353.22.529.33.638.815 1.21 1.41 1.63.572.44 1.233.726 1.937.814.419.11.837.22 1.256.308m-3.546-2.862 1.322.814s.022-.022.022-.044c-.287-.572-.33-1.189-.375-1.805-.044-.55.044-1.211.022-1.74a6.477 6.477 0 0 0-.264-1.299c0-.022-.022-.044-.022-.066l-.022.022c-.044.639-.286 1.211-.374 1.74a4.502 4.502 0 0 0 .132 1.871c.022.022-.022.044-.022.022a13 13 0 0 0-1.454-1.65 3.843 3.843 0 0 1-1.01-1.565s-.023-.022-.045-.022 0 .044 0 .088c0 .815.243 1.63.727 2.312.352.507.815.97 1.365 1.322m-.242-1.938c.022-.022.022-.022.022-.066-.044-.55.022-1.123.242-1.63.309-.836.529-1.695.661-2.598 0-.11.022-.308.022-.352-.022 0-.022 0-.022.022a8.184 8.184 0 0 1-.595 1.057c-.352.484-.704 1.013-.748 1.63a2.122 2.122 0 0 0 0 .528s0 .022-.022.022v-.022l-.154-.529C1.01 10.896.307 10.258.307 8.76l-.022-.022c-.044.088-.066.176-.11.265-.639 2.07.66 3.567.924 3.875s.617.683.815.969M.99 9.729l.375 1.145s.022 0 .022-.022c.198-.594.506-1.145.858-1.651l.066-.088c.309-.375.573-.771.793-1.19.132-.308.33-.968.353-1.034H3.39c-.22.33-.484.616-.792.88a2.991 2.991 0 0 0-.925 1.035c-.022.066-.066.132-.088.199l-.132.374s-.022.044-.022 0 .044-.55.044-.639c0-.44-.044-.88-.132-1.299a4.056 4.056 0 0 1 .022-1.63c0-.043.022-.087.044-.131 0-.022.022-.066.022-.089s0-.022-.022-.044C.835 6.25.505 7.527.637 8.496c.11.418.22.837.352 1.233m.793-3.215.022 1.057v.33h.022c.308-.396.66-.748 1.035-1.078l.88-.75a2.81 2.81 0 0 0 .683-1.32v-.066h-.022l-.11.154a2.773 2.773 0 0 1-.748.682c-.529.33-.881.573-1.19.991-.021.022-.044.022-.021-.022l.198-.726c.11-.419.154-.97.308-1.344.088-.22.242-.44.418-.616v-.044c-.044 0-.066.022-.11.044-.55.286-.947.749-1.167 1.277-.132.33-.22.683-.198 1.057v.374M2.949 5.48l.969-.792c.286-.287.55-.595.77-.947a4.88 4.88 0 0 1 .815-.969l.066-.066V2.66a3.646 3.646 0 0 0-1.519.749c-.815.638-1.079 1.893-1.1 2.07m8.851 6.826c.066-.089-.088-.155-.132 0-.044.154.066.11.132 0m1.674-3.876c-.067-.022-.309.264-.265.308a.732.732 0 0 0 .265-.308m.044-.044c.044.022.198-.066.176-.088-.022-.022-.22-.11-.22-.066 0 .088.022.132.044.154m2.972 2.73c.088-.022.066-.154 0-.154s-.154.11-.132.11c.022 0 .088.066.132.044m-1.079-2.928c-.066 0-.088.066-.022.11.066.022.11 0 .154-.022a.149.149 0 0 0 .088-.132c0-.066-.088-.154-.044-.198s.11.022.155 0 .066-.066.066-.11c0-.045-.022-.177-.11-.177s-.177.177-.177.177a.188.188 0 0 0 0 .154c.022.088 0 .198-.11.198m1.454.022c0 .044.11.33.132.396.022.066.044.308.088.286.044-.022.044-.154.022-.22a2.843 2.843 0 0 0-.11-.462c-.022-.088-.176-.419-.22-.397-.045.023.066.22.088.309.022.088-.022.044 0 .088m-.771-3.744c.066.022.066-.11-.044-.198-.11-.088-.286-.044-.242 0 .088.066.176.154.286.198m-3.303-.946c-.154-.088-.022-.22-.132-.309-.132-.044-.264-.022-.353.066-.11.133.133.088.199.133.066.044.286.198.308.176.022-.022 0-.066-.022-.066m.88-.44c-.197-.089-.924-.089-.902.11s.418 0 .528 0 .55-.023.375-.11m-2.004 8.499c-.044-.022-.11.022-.132-.022-.022-.044-.066-.022-.066 0s-.022.066.022.11a.134.134 0 0 0 .176 0 .067.067 0 0 0 0-.088m-.418-1.475c.066 0 .066-.044.088-.044s0 .044.066.044.132-.155-.066-.155c-.155 0-.133.155-.088.155m.264.176c-.11-.022-.088.044-.176.044-.133.022-.022-.088-.066-.132-.022-.022-.089.088-.11.154 0 .044 0 .132.043.154l.419.044c.088 0 0-.242-.11-.264M10.15 11.71c.044 0 .066-.132.044-.198s-.155-.022-.155.022.089.176.11.176m-1.761 0c0-.044 0-.22-.044-.264s-.044.022-.066.022-.022-.088-.044-.088 0 .132.044.22.11.22.11.11m-.044-.396c.044-.132.066-.265.066-.397 0-.11-.066-.198-.088-.198s0 .066.022.176c0 .11-.044.22-.066.33 0 .023.044.133.066.089m-2.246 4.932c3.28 3.281 8.566 3.281 11.847 0s3.28-8.566 0-11.847-8.566-3.28-11.847 0-3.281 8.588 0 11.847M4.006 10.5h1.277c.022.66.132 1.3.33 1.916a.782.782 0 0 1-.198-.088c-.088-.044-.154.022-.176.022-.088 0-.198-.066-.198 0s.088.022.088.066-.22.044-.242-.044-.066-.177-.088-.066-.11.088-.154.11c-.022.022-.044.066-.044.11s-.11.022-.11.088.066.088.088.154.088.11.044.132c-.044.022-.022-.022-.066 0s.198.683.242.66-.066-.22-.066-.308.022-.11.088-.154.242.264.308.22-.022-.088.044-.11.264.287.33.199c.044-.067.088.044.088.066.067.11.177.11.243.242s.22.374.33.374c.11 0 .044-.11.088-.11s.088.154.154.242a.32.32 0 0 0 .198.132c.154.199.33.397.507.595l-.903.903A7.735 7.735 0 0 1 4.006 10.5m7.289-1.828-.089.044a1.234 1.234 0 0 0-.33.22l-.903-.902c.529-.463 1.19-.749 1.872-.771V8.54a1.766 1.766 0 0 0-.462.11c.044-.088.132-.176.132-.176s-.154.088-.22.198m-.683 2.092s0 .022 0 0v.044c0-.044-.022-.066-.044-.11-.022-.022-.044-.044-.066-.044h-.11l-.044.022h-.309c-.044 0-.066 0-.066-.022-.022-.088.11-.022.199-.286.022-.022.022-.066.044-.088l.044-.066.022-.022c.044-.044.088-.044.132-.044h.044l.044.044.066.132c.022.022.044.022.044.044a.304.304 0 0 1 .088.066l.022.022v.022c.022.022.022.022.044.022h.088c.044-.022.044 0 .066 0v.022c0 .022 0 .022-.022.044 0 .022-.022.022-.022.044-.022.022-.044.044-.066.044-.044 0-.088-.022-.11-.022s-.044 0-.044.022v.11m-2.422 2.114a.806.806 0 0 1-.088-.396.742.742 0 0 0-.11-.375c-.022-.088-.044-.176-.044-.264 0-.154-.133-.11-.133-.154s.11 0 .11-.044-.132-.22-.242-.264c-.11-.044-.066-.11-.066-.176s0-.133-.044-.177c-.022-.088 0-.242.11-.242.044 0 .11.044.177 0 .066-.044.022-.176.022-.286h.616c0 .088.022.198.022.286-.044.022-.066.066-.044.088.022.022.044.044.066.022.11.639.396 1.233.837 1.718l-.903.903c-.066-.066-.132-.155-.198-.243v-.066c0-.154-.11-.242-.154-.374m-.793-1.497a5.11 5.11 0 0 1-.11-.837h.528c-.044.066-.154.132-.176.198s-.154.286-.066.374c.198.22-.044.309-.176.265m.11 3.259-.11.11-.154-.154c.088-.044.176-.022.264.044m1.365-5.66c-.022 0-.022.023-.044.023-.066.066-.242.044-.22.11s.485-.155.485-.11-.199.11-.33.176-.177.176-.397.176c-.11 0-.154.088-.198.154a1.64 1.64 0 0 0-.154.264.864.864 0 0 1-.088.397h-.64a4.76 4.76 0 0 1 1.256-3.04l.903.904a6.02 6.02 0 0 0-.573.946m.837-.66.793.793h-.088c-.088 0-.088-.066-.154-.066-.133.022-.155.066-.177.044a1.234 1.234 0 0 0-.33-.22.604.604 0 0 0-.44.021c-.022 0-.022.022-.044.022.154-.198.308-.396.44-.594m-1.1 1.607c0 .088-.023.177-.023.265h-.462c-.022-.066 0-.133.044-.199.044-.088.154-.132.264-.11a.68.68 0 0 1 .176.044m.396 1.035.045.066c.044.044.088.088.132.066.044-.022.154 0 .176 0 .066.022.11.066.154.11.044.067.132.023.198.067s.132.088.044.132c-.088.044.088.132.11.132s.044-.044.044-.11c0-.022.044-.11.11-.088.066.022.265.264.33.176.067-.088.023-.198.045-.242 0-.022.022-.044.044-.044.066.11.11.198.198.286l-.903.903a2.769 2.769 0 0 1-.727-1.454m.705-3.149-.88-.902a4.76 4.76 0 0 1 3.038-1.255v1.277c-.793.022-1.541.33-2.158.88M8.542 6.602 7.64 5.7a6.395 6.395 0 0 1 4.206-1.74v1.277a5.072 5.072 0 0 0-3.303 1.365m-.264.243a5.12 5.12 0 0 0-1.365 3.303H5.635a6.395 6.395 0 0 1 1.74-4.206l.903.903zM6.913 10.5c0 .242.022.462.066.705-.022 0-.022-.067-.088-.045s-.309.44-.419.617c-.088.154.044.484-.088.595a1.247 1.247 0 0 1-.396.066h-.022a6.256 6.256 0 0 1-.353-1.894l1.3-.044zm4.91 7.839a7.94 7.94 0 0 1-5.35-2.224l.902-.903a6.746 6.746 0 0 0 4.448 1.85v1.277zm0-1.63a6.395 6.395 0 0 1-4.206-1.74l.154-.153a.481.481 0 0 0 .11.066.488.488 0 0 0 .309.044c.088-.022.264-.176.374-.176.11 0 .286.044.396-.022s-.066-.287-.132-.397c-.022-.022-.022-.044-.044-.066a4.954 4.954 0 0 0 3.083 1.167l-.044 1.277zm0-1.651a4.76 4.76 0 0 1-3.039-1.255l.903-.903c.419.374.925.66 1.497.793-.198.088-.286.22-.264.33.022.11-.132.176-.132.308s.176.22.198.353c.022.066.176.176.309.264.176.044.352.066.506.044l.022.066zm-.044-1.762c-.066-.044-.11.044-.198.088a3.176 3.176 0 0 1-1.63-.748l.903-.903c.286.22.617.374.969.396 0 .044.044.088.044.177s-.066.132-.044.176.22 0 .242-.066c.022-.066-.066-.11-.088-.177-.022-.044-.022-.066-.044-.11H12c.066 0 .132 0 .198-.022a.047.047 0 0 0 .044-.044c0-.022.022-.044.022-.066s.022-.022.022-.044l.022.022c.022.044.067.176.11.154s.067-.22.045-.264a.165.165 0 0 1 0-.198c0-.022.022-.154.066-.132s0 .132 0 .176c0 .066.044.154.11.11.044-.022.088-.088.132-.066s-.11.066-.132.11c-.022.044.066.066.044.088-.022.022-.044 0-.066.022-.022.022.044.154 0 .176s-.198.066-.242.088-.089-.022-.067-.044 0-.11-.044-.11-.044.022-.044.066.044.11.044.133-.066.044-.11.066c-.044.066-.11.132-.176.176s-.198.044-.198.088.066.044.088.066c.044.066.066.154-.022.198s-.198-.066-.242-.044c-.044.022-.066.132-.088.264-.022.132.242.176.374.11.088-.044.066-.176.154-.22s.066-.132.154-.11c.088.022.066-.066.155-.066s.088.066.198.088c.176.044.176.176.198.11s.044-.11-.088-.154-.198-.198-.088-.154c.132.066.242.066.264.132s.154.044.176.11c.022.11.11 0 .044-.066s-.044-.088 0-.132.066.022.132-.066-.022-.066-.044-.11 0-.286.088-.242.176-.022.132-.044c-.044-.023.022-.155.044-.155s0 .088.022.11.243-.066.265.045-.154.176-.198.176c-.089 0-.155.088-.22.176-.067.088-.133.11-.089.198s.132.066.22.022.155-.11.199-.132c.088-.044.154.22.11.264s-.132.066-.176.11c-.133.066-.265.132-.419.132-.088.022-.088.044-.11.132-.022.089-.418.022-.506.022s.066-.198-.066-.176l-.397.066c-.022 0-.154.11-.264.022m1.167 2.048c.11.044.22.132.286.22.066.11.088.155.044.265-.11.198-.066.33.154.396.133.044.177.176.265.264a6.83 6.83 0 0 1-1.498.22v-1.277c.243-.022.507-.044.75-.088m-.75-.264v-.154c.287-.044.22.132.419.066a.171.171 0 0 1 .176.044 5.4 5.4 0 0 0-.595.044m0 3.281v-1.3a6.68 6.68 0 0 0 1.96-.352c.022.023.044.023.066.023a.462.462 0 0 0 .242-.089 2.59 2.59 0 0 0 .595-.33 6.678 6.678 0 0 0 1.585-1.123l.903.903c-1.431 1.41-3.347 2.202-5.35 2.268m3.567-11.516.308-.309a.545.545 0 0 0 .308.176c.11.023.154.067.176.177.022.11.132.154.243.176s.176.154.264.154.374.396.484.528c.066.066.154.177.22.089.066-.089.066-.067.11-.089a6.47 6.47 0 0 1 .551 2.4h-1.277c0-.286-.044-.572-.11-.858a.61.61 0 0 0 .066-.286c0-.089-.088-.133-.154-.067a3.14 3.14 0 0 0-.176-.484c-.023-.088-.045-.198-.067-.286 0-.022-.044-.044-.088-.088-.044-.088-.066-.154-.11-.22.066-.045.088-.155 0-.133-.132.022-.044-.066-.088-.11s-.044 0-.066.022a6.132 6.132 0 0 0-.572-.748v-.022c-.044 0-.044-.022-.022-.022m.77 7.464c-.044-.088-.066-.198-.11-.286-.022-.088-.198-.088-.198-.044 0 .088 0 .176-.022.264v.022l-.462-.462a5.12 5.12 0 0 0 1.365-3.303h1.277a6.295 6.295 0 0 1-1.74 4.184l-.066-.066a.528.528 0 0 0-.044-.309m-1.057.881c.066-.11.199-.308.265-.418.066-.11-.177-.264-.309-.309s-.132-.11-.132-.22c.066-.044.132-.11.198-.176l.903.903a6.325 6.325 0 0 1-.969.749c-.022-.044.132-.199.176-.265s-.176-.154-.132-.264m.55-5.263c-.11-.154.045-.176.199-.242.088-.044.198.022.198-.022s.044-.132.088-.154c.044-.022.11-.066.132-.11 0 .044.022.088.022.132a.502.502 0 0 0-.066.242c0 .066 0 .154.066 0 0-.022.022-.022.022-.044.044.154.044.286.044.419h-.946v-.022c.066-.11.308-.089.242-.199m.176-1.805s0 .022-.022.022c-.022.022-.132-.154-.132-.022s.044.176.132.198c.088.022.044.066.11.088.022 0 .066.022.088.044.11.242.176.484.242.749a.304.304 0 0 0-.088.066c-.044.044-.022.132-.066.198-.066.11-.088.176-.264.132-.11-.044-.022-.176 0-.286s.066-.088.066-.154-.22-.309-.33-.22c-.11.088-.088.176-.176.264-.044.044-.088.044-.155 0s-.088-.088-.066-.132c.022-.044-.154-.243-.22-.33a.46.46 0 0 0-.352-.177 3.461 3.461 0 0 0-.419-.572l.903-.903c.309.33.55.66.749 1.035m-1.52.616-.043.066c-.022.044-.133-.044-.155-.022-.022.022.155.243-.022.177-.176-.067-.066-.067-.066-.133s-.154-.11-.066-.154 0-.11.088-.132c.088-.022.066-.11-.044-.132-.11-.022-.088.242-.154.198-.066-.022-.132-.022-.198-.022l.308-.308a.199.199 0 0 0 .11.022c.044.176.155.308.243.44m-.353 4.47c.132.022.287.044.419.088.088.044.154.133.22.022.132-.198.22-.418.264-.66.044-.33-.022-.44-.066-.44-.044 0-.132.088-.22.088-.044 0-.044.088-.044.154s-.088.132-.11.088-.066-.022-.044.022-.176.022-.265-.022c-.132-.066.155-.066.287-.176.11-.088.22-.199.33-.309.066-.11.066-.242.176-.33s.286-.066.308-.198.044-.11.11-.088.683-.022.683-.22c0-.089-.132-.199-.264-.22-.088 0-.11-.177-.154-.265a1.642 1.642 0 0 0-.154-.264h.924a4.76 4.76 0 0 1-1.255 3.039l-.022-.022v-.088c.022-.177-.11-.463-.154-.419s0 .044-.132.242c-.044.066-.11.177-.198.177s-.088-.045-.22-.023a.948.948 0 0 1-.353 0 2.447 2.447 0 0 1-.594-.286c.022-.022.088.022.088-.044s.352.132.44.154m3.457 2.665-.902-.903a6.746 6.746 0 0 0 1.85-4.448h1.298a7.902 7.902 0 0 1-2.246 5.35m2.246-5.724h-1.299a6.556 6.556 0 0 0-.66-2.73l.022-.023c.088-.088-.419-.749-.507-.815s-.176-.176-.286-.286a3.927 3.927 0 0 1-.484-.572l.946-.947a7.878 7.878 0 0 1 2.268 5.373m-7.839-7.84a8.037 8.037 0 0 1 5.373 2.225l-.88.88c-.045-.022-.089-.044-.067-.088.044-.066-.066-.066-.088-.242a.698.698 0 0 0-.33-.418c-.11-.066-.176-.154-.286-.199-.11-.044-.33-.176-.44-.132a.782.782 0 0 1-.22.044 6.714 6.714 0 0 0-3.04-.792l-.022-1.277zm0 1.652c.947.022 1.85.264 2.709.683a.918.918 0 0 0 .176.396c.044.11.11.198.176.308.066.066.022.198.044.309 0 .044.044.088.066.132v.176c0 .022.088.022.154-.022s.11-.132.199-.11.198.198.264.308l-.419.418c-.044-.088-.088-.198-.066-.198s.066.022.088.022c.089 0-.066-.066-.066-.088-.066-.066-.066-.154-.154-.22s-.22-.022-.264-.11a1.207 1.207 0 0 0-.352-.397c-.022 0 .176.243.11.287s-.309-.154-.33-.11c-.023.044.264.154.352.242.044.044.132.176.22.286a5.124 5.124 0 0 0-2.907-1.035V3.96zm0 1.63a4.76 4.76 0 0 1 3.04 1.255l-.904.902a3.498 3.498 0 0 0-2.136-.88V5.589zm0 1.651a3.04 3.04 0 0 1 1.872.77l-.044.045-.044-.022c-.11-.044-.33.176-.286.198.044.022.132-.088.176-.066h.022l-.374.396c-.11.044-.22.132-.22.198v.022l-.133.132-.066-.066a1.117 1.117 0 0 0-.352-.198c.066-.044.088-.11.11-.198 0-.132-.044-.088-.11-.022s-.132.088-.176.154a.997.997 0 0 0-.353-.066V7.241h-.022zm-.154 1.63c.022.043 0 .088-.022.11-.044.044-.176-.11-.198.022-.044.132.088.066.088.088a.408.408 0 0 0 .264.154c.088 0 .22 0 .22.088 0 .044.11.044.133.088 0 .066.066.176.11.154s.11.022.132.066c.022.044 0 .066-.022.11-.066.066.066.044.088.176s-.11.044-.132.133c-.044.066-.088.11-.132.176-.022.022.022.066.044.044.022-.022.066-.088.132-.088s.132.242.198.264c.066.022.044.11.066.132s-.11 0-.088.044c.022.044.154.066.154.132-.022.066-.066.132-.154.132-.066 0-.176-.154-.176-.11s.044.176.11.176.22-.066.154.022-.044.22-.088.22-.066 0-.022.067c.022.066 0 .132-.044.198-.044.044-.154 0-.154-.022s.132-.022.132-.088-.066-.088-.198-.044c-.066.022-.088-.022-.132-.022s-.176.154-.176.176v.11a.372.372 0 0 1-.067.22c-.088.022-.154.022-.242.022-.352 0-.704-.154-.969-.374a.415.415 0 0 1 .177-.044c.066.022.088-.022.132-.044.044-.022.154.044.22 0s.22-.33.198-.397.154-.176.132-.198-.044.022-.044 0 .044-.022 0-.11-.11-.044-.154-.044c-.066-.044-.176-.066-.198-.044-.022.022-.088-.044-.11-.022-.022 0-.066.022-.066.066-.022.044.022.088.022.132-.022.088-.155.154-.155.22s-.066.022-.088.044 0 .066-.044.066-.11.11-.154.199c-.066-.088-.132-.199-.198-.287.044-.022.088-.044.11-.022.066.044.33-.418.286-.55s-.11-.044-.176-.022-.066-.044-.044-.066.308-.022.154-.11c-.066-.044-.242-.044-.22-.11s.11 0 .132 0c.11.044.176-.177.242-.177.11 0 .067-.22-.044-.154s-.154.044-.198.11-.154.154-.154.066c0-.044.242-.176.286-.242a.48.48 0 0 0 .11-.176c.023-.066.33-.11.397-.154.044-.044.088-.11.088-.176s-.088-.044-.11-.088.11 0 .11-.066-.11 0-.154-.044c0-.022 0-.022.022-.044.198-.067.33-.089.484-.089h.044m-.242-6.561v1.277a6.746 6.746 0 0 0-4.448 1.85l-.903-.903a7.94 7.94 0 0 1 5.351-2.224M6.208 4.797l.903.903a6.746 6.746 0 0 0-1.85 4.448H3.984a8.151 8.151 0 0 1 2.224-5.351"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUnitednationsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '009EDB');
  }
}
