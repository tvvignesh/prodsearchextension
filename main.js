$(document).ready(function(){
$('#parent').keypress(function(e) {
  if (e.keyCode == '13') {
     e.preventDefault();
     func();
   }
});
	$('#relevanceSelect').change(function(){
		srtt();
	});

	$('#catSelect').change(function(){
		cat();
	});

	$('#prodName').click(function(){
		comm();
	});

	$('#searchBtn').click(function(){
		func();
	});
});

var product;
function loadXMLDoc(url,cfunc)
{
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=cfunc;
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}

function loads(url)
{
//abc:
	//alert("Inside loads");
	loadXMLDoc(url,function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			//alert("Inside readyState");
			resp="<div id='hd'>WhiZ Search</div><style type='text/css'>.fk-item-specs-section{background-color:#CDFFFF;}.fk-search-header-sec{display:none;}#fk-mainhead-id{display:none;}#fk-mainfooter-id{display:none;}#hd{background-color:grey;width:100%;color:white;position:fixed;top:0px;z-index:1000;}.search-navigation{display:none;}.hidden{display:none;}</style>"+xmlhttp.responseText;
			document.getElementById("aa").innerHTML=resp;
			if(resp!="")
			{
			$("#fk-mainbody-id").css("margin-top","10px");
			chkrate();
			}
			
		}
	});
}



//The product name is not being able to concatenate with the query
var product;

