---
title: Software
---

<section class="page-intro">
  <p class="eyebrow">Software</p>
  <h1>Demos and projects.</h1>
  <p>Description.</p>
</section>

<section class="demo-grid">
  {% for demo in site.data.demos %}
    <article class="demo-card">
      <div class="demo-card-top">
        <p class="section-label">{{ demo.type }}</p>
        <h2>{{ demo.name }}</h2>
        <p>{{ demo.summary }}</p>
      </div>
      <p class="tech-line">{{ demo.tech | join: " • " }}</p>
      <div class="demo-links">
        <a class="button" href="{{ demo.demo_url | relative_url }}">{{ demo.demo_label | default: "Demo" }}</a>
        {% if demo.repo_url %}
          <a class="button button-secondary" href="{{ demo.repo_url }}">Code</a>
        {% endif %}
      </div>
    </article>
  {% endfor %}
</section>
