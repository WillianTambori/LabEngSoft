import streamlit as st

number = st.sidebar.number_input('Insira o numero')
st.write('The numero inserido é ', number)