//function that searches the products category-wise
function func()
{
	frm=document.sel;
	category=document.sel.category.value;
	product=document.sel.proname.value;
	sort=document.sel.sort.value;

	if(product=="")
	{
		alert("Please enter a Product Name!");
		return;
	}
	if(category=="")
	{
		alert("Please select a Category for search!");
		return;
	}
	
nradio = 0; 
ok = false; 
for (n=0; n<frm.length; n++) 
{ 
if (frm[n].type == 'radio'){nradio++} 
} 
for (i=0; i<nradio; i++) 
{ 
if(frm.myradio[i].checked == true)
{
if(i==0)
{site="flipkart"}
else
if(i==1)
{site="ebay";}
ok = true
} 
} 
if (ok == false){alert("No Website for search selected...");return;};

if(site=="ebay")
{ebay();return;}//call the ebay function

	$("#ld").css("display","block");

	if(category=="Computers")
	{
		//alert(product);
		//Error at these places in the queries
		loads("http://www.flipkart.com/search-computers?query="+product+"+&from=all&searchGroup=computers&_l=dPxEw4fkCcmDR6VWspVbMg--&_r=ke_ixfl7hnYQ78FQaK3pDw--&ref=8b2e4211-da4a-4b50-8aba-c76692dee998&sort="+sort+"#scrollTo=0;pageno=undefined");
	}
	else
	if(category=="All Categories")
	{
		loads("http://www.flipkart.com/all?query="+product+"&from=all&_l=FOFkS+ItnyPnzbZleLlj4A--&_r=afw7p5HYZ1y7S_VMtBmZ4A--&ref=4b3d14a7-6c4f-4cd5-8b32-2b55bf399cf4&sort="+sort+"");//wrong
	}
	else
	if(category=="Cameras")
	{
		loads("http://www.flipkart.com/search/a/cameras?query="+product+"&vertical=cameras&dd=0&autosuggest%5Bas%5D=off&autosuggest%5Bas-submittype%5D=entered&autosuggest%5Bas-grouprank%5D=0&autosuggest%5Bas-overallrank%5D=0&Search=%C2%A0&_r=om%2BSegQdb_EcNmX9AbHjfw--&_l=pMHn9vNCOBi05LKC_PwHFQ--&ref=eb8b0a43-46b7-447f-9738-6a1ecbb2f7ce&selmitem=Cameras&sort="+sort+"");
	}
	else
	if(category=="Books")
	{
		loads("http://www.flipkart.com/search/a/books?query="+product+"&vertical=books&dd=0&autosuggest%5Bas%5D=off&autosuggest%5Bas-submittype%5D=entered&autosuggest%5Bas-grouprank%5D=0&autosuggest%5Bas-overallrank%5D=0&Search=%C2%A0&_r=AOZ8MFw9lZ0c%2BOg5mDsuXw--&_l=dPxEw4fkCcmDR6VWspVbMg--&ref=00bd49a4-2cba-499c-a08f-8e0895720744&selmitem=Books&sort="+sort+"");
	}
	else
	if(category=="Mobiles & Accessories")
	{
		loads("http://www.flipkart.com/search/a/mobiles?query="+product+"&vertical=mobiles&dd=0&autosuggest%5Bas%5D=off&autosuggest%5Bas-submittype%5D=entered&autosuggest%5Bas-grouprank%5D=0&autosuggest%5Bas-overallrank%5D=0&Search=%C2%A0&_r=pFVLPlDqP8udWupTvTTnLQ--&_l=MHzwajeMCXBPHY1KaGPeZQ--&ref=82380b6d-32a1-4d06-9e69-780dffab7546&selmitem=Mobiles+%26+Accessories&sort="+sort+"");
	}
	else
	if(category=="Games & Consoles")
	{
		loads("http://www.flipkart.com/search/a/games?query="+product+"&vertical=games&dd=0&autosuggest%5Bas%5D=off&autosuggest%5Bas-submittype%5D=entered&autosuggest%5Bas-grouprank%5D=0&autosuggest%5Bas-overallrank%5D=0&Search=%C2%A0&_r=QEo%2BMMTx6Dx5yTWGRMgp7Q--&_l=dPxEw4fkCcmDR6VWspVbMg--&ref=0d5d5c73-66a6-464c-92b3-a689dfc37875&selmitem=Games+%26+Consoles&sort="+sort+"");
	}
	else
	if(category=="Movies & TV Shows")
	{
		loads("http://www.flipkart.com/search/a/movies?query="+product+"&vertical=movies&dd=0&autosuggest%5Bas%5D=off&autosuggest%5Bas-submittype%5D=entered&autosuggest%5Bas-grouprank%5D=0&autosuggest%5Bas-overallrank%5D=0&Search=%C2%A0&_r=7Z8z4sM1IB75eaNhmk32Fw--&_l=dPxEw4fkCcmDR6VWspVbMg--&ref=e077eace-48e6-4a6d-95ca-c15715c8c760&selmitem=Movies+%26+TV+Shows&sort="+sort+"");
	}
	else
	if(category=="Games & Consoles")
	{
		loads("http://www.flipkart.com/search/a/music?query="+product+"&vertical=music&dd=0&autosuggest%5Bas%5D=off&autosuggest%5Bas-submittype%5D=entered&autosuggest%5Bas-grouprank%5D=0&autosuggest%5Bas-overallrank%5D=0&Search=%C2%A0&_r=PjqbLpPBEY_E0ckNoo27rw--&_l=3FUBMdJtHELeCiqOL44fDw--&ref=50004fd8-369d-45dd-8938-c512a69dabbb&selmitem=Music&sort="+sort+"");
	}
	else
	if(category=="Movies & TV Shows")
	{
		loads("http://www.flipkart.com/search/a/movies?query="+product+"&vertical=movies&dd=0&autosuggest%5Bas%5D=off&autosuggest%5Bas-submittype%5D=entered&autosuggest%5Bas-grouprank%5D=0&autosuggest%5Bas-overallrank%5D=0&Search=%C2%A0&_r=F1M2MNlEHjfNLMd0MkcWiA--&_l=xWRAspPrxwNzPfhnuk2miA--&ref=b0cd314d-0293-4ef2-b692-f33d4d70bf32&selmitem=Movies+%26+TV+Shows&sort="+sort+"");
	}
	else
	if(category=="Music")
	{
		loads("http://www.flipkart.com/search/a/music?query="+product+"&vertical=music&dd=0&autosuggest%5Bas%5D=off&autosuggest%5Bas-submittype%5D=entered&autosuggest%5Bas-grouprank%5D=0&autosuggest%5Bas-overallrank%5D=0&Search=%C2%A0&_r=PjqbLpPBEY_E0ckNoo27rw--&_l=3FUBMdJtHELeCiqOL44fDw--&ref=a488e627-609b-46a6-a52f-9be2bcf00cce&selmitem=Music&sort="+sort+"");
	}
	else
	if(category=="Mp3 Players & IPods")
	{
		loads("http://www.flipkart.com/search/a/audioplayers?query="+product+"&vertical=audioplayers&dd=0&autosuggest%5Bas%5D=off&autosuggest%5Bas-submittype%5D=entered&autosuggest%5Bas-grouprank%5D=0&autosuggest%5Bas-overallrank%5D=0&Search=%C2%A0&_r=F1M2MNlEHjfNLMd0MkcWiA--&_l=xWRAspPrxwNzPfhnuk2miA--&ref=450a6740-0b63-4fb7-bb0e-8c46d05a7e27&selmitem=Mp3+Players+%26+iPods&sort="+sort+"");
	}
	else
	if(category=="Personal & Health Care")
	{
		loads("http://www.flipkart.com/search/a/phcare?query="+product+"&vertical=phcare&dd=0&autosuggest%5Bas%5D=off&autosuggest%5Bas-submittype%5D=entered&autosuggest%5Bas-grouprank%5D=0&autosuggest%5Bas-overallrank%5D=0&Search=%C2%A0&_r=9cPrtCxYWP6a_DatCjJlXA--&_l=JWZngv71FP6nIV_E_Fawmg--&ref=25cd9d95-c71c-44d0-8853-e65949543562&selmitem=Personal+%26+Health+Care&sort="+sort+"");
	}
	else
	if(category=="Home Appliances")
	{
		loads("http://www.flipkart.com/search/a/homeappliance?query="+product+"&vertical=homeappliance&dd=0&autosuggest%5Bas%5D=off&autosuggest%5Bas-submittype%5D=entered&autosuggest%5Bas-grouprank%5D=0&autosuggest%5Bas-overallrank%5D=0&Search=%C2%A0&_r=LBuVwialx3FA2la69uZCww--&_l=F1UUbXGpXwym9_l3RXSShA--&ref=b46fd875-1cd0-4501-a660-71f7c832f664&selmitem=Home+Appliances&sort="+sort+"");
	}
	else
	if(category=="TVs & Video Players")
	{
		loads("http://www.flipkart.com/search/a/tv-video?query="+product+"&vertical=tv-video&dd=0&autosuggest%5Bas%5D=off&autosuggest%5Bas-submittype%5D=entered&autosuggest%5Bas-grouprank%5D=0&autosuggest%5Bas-overallrank%5D=0&Search=%C2%A0&_r=jKXpd3Z9ccIHNfNcusdl_g--&_l=4VSAJUE49AYER0269t6hgQ--&ref=71de005e-648c-444d-b1cc-22a4dcb58610&selmitem=TVs+%26+Video+Players&sort="+sort+"");
                //loads("http://www.flipkart.com/search/a/tv-video?query="+product+"&vertical=tv-video&dd=0&autosuggest%5Bas%5D=off&autosuggest%5Bas-submittype%5D=entered&autosuggest%5Bas-grouprank%5D=0&autosuggest%5Bas-overallrank%5D=0&Search=%C2%A0&_r=jKXpd3Z9ccIHNfNcusdl_g--&_l=4VSAJUE49AYER0269t6hgQ--&ref=71de005e-648c-444d-b1cc-22a4dcb58610&selmitem=TVs+%26+Video+Players");	
}
	else
	{
		alert("OOPS! Invalid Category! Select the ones from the List..");
	}
}

function chkrate()
{
$("#com").text("");
$("a").click(function()
{
var ln=$(this).attr("href");
chrome.tabs.create({url:"http://www.flipkart.com/"+ln});
});

var i=0;
var rating=new Array();
var foundcount;

foundcount=$('.search-info-count:first').text();
if(foundcount=="0")
{
alert("OOPS! We were not able to find any product matching your request! Try searching Again using fewer keywords!");return;
}
$('.fk-stars-small').each(function(index) 
{
rating[i++]=$(this).attr("title");
});

$(".search-info-line1:first").text('Whiz search is now displaying 10 products you can opt for, among the '+foundcount+' products we found');

if(i!=0)
{
big=rating[0];
small=rating[0];
for(j=0;j<=i-1;j++)
{
if(rating[j]>big)
{
big=rating[j];
}
}

for(j=0;j<=i-1;j++)
{
if(rating[j]<small)
{
small=rating[j];
}
}

if(big!=small)
{alert("WOW! We found "+foundcount+" products of the range of rating: "+small+" to "+big+" among which 10 products on basis of relevance are displayed!");}
else
{alert("WOW! We found "+foundcount+" products with the rating:"+big+"!");}
}
/*var rating=$("div .fk-stars-small:first").attr("title");
var totrates = $(this).text();
alert(rating);
alert("tot:"+totrates);*/
//contents().filter(function(){
}

function ebay()
{
document.write("<h3 style='width:400px;height:100px;'>EBAY SEARCH FEATURE COMING SOON!</h3>");
}

function comm()
{
$("#com").text("Enter the product name here!");
}

function cat()
{
$("#com").text("Select the category from here!");
}

function srtt()
{
$("#com").text("Select the way in which you want to SORT the products!");
}