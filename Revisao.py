print("Teste Olá Mundo!")

idade = int(input("Idade? "))
if idade >= 60:
    print("Idoso")
elif idade >= 18 and idade < 60:
    print("Adulto")
elif idade >= 13 and idade < 18:
    print("Adolescente")
elif idade >= 3 and idade < 13:
    print("Criança")
else:
    print("Bebê")

##################################
idade = int(input("Idade? "))
if idade >= 60:
    print("Idoso") # bloco de execução do if
else:
    # início do bloco de execução do else
    if idade >= 18 and idade < 60:
        print("Adulto")
    print(‘Fim do bloco if idade >= 18 and idade < 60’)
    if idade >= 13 and idade < 18:
        print(“Adolescente")
    else:
        if idade >= 3 and idade < 13:
            print(“Criança")
        else:
            print("Bebê")

############################################
numero = 1
while numero <= 100:
    print(numero)
    numero = numero + 1
print("finalizado")

#########################
texto = "Linguagem de Programação I"
for c in texto:
    print(c)

# Relembrando sobre a linguagem...
'''
    Alto nível, Orientada a Objeto, tipada, fortemente tipada(verifica os dados antes da operação)
    Interpretada e multiplataforma
    iniciar as variaveis SEMPRE 
    String -> ""
    Numero -> Sem aspas int or float.
    Booleano bool -> Tue or False.
    / ->Divisão.
    // ->Divisão de Inteiro.
    ** ->Potenciação.
    % ->Resto da Divisão.
'''