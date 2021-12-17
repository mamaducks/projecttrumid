const badges = [
  {
    id: "first-responder",
    name: "First Responder",
    title: "Always responding to issues first",
    src: '<svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 30 30" height="30" version="1.0"><defs><clipPath id="a"><path d="M 0.484375 0 L 29.515625 0 L 29.515625 29.03125 L 0.484375 29.03125 Z M 0.484375 0"/></clipPath><clipPath id="b"><path d="M 2.003906 0.527344 L 28 0.527344 L 28 28.835938 L 2.003906 28.835938 Z M 2.003906 0.527344"/></clipPath><clipPath id="c"><path d="M 8.519531 7.746094 L 18 7.746094 L 18 18 L 8.519531 18 Z M 8.519531 7.746094"/></clipPath><clipPath id="d"><path d="M 15 15 L 21.582031 15 L 21.582031 21.535156 L 15 21.535156 Z M 15 15"/></clipPath></defs><g clip-path="url(#a)" fill="#FFF"><path d="M 0.484375 0 L 29.515625 0 L 29.515625 36.289062 L 0.484375 36.289062 Z M 0.484375 0"/><path d="M 0.484375 0 L 29.515625 0 L 29.515625 29.03125 L 0.484375 29.03125 Z M 0.484375 0"/><path d="M 0.484375 0 L 29.515625 0 L 29.515625 29.03125 L 0.484375 29.03125 Z M 0.484375 0"/></g><g clip-path="url(#b)"><path fill="#001E4B" d="M 10.339844 1.535156 C 8.816406 2.234375 6.351562 2.058594 6.351562 2.058594 L 3.535156 5.417969 C 3.871094 7.101562 4.828125 7.988281 4.3125 10.65625 C 3.703125 13.808594 2.355469 15.972656 2.1875 18.25 C 2.015625 20.570312 2.199219 22.765625 4.660156 25.191406 C 6.199219 26.707031 9.492188 27.597656 11.46875 27.984375 C 12.664062 28.21875 13.894531 28.546875 15.066406 28.835938 C 16.207031 28.546875 17.472656 28.222656 18.664062 27.984375 C 20.636719 27.582031 23.929688 26.707031 25.46875 25.191406 C 27.929688 22.765625 28.113281 20.570312 27.941406 18.25 C 27.773438 15.972656 26.429688 13.808594 25.820312 10.65625 C 25.304688 7.988281 26.261719 7.101562 26.601562 5.417969 L 23.777344 2.058594 C 23.777344 2.058594 21.316406 2.234375 19.789062 1.535156 C 18.320312 0.796875 16.742188 0.578125 15.074219 0.550781 C 13.40625 0.527344 11.855469 0.871094 10.339844 1.535156 Z M 10.339844 1.535156"/></g><g clip-path="url(#c)"><path stroke-linecap="round" transform="matrix(.02331 0 0 .02356 6.656 3.406)" fill="#FF9100" fill-rule="evenodd" stroke-linejoin="round" d="M 258.531794 186.562711 L 247.808089 270.305896 C 239.430195 272.793317 231.387416 276.109879 223.847311 280.255581 L 156.489039 229.18053 L 123.982808 261.517007 L 175.590638 328.345727 C 171.401691 335.973819 168.218091 343.933568 165.704723 352.3908 L 81.925778 363.832938 L 81.925778 409.767319 L 165.704723 420.546145 C 168.050533 429.003378 171.401691 437.128954 175.590638 444.591218 L 124.65304 511.917422 L 156.991713 544.2539 L 223.679753 492.847192 C 231.219858 496.992894 239.430195 500.309456 247.808089 502.796878 L 259.369584 586.374235 L 305.280446 586.374235 L 316.004151 502.796878 C 324.382045 500.309456 332.424824 496.992894 340.132487 492.681364 L 407.323201 543.756416 L 439.661874 511.25411 L 388.221602 444.591218 C 392.410549 436.963126 395.594149 428.83755 398.107517 420.380317 L 481.718905 408.938179 L 481.718905 363.003798 L 397.939959 352.3908 C 395.594149 343.933568 392.242991 335.807991 388.054044 328.345727 L 439.1592 261.019523 L 406.65297 228.517217 L 339.797371 280.255581 C 332.257266 276.109879 324.214487 272.793317 315.836593 270.305896 L 304.442656 186.562711 Z M 345.159224 386.385559 C 345.159224 421.375286 316.84194 449.731889 281.822341 449.731889 C 246.9703 449.731889 218.485458 421.375286 218.485458 386.385559 C 218.485458 351.395832 246.9703 323.039228 281.822341 323.039228 C 316.84194 323.039228 345.159224 351.395832 345.159224 386.385559 Z M 345.159224 386.385559" stroke="#000" stroke-width="4.125"/></g><g clip-path="url(#d)"><path stroke-linecap="round" transform="matrix(.02331 0 0 .02356 6.656 3.406)" fill="#FF9100" fill-rule="evenodd" stroke-linejoin="round" d="M 497.804462 515.56564 L 491.102147 568.630629 C 485.740294 570.123082 480.713557 572.278847 475.854379 574.932096 L 433.294674 542.595619 L 412.852612 562.992474 L 445.5264 605.278637 C 442.845474 610.087651 440.834779 615.228322 439.1592 620.534821 L 386.210907 627.665429 L 386.210907 656.685345 L 439.1592 663.484296 C 440.667221 668.790795 442.845474 673.931466 445.358842 678.74048 L 413.187727 721.192471 L 433.797348 741.755154 L 475.854379 709.252849 C 480.713557 711.74027 485.740294 713.896035 491.102147 715.554316 L 498.307136 768.287649 L 527.294651 768.287649 L 534.164524 715.388488 C 539.526377 713.896035 544.553114 711.74027 549.412293 709.087021 L 591.804439 741.423498 L 612.414059 720.860815 L 579.740271 678.74048 C 582.421197 673.931466 584.431892 668.790795 586.107471 663.484296 L 638.888206 656.18786 L 638.888206 627.167945 L 586.107471 620.368993 C 584.431892 615.062494 582.421197 610.087651 579.740271 605.278637 L 612.078944 562.660818 L 591.469323 542.263963 L 549.244735 574.766268 C 544.553114 572.278847 539.358819 570.123082 534.164524 568.630629 L 526.791977 515.56564 Z M 552.595892 641.926645 C 552.595892 663.981781 534.667198 682.057042 512.549557 682.057042 C 490.599473 682.057042 472.670779 663.981781 472.670779 641.926645 C 472.670779 619.871509 490.599473 601.962075 512.549557 601.962075 C 534.667198 601.962075 552.595892 619.871509 552.595892 641.926645 Z M 552.595892 641.926645" stroke="#000" stroke-width="2.607"/></g></svg>',
  },
  {
    id: "rapid-fixer",
    name: "Rapid Fixer",
    title: "Rapid turnaround time on fixing issues",
    src: '<svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 30 30" height="30" version="1.0"><defs><clipPath id="a"><path d="M 2.003906 0.527344 L 28 0.527344 L 28 28.835938 L 2.003906 28.835938 Z M 2.003906 0.527344"/></clipPath><clipPath id="b"><path d="M 15 11 L 24.917969 11 L 24.917969 20.511719 L 15 20.511719 Z M 15 11"/></clipPath><clipPath id="c"><path d="M 11 12 L 20 12 L 20 20.511719 L 11 20.511719 Z M 11 12"/></clipPath><clipPath id="d"><path d="M 10 12 L 20 12 L 20 20.511719 L 10 20.511719 Z M 10 12"/></clipPath><clipPath id="e"><path d="M 5.320312 8 L 10 8 L 10 13 L 5.320312 13 Z M 5.320312 8"/></clipPath><clipPath id="f"><path d="M 5.320312 8 L 11 8 L 11 13 L 5.320312 13 Z M 5.320312 8"/></clipPath><clipPath id="g"><path d="M 10 6.722656 L 13 6.722656 L 13 12 L 10 12 Z M 10 6.722656"/></clipPath><clipPath id="h"><path d="M 20 8 L 24.917969 8 L 24.917969 13 L 20 13 Z M 20 8"/></clipPath><clipPath id="i"><path d="M 17 6.722656 L 20 6.722656 L 20 12 L 17 12 Z M 17 6.722656"/></clipPath></defs><g clip-path="url(#a)"><path fill="#001E4B" d="M 10.339844 1.535156 C 8.816406 2.234375 6.351562 2.058594 6.351562 2.058594 L 3.535156 5.417969 C 3.871094 7.101562 4.828125 7.988281 4.3125 10.65625 C 3.703125 13.808594 2.355469 15.972656 2.1875 18.25 C 2.015625 20.570312 2.199219 22.765625 4.660156 25.191406 C 6.199219 26.707031 9.492188 27.597656 11.46875 27.984375 C 12.664062 28.21875 13.894531 28.546875 15.066406 28.835938 C 16.207031 28.546875 17.472656 28.222656 18.664062 27.984375 C 20.636719 27.582031 23.929688 26.707031 25.46875 25.191406 C 27.929688 22.765625 28.113281 20.570312 27.941406 18.25 C 27.773438 15.972656 26.429688 13.808594 25.820312 10.65625 C 25.304688 7.988281 26.261719 7.101562 26.601562 5.417969 L 23.777344 2.058594 C 23.777344 2.058594 21.316406 2.234375 19.789062 1.535156 C 18.320312 0.796875 16.742188 0.578125 15.074219 0.550781 C 13.40625 0.527344 11.855469 0.871094 10.339844 1.535156 Z M 10.339844 1.535156"/></g><path fill="#FF9100" d="M 11.261719 11.730469 L 12.570312 14.335938 L 15.488281 14.753906 L 13.375 16.78125 L 13.875 19.644531 L 11.261719 18.292969 L 8.652344 19.644531 L 9.152344 16.78125 L 7.039062 14.753906 L 9.957031 14.335938 L 11.261719 11.730469"/><path stroke-linecap="round" transform="matrix(.0083 0 0 -.00817 -2.512 31.017)" fill="none" stroke-linejoin="round" d="M 1660.38561 2360.810144 L 1818.135116 2041.888595 L 2169.892968 1990.727267 L 1915.139289 1742.570919 L 1975.413727 1392.091915 L 1660.38561 1557.52948 L 1345.828388 1392.091915 L 1406.102826 1742.570919 L 1151.349147 1990.727267 L 1503.106999 2041.888595 Z M 1660.38561 2360.810144" stroke="#15232E" stroke-width="60" stroke-miterlimit="10"/><path fill="#FF9100" d="M 19.714844 11.859375 L 21.019531 14.464844 L 23.941406 14.882812 L 21.828125 16.910156 L 22.324219 19.773438 L 19.714844 18.421875 L 17.101562 19.773438 L 17.601562 16.910156 L 15.488281 14.882812 L 18.410156 14.464844 L 19.714844 11.859375"/><g clip-path="url(#b)"><path stroke-linecap="round" transform="matrix(.0083 0 0 -.00817 -2.512 31.017)" fill="none" stroke-linejoin="round" d="M 2679.400326 2345.031416 L 2836.678937 2026.109867 L 3188.907683 1974.948539 L 2934.154005 1726.792191 L 2993.957548 1376.313188 L 2679.400326 1541.750753 L 2364.372209 1376.313188 L 2424.646647 1726.792191 L 2169.892968 1974.948539 L 2522.121714 2026.109867 Z M 2679.400326 2345.031416" stroke="#15232E" stroke-width="60" stroke-miterlimit="10"/></g><g clip-path="url(#c)"><path fill="#FF9100" d="M 15.367188 12.335938 L 16.671875 14.945312 L 19.59375 15.359375 L 17.480469 17.390625 L 17.980469 20.253906 L 15.367188 18.902344 L 12.757812 20.253906 L 13.253906 17.390625 L 11.144531 15.359375 L 14.0625 14.945312 L 15.367188 12.335938"/></g><g clip-path="url(#d)"><path stroke-linecap="round" transform="matrix(.0083 0 0 -.00817 -2.512 31.017)" fill="none" stroke-linejoin="round" d="M 2155.295253 2286.69794 L 2312.573864 1967.298247 L 2664.80261 1916.615063 L 2410.048931 1667.980571 L 2470.323369 1317.501568 L 2155.295253 1482.939133 L 1840.73803 1317.501568 L 1900.541574 1667.980571 L 1646.258789 1916.615063 L 1998.016641 1967.298247 Z M 2155.295253 2286.69794" stroke="#15232E" stroke-width="60" stroke-miterlimit="10"/></g><g clip-path="url(#e)"><path fill="#FFF" d="M 6.003906 9.886719 C 5.992188 9.878906 5.976562 9.871094 5.964844 9.859375 C 5.695312 9.664062 5.636719 9.292969 5.835938 9.027344 C 6.035156 8.761719 6.414062 8.707031 6.683594 8.902344 C 6.695312 8.910156 6.707031 8.921875 6.722656 8.929688 L 6.730469 8.941406 C 6.765625 8.96875 6.796875 9.003906 6.820312 9.039062 L 9.976562 12.03125 L 6.140625 9.949219 C 6.097656 9.933594 6.054688 9.917969 6.015625 9.894531 L 6.003906 9.886719"/></g><g clip-path="url(#f)"><path stroke-linecap="round" transform="matrix(.0083 0 0 -.00817 -2.512 31.017)" fill="none" stroke-linejoin="round" d="M 1026.562225 2586.493759 C 1025.149543 2587.450045 1023.265966 2588.406332 1021.853284 2589.840762 C 989.361595 2613.747924 982.298184 2659.171533 1006.313781 2691.685274 C 1030.329377 2724.199015 1076.0061 2730.893021 1108.497789 2706.985858 C 1109.910471 2706.029572 1111.323153 2704.595142 1113.206729 2703.638856 L 1114.148517 2702.204426 C 1118.386564 2698.857423 1122.153716 2694.554134 1124.97908 2690.250844 L 1505.461469 2323.993113 L 1043.043516 2578.843467 C 1037.863682 2580.75604 1032.683847 2582.668613 1027.974907 2585.537472 Z M 1026.562225 2586.493759" stroke="#15232E" stroke-width="60" stroke-miterlimit="10"/></g><path fill="#FFF" d="M 11.058594 7.734375 C 11.054688 7.71875 11.050781 7.707031 11.046875 7.691406 C 10.976562 7.410156 11.152344 7.128906 11.4375 7.058594 C 11.722656 6.992188 12.011719 7.164062 12.082031 7.445312 C 12.085938 7.457031 12.089844 7.472656 12.089844 7.484375 L 12.09375 7.484375 L 12.09375 7.496094 C 12.097656 7.535156 12.097656 7.574219 12.09375 7.613281 L 12.511719 11.382812 L 11.117188 7.851562 C 11.09375 7.816406 11.078125 7.78125 11.0625 7.746094 L 11.058594 7.734375"/><g clip-path="url(#g)"><path stroke-linecap="round" transform="matrix(.0083 0 0 -.00817 -2.512 31.017)" fill="none" stroke-linejoin="round" d="M 1635.89912 2849.950691 C 1635.428226 2851.863264 1634.957332 2853.297693 1634.486438 2855.210266 C 1626.010345 2889.636581 1647.200577 2924.062895 1681.575843 2932.669473 C 1715.951108 2940.797909 1750.797267 2919.759605 1759.27336 2885.333291 C 1759.744254 2883.898862 1760.215148 2881.986289 1760.215148 2880.551859 L 1760.686042 2880.551859 L 1760.686042 2879.117429 C 1761.156936 2874.335997 1761.156936 2869.554564 1760.686042 2864.773131 L 1811.071705 2403.364893 L 1642.962531 2835.606393 C 1640.137167 2839.909682 1638.25359 2844.212972 1636.370014 2848.516261 Z M 1635.89912 2849.950691" stroke="#15232E" stroke-width="60" stroke-miterlimit="10"/></g><g clip-path="url(#h)"><path fill="#FFF" d="M 24.246094 9.890625 L 24.242188 9.886719 C 24.257812 9.878906 24.269531 9.871094 24.285156 9.859375 C 24.550781 9.664062 24.609375 9.292969 24.410156 9.027344 C 24.214844 8.761719 23.832031 8.707031 23.566406 8.902344 C 23.550781 8.910156 23.539062 8.921875 23.527344 8.929688 L 23.515625 8.941406 C 23.484375 8.96875 23.453125 9.003906 23.429688 9.039062 L 20.273438 12.03125 L 24.109375 9.949219 C 24.148438 9.933594 24.191406 9.917969 24.230469 9.894531 L 24.246094 9.890625"/><path stroke-linecap="round" transform="matrix(.0083 0 0 -.00817 -2.512 31.017)" fill="none" stroke-linejoin="round" d="M 3225.637419 2586.015616 L 3225.166525 2586.493759 C 3227.050101 2587.450045 3228.462783 2588.406332 3230.346359 2589.840762 C 3262.367155 2613.747924 3269.430565 2659.171533 3245.414969 2691.685274 C 3221.870267 2724.199015 3175.72265 2730.893021 3143.701855 2706.985858 C 3141.818279 2706.029572 3140.405597 2704.595142 3138.992914 2703.638856 L 3137.580232 2702.204426 C 3133.81308 2698.857423 3130.045928 2694.554134 3127.220563 2690.250844 L 2746.738174 2323.993113 L 3209.156127 2578.843467 C 3213.865068 2580.75604 3219.044902 2582.668613 3223.753843 2585.537472 Z M 3225.637419 2586.015616" stroke="#15232E" stroke-width="60" stroke-miterlimit="10"/></g><path fill="#FFF" d="M 19.191406 7.734375 L 19.1875 7.734375 C 19.191406 7.71875 19.195312 7.707031 19.199219 7.691406 C 19.269531 7.410156 19.097656 7.128906 18.808594 7.058594 C 18.523438 6.992188 18.234375 7.164062 18.167969 7.445312 C 18.164062 7.457031 18.160156 7.472656 18.160156 7.484375 L 18.15625 7.484375 L 18.15625 7.496094 C 18.148438 7.535156 18.148438 7.578125 18.152344 7.613281 L 17.738281 11.382812 L 19.132812 7.851562 C 19.152344 7.816406 19.171875 7.78125 19.183594 7.746094 L 19.191406 7.734375"/><g clip-path="url(#i)"><path stroke-linecap="round" transform="matrix(.0083 0 0 -.00817 -2.512 31.017)" fill="none" stroke-linejoin="round" d="M 2616.300524 2849.950691 L 2615.82963 2849.950691 C 2616.300524 2851.863264 2616.771418 2853.297693 2617.242312 2855.210266 C 2625.718404 2889.636581 2604.999066 2924.062895 2570.152907 2932.669473 C 2535.777642 2940.797909 2500.931482 2919.759605 2492.926284 2885.333291 C 2492.45539 2883.898862 2491.984495 2881.986289 2491.984495 2880.551859 L 2491.513601 2880.551859 L 2491.513601 2879.117429 C 2490.571813 2874.335997 2490.571813 2869.076421 2491.042707 2864.773131 L 2441.127939 2403.364893 L 2609.237113 2835.606393 C 2611.591583 2839.909682 2613.946053 2844.212972 2615.358735 2848.516261 Z M 2616.300524 2849.950691" stroke="#15232E" stroke-width="60" stroke-miterlimit="10"/></g></svg>',
  },
  {
    id: "appreciated",
    name: "Appreciated",
    title: "Appreciated by another team member",
    src: '<svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 30 30" height="30" version="1.0"><defs><clipPath id="a"><path d="M 0.484375 0 L 29.515625 0 L 29.515625 29.03125 L 0.484375 29.03125 Z M 0.484375 0"/></clipPath><clipPath id="b"><path d="M 2.003906 0.527344 L 28 0.527344 L 28 28.835938 L 2.003906 28.835938 Z M 2.003906 0.527344"/></clipPath><clipPath id="c"><path d="M 8.519531 7.746094 L 18 7.746094 L 18 18 L 8.519531 18 Z M 8.519531 7.746094"/></clipPath><clipPath id="d"><path d="M 15 15 L 21.582031 15 L 21.582031 21.535156 L 15 21.535156 Z M 15 15"/></clipPath></defs><g clip-path="url(#a)" fill="#FFF"><path d="M 0.484375 0 L 29.515625 0 L 29.515625 36.289062 L 0.484375 36.289062 Z M 0.484375 0"/><path d="M 0.484375 0 L 29.515625 0 L 29.515625 29.03125 L 0.484375 29.03125 Z M 0.484375 0"/><path d="M 0.484375 0 L 29.515625 0 L 29.515625 29.03125 L 0.484375 29.03125 Z M 0.484375 0"/></g><g clip-path="url(#b)"><path fill="#001E4B" d="M 10.339844 1.535156 C 8.816406 2.234375 6.351562 2.058594 6.351562 2.058594 L 3.535156 5.417969 C 3.871094 7.101562 4.828125 7.988281 4.3125 10.65625 C 3.703125 13.808594 2.355469 15.972656 2.1875 18.25 C 2.015625 20.570312 2.199219 22.765625 4.660156 25.191406 C 6.199219 26.707031 9.492188 27.597656 11.46875 27.984375 C 12.664062 28.21875 13.894531 28.546875 15.066406 28.835938 C 16.207031 28.546875 17.472656 28.222656 18.664062 27.984375 C 20.636719 27.582031 23.929688 26.707031 25.46875 25.191406 C 27.929688 22.765625 28.113281 20.570312 27.941406 18.25 C 27.773438 15.972656 26.429688 13.808594 25.820312 10.65625 C 25.304688 7.988281 26.261719 7.101562 26.601562 5.417969 L 23.777344 2.058594 C 23.777344 2.058594 21.316406 2.234375 19.789062 1.535156 C 18.320312 0.796875 16.742188 0.578125 15.074219 0.550781 C 13.40625 0.527344 11.855469 0.871094 10.339844 1.535156 Z M 10.339844 1.535156"/></g><g clip-path="url(#c)"><path stroke-linecap="round" transform="matrix(.02331 0 0 .02356 6.656 3.406)" fill="#FF9100" fill-rule="evenodd" stroke-linejoin="round" d="M 258.531794 186.562711 L 247.808089 270.305896 C 239.430195 272.793317 231.387416 276.109879 223.847311 280.255581 L 156.489039 229.18053 L 123.982808 261.517007 L 175.590638 328.345727 C 171.401691 335.973819 168.218091 343.933568 165.704723 352.3908 L 81.925778 363.832938 L 81.925778 409.767319 L 165.704723 420.546145 C 168.050533 429.003378 171.401691 437.128954 175.590638 444.591218 L 124.65304 511.917422 L 156.991713 544.2539 L 223.679753 492.847192 C 231.219858 496.992894 239.430195 500.309456 247.808089 502.796878 L 259.369584 586.374235 L 305.280446 586.374235 L 316.004151 502.796878 C 324.382045 500.309456 332.424824 496.992894 340.132487 492.681364 L 407.323201 543.756416 L 439.661874 511.25411 L 388.221602 444.591218 C 392.410549 436.963126 395.594149 428.83755 398.107517 420.380317 L 481.718905 408.938179 L 481.718905 363.003798 L 397.939959 352.3908 C 395.594149 343.933568 392.242991 335.807991 388.054044 328.345727 L 439.1592 261.019523 L 406.65297 228.517217 L 339.797371 280.255581 C 332.257266 276.109879 324.214487 272.793317 315.836593 270.305896 L 304.442656 186.562711 Z M 345.159224 386.385559 C 345.159224 421.375286 316.84194 449.731889 281.822341 449.731889 C 246.9703 449.731889 218.485458 421.375286 218.485458 386.385559 C 218.485458 351.395832 246.9703 323.039228 281.822341 323.039228 C 316.84194 323.039228 345.159224 351.395832 345.159224 386.385559 Z M 345.159224 386.385559" stroke="#000" stroke-width="4.125"/></g><g clip-path="url(#d)"><path stroke-linecap="round" transform="matrix(.02331 0 0 .02356 6.656 3.406)" fill="#FF9100" fill-rule="evenodd" stroke-linejoin="round" d="M 497.804462 515.56564 L 491.102147 568.630629 C 485.740294 570.123082 480.713557 572.278847 475.854379 574.932096 L 433.294674 542.595619 L 412.852612 562.992474 L 445.5264 605.278637 C 442.845474 610.087651 440.834779 615.228322 439.1592 620.534821 L 386.210907 627.665429 L 386.210907 656.685345 L 439.1592 663.484296 C 440.667221 668.790795 442.845474 673.931466 445.358842 678.74048 L 413.187727 721.192471 L 433.797348 741.755154 L 475.854379 709.252849 C 480.713557 711.74027 485.740294 713.896035 491.102147 715.554316 L 498.307136 768.287649 L 527.294651 768.287649 L 534.164524 715.388488 C 539.526377 713.896035 544.553114 711.74027 549.412293 709.087021 L 591.804439 741.423498 L 612.414059 720.860815 L 579.740271 678.74048 C 582.421197 673.931466 584.431892 668.790795 586.107471 663.484296 L 638.888206 656.18786 L 638.888206 627.167945 L 586.107471 620.368993 C 584.431892 615.062494 582.421197 610.087651 579.740271 605.278637 L 612.078944 562.660818 L 591.469323 542.263963 L 549.244735 574.766268 C 544.553114 572.278847 539.358819 570.123082 534.164524 568.630629 L 526.791977 515.56564 Z M 552.595892 641.926645 C 552.595892 663.981781 534.667198 682.057042 512.549557 682.057042 C 490.599473 682.057042 472.670779 663.981781 472.670779 641.926645 C 472.670779 619.871509 490.599473 601.962075 512.549557 601.962075 C 534.667198 601.962075 552.595892 619.871509 552.595892 641.926645 Z M 552.595892 641.926645" stroke="#000" stroke-width="2.607"/></g></svg>',
  },
];

