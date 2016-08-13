$(function() {
  var filter_values = {
    'all': "*",
    'shows': ".tag-show",
    'videos': ".tag-video"
  };

  var $iso_grid = $('.iso-grid');

  $iso_grid.isotope({
    itemSelector: '.iso-grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.iso-grid-sizer'
    }
  });

  $('.iso-filter').on('click', function(e) {
    var $filter = $(this);
    var filter_value = filter_values[$filter.data('filter')];

    $iso_grid.isotope({
      filter: filter_value
    });

    var $filter_group = $filter.closest('.iso-filter-group');
    $filter_group.find('.iso-filter').removeClass('active');
    $filter.addClass('active');
  });
});
