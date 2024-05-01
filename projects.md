---
layout: about
title: My Projects
---
# Projects page

{% for project in site.data.projects %}
{% include project.html project=project %}
{% endfor %}