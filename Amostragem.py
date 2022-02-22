import streamlit as st

def nivel(n):
    if n == 80:
        return 1.28
    if n == 85:
        return 1.44
    if n == 90:
        return 1.65
    if n == 95:
        return 1.96
    if n == 99:
        return 2.58
def porc(n):
    e = float(n/100)
    return e
def main ():
pop = porc(st.sidebar.number_input('Tamanho da população',key=int, min_value=1, step=1, format='%i'))
conf = porc(st.sidebar.slider('Grau de confiança (%)',min_value=80, max_value=99, step=5, format='%i'))
erro = porc(st.sidebar.number_input('Margem de erro (%)', key= int, min_value=5, format='%i'))

st.write("os numeros são ", pop,conf,erro)
