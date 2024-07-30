---
layout: about
title: My Experience
---

# Experience page

<p>My internships, leadership experience, and more!</p>

<div class="experience-container">
  {% for experience in site.data.experience %}
    <div class="experience-item">
      <h2>
        <a class="experience-link" href="{{ site.baseurl }}/{{ experience.title | slugify }}.html">{{ experience.title }}</a>
      </h2>
      <h3>{{ experience.company }}</h3>
      <p>{{ experience.description }}</p>
    </div>
  {% endfor %}
</div>
