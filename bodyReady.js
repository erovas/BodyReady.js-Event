/*
 * bodyReady.js v1.0.0
 * Pequeño script que agrega el evento "bodyReady" similar a "DOMContentLoaded", pero que se dispara una vez el <body> está disponible
 * [Back-compatibility: IE11+]
 * Copyright (c) 2021, Emanuel Rojas Vásquez
 * BSD 3-Clause License [https://github.com/erovas/bodyReady.js/blob/main/LICENSE]
 * https://github.com/erovas/bodyReady.js
 */
(function(window, document){

    const CUSTOM_EVENT = 'CustomEvent';
    const BODY_READY = 'bodyReady';
    const FUNCTION = 'function';

    //Polyfill for IE | Taken and modified from https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#polyfill
    if(typeof window[CUSTOM_EVENT] !== FUNCTION){
        window[CUSTOM_EVENT] = function(event, params){
            params = params || { bubbles: false, cancelable: false, detail: null };
            const evt = document.createEvent(CUSTOM_EVENT);
            evt['init'+CUSTOM_EVENT]( event, params.bubbles, params.cancelable, params.detail );
            return evt;
        }
    }

    const bodyReady = new window[CUSTOM_EVENT](BODY_READY);

    let fn_onbodyReady = null;

    Object.defineProperty(window, 'on'+BODY_READY, {
        set: function(value){

            if(fn_onbodyReady)
                window.removeEventListener(BODY_READY, fn_onbodyReady, false);

            if(typeof value === FUNCTION){
                fn_onbodyReady = value;
                window.addEventListener(BODY_READY, fn_onbodyReady, false);
            }
            else
                fn_onbodyReady = null;
        },
        get: function(){
            return fn_onbodyReady;
        }
    });

    let mtn = new MutationObserver(function(){
        if(document.body){
            mtn.disconnect();
            mtn = null;
            window.dispatchEvent(bodyReady);
        }
    });

    mtn.observe(document.querySelector('html'), { childList: true, subtree: true });
  
})(window, document);