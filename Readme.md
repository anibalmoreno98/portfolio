Cómo funciona el programa
Muestra un menú con las opciones disponibles (sumar, restar, multiplicar, dividir y salir).
El usuario elige una opción escribiendo un número del 1 al 5.
Dependiendo de la opción elegida, el programa pedirá dos números y realizará la operación correspondiente.
Muestra el resultado en pantalla.
Si el usuario elige la opción 5, el programa termina.
Errores y mejoras posibles
Se crean demasiados Scanner, lo que no es necesario. Se puede usar solo uno para leer todos los datos.
Falta manejar errores, por ejemplo, si el usuario introduce un texto en lugar de un número.
No se valida la división por cero, lo que puede generar un error si el segundo número es 0.
El programa solo se ejecuta una vez, sería mejor usar un bucle para que el usuario pueda hacer varias operaciones sin reiniciar el programa.