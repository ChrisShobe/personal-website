---
layout: about
title: My Experience
---

<div class="social-icons">
  <a href="https://www.linkedin.com/in/chris-shobe/" target="_blank"><i class="fab fa-linkedin"></i></a>
  <a href="https://github.com/ChrisShobe" target="_blank"><i class="fab fa-github"></i></a>
  <a href="mailto:chrisshobe2000@gmail.com"><i class="fas fa-envelope"></i></a>
</div>

# Experience page

<p>My internships, leadership experience, and more!</p>

<div class="experience-container">
{% for experience in site.data.experience %}
  <div class="experience-item">
    <h2><a class="experience-link" href="{{ experience.title | slugify | prepend: '/' | append: '.html' }}">{{ experience.title }}</a></h2>
    <h3>{{ experience.company }}</h3>
    <p>{{ experience.description }}</p>
  </div>
{% endfor %}
</div>