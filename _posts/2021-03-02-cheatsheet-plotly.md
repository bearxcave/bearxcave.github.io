---
layout:     post
title:      Cheatsheet for Plotly
subtitle:   Plotly command
date:       2021-03-02
author:     Bearx
header-img: img/post-bg-grand-canyon.jpg
catalog: true
tags:
    - cheatsheet
---

### Cheatsheet for Plotly basic

Plotly is an interactive plotting tool.

Initialize Plotly in this way:
```python
import pandas as pd
import numpy as np

# import plotly

from plotly.offline import download_plotlyjs, init_notebook_mode, plot, iplot
init_notebook_mode(connected=True)

import cufflinks as cf
cf.go_offline()
```

Possible plotting methods using Plotly:
* scatter
* bar
* box
* spread
* ratio
* heatmap
* surface
* histogram
* bubble
* candle (must specify 'Open','High','Low','Close' of the data)

Here are some examples:
```python
df.iplot(kind='scatter',x='A',y='B',mode='markers',size=10)

df = pd.DataFrame({'x':[1,2,3,4,5],'y':[10,20,30,20,10],'z':[5,4,3,2,1]})
df.iplot(kind='surface',colorscale='rdylbu')
```

One more plotting method, `scatter_matrix()`, is similar to `sns.pairplot()`:
```python
df.scatter_matrix()
```

Other miscellaneous plotting methods:
```python
df.ta_plot(study='sma')
```

### Plotly provides various plotting methods for geographical plotting
Initialization:
```python
import chart_studio.plotly as py
import plotly.graph_objs as go 
from plotly.offline import download_plotlyjs, init_notebook_mode, plot, iplot
init_notebook_mode(connected=True) 
```

We need to begin to build our data dictionary. Easiest way to do this is to use the **dict()** function of the general form:

* type = 'choropleth',
* locations = list of states
* locationmode = 'USA-states'
* colorscale= 

Either a predefined string:

    'pairs' | 'Greys' | 'Greens' | 'Bluered' | 'Hot' | 'Picnic' | 'Portland' | 'Jet' | 'RdBu' | 'Blackbody' | 'Earth' | 'Electric' | 'YIOrRd' | 'YIGnBu'

or create a [custom colorscale](https://plot.ly/python/heatmap-and-contour-colorscales/)

* text= list or array of text to display per point
* z= array of values on z axis (color of state)
* colorbar = {'title':'Colorbar Title'})

Here are two short examples:
```python
data = dict(type = 'choropleth',
            locations = ['AZ','CA','NY'],
            locationmode = 'USA-states',
            colorscale= 'Portland',
            text= ['text1','text2','text3'],
            z=[1.0,2.0,3.0],
            colorbar = {'title':'Colorbar Title'})
            
layout = dict(title = '2011 US Agriculture Exports by State',
              geo = dict(scope='usa',
                         showlakes = True,
                         lakecolor = 'rgb(160,90,240)')
             )
choromap = go.Figure(data = [data],layout = layout)
iplot(choromap)
```
or
```python
data = dict(type = 'choropleth',
            locations = df['CODE'],
            z = df['GDP (BILLIONS)'],
            text = df['COUNTRY'],
            colorbar = {'title' : 'Here is colorbar title'})
layout = dict(title = '2014 Global GDP',
              geo = dict(showframe = True,
                         projection = {'type':'natural earth'}) # or mercator
           )
```

For more details, please refer to [Plotly choropleth](https://plotly.com/python/reference/#choropleth).
