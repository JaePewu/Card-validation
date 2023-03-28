# Jae's Store 🏵

### Algoritmo de Luhn para Jae's Store 🏵

**Tabla de contenidos**

* [Algoritmo de Luhn para Jae's Store](#Algoritmo-de-Luhn-para-Jae's-Store)
* [Caracteristicas](#Caracteristicas)
* [Qué es el Algoritmo de Luhn](#Qué-es-el-Algoritmo-de-Luhn)
* [Cómo funciona el algoritmo de Luhn](#Cómo-funciona-el-algoritmo-de-Luhn)
* [Cómo se utiliza el algoritmo en Jae's Store](#Cómo-se-utiliza-el-algoritmo-en-Jae's-Store)
* [Implementación del algoritmo en Jae's Store](#Implementación-del-algoritmo-en-Jae's-Store)
* [Referencias](#Referencias)
* [Caracteristicas Finales:](#Caracteristicas-Finales:)
* [Links](#Links)

***

### Caracteristicas 🏵

- Proyecto algoritmo de Luhn, para Laboratoria (DEV006).

- Aplicación de algoritmo en una tienda.



# Uso del Algoritmo

El algoritmo de Luhn es un algoritmo utilizado para validar números
 de tarjetas de crédito y débito. JAE's Store ha implementado este 
 algoritmo para garantizar la seguridad de las transacciones de 
 sus clientes.

## Qué es el Algoritmo de Luhn

El algoritmo de Luhn, también llamado algoritmo de módulo 10,
es un método de suma de verificación, se utiliza para validar
números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.


### Cómo funciona el algoritmo de Luhn

**Paso a paso**

 - El algoritmo de Luhn funciona de la siguiente manera:

1. Se toma el número de la tarjeta de crédito/débito.

2. Se multiplica por 2 cada segundo dígito, empezando por el penúltimo dígito y se suman los dígitos de los resultados obtenidos.

3. Se suman los dígitos restantes de la tarjeta de crédito/débito que no fueron multiplicados.

4. Se suman los resultados obtenidos en los pasos 2 y 3.

5. Si el resultado de la suma es un número múltiplo de 10, la tarjeta de crédito/débito es válida. Si no, la tarjeta es inválida.

![gráfica de algoritmo de Luhn](https://user-images.githubusercontent.com/12631491/217016579-865679e0-0949-4afd-b13f-d2ebba7a0c54.png)


## Cómo se utiliza el algoritmo en Jae's Store

En Jae's Store, el algoritmo de Luhn se utiliza para validar los 
números de tarjeta de crédito/débito que los clientes utilizan para
 realizar sus compras. Si el número de tarjeta de crédito/débito no
  es válido, el sistema no permitirá que la transacción se complete.

## Implementación del algoritmo en Jae's Store

En Jae's Store, el algoritmo de Luhn se implementó en el backend 
de la aplicación web. Cuando un cliente intenta realizar una compra, 
el número de tarjeta de crédito/débito se valida utilizando el 
algoritmo de Luhn. Si el número de tarjeta de crédito/débito no es 
válido, se muestra un mensaje de error y se le pide al cliente que
 proporcione un número de tarjeta de crédito/débito válido.

## Referencias

- Para más información sobre el algoritmo de Luhn, puedes consultar los siguientes enlaces:


`<link>` :

- <https://es.wikipedia.org/wiki/Algoritmo_de_Luhn>

- <https://www.youtube.com/watch?v=f0zL6Ot9y_w>





------------

# Caracteristicas Finales:

### Diseño de producto

* [ ] Tiene una interfaz que permite a la usuaria saber si la tarjeta es valida.
  y ocultar el numero hasta las 4 ultimos digitos.
* [ ] El proyecto esta entregado libre de _errores_ de `eslint` (_warnings_ son ok).
* [ ] El proyecto se encontrara en GitHub.
* [ ] Incluye pruebas unitarias de los métodos de `validator` (`isValid` y `maskify`).



  - `isValid`: `creditCardNumber` es un `string`
     con el número de tarjeta que se va a verificar. Esta función debe retornar
     un `boolean` dependiendo si es válida de acuerdo al algoritmo de Luhn.

  - `maskify`: `creditCardNumber` es un `string` con
    el número de tarjeta y esta función debe retornar un `string` donde todos menos
    los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
    Esta función deberá siempre mantener los últimos cuatro caracteres
    intactos, aún cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```

***
------------

### Links

[Wikipedia, algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn")

[Youtube. Algoritmo de Luhn, por Laboratoria](https://www.youtube.com/watch?v=f0zL6Ot9y_w")

[Laboratoria, proyecto Card Validaton ](https://github.com/Laboratoria/DEV006-card-validation)

------------



