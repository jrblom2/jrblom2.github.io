## Steps to insert plotly graph without browser renderer
1. Produce in jupyter notebook with renderer set to `plotly.io.renderers.default = "plotly_mimetype+notebook"`
2. nbconvert to html
3. add `{% raw %}` and `{% endraw %}` to begining and end of file
4. remove `html`, `main`, and `body` tags
5. remove body css, and style sub elements as needed. See line 4007 in produced html