const people = [
  {
    id: "dad",
    name: "David Duckworth",
    title: "Head of UI Engineering",
    badges: [
      { badgeId: "appreciated", desc: "I Love you" },
      { badgeId: "rapid-fixer", desc: "I Love you" },
      { badgeId: "first-responder", desc: "For always answering stuff" },
    ],
    projects: [
      {
        projectId: "axe-finder",
        roles: ["contributor", "designer", "fe-developer"],
      },
      {
        projectId: "t3",
        roles: ["fe-developer", "designer"],
      },
      {
        projectId: "pt-vt",
        roles: ["fe-developer"],
      },
    ],
  },
  {
    id: "lmd",
    name: "Leona Duckworth",
    title: "Consultant",
    badges: [{ badgeId: "first-responder", desc: "For always being awesome" }],
  },
  {
    id: "tt",
    name: "Tony Tiger",
    title: "CTO",
    badges: [
      { badgeId: "first-responder", desc: "For always answering stuff" },
    ],
    projects: [
      {
        projectId: "t3",
        roles: ["fe-developer", "designer"],
      },
    ],
  },
  {
    id: "cc",
    name: "Chris Columbo",
    title: "CTO",
    badges: [{ badgeId: "appreciated", desc: "I Love you" }],
    projects: [],
  },
  {
    id: "jos",
    name: "jolly old soul",
    title: "CTO",
    badges: [
      { badgeId: "appreciated", desc: "I Love you" },
      { badgeId: "first-responder", desc: "For always answering stuff" },
    ],
    projects: [
      {
        projectId: "axe-finder",
        roles: ["designer", "fe-developer"],
      },
      {
        projectId: "t3",
        roles: ["fe-developer"],
      },
    ],
  },
  {
    id: "ld",
    name: "Ringo Star",
    title: "CTO",
    badges: [],
    projects: [
      {
        projectId: "axe-finder",
        roles: ["contributor", "designer", "fe-developer"],
      },
    ],
  },
  {
    id: "nc",
    name: "Nut Cracker",
    title: "CTO",
    badges: [
      { badgeId: "appreciated", desc: "I Love you" },
      { badgeId: "first-responder", desc: "For always answering stuff" },
    ],
    projects: [
      {
        projectId: "axe-finder",
        roles: ["contributor", "designer", "fe-developer"],
      },
      {
        projectId: "t3",
        roles: ["fe-developer", "designer"],
      },
    ],
  },
  {
    id: "tt",
    name: "tiny tim",
    title: "CTO",
    badges: [
      { badgeId: "appreciated", desc: "I Love you" },
      { badgeId: "first-responder", desc: "For always answering stuff" },
    ],
    projects: [
      {
        projectId: "axe-finder",
        roles: ["contributor", "designer", "fe-developer"],
      },
      {
        projectId: "t3",
        roles: ["fe-developer", "designer"],
      },
    ],
  },
  {
    id: "sc",
    name: "Santa Clause",
    title: "CTO",
    badges: [
      { badgeId: "appreciated", desc: "I Love you" },
      { badgeId: "first-responder", desc: "For always answering stuff" },
    ],
    projects: [
      {
        projectId: "axe-finder",
        roles: ["contributor", "designer", "fe-developer"],
      },
      {
        projectId: "t3",
        roles: ["fe-developer", "designer"],
      },
    ],
  },
];

