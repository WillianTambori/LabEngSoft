import streamlit as st

number = st.sidebar.number_input('Insira o numero',step=int)
st.write('The numero inserido é ', number)
