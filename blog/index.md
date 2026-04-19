---
title: Blog
---

<section class="page-intro">
  <p class="eyebrow">Blog</p>
  <h1>Posts and notes.</h1>
  <p>Description.</p>
</section>

<section class="post-list">
  {% for post in site.posts %}
    <article class="post-card">
      <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
      <a class="text-link" href="{{ post.url | relative_url }}">Open</a>
    </article>
  {% endfor %}
</section>
