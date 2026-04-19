---
layout:     post
title:      Cheatsheet for Seaborn
subtitle:   Seaborn command
date:       2021-02-22
author:     Bearx
header-img: img/post-bg-grand-canyon.jpg
catalog: true
tags:
    - cheatsheet
---

### Cheatsheet for Seaborn basic

Import seaborn package and set the sns theme:
```python
import seaborn as sns
sns.set_theme()
sns.set_style('white') # ticks, whitegrid, darkgrid, ...
```

Load data and plot:
```python
df = sns.load_dataset('data_file') # load dataset examples from sns online source

sns.distplot(df['column_name'],kde=False,bins=30) # Deprecated in future version

sns.displot(df['column_name']) # Use this or the following command

sns.histplot(df['column_name'])

sns.jointplot(x='column_1',y='column_2',data=df,kind='scatter') # Scatter joint plot  

sns.jointplot(x='column_1',y='column_2',data=df,kind='hex') # Hex joint plot

sns.jointplot(x='column_1',y='column_2',data=df,kind='reg') # Regression joint plot

sns.jointplot(x='column_1',y='column_2',data=df,kind='kde') # 2-D KDE joint plot


sns.pairplot(df,hue='column_category',palette='coolwarm')

sns.rugplot(df['column_name'])
sns.kdeplot(df['column_name']) # Kernel Density Estimation plots

```

Categorical Data Plots
```python
sns.barplot(x='category',y='value',data=df,estimator=np.std)
sns.countplot(x='category',data = df) # count the number

sns.boxplot(x='category_1',y='value',data=df,hue='category_2',palette='rainbow')
sns.violinplot(x="category_1",y="value",data=df,hue='category_2',split=True,palette='Set1')
sns.stripplot(x="category_1",y="value",data=df,hue='category_2',jitter=True,palette='Set1')
sns.swarmplot(x="category_1",y="value",data=df,hue='category_2',split=True,palette='Set1')

sns.factorplot(x='category_1',y='value',data=df,kind='bar') # kind can be any other plot type
```

Matrix plot
```python
pvdf = df.pivot_table(values='passengers',index='month',columns='year') # make a pivot table from a data frame


sns.heatmap(df.corr(),cmap='coolwarm',annot=True)
sns.clustermap(pvdf,cmap='coolwarm',standard_scale=1) # hierarchal clustering to produce a clustered version of the heatmap
```

Grid
```python
g = sns.PairGrid(df)
g.map_diag(plt.hist)
g.map_upper(plt.scatter)
g.map_lower(sns.kdeplot)

g = sns.FacetGrid(df,col='category_1',row='category_2',hue='category_3')
g = g.map(plt.hist,'value_1'[,'value_2']).add_legend() # create grids of plots based off of a feature:
```

Regression plot
```python
sns.lmplot(x='category_1',y='category_2',data=df,hue='category_3',palette='coolwarm',markers=['o','v'],scatter_kws={'s':100})
```

Style and color
```python
sns.despine(left=True, bottom=True) # remove the spines (default remove top & right)

sns.set_context('poster',font_scale=4) # override default parameters
```
