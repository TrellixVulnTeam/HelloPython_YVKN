//code:GBK
//update:2015/06/26
		var rmw_basenames = "rmwsite";
		var people_basenames = "people";
		var gj_basenames = "rmwsite";
		var zt_basenames = "special";
		var en_basenames = "morelanguage";
		var local_basenames = "rmwlocal";
		/*
		 *********************************************************************�õ���������
		 */
		function trim(str) 
		{
			if (!str || str=="") 
				return "";
			while ((str.charAt(0)==' ') || (str.charAt(0)=='\n') || (str.charAt(0,1)=='\r')) 
				str=str.substring(1,str.length);
			while ((str.charAt(str.length-1)==' ') || (str.charAt(str.length-1)=='\n') || (str.charAt(str.length-1)=='\r')) 
				str=str.substring(0,str.length-1);
			return str;
		}
		function allchange()
		{
			var allchangeele = document.RMWSearch.ALLCHANGE;
			//ѡ�л�����ȡ�����е�ѡ��
			var ssfweles = document.getElementsByName("SSFW");
			var ssfwele = false;
			var ssfwlist = "(";
			for(var i=0;i<ssfweles.length;i++)
			{
				ssfwele = ssfweles[i];
				ssfwele.checked = allchangeele.checked;
			}
		}
		function createXMLNode(key,value)
		{
			var sResult = "";
			sResult += "<"+key+">";
			sResult += "<![CDATA["+encode(value)+"]]>";
			sResult += "</"+key+">";
			return sResult;
		}
		function encode(str,u) 
		{
			if (typeof(encodeURIComponent) == 'function')
			{
				if (u) 
					return encodeURI(str);
				else 
					return encodeURIComponent(str);
			}
			else 
			{
				return escape(str);
			}
		}
		//�õ��ͼ������Ĳ����б�
		function getParameter_DJ(channel)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Content";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//��ͬ��Ƶ���޸������      ����    Ϊ��ص�Ƶ������
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
//			alert("keyword=" + keyword);
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
//			alert(document.searchForm.XMLLIST.value);
			return false;
		}

		//�õ�����Ƶ���ڶ���������Ĳ����б�
		function getParameter_DJ_2(channel)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names_2");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//��ͬ��Ƶ���޸������      ����    Ϊ��ص�Ƶ������
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","Content");
			xmllist += "</RMW>";
			//alert(xmllist);
			document.searchForm_2.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm_2.submit();
			return false;
		}
		//�õ�����Ƶ�����߼����ı����ֵ
		function getParameter_DJ_AUTHOR(channel)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names_author");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//��ͬ��Ƶ���޸������      ����    Ϊ��ص�Ƶ������
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","AUTHOR");
			xmllist += "</RMW>";
			//alert(xmllist);
			document.searchForm_author.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm_author.submit();
			return false;
		}

		/*���� OtherWhere ��Ƶ�����м���
		 * ������Ϣ��
		 * 1��channel ����Ƶ��
		 * 2��formEle ������Form��
		 */
		function searchByOtherWhere(channel,formEle)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = formEle.names;
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ�otherwhere��ֵ
			var otherwhereele = formEle.otherwhere;
			var otherwhere = otherwhereele.value;
			//3������XML�ַ���
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-PUBLISHTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","Content");
			xmllist += "</RMW>";
			formEle.XMLLIST.value = xmllist;
			formEle.submit();
			return false;
		}
		//�õ��ͼ������Ĳ����б�
		function allsearch(formele,channel)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = formele.names;
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//��ͬ��Ƶ���޸������      ����    Ϊ��ص�Ƶ������
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","Content");
			xmllist += "</RMW>";
			//alert(xmllist);
			formele.XMLLIST.value = encodeURIComponent(xmllist);
			formele.submit();
			return false;
		}
		
		//�õ��α���̸�����Ĳ����б�
		function getParameter_DJ_JBFT(channel)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Content";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="class3=�α���̸";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//��ͬ��Ƶ���޸������      ����    Ϊ��ص�Ƶ������
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//�õ�������ר������Ĳ����б�
		function getParameter_DJ_ZG(channel)
		{
			var basenames = gj_basenames;
			if (channel=="ʱ��"){
				//alert("shizheng");
				var otherwhere="source=%������% and class2=(ʱ�� or ���� or ��� or �۵� or ���� or �ط� or �ط��쵼 or ���� or ̨�� or �۰� or ���� or ���Ȼ��� or �й����������� or �й��˴����� or �й���Э������ or �й��������� or �й��������� or �й��������� or ǿ������ or ǿ������)";
				}
			else if (channel=="����"){
				//alert("tiyu");
				var otherwhere="source=%������% and class2=(���� or ���� or ��Ʊ)";
				}
			else if (channel=="����"){
				var otherwhere="source=%������% and class2=����";
				}
			else if (channel=="����"){
				var otherwhere="source=%������% and class2=(���� or �˿�Ƶ�� or ����Ƶ��)";
				}
			else if (channel=="IT"){
				var otherwhere="source=%������% and class2=(IT or ����Ƶ�� or ��Ϸ or ����)";
				}
			else if (channel=="����"){
				var otherwhere="source=%������% and class2=����";
				}
			else if (channel=="����"){
				var otherwhere="source=%������% and class2=(���� or ��Դ or ���� or ���� or �����˾ or �ҵ� or ������ҵ������ or �ֻ�ý�� or ��ũ�� or ʳƷ or ���� or �黭 or ������ or ��ǿ�� or �����չ or ��ʿʱ�� or Ů�� or ���� or ����)";
				}
			else if (channel=="����"){
				var otherwhere="source=%������% and class2=����";
				}
			else if (channel=="�Ƽ�"){
				var otherwhere="source=%������% and class2=�Ƽ�";
				}
			else if (channel=="����"){
				var otherwhere="source=%������% and class2=����";
				}
			else if (channel=="ԭ��"){
				var otherwhere="((source=%Ƶ��% and source=%������%) or source=������ or source=%�����ձ�%)";
				}
			else if (channel=="english"){
				basenames=en_basenames;
				var otherwhere="(sitename=english and content= ((By People ) and ( Daily Online )))";
			}
				
			var limiting_date = addDate(-5);
			otherwhere = otherwhere + " and " + "publishtime>" + limiting_date;
			channel="ALL";
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Content";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//��ͬ��Ƶ���޸������      ����    Ϊ��ص�Ƶ������
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		//select �ύ
		function submitForm()
		{
			if(document.searchForm.channelname.value == "")
			{
				alert("��ѡ����ص�Ƶ��");
				return;
			}
			else
			{
				var channel = document.searchForm.channelname.options[document.searchForm.channelname.selectedIndex].value;
				getParameter_DJ_ZG(channel);
			}
		}
		
	   //��������	
	  function addDate(days){
		  //�������ڶ�������Ϊ����  
		  var   a=new   Date();  
		  //�õ�������գ�����ĵڼ��죩  
		  var   b=a.getDate();  
		  //��days�졣  
		  b=b+days;  
		  //�����������ڶ�����գ����õ��Ŀ��»��ǿ���֮��������ϵͳ���Լ������  
		  a.setDate(b);
		  var year=a.getFullYear();
		  var month=a.getMonth() + 1;//getMonth()�õ��·ݴ�0��ʼ������Ҫ��1  
		  var date=a.getDate();
		  var newdate=year + "." + month + "." + date;
		return   newdate;
	  }
		
	//ר��Ϊ������ҳʹ��
	function searchForBaoxian()
	{
	 var index = document.BaoxianSearchForm.searchcompany.selectedIndex;
	 var searchcompany = document.BaoxianSearchForm.searchcompany.options[index].value;
	 
	 index = document.BaoxianSearchForm.searchtype.selectedIndex;
	 var searchtype = document.BaoxianSearchForm.searchtype.options[index].value;
	  
	 var searchkeyword = document.BaoxianSearchForm.searchkeyword.value;
	 
	 var where = "";
	 if(searchcompany != "")
	  where += searchcompany+" ";
	 if(searchtype != "")
	  where += searchtype+" ";
	 if(searchkeyword != "")
	  where += searchkeyword+" ";
	 where = encode(where);
	 var channel = encode("����");
	 window.open("http://search.people.com.cn/rmw/GB/bxsearch/searchres.jsp?keyword="+where+"&channel="+channel);
	 
	}

	//���������ؼ���
	function getParameter_VIDEO()
		{
			var basenames = rmw_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Title";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.VIDEOSearch.XMLLIST.value = xmllist;	
			document.VIDEOSearch.submit();
			return false;
		}		
				
	//�������������������
	function getParameter_VIDEO_XWLB(){
			var basenames = rmw_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.VIDEOSearchXWLB.PROGRAM.value;
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			
			keyword = document.VIDEOSearchXWLB.PROGRAM.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Title";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			//6���õ����ڷ�Χ
			var datefrom = document.VIDEOSearchXWLB.DATEFROM.value;
			var dateto = document.VIDEOSearchXWLB.DATETO.value;
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM",datefrom);
			xmllist += createXMLNode("DATETO",dateto);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.VIDEOSearchXWLB.XMLLIST.value = xmllist;
			document.VIDEOSearchXWLB.submit();
			return false;
		}
	
	//������ӷ�̸Ƶ���������ڼ���
	function getParameter_VIDEO_DAY(){
			var basenames = rmw_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			//�α���̸��Ŀ
			var otherwhere = "node_id=14644";
	        var today = new Date();
	        var bday = new Date(2006,04, 27);
	        var tf=document.dateform;
	        var vd=tf.sday.options[tf.sday.selectedIndex].value;
	        var vm=tf.smonth.options[tf.smonth.selectedIndex].value;
			var vy=tf.syear.options[tf.syear.selectedIndex].value;
			var datefrom = vy+ "." + vm + "."+vd + " 00:00:00";
			var dateto = vy+ "." + vm + "."+vd + " 23:59:59";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("KEYWORD","");
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("DATEFROM",datefrom);
			xmllist += createXMLNode("DATETO",dateto);
			xmllist += createXMLNode("SEARCHFIELD","");
			xmllist += "</RMW>";
			document.dateform.XMLLIST.value = xmllist;
			document.dateform.submit();
			return false;
		}
	

	//������ӷ�̸Ƶ�������������α���������
	function getParameter_VIDEO_NAME(){
			var basenames = rmw_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.VIDEOSearchNAME.name.value;
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			
			keyword = document.VIDEOSearchNAME.name.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Title";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			//�α���̸��Ŀ
			var otherwhere = "node_id=14644";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.VIDEOSearchNAME.XMLLIST.value = xmllist;	
			document.VIDEOSearchNAME.submit();
			return false;
		}
	
	
	//�õ������л������Ĳ����б�
		function getParameter_DJ_AWZH(channel)
		{
			var basenames = "awzh";
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Title";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="specialflag=tangshuquan";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
//			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}

		//����Ƶ�����ڼ����԰����
		function getParameter_DJ_JRJLYB(channel)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Content";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="docclass=%�й����ڼ����԰�%";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//����Ƶ�����ɷ���
		function getParameter_DJ_FLFG(channel)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names1");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "CONTENT";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="node_id =205583";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm1.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm1.submit();
			return false;
		}
		
		//����Ƶ��˾������
		function getParameter_DJ_SFKS(channel)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names2");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "CONTENT";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			//var otherwhere="node_id =204469";
			var otherwhere="class2=����";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm2.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm2.submit();
			return false;
		}
		
		//�й���Э��
		function getParameter_DJ_ZGBX(channel)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "CONTENT";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="node_ids =%221752%";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//��ĳ���ڵ�������
		function getParameter_DJ_NODE(nodeId)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "CONTENT";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="node_ids = %25" + nodeId + "%25 or " + "belongs_id = %25" + nodeId + "%25";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-PUBLISHTIME");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL","ALL");
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}

		//����ĳ��Ƶ���µ�ר��,����Ǹ�����Ƶ���õģ�����Ҳ������
		function getParameter_CHANNEL_ZT(channel)
		{
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("special_names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//9������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES","special");		
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","SPECIALNAME");
			xmllist += "</RMW>";
			document.ZTSearch.XMLLIST.value = encodeURIComponent(xmllist);
			document.ZTSearch.submit();
			return false;
		}
		
		//�õ�����Ƶ�����Ǽ������ӱ������
		function getParameter_DJ_star(channel)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names_star");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//��ͬ��Ƶ���޸������      ����    Ϊ��ص�Ƶ������
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","title");
			xmllist += "</RMW>";
			//alert(xmllist);
			document.searchForm_star.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm_star.submit();
			return false;
		}
		
		//����Ƶ��ӰѶ������������Ƶ����Ӱ��Ŀ����
		function getParameter_DJ_movie(channel)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names_movie");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="class3=��Ӱ";
			
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","title");
			xmllist += "</RMW>";
			//alert(xmllist);
			document.searchForm_movie.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm_movie.submit();
			return false;
		}
		
		//��������Ƶ��ר������
		function getParameter_CHANNEL_ZT_tv(channel)
		{
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("special_names_tv");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//9������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES","special");		
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","SPECIALNAME");
			xmllist += "</RMW>";
			document.ZTSearch_tv.XMLLIST.value = encodeURIComponent(xmllist);
			document.ZTSearch_tv.submit();
			return false;
		}
		
		//����Ƶ������
		function getParameter_DJ_disc(channel)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names_disc");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//��ͬ��Ƶ���޸������      ����    Ϊ��ص�Ƶ������
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","title");
			xmllist += "</RMW>";
			//alert(xmllist);
			document.searchForm_disc.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm_disc.submit();
			return false;
		}
		
		//�õ�����Ƶ�����Ǽ������ӱ������
		function getParameter_DJ_tv(channel)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names_tv");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//��ͬ��Ƶ���޸������      ����    Ϊ��ص�Ƶ������
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD","title");
			xmllist += "</RMW>";
			//alert(xmllist);
			document.searchForm_tv.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm_tv.submit();
			return false;
		}

		//����Ƶ����node_id����
		function getParameter_DJ_CHANNELID(channelid)
		{
			var basenames = people_basenames;
			var otherwhere =  " channelid=" + channelid;
			channel="ALL";
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfield = "content";
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-PUBLISHTIME");
			//��ͬ��Ƶ���޸������      ����    Ϊ��ص�Ƶ������
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}

		//�ط�Ƶ������
		function getParameter_DJ_LOCAL(channelid)
		{
			var basenames = local_basenames;
			var otherwhere =  " channelid=" + channelid;
			var searchyear = document.searchForm.search_year.options[document.searchForm.search_year.options.selectedIndex].value;
			var beginyear = searchyear.substring(0,4) + ".01.01";
			var endyear = searchyear.substring(0,4) + ".12.31"
			otherwhere = otherwhere + " and publishtime>=" + beginyear + " and publishtime<=" + endyear;
			channel="ALL";
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfield = document.searchForm.SearchField.options[document.searchForm.SearchField.options.selectedIndex].value;
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-PUBLISHTIME");
			//��ͬ��Ƶ���޸������      ����    Ϊ��ص�Ƶ������
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//�ط�Ƶ������
		function getParameter_DJ_LOCAL_dan(channelid)
		{
			var basenames = local_basenames;
			var otherwhere =  " channelid=" + channelid;
			channel="ALL";
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��Ϊcontent
			var searchfield = "CONTENT";
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","-PUBLISHTIME");
			//��ͬ��Ƶ���޸������      ����    Ϊ��ص�Ƶ������
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
//			alert(xmllist);
			document.searchForm.submit();
			return false;
		}

		//��������Ƶ����
		function getParameter_DJ_HWVIDEO(channel)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "CONTENT";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="class3=��Ƶ";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		//֤���Ͷ����
		function getParameter_DJ_ZJHTBJ(channel)
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "CONTENT";
//			for(var i=0;i<searchfieldeles.length;i++)
//			{
//				searchfieldele = searchfieldeles[i];
//				if(searchfieldele.checked)
//					searchfield = searchfieldele.value;
//			}
			
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var otherwhere="belongs_name=��������ר��";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//��ͬ��Ƶ���޸������      ����    Ϊ��ص�Ƶ������
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
			return false;
		}
		
		//�õ��ͼ������Ĳ����б�
		function getParameter_DJ_RU()
		{
			var basenames = gj_basenames;
			//1���õ��û�����Ĺؼ��ʣ�Ϊ���������ύ
			var keywordele = document.getElementById("names");
			var keyword = "";
			if(keywordele.value == "")
			{
				alert("������ؼ��ʣ�Ȼ���ύ");
				return false;
			}
			keyword = keywordele.value;
			//2���õ��û��������ֶ�,Ĭ��ΪTitle
			var searchfieldeles = document.getElementsByName("SearchField");
			var searchfieldele = false;
			var searchfield = "Content";
			for(var i=0;i<searchfieldeles.length;i++)
			{
				searchfieldele = searchfieldeles[i];
				if(searchfieldele.checked)
					searchfield = searchfieldele.value;
			}
			
			//3������XML�ַ���<RMW><BASENAMES></BASENAMES><KEYWORD></KEYWORD><SEARCHFIELD></SEARCHFIELD></RMW>
			var xmllist = "";
			var channel="ALL";
			var otherwhere="languages=45";
			xmllist += "<RMW>";
			xmllist += createXMLNode("BASENAMES",basenames);
			xmllist += createXMLNode("ALLKEYWORD","");
			xmllist += createXMLNode("ALLINPUT","");
			xmllist += createXMLNode("ANYKEYWORD","");
			xmllist += createXMLNode("NOALLKEYWORD","");
			xmllist += createXMLNode("DATEFROM","");
			xmllist += createXMLNode("DATETO","");
			xmllist += createXMLNode("SORTFIELD","LIFO");
			//��ͬ��Ƶ���޸������      ����    Ϊ��ص�Ƶ������
			xmllist += createXMLNode("OTHERWHERE",otherwhere);
			xmllist += createXMLNode("CHANNEL",channel);
			xmllist += createXMLNode("KEYWORD",keyword);
			xmllist += createXMLNode("SEARCHFIELD",searchfield);
			xmllist += "</RMW>";
//			alert("keyword=" + keyword);
			document.searchForm.XMLLIST.value = encodeURIComponent(xmllist);
			document.searchForm.submit();
//			alert(document.searchForm.XMLLIST.value);
			return false;
		}

