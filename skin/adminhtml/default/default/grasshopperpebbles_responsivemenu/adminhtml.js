var jqRm17=jQuery.noConflict(true);(function(e){e(document).ready(function(){function i(){e("#responsivemenu_media_query_settings_media_queries").val("");var t=[];var n,r,i;var s="";var o=e("#query-mode-table th");var u=e("#query-mode-table tbody tr").each(function(u){r=e(this).find("td");n=e(r).length;t[u]={};e(r).each(function(r){if(r<n-1){i=e(o[r]).html().toLowerCase();i=i.replace(" ","_");if(i=="max")s=e(this).html();t[u][i]=e(this).html();if(i=="min")t[u][s]=e(this).html()}})});var a={};a.query_modes=t;e("#responsivemenu_media_query_settings_media_queries").val(JSON.stringify(a))}var t,n,r;t=e.parseJSON(e("#responsivemenu_media_query_settings_media_queries").val());if(t){t=t.query_modes;if(t!=""){e.each(t,function(t,r){n=e("<tr></tr>");e("<td></td>").append(r["mode"]).appendTo(e(n));e("<td></td>").append(r["min"]).appendTo(e(n));e("<td></td>").append(r["max"]).appendTo(e(n));e("<td></td>").append(e("<a></a>").attr("class","media-query-row-delete").html("Delete")).appendTo(e(n));e(n).appendTo(e("#query-mode-table tbody"))})}}e(".media-query-row-delete").live("click",function(){e(this).parent().parent().remove();i()});e("#query-mode-add").click(function(n){t=e("#query-mode-max-value").val();if(e.trim(t)!=""){e("<tr></tr>").append(e("<td></td>").html(e("#query-mode-option").val()),e("<td></td>").html(e("#query-mode-min-value").val()),e("<td></td>").html(t),e("<td></td>").html(e("<a></a>").attr("class","media-query-row-delete").html("Delete"))).appendTo(e("#query-mode-table"));i()}n.preventDefault()})})})(jqRm17)