import streamlit as st

number = st.number_input('Insira o numero')
st.sidebar.write('The numero inserido é ', number)