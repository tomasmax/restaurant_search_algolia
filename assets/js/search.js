/* global instantsearch */

var search = instantsearch({
  appId: 'A8KMD2TQJ5',
  apiKey: 'ea7ee206077218e1b5f37e68b071c7ca',
  indexName: 'restaurants_demo',
  urlSync: {},
  searchParameters: {
    aroundLatLngViaIP: true
  }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#q'
  })
);

search.addWidget(
  instantsearch.widgets.stats({
    container: '#stats'
  })
);

var hitTemplate =
  '<div class="hit media">' +
    '<div class="media-left">' +
      '<div class="media-object img-rounded" style="background-image: url(\'{{image_url}}\');"></div>' +
    '</div>' +
    '<div class="media-body">' +
      '<h4 class="media-heading">{{{_highlightResult.name.value}}}</h4>' +
      '<p class="rating-stars"><span class="stars-count" >{{stars_count}}</span> {{#stars}}<span class="ais-star-rating--star{{^.}}__empty{{/.}}"></span>{{/stars}} <span class="grey-color">({{reviews_count}} reviews)</span> </p>' +
      '<p class="restaurant-info grey-color">{{food_type}} | {{city}} | {{neighborhood}} | {{price_range}}  </p>' +
    '</div>' +
  '</div>';

var noResultsTemplate =
  '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 10,
    templates: {
      empty: noResultsTemplate,
      item: hitTemplate
    },
    transformData: function(hit) {
      hit.stars = [];
      for (var i = 1; i < 6; ++i) {
        hit.stars.push(i <= hit.stars_count);
      }
      return hit;
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    cssClasses: {
      root: 'pagination',
      active: 'active'
    }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#food-types',
    attributeName: 'food_type',
    operator: 'and',
    limit: 12,
    cssClasses: {
      list: 'nav nav-list',
      count: 'badge pull-right',
      active: 'active'
    }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#payment-options',
    attributeName: 'payment_options',
    operator: 'and',
    limit: 10,
    cssClasses: {
      list: 'nav nav-list',
      count: 'badge pull-right',
      active: 'active'
    }
  })
);

search.addWidget(
  instantsearch.widgets.starRating({
    container: '#ratings',
    attributeName: 'stars_count',
    cssClasses: {
      list: 'nav',
      count: 'badge pull-right'
    }
  })
);

search.addWidget(
  instantsearch.widgets.clearAll({
    container: '#clear-all',
    templates: {
      link: '<i class="fa fa-eraser"></i> Clear all filters'
    },
    cssClasses: {
      root: 'btn btn-block btn-default'
    },
    autoHideContainer: true
  })
);

search.start();
