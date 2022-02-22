import streamlit as st

pop = st.sidebar.number_input('Tamanho da população',key=int, value = 1, step=1.0, format='%i')
conf = st.sidebar.slider('Grau de confiança',min_value=80, max_value=99, step=5, format='%i')
erro = st.sidebar.number_input('Tamanho da população', key= int, min_value=5, format='%i')

st.write("os numeros são ", pop,conf,erro)
