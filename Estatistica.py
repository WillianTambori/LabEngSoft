import streamlit as st

number = st.sidebar.number_input('Insira o numero', value=int)
st.write('O numero inserido é ', number)
