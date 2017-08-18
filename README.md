# scraper
web scraping tool  that extracts structured data from any website to json.

_without class:you must include a type(div,p,...) and the position of the element(0,1,2...) you want to extract in the type.
lets say you have a div and you want to extract the first element, the type would be div and position 0
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
_position in class: you must include type(div,p...) the class of the object and the position
lets say you have a div with class="demo" and you want to extract the second element, the type would be div, class would be demo and position 1
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
_class without pos: you must include type(div,p...) the class of the object
lets say you have a p with class="demo" and you want to extract its innerHTML, the type would be p and class would be demo.

now you can use the url in you app or copy the text to your jsonviewer!
