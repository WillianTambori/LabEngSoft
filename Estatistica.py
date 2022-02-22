import streamlit as st

number = st.sidebar.number_input('Insira o numero', value=int)
st.write('The numero inserido é ', number)
