function changeLang(lang)
{
	$.ajax({
	    url : contextPath+"/common/changeLanguage",
	    type : 'POST',
	    data : {language:lang},
	    success: function (ret) 
	    {
	    	if (ret.message == "noSession") {
        		alertNoSession();
            	return;
            }
	    	
//	    	var frm = document.MainForm;
//	    	if(frm)
//	    	{
//	    		frm.action = contextPath+frm.do_url.value;
//	    		frm.submit();		    		
//	    	}
//	    	else
//	    	{
//		    	location.href = location.href;
//	    	}
	    	location.reload();
	    },
	    error : function () 
	    {
	    	alert("Fail Change Language.");
	    },
	    scope : this
	});
	
}