const projects = [
  {
    id: "axe-finder",
    name: "Axe Finder",
    desc: "Axe Finder dialog for casts",
  },
  {
    id: "t3",
    name: "T3",
    desc: "Multi watchlist",
  },
  {
    id: "pt-vt",
    name: "PT List Voice Trade",
    desc: "Portfolio Trading Voice Trade",
  },
  {
    id: "pt-rfq",
    name: "List RFQ",
    desc: "List RFQ Trading",
  },
  {
    id: "fake-fun-one",
    name: "Fake Fun One",
    desc: "Let me see it",
  },
];

const roles = [
  { id: "contributor", name: "Contributor", desc: "Contributed to project" },
  { id: "designer", name: "Designer", desc: "Helper design UX" },
  { id: "product", name: "Product", desc: "Helper define business logic" },
  {
    id: "fe-developer",
    name: "Front End Developer",
    desc: "Helped code front end",
  },
  {
    id: "be-developer",
    name: "Back End Developer",
    desc: "Helped code back end",
  },
  {
    id: "leader",
    name: "Project Lead",
    desc: "Leader",
  },
  {
    id: "manager",
    name: "Project Manager",
    desc: "Manager",
  },
  {
    id: "architect",
    name: "Architect",
    desc: "Architects",
  },
  {
    id: "ui/ux",
    name: "UI/UX Designer",
    desc: "design ui",
  },
  {
    id: "testing",
    name: "QA and Testing Specialists",
    desc: "testing",
  },
];

export const model = {
  badges,
  people,
  projects,
  roles,
};
