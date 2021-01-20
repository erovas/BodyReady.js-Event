# bodyReady.js
(EN) Small script that adds the "bodyReady" event, which is similar to "DOMContentLoaded", but it is fired before (before than Defer or Module script).\
(ES) Pequeño script que agrega el evento "bodyReady", el cual es similar a "DOMContentLoaded", pero este se dispara antes (antes que un script en Defer o Module).

## Compatibility - Compatibilidad

(EN) For internet explorer 11 or higher.\
(ES) Para internet explorer 11 o superior.

## How to use? - ¿Cómo utilizarlo?

(EN) This script must be put in the head tag of html document.\
(ES) Este script debe ser puesta en la etiqueta head del documento html.

``` html
<html>
    <head>
        <title> My page - Mi página </title>
        <script src="bodyReady.js"></script>
        <script>
            const div_1 = document.createElement('div');
            const div_2 = document.createElement('div');
            const div_2 = document.createElement('div');
            
            window.onbodyReady = function(){
                document.body.appendChild(div_1);
            }

            window.addEventListener('bodyReady', function(){
                document.body.appendChild(div_2);
            }, false);

            window.addEventListener('bodyReady', function(){
                document.body.appendChild(div_3);
            }, { once: true });
        </script>
    </head>
    <body>
        <!-- page content - contenido de la página -->
    </body>
</html>
```

## Notes - Notas

(EN) Lite version does not have polyfill for internet explorer.\
(ES) La versión Lite no tienen polyfill para internet explorer.

## Authors - Autores

* **Emanuel Rojas Vásquez** - *Initial work* - [erovas](https://github.com/erovas)

## License - Licencia

(EN) This project is licensed under the MIT License - see the [LICENSE](https://github.com/erovas/bodyReady.js/blob/main/LICENSE) file for details.\
(ES) Este proyecto está licenciado bajo Licencia MIT - ver el archivo [LICENCIA](https://github.com/erovas/bodyReady.js/blob/main/LICENSE) para mas detalles.