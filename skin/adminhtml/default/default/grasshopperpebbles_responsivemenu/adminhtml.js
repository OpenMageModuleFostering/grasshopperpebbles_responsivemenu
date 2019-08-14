
jQuery(document).ready(function($) {
	var v, tr, row;
	v = $("#responsivemenu_media_query_settings_media_queries").val();
	if (v) {
		v = $.parseJSON(v);
	}
	if (v) {
		v = v.query_modes;
		if (v != '') {
			$.each(v, function(i, itm) {
				tr = $("<tr></tr>");
				$("<td></td>").append(itm['mode']).appendTo($(tr));
				$("<td></td>").append(itm['min']).appendTo($(tr));
				$("<td></td>").append(itm['max']).appendTo($(tr));
				$("<td></td>").append(
				$("<a></a>").attr("class", "media-query-row-delete").html("Delete")).appendTo($(tr));
				$(tr).appendTo($('#query-mode-table tbody'));
			});
		}
	}
		
	$(".media-query-row-delete").on('click', function() {
		$(this).parent().parent().remove();
		buildQueryMap();
	});
		
	$("#query-mode-add").click(function(e) {
		v = $("#query-mode-max-value").val();
		if ($.trim(v) != "") {
			$("<tr></tr>").append(
				$("<td></td>").html($("#query-mode-option").val()), 
				$("<td></td>").html($("#query-mode-min-value").val()), 
				$("<td></td>").html(v),
				$("<td></td>").html($("<a></a>").attr("class", "media-query-row-delete").html("Delete"))
				).appendTo($("#query-mode-table"));
			buildQueryMap();
		}
		e.preventDefault();
	});
	
	function buildQueryMap() {
		$("#responsivemenu_media_query_settings_media_queries").val("");
		
		var ar = [];
		var ln, cells, header;
		var ctype = '';
		var $headers = $("#query-mode-table th");
		var $rows = $("#query-mode-table tbody tr").each(function(i) {
			cells = $(this).find("td");
			ln = $(cells).length;
			ar[i] = {};
			$(cells).each(function(ci) {
				if (ci < ln-1) {
					header = $($headers[ci]).html().toLowerCase();
					header = header.replace(" ","_"); 
					if (header == 'max') ctype = $(this).html();
					ar[i][header] = $(this).html();
					if (header == 'min') ar[i][ctype] = $(this).html();
				}
			});    
		});
		
		var obj = {};
		obj.query_modes = ar;
		$("#responsivemenu_media_query_settings_media_queries").val(JSON.stringify(obj));
	}
});
