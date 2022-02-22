import streamlit as st

number = st.sidebar.number_input('Insira o numero', value=int, format=%i)
st.subheader.write('The numero inserido é ', number)
