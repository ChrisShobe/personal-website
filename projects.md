---
layout: about
title: My Projects
permalink: /projects/
---

# Projects Page

<p>All of my projects! (Besides this website of course.)</p>

<div class="projects-container">
{% for project in site.data.projects %}
  <div class="project">
    <h2><a class="project-link" href="{{ project.title | slugify | prepend: '/' | append: '.html' }}">{{ project.title }}</a></h2>
    <a class="project-link" href="{{ project.image | prepend: site.baseurl }}"><img src="{{ project.image }}" alt="{{ project.title }} image"></a>
    <p>{{ project.description }}</p>
  </div>
{% endfor %}
</div>