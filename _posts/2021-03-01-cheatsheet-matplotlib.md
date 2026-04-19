---
layout:     post
title:      Cheatsheet for Matplotlib
subtitle:   Matplotlib command
date:       2021-03-01
author:     Bearx
header-img: img/post-bg-grand-canyon.jpg
catalog: true
tags:
    - cheatsheet
---

### Cheatsheet for Matplotlib basic

Configuration for a single plot:
```python
plt.style.use('ggplot') # style can be 'default', 'classic', 'ggplot', 'seaborn', etc (see https://matplotlib.org/stable/gallery/style_sheets/style_sheets_reference.html)


plt.plot(data_x, data_y, 'k.-', markersize=10, lw=2)

plt.grid(True)
plt.ylim(y_min, y_max)
plt.ylabel(r'$\varrho(t)$')
plt.title('Here is the title')
plt.legend(loc='center left',bbox_to_anchor=(1.0,0.5))
fig = plt.gcf()
fig.set_size_inches(14, 5)
# Or in this way

plt.rcParams['figure.dpi'] = 200
plt.rcParams['figure.figsize'] = 5, 2
plt.show()
```

Configuration for multiple subplots:
```python
fig = plt.figure()
ax1 = fig.add_subplot(211)
ax2 = fig.add_subplot(212)

# Or initialize in this way:


fig, axs = plt.subplots(3, 2,   gridspec_kw={'width_ratios': [2, 5]})
fig.set_size_inches(14, 10)

axs[0,0].remove() # for 3D plot

axs[0,0]=fig.add_subplot(3,2,1,projection='3d')
ppp1 = axs[0,0].plot_surface(x, y, z, cmap='coolwarm', linewidth=0, antialiased=False, vmin = -1, vmax = 1)
axs[0,0].set_ylim(-1, 1)
axs[0,0].view_init(elev=0., azim=-90.)
axs[0,0].dist = 7.
ppp1.set_clim(0,1)
fig.colorbar(ppp1, ax=axs[0,0])

# set up a mask on the plotted matrix

mask_array = np.ma.array(matrix_plotted, mask=np.isnan(data) , dtype=np.float).T
cmap = mpl.cm.get_cmap()
cmap.set_bad(color='red')
axs[1,0].imshow(mask_array, cmap='hot')
axs[1,0].set_xticks(tick_list)
axs[1,0].set_title('Here is the title')

axs[2,0].scatter(x, y, c=z, cmap='hsv', s=marker_size)

plt.text(0.3, 0.7, 'Text here',color='r')
plt.grid()
plt.show()
```

If you want to clear and update the plot during a loop, use `clear_output()`:
```python
from IPython.display import clear_output

clear_output()
```
