(function(){"use strict";var A={1057:function(A,V,m){var E=m(6369),d=function(){var A=this,V=A._self._c;return V("div",{attrs:{id:"app"}},[V("h1",[A._v("Simon Says")]),V("div",{staticClass:"game"},[V("div",{staticClass:"game-circle"},[V("div",{staticClass:"game-button",class:{active:1===A.activeElement},on:{click:function(V){return A.gameButtonHandler(1)}}}),V("div",{staticClass:"game-button",class:{active:2===A.activeElement},on:{click:function(V){return A.gameButtonHandler(2)}}}),V("div",{staticClass:"game-button",class:{active:3===A.activeElement},on:{click:function(V){return A.gameButtonHandler(3)}}}),V("div",{staticClass:"game-button",class:{active:4===A.activeElement},on:{click:function(V){return A.gameButtonHandler(4)}}})]),V("div",{staticClass:"game-info"},[V("div",{staticClass:"game-stats"},[V("h2",[A._v("Раунд: "+A._s(A.round))]),V("button",{on:{click:A.startGame}},[A._v("Старт")]),A.countRoundsBeforeLoose&&0===A.round?V("span",[A._v("Вы проиграли на "+A._s(A.countRoundsBeforeLoose)+" раунде")]):A._e()]),V("div",{staticClass:"game-options"},[V("h2",[A._v("Выбор сложности")]),V("div",{staticClass:"radio-group"},[V("input",{directives:[{name:"model",rawName:"v-model",value:A.mode,expression:"mode"}],attrs:{type:"radio",id:"easy-mode",name:"mode",value:"easy"},domProps:{checked:A._q(A.mode,"easy")},on:{change:function(V){A.mode="easy"}}}),V("label",{attrs:{for:"easy-mode"}},[A._v("Легкий")])]),V("div",{staticClass:"radio-group"},[V("input",{directives:[{name:"model",rawName:"v-model",value:A.mode,expression:"mode"}],attrs:{type:"radio",id:"normal-mode",name:"mode",value:"normal"},domProps:{checked:A._q(A.mode,"normal")},on:{change:function(V){A.mode="normal"}}}),V("label",{attrs:{for:"normal-mode"}},[A._v("Средний")])]),V("div",{staticClass:"radio-group"},[V("input",{directives:[{name:"model",rawName:"v-model",value:A.mode,expression:"mode"}],attrs:{type:"radio",id:"hard-mode",name:"mode",value:"hard"},domProps:{checked:A._q(A.mode,"hard")},on:{change:function(V){A.mode="hard"}}}),V("label",{attrs:{for:"hard-mode"}},[A._v("Сложный")])])])])])])},l=[];m(560);const e=m(9200),a=m(6214),C=m(7539),i=m(4446);var R={name:"App",data(){return{round:0,activeElement:0,mode:"easy",delay:1.5,sequence:[],isPlayerRestoreOrder:!1,countRoundsBeforeLoose:0}},methods:{startGame(){0===this.round&&this.nextRound()},generateSequence(){this.sequence=[];for(let A=0;A<this.round;A++){let A=Math.random();A<.25?this.sequence.push(1):A<.5?this.sequence.push(2):A<.75?this.sequence.push(3):this.sequence.push(4)}},displayCurrentGameButton(A){A<this.sequence.length?(this.activeElement=this.sequence[A],this.playAudio(this.sequence[A]),setTimeout((()=>{this.displayCurrentGameButton(A+1)}),1e3*this.delay)):(this.activeElement=0,this.isPlayerRestoreOrder=!0)},gameButtonHandler(A){this.isPlayerRestoreOrder&&(this.playAudio(A),this.sequence[0]===A?(this.sequence.shift(),0===this.sequence.length&&(this.sequence=[],this.isPlayerRestoreOrder=!1,setTimeout((()=>{this.nextRound()}),1e3))):(this.sequence=[],this.countRoundsBeforeLoose=this.round,this.round=0,this.isPlayerRestoreOrder=!1))},nextRound(){this.round+=1,this.generateSequence(),this.displayCurrentGameButton(0)},playAudio(A){let V;switch(A){case 1:V=new Audio(e);break;case 2:V=new Audio(a);break;case 3:V=new Audio(C);break;default:V=new Audio(i)}V.play()}},watch:{mode(A){switch(A){case"easy":this.delay=1.5;break;case"normal":this.delay=1;break;case"hard":this.delay=.4}}}},k=R,I=m(1001),t=(0,I.Z)(k,d,l,!1,null,null,null),n=t.exports;E.ZP.config.productionTip=!1,E.ZP.config.devtools=!0,new E.ZP({render:A=>A(n)}).$mount("#app")},9200:function(A){A.exports="data:audio/ogg;base64,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hAYhxpyT0CDEmHNSKsacg5BKxZhzEErKnINQSkqZcxBKSSmUkkpKrYVSSkqptQIAAAocAAACbNCUWByg0JCVAEAqAIDBcSzL80RRNWXZsSTPE0XTVFXbdizL80TRNFXVti3PE0XTVFXX1XXL80TRVFXVdXXdE0XVVFXXlWXf90TRNFXVdWXZ903TdFXXlWXb9n3TNFXXdWVZtn1hdVXXlWXb1m1jWFXXdWXZtm1dOW7d1nXhF4ZhmNq67vu+LwzH8EwDAMATHACACmxYHeGkaCyw0JCVAEAGAABhDEIGIYUMQkghhZRCSCklAABgwAEAIMCEMlBoyEoAIBUAACDEWmuttdZaYqm11lprrbWGSmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKRUA6FfhAOD/YMPqCCdFY4GFhqwEAMIBAABjlGIMOukkpNQw5RiEUlJJpZVGMecglJJSSq1VzklIpaXWWouxck5KSSm1FluMHYSUWmotxhhj7CCklFprMcYYYyilpRhjrDHWWkNJqbUYY4w111pSai3GWmutufeSUosxxlxr7rmX1mKsteacc849tRZjrTXn3HPwqbUYY8619957UK3FWGuuOQfhewEA3A0OABAJNs6wknRWOBpcaMhKACAkAIBAiDHGnHMOQgghREox5pxzEEIIIYRIKcaccw5CCCGEkDHmnHMQQgihlFIyxpxzDkIIJZRQSuaccxBCCKGUUkrJnHMOQgghlFJKKR10EEIIoZRSSimlcw5CCKGUUkoppYQQQiillFJKKaWUEEIIpZRSSimllBJCCKWUUkoppZRSQgihlFJKKaWkUkoIoZRSSimllFJKCSGUUkoppZRSSimhhFJKKaWUUkopJZRQSimllFJKKqUUAABw4AAAEGAEnWRUWYSNJlx4AAoNWQkAAAEAIM5abClGRjHnIIbIIMQghgopxZy1DCmDHKZMKYSUlc4xhoiTFlsLFQMAAEAQAEAgZAKBAigwkAEABwgJUgBAYYGhQ4QIEKPAwLi4tAEACEJkhkhELAaJCdVAUTEdACwuMOQDQIbGRtrFBXQZ4IIu7joQQhCCEMTiAApIwMEJNzzxhifc4ASdolIHAQAAAABw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"},6214:function(A){A.exports="data:audio/ogg;base64,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hAYhxpyT0CDEmHNSKsacg5BKxZhzEErKnINQSkqZcxBKSSmUkkpKrYVSSkqptQIAAAocAAACbNCUWByg0JCVAEAqAIDBcSzL80RRNWXZsSTPE0XTVFXbdizL80TRNFXVti3PE0XTVFXX1XXL80TRVFXVdXXdE0XVVFXXlWXf90TRNFXVdWXZ903TdFXXlWXb9n3TNFXXdWVZtn1hdVXXlWXb1m1jWFXXdWXZtm1dOW7d1nXhF4ZhmNq67vu+LwzH8EwDAMATHACACmxYHeGkaCyw0JCVAEAGAABhDEIGIYUMQkghhZRCSCklAABgwAEAIMCEMlBoyEoAIBUAACDEWmuttdZaYqm11lprrbWGSmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKRUA6FfhAOD/YMPqCCdFY4GFhqwEAMIBAABjlGIMOukkpNQw5RiEUlJJpZVGMecglJJSSq1VzklIpaXWWouxck5KSSm1FluMHYSUWmotxhhj7CCklFprMcYYYyilpRhjrDHWWkNJqbUYY4w111pSai3GWmutufeSUosxxlxr7rmX1mKsteacc849tRZjrTXn3HPwqbUYY8619957UK3FWGuuOQfhewEA3A0OABAJNs6wknRWOBpcaMhKACAkAIBAiDHGnHMOQgghREox5pxzEEIIIYRIKcaccw5CCCGEkDHmnHMQQgihlFIyxpxzDkIIJZRQSuaccxBCCKGUUkrJnHMOQgghlFJKKR10EEIIoZRSSimlcw5CCKGUUkoppYQQQiillFJKKaWUEEIIpZRSSimllBJCCKWUUkoppZRSQgihlFJKKaWkUkoIoZRSSimllFJKCSGUUkoppZRSSimhhFJKKaWUUkopJZRQSimllFJKKqUUAABw4AAAEGAEnWRUWYSNJlx4AAoNWQkAAAEAIM5abClGRjHnIIbIIMQghgopxZy1DCmDHKZMKYSUlc4xhoiTFlsLFQMAAEAQAEAgZAKBAigwkAEABwgJUgBAYYGhQ4QIEKPAwLi4tAEACEJkhkhELAaJCdVAUTEdACwuMOQDQIbGRtrFBXQZ4IIu7joQQhCCEMTiAApIwMEJNzzxhifc4ASdolIHAQAAAABwAAAPAADHBhAR0RxHh8cHSIjICElJAAAAAADgAMAHAMBhAkRENMfR4fEBEiIyQlISAAAAAAAAAAAABAQEAAAAAAACAAAABARPZ2dTAASAVQAAAAAAAAnbu2MCAAAACv7c9BoBdbkpLB02IyMjIiIjJCMiIyIhICEmNVmkTQA6lvz3bF+EACZAiqpIJVUZAADFMYxaJXLbDr79d99apg1apmzHi5QAx0yi4v82escpuVyRN8YlnQmHmRn9fxljJjMDcGJMgC0Z6C0No0YJADhs2zZmHBsbgwa2MYW/NsD/oMFAQ6FAgSr+2myCGIZSwA5yDx02luzT5Y8IExETHMfRb6s4Xq7idXYN7IGASqr7wKpKSdHnW/3mae2fzlHf2fGENPdzHsmZ9l2Y0X5XkCOgePsRCnf1I2K4jyh2vvQwiwf8TLvFsplsTmI4Divw/4KzEtwCgOvhrMVqL0ox5q4OogVBWUzPPJSPM2oI8hUje8cCpn/kyCUpRGekhLWuH/T2OjF7lHJ4sKAYvANN/IBUgzCGQkz3fiMBnIIAzi+MGWFu0D8SQVcRLaDACQwJUzfuKGxxK0EwAL9zXcO+7RmZ/vA4qrC1vGwXu776RbkUoYwHdQ4A3Jr1OTlFpgEIAwCGFlC/K+rtVCgVDZKnAg++0zt+qma88YriOH755QPvBQAMr79/DC7NEgAQAAAAXgHt50wezFatsK7xei6UAvqpvgV7ef+iLxRnlYzwAQCAAgAAAIBx/LOTZkBuxulf3rh11PH+equOXHn19UbeI9LLKAC4Ab66fsFdvw7Fbxju8EGaAAAAAAAAANB/VgMAsKLawfG8SAAAXrp+oOPff/E7ioNKmgAAAAAAAADQv1pzAACrZuXaI7xKAAAeqr5z+6//4lcgOVsqaQIAAAAAAACAt9YnAICIf1Y77FkCAB6avpOHhPNnn2gOMmkCAgAAAAAAACZ1AQAUag9jj1JLAAD+mb6T+3/+4lehOMikCQgAAAAAAAC4rb4BAHzl1SbSlgAA3om+kce3/+xXITlopAkAAAAAAAAA++31CQAQc27ZKCklAABein6BXb8JxSeGu6kN0gQAAAAAAACA/UPNAQDp251ecEkNAABeen7j/dt/8VuiOKGSSRMAAAAAAAAA9h9qAIDx7XSNXCoAAB5qfqH96r94BYaT5wVpAgAAAAAAAMD+twYAEIy1Ts8pAAAeWn7D/emf+EBx8hgaaQILAAAAAAAA9l8FAJiQ8evmqmcAAP5J/idRPqKLT3DCB2kCCwAAAAAAAPbnAAATMk/3bltrAAAeOf6rlC9d/AL3GqQJLAAAAAAAAHheAgBTzmQb31UGAACeGP5tpVM28QvcQJrAAgAAAAAAgP3TBABCa0/8sRoDAH4J/h+ifGniN3BCBWkCAAAAAAAAwP5PCQAmZKU4NcEAAB7p/SdR36KL3xKc8EGaAAAgoAAAAADY31YBAMy0q+8kAQA6mu0Avrj9J1F8U1e/L7DDB2kCADAzBQAAAPDDcAAwkfXsnL+SGwQANLBTwvySYmk/bfroExqUAgAeaP0nUf1g04AKJ3wgvAAApFeSEhAwAAC4dQoAIPLLc+tIbUkRAFQCmDngY5t6gxXCh7snFyeZKfN/y5fXTBVFlAfIcCoqRkiF7U55tUPWp0GBCTAXkFJYAJ6m/CHHfJjHgBaJEEgLAFBWNboCShJQAOgbAGSDTK9/fNkRxgpGRNne3j7H3NJXjd9qbHvX/YwfZ7+OwxX1e9Vtns4BNWjrsGx5ogX2xwO1RyGczYXoZM5rbOMVdnJrtV8xscmls+5Ej8+LKzRhqgI36vYuDeW2C+MDIi42NSOGm3copr4To7Z16qcS+HNymZlzRh5to+u4igwtnXAZpyDAWfIAHpb8d60fmgI2MAPm0HsydJKBUgoCCgCAClZPSTvmvEZ0Ed4l45iTjwV1/k7YBITtWbrGN3duWLIk1cB+E3M6AK/M6fxgpwMwAe6MrQI="},7539:function(A){A.exports="data:audio/ogg;base64,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hAYhxpyT0CDEmHNSKsacg5BKxZhzEErKnINQSkqZcxBKSSmUkkpKrYVSSkqptQIAAAocAAACbNCUWByg0JCVAEAqAIDBcSzL80RRNWXZsSTPE0XTVFXbdizL80TRNFXVti3PE0XTVFXX1XXL80TRVFXVdXXdE0XVVFXXlWXf90TRNFXVdWXZ903TdFXXlWXb9n3TNFXXdWVZtn1hdVXXlWXb1m1jWFXXdWXZtm1dOW7d1nXhF4ZhmNq67vu+LwzH8EwDAMATHACACmxYHeGkaCyw0JCVAEAGAABhDEIGIYUMQkghhZRCSCklAABgwAEAIMCEMlBoyEoAIBUAACDEWmuttdZaYqm11lprrbWGSmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKRUA6FfhAOD/YMPqCCdFY4GFhqwEAMIBAABjlGIMOukkpNQw5RiEUlJJpZVGMecglJJSSq1VzklIpaXWWouxck5KSSm1FluMHYSUWmotxhhj7CCklFprMcYYYyilpRhjrDHWWkNJqbUYY4w111pSai3GWmutufeSUosxxlxr7rmX1mKsteacc849tRZjrTXn3HPwqbUYY8619957UK3FWGuuOQfhewEA3A0OABAJNs6wknRWOBpcaMhKACAkAIBAiDHGnHMOQgghREox5pxzEEIIIYRIKcaccw5CCCGEkDHmnHMQQgihlFIyxpxzDkIIJZRQSuaccxBCCKGUUkrJnHMOQgghlFJKKR10EEIIoZRSSimlcw5CCKGUUkoppYQQQiillFJKKaWUEEIIpZRSSimllBJCCKWUUkoppZRSQgihlFJKKaWkUkoIoZRSSimllFJKCSGUUkoppZRSSimhhFJKKaWUUkopJZRQSimllFJKKqUUAABw4AAAEGAEnWRUWYSNJlx4AAoNWQkAAAEAIM5abClGRjHnIIbIIMQghgopxZy1DCmDHKZMKYSUlc4xhoiTFlsLFQMAAEAQAEAgZAKBAigwkAEABwgJUgBAYYGhQ4QIEKPAwLi4tAEACEJkhkhELAaJCdVAUTEdACwuMOQDQIbGRtrFBXQZ4IIu7joQQhCCEMTiAApIwMEJNzzxhifc4ASdolIHAQAAAABw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"},4446:function(A){A.exports="data:audio/ogg;base64,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hAYhxpyT0CDEmHNSKsacg5BKxZhzEErKnINQSkqZcxBKSSmUkkpKrYVSSkqptQIAAAocAAACbNCUWByg0JCVAEAqAIDBcSzL80RRNWXZsSTPE0XTVFXbdizL80TRNFXVti3PE0XTVFXX1XXL80TRVFXVdXXdE0XVVFXXlWXf90TRNFXVdWXZ903TdFXXlWXb9n3TNFXXdWVZtn1hdVXXlWXb1m1jWFXXdWXZtm1dOW7d1nXhF4ZhmNq67vu+LwzH8EwDAMATHACACmxYHeGkaCyw0JCVAEAGAABhDEIGIYUMQkghhZRCSCklAABgwAEAIMCEMlBoyEoAIBUAACDEWmuttdZaYqm11lprrbWGSmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKRUA6FfhAOD/YMPqCCdFY4GFhqwEAMIBAABjlGIMOukkpNQw5RiEUlJJpZVGMecglJJSSq1VzklIpaXWWouxck5KSSm1FluMHYSUWmotxhhj7CCklFprMcYYYyilpRhjrDHWWkNJqbUYY4w111pSai3GWmutufeSUosxxlxr7rmX1mKsteacc849tRZjrTXn3HPwqbUYY8619957UK3FWGuuOQfhewEA3A0OABAJNs6wknRWOBpcaMhKACAkAIBAiDHGnHMOQgghREox5pxzEEIIIYRIKcaccw5CCCGEkDHmnHMQQgihlFIyxpxzDkIIJZRQSuaccxBCCKGUUkrJnHMOQgghlFJKKR10EEIIoZRSSimlcw5CCKGUUkoppYQQQiillFJKKaWUEEIIpZRSSimllBJCCKWUUkoppZRSQgihlFJKKaWkUkoIoZRSSimllFJKCSGUUkoppZRSSimhhFJKKaWUUkopJZRQSimllFJKKqUUAABw4AAAEGAEnWRUWYSNJlx4AAoNWQkAAAEAIM5abClGRjHnIIbIIMQghgopxZy1DCmDHKZMKYSUlc4xhoiTFlsLFQMAAEAQAEAgZAKBAigwkAEABwgJUgBAYYGhQ4QIEKPAwLi4tAEACEJkhkhELAaJCdVAUTEdACwuMOQDQIbGRtrFBXQZ4IIu7joQQhCCEMTiAApIwMEJNzzxhifc4ASdolIHAQAAAABwAAAPAADHBhAR0RxHh8cHSIjICElJAAAAAADgAMAHAMBhAkRENMfR4fEBEiIyQlISAAAAAAAAAAAABAQEAAAAAAACAAAABARPZ2dTAASAVQAAAAAAAPd3OEQCAAAATlM8oxkBnqkpJzgiIiEiIyIjIiUiJSQjMkqlpZUBADqW/FnH78RAm80CM/X2Hft9Gf1rU22iymoi1TJT4JyaJvMdZz7sWJJOFYty8S873N1C8FwUdPD/WQ4Kr4yhO5ucy0nJPVQe/z8+zPkfIWgIou6OA/Hw0r2h9/6+UaOChoLgr40W+JszgjMAz3UYW5gkI8SEoEqgt1YMEJxoDAKGUf8AhUXJ8CnZFAIAKdvdtTCSJ+OfYOAkngLwoD0A9qZcwbXvGBsiuFcAgLquax0AYiUJMWykwxSY0ozBmbMA6P+/fltYk9UAp+yUc3zy1pO5Djhz5sxO07vMDI2p3bGLh1k/+lAcZFdtl2WUzjTKAOD3SQi5uQC742O4NIZ1Zyr/KTs4VmaI9D4G/5/XxQSUU44/LP+8+kQd37dymOycOL4VNpEjJaEUrHzxsl3uT34ZkJKf7itH4DZl50zXDHR5nx5T92AUAjwy6TZZArU3ve4AMwDgJcNGky6OFQ/2veIhbGtXYFvx9vdA73tOigcF1KL18ZOn0O75EEAIAFh19T52v2mrbYmnubxpp+U9d3nPXd5zN64Fero+7Ju05iJ94HsDaQEAAAAAAADsDOjrlMGYE0VurM1utc1Dj9x01U4HjLy7u7t7++23377rXQBeut65u2QP8R/eB0gTAA4AAAAAAAD89ycBGIgIJtwSZV0BXqo+lJuUCAnB+wBpAgAAAAAAAADgr8+XADClBsLG1x7QB16aPoi71Ajxf8H3AGkCgAIAAAAAAICUADBC+lI400/WFj6aPpS7lAgJh/cB0gQAAAAAAAAAwO/vJAFgkERm6aq0WgI+ij75m9QICcH7AGkCAAAAAAAAAOC/bwsA5Hw7mPOnTE9lAB56PvmbVA8JwfsAaQKAAAAAAAAAgLvhAQCcvi1k6WG7kkn+aT6Uu9QIDiF8D5AmAAgAAAAAAAD48mIBAOMUwZLNB6+QEt5pPri7FA8JwvcAaQLAAQAAAAAAgP9+BwBkzjfh9odrSQC+ST7Uu5S2OBzxnDIQXgBQAAAAAAAA8OWUCQCiXDC0rfOrhQQAnjk+lZvUmhJCPgdIEwAUAAAAAAAAPKeeAJBRPEgR9fxME14pPpSblJgSjnwfQHgBAAAAAAAAAPD3bwQAgciKzJ7vL+g0OgA+CT7Vm5Q2JRz5HCBNAAAAAAAAAAD8fgsCAMEM5ILZ3Wja5Abe6N2Vu+Q6Eg77AGkCgACAAgAAAAD2RAAgSJVElvaiNxEPAJ64fQW71Pg1XPa2DSBNAACQDAAAAADAl3ceAEwICilk9vxUamlOS15sjSdkW20ALRMA3nd9Zg4p8al/qrdtAMILAEDglZkAAAAAwC9vCUBVSBERNvQ0zWPQAwCWcE1SXLRPZEBYCi0/GMmMv0wub82WTrmYgQICUAANEzx+xvwzrEtxw24rWtriuIUXAEAgsFVWQL2kAAB8ffoE6Kt6jgiEje632Mi5AcDZGSO268/DhUCMgtkdXfJO53C34Z2ny/p8QPuZ8QdxWrhyLg4hMHo7KNubFIIS8zx3CFWwsyWegfc+iVLYGOWKj3eP0cRkjeUc0O2EgJToZ9kW7iZr9ySbLtrUYDZMt/aLl9k7F/jOmEWkdCsbCe9RexsoUww8pAAelnyDSYSCCyC1W0JgI3oSdu7bqZJKtKJKpgBcO18BQUKfHmX9qE+dI42HrXUuaqroDZ5jMJicXBEcW6ZB+bOSy9t3YRtNeRCO1U0NcWqx4RECReYXjA4Q+zwdoKLX5OhSy0zEucn3vkJw3LGwRerVmuTQSWyD1tTpXNnmV5mrGtNyLzIEOpVesYyqVae/fI/CJXHUZ25CKHExp7oTLMplmfwEBB3+lfx19DdSAQPouc0+aqCSAQCDAer72xtd1XVVD1goX3aLWWCtL7FtZOTM6hZ6fdrrU6+b+rRE1lqH9CvRE4rrEYOPPpbQZtRNrdNpTStrnryXi8l6OaE9E8KacgBpBk2RsPFIM7cU4euYMR94LF7NNSN13823gqeBz7GJiactYEx390w1JD3bQhqQS2suoFSZNKihAA4="}},V={};function m(E){var d=V[E];if(void 0!==d)return d.exports;var l=V[E]={exports:{}};return A[E].call(l.exports,l,l.exports,m),l.exports}m.m=A,function(){var A=[];m.O=function(V,E,d,l){if(!E){var e=1/0;for(R=0;R<A.length;R++){E=A[R][0],d=A[R][1],l=A[R][2];for(var a=!0,C=0;C<E.length;C++)(!1&l||e>=l)&&Object.keys(m.O).every((function(A){return m.O[A](E[C])}))?E.splice(C--,1):(a=!1,l<e&&(e=l));if(a){A.splice(R--,1);var i=d();void 0!==i&&(V=i)}}return V}l=l||0;for(var R=A.length;R>0&&A[R-1][2]>l;R--)A[R]=A[R-1];A[R]=[E,d,l]}}(),function(){m.n=function(A){var V=A&&A.__esModule?function(){return A["default"]}:function(){return A};return m.d(V,{a:V}),V}}(),function(){m.d=function(A,V){for(var E in V)m.o(V,E)&&!m.o(A,E)&&Object.defineProperty(A,E,{enumerable:!0,get:V[E]})}}(),function(){m.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){m.o=function(A,V){return Object.prototype.hasOwnProperty.call(A,V)}}(),function(){var A={143:0};m.O.j=function(V){return 0===A[V]};var V=function(V,E){var d,l,e=E[0],a=E[1],C=E[2],i=0;if(e.some((function(V){return 0!==A[V]}))){for(d in a)m.o(a,d)&&(m.m[d]=a[d]);if(C)var R=C(m)}for(V&&V(E);i<e.length;i++)l=e[i],m.o(A,l)&&A[l]&&A[l][0](),A[l]=0;return m.O(R)},E=self["webpackChunksimon_game_vue_test_task"]=self["webpackChunksimon_game_vue_test_task"]||[];E.forEach(V.bind(null,0)),E.push=V.bind(null,E.push.bind(E))}();var E=m.O(void 0,[998],(function(){return m(1057)}));E=m.O(E)})();
//# sourceMappingURL=app.5d5e9c14.js.map