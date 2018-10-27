frappe.pages['qty-adjust'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Sales Order - Quantity Adjust',
		single_column: true
	});
	page.start = 0;
	page.date1 = page.add_field({
		fieldname: 'date1',
		label: __('Date'),
		fieldtype:'Date',
		default:frappe.datetime.get_today(),
		change: function() {
				$("#qtyTable").remove();
				frappe.qty_adjust.make(page);
				frappe.qty_adjust.run(page);
		}
	});


	
	frappe.require([
	 	"assets/erpnext/css/myTable.css",
	]);
	
	$("#qtyTable").css('cursor','pointer');
	

var counter=0
jQuery.fn.sumqtyadjust1=function(){
var sum = 0;
console.log("1")
// iterate through each td based on class and add the values
var items=document.getElementsByClassName("pop_adjustqty1")
console.log("len"+items.length);
$(".pop_adjustqty1").each(function() {

    var value = $(this).val();
	console.log("val"+value)
    // add only if the value is number
    if(!isNaN(value) && value.length != 0) {
        sum += parseFloat(value);
    }
});

//document.getElementById("pop_adjustqty_total").value=sum;
$(".pop_adjustqty_total").val(sum)

}

var counter1=0
jQuery.fn.sumqty1=function(){
var sum1 = 0;
console.log("1")
// iterate through each td based on class and add the values
var items1=document.getElementsByClassName("pop_qty1")
console.log(items1.length);
$(".pop_qty1").each(function() {

    var value = $(this).val();
	console.log(value)
    // add only if the value is number
    if(!isNaN(value) && value.length != 0) {
        sum1 += parseFloat(value);
    }
});

//document.getElementById("pop_qty_total").value=sum1;
$(".pop_qty_total").val(sum1)


}
//2
var counter2=0
jQuery.fn.sumqty2=function(){
var sum2 = 0;
console.log("2")
// iterate through each td based on class and add the values
var items1=document.getElementsByClassName("pop_qty2")
console.log(items1.length);
$(".pop_qty2").each(function() {

    var value = $(this).val();
	console.log(value)
    // add only if the value is number
    if(!isNaN(value) && value.length != 0) {
        sum2 += parseFloat(value);
    }
});

//document.getElementById("pop_qty_total").value=sum1;
$(".pop_qty_total").val(sum2)


}

var counter3=0
jQuery.fn.sumqtyadjust2=function(){
var sum2 = 0;
console.log("2")
// iterate through each td based on class and add the values
var items=document.getElementsByClassName("pop_adjustqty2")
console.log("len"+items.length);
$(".pop_adjustqty2").each(function() {

    var value = $(this).val();
	console.log("val"+value)
    // add only if the value is number
    if(!isNaN(value) && value.length != 0) {
        sum2 += parseFloat(value);
    }
});

//document.getElementById("pop_adjustqty_total").value=sum;
$(".pop_adjustqty_total").val(sum2)


}

//3
var counter4=0
jQuery.fn.sumqty3=function(){
var sum3 = 0;
console.log("3")

// iterate through each td based on class and add the values
var items1=document.getElementsByClassName("pop_qty3")
console.log(items1.length);
$(".pop_qty3").each(function() {

    var value = $(this).val();
	console.log(value)
    // add only if the value is number
    if(!isNaN(value) && value.length != 0) {
        sum3 += parseFloat(value);
    }
});

//document.getElementById("pop_qty_total").value=sum1;
$(".pop_qty_total").val(sum3)

}

