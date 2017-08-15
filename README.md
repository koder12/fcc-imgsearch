# FCC Image Search Abstraction Layer

Implemented using Express, Imgur API, Tingodb & Tungus (remember to use Mongoose 3.x version)

## User stories:
1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

2. I can paginate through the responses by adding a ?offset=number parameter to the URL.

3. I can get a list of the most recently submitted search strings.


### Example usage:
* https://ballistic-drill.glitch.me/api/imagesearch/kyoto?offset=3 - image search

* https://ballistic-drill.glitch.me/api/imagesearch - recently submitted search strings
