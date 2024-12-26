/**
 * 공통코드를 이용한 공통 코드 to XX 변환 모듈
 */

var languageList = new Array();

function languageListStruct() 
{
    var languageCode;		// C, P, J, Y
    var languageCodeLabel;  // c, cpp, java, py
    var languageReference;  // 기타 필요한것
}

function makeLanguageCodeToMap(className) {
	var count = 0;
	$(className).each(function() {
		languageList[count] = new languageListStruct();
		languageList[count].languageCode = $(this).attr('id');
		languageList[count].languageCodeLabel = $(this).attr('name');
		languageList[count].languageReference = $(this).attr('value');

		count++;
     });
}

//J,C,P,Y to java, c, cpp, py. label은 commcCode 의 ref2값
function selectLanguageCodeToLabel(code) {
	for (var i = 0; i < languageList.length; i++){
		if (languageList[i].languageCode == code)
		{					
			return languageList[i].languageCodeLabel;
		}
	}		
	return null;
	
}

//java, c, cpp, py to J,C,P,Y
function selectLanguageLabelToCode(label) {
	
	for (var i = 0; i < languageList.length; i++){
		if (languageList[i].languageCodeLabel == label)
		{					
			return languageList[i].languageCode;
		}
	}		
	return null;
}

//J,C,P,Y to Reference
function selectLanguageLabelToReference(langMode) {
		
	for (var i = 0; i < languageList.length; i++) {
		if (languageList[i].languageCode == langMode ||
				languageList[i].languageCodeLabel == langMode)
		{	
			return languageList[i].languageReference;
		}
	}
	return "text/plain";
}