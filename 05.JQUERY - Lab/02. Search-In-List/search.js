function search() {
   let searchValue = $('#searchText').val();

   let matchedContent = $(`li:contains('${searchValue}')`);
   $('li').css('font-weight', '');
   matchedContent.css('font-weight', 'bold');

   $('#result').text(matchedContent.length + ' matches found');
}