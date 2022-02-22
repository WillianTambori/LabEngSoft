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
    st.sidebar.title("ADS")
    n =  st.sidebar.number_input('Tamanho da população',key=int, min_value=1, step=1, format='%i')
    z = nivel(st.sidebar.slider('Nivel de confiança (%)',min_value=80, max_value=99, step=5, format='%i'))
    e = porc(st.sidebar.number_input('Margem de erro (%)', key= float, min_value=1.0, step=0.5, format='%f'))
    p = porc(st.sidebar.number_input('estimativa de verdadeira proporção (%)', key= int, min_value=10, value=50, max_value=100, step=10, format='%i'))
    N = (n*(z**2)*p*(1-p))/((e**2)*(n-1)+(z**2)*p*(1-p))
    st.title("O Calculo do tamanho da amostra ")
    st.metric(label="Valor aferido", value=f"{N:.2f}", delta="numero de amostras")
    st.latex(r'''
     (\frac{1-r^{n}}{1-r}\right)
     ''')
main()