var counter5=0
jQuery.fn.sumqtyadjust3=function(){
var sum3 = 0;
console.log("3")
// iterate through each td based on class and add the values
var items=document.getElementsByClassName("pop_adjustqty3")
console.log("len"+items.length);
$(".pop_adjustqty3").each(function() {

    var value = $(this).val();
	console.log("val"+value)
    // add only if the value is number
    if(!isNaN(value) && value.length != 0) {
        sum3 += parseFloat(value);
    }
});

//document.getElementById("pop_adjustqty_total").value=sum;
$(".pop_adjustqty_total").val(sum3)


}



	
jQuery.fn.getpopup = function() {
		
		var ordertype = $(this).attr('class'); // onclick any td will give you that td "id" attribute value 
		
		
		
		var row = $(this).parents('.item_row');
		var main_po2=''
		var dataa=''
		if(ordertype=="infinity_sales_qty")
		{	
		console.log(dataa)
		frappe.call({
			method: 'erpnext.api5.get_order_details_infinity',
			args:{item:row.find(".item_code").html(),date1:page.date1.value},
			callback: function(r) {
			if(r.message) {
					console.log(r.message);
					var msg = r.message;
					
					if(msg != "False") {

						var total_html1='<table border="1" class="display nowrap dataTable dtr-inline" width="33%" style="margin-left:38%"><tr><td style="width:5%;border:none"><input style="" type="text" class="pop_qty_total" name="pop_qty_total" value="" ></td><td style="width:5%;"><input style="" type="text" class="pop_adjustqty_total"  name="pop_adjustqty_total" value="" ></td></tr></table>'

			frappe.call({
			'method': 'erpnext.api5.getPODetails',
			'args':{item_code:row.find(".item_code").html(),date_fil:page.date1.value},
			'freeze': true,
			'freeze_message': "Please Wait...",
			callback: function(r) {
			if(r.message) {
					console.log(r.message)
					var data=''
					var stock_b=''
					r.message.forEach(function(d) {

						data='<span style="float:left;margin-top:32px">PO Details:&nbsp;&nbsp;</span><table id="porder"  border="1" class="display nowrap dataTable dtr-inline" cellpadding="10" style="float:left;margin-bottom:5px"><tr><th style="padding:5px">'+d.first_name+'</th><th style="padding:5px">'+d.second_name+'</th><th style="padding:5px">'+d.third_name+'</th><th style="padding:5px">'+d.four_name+'</th><th style="padding:5px">'+d.five_name+'</th></tr><tr class="po_item"><td class="first" id="'+d.first+'">'+d.first+'</td><td class="second" id="'+d.second+'">'+d.second+'</td><td id="'+d.third+'" class="third">'+d.third+'</td><td class="four" id="'+d.four+'">'+d.four+'</td><td class="five" id="'+d.five+'">'+d.five+'</td></tr></table>'
						stock_b='<table style="float:right;margin-top:-30px"><tr><td>Stock On Hand:&nbsp;&nbsp;&nbsp;</td><td style="border:2px solid black;width:120px;height:30px"><b>'+row.find(".balanceqty").html()+'</b></td></tr></table>'
						
						
						//console.log(total_html1);
						//data=''
						
						//frappe.msgprint(d.name);
					});
					//console.log(data)
					main_po2=data+total_html1+stock_b
				}
			
				
			
			}
		});

						var total_qty1=0;
						$(".popTable").remove();
						dataa = '<table class="popTable"  border="1" class="display nowrap dataTable dtr-inline" width="100%"><tr><th>Customer</th><th>Order No</th><th>Item Code</th><th>Item</th><th>Qty</th><th>Adjust Qty</th><th>Back Qty</th><th>Date</th></tr>';
						
						$.each(msg, function(idx, obj) {
								dataa = dataa + '<tr class="pop_row"><td><span class="pop_customer" >'+ obj["customer"] +'</span></td><td><span class="pop_name1"><a href="#Form/Sales Order/'+ obj["name"] +'" class="pop_name">'+ obj["name"] +'</a></span></td><td><span class="pop_item_code3" >'+row.find(".item_code").html()+'</span></td><td><input type="hidden"  disabled="disabled" class="pop_item_code" id="pop_item_code" name="pop_item_code" value="'+ obj["item_code"] +'"><span class="pop_item_name" >'+ obj["item_name"] +'</span></td><td><input style="width:100%" type="text" class="pop_qty1" name="pop_qty" value="'+ obj["qty"] +'"></td><td><input style="width:100%" type="text" class="pop_adjustqty1" name="pop_adjustqty" value=""></td><td><input style="width:100%" type="text" class="pop_backqty" name="pop_backqty" value="0"></td><td><input style="width:100%" type="date" class="pop_date" id="pop_date" name="pop_date" value="'+frappe.datetime.add_days(frappe.datetime.nowdate(),2)+'"></td></tr><script type="text/javascript">$(".popTable").on("change",".pop_adjustqty1",function(){ $(this).sumqtyadjust1(); });$(".popTable").on("change",".pop_qty1",function(){ $(this).sumqty1(); });</script>';
								total_qty1=total_qty1+parseInt(obj["qty"])
						});
						
						dataa = dataa + '</table>';
						var d = new frappe.ui.Dialog({
							'fields': [
								{'fieldname': 'ht1', 'fieldtype': 'HTML'},
								{'fieldname': 'ht', 'fieldtype': 'HTML'},
							],
							primary_action: function(){
								var qty=0
								$(".pop_row").each(function() {
									qty = 	parseFloat($(this).find(".pop_qty1").val());
									customer=$(this).find(".pop_customer").html()
									item_code=$(this).find(".pop_item_code").val()
									sales_order_id=$(this).find(".pop_name").html()
									adjustqty=parseFloat($(this).find(".pop_adjustqty1").val());
									backqty=parseFloat($(this).find(".pop_backqty").val());
									backorder_date=$(this).find(".pop_date").val();
									if(isNaN(adjustqty))
									{
										adjustqty=0;
									}
									if(isNaN(backqty))
									{
										backqty=0;
									}

									frappe.call({
										'method':'erpnext.api5.qtyAdjust',
										'freeze': true,
										'freeze_message': "Please Wait...",
										'args':{customer:customer,sales_order_id:sales_order_id,item_code:item_code,qty:qty,adjustqty:adjustqty,backqty:backqty,backorder_date:backorder_date},
										callback:function(r){
											console.log(r.message)
						
											if(r.message=="True")
											{
												alert("Updated");
												location.reload();
											}
					
										}
									})
									console.log(qty);
								});
								
								d.hide();
								//location.reload(true)
								//frappe.show_alert(d.get_values());
							}
						});
						setTimeout(function(){
						d.fields_dict.ht.$wrapper.html(dataa);
						d.fields_dict.ht1.$wrapper.html(main_po2);
						d.refresh();
						console.log(total_qty1);
						$(".pop_qty_total").val(total_qty1)
						$(".pop_adjustqty_total").val(0)
						d.show();
						d.$wrapper.find('.modal-dialog').css("width", "1000px");
						},1000)
					
					}
					
				}
			}
		});
	}
//finish infinity qty block
		var main_po1=''
		var dataa=''
		if(ordertype=="week_sales_qty")
		{	
		console.log(dataa)
		frappe.call({
			method: 'erpnext.api5.get_order_details_week',
			args:{item:row.find(".item_code").html(),date1:page.date1.value},
			callback: function(r) {
			if(r.message) {
					console.log(r.message);
					var msg = r.message;
					
					if(msg != "False") {
						var total_html2='<table border="1" class="display nowrap dataTable dtr-inline" width="33%" style="margin-left:38%"><tr><td style="width:5%;border:none"><input style="" type="text" class="pop_qty_total"  name="pop_qty_total" value="" ></td><td style="width:5%;"><input style="" type="text" class="pop_adjustqty_total" name="pop_adjustqty_total" value="" ></td></tr></table>'
			frappe.call({
			'method': 'erpnext.api5.getPODetails',
			'args':{item_code:row.find(".item_code").html(),date_fil:page.date1.value},
			'freeze': true,
			'freeze_message': "Please Wait...",
			callback: function(r) {
			if(r.message) {
					console.log(r.message)
					var data=''
					var stock_b=''
					r.message.forEach(function(d) {

						data='<span style="float:left;margin-top:32px">PO Details:&nbsp;&nbsp;</span><table id="porder"  border="1" class="display nowrap dataTable dtr-inline" cellpadding="10" style="float:left;margin-bottom:5px"><tr><th style="padding:5px">'+d.first_name+'</th><th style="padding:5px">'+d.second_name+'</th><th style="padding:5px">'+d.third_name+'</th><th style="padding:5px">'+d.four_name+'</th><th style="padding:5px">'+d.five_name+'</th></tr><tr class="po_item"><td class="first" id="'+d.first+'">'+d.first+'</td><td class="second" id="'+d.second+'">'+d.second+'</td><td id="'+d.third+'" class="third">'+d.third+'</td><td class="four" id="'+d.four+'">'+d.four+'</td><td class="five" id="'+d.five+'">'+d.five+'</td></tr></table>'

						stock_b='<table style="float:right;margin-top:-30px"><tr><td>Stock On Hand:&nbsp;&nbsp;&nbsp;</td><td style="border:2px solid black;width:120px;height:30px"><b>'+row.find(".balanceqty").html()+'</b></td></tr></table>'
						
						
						//console.log(total_html2);
						//data=''
						
						//frappe.msgprint(d.name);
					});
					//console.log(data)
					main_po1=data+total_html2+stock_b
				}
			
				
			
			}
		});



						$(".popTable").remove();

						
						dataa = '<table class="popTable"  border="1" class="display nowrap dataTable dtr-inline" width="100%"><tr><th>Customer</th><th>Order No</th><th>Item Code</th><th>Item</th><th>Qty</th><th>Adjust Qty</th><th>Back Qty</th><th>Date</th></tr>';
						var total_qty2=0
						$.each(msg, function(idx, obj) {
								dataa = dataa + '<tr class="pop_row"><td><span class="pop_customer" >'+ obj["customer"] +'</span></td><td><span class="pop_name1"><a href="#Form/Sales Order/'+ obj["name"] +'" class="pop_name">'+ obj["name"] +'</a></span></td><td><span class="pop_item_code2" >'+row.find(".item_code").html()+'</span></td><td><input type="hidden"  disabled="disabled" class="pop_item_code" id="pop_item_code" name="pop_item_code" value="'+ obj["item_code"] +'"><span class="pop_item_name" >'+ obj["item_name"] +'</span></td><td><input style="width:100%" type="text" class="pop_qty2" name="pop_qty" value="'+ obj["qty"] +'"></td><td><input style="width:100%" type="text" class="pop_adjustqty2" name="pop_adjustqty" value=""></td><td><input style="width:100%" type="text" class="pop_backqty" name="pop_backqty" value="0"></td><td><input style="width:100%" type="date" class="pop_date" id="pop_date" name="pop_date" value="'+frappe.datetime.add_days(frappe.datetime.nowdate(),2)+'"></td></tr><script type="text/javascript">$(".popTable").on("change",".pop_adjustqty2",function(){ $(this).sumqtyadjust2(); });$(".popTable").on("change",".pop_qty2",function(){ $(this).sumqty2(); });</script>';
								total_qty2=total_qty2+parseInt(obj["qty"])
						});
						
						dataa = dataa + '</table>';
						
						var d = new frappe.ui.Dialog({
							
							'fields': [
								{'fieldname': 'ht1', 'fieldtype': 'HTML'},
								{'fieldname': 'ht', 'fieldtype': 'HTML'},
							],
							primary_action: function(){
								var qty=0
								$(".pop_row").each(function() {
									qty = parseFloat($(this).find(".pop_qty2").val());
									customer=$(this).find(".pop_customer").html()
									item_code=$(this).find(".pop_item_code").val()
									sales_order_id=$(this).find(".pop_name").html()
									adjustqty=parseFloat($(this).find(".pop_adjustqty2").val());
									backqty=parseFloat($(this).find(".pop_backqty").val());
									backorder_date=$(this).find(".pop_date").val();

									if(isNaN(adjustqty))
									{
										adjustqty=0;
									}
									if(isNaN(backqty))
									{
										backqty=0;
									}

									frappe.call({
										'method':'erpnext.api5.qtyAdjust',
										'freeze': true,
										'freeze_message': "Please Wait...",
										'args':{customer:customer,sales_order_id:sales_order_id,item_code:item_code,qty:qty,adjustqty:adjustqty,backqty:backqty,backorder_date:backorder_date},
										callback:function(r){
											console.log(r.message)
						
											if(r.message=="True")
											{
												alert("Updated");
												location.reload();
											}
					
										}
									})
									console.log(qty);
								});
								
								d.hide();
								//location.reload(true)
								//frappe.show_alert(d.get_values());
							}
						});
						setTimeout(function(){
						d.fields_dict.ht.$wrapper.html(dataa);
						d.fields_dict.ht1.$wrapper.html(main_po1);
						d.refresh();
						console.log(total_qty2);
						$(".pop_qty_total").val(total_qty2)
						$(".pop_adjustqty_total").val(0)
						d.show();
						d.$wrapper.find('.modal-dialog').css("width", "1000px");
						},1000)
					
					}
					
				}
			}
		});
	}
//finish sales qty
		var val_date = $(this).attr('id');
		var main_po=''
		var total_html3=''
		var dataa=''
		
		if(ordertype=="first" || ordertype=="second" || ordertype=="third" || ordertype=="four" || ordertype=="five")
		{	
		console.log(dataa)
		frappe.call({
			method: 'erpnext.api5.get_order_details_weekday',
			args:{item:row.find(".item_code").html(),date1:val_date},
			freeze: true,
			freeze_message: "Please Wait...",
			callback: function(r) {
			if(r.message) {
					console.log(r.message);
					var msg = r.message;
					
					if(msg != "False") {
						total_html3='<table border="1" class="display nowrap dataTable dtr-inline" width="33%" style="margin-left:38%"><tr><td style="width:5%;border:none"><input style="" type="text" class="pop_qty_total" name="pop_qty_total" value="" ></td><td style="width:5%;"><input style="" type="text" class="pop_adjustqty_total" name="pop_adjustqty_total" value="" ></td></tr></table>'


					
			frappe.call({
			'method': 'erpnext.api5.getPODetails',
			'args':{item_code:row.find(".item_code").html(),date_fil:val_date},
			'freeze': true,
			'freeze_message': "Please Wait...",
			callback: function(r) {
			if(r.message) {
					console.log(r.message)
					var data=''
					var stock_b=''
					r.message.forEach(function(d) {

						data='<span style="float:left;margin-top:32px">PO Details:&nbsp;&nbsp;</span><table id="porder"  border="1" class="display nowrap dataTable dtr-inline" cellpadding="10" style="float:left;margin-bottom:5px"><tr><th style="padding:5px">'+d.first_name+'</th><th style="padding:5px">'+d.second_name+'</th><th style="padding:5px">'+d.third_name+'</th><th style="padding:5px">'+d.four_name+'</th><th style="padding:5px">'+d.five_name+'</th></tr><tr class="po_item"><td class="first" id="'+d.first+'">'+d.first+'</td><td class="second" id="'+d.second+'">'+d.second+'</td><td id="'+d.third+'" class="third">'+d.third+'</td><td class="four" id="'+d.four+'">'+d.four+'</td><td class="five" id="'+d.five+'">'+d.five+'</td></tr></table>'
						
						stock_b='<table style="float:right;margin-top:-30px"><tr><td>Stock On Hand:&nbsp;&nbsp;&nbsp;</td><td style="border:2px solid black;width:120px;height:30px"><b>'+row.find(".balanceqty").html()+'</b></td></tr></table>'
						
						//console.log(total_html3);
						//data=''
						
						//frappe.msgprint(d.name);
					});
					//console.log(data)
					main_po=data+total_html3+stock_b
				}
			
				
			
			}
		});




						$(".popTable").remove();
						
						dataa = '<table class="popTable"  border="1" class="display nowrap dataTable dtr-inline" width="100%"><tr><th>Customer</th><th>Order No</th><th>Item Code</th><th>Item</th><th>Qty</th><th>Adjust Qty</th><th>Back Qty</th><th>Date</th></tr>';
						var total_qty3=0
						$.each(msg, function(idx, obj) {
								dataa = dataa + '<tr class="pop_row"><td><span class="pop_customer" >'+ obj["customer"] +'</span></td><td><span class="pop_name1"><a href="#Form/Sales Order/'+ obj["name"] +'" class="pop_name">'+ obj["name"] +'</a></span></td><td><span class="pop_item_code1" >'+row.find(".item_code").html()+'</span></td><td><input type="hidden"  disabled="disabled" class="pop_item_code" name="pop_item_code" value="'+ obj["item_code"] +'"><span class="pop_item_name" >'+ obj["item_name"] +'</span></td><td><input style="width:100%" type="text" class="pop_qty3" name="pop_qty" value="'+ obj["qty"] +'"></td><td><input style="width:100%" type="text" class="pop_adjustqty3" name="pop_adjustqty" value=""></td><td><input style="width:100%" type="text" class="pop_backqty" name="pop_backqty" value="0"></td><td><input style="width:100%" type="date" class="pop_date" id="pop_date" name="pop_date" value="'+frappe.datetime.add_days(frappe.datetime.nowdate(),2)+'"></td></tr><script type="text/javascript">$(".popTable").on("change",".pop_adjustqty3",function(){ $(this).sumqtyadjust3(); });$(".popTable").on("change",".pop_qty",function(){ $(this).sumqty3(); });</script>';
								total_qty3=total_qty3+parseInt(obj["qty"])
						});
						
						dataa = dataa + '</table>';
						var d = new frappe.ui.Dialog({
							title:__(row.find(".item_name").html()),
							'fields': [
								{'fieldname': 'ht1', 'fieldtype': 'HTML'},
								{'fieldname': 'ht', 'fieldtype': 'HTML'},
							],
							primary_action: function(){
								var qty=0
								$(".pop_row").each(function() {
									qty = parseFloat($(this).find(".pop_qty3").val());
									customer=$(this).find(".pop_customer").html()
									item_code=$(this).find(".pop_item_code").val()
									sales_order_id=$(this).find(".pop_name").html()
									adjustqty=parseFloat($(this).find(".pop_adjustqty3").val());
									backqty=parseFloat($(this).find(".pop_backqty").val());
									backorder_date=$(this).find(".pop_date").val();
									console.log("adjustqty:"+adjustqty)
									console.log("adjustqty:"+backqty)
									if(isNaN(adjustqty))
									{
										adjustqty=0;
									}
									if(isNaN(backqty))
									{
										backqty=0;
									}

									frappe.call({
										'method':'erpnext.api5.qtyAdjust',
										'freeze': true,
										'freeze_message': "Please Wait...",
										'args':{customer:customer,sales_order_id:sales_order_id,item_code:item_code,qty:qty,adjustqty:adjustqty,backqty:backqty,backorder_date:backorder_date},
										callback:function(r){
											console.log(r.message)
						
											if(r.message=="True")
											{
												alert("Updated");
												location.reload();
											}
					
										}
									})
									console.log(qty);
								});
								
								d.hide();
								//location.reload(true)
								//frappe.show_alert(d.get_values());
							}
						});
				
						setTimeout(function(){d.fields_dict.ht.$wrapper.html(dataa);
						d.fields_dict.ht1.$wrapper.html(main_po);
						console.log(total_qty3);
						$(".pop_qty_total").val(total_qty3)
						$(".pop_adjustqty_total").val(0)
						//document.getElementById("pop_qty_total").value=total_qty3;
						
						
						d.show();
						d.$wrapper.find('.modal-dialog').css("width", "1000px");
						},1000)
						
					
					}
					
				}
			}
		});
	}

	//day sales order day wise end 



	}

}
frappe.qty_adjust= {
	start: 0,
	make: function(page) {
		var me = frappe.qty_adjust;
		me.page = page;
		$("#qtyTable").remove();
	
	},
	run: function(page) {
		var me = frappe.qty_adjust;
		me.page=page;

		$(".frstmn").hide();

		$("#qtyTable").remove();

		me.body=$('<table id="qtyTable"  border="1" class="display nowrap dataTable dtr-inline" width="100%"><tr><th width="20%">Item_Code</th><th width="20%">Item Name</th><th>Balance Qty</th><th>ISQ</th><th class="header_field">WSQ</th><th class="frstmn">Mon</th><th class="frstmn">Tue</th><th class="frstmn">Wed</th><th class="frstmn">Thur</th><th class="frstmn">Fri</th><th class="frsttue">Tue</th><th class="frsttue">Wed</th><th class="frsttue">Thur</th><th class="frsttue">Fri</th><th class="frsttue">Sat</th><th class="frstwed">Wed</th><th class="frstwed">Thur</th><th class="frstwed">Fri</th><th class="frstwed">Sat</th><th class="frstwed">Sun</th><th class="frstthur">Thur</th><th class="frstthur">Fri</th><th class="frstthur">Sat</th><th class="frstthur">Sun</th><th class="frstthur">Mon</th><th class="frstfri">Fri</th><th class="frstfri">Sat</th><th class="frstfri">Sun</th><th class="frstfri">Mon</th><th class="frstfri">Tue</th><th class="frstsat">Sat</th><th class="frstsat">Sun</th><th class="frstsat">Mon</th><th class="frstsat">Tue</th><th class="frstsat">Wed</th><th class="frstsun">Sun</th><th class="frstsun">Mon</th><th class="frstsun">Tue</th><th class="frstsun">Wed</th><th class="frstsun">Thur</th></tr></table><script type="text/javascript">$("#qtyTable").css("cursor","pointer"); $("#qtyTable").on("click","td",function(){ $(this).getpopup(); });	$(".first").click(function(){alert("Test");	})</script>').appendTo(me.page.main);

		$(".frstmn").css('display','None');
		$(".frsttue").css('display','None');
		$(".frstwed").css('display','None');
		$(".frstthur").css('display','None');
		$(".frstfri").css('display','None');
		$(".frstsat").css('display','None');
		$(".frstsun").css('display','None');
		

		frappe.call({
			'method': 'erpnext.api5.get_items',
			'args':{date1:page.date1.value},
			callback: function(r) {
			if(r.message) {
					
					$(".item_row").remove();
					r.message.forEach(function(d) {
						if(d.dayname=="Monday")
						{
							$(".frstmn").show();
									
						}
						if(d.dayname=="Tuesday")
						{
							$(".frsttue").show();
						}
						if(d.dayname=="Wednesday")
						{
							$(".frstwed").show();
						}
						if(d.dayname=="Thursday")
						{
							$(".frstthur").show();
						}
						if(d.dayname=="Friday")
						{
							$(".frstfri").show();
						}
						if(d.dayname=="Saturday")
						{
							$(".frstsat").show();
						}
						if(d.dayname=="Sunday")
						{
							$(".frstsun").show();
	
							}
				

						var data='<tr class="item_row"><td id='+d.item_code+' class="item_code">'+d.item_code+'</td><td class="item_name" style="width:100px">'+d.item_name+'</td><td class="balanceqty">'+d.balance_qty+'</td><td class="infinity_sales_qty">'+d.infinity_sales_qty+'</td><td class="week_sales_qty">'+d.week_sales_qty+'</td><td class="first" id="'+d.first_date+'">'+d.first+'</td><td class="second" id="'+d.second_date+'">'+d.second+'</td><td id="'+d.third_date+'" class="third">'+d.third+'</td><td class="four" id="'+d.four_date+'">'+d.four+'</td><td class="five" id="'+d.five_date+'">'+d.five+'</td></tr>'
						$("#qtyTable").append(data);
						data=''
						
						//frappe.msgprint(d.name);
					});
				}
			
				
			
			}
		});



	}
		
}
