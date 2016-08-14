$(function() {
  initGrid($);
});

function initGrid($) {
  var filter_values = {
    'all': "*",
    'shows': ".type-show",
    'videos': ".type-video"
  };

  var $grid = $('.grid');
  var $grid_items = $grid.find('.grid-items');

  $grid_items.isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-item-sizer'
    }
  });

  $grid.find('.grid-filter').on('click', function(e) {
    var $filter = $(this);
    var filter_value = filter_values[$filter.data('grid-filter')];

    $grid_items.isotope({
      filter: filter_value
    });

    var $filter_group = $filter.closest('.grid-filter-group');
    $filter_group.find('.grid-filter').removeClass('active');
    $filter.addClass('active');
  });
}
