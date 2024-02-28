/*
 * bodyReady.js v1.0.0
 * Copyright (c) 2021, Emanuel Rojas Vásquez
 * BSD 3-Clause License [https://github.com/erovas/bodyReady.js/blob/main/LICENSE]
 * https://github.com/erovas/bodyReady.js
 */
(function(window, document){

    const BODY_READY = 'BodyReady';

    const bodyReady = new CustomEvent(BODY_READY);

    let fn_onbodyReady = null;

    Object.defineProperty(window, 'on'+BODY_READY, {
        set: function(value){

            if(fn_onbodyReady)
                window.removeEventListener(BODY_READY, fn_onbodyReady, false);

            if(typeof value === 'function'){
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