import streamlit as st

number = st.sidebar.number_input('Insira o numero', step=1)
st.write('The numero inserido é ', number